import { 
  Create, 
  SimpleForm, 
  TextInput, 
  DateInput,
  SelectInput } from "react-admin";

  const valida = (values) => {
    const errors = {};
    if (!values.media) errors.media = 'required';
    if (!values.type) errors.type = 'required';
    if (!values.date) errors.date = 'required';

    return errors
};

const PressCreate = (props) => {
  return (
    <Create title={"Crear posteo de nota de prensa"} {...props}>
      <SimpleForm validate={valida}>
        <TextInput source="media" label="Medio de Comunicación" fullWidth />
        <SelectInput
                source="type"
                label="Soporte"
                choices={[
                  { id: "Prensa Gráfica", name: "Prensa Gráfica" },
                  { id: "Televisión / Audiovisual", name: "Televisión / Audiovisual" },
                  { id: "Radio / Audio", name: "Radio / Audio" },
                  { id: "Artistas Amigos", name: "Artistas Amigos" },
                ]}
                
              />
        <TextInput source="link" label="URL" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default PressCreate;
