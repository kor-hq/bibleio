import { Cross, Bible, Star, Hexagon, Circle } from "../ui/Shapes";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Landing() {
  return (
    <ParallaxProvider>
      <section
        id="landing"
        className="h-[94vh] p-32 flex flex-col gap-24 justify-end items-start relative overflow-clip border-b border-light-stroke"
      >
        <h1 className="italic text-[384px] leading-none text-light-text">
          Bibleio
        </h1>
        <p className="text-body leading-none text-light-text">
          Innovating the industry of Bible technology.
        </p>
        <Parallax speed={-100} className="absolute w-full h-full -z-50">
          <div className="absolute bottom-[57%] left-[40%]">
            <Circle className="fill-light-blue stroke-1 stroke-light-stroke" />
          </div>
          <div className="absolute left-[50%] top-[50%]">
            <Cross className="fill-light-yellow stroke-1 stroke-light-stroke" />
          </div>
          <div className="absolute bottom-[50%]">
            <Bible className="fill-light-gray stroke-1 stroke-light-stroke" />
          </div>
          <div className="absolute top-[60%] left-[80%]">
            <Hexagon className="fill-light-purple stroke-1 stroke-light-stroke" />
          </div>
          <div className="absolute bottom-[50%] left-[70%]">
            <Star className="fill-light-green stroke-1 stroke-light-stroke" />
          </div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
