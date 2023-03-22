"use client";

import { useOpenFiles } from "@/hooks/useOpenFiles";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { explorerFiles } from "../Explorer";
import { CloseFileButton } from "./CloseFileButton";

export function OpenFilesTabs() {
  const { openFiles } = useOpenFiles();
  const pathName = usePathname();

  return (
    <div className="tabs h-9 text-transparent text-sm flex flex-row justify-between overflow-auto">
      <div className="flex flex-row">
        {openFiles?.map((openFile, index) => {
          const isActive = pathName === openFile;

          const file = explorerFiles[openFile];

          if (!file) {
            return <></>;
          }

          return (
            <div
              key={index}
              data-active={isActive}
              className="h-full flex items-center gap-[6px] pl-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:border-t-[1px] data-[active=true]:border-t-purple-400 data-[active=true]:text-white"
            >
              <Link href={openFile} className="flex gap-[6px] items-center ">
                <span className="text-white">{file.icon}</span>
                <span
                  data-active={isActive}
                  className="text-[#908caa] data-[active=true]:text-[#e0def4] "
                >
                  {file.title}
                </span>
              </Link>
              <span className="w-7 flex items-center">
                <CloseFileButton isActive={isActive} index={index} />
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-full flex items-center hover:bg-[#817c9c26] text-[#908caa] mr-20 p-40 rounded-lg cursor-pointer">
        {/* <DropdownMenu.Root>
          <DropdownMenu.Trigger aria-label="Opções">
            <MenuButton icon={User} />
          </DropdownMenu.Trigger> */}
        <strong className="font-medium text-xs">
          <MoreHorizontal size={16} strokeWidth={1.5} />
        </strong>
      </div>
    </div>
  );
}
