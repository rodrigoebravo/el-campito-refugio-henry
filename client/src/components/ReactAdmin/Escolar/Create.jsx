import { 
  Create, 
  SimpleForm, 
  TextInput, 
  DateInput,
  SelectInput } from "react-admin";

  const valida = (values) => {
    const errors = {};
    if (!values.category) errors.category = 'required';
    if (!values.date) errors.date = 'required';

    return errors
};

const EscolarCreate = (props) => {
  return (
    <Create title={"Crear posteo de nota de prensa"} {...props}>
      <SimpleForm validate={valida}>
        <SelectInput
                source="category"
                label="Categoría"
                choices={[
                  { id: "escolar", name: "escolar" },
                  { id: "talleres", name: "talleres" },
                  { id: "charlas", name: "charlas" },
                  { id: "capacitaciones", name: "capacitaciones" },
                ]}
                
              />
        <TextInput source="link" label="URL" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default EscolarCreate;
