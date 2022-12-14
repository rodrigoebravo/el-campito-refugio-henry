import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  WrapperField,
} from "react-admin";

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
          source="data.gender"
          label="Sexo"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.size"
          label="Tamaño"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.race"
          label="Raza"
          fullWidth
          sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
        />
        <TextField
          source="data.features"
          multiline
          label="Descripción"
          fullWidth
        />
        <TextField
          source="data.references[0]"
          label="Caracteristicas"
          fullWidth
        />
        <WrapperField fullWidth>
          <ImageField source="data.images[0]" src="" title="perrito" />
          <ImageField source="data.images[1]" src="" title="perrito" />
          <ImageField source="data.images[2]" src="" title="perrito" />
        </WrapperField>
      </SimpleShowLayout>
    </Show>
  );
};

export default DogShow;
