import type { NextApiRequest, NextApiResponse } from "next"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "Akilesh" });
};

export default handler;