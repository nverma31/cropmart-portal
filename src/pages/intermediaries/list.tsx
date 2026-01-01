import { List, useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const IntermediaryList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 50 },
        { field: "businessName", headerName: "Business Name", flex: 1 },
        { field: "businessType", headerName: "Type", flex: 1 },
        { field: "gstNumber", headerName: "GST", flex: 1 },
        { field: "district", headerName: "District", flex: 1 },
        { field: "state", headerName: "State", flex: 1 },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
