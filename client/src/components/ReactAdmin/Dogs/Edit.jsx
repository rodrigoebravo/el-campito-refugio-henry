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
        <TextInput source="data.gender" label="Sexo" fullWidth />
        <TextInput source="data.size" label="Tamaño" fullWidth />
        <TextInput source="data.race" label="Raza" fullWidth />
        <TextInput
          source="data.features"
          multiline
          label="Descripción"
          fullWidth
        />
        <TextInput source="data.references" label="Caracteristicas" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
