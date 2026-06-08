import { NavLink } from "react-router";

function Logo() {
  return (
    <NavLink to="/" end>
      <img
        src="/img/logo.svg"
        alt="logo"
        width="183"
        height="36"
        fetchPriority="high"
      />
    </NavLink>
  );
}

export default Logo;
