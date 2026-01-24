import { Edit } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { HttpError } from "@refinedev/core";

export const IntermediaryEdit = () => {
    const {
        saveButtonProps,
        register,
        setError,
        formState: { errors },
    } = useForm({
        refineCoreProps: {
            onMutationError: (error: HttpError) => {
                if (error.statusCode === 409) {
                    setError("phone", {
                        type: "manual",
                        message: "An intermediary with this phone number already exists",
                    });
                }
            },
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("phone", {
                        required: "This field is required",
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message as string}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Phone"
                    name="phone"
                    required
                />
                <TextField
                    {...register("name")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Name"
                    name="name"
                />
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

