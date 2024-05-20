import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  component: Pokemon,
  loader: async ({ params }) => {
    if (isNaN(Number(params.id))) {
      alert("Invalid Pokemon ID");
      throw redirect({ to: "/pokemon" });
    }

    return await getPokemon(params.id);
  },
});

function Pokemon() {
  const { id } = Route.useParams();
  const pokemon = Route.useLoaderData();
  console.log(pokemon);
  return (
    <Card className="max-w-[300px]">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center justify-center">
          <Badge>{id}</Badge> {pokemon.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-[110px] items-center">
        <Avatar className="size-20">
          <AvatarImage src={pokemon.sprites.front_default} alt={pokemon.name} />
          <AvatarFallback>
            <Skeleton className="size-full" />
          </AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex flex-col gap-3 flex-1">
          <span>
            Height: <b>{pokemon.height / 10}</b>m
          </span>
          <Separator orientation="horizontal" />
          <span>
            Weight: <b>{pokemon.weight / 10}</b>kg
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
