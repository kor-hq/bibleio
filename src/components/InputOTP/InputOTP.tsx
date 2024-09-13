import { OTPInput, SlotProps, OTPInputProps } from 'input-otp';
import React from 'react';

export type InputOTPProps = OTPInputProps;
export const InputOTP = ({ maxLength = 6, ...props }: OTPInputProps) => {
  return (
    // @ts-expect-error idk
    <OTPInput
      {...props}
      maxLength={maxLength}
      containerClassName="group flex w-fit h-fit items-center has-[:disabled]:opacity-33 has-[:disabled]:cursor-not-allowed border border-stroke rounded-12 overflow-clip"
      render={({ slots }) => (
        <div className="flex">
          {slots.map((slot, idx) => (
            <Slot key={idx} {...slot} />
          ))}
        </div>
      )}
    />
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative flex h-[40px] w-32 items-center justify-center border-r border-stroke bg-fg-2 p-12 text-text shadow-material-component last:border-none ${{ 'border-accent-reversed': props.isActive }}`}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <Caret />}
    </div>
  );
}

function Caret() {
  return (
    <div className="pointer-events-none absolute inset-0 flex h-[80%] animate-caret-blink items-end justify-center">
      <div className="h-2 w-12 rounded-full bg-accent-reversed" />
    </div>
  );
}
