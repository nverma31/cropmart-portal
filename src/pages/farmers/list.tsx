import { List, useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const FarmerList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 50 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "district", headerName: "District", flex: 1 },
        { field: "state", headerName: "State", flex: 1 },
        { field: "landHolding", headerName: "Land Holding", type: "number", width: 150 },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
