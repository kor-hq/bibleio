import { IconAlarm, IconMaximize } from "@tabler/icons-react";

export function ControlBar() {
  return (
    <div className="mb fixed bottom-20 flex h-[2.5rem] w-full max-w-[32rem] gap-4">
      <div className="rounded-4 border-stroke bg-fg-1 shadow-popup backdrop-blur-popup flex h-full w-full items-center justify-between overflow-clip border px-20 first:rounded-l-full last:rounded-r-full">
        <p className="text-body">Genesis 1</p>
        <p className="text-body">BSB</p>
        <div className="bg-accent absolute bottom-[-70%] left-0 -z-50 h-[2rem] w-[5rem] rounded-full opacity-50 blur-[1.5rem]" />
      </div>
      <div className="rounded-4 border-stroke bg-fg-1 shadow-popup backdrop-blur-popup flex h-full items-center gap-12 border px-20 first:rounded-l-full last:rounded-r-full">
        <IconAlarm stroke={1.5} className="text-text size-24" />
        <IconMaximize stroke={1.5} className="text-text size-24" />
      </div>
    </div>
  );
}
