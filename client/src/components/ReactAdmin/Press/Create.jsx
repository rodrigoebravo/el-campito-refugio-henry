import { Create, SimpleForm, TextInput, DateInput,
  ImageInput, ImageField  } from "react-admin";



const PressCreate = (props) => {
  return (
    <Create title={"Crear posteo de nota de prensa"} {...props}>
      <SimpleForm>
        <TextInput source="media" label="Medio de Comunicación" fullWidth />
        <TextInput source="link" label="URL" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
        <hr/>
        <h2>Solo completar manualmente si falla la url</h2>
        <TextInput source="title" label="Titular" fullWidth />
        <TextInput source="description" label="Breve descripción" fullWidth />
        <TextInput source="img" label="url de la imagen o video de la nota" fullWidth />
        <ImageInput source="img" label="o archivo multimedia" >
            <ImageField source="src" title="title" />
        </ImageInput>   
      </SimpleForm>
    </Create>
  );
};

export default PressCreate;
