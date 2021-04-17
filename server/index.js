const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const { getColorFromURL } = require('color-thief-node');
const { getPaletteFromURL } = require('color-thief-node');
const getPixels=require('get-pixels');
var rgbToHex = function (rgb) 
{ 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};
app.get('/color',(req,res)=>{
    var dominantColor='';
    var borderColor=null;
    (async () => {
        dominantColor = await getColorFromURL(req.query.src);
        dominantColor=rgbToHex(dominantColor[0]).toString()+rgbToHex(dominantColor[1]).toString()+rgbToHex(dominantColor[2]).toString();
        dominantColor='#'+dominantColor;
        getPixels(req.query.src, function(err, pixels) {
            if(err) {
              console.log("Bad image path")
              return
            }
            borderColor='#'+rgbToHex(pixels.data[0])+rgbToHex(pixels.data[1])+rgbToHex(pixels.data[2])
            var ans={logo_border:borderColor.toString(),dominant_color:dominantColor.toString()};
            ans=JSON.parse(JSON.stringify(ans));
            res.send(ans);
          })
    })();
})
app.listen(process.env.PORT || 3001,()=>{
    console.log("Express server started!\nListening on Express")
})