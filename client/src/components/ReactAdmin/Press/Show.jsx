import { Show, SimpleShowLayout, TextField } from "react-admin";

const PressShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="media"
          label="Medio"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="title"
          label="Título"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="date"
          label="fecha"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default PressShow;
