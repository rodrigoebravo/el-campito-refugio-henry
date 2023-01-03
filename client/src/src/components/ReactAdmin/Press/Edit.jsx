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
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <ImageField
              source="img"
              title={false}
              sx={{
                "& img": {
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
          <Grid container spacing={3}>
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
          <ImageInput source="img" label={false}></ImageInput>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default PressEdit;
