import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput,
  DateInput, CheckboxGroupInput, TextField } from "react-admin";


const AdopEdit = (props) => {
  return ( 
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm> 
        <h1>SOLICITUD DE ADOPCION</h1>
        <br></br><br></br>
        <h3>Camperito</h3>
        <TextField  source="nameDog"  fullWidth />
        <br></br>
        <h3>Adoptante (nombre y apellido)</h3>
        <TextField  source="nameUser"  fullWidt />
        <br></br>
        <h3>User:</h3>
        <TextField source="email" label="e-mail" fullWidth />
        <br/>
        <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />
        <TextInput source="phone" label="Teléfono" fullWidth />
        <TextInput source="location" label="Domicilio" fullWidth />
        <TextInput source="area" label="Localidad" fullWidth />
        <TextInput source="people" label="Personas en la casa" fullWidth />
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
        <TextInput source="reason" label="Método de castración. O explicar negativa"  fullWidth />
        <SelectInput source="vaccinated" labelpublic="¿Están vacunados?" choices={[
            { id: 'si', name: 'si' },
            { id: 'no', name: 'no' },
        ]} />
        <TextInput source="events" label="Tuvo otros animales? ¿Qué pasó con ellos?"  fullWidth />
        <TextInput source="holidays" label="Ante las vacaciones..."  fullWidth />
        <TextInput source="babies" label="Ante un embarazo..."  fullWidth />
        <TextInput source="allergies" label="Ante alergias..."  fullWidth />
        <CheckboxGroupInput source="items" label="Interés por el animal" choices={[
            { id: 'defensa', name: 'defensa' },
            { id: 'compañia', name: 'compañia' },
            { id: 'guardia', name: 'guardia' },
            { id: 'caza', name: 'caza' },
            { id: 'deporte y aire libre', name: 'deporte y aire libre' },
            { id: 'otros', name: 'otros' },
        ]} />
        <CheckboxGroupInput source="home" label="Donde vivirá?" choices={[
            { id: 'departamento', name: 'departamento' },
            { id: 'ph', name: 'ph' },
            { id: 'casa', name: 'casa' },
            { id: 'casa en barrio cerrado', name: 'casa en barrio cerrado' },
            { id: 'quinta', name: 'quinta' },
            { id: 'campo', name: 'campo' },
            { id: 'otros', name: 'otros' },
        ]} />
        <CheckboxGroupInput source="freshAir" label="Espacio al aire libre?" choices={[
            { id: 'balcón', name: 'balcón' },
            { id: 'patio', name: 'patio' },
            { id: 'terraza', name: 'terraza' },
            { id: 'parque', name: 'parque' },
            { id: 'otros', name: 'otros' },
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
