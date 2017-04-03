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
        getCanvasInfo(imgArr);
        clearInterval(timer);
        return;
    } 
}
function getCanvasInfo(arr) { //瀑布流布局
    const sqrt = Math.ceil(Math.sqrt(arr.length));
    let heightArr = Array(sqrt).fill(0);
    let offsetArr = [];
    let xline, yline, x_pos, maxHeight, maxWidth;
    let turns = 0;
    let x_offset = 20;
    let y_offset = 20;
    let newImage = images(100,100);

    arr.forEach((item, index) => {
        const hIndex = heightArr.indexOf(Math.min.apply(null,heightArr));
        const oWidth = 500;

        heightArr[hIndex] = heightArr[hIndex] === 0 ?
              Number(images(item).size(oWidth).height()) :
              heightArr[hIndex] + Number(images(item).size(oWidth).height()) + 20;
        x_pos = (oWidth + x_offset) * hIndex;

        this.offsetObj = {
            x: x_pos,
            y: heightArr[hIndex] - Number(images(item).size(oWidth).height()),
            image_path: item
        }

        offsetArr.push(this.offsetObj)

        ++ turns;
        if( turns === arr.length) {
            maxHeight = Math.max.apply(null,heightArr);
            maxWidth = Number(oWidth * sqrt + x_offset * (sqrt - 1));
            newImage.size(maxWidth,maxHeight);
            mergeImage(offsetArr, newImage);
            // newImage.save("output.png");
        }
    })
   
}

function mergeImage(arr, newImage) {
    turns = 0;
    arr.forEach((item, index) => {
        newImage.draw(images(item.image_path).size(500),item.x,item.y);
        ++ turns;
        if (turns === arr.length) {
            newImage.save("output.png");
            console.log('======done======');
        }
    })
}
