import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { zone } = req.query;

  if (!zone) {
    res.status(400).json({ message: "Zone parameter is required" });
    return;
  }

  try {
    const response = await fetch(
      `https://getparticipantscountbycampus-z6r2mciapa-uc.a.run.app/?zone=${zone}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const collegeData = await response.json();
    res.status(200).json(collegeData);
  } catch (error) {
    console.error("Error fetching college data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
