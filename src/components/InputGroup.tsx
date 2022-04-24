import React from 'react';
import { UseFormRegister } from 'react-hook-form';

const InputGroup = React.forwardRef<
  HTMLInputElement,
  { children: React.ReactNode; type: string; error?: boolean } & ReturnType<UseFormRegister<any>>
>(({ onChange, onBlur, name, children, type, error = false }, ref) => (
  <div
    className={`
      relative h-[56px] border-2 rounded z-10 
      ${error && 'border-b-error'}`}>
    <input
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder=" "
      name={name}
      className="auth-input block h-full w-full pt-[25px] px-3 pb-[10px] appearance-none focus:outline-none bg-transparent"
    />
    <label
      htmlFor={name}
      className="absolute top-2/4 left-3 text-grey-text -translate-y-1/2 -z-1 duration-300 origin-0">
      {children}
    </label>
  </div>
));

InputGroup.displayName = 'InputGroup';

export default InputGroup;
