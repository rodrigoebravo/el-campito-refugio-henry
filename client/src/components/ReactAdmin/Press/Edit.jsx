import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";



const PressEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <TextInput source="media" label="Medio de Comunicación" fullWidth />
        <TextInput source="link" label="URL" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
        <TextInput source="title" label="Titular" fullWidth />
        <TextInput source="description" label="Breve descripción" fullWidth />
        <TextInput source="dogs" label="Relación a algún perro" fullWidth />
          
      </SimpleForm>
    </Edit>
  );
};

export default PressEdit;
