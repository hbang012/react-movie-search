export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  className,
  children,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {children ? (
        children
      ) : (
        // 빈칸, 줄바꿈 그대로 보이게
        <span className="whitespace-pre-wrap">{label}</span>
      )}
    </label>
  );
}
