import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";

const convertStringToNumber = (value) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : float;
};
const valida = (values) => {
  const errors = {};
  if (!values.type) errors.type = "required";
  if (!values.date) errors.date = "required";
  if (!values.total) errors.total = "required";
  if (!values.method) errors.method = "required";

  return errors;
};

const ContribCreate = (props) => {
  return (
    <Create title={"Registrar contribución"} {...props}>
      <SimpleForm validate={valida} warnWhenUnsavedChanges>
        <TextInput source="name" label="Contribuyente" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <SelectInput
          source="type"
          labelpublic="Tipo de Contribución"
          choices={[
            { id: "donación", name: "donación" },
            { id: "sponsoreo", name: "sponsoreo" },
            { id: "padrinazgo", name: "padrinazgo" },
          ]}
        />
        <TextInput
          source="dogName"
          label="Está destinado a algún Camperito ?"
          fullWidth
        />
        <TextInput source="detail" label="Detalle" fullWidth />
        <DateInput source="date" label="Fecha" fullWidth />
        <TextInput
          source="total"
          label="Monto"
          type="number"
          parse={convertStringToNumber}
          fullWidth
        />
        <SelectInput
          source="method"
          label="Metodo de Pago"
          choices={[
            { id: "paypal", name: "paypal" },
            { id: "donaronline", name: "donaronline" },
            { id: "mercadopago", name: "mercadopago" },
            { id: "cafecito", name: "cafecito" },
            { id: "otro", name: "otro" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default ContribCreate;
