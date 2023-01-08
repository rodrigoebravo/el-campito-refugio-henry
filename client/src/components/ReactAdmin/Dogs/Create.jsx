import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  SelectInput,
  BooleanInput,
  CheckboxGroupInput,
  ImageField,
} from "react-admin";
import { Grid } from "@mui/material";

const valida = (values) => {
  const errors = {};
  if (!values.name) errors.name = "required";
  if (!values.age) errors.age = "required";
  if (!values.size) errors.size = "required";
  if (!values.gender) errors.gender = "required";
  if (!values.race) errors.race = "required";
  if (!values.references) errors.references = "required";
  if (!values.features) errors.features = "required";

  return errors;
};

const DogsCreate = (props) => {
  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm validate={valida} warnWhenUnsavedChanges>
        <TextInput source="name" label="Nombre" fullWidth />
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <SelectInput
              source="gender"
              label="Sexo"
              choices={[
                { id: "hembra", name: "hembra" },
                { id: "macho", name: "macho" },
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <SelectInput
              source="size"
              label="Tamaño"
              choices={[
                { id: "chico", name: "chico" },
                { id: "mediano", name: "mediano" },
                { id: "grande", name: "grande" },
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <SelectInput
              source="age"
              label="Edad"
              choices={[
                { id: "adulto", name: "adulto" },
                { id: "adulto jóven", name: "adulto jóven" },
                { id: "viejito", name: "viejito" },
                { id: "cachorro", name: "cachorro" },
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput source="race" label="Raza" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <CheckboxGroupInput
              source="references"
              label={false}
              choices={[
                { id: "Se lleva con perros", name: "Se lleva con perros" },
                { id: "Se lleva con hembras", name: "Se lleva con hembras" },
                { id: "Cuidados especiales", name: "Cuidados especiales" },
                { id: "Discapacitado", name: "Discapacitado" },
                { id: "Carácter especial", name: "Carácter especial" },
              ]}
            />
          </Grid>
          <Grid item xs={2}>
            <BooleanInput label="¿ Se puede apadrinar ?" source="isSponsored" />
          </Grid>
          <Grid item xs={2}>
            <BooleanInput label="¿ Se puede adoptar ?" source="toAdopt" />
          </Grid>
        </Grid>
        <TextInput source="features" label="Caracteristicas" fullWidth />
        <ImageInput source="images" label="Fotografías" multiple>
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="video" label="url del video en YouTube" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default DogsCreate;
