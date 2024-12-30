import React, { forwardRef } from "react";

type Props = {
  title: string;
  isTextArea?: boolean;
  placeHolder?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const buttonStyle = "bg-gray-300 w-full px-4 py-2 rounded-lg";

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ title, isTextArea = false, placeHolder, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-2 my-3">
        <label htmlFor="" className="uppercase text-gray-700 font-bold">
          {title}
        </label>
        {!isTextArea ? (
          <input
            {...props}
            ref={ref as React.Ref<HTMLInputElement>}
            className={buttonStyle}
            placeholder={placeHolder}
          />
        ) : (
          <textarea
            {...props}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={buttonStyle}
            placeholder={placeHolder}
          />
        )}
      </div>
    );
  }
);

export default InputField;
