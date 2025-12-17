import { CustomLink } from "./customLink";
import Typography from "./ui/typography";

export const Navigation = () => {
  return (
    <aside className="flex h-full flex-col gap-4 overflow-y-auto border-r border-border/60 bg-secondary/40 px-4 py-6">
      <Typography
        variant={"h1"}
        className="text-left text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800"
      >
        TanStack Router
      </Typography>
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <CustomLink className="w-full justify-start" to="/">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink className="w-full justify-start" to="/profile">
              {({ isActive }) => <>Profile {isActive && "~"}</>}
            </CustomLink>
          </li>
          <li>
            <CustomLink className="w-full justify-start" to="/pokemon">
              Pokemons
            </CustomLink>
          </li>
          <li>
            <CustomLink className="w-full justify-start" to="/search">
              Search
            </CustomLink>
          </li>
          <li>
            <CustomLink className="w-full justify-start" to="/login">
              Login
            </CustomLink>
          </li>
          <li>
            <CustomLink className="w-full justify-start" to="/dashboard">
              Dashboard
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="w-full justify-start"
              to="/layouts/visibleLayout"
            >
              Layouts
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className="w-full justify-start"
              to="/steps"
              search={{ username: "Leonardo" }}
            >
              Steps
            </CustomLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
