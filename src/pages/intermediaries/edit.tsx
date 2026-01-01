import { Edit } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const IntermediaryEdit = () => {
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
                    {...register("businessName")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Business Name"
                    name="businessName"
                />
                <TextField
                    {...register("businessType")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Business Type"
                    name="businessType"
                />
                <TextField
                    {...register("gstNumber")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="GST Number"
                    name="gstNumber"
                />
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
            </Box>
        </Edit>
    );
};
