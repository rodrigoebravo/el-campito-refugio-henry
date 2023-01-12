import {
  List,
  Datagrid,
  TextField,
  // EditButton,
  ShowButton,
  // DeleteWithConfirmButton,
  Pagination,
  useGetList,
  DateField,
} from "react-admin";
import { Loader, Emptyness, exporter } from "../utils";

const ContribList = () => {
  const { data, isLoading } = useGetList("api/admin/contributions", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  return (
    <List
      {...data}
      exporter={exporter}
      pagination={<Pagination limit={<Emptyness />} />}
    >
      <Datagrid bulkActionButtons={false}>
        <DateField source="date" label="Fecha" />
        <TextField source="name" label="Contribuyente" />
        <TextField source="nameDog" label="Beneficiado/a" />
        <TextField source="type" label="Tipo" />
        <TextField source="total" label="Monto" />
        {/* <EditButton basepath="/api/admin/contributions" />
        <DeleteWithConfirmButton basepath="/api/admin/contributions" /> */}
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default ContribList;
