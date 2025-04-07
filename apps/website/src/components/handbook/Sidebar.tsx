import type { CollectionEntry } from "astro:content";
import { ListItem } from "@bibleio/design";

interface Props {
	imageCategory?: string;
	pagesByCategory: Record<string, CollectionEntry<"handbook">[]>;
	pathname: string;
}

export function HandbookSidebar({
	imageCategory,
	pagesByCategory,
	pathname,
}: Props) {
	return (
		<div
			id="sidebar"
			className="flex sticky top-96 flex-col gap-20 w-[16rem] self-start
    max-[600px]:relative max-[600px]:p-24 max-[600px]:w-full max-[600px]:top-0 max-[600px]:bg-fg-1 backdrop-blur-popup max-[600px]:border-stroke max-[600px]:border max-[600px]:rounded-16"
		>
			<img
				className="rounded-8 border border-stroke aspect-[2/3] w-[8.75rem] h-auto max-[600px]:hidden"
				alt={"handbook cover"}
				width={280}
				height={420}
				src={
					imageCategory === "organization"
						? "/handbook/handbook-org.png"
						: imageCategory === "community"
							? "/handbook/handbook-community.png"
							: imageCategory === "design"
								? "/handbook/handbook-design.png"
								: imageCategory === "engineering"
									? "/handbook/handbook-engineering.png"
									: "/handbook/handbook-org.png"
				}
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
	);
}
