import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  
  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm>
        {/* <TextInput source="id" disabled fullWidth /> */}
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="gender" label="Sexo" fullWidth />
        <TextInput source="size" label="Tamaño" fullWidth />
        <TextInput source="race" label="Raza" fullWidth />
        <TextInput source="features" multiline label="Descripción" fullWidth />
        <TextInput source="references" label="Caracteristicas" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
