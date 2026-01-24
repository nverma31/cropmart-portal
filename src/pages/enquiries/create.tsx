import { Create, useAutocomplete } from "@refinedev/mui";
import { Box, TextField, MenuItem, Grid, Typography, Divider } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const EnquiryCreate = () => {
    const {
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm();

    const { autocompleteProps: farmerAutocompleteProps } = useAutocomplete({
        resource: "farmers",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">General Information</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("farmerId", { required: "Required" })}
                            error={!!errors.farmerId}
                            helperText={errors.farmerId?.message as string}
                            margin="normal"
                            fullWidth
                            label="Farmer ID"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("enquiryDate")}
                            margin="normal"
                            fullWidth
                            label="Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            {...register("kaInventoryEntry")}
                            margin="normal"
                            fullWidth
                            label="KA Inventory Entry"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            {...register("kaLinkedId")}
                            margin="normal"
                            fullWidth
                            label="KA Linked ID"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            {...register("product")}
                            margin="normal"
                            fullWidth
                            label="Product"
                        />
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <Typography variant="h6">Transaction Details</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("quantityMt", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="Qty (MT)"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("ratePerMt", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="Rate/MT"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("cashDiscountPercentage", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="CD %"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("gstPercentage", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="GST %"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("financePercentage", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="Finance %"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("bagPacking")}
                            margin="normal"
                            fullWidth
                            label="Bag/Packing"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            {...register("purchaseDays", { valueAsNumber: true })}
                            margin="normal"
                            fullWidth
                            label="Purchase Days (Completion)"
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <Typography variant="h6">Location & Conditions</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("location")}
                            margin="normal"
                            fullWidth
                            label="Location"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("state")}
                            margin="normal"
                            fullWidth
                            label="State"
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            {...register("pickupLocation")}
                            margin="normal"
                            fullWidth
                            label="Pickup Location"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("purchaseConditions")}
                            margin="normal"
                            fullWidth
                            label="Purchase Conditions"
                            multiline
                            rows={3}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("paymentConditions")}
                            margin="normal"
                            fullWidth
                            label="Payment Conditions"
                            multiline
                            rows={3}
                        />
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <Typography variant="h6">QC Parameters</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("qcParametersBuyer")}
                            margin="normal"
                            fullWidth
                            label="QC Parameters (Buyer's)"
                            multiline
                            rows={3}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            {...register("qcParametersFarmer")}
                            margin="normal"
                            fullWidth
                            label="QC Parameters (Farmer)"
                            multiline
                            rows={3}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            {...register("notes")}
                            margin="normal"
                            fullWidth
                            label="General Notes"
                            multiline
                            rows={2}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Create>
    );
};


