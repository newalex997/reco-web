import { AvatarImage } from "../../components";
import { AppUserType } from "../../types/app.type";

export const OverviewSidebarUser = ({ name, pic }: AppUserType) => {
  return (
    <div className="sidebar-users-list-item">
      <AvatarImage
        src={pic}
        fallbackSrc="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="user picture"
      />
      <h5>{name}</h5>
    </div>
  );
};
