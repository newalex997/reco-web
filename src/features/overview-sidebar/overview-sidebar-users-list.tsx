import { AppUserType } from "../../types/app.type";
import { OverviewSidebarUser } from "./overview-sidebar-user";

type OverviewSidebarUsersListProps = {
  list: AppUserType[];
};

export const OverviewSidebarUsersList = ({
  list,
}: OverviewSidebarUsersListProps) => {
  if (!list.length) {
    return <div>0 users available</div>;
  }

  return (
    <div className="sidebar-users-list-wrap">
      {list.map((user) => (
        <OverviewSidebarUser {...user} key={user.id} />
      ))}
    </div>
  );
};
