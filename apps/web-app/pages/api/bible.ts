import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const endpoint = req.query.endpoint as string;
	const apiUrl = `https://api.scripture.api.bible/v1${endpoint}`;

	try {
		const response = await fetch(apiUrl, {
			headers: {
				"api-key": process.env.API_KEY || "",
			},
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch data from ${apiUrl}`);
		}

		const data = await response.json();
		res.status(200).json(data);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(500).json({ error: error.message });
		} else {
			res.status(500).json({ error: "An unknown error occurred" });
		}
	}
}
