import { Create, SimpleForm, TextInput, DateInput, SelectInput,
  BooleanInput } from "react-admin";

const convertStringToNumber = value => {
    const float = parseFloat(value);
    return isNaN(float) ? null : float;
};
      

const ContribCreate = (props) => {
  return (
    <Create title={"Registrar contribución"} {...props}>
      <SimpleForm>
        <TextInput source="name" label="Contribuyente" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="phone" label="Teléfona" fullWidth />
        <SelectInput source="type" labelpublic="Tipo de Contribución" choices={[
            { id: 'donación', name: 'donación' },
            { id: 'sponsoreo', name: 'sponsoreo' },
        ]} />
        <TextInput source="detail" label="Detalle" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
        <TextInput source="total" label="Monto" type="number" parse={convertStringToNumber} fullWidth />
        <TextInput source="method" label="Metodo de Pago" fullWidth />
        <BooleanInput label="Pendiente" source="isPending" />
        
      </SimpleForm>
    </Create>
  );
};

export default ContribCreate;
