import { Edit, SimpleForm, TextInput } from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="age" label="Edad" fullWidth />
        <TextInput source="roles" label="Rol" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
