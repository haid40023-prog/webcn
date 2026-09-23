export function BlogTagList({
  tags,
  limit,
}: {
  tags: string[];
  limit?: number;
}) {
  const visible = typeof limit === "number" ? tags.slice(0, limit) : tags;
  if (visible.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Từ khóa">
      {visible.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
