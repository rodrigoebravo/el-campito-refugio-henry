import { Create, SimpleForm, TextInput, ImageInput, SelectInput, BooleanInput,
  CheckboxGroupInput, ImageField } from "react-admin";

const valida = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'required';
    if (!values.age) errors.age = 'required';
    if (!values.size) errors.size = 'required';
    if (!values.gender) errors.gender = 'required';
    if (!values.race) errors.race = 'required';
    if (!values.references) errors.references = 'required';
    if (!values.features) errors.features = 'required';

    return errors
};


const DogsCreate = (props) => {

  return (
    <Create title={"Agregar un perrito"} {...props}>
      <SimpleForm validate={valida} warnWhenUnsavedChanges>
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
            { id: 'Se lleva con perros', name: 'Se lleva con perros' },
            { id: 'Se lleva con hembras', name: 'Se lleva con hembras' },
            { id: 'Cuidados especiales', name: 'Cuidados especiales' },
            { id: 'Discapacitado', name: 'Discapacitado' },
            { id: 'Carácter especial', name: 'Carácter especial' },
        ]} />
        <TextInput source="features" label="Caracteristicas" fullWidth />
        <ImageInput source="images" label="Fotografías" multiple>
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="video" label="url del video en YouTube" fullWidth />
        <BooleanInput label="¿ Se puede apadrinar ?" source="isSponsored" />
        <BooleanInput label="¿ Se puede adoptar ?" source="toAdopt" />
      </SimpleForm>
    </Create>
  );
};

export default DogsCreate;
