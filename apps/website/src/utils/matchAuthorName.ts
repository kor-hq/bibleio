import { getCollection } from "astro:content";

const authors = await getCollection("team");

export function matchAuthorNames(names: string[]) {
	return names
		.map((username: string) => {
			const matchedAuthor = authors.find((author) => {
				return author.data.username === username;
			});
			return matchedAuthor ? matchedAuthor.data.name : "Unknown";
		})
		.join(", ");
}
