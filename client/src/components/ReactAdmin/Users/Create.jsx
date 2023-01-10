import { Create, SimpleForm, TextInput, ImageInput, SelectArrayInput,
   ImageField, DateInput } from "react-admin";

// const convertStringToNumber = value => {
//     const float = parseFloat(value);
//     return isNaN(float) ? null : float;
// };
      

const UsersCreate = (props) => {
  return (
    <Create title={"Crear usuario"} {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="phone" label="Teléfono" fullWidth />
        <DateInput source="birthday" label="Fecha de Nacimiento" fullWidth />
        <TextInput source="pass" label="Contraseña" fullWidth />
        <SelectArrayInput source="roles" labelpublic="Rol" choices={[
            { id: 'public', name: 'public' },
            { id: 'superAdmin', name: 'superAdmin' },
            { id: 'admin', name: 'admin' },
            { id: 'voluntario', name: 'voluntario' },
            { id: 'equipo1', name: 'equipo1' },
            { id: 'equipo2', name: 'equipo2' },
            { id: 'equipo3', name: 'equipo3' },
            { id: 'visitante', name: 'visitante' },
            { id: 'donante', name: 'donante' },
            { id: 'padrino', name: 'padrino' },
            { id: 'sponsor', name: 'sponsor' },
            { id: 'adoptante', name: 'adoptante' },
        ]} />
        <ImageInput source="image" label="Fótografía" >
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};



export default UsersCreate;
