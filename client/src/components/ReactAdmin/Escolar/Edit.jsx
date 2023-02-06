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

const EscolarEdit = (props) => {
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
              source="category"
              sx={{ fontSize: "h6.fontSize", fontWeight: "light" }}
            />
            <TextField
              source="description"
              label={false}
              sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
            />
            <br></br>
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
        <FormTab label="Editar">
          <Grid container spacing={4}>
           
            <Grid item xs={4}>
              <SelectInput
                source="category"
                label="Categoria"
                choices={[
                  { id: "escolar", name: "escolar" },
                  { id: "talleres", name: "talleres" },
                  { id: "charlas", name: "charlas" },
                  { id: "capacitaciones", name: "capacitaciones" },
                ]}
                
              />
            </Grid>
            <Grid item xs={3}>
              <DateInput source="date" label="Fecha" fullWidth />
            </Grid>
            <Grid item xs={9}>
              <TextInput source="link" label="dirección URL" fullWidth />
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

export default EscolarEdit;
