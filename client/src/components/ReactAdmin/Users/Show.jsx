import { Show, SimpleShowLayout, TextField } from "react-admin";

const DogShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="data.name"
          label="Nombre"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.age"
          label="Edad"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.email"
          label="Email"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.roles"
          label="Rol"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default DogShow;
