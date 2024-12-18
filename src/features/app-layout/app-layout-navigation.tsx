import { AvatarImage } from "../../components";

export const AppLayoutNavigation = () => {
  return (
    <div className="layout-navigation">
      <div className="inner">
        <div className="logo">Reco</div>
        <nav>
          <a className="active">Apps</a>
          <a>Data</a>
        </nav>
        <div className="settings">
          <AvatarImage
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428 "
            fallbackSrc="https://static.thenounproject.com/png/583402-200.png"
            alt="profile picture"
          />
          <h5>Security-Demo 2</h5>
        </div>
      </div>
    </div>
  );
};
