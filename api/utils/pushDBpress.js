const linkPreviewGenerator = require("link-preview-generator");
const { pressModel } = require("../models/index"); 
const info = require("./prensa5.json"); 

const pushDBpress = () =>{

    try {

        let infoNews = [];

        info.forEach(async(element) => {

            const { link, ...data } = element;
    
            let previewData = {}; 
        
            if (link) {
                previewData = await linkPreviewGenerator(link) || {} ;
            };        
        
            const press = await pressModel.create({
            ...data,
            ...previewData
            });

            infoNews.push(press);                   
        });
    
        console.log(infoNews)
        console.log("Estado de DB: press cargados")

        return infoNews;
        
    } catch (error) {
        console.log(error);
    }

    
   
};

module.exports = pushDBpress;