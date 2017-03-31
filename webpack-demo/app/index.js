// const mergeImg = require('merge-img');
const fs = require("fs");
const images = require("images");

const path = 'app/images';

let imgArr = [];
let imageDir = fs.readdirSync(path);


imageDir.forEach((item, index) => {
    if(item === '.DS_Store') return;
    let img = `app/images/${item}`;
    imgArr.push(img);
})
const timer = setInterval(finishImgDir,60);

function finishImgDir() {
    if (imgArr.length === imageDir.length - 1) {
        mergeImage(imgArr);
        clearInterval(timer);
        return;
    } 
}
function mergeImage(arr) {
    const sqrt = Math.ceil(Math.sqrt(arr.length));
    let heightArr = Array(sqrt).fill(0);
    let widthArr = Array(sqrt).fill(0);
    let xline, yline, lastWidth, lastHeight;
    let turns = 0;
    let x_offset = 20;
    let y_offset = 20;

    console.log(sqrt);
    // console.log(arrrr.indexOf(Math.min.apply(null,arrrr)));
    

    arr.forEach((item, index) => {
        xline = Math.ceil((index + 1)/sqrt); //calculate the line number
        yline = (index + 1)%sqrt === 0 ? sqrt : (index + 1)%sqrt;
        
        lastWidth = widthArr[xline - 1];
        lastHeight = heightArr[yline - 1];
         
        widthArr[xline - 1] = widthArr[xline - 1] === 0 ? Number(images(item).width()) : widthArr[xline - 1] + Number(images(item).width()) + 20;
        heightArr[yline - 1] = heightArr[yline - 1] === 0 ? Number(images(item).height()) : heightArr[yline - 1] + Number(images(item).height()) + 20;
       
        let oWidth = Math.max.apply(null,widthArr);
        let oHeight = Math.max.apply(null,heightArr);
        console.log(images(item).width() + '======' + heightArr);
        if (turns === 0) {
            images(item).save("output.png", {
                quality: 50
            })
        } else {
            images("output.png")
                .resize(oWidth,oHeight)
                .draw(images(item), lastWidth, lastHeight)
                .save("output.png", {
                    quality: 50
                })
        }
        
        ++ turns;
    })

   
}
// mergeImg(imgArr,{
//     direction: true,
//     offset: 60
// })
//   .then((img) => {
//     img.write('out.png', () => console.log('done'));
 
// });