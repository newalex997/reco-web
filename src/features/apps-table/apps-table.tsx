import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { OverviewSidebar } from "../overview-sidebar";
import { AppListItemType } from "../../types/app.type";
import { useGetAllAppsQuery } from "../../store";
import "./apps-table.styles.css";
import { AvatarImage } from "../../components";

export const AppsTable = () => {
  const [selectedRow, setSelectedRow] = useState<AppListItemType>();
  const { data, isLoading } = useGetAllAppsQuery();

  const clearSelectedRow = () => {
    setSelectedRow(undefined);
  };

  const columns: GridColDef<AppListItemType>[] = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell(params) {
        return (
          <div className="table-name-field-cell">
            <AvatarImage
              src={params.row.logos.app}
              fallbackSrc="https://cdn-icons-png.flaticon.com/512/2833/2833637.png"
              alt="app logo picture"
            />
            <h5>{params.row.name}</h5>
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 250,
    },
    {
      field: "connector",
      headerName: "Connector",
      renderCell(params) {
        return (
          <div className="table-name-field-cell">
            <AvatarImage
              src={params.row.logos.connector}
              fallbackSrc="https://cdn-icons-png.flaticon.com/512/2833/2833637.png"
              alt="app logo picture"
            />
          </div>
        );
      },
    },
  ];

  if (isLoading || !data) {
    return <div>...loading</div>;
  }

  return (
    <div className="apps-table">
      <h3>App inventory</h3>

      <DataGrid
        rows={data}
        getRowId={(row) => row.appId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25, 50]}
        disableRowSelectionOnClick
        onRowClick={(params) => {
          setSelectedRow(params.row);
        }}
      />
      <OverviewSidebar
        open={!!selectedRow}
        onClose={clearSelectedRow}
        selectedRow={selectedRow}
      />
    </div>
  );
};
