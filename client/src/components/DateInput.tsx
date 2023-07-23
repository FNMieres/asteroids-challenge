interface DateInputProps {
  value: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
}

function DateInput({ value, id, label, onChange }: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} value={value} onChange={handleChange} />
    </div>
  );
}

export default DateInput;
