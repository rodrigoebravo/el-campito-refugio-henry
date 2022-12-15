import { Show, SimpleShowLayout, TextField } from "react-admin";

const DogShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="name"
          label="Nombre"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="age"
          label="Edad"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="email"
          label="Email"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="roles"
          label="Rol"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default DogShow;
