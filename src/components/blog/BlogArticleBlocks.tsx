import type { BlogBlock } from "@/data/blog";

export function BlogArticleBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 leading-relaxed text-sm text-zinc-800">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2 key={index} className="mt-6 text-xl font-bold text-zinc-900">
              {block.text}
            </h2>
          );
        }

        if (block.kind === "ul") {
          return (
            <ul key={index} className="list-inside list-disc space-y-2">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.kind === "ol") {
          return (
            <ol key={index} className="list-inside list-decimal space-y-2">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.kind === "table") {
          return (
            <div key={index} className="overflow-x-auto rounded-2xl border">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                {block.caption ? (
                  <caption className="border-b bg-emerald-50 px-4 py-3 text-left font-semibold text-zinc-800">
                    {block.caption}
                  </caption>
                ) : null}
                <thead>
                  <tr className="bg-zinc-50">
                    {block.headers.map((header) => (
                      <th key={header} className="px-4 py-3 font-semibold text-zinc-700">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-zinc-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
