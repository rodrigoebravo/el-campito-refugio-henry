import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title={"Crear usuario"} {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="age" label="Edad" fullWidth />
        <TextInput source="roles" label="Rol" fullWidth />
        <TextInput source="pass" label="Contraseña" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
