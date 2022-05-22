import type { NextApiRequest, NextApiResponse } from "next"
import { withSentry } from "@sentry/nextjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "Akilesh" });
};

export default withSentry(handler);