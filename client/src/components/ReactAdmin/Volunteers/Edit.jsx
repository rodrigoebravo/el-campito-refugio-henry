import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput,
  DateInput, CheckboxGroupInput } from "react-admin";

const convertStringToNumber = value => {
   const float = parseFloat(value);
   return isNaN(float) ? null : float;
};

const VoluntEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <TextInput source="name" label="Voluntario" fullWidth />
        <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />
        <TextInput source="email" label="e-mail" fullWidth />
        <TextInput source="phone" label="Teléfono" fullWidth />
        <TextInput source="location" label="Domicilio" fullWidth />
        <TextInput source="area" label="Localidad" fullWidth />
        <TextInput source="profession" label="Profesión" fullWidth />
        <TextInput source="interest" label="Área de interés en particular para trabajar en el refugio" fullWidth />
        <SelectInput source="modality" labelpublic="Modalidad" choices={[
            { id: 'presencial', name: 'presencial' },
            { id: 'virtual', name: 'virtual' },
            { id: 'hibrido', name: 'hibrido' },
        ]} />
        <TextInput source="availability" label="Tiempo dispone (horas a la semana)" type="number" parse={convertStringToNumber} fullWidth />

        <CheckboxGroupInput source="days" label="Días disponibles" choices={[
            { id: 'u000', name: 'lunes' },
            { id: 'u001', name: 'martes' },
            { id: 'u002', name: 'miércoles' },
            { id: 'u003', name: 'jueves' },
            { id: 'u004', name: 'viernes' },
            { id: 'u005', name: 'sábado' },
        ]} />
        <TextInput source="clarification" label="aclaración sobre disponibilidad" fullWidth />
        <TextInput source="description" label="Que puede sumar" fullWidth />
        <TextInput source="purpose" label="Por que querés ser voluntario" fullWidth />
        <SelectInput source="vehicle" labelpublic="Vehículo propio" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
        ]} />
        <SelectInput source="carpooling" labelpublic="Carpooling" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
            { id: 'tal vez', name: 'tal vez' },
        ]} />
        <TextInput source="question" label="Comentarios" fullWidth />
        <BooleanInput label="Pendiente" source="isPending" />
      

      </SimpleForm>
    </Edit>
  );
};

export default VoluntEdit;
