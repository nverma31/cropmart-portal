import { List, useDataGrid, DateField } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const EnquiryList = () => {
    const { dataGridProps } = useDataGrid();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", width: 50 },
        { field: "status", headerName: "Status", width: 120 },
        {
            field: "createdAt", headerName: "Created At", width: 200, renderCell: function render({ value }) {
                return <DateField value={value} />;
            }
        },
    ];

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
