import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: "Terminal",
};

// const markdown = `
// # General

// Currently I'm using the combo Fish + Starship in my terminal.

// Fish Shell: https://fishshell.com/
// Starship: https://starship.rs/

// ---

// I'm also using Warp as my terminal emulator.

// Warp: https://www.warp.dev/

// ---

// For the theme, I chose Rosé Pine Moon variant: 

// Theme: https://github.com/austintraver/warp-theme/blob/main/base16_rose_pine_moon.yaml
// `.trim();

export default async function General() {
  const { terminal_general } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(terminal_general)

  const highlighter = await shiki.getHighlighter({
    theme: process.env.NEXT_PUBLIC_EDITOR_THEME,
  });

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />;
}
