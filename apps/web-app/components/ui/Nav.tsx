"use client";

import { IconBookmarks, IconSearch, IconTextSize } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type React from "react";
import { useTextFormattingMenuStore } from "../textFormattingMenuStore";

const Nav: React.FC = () => {
	const { toggleMenu, isTextFormattingMenuOpen } = useTextFormattingMenuStore();
	const pathname = usePathname();
	return (
		<nav className="bg-light-fg-1 sticky top-0 flex justify-between items-center px-32 py-12 border border-b-black">
			<a href="/">
				<Image
					src={"/brand/logo-light.svg"}
					className="component-hover-effect"
					alt="Bibleio"
					height={32}
					width={57.04}
				/>
			</a>
			<div className="flex gap-36 w-fit h-fit items-center">
				<a href="/" className={pathname === "/" ? "strong-body" : "body"}>
					Home
				</a>
				<a
					href="/bible"
					className={pathname === "/bible" ? "strong-body" : "body"}
				>
					Bible
				</a>
				<IconBookmarks />
				<button
					type="button"
					onClick={toggleMenu}
					className="flex flex-col w-fit group"
				>
					<IconTextSize
						className={`hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 duration-200 ease-out ${
							isTextFormattingMenuOpen && "text-light-accent-navy"
						}`}
					/>
				</button>
				<IconSearch />
			</div>
		</nav>
	);
};

export default Nav;
