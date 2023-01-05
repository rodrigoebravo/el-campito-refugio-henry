const linkPreviewGenerator = require("link-preview-generator");
const { pressModel } = require("../models/index"); 
const info = require("./prensa.json"); 

const pushDBpress = () =>{

    let infoNews = [];

    info.forEach(async(element) => {

       await linkPreviewGenerator(element.link)
       .then(r=>{
        r.date = element.date;
        r.media = element.media;
        r.link = element.link;
        r.type = element.type;

        infoNews.push(r);   
       })   
       .catch(e=> infoNews.push({})  )  
          

             
    });
    

    const press = await pressModel.create(r);

    console.log(infoNews)
    console.log("Estado de DB: press cargados")
   
};

module.exports = pushDBpress;