import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Pagination,
  useGetList,
} from "react-admin";
import InfoIcon from "@mui/icons-material/Info";
import Filters from "./Filters";
import { Emptyness, exporter, Loader } from "../utils";

const EscolarList = (props) => {
  const { data, isLoading } = useGetList("api/admin/escolar", {
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <Loader />;
  else
    return (
      <List
        {...data}
        aside={<Filters />}
        exporter={exporter}
        emptyWhileLoading
        pagination={<Pagination limit={<Emptyness />} />}
      >
        <Datagrid bulkActionButtons={false}>
          <TextField source="date" label="Fecha" />
          <TextField source="category" label="Categoría" />
          <TextField source="title" label="Titular" />
          <EditButton
            basepath="/api/admin/escolar"
            label="Ver Detalles"
            icon={<InfoIcon />}
          />
        </Datagrid>
      </List>
    );
};

export default EscolarList;
