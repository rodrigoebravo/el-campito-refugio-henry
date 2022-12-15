import { Create, SimpleForm, TextInput, ImageInput,
  CheckboxGroupInput, ImageField } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="name" label="Nombre" fullWidth />
        <TextInput source="gender" label="Sexo" fullWidth />
        <TextInput source="size" label="Tamaño" fullWidth />
        <TextInput source="race" label="Raza" fullWidth />
        <CheckboxGroupInput source="roles" choices={[
            { id: 'a000', name: 'Se lleva con perros' },
            { id: 'u001', name: 'Se lleva con chicos	' },
            { id: 'u002', name: 'Cuidados especiales	' },
            { id: 'u003', name: 'Discapacitado' },
            { id: 'a004', name: 'Carácter especial' },
        ]} />
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
