import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: "Fish",
};

// const fishConfig = `if status is-interactive
// # Commands to run in interactive sessions can go here
// end

// set SPACEFISH_PROMPT_ADD_NEWLINE false

// starship init fish | source

// # Aliases
// # alias cat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"`;

export default async function FishConfig() {
  const { terminal_fish } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(terminal_fish)

  const highlighter = await shiki.getHighlighter({
    theme: process.env.NEXT_PUBLIC_EDITOR_THEME,
  });

  const code = highlighter.codeToHtml(content, { lang: 'fish' })

  return <CodePreview code={code} raw={content} />
}
