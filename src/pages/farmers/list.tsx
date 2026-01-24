import {
    List,
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack } from "@mui/material";

export const FarmerList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 70 },
        { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
        { field: "phone", headerName: "Phone", flex: 1, minWidth: 120 },
        { field: "address", headerName: "Address", flex: 1, minWidth: 200 },
        { field: "district", headerName: "District", flex: 1, minWidth: 120 },
        { field: "state", headerName: "State", flex: 1, minWidth: 120 },
        {
            field: "landHolding",
            headerName: "Land Holding",
            type: "number",
            width: 120,
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            renderCell: function render({ row }) {
                return (
                    <Stack direction="row" spacing={1}>
                        <EditButton hideText size="small" recordItemId={row.id} />
                        <ShowButton hideText size="small" recordItemId={row.id} />
                        <DeleteButton hideText size="small" recordItemId={row.id} />
                    </Stack>
                );
            },
            align: "center",
            headerAlign: "center",
            minWidth: 150,
        },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};

