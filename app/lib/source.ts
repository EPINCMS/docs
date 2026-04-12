import { loader, type InferPageType } from "fumadocs-core/source";
import { docs } from "fumadocs-mdx:collections/server";
import * as icons from "lucide-react";
import { createElement } from "react";

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: "/docs",
  icon(iconName) {
    if (!iconName) return;
    if (iconName in icons)
      return createElement(icons[iconName as keyof typeof icons]);
  }
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
