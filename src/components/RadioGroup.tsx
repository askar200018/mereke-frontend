type Props = {
  name: string;
  value: string;
  children: React.ReactNode;
};

const RadioGroup: React.FunctionComponent<Props> = ({ name, children, value }) => {
  return (
    <label className="radio-group flex items-center space-x-2 cursor-pointer" htmlFor={name}>
      <input
        // {...register('weather')}
        className="form-radio"
        type="radio"
        name={name}
        value={value}
        id={value}
      />
      <span className="checkmark w-4 h-4 rounded-full border-2 border-grey-text"></span>
      <span className="text-base text-black-text">{children}</span>
    </label>
  );
};

export default RadioGroup;
