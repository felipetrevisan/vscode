import {
  MoreHorizontal,
} from "lucide-react";
import { SubMenu } from "./SubMenu";

export function Extensions() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between uppercase">
        Extensions
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="Installed">
          {/* <OpenFilesSubMenu /> */}
        </SubMenu>
      </nav>
    </div>
  );
}
