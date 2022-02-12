$(document).ready(() => {
    $('.slider').bxSlider({
        pager: false,
        mode: 'fade',
        moveSlides: 1,
        auto: true
    });
    $('#slider div').height($(window).height() - $('header').height());
    // $('.slider').height($(window).height()-header.height());
    $(window).resize(() => {
        $('#slider div').height($(window).height() - $('header').height());
        // $('.slider').height($(window).height() - header.height());
    });

    const arrivalItems = document.getElementById("arrival-items");
    const lorem = 'lorem ipsum dolor sit amet consectetur adipisicing elit'.split(' ');
    const intrNames = ("Odin Chair,Sofas Sectionals,Chairs,Coffee Tables," +
        "End Side Tables,Ottomans Benches,Accent Tables,Storage Furniture," +
        "Stools Poufs,Futons Sofa Beds,Living Room Ideas,Living Room").split(',');
    for (let i = 0; i < 8; i++) {
        arrivalItems.innerHTML +=
            `<div class=\"item\">
                  <div><div><button class="general-button">ADD TO CART</button></div></div>
                  <small>${lorem[i]}</small>
                  <i class=\"far fa-heart\"></i>
                  <h3>${intrNames[i]}</h3>
                  <h4>$${String((Math.random() * 300) + 100).slice(0, 6)}</h4>
             </div>`;
        const arrivalImg = arrivalItems.getElementsByClassName("item")[i].getElementsByTagName('div')[0];
        arrivalImg.style.background = `url(\"images/item_sell_${i}.webp\") no-repeat`;
        arrivalImg.style.backgroundSize = 'cover';
    }
    const topItems = document.getElementById('top-items');
    const topItemsFS = topItems.getElementsByTagName('fieldset');
    let loremIn = 0;
    for (let i = 0; i < topItemsFS.length; i++) {
        let ulItem = topItemsFS[i].getElementsByTagName('ul')[0];
        for (const index in [0, 1, 2]) {
            ulItem.innerHTML +=
                `<li>
                    <div></div>
                    <small>${lorem[loremIn++ % 8]}</small>
                    <h3>${intrNames[loremIn-1]}</h3>
                    <h4>$${String((Math.random() * 300) + 100).slice(0, 6)}</h4>
                </li>`;

            const li = ulItem.getElementsByTagName('li')[index].getElementsByTagName('div')[0];
            li.style.background = `url("images/top_${loremIn - 1}.webp")`;
            li.style.backgroundSize = "cover";

        }
    }


});

let imageIndex = 2;
const boxes = document.getElementsByClassName("latest-item");

function changeItems(target) {
    for (let index = 0; index < boxes.length; index++) {
        const curBox=boxes[index];
        if (target && imageIndex % 6 != 5){
            curBox.style.background=`url("images/latest_item_${++imageIndex % 6}.webp") no-repeat top center`;
            curBox.style.backgroundSize="cover";
            if(imageIndex % 6 == 5){
                boxes[0].getElementsByTagName("button")[0].style.background="#121212";
                boxes[2].getElementsByTagName("button")[0].style.background="#12121249";
            }
        }else if(!target&&imageIndex % 6 !=2){
            curBox.style.background=`url("images/latest_item_${++imageIndex % 6}.webp") no-repeat top center`;
            curBox.style.backgroundSize="cover";
            if(imageIndex % 6 == 2){
                boxes[2].getElementsByTagName("button")[0].style.background="#121212";
                boxes[0].getElementsByTagName("button")[0].style.background="#12121249";
            }
        }
    }
}
