const { CloudinaryImage } = require("cloudinary/url-gen 1.x")


const cloud = new CloudinaryImage(
    " https://www.elcampitorefugio.org/imgs/uploaded/780878.jpg " 
 ).setDeliveryType( " fetch " );