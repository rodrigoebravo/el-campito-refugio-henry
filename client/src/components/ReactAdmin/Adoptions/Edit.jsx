import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput,
  DateInput, CheckboxGroupInput } from "react-admin";

const convertStringToNumber = value => {
   const float = parseFloat(value);
   return isNaN(float) ? null : float;
};

const AdopEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <TextInput source="dog" label="Camperito" fullWidth />
        <TextInput source="name" label="Adoptante (nombre y apellido)" fullWidth />
        <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />
        <TextInput source="email" label="e-mail" fullWidth />
        <TextInput source="telephone" label="Teléfono" fullWidth />
        <TextInput source="location" label="Domicilio" fullWidth />
        <TextInput source="area" label="Localidad" fullWidth />
        <TextInput source="peoples" label="Personas en la casa" fullWidth />
        <SelectInput source="accordance" labelpublic="Conformidad de los integrantes" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
            { id: 'tal vez', name: 'tal vez' },
        ]} />
        <TextInput source="description" label="Composición del Núcleo Familiar"  fullWidth />
        <SelectInput source="otherAnimals" labelpublic="Otros animales" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
        ]} />
        <TextInput source="expatiate" label="¿Cuantos? Amplía"  fullWidth />
        <SelectInput source="castrated" labelpublic="¿Están castrados?" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
        ]} />
        <TextInput source="reason" label="Castración. O explicar negativa"  fullWidth />
        <SelectInput source="vaccinated" labelpublic="¿Están vacunados?" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
        ]} />
        <TextInput source="events" label="Otros animales? ¿Qué pasó con ellos?"  fullWidth />
        <TextInput source="holidays" label="Ante las vacaciones..."  fullWidth />
        <TextInput source="babies" label="Ante un embarazo..."  fullWidth />
        <TextInput source="allergies" label="Ante alergias..."  fullWidth />
        <CheckboxGroupInput source="items" label="Interés por el animal" choices={[
            { id: 'u000', name: 'defensa' },
            { id: 'u001', name: 'compañia' },
            { id: 'u002', name: 'guardia' },
            { id: 'u003', name: 'caza' },
            { id: 'u004', name: 'deporte y aire libre' },
            { id: 'u005', name: 'otros' },
        ]} />
        <CheckboxGroupInput source="home" label="Donde vivirá?" choices={[
            { id: 'u000', name: 'departamento' },
            { id: 'u001', name: 'ph' },
            { id: 'u002', name: 'casa' },
            { id: 'u003', name: 'casa en barrio cerrado' },
            { id: 'u004', name: 'quinta' },
            { id: 'u005', name: 'campo' },
            { id: 'u006', name: 'otros' },
        ]} />
        <CheckboxGroupInput source="freshAir" label="Espacio al aire libre?" choices={[
            { id: 'u000', name: 'balcón' },
            { id: 'u001', name: 'patio' },
            { id: 'u002', name: 'terraza' },
            { id: 'u003', name: 'parque' },
            { id: 'u006', name: 'otros' },
        ]} />
        <SelectInput source="status" labelpublic="¿Alquila o es propietario?" choices={[
            { id: 'propietario', name: 'propietario' },
            { id: 'alquilo', name: 'alquilo' },
        ]} />
        <SelectInput source="authorization" labelpublic="Autorización para tener animales" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
            { id: 'tal vez', name: 'tal vez' },
        ]} />
        <TextInput source="sleep" label="¿Dónde dormirá el adoptado?"  fullWidth />
        <TextInput source="loneliness" label="¿Estará solo? ¿Cuánto tiempo?"  fullWidth />
        <TextInput source="walk" label="¿Quién lo paseará? ¿Cuántas veces al día?"  fullWidth />
        <TextInput source="moving" label="En caso de mudarse..."  fullWidth />
        <SelectInput source="adaptation" labelpublic="¿Están de acuerdo en tener un tiempo de adaptación?" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
            { id: 'tal vez', name: 'tal vez' },
        ]} />
        <TextInput source="sterilization" label="¿Qué piensa de la esterilización?" fullWidth />
        <BooleanInput label="Pendiente" source="isPending" />
      

      </SimpleForm>
    </Edit>
  );
};

export default AdopEdit;
