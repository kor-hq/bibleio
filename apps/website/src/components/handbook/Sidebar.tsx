import type { CollectionEntry } from "astro:content";
import { ListItem } from "@bibleio/design";
import { useState } from "react";

interface Props {
	category?: string;
	pagesByCategory: Record<string, CollectionEntry<"handbook">[]>;
	pathname: string;
}

const getImageType = (category: string | undefined): string => {
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

function HandbookSidebarContent({
	category,
	pagesByCategory,
	pathname,
}: Props) {
	return (
		<>
			<img
				className="rounded-8 border border-stroke aspect-[2/3] w-[8.75rem] h-auto max-[600px]:hidden"
				alt={"handbook cover"}
				width={280}
				height={420}
				src={getImageType(category)}
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
		</>
	);
}

export function HandbookSidebar({
	category,
	pagesByCategory,
	pathname,
}: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<div
				id="sidebar"
				className="flex sticky top-96 flex-col gap-20 w-[16rem] self-start max-[600px]:hidden"
			>
				<HandbookSidebarContent
					pagesByCategory={pagesByCategory}
					pathname={pathname}
					category={category}
				/>
			</div>
			<button
				type="button"
				className="bg-fg-1 flex sticky top-[6rem] backdrop-blur-popup shadow-popup z-40 items-center gap-8 border border-stroke rounded-16 min-[600px]:hidden px-12 py-6"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<img
					className="rounded-[0.2rem] aspect-[2/3] w-auto h-[2rem]"
					alt={"handbook cover"}
					width={280}
					height={420}
					src={getImageType(category)}
				/>
				<p className="text-text capitalize">{category}</p>
			</button>
			<div
				className={`bg-fg-1 sticky top-[9.625rem] h-fit pb-128 flex-col border backdrop-blur-popup shadow-popup border-stroke rounded-16 p-12 z-30 ${isOpen ? "flex motion-scale-in-95 motion-duration-150" : "hidden"}`}
			>
				<HandbookSidebarContent
					pagesByCategory={pagesByCategory}
					pathname={pathname}
					category={category}
				/>
			</div>
		</>
	);
}
