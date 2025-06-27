type ButtonType = {
  classname: string | null | undefined;
  onClick: () => void;
  value: string | undefined;
  children: React.ReactNode | undefined;
};

export default function Button({
  classname,
  onClick,
  value,
  children,
}: ButtonType) {
  return (
    <button
      className={`p-[50px] text-6xl border-none outline-none bg-transparent text-text_color ${classname}`}
      onClick={() => onClick()}
      value={value}
    >
      {children}
    </button>
  );
}
