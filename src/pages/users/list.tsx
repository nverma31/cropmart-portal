import { List, useDataGrid, DateField, EmailField } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const UserList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 50 },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "role", headerName: "Role", flex: 1 },
        { field: "isActive", headerName: "Active", type: "boolean", width: 100 },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
