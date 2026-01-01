import { Show } from "@refinedev/mui";
import { Typography, Stack, Button } from "@mui/material";
import { useShow, useCustomMutation } from "@refinedev/core";

export const EnquiryShow = () => {
    const { query } = useShow();
    const { data, isLoading } = query;

    const record = data?.data;

    const { mutate } = useCustomMutation();

    const handleStatusChange = (newStatus: string) => {
        if (!record) return;
        mutate({
            url: `enquiries/${record.id}/status`,
            method: "patch",
            values: { status: newStatus },
            successNotification: () => {
                return {
                    message: `Status updated to ${newStatus}`,
                    type: "success",
                };
            },
        });
    };

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    ID
                </Typography>
                <Typography variant="body2">{record?.id}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    Status
                </Typography>
                <Typography variant="body2">{record?.status}</Typography>

                <Stack direction="row" gap={2} mt={2}>
                    <Button variant="contained" color="primary" onClick={() => handleStatusChange("PROCESSING")}>Mark Processing</Button>
                    <Button variant="contained" color="success" onClick={() => handleStatusChange("APPROVED")}>Approve</Button>
                    <Button variant="contained" color="error" onClick={() => handleStatusChange("REJECTED")}>Reject</Button>
                </Stack>
            </Stack>
        </Show>
    );
};
