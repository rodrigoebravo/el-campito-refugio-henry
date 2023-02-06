import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  DateInput,
  SimpleShowLayout,
  TextField,
  ImageInput,
  ImageField,
  SelectInput
} from "react-admin";

import { Grid } from "@mui/material";

const PressEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
    <div>
      <SimpleShowLayout>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              source="media"
              label={false}
              sx={{ fontSize: "h3.fontSize", fontWeight: "light" }}
            />
            <br></br>
            <TextField
              source="title"
              label={false}
              sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
            />
            <br></br>
            <TextField
              label={false}
              source="date"
              sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
            />
            <br></br>
            <TextField
              label={false}
              source="type"
              sx={{ fontSize: "h6.fontSize", fontWeight: "light" }}
            />
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <ImageField
              source="img.src" 
              sx={{
                "& img.src": {
                  maxWidth: 1000,
                  maxHeight: 1000,
                  objectFit: "contain",
                },
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </SimpleShowLayout>
      <TabbedForm>
        <FormTab label="Medio">
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <TextInput source="media" label="Medio" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <SelectInput
                source="type"
                label="Soporte"
                choices={[
                  { id: "Prensa Gráfica", name: "Prensa Gráfica" },
                  { id: "Televisión / Audiovisual", name: "Televisión / Audiovisual" },
                  { id: "Radio / Audio", name: "Radio / Audio" },
                  { id: "Artistas Amigos", name: "Artistas Amigos" },
                ]}
                
              />
            </Grid>
            <Grid item xs={3}>
              <DateInput source="date" label="Fecha" fullWidth />
            </Grid>
            <Grid item xs={9}>
              <TextInput source="link" label="Link" fullWidth />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label="Cuerpo">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextInput source="title" label="Titular" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                source="description"
                label="Descripción"
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab label="Multimedia">
          <ImageInput source="img" label="Fotografía" >
              <ImageField source="src"  />
          </ImageInput>
        </FormTab>
      </TabbedForm>
      </div>
    </Edit>
  );
};

export default PressEdit;
