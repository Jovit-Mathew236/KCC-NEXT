"use client";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { db, auth, storage } from "../../firebase/config";
import Image from "next/image";
import { Trash2 } from "lucide-react";
interface ImageData {
  id: string;
  url: string;
}
const AdminDashboard = () => {
  const router = useRouter();
  const [upcomingFiles, setUpcomingFiles] = useState<FileList | null>(null);
  const [ongoingFiles, setOngoingFiles] = useState<FileList | null>(null);
  const [upcomingImages, setUpcomingImages] = useState<ImageData[]>([]);
  const [ongoingImages, setOngoingImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const checkAuthStatus = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/signin");
      }
    });

    loadImages();
    return () => {
      checkAuthStatus();
    };
  }, [router]);

  const loadImages = async () => {
    const querySnapshot = await getDocs(collection(db, "images"));
    const upcoming: ImageData[] = [];
    const ongoing: ImageData[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.eventType === "upcoming") {
        upcoming.push({ id: doc.id, url: data.url });
      } else {
        ongoing.push({ id: doc.id, url: data.url });
      }
    });
    setUpcomingImages(upcoming);
    setOngoingImages(ongoing);
  };
  const handleUpload = (eventType: string) => {
    const files = eventType === "upcoming" ? upcomingFiles : ongoingFiles;
    if (files) {
      let completedUploads = 0;
      Array.from(files).forEach((file) => {
        const storageRef = ref(storage, `${eventType}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          null,
          (error) => console.error("Upload failed:", error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              saveImageToFirestore(downloadURL, eventType).then(() => {
                completedUploads += 1;
                if (completedUploads === files.length) {
                  if (eventType === "upcoming") {
                    setUpcomingFiles(null);
                  } else {
                    setOngoingFiles(null);
                  }
                }
              });
            });
          }
        );
      });
    }
  };

  const saveImageToFirestore = async (url: string, eventType: string) => {
    try {
      await addDoc(collection(db, "images"), { url, eventType });
      loadImages();
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handlePreview = (eventType: string, files: FileList) => {
    if (eventType === "upcoming") {
      setUpcomingFiles(files);
    } else {
      setOngoingFiles(files);
    }
  };

  const handleDelete = async (docId: string, url: string) => {
    try {
      await deleteDoc(doc(db, "images", docId));
      const storageRef = ref(storage, url);
      await deleteObject(storageRef);
      loadImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      className="bg-gray-900 text-white bg-cover"
      style={{ backgroundImage: "url(./assets/bg.webp)" }}
    >
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#E3223B]">Admin Dashboard</h1>
          <button onClick={signOutUser} className="btn px-4 py-2 rounded">
            Sign Out
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6 text-[#E3223B]">
          Admin Dashboard
        </h2>

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 bg-opacity-70 backdrop-blur-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
            <h3 className="text-xl font-semibold mb-2">
              Upload Upcoming Event Image
            </h3>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="upcomingImageUpload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 dark:bg-gray-700 dark:hover:border-gray-500 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="upcomingImageUpload"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => handlePreview("upcoming", e.target.files!)}
                />
              </label>
            </div>
            <div
              id="upcomingImagePreview"
              className="mt-4 w-full flex flex-wrap"
            >
              {upcomingFiles &&
                Array.from(upcomingFiles).map((file, index) => (
                  <Image
                    key={index}
                    width={500}
                    height={500}
                    src={URL.createObjectURL(file)}
                    alt="new image"
                    className="w-32 h-32 object-cover m-2 border border-gray-300 rounded"
                  />
                ))}
            </div>
            <button
              onClick={() => handleUpload("upcoming")}
              className="btn px-4 py-2 rounded mt-4"
            >
              Upload
            </button>
          </div>

          <div className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 bg-opacity-70 backdrop-blur-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
            <h3 className="text-xl font-semibold mb-2">
              Upload Ongoing Event Image
            </h3>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="ongoingImageUpload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 dark:bg-gray-700 border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="ongoingImageUpload"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => handlePreview("ongoing", e.target.files!)}
                />
              </label>
            </div>
            <div
              id="ongoingImagePreview"
              className="mt-4 w-full flex flex-wrap"
            >
              {ongoingFiles &&
                Array.from(ongoingFiles).map((file, index) => (
                  <Image
                    key={index}
                    width={500}
                    height={500}
                    src={URL.createObjectURL(file)}
                    alt="new image"
                    className="w-32 h-32 object-cover m-2 border border-gray-300 rounded"
                  />
                ))}
            </div>
            <button
              onClick={() => handleUpload("ongoing")}
              className="btn px-4 py-2 rounded mt-4"
            >
              Upload
            </button>
          </div>
        </div>

        <div className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 bg-opacity-70 backdrop-blur-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mt-4">
          <h3 className="text-xl font-semibold mb-2">Ongoing Events</h3>
          <div className="flex flex-wrap gap-4">
            {ongoingImages.map(({ id, url }) => (
              <div key={id} className="relative">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={url}
                  className="w-32 h-32 object-cover border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleDelete(id, url)}
                  className="absolute top-0 right-0 bg-white rounded-bl p-1 text-red-500"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 bg-opacity-70 backdrop-blur-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mt-4">
          <h3 className="text-xl font-semibold mb-2">Up Coming Events</h3>
          <div className="flex flex-wrap gap-4">
            {upcomingImages.map(({ id, url }) => (
              <div key={id} className="relative">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={url}
                  className="w-32 h-32 object-cover border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleDelete(id, url)}
                  className="absolute top-0 right-0 bg-white rounded-bl p-1 text-red-500"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
