import { Cross, Bible, Star, Hexagon, Circle } from "../ui/Shapes";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useRef } from "react";

export default function Landing() {
  return (
    <ParallaxProvider>
      <section
        id="landing"
        className="h-[94vh] p-32 max-[480px]:p-16 flex flex-col gap-24 justify-end items-start relative overflow-clip border-b border-light-stroke"
      >
        <h1 className="italic text-[384px] max-[1280px]:text-[128px] max-[480px]:text-[92px] leading-none text-light-text">
          Bibleio
        </h1>
        <p className="text-body leading-none text-light-text">
          Innovating the industry of Bible technology.
        </p>
        <Parallax speed={-100} className="absolute w-full h-full -z-50">
          <img
            src="/shapes/circle.svg"
            className="fill-light-blue stroke-1 stroke-light-stroke size-[23vmax] absolute bottom-[57%] left-[40%] max-[700px]:bottom-[80%] max-[450px]:left-[20%]"
          />
          <img
            src="/shapes/cross.svg"
            className="fill-light-yellow stroke-1 stroke-light-stroke size-[30vmax] absolute left-[50%] top-[50%] max-[700px]:top-[25%] max-[450px]:left-[30%]"
          />
          <img
            src="/shapes/bible.svg"
            className="fill-light-gray stroke-1 stroke-light-stroke size-[27vmax] absolute bottom-[50%] max-[700px]:bottom-[60%] max-[700px]:right-[75%] max-[450px]:right-[85%]"
          />
          <img
            src="/shapes/hexagon.svg"
            className="fill-light-purple stroke-1 stroke-light-stroke size-[29vmax] absolute top-[60%] left-[80%]"
          />
          <img
            src="/shapes/star.svg"
            className="fill-light-green stroke-1 stroke-light-stroke size-[27vmax] absolute bottom-[50%] left-[70%] max-[700px]:left-[85%] max-[700px]:bottom-[70%]"
          />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
