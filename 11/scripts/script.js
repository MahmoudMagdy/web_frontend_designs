let imageIndex = 0;
const boxes = document.getElementsByClassName("box");

function changeItems(target) {
    for (let index = 0; index < boxes.length; index++) {
        if (!target && imageIndex === 0) imageIndex = 7;
        boxes[index].getElementsByTagName("img")[0].setAttribute("src", "img/food_" + ((target ? imageIndex++ : imageIndex--) % 7 + 1) + ".png");
    }
}

$(document).ready(function () {
    $(".box").hover(function () {
        handleIn($(this))
    }, function(){
        handleOut($(this))
    })
});

function populate(sourceString) {
    let curDataList = document.getElementsByClassName(sourceString);
    curDataList[0].getElementsByTagName("img")[0].src = "img/food_1.png";
}

let curImgSrc;

function handleIn(element) {
    let curImg = element[0].getElementsByTagName("img")[0];
    curImgSrc = curImg.src;
    curImg.src = "img/image-selected.png";
    console.log("here")
}

function handleOut(element) {
    let curImg = element[0].getElementsByTagName("img")[0];
    curImg.src=curImgSrc;
    console.log("here_@")
}