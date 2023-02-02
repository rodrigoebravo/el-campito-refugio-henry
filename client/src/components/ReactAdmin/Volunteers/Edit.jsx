import {
  Edit,
  TabbedForm,
  SimpleShowLayout,
  FormTab,
  TextField,
  ImageField,
  BooleanInput,
  DateField,
  TextInput,
} from "react-admin";
import { Grid } from "@mui/material";

const VoluntShow = () => {
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
                source="email"
                sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
              />
              <br></br>
              <DateField
                label={false}
                source="date"
                sx={{ fontWeight: "light" }}
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
          <FormTab label="Informacion general">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <h5>Profesión</h5>
                <TextField
                  source="profession"
                  sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Modalidad</h5>
                <TextField
                  source="modality"
                  sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={12}>
                <h5>Interes en ser voluntario</h5>
                <TextField
                  source="purpose"
                  label={false}
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  source="description"
                  label={false}
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  source="question"
                  label={false}
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Disponibilidad">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <h5>Localidad</h5>
                <TextInput source="area" label={false} fullWidth />
              </Grid>
              <Grid item lg={3}>
                <h5>Direccion</h5>
                <TextInput source="location" label={false} fullWidth />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={4}>
                <h5>Disponibilidad</h5>
                <TextInput source="clarification" label={false} fullWidth />
              </Grid>
              <Grid item lg={3}>
                <h5>Dias de la semana</h5>
                <TextInput source="days" fullWidth />
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Movilidad">
            <Grid container spacing={3}>
              <Grid item lg={2}>
                <BooleanInput
                  source="vehicle"
                  label="Vehiculo"
                  sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <BooleanInput
                  source="carpooling"
                  label="Puede hacer carpooling"
                  sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Estado">
            <BooleanInput
              source="isPending"
              label="Estado del voluntariado: PENDIENTE"
              sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
            />
         
          </FormTab>
        </TabbedForm>
      </>
    </Edit>
  );
};

export default VoluntShow;
