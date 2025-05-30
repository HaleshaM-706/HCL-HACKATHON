
type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={selected} onChange={handleChange} style={styles.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: "100%",
  },
};

export default Dropdown;
