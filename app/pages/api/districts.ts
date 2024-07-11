import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://getparticipantscountbyzone-z6r2mciapa-uc.a.run.app/"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const districtData = await response.json();
    res.status(200).json(districtData);
  } catch (error) {
    console.error("Error fetching district data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
