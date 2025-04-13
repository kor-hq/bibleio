import { Bible, Circle, Cross, Logo } from "@bibleio/design";

export function FocusesSection() {
	return (
		<div className="p-48 rounded-16 border border-stroke flex justify-between items-center overflow-clip relative">
			<div className="grid grid-rows-4 w-[30%] gap-16">
				<div className="rounded-16 border border-stroke bg-fg-1 p-16 flex flex-col gap-6 backdrop-blur-popup">
					<h4 className="text-mono font-mono text-accent-reversed">Design</h4>
					<p className="text-body leading-[200%]">
						Consistent beautiful design sytem and intuitive app designs.
					</p>
				</div>
				<div className="rounded-16 border border-stroke bg-fg-1 p-16 flex flex-col gap-6 backdrop-blur-popup">
					<h4 className="text-mono font-mono text-accent-reversed">
						Customizablity
					</h4>
					<p className="text-body leading-[200%]">
						Make Bibleio yours, customize and share your Bible and resources.
					</p>
				</div>
				<div className="rounded-16 border border-stroke bg-fg-1 p-16 flex flex-col gap-6 backdrop-blur-popup">
					<h4 className="text-mono font-mono text-accent-reversed">
						Performance & Security
					</h4>
					<p className="text-body leading-[200%]">
						Blazingly fast performance with secure user managment.
					</p>
				</div>
				<div className="rounded-16 border border-stroke bg-fg-1 p-16 flex flex-col gap-6 backdrop-blur-popup">
					<h4 className="text-mono font-mono text-accent-reversed">
						Innovation & Freedom
					</h4>
					<p className="text-body leading-[200%]">
						Let’s change the world of Bible software.
					</p>
				</div>
			</div>

			<div className="mr-200 size-[5rem] backdrop-blur-popup rounded-full bg-fg-1 border border-stroke flex items-center justify-center">
				<Logo size={38} />
			</div>

			<svg
				fill="none"
				className="absolute top-0 left-0 w-full h-full -z-50"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="80%"
					y1="308.473"
					x2="25%"
					y2="107.473"
					className="stroke stroke-stroke"
				/>
				<line
					x1="80%"
					y1="308.497"
					x2="25%"
					y2="241.497"
					className="stroke stroke-stroke"
				/>
				<line
					x1="80%"
					y1="308.497"
					x2="25%"
					y2="375.497"
					className="stroke stroke-stroke"
				/>
				<line
					x1="80%"
					y1="308.473"
					x2="25%"
					y2="512.473"
					className="stroke stroke-stroke"
				/>
			</svg>

			<div className="absolute -z-50 -right-64 flex flex-col gap-72 items-center">
				<Bible />
				<Circle />
				<Cross />
			</div>
		</div>
	);
}
