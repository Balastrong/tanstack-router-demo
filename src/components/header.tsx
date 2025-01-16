import { CustomLink } from "./customLink";
import Typography from "./ui/typography";

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
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/profile">
            {({ isActive }) => <>Profile {isActive && "~"}</>}
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/pokemon">Pokemons</CustomLink>
        </li>
        <li>
          <CustomLink to="/search">Search</CustomLink>
        </li>
        <li>
          <CustomLink to="/login">Login</CustomLink>
        </li>
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
        <li>
          <CustomLink to="/layouts/visibleLayout">Layouts</CustomLink>
        </li>
        <li>
          <CustomLink to="/steps" search={{ username: "Leonardo" }}>
            Steps
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};
