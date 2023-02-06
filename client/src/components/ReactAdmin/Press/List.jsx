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

const PressList = (props) => {
  const { data, isLoading } = useGetList("api/admin/press", {
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
          <TextField source="media" label="Medio" />
          <TextField source="title" label="Titular" />
          <TextField source="type" label="Soporte" />
          <EditButton
            basepath="/api/admin/press"
            label="Ver Detalles"
            icon={<InfoIcon />}
          />
        </Datagrid>
      </List>
    );
};

export default PressList;
