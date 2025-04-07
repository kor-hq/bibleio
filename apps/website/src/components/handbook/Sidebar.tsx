import type { CollectionEntry } from "astro:content";
import { ListItem } from "@bibleio/design";

interface Props {
	category?: string;
	pagesByCategory: Record<string, CollectionEntry<"handbook">[]>;
	pathname: string;
}

export function HandbookSidebar({
	category,
	pagesByCategory,
	pathname,
}: Props) {
	const imageType = () => {
		switch (category) {
			case "organization":
				return "/handbook/handbook-org.png";
			case "community":
				return "/handbook/handbook-community.png";
			case "design":
				return "/handbook/handbook-design.png";
			case "engineering":
				return "/handbook/handbook-engineering.png";
			default:
				return "/handbook/handbook-org.png";
		}
	};

	// TO DO
	// remove development/preview warning from 2nd line, make part of 1st line
	// fix spacing with floating sidebar (all mobile)
	// make the floating sidebar popup chat

	return (
		<>
			<div
				id="sidebar"
				className="flex sticky top-96 flex-col gap-20 w-[16rem] self-start max-[600px]:hidden"
			>
				<img
					className="rounded-8 border border-stroke aspect-[2/3] w-[8.75rem] h-auto max-[600px]:hidden"
					alt={"handbook cover"}
					width={280}
					height={420}
					src={imageType()}
				/>
				<h2 className="text-h2 max-[600px]:hidden">Handbook</h2>
				{Object.entries(pagesByCategory).map(([category, pages]) => (
					<div key={category} className="flex flex-col gap-0 w-full">
						<div className="flex pb-6">
							<p className="text-body text-text opacity-75 capitalize">
								{category}
							</p>
						</div>
						<div className="flex flex-col gap-0">
							{pages.map((page) => (
								<a key={page.data.title} href={`/handbook/${page.id}`}>
									<ListItem
										text={page.data.title}
										selected={
											pathname.endsWith(page.id) ||
											pathname.endsWith(`${page.id}/`)
										}
									/>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="bg-fg-1 flex sticky top-[7rem] backdrop-blur-popup shadow-popup z-40 items-center gap-8 border border-stroke rounded-16 min-[600px]:hidden px-12 py-6">
				<img
					className="rounded-[0.2rem] aspect-[2/3] w-auto h-[2rem]"
					alt={"handbook cover"}
					width={280}
					height={420}
					src={imageType()}
				/>
				<p className="text-text capitalize">{category}</p>
			</div>
		</>
	);
}
