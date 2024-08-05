import { Link } from "@tanstack/react-router";
import Typography from "./ui/typography";

const activeProps = {
  style: {
    color: "hsl(142.1 70.6% 45.3%)",
  },
};

const className = "font-bold text-muted-foreground mx-1";

export const Header = () => {
  return (
    <div className="p-4">
      <Typography
        variant={"h1"}
        className="text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800"
      >
        TanStack Router
      </Typography>
      <ul className="flex flex-wrap gap-1 justify-center">
        <li>
          <Link className={className} to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link className={className} to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive && "~"}</>}
          </Link>
        </li>
        <li>
          <Link className={className} to="/pokemon" activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link className={className} to="/search" activeProps={activeProps}>
            Search
          </Link>
        </li>
        <li>
          <Link className={className} to="/login" activeProps={activeProps}>
            Login
          </Link>
        </li>
        <li>
          <Link className={className} to="/dashboard" activeProps={activeProps}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={className}
            to="/layouts/visibleLayout"
            activeProps={activeProps}
          >
            Layouts
          </Link>
        </li>
        <li>
          <Link
            className={className}
            to="/steps"
            activeProps={activeProps}
            search={{ username: "Leonardo" }}
          >
            Steps
          </Link>
        </li>
      </ul>
    </div>
  );
};
