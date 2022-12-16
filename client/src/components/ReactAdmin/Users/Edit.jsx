import { Edit, SimpleForm, TextInput, ImageInput, SelectInput,
  ImageField } from "react-admin";

const convertStringToNumber = value => {
   const float = parseFloat(value);
   return isNaN(float) ? null : float;
};

const PostEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
      <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="age" label="Edad" type="number" parse={convertStringToNumber} fullWidth />
        <TextInput source="pass" label="Contraseña" fullWidth />
        <SelectInput source="roles" labelpublic="Rol" choices={[
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
    </Edit>
  );
};

export default PostEdit;
