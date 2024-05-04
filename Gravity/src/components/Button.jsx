import { Link } from "react-router-dom";

function Button({ type, children, to, onClick }) {
  const base = " text-stone-100 bg-stone-900 rounded hover:bg-stone-600";
  const data = {
    logo: base + " text-5xl p-6 tracking-widest hover:bg-stone-900",
    primary: base + " text-2xl px-4 ",
    secondary: base + " text-l px-2",
  };

  if (to)
    return (
      <Link to={to} className={data[type]} onClick={onClick}>
        {children}
      </Link>
    );
  if (type)
    return (
      <button className={data[type]} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
