import { OTPInput, SlotProps, OTPInputProps } from 'input-otp';
import React from 'react';

export type InputOTPProps = OTPInputProps;
export const InputOTP = ({ ...props }: OTPInputProps) => {
  return (
    // @ts-expect-error idk
    <OTPInput
      {...props}
      maxLength={6}
      containerClassName="group flex w-fit h-fit items-center has-[:disabled]:opacity-30 divide-x divide-light-stroke border border-light-stroke rounded-12 overflow-clip"
      render={({ slots }) => (
        <>
          {slots.map((slot, idx) => (
            <Slot key={idx} {...slot} />
          ))}
        </>
      )}
    />
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative flex h-[40px] w-32 items-center justify-center bg-light-fg-2 p-12 text-light-text shadow-light-material-component`}
    >
      {props.char !== null && <div>{props.char}</div>}
      <FakeCaret />
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="animate-caret-blink pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="w-px h-8 bg-black" />
    </div>
  );
}
