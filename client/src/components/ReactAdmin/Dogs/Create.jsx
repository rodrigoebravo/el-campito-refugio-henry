import { Create, SimpleForm, TextInput, ImageInput, SelectInput, BooleanInput,
  CheckboxGroupInput, ImageField } from "react-admin";


const DogsCreate = (props) => {

  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm>
        {/* <TextInput source="id" disabled fullWidth /> */}
        <TextInput source="name" label="Nombre" fullWidth />
        <SelectInput source="gender" label="Sexo" choices={[
            { id: 'hembra', name: 'hembra' },
            { id: 'macho', name: 'macho' },
        ]} />
        <SelectInput source="size" label="Tamaño" choices={[
            { id: 'chico', name: 'chico' },
            { id: 'mediano', name: 'mediano' },
            { id: 'grande', name: 'grande' },
        ]} />
        <SelectInput source="age" label="Edad" choices={[
            { id: 'adulto', name: 'adulto' },
            { id: 'adulto jóven', name: 'adulto jóven' },
            { id: 'viejito', name: 'viejito' },
            { id: 'cachorro', name: 'cachorro' },
        ]} />
        <TextInput source="race" label="Raza" fullWidth />
        <CheckboxGroupInput source="references" label="Referencias" choices={[
            { id: 'u000', name: 'Se lleva con perros' },
            { id: 'u001', name: 'Se lleva con hembras	' },
            { id: 'u002', name: 'Cuidados especiales	' },
            { id: 'u003', name: 'Discapacitado' },
            { id: 'u004', name: 'Carácter especial' },
        ]} />
        <TextInput source="features" label="Caracteristicas" fullWidth />
        <ImageInput source="images" label="Fotografías" multiple>
            <ImageField source="src" title="title" />
        </ImageInput>
        <ImageInput source="video" label="Video" >
            <ImageField source="src" title="title" />
        </ImageInput>
        <BooleanInput label="¿ Se puede apadrinar ?" source="isSponsored" />
      </SimpleForm>
    </Create>
  );
};

export default DogsCreate;
