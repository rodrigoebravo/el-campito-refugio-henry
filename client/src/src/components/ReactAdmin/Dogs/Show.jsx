import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  WrapperField,
} from "react-admin";

const DogsShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField
          source="name"
          label="Nombre"
          sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="gender"
          label="Sexo"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="size"
          label="Tamaño"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="race"
          label="Raza"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField source="features" label="Características" fullWidth />
        <TextField source="references"  label="Referencias" fullWidth />
        <WrapperField fullWidth>          
          <ImageField source="images[0]" src="" title="perrito" />
          <ImageField source="images[1]" src="" title="perrito" />
          <ImageField source="images[2]" src="" title="perrito" />
        </WrapperField>
      </SimpleShowLayout>
    </Show>
  );
};

export default DogsShow;
