import { Edit } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const FarmerEdit = () => {
    const {
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("address")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Address"
                    name="address"
                />
                <TextField
                    {...register("district")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="District"
                    name="district"
                />
                <TextField
                    {...register("state")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="State"
                    name="state"
                />
                <TextField
                    {...register("pincode")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Pincode"
                    name="pincode"
                />
                <TextField
                    {...register("landHolding")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Land Holding"
                    name="landHolding"
                />
            </Box>
        </Edit>
    );
};
