import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,

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
     <SimpleForm>
        <h1>ADHESION AL VOLUNTARIADO</h1>
        <br></br><br></br>
        <h3>User:</h3>
        <TextField source="email" label="e-mail" fullWidth />
        <br/>
        <TextInput source="name" label="Voluntario" fullWidth />
        <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />        
        <TextInput source="phone" label="Teléfono" fullWidth />
        <TextInput source="location" label="Domicilio" fullWidth />
        <TextInput source="area" label="Localidad" fullWidth />
        <TextInput source="profession" label="Profesión" fullWidth />
        <TextInput
          source="interest"
          label="Área de interés en particular para trabajar en el refugio"
          fullWidth
        />
        <SelectInput
          source="modality"
          labelpublic="Modalidad"
          choices={[
            { id: "presencial", name: "presencial" },
            { id: "virtual", name: "virtual" },
            { id: "hibrido", name: "hibrido" },
          ]}
        />
        <TextInput
          source="availability"
          label="Tiempo dispone (horas a la semana)"
          type="number"
          parse={convertStringToNumber}
          fullWidth
        />

        <CheckboxGroupInput source="days" label="Días disponibles" choices={[
            { id: 'lunes', name: 'lunes' },
            { id: 'martes', name: 'martes' },
            { id: 'miércoles', name: 'miércoles' },
            { id: 'jueves', name: 'jueves' },
            { id: 'viernes', name: 'viernes' },
            { id: 'sábado', name: 'sábado' },
        ]} />
        <TextInput source="clarification" label="aclaración sobre disponibilidad" fullWidth />
        <TextInput source="description" label="Que puede sumar" fullWidth />
        <TextInput
          source="purpose"
          label="Por que querés ser voluntario"
          fullWidth
        />
        <SelectInput
          source="vehicle"
          labelpublic="Vehículo propio"
          choices={[
            { id: "si", name: "si" },
            { id: "no", name: "no" },
          ]}
        />
        <SelectInput
          source="carpooling"
          labelpublic="Carpooling"
          choices={[
            { id: "si", name: "si" },
            { id: "no", name: "no" },
            { id: "tal vez", name: "tal vez" },
          ]}
        />
        <TextInput source="question" label="Comentarios" fullWidth />
        <BooleanInput label="Pendiente" source="isPending" />
      </SimpleForm>

    </Edit>
  );
};

export default VoluntShow;
