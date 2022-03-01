import "./ButtonOption.css";

export default function ButtonOption({ Icon, title, color }) {
  return (
    <div className="buttonOption">
      {Icon && <Icon className="buttonOption__icon" style={{ color: color }} />}
      <span>{title}</span>
    </div>
  );
}
