import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.187,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
