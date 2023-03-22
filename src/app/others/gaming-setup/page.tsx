import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: "Gaming Setup",
};

// const markdown = `
// # Gaming Setup

// - Intel Core i5-9600KF 3.7Ghz
// - 2x HyperX Fury 16GB 3000Mhz
// - Gigabyte Z390M Gaming
// - Cooler Master ATX 500W 80 Plus
// - 2x Corsair SSD MP510 480GB NVMe
// - Gigabyte NVIDIA GeForce RTX 2060 6G


// ## Peripherals

// - Logitech G PRO Wireless Mouse
// - Keychron K2 Keyboard (Brown Switch)
// - Samsung 23.5" Curved 144hz 1ms Display

// That's it, nothing more.
// `.trim();

export default async function GamingSetup() {
  const { setup_gaming } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(setup_gaming)

  const highlighter = await shiki.getHighlighter({
    theme: process.env.NEXT_PUBLIC_EDITOR_THEME,
  });

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />;
}
