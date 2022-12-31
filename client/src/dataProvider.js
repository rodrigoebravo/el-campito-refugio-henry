import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import pushCloudinary from "./hooks/pushCloudinary";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(
        headers.get("Content-Range").toString().split("/").pop(),
        10
      ),
    }));
  },


  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);

    return {
      data: { ...json, id: json._id },
    };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);

    return {
      data: json.map((res) => ({ ...res, id: res._id })),
    };
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
    }));
  },

  update: async (resource, params) => 

    if ( resource === "api/admin/users" && params.data.image.hasOwnProperty("rawFile") ) {
      params.data.image = await pushCloudinary(params.data.image);
    } else {   
      params.data.image = params.data.image.src;
    }

    if ( resource === "api/admin/dogs" 
          && params.data.images.length > 0 ) {
      let newImages = params.data.images.filter( (img) => img.hasOwnProperty("rawFile") );
      newImages = await pushCloudinary(newImages);
      let oldImages = params.data.images.filter( (img) => img.hasOwnProperty("src") );
      let urlsOld = oldImages.map((img)=>  img.src  );
      params.data.images = [...newImages,...urlsOld];      
    }

    if (resource === "api/admin/press" && params.data.img.hasOwnProperty("rawFile") ) {
      params.data.img = await pushCloudinary(params.data.img);
    } else {
      params.data.img = params.data.img.src;
    }


    if (resource === "api/admin/interfaces") {
      if (params.data.imgVoluntarios.hasOwnProperty("rawFile")) {
        params.data.imgVoluntarios = await pushCloudinary( params.data.imgVoluntarios);
      } else { 
        params.data.imgVoluntarios = params.data.imgVoluntarios.src;
      };
      if (params.data.imgNosotros.hasOwnProperty("rawFile")) {
        params.data.imgNosotros = await pushCloudinary( params.data.imgNosotros);
      } else { 
        params.data.imgVoluntarios = params.data.imgVoluntarios.src
      };

      
      
      if (params.data.slider.length > 0 ) {
        let newSlider = []
        params.data.slider.forEach( async(e) => {
          if (e.hasOwnProperty("rawFile")) {
            e = await pushCloudinary( e );
          } else { 
            e = e.src
          };
          newSlider.push(e)
        });
        params.data.slider = newSlider;
      }

      
    }

    const http = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }); 

    const { json } = http;


    return {
      data: { ...params.data, id: json._id },
    };

  },



  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {

    if (resource === "api/admin/dogs") {
      params.data.images = await pushCloudinary(params.data.images); //verificado
    }

    if (resource === "api/admin/users") {
      params.data.image = await pushCloudinary(params.data.image);
    }

    if (resource === "api/admin/interfaces") {
      params.data.slider = await pushCloudinary(params.data.slider);
      params.data.imgNosotros = await pushCloudinary(params.data.imgNosotros);
      params.data.imgNosotros = await pushCloudinary( params.data.imgVoluntarios);
    }

    const http = await httpClient(`${apiUrl}/${resource}`, {

      method: "POST",
      body: JSON.stringify(params.data),
    });


    const { json } = http;


    return {
      data: { ...params.data, id: json._id },
    };
  },

  delete: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      params: JSON.stringify(params.id),
    });

    return {
      //data: {...json, id: json._id, }
      ...json,
      id: json._id,
    };
  },

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};

export default dataProvider;