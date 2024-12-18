export type AppUserType = {
  id: string;
  name: string;
  pic: string;
};

export type AppConnectorType = {
  name: string;
  logo: string;
};

export type AppListItemType = {
  name: string;
  appId: string;
  category: string;
  connector: string;
  logos: {
    app: string;
    connector: string;
  };
};

export type AppDetailedType = {
  appId: string;
  name: string;
  category: string;
  lastClassification: string;
  connector: AppConnectorType;
  logo: string;
  users: AppUserType[];
};
