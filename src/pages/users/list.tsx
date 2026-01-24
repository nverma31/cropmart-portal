import {
    List,
    useDataGrid,
    EditButton,
    DeleteButton,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack } from "@mui/material";

export const UserList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 70 },
        { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
        { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
        { field: "phone", headerName: "Phone", flex: 1, minWidth: 120 },
        { field: "role", headerName: "Role", flex: 1, minWidth: 100 },
        { field: "isActive", headerName: "Active", type: "boolean", width: 100 },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            renderCell: function render({ row }) {
                return (
                    <Stack direction="row" spacing={1}>
                        <EditButton hideText size="small" recordItemId={row.id} />
                        <DeleteButton hideText size="small" recordItemId={row.id} />
                    </Stack>
                );
            },
            align: "center",
            headerAlign: "center",
            minWidth: 120,
        },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};

