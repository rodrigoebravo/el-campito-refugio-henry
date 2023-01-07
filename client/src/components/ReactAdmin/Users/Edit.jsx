import {
  Edit,
  TabbedForm,
  SimpleShowLayout,
  FormTab,
  TextField,
  ImageField,
  BooleanInput,
  DateField,
  NumberInput,
  SelectArrayInput,
  TextInput,
  ImageInput,
  DateInput,
} from "react-admin";
import { Grid } from "@mui/material";

const UsersEdit = () => {
  return (
    <Edit
      title={"Editar datos"}
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
                source="id"
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
                <h5>Fecha de nacimiento</h5>
                <DateInput source="birthday" fullWidth />
              </Grid>
              <Grid item lg={3}>
                <h5>Roles</h5>
                <SelectArrayInput
                  source="roles"
                  labelpublic="Rol"
                  fullWidth
                  choices={[
                    { id: "public", name: "public" },
                    { id: "superAdmin", name: "superAdmin" },
                    { id: "admin", name: "admin" },
                    { id: "voluntario", name: "voluntario" },
                    { id: "equipo1", name: "equipo1" },
                    { id: "equipo2", name: "equipo2" },
                    { id: "equipo3", name: "equipo3" },
                    { id: "visitante", name: "visitante" },
                    { id: "donante", name: "donante" },
                    { id: "padrino", name: "padrino" },
                    { id: "sponsor", name: "sponsor" },
                    { id: "adoptante", name: "adoptante" },
                  ]}
                />
              </Grid>
              <Grid item lg={10}>
                <h5>Imagen de perfil</h5>
                <ImageInput source="images" label={false} multiple>
                  <ImageField source="src" title="title" />
                </ImageInput>
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Datos de contacto">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <h5>Correo electronico</h5>
                <TextInput source="email" fullWidth />
              </Grid>
              <Grid item lg={3}>
                <h5>Numero de telefono</h5>
                <NumberInput fullWidth source="phone" />
              </Grid>
            </Grid>
          </FormTab>
        </TabbedForm>
      </>
    </Edit>
  );
};

export default UsersEdit;
