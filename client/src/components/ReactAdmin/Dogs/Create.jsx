import { Create, SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="gender" label="Sexo" fullWidth />
        <TextInput source="size" label="Tamaño" fullWidth />
        <TextInput source="race" label="Raza" fullWidth />
        <TextInput source="features" multiline label="Descripción" fullWidth />
        <TextInput source="references" label="Caracteristicas" fullWidth />
        <ImageInput source="images" label="Fotografías" multiple>
            <ImageField source="src" title="title" />
        </ImageInput>
        <ImageInput source="video" label="Video" >
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
