import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Landing({ children }: { children: React.ReactNode }) {
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
        <Parallax speed={-150} className="absolute w-full h-full -z-50">
          {children}
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
