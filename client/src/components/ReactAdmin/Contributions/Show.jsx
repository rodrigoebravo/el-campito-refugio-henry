import { Show, SimpleShowLayout, TextField } from "react-admin";

const ContribShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
      <h2>Ticket de Operación</h2>
        <br></br><br></br>        
        <h2>Contribuyente:</h2>
        <TextField  source="name" label={false} fullWidth />
        <br></br>
        <h3>e-mail:</h3>
        <TextField  source="email"   label={false} fullWidth />
        <br></br>
        <h3>Camperito:</h3>
        <TextField  source="nameDog" label={false}  fullWidth />
        <br></br>
        <TextField source="type" label="Tipo de Contribución"  /> 
        <br></br>       
        <TextField source="detail" label="Detalle" fullWidth />
        <br></br>
        <TextField source="date" label="Fecha" fullWidth />
        <br></br>
        <TextField source="total" label="Monto" type="number" />
        <br></br>
        <TextField source="method" label="Metodo de Pago"  />
      </SimpleShowLayout>
    </Show>
  );
};

export default ContribShow;
