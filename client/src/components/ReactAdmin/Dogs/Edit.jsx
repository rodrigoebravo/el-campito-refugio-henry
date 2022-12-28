import { Edit, SimpleForm, TextInput, ImageInput, SelectInput,
  CheckboxGroupInput, ImageField, BooleanInput } from "react-admin";

const DogsEdit = (props) => {
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
            { id: 'Se lleva con perros', name: 'Se lleva con perros' },
            { id: 'uSe lleva con hembras', name: 'Se lleva con hembras' },
            { id: 'Cuidados especiales', name: 'Cuidados especiales' },
            { id: 'Discapacitado', name: 'Discapacitado' },
            { id: 'Carácter especial', name: 'Carácter especial' },
        ]} />
        <TextInput source="features" label="Caracteristicas" fullWidth />
        <ImageInput source="images" label="Fotografías" multiple>
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="url del video en YouTube" label="Nombre" fullWidth />
        <BooleanInput label="¿ Se puede apadrinar ?" source="isSponsored" />
        <BooleanInput label="¿ Se puede adoptar ?" source="toAdopt" />
      </SimpleForm>
    </Edit>
  );
};

export default DogsEdit;
