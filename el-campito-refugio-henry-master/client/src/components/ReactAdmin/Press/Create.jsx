import { Create, SimpleForm, TextInput, DateInput } from "react-admin";



const PressCreate = (props) => {
  return (
    <Create title={"Crear posteo de nota de prensa"} {...props}>
      <SimpleForm>
        <TextInput source="media" label="Medio de Comunicación" fullWidth />
        <TextInput source="link" label="URL" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PressCreate;
