import { AppsTable } from "../apps-table";
import { AppLayoutNavigation } from "./app-layout-navigation";
import "./app-layout.styles.css";

export const AppLayout = () => {
  return (
    <>
      <AppLayoutNavigation />
      <main>
        <AppsTable />
      </main>
    </>
  );
};
