import { Edit } from "@refinedev/mui";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { useCustomMutation, useNotification, useNavigation } from "@refinedev/core";

export const EnquiryEdit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // @ts-expect-error queryResult is present in runtime but missing in type definition for this version
        refineCore: { queryResult, id },
    } = useForm();

    const { mutate } = useCustomMutation();
    const { open } = useNotification();
    const { list } = useNavigation();

    const enquiryData = queryResult?.data?.data;

    const onSave = (data: any) => {
        // Remove status key to ensure it's not sent, though the form field is disabled anyway
        const { status, ...payload } = data;

        mutate(
            {
                url: `enquiries/${id}`,
                method: "put",
                values: payload,
            },
            {
                onSuccess: () => {
                    open?.({
                        type: "success",
                        message: "Enquiry updated successfully",
                    });
                    list("enquiries");
                },
                onError: (error) => {
                    open?.({
                        type: "error",
                        message: error?.message || "Error updating enquiry",
                    });
                },
            },
        );
    };

    return (
        <Edit
            saveButtonProps={{
                onClick: handleSubmit(onSave),
            }}
        >
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("quantity", { valueAsNumber: true })}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Quantity"
                    name="quantity"
                    type="number"
                />
                <TextField
                    {...register("quantityUnit")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Quantity Unit"
                    name="quantityUnit"
                />
                <TextField
                    {...register("expectedPrice", { valueAsNumber: true })}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Expected Price"
                    name="expectedPrice"
                    type="number"
                />
                <TextField
                    {...register("notes")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Notes"
                    name="notes"
                    multiline
                    rows={4}
                />
                <TextField
                    {...register("status")}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Status"
                    name="status"
                    disabled
                />
            </Box>
        </Edit>
    );
};
