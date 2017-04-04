// const mergeImg = require('merge-img');
const fs = require("fs");
const images = require("images");
const path = 'app/image2';
const imageDir = fs.readdirSync(path);

let imgArr = [];



imageDir.forEach((item, index) => {
    if(item === '.DS_Store') return;
    let img = `app/image2/${item}`;
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
// function getCanvasInfo(arr) { //瀑布流布局
//     const sqrt = Math.ceil(Math.sqrt(arr.length));
//     let heightArr = Array(sqrt).fill(0);
//     let offsetArr = [];
//     let xline, yline, x_pos, maxHeight, maxWidth;
//     let turns = 0;
//     let x_offset = 20;
//     let y_offset = 20;
//     let newImage = images(100,100);

//     arr.forEach((item, index) => {
//         const hIndex = heightArr.indexOf(Math.min.apply(null,heightArr));
//         const oWidth = 500;

//         heightArr[hIndex] = heightArr[hIndex] === 0 ?
//               Number(images(item).size(oWidth).height()) :
//               heightArr[hIndex] + Number(images(item).size(oWidth).height()) + 20;
//         x_pos = (oWidth + x_offset) * hIndex;

//         this.offsetObj = {
//             x: x_pos,
//             y: heightArr[hIndex] - Number(images(item).size(oWidth).height()),
//             image_path: item
//         }

//         offsetArr.push(this.offsetObj)

//         ++ turns;
//         if( turns === arr.length) {
//             maxHeight = Math.max.apply(null,heightArr);
//             maxWidth = Number(oWidth * sqrt + x_offset * (sqrt - 1));
//             newImage.size(maxWidth,maxHeight);
//             mergeImage(offsetArr, newImage);
//             // newImage.save("output.png");
//         }
//     })
   
// }

// function mergeImage(arr, newImage) {
//     turns = 0;
//     arr.forEach((item, index) => {
//         newImage.draw(images(item.image_path).size(500),item.x,item.y);
//         ++ turns;
//         if (turns === arr.length) {
//             newImage.save("output.png");
//             console.log('======done======');
//         }
//     })
// }

function getCanvasInfo(arr) { //序列帧布局
    
    const oWidth = 500;
    const picPix = 0.66; //图片宽高比
    const oHeight = oWidth * picPix;
    const row = 2; //行数
    const column = 4; //列数
    const maxNum = row * column; //每张序列帧最多图片个数

    const maxWidth = oWidth * column; //图片最终宽
    const maxHeight = oHeight * row; //图片最终高

    const finalImageNum = Math.ceil(arr.length / maxNum); //总共要多少张序列帧
    
    let newImage = images(maxWidth, maxHeight);
    let imageIndex = 0;
   
    arr.forEach((item, index) => {
        if ((index + 1) > (imageIndex + 1) * maxNum) {
            newImage.save(`outPut${imageIndex + 1}.png`);
            newImage = images(maxWidth, maxHeight);
            ++ imageIndex;
        } 

        if ((index + 1) === arr.length) {
            newImage.save(`outPut${imageIndex + 1}.png`);
            console.log(`image${index}=======done======`);
            console.log(`=======alldone======`);
            return;
        } else {
            const rowNumber = Math.ceil(((index - maxNum * imageIndex) + 1) / column); //所在行数
            const columnNum = ((index - maxNum * imageIndex) + 1) % column === 0 ? column : ((index - maxNum * imageIndex) + 1) % column; //所在列数
            const x_offset = oWidth * (columnNum - 1);
            const y_offset = oHeight * (rowNumber - 1);
            newImage.draw(images(item).size(oWidth,oHeight), x_offset, y_offset)
            console.log(`image${index}=======done======`);
        }
    })

}
