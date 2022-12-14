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
        <TextInput source="gender" label="Sexo" fullWidth />
        <TextInput source="size" label="Tamaño" fullWidth />
        <TextInput source="race" label="Raza" fullWidth />
        <TextInput source="features" multiline label="Descripción" fullWidth />
        <TextInput source="references" label="Caracteristicas" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
