import { formatDistance } from "date-fns";
import { useGetAppByIdQuery } from "../../store";
import { AppListItemType } from "../../types/app.type";
import { OverviewSidebarUsersList } from "./overview-sidebar-users-list";
import { AvatarImage } from "../../components";

export const OverviewSidebarContent = ({ appId }: AppListItemType) => {
  const { data, isLoading } = useGetAppByIdQuery(appId);

  if (isLoading || !data) {
    return <div>...loading</div>;
  }

  return (
    <div className="sidebar-content-wrap">
      <h3>App overview</h3>
      <div className="app-introduction">
        <AvatarImage
          src={data.logo}
          fallbackSrc="https://cdn-icons-png.flaticon.com/512/2815/2815428"
          alt="app logo picture"
        />
        <h5>{data.name}</h5>
      </div>

      <div className="app-details-container">
        <p>App name: {data.name}</p>
        <p>Category: {data.category}</p>
        <p>Users: {data.users.length}</p>
        <div className="contractor-logo">
          <p>Connector:</p>
          <AvatarImage
            src={data.logo}
            fallbackSrc="https://cdn-icons-png.flaticon.com/512/2815/2815428"
            alt="app logo picture"
          />
        </div>

        <p>
          Last classification:
          {formatDistance(new Date(data.lastClassification), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>

      <OverviewSidebarUsersList list={data.users} />
    </div>
  );
};
