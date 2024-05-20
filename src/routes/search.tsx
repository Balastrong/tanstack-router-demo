import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Typography from "@/components/ui/typography";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as v from "valibot";

const Category = v.union([
  v.literal("electronics"),
  v.literal("clothing"),
  v.literal("books"),
  v.literal("toys"),
]);

const ItemFilters = v.object({
  query: v.optional(v.string()),
  hasDiscount: v.optional(v.boolean()),
  categories: v.optional(v.array(Category)),
});

type ItemFilters = v.Output<typeof ItemFilters>;

export const Route = createFileRoute("/search")({
  validateSearch: (search) => v.parse(ItemFilters, search),
  component: Search,
});

function Search() {
  const { query, hasDiscount, categories } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  return (
    <div>
      <Typography variant={"h2"}>Search</Typography>
      <div className="flex gap-4 flex-col w-fit mb-4">
        <div>
          <Label>Query</Label>
          <Input
            value={query}
            onChange={(e) => {
              updateFilters("query", e.target.value);
            }}
            size={30}
          />
        </div>
        <div className="flex items-center gap-1">
          <Checkbox
            checked={hasDiscount}
            onCheckedChange={(checked) => updateFilters("hasDiscount", checked)}
            id="discount"
          />
          <Label htmlFor="discount" className="cursor-pointer">
            Has Discount
          </Label>
        </div>
        <div>
          <Label>Category</Label>
          <ToggleGroup
            type="multiple"
            value={categories}
            variant={"outline"}
            size={"sm"}
            onValueChange={(values) => updateFilters("categories", values)}
          >
            {["electronics", "clothing", "books", "toys"].map((category) => (
              <ToggleGroupItem value={category}>{category}</ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
}
