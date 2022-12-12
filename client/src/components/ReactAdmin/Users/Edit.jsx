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
        <TextInput source="data.name" label="Nombre" fullWidth />
        <TextInput source="data.email" label="Email" fullWidth />
        <TextInput source="data.age" label="Edad" fullWidth />
        <TextInput source="data.roles" label="Rol" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
