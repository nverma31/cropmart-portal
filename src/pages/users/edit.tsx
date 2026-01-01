import { Edit, useAutocomplete } from "@refinedev/mui";
import { Box, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const UserEdit = () => {
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
                    {...register("name", { required: "This field is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message as string}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Name"
                    name="name"
                />
                <TextField
                    {...register("email", { required: "This field is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message as string}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="email"
                    label="Email"
                    name="email"
                />
                <TextField
                    {...register("phone")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Phone"
                    name="phone"
                />
                <TextField
                    {...register("role")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Role"
                    name="role"
                />
                <FormControlLabel
                    control={<Checkbox {...register("isActive")} />}
                    label="Is Active"
                />
            </Box>
        </Edit>
    );
};
