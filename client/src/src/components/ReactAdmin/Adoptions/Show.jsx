import { Show, SimpleShowLayout, TextField } from "react-admin";

const AdopShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="name"
          label="Nombre"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="email"
          label="e-mail"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default AdopShow;
