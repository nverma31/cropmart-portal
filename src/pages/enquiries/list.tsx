import {
    List,
    useDataGrid,
    DateField,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack, Chip } from "@mui/material";

export const EnquiryList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 70 },
        {
            field: "status",
            headerName: "Status",
            width: 150,
            renderCell: function render({ value }) {
                let color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" = "default";
                switch (value) {
                    case "PENDING": color = "warning"; break;
                    case "PROCESSING": color = "info"; break;
                    case "APPROVED": color = "success"; break;
                    case "REJECTED": color = "error"; break;
                }
                return <Chip label={value} size="small" color={color} variant="outlined" />;
            }
        },
        {
            field: "quantity",
            headerName: "Quantity",
            width: 120,
            valueGetter: (_, row) => {
                return `${row.quantity} ${row.quantityUnit || ''}`;
            }
        },
        {
            field: "expectedPrice",
            headerName: "Expected Price",
            type: "number",
            width: 130,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 180,
            renderCell: function render({ value }) {
                return <DateField value={value} format="LLL" />;
            },
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

