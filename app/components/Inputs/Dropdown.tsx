interface DropdownProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  option: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  id,
  value,
  onChange,
  option,
}) => {
  return (
    <div className="w-full rounded-md border-neutral-200 border-2">
      <select
        name={name}
        id={id}
        className="w-[98%] py-4 px-3"
        value={value}
        onChange={onChange}
      >
        {option.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
