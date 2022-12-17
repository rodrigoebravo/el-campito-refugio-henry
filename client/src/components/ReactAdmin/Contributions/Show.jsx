import { Show, SimpleShowLayout, TextField } from "react-admin";

const ContribShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="name"
          label="Contribuyente"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="email"
          label="Email"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="type"
          label="Tipo de Contribución"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        
        
      </SimpleShowLayout>
    </Show>
  );
};

export default ContribShow;
