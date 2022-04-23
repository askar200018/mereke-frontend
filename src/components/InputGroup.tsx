type Props = {
  type: string;
  name: string;
  children: React.ReactNode;
};

const InputGroup: React.FunctionComponent<Props> = ({ type, name, children }) => (
  <div className="relative h-[56px] border-2 rounded mb-4 z-10">
    <input
      type={type}
      name={name}
      placeholder=" "
      className="auth-input block h-full w-full pt-[25px] px-3 pb-[10px] appearance-none focus:outline-none bg-transparent"
    />
    <label
      htmlFor={name}
      className="absolute top-2/4 left-3 text-grey-text -translate-y-1/2 -z-1 duration-300 origin-0">
      {children}
    </label>
  </div>
);

export default InputGroup;
