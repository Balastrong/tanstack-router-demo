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
      <h2>Search</h2>
      You searched for:{" "}
      <input
        value={query}
        onChange={(e) => {
          updateFilters("query", e.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={hasDiscount}
        onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
      />
      <select
        multiple
        onChange={(e) => {
          updateFilters(
            "categories",
            Array.from(e.target.selectedOptions, (option) => option.value)
          );
        }}
        value={categories}
      >
        {["electronics", "clothing", "books", "toys"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
}
