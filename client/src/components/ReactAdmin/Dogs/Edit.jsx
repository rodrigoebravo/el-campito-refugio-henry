import {
  Edit,
  TextInput,
  ImageInput,
  SelectInput,
  CheckboxGroupInput,
  ImageField,
  BooleanInput,
  SimpleShowLayout,
  TextField,
  TabbedForm,
  FormTab,
} from "react-admin";
import { Grid } from "@mui/material";

const DogsEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
      redirect={false}
    >
      <>
        <SimpleShowLayout>
          <Grid container spacing={3}>
            <Grid item lg={9}>
              <TextField
                source="name"
                label={false}
                sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
              />
              <br></br>
              <TextField
                label={false}
                source="_id"
                sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
              />
            </Grid>
            <Grid item lg={3} style={{ textAlign: "center" }}>
              <ImageField
                source="images[0].src"
                sx={{
                  "& img": {
                    maxWidth: 1000,
                    maxHeight: 1000,
                    objectFit: "contain",
                  },
                }}
              />
            </Grid>
          </Grid>
        </SimpleShowLayout>
        <TabbedForm>
          <FormTab label="Datos personales">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <TextInput source="name" label="Nombre" fullWidth />
              </Grid>
              <Grid item lg={2}>
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
              <Grid item lg={2}>
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
              <Grid item lg={2}>
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
              <Grid item lg={3}>
                <TextInput source="race" label="Raza" fullWidth />
              </Grid>
            </Grid>
          </FormTab>
          <FormTab label="Caracteristicas">
            <Grid container spacing={2}>
              <Grid item lg={7}>
                <CheckboxGroupInput
                  source="references"
                  label={false}
                  choices={[
                    { id: "a000", name: "Se lleva con perros" },
                    { id: "u001", name: "Se lleva con hembras	" },
                    { id: "u002", name: "Cuidados especiales	" },
                    { id: "u003", name: "Discapacitado" },
                    { id: "a004", name: "Carácter especial" },
                  ]}
                  fullWidth
                />
              </Grid>
              <Grid item lg={2}>
                <BooleanInput
                  label="¿ Se puede apadrinar ?"
                  source="isSponsored"
                />
              </Grid>
              <Grid item lg={2}>
                <BooleanInput label="¿ Se puede adoptar ?" source="toAdopt" />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg>
                <h4>Descripcion</h4>
                <TextInput source="features" label={false} fullWidth />
              </Grid>
              <Grid item lg={12}>
                <h4>Imagenes</h4>
                <ImageInput source="images" label={false} multiple>
                  <ImageField source="src" title="title" />
                </ImageInput>
              </Grid>
            </Grid>
          </FormTab>
        </TabbedForm>
      </>
    </Edit>
  );
};

export default DogsEdit;
