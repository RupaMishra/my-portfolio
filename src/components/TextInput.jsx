/* eslint-disable react/prop-types */
import { FormControl, Input } from "@mui/material";
import { Colors } from "../utils/constants";

const TextInput = ({ id, label }) => {
  return (
    <FormControl variant="standard" sx={{ my: 2 }} fullWidth>
      <label htmlFor={id} style={{ color: "#fff", fontSize: "12px" }}>
        {label}
      </label>
      <Input
        id={id}
        sx={{
          borderRadius: "4px",
          background: Colors.textField,
          py: 0.7,
          px: 0.4,
        }}
      />
    </FormControl>
  );
};

export default TextInput;
