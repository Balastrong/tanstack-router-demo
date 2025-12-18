import Typography from "@/components/ui/typography";
import { Link, createFileRoute } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: PokemonList,
  loader: getPokemonList,
});

function PokemonList() {
  const pokemons = Route.useLoaderData();
  return (
    <>
      <Typography variant={"h2"}>Pokemons</Typography>
      <ul className="list-disc list-inside">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              to={"/pokemon/$id"}
              className="text-blue-500"
              params={{ id: pokemon.id }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
