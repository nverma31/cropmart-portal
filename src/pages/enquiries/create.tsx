import { Create } from "@refinedev/mui";
import { Box, Typography } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const EnquiryCreate = () => {
    const {
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <Typography>Form fields would go here</Typography>
            </Box>
        </Create>
    );
};
