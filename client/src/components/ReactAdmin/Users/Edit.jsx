import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ReferenceArrayInput,
  ImageField,
  DateInput,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Grid } from "@mui/material";

const UsersEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
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
        <SimpleForm>
          <TextInput source="name" label="Nombre" fullWidth />
          <TextInput source="email" label="Email" fullWidth />
          <TextInput source="phone" label="Teléfono" fullWidth />
          <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />
          <TextInput source="pass" label="Contraseña" fullWidth />
          <ReferenceArrayInput
            source="roles"
            labelpublic="Rol"
            choices={{
              id: 1,
              tags: [
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
              ],
            }}
          />
          <ImageInput source="images" label="Fótografía">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleForm>
      </>
    </Edit>
  );
};

export default UsersEdit;
