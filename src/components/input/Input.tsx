type InputType = {
  placeholder: string | undefined;
  classname?: string | null | undefined;
  onChange: (val: string) => void;
};

export default function Input({ placeholder, classname, onChange }: InputType) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`p-[50px] text-2xl border-none outline-none bg-transparent text-text_color ${classname}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
