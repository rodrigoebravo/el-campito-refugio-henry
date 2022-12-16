import axios from 'axios';

const pushCloudinary = async (files) => {
    console.log(files);
    if ( !Array.isArray(files) ) {
        const data = new FormData();
        data.append('file', files.rawFile);
        data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLES DE ENTORNO        
        let url = axios.post(`https://api.cloudinary.com/v1_1/dman2cjk5/auto/upload`, data)
            .then( (r)=> r.data.secure_url )
            .catch( (e)=> console.log(e) );
        return url;
    };

    const urls = [];
    files.forEach(element => {
        const data = new FormData();
        data.append('file', element.rawFile);
        data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLES DE ENTORNO        
        axios.post(`https://api.cloudinary.com/v1_1/dman2cjk5/auto/upload`, data)
            .then( (r)=> urls.push(r.data.secure_url) )
            .catch( (e)=> console.log(e) );
    });
    
    return urls;
};

export default pushCloudinary;