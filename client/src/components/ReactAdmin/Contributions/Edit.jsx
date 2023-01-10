import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  BooleanInput,
  TextField,
} from "react-admin";

const convertStringToNumber = (value) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : float;
};

const ContribEdit = (props) => {
  return (
    <Edit
      title={"Editar datos"}
      {...props}
      disableAuthentication
      mutationMode="pessimistic"
    >
      <SimpleForm>
        <h1>Editar Detalle de la Contribución</h1>
        <br></br>
        <br></br>
        <h2>Contribuyente:</h2>
        <TextField source="name" label="Contribuyente" fullWidth />
        <br></br>
        <h3>e-mail:</h3>
        <TextField source="email" fullWidth />
        <br></br>
        <h3>Camperito:</h3>
        <TextField source="nameDog" fullWidth />
        <br></br>
        <SelectInput
          source="type"
          labelpublic="Tipo de Contribución"
          choices={[
            { id: "donación", name: "donación" },
            { id: "sponsoreo", name: "sponsoreo" },
            { id: "padrinazgo", name: "padrinazgo" },
          ]}
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
        <BooleanInput label="Pendiente" source="isPending" />
        <BooleanInput label="Desactivado" source="isDelete" />
      </SimpleForm>
    </Edit>
  );
};

export default ContribEdit;
