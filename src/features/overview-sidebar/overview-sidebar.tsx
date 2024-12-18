import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import { AppListItemType } from "../../types/app.type";
import { OverviewSidebarContent } from "./overview-sidebar-content";
import "./overview-sidebar.styles.css";

type OverviewSidebarProps = Pick<SwipeableDrawerProps, "open" | "onClose"> & {
  selectedRow?: AppListItemType;
};

export const OverviewSidebar = ({
  selectedRow,
  ...props
}: OverviewSidebarProps) => {
  return (
    <SwipeableDrawer
      className="drawer-wrap"
      anchor="right"
      onOpen={() => {}}
      {...props}
    >
      {selectedRow ? <OverviewSidebarContent {...selectedRow} /> : null}
    </SwipeableDrawer>
  );
};
