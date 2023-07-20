const menu = [
    {
        id:1,
        title: "300",
        category: "Action",
        price: 70.00,
        img: "/img/products/300.jpg",
        desc: `the 300`
    },
    {
        id:2,
        title: "way of water",
        category: "sci-fi",
        price: 70.00,
        img: "/img/products/avatarwayofwater.jpg",
        desc: `the avatar`
    },
    {
        id:3,
        title: "batman",
        category: "Action",
        price: 70.00,
        img: "/img/products/batmandarknightmovie.jpg",
        desc: `the batman`
    },
    {
        id:4,
        title: "donaldduck",
        category: "family",
        price: 70.00,
        img: "/img/products/donaldduck.jpg",
        desc: `donald duck`
    },
    {
        id:5,
        title: "frozen",
        category: "family",
        price: 70.00,
        img: "/img/products/frozen.jpg",
        desc: `frozen`
    },
    {
        id:6,
        title: "ghost-rider",
        category: "Action",
        price: 70.00,
        img: "/img/products/ghostrider.jpg",
        desc: `ghost-rider`
    },
    {
        id:7,
        title: "monsterInc",
        category: "family",
        price: 70.00,
        img: "/img/products/monsterInc.jpg",
        desc: `monsterInc`
    },
    {
        id:8,
        title: "inception",
        category: "sci-fi",
        price: 70.00,
        img: "/img/products/inception.jpg",
        desc: `inception`
    },
    {
        id:9,
        title: "pacific-rim",
        category: "Action",
        price: 70.00,
        img: "/img/products/pacificrim.jpg",
        desc: `pacific rim`
    },
    {
        id:10,
        title: "harley quinn",
        category: "sci-fi",
        price: 70.00,
        img: "/img/products/harleyquinn.jpg",
        desc: `harley`
    },
    {
        id:11,
        title: "lord of the rings",
        category: "family",
        price: 30,
        img: "/img/products/lordoftherings.jpg",
        desc: `LOTR`
    },
    {
        id:12,
        title: "infinity war",
        category: "sci-fi",
        price: 70.00,
        img: "/img/products/infinitywar.jpg",
        desc: `infinity war`
    },
    {
        id:13,
        title: "godzilla",
        category: "Action",
        price: 70.00,
        img: "/img/products/godzilla.jpg",
        desc: `godzilla`
    },
    {
        id:14,
        title: "darknight",
        category: "sci-fi",
        price: 70.00,
        img: "/img/products/thedarknight.jpg",
        desc: `darknight`
    },
    {
        id:15,
        title: "wolverine",
        category: "family",
        price: 70.00,
        img: "/img/Banner/wolverine.jpg",
        desc: `wolverine`
    },
    {
        id:16,
        title: "thor",
        category: "family",
        price: 70.00,
        img: "/img/Banner/lionking.jpg",
        desc: `lion king`
    },
]

// script for navigation bar
// called for navbar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
// end
// called movie menu
const procontainer = document.querySelector(".pro-container")
const btnContainer = document.querySelector('.btn-container')
// navbar command
if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
    })
}
// display all items when page load
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<div class="pro" onclick="window.location.href='smovie.html';">
            <img src=${item.img} alt=${item.title}>
            <div class="des">
                <span>${item.title}</span>
                <h5>${item.price}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${item.price}</h4>
            </div>
            <a href="#"><i class="fa fa-video cart"></i></a>
        </div>`
    })
    displayMenu = displayMenu.join("");

    procontainer.innerHTML = displayMenu;
}
function displayMenuButtons(){
    const categories = menu.reduce(
        function (values ,item){
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values;
        },
        ["all"]
    )
    const categoryBtns = categories.map(function (category){
        return ` <button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
    })
    .join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn")
    // console.log(filterBtns);
    filterBtns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            }else{
                displayMenuItems(menuCategory);
            }
        })
    })
}