import { Show, SimpleShowLayout, TextField, ArrayField } from "react-admin";

const AdopShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
      <h1>SOLICITUD DE ADOPCION</h1>
        <br></br><br></br>
        <TextField source="nameDog" label="Camperito" fullWidth />   
        <br></br>    
        <TextField source="nameUser" label="Adoptante (nombre y apellido)"  fullWidt />
        <br></br>
        <TextField source="birthday" label="Fecha de Nacimiento" fullWidth />
        <br></br>
        <TextField source="email" label="e-mail" fullWidth />
        <br></br>
        <TextField source="phone" label="Teléfono" fullWidth />
        <br></br>
        <TextField source="location" label="Domicilio" fullWidth />
        <br></br>
        <TextField source="area" label="Localidad" fullWidth />
        <br></br>
        <TextField source="people" label="Personas en la casa" fullWidth />
        <br></br>
        <TextField source="accordance" labelpublic="Conformidad de los integrantes" fullWidth />
        <br></br>
        <TextField source="description" label="Composición del Núcleo Familiar"  fullWidth />
        <br></br>
        <TextField source="otherAnimals" labelpublic="Otros animales" fullWidth />
        <br></br>
        <TextField source="expatiate" label="¿Cuantos? Amplía"  fullWidth />
        <br></br>
        <TextField source="castrated" labelpublic="¿Están castrados?" />
        <br></br>
        <TextField source="reason" label="Método de castración. O explicar negativa"  fullWidth />
        <br></br>
        <TextField source="vaccinated" labelpublic="¿Están vacunados?" fullWidth />
        <br></br>
        <TextField source="events" label="Tuvo otros animales? ¿Qué pasó con ellos?"  fullWidth />
        <br></br>
        <TextField source="holidays" label="Ante las vacaciones..."  fullWidth />
        <br></br>
        <TextField source="babies" label="Ante un embarazo..."  fullWidth />
        <br></br>
        <TextField source="allergies" label="Ante alergias..."  fullWidth />
        <br></br>
        <ArrayField  source="items" label="Interés por el animal" fullWidth />
        <br></br>
        <ArrayField  source="home" label="Donde vivirá?" fullWidth />
        <br></br>
        <ArrayField  source="freshAir" label="Espacio al aire libre?" fullWidth>
          <TextField source="freshAir[0]"  />
        </ArrayField>
        <br></br>
        <TextField source="status" labelpublic="¿Alquila o es propietario?" fullWidth />
        <br></br>
        <TextField source="authorization" labelpublic="Autorización para tener animales" fullWidth />
        <br></br>
        <TextField source="sleep" label="¿Dónde dormirá el adoptado?"  fullWidth />
        <br></br>
        <TextField source="loneliness" label="¿Estará solo? ¿Cuánto tiempo?"  fullWidth />
        <br></br>
        <TextField source="walk" label="¿Quién lo paseará? ¿Cuántas veces al día?"  fullWidth />
        <br></br>
        <TextField source="moving" label="En caso de mudarse..."  fullWidth />
        <br></br>
        <TextField source="adaptation" labelpublic="¿Están de acuerdo en tener un tiempo de adaptación?" fullWidth />
        <br></br>
        <TextField source="sterilization" label="¿Qué piensa de la esterilización?" fullWidth />
        <br></br>
        <TextField label="Pendiente" source="isPending" />
      
      </SimpleShowLayout>
    </Show>
  );
};

export default AdopShow;
