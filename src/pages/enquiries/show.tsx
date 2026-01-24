import { Show } from "@refinedev/mui";
import { Typography, Stack, Button, Box, Chip, Grid, Divider } from "@mui/material";
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
            <Stack gap={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">General Information</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Typography variant="body1" fontWeight="bold">ID</Typography>
                                <Typography variant="body2">{record?.id}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="body1" fontWeight="bold">Status</Typography>
                                <Chip
                                    label={record?.status}
                                    color={record?.status === "APPROVED" ? "success" : record?.status === "REJECTED" ? "error" : "primary"}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="body1" fontWeight="bold">Date</Typography>
                                <Typography variant="body2">{record?.enquiryDate || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant="body1" fontWeight="bold">KA Linked ID</Typography>
                                <Typography variant="body2">{record?.kaLinkedId || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">Farmer</Typography>
                                <Typography variant="body2">{record?.farmer?.user?.name || `Farmer #${record?.farmerId}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">KA Inventory Entry</Typography>
                                <Typography variant="body2">{record?.kaInventoryEntry || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">Product</Typography>
                                <Typography variant="body2">{record?.product || record?.productType || "N/A"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">Transaction Details</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">Qty (MT)</Typography>
                                <Typography variant="body2">{record?.quantityMt || "0.00"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">Rate/MT</Typography>
                                <Typography variant="body2">{record?.ratePerMt || "0.00"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">CD %</Typography>
                                <Typography variant="body2">{record?.cashDiscountPercentage || "0"}%</Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">GST %</Typography>
                                <Typography variant="body2">{record?.gstPercentage || "0"}%</Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">Finance %</Typography>
                                <Typography variant="body2">{record?.financePercentage || "0"}%</Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Typography variant="body1" fontWeight="bold">Purchase Days</Typography>
                                <Typography variant="body2">{record?.purchaseDays || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">Bag/Packing</Typography>
                                <Typography variant="body2">{record?.bagPacking || "N/A"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">Location & Conditions</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">Location</Typography>
                                <Typography variant="body2">{record?.location || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">State</Typography>
                                <Typography variant="body2">{record?.state || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" fontWeight="bold">Pickup Location</Typography>
                                <Typography variant="body2">{record?.pickupLocation || "N/A"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">Purchase Conditions</Typography>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{record?.purchaseConditions || "None"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">Payment Conditions</Typography>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{record?.paymentConditions || "None"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">Quality Control</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">QC Parameters (Buyer's)</Typography>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{record?.qcParametersBuyer || "None"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">QC Parameters (Farmer)</Typography>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{record?.qcParametersFarmer || "None"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">System Info</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">General Notes</Typography>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{record?.notes || "No notes provided"}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" fontWeight="bold">Record Created At</Typography>
                                <Typography variant="body2">{record?.createdAt ? new Date(record.createdAt).toLocaleString() : ""}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Stack direction="row" gap={2} mt={3}>
                    <Button variant="contained" color="primary" onClick={() => handleStatusChange("PROCESSING")}>Mark Processing</Button>
                    <Button variant="contained" color="success" onClick={() => handleStatusChange("APPROVED")}>Approve</Button>
                    <Button variant="contained" color="error" onClick={() => handleStatusChange("REJECTED")}>Reject</Button>
                </Stack>
            </Stack>
        </Show>
    );
};
