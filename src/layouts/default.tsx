import { BaseComponent } from "../types/components";
import { Sidebar } from "./sidebar";

export default function LayoutDefault({ children }: BaseComponent) {
  return (
    <div className="main-layout">
      <Sidebar />
      <div id="main-wrapper">{children}</div>
    </div>
  );
}
