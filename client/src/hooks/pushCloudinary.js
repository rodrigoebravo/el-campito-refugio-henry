
// import { IosShareRounded } from '@mui/icons-material';

import axios from 'axios'

const pushCloudinary = async (files) => {
    try {
        if(!Array.isArray(files)){

            const data = new FormData();
            data.append('file', files.rawFile);
            data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLES DE ENTORNO        
            let res = await axios.post(`https://api.cloudinary.com/v1_1/dman2cjk5/auto/upload`, data); 

            return res.data.url; 

        }else{

            const photos = []; 
    
            for(let element of files){
                const data = new FormData();
                data.append('file', element.rawFile);
                data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLES DE ENTORNO        
                let res = await axios.post(`https://api.cloudinary.com/v1_1/dman2cjk5/auto/upload`, data); 
                photos.push(res.data.url)
            }
    
            return photos; 
        }


    }catch(e){
        console.error({error: e})
    }

};

export default pushCloudinary;