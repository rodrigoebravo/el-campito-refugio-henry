import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title={"Crear usuario"} {...props}>
      <SimpleForm>
        <TextInput source="data.name" label="Nombre" fullWidth />
        <TextInput source="data.email" label="Email" fullWidth />
        <TextInput source="data.age" label="Edad" fullWidth />
        <TextInput source="data.roles" label="Rol" fullWidth />
        <TextInput source="data.pass" label="Contraseña" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
