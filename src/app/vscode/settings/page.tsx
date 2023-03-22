import { GistContent } from "@/components/GistContent";

export const metadata = {
  title: "VSCode Settings",
};

export default async function Settings() {
  return (
    /* @ts-expect-error Server Component */
    <GistContent gistUrl={process.env.NEXT_PUBLIC_GIST_VSCODE_SETTINGS_URL} />
  );
}
