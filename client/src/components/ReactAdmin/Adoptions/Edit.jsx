import {
  Edit,
  SimpleShowLayout,
  TabbedForm,
  FormTab,
  DateField,
  BooleanInput,
  TextField,
} from "react-admin";
import { Grid } from "@mui/material";

const AdopEdit = (props) => {
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
              <h1>Solicitud de adopcion</h1>
              <TextField
                label={false}
                source="nameDog"
                sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
              />
            </Grid>
          </Grid>
        </SimpleShowLayout>
        <TabbedForm>
          <FormTab label="Datos del adoptante">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <h5>Nombre</h5>
                <TextField
                  source="nameUser"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={2}>
                <h5>Fecha de nacimiento</h5>
                <DateField
                  source="birthday"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={2}>
                <h5>Localidad</h5>
                <TextField
                  source="area"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Direccion</h5>
                <TextField
                  source="location"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Correo electronico</h5>
                <TextField
                  source="email"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Numero de telefono</h5>
                <TextField
                  source="phone"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Datos de la vivienda">
            <Grid container spacing={3}>
              <Grid item lg={2}>
                <h5>Personas en la casa</h5>
                <TextField
                  source="people"
                  fullwidth
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Estan de acuerdo en adoptar?</h5>
                <TextField
                  source="accordance"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Estan vacunados?</h5>
                <TextField
                  source="vaccinated"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={6}>
                <h5>Composicion de la familia</h5>
                <TextField
                  source="description"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={1}>
              <Grid item lg={2}>
                <BooleanInput
                  disabled
                  source="otherAnimals"
                  label="Otros animales?"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={2}>
                <h5>Cuantos? Explicacion</h5>
                <TextField
                  source="expatiate"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={2}>
                <h5>Estan castrados?</h5>
                <TextField
                  source="castrated"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={3}>
                <h5>Metodo de castracion / Explicacion de negativa</h5>
                <TextField
                  source="reason"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>

              <Grid item lg={3}>
                <h5>Tuvo otros animales? Que paso con ellos?</h5>
                <TextField
                  source="events"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
          </FormTab>

          <FormTab label="Cuestionario de adopcion">
            <Grid container spacing={4}>
              <Grid item lg={5}>
                <h5>Ante las vacaciones</h5>
                <TextField
                  source="holidays"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Ante un embarazo</h5>
                <TextField
                  source="babies"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Ante alergias</h5>
                <TextField
                  source="allergies"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Interes por el animal</h5>
                <TextField
                  source="items"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Donde vivirá?</h5>
                <TextField
                  source="home"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Espacio al aire libre?</h5>
                <TextField
                  source="freshAir"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Alquila o es propietario?</h5>
                <TextField
                  source="status"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Autorización para tener animales</h5>
                <TextField
                  source="authorization"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>Dónde dormirá el adoptado?</h5>
                <TextField
                  source="sleep"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>¿Estará solo? ¿Cuánto tiempo?</h5>
                <TextField
                  source="loneliness"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>¿Quién lo paseará? ¿Cuántas veces al día?</h5>
                <TextField
                  source="walk"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>En caso de mudarse</h5>
                <TextField
                  source="moving"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>¿Están de acuerdo en tener un tiempo de adaptación?</h5>
                <TextField
                  source="adaptation"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
              <Grid item lg={5}>
                <h5>¿Qué piensa de la esterilización?</h5>
                <TextField
                  source="sterilization"
                  sx={{ fontSize: "h5.fontSize", fontWeight: "light" }}
                />
              </Grid>
            </Grid>
          </FormTab>
          
          <FormTab label="Estado de la solicitud">
            <BooleanInput
              source="isPending"
              label="Estado de la adopción: PENDIENTE"
              sx={{ fontSize: "h4.fontSize", fontWeight: "light" }}
            />         
          </FormTab>
          
        </TabbedForm>
      </>
    </Edit>
  );
};

export default AdopEdit;
