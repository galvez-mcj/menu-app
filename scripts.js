const menu = [
    {
        id: 1,
        title: "Dried Adobo",
        category: "ulam",
        price: 250,
        img: "./static/adobo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 2,
        title: "Malamig na Beer",
        category: "inumin",
        price: 80,
        img: "./static/beer.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 3,
        title: "Matapang na Kape",
        category: "inumin",
        price: 70,
        img: "./static/coffee.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 4,
        title: "Cornsilog with Sibuyas",
        category: "may kanin",
        price: 150,
        img: "./static/cornsilog.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 5,
        title: "Cheesy Dynamite",
        category: "pulutan",
        price: 70,
        img: "./static/dynamite.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 6,
        title: "Iced Tea with Honey",
        category: "inumin",
        price: 65,
        img: "./static/iced-tea.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 7,
        title: "Kalderetang Itik",
        category: "ulam",
        price: 350,
        img: "./static/kaldereta.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 8,
        title: "Lechon Kare-kare",
        category: "ulam",
        price: 350,
        img: "./static/karekare.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 9,
        title: "So Longsilog",
        category: "may kanin",
        price: 150,
        img: "./static/longsilog.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 10,
        title: "Pangbirthday Lumpia",
        category: "pulutan",
        price: 150,
        img: "./static/lumpia.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 11,
        title: "Malutong na Okoy",
        category: "pulutan",
        price: 150,
        img: "./static/okoy.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 12,
        title: "Malapot na Sinigang",
        category: "ulam",
        price: 250,
        img: "./static/sinigang.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 13,
        title: "Tumatalsik na Sisig",
        category: "ulam",
        price: 250,
        img: "./static/sisig.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 14,
        title: "Email Spamsilog",
        category: "may kanin",
        price: 150,
        img: "./static/spamsilog.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 15,
        title: "Love on Tapsilog",
        category: "may kanin",
        price: 175,
        img: "./static/tapsilog.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }, {
        id: 16,
        title: "Creamy Tofu",
        category: "pulutan",
        price: 150,
        img: "./static/tofu.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit eaque odit dolore, est deserunt."
    }
]

const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu)
    displayMenuBtns()
})

function displayMenuBtns() {
    // handle dynamic categories
    const categories = menu.reduce((values, item) => {
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ["all"])
    
    // create the buttons with dynamic content
    const categoryBtns = categories.map((category) => {
        return `
        <button class="filter-btn" type="button" data-id="${category}">${category}</button>
        `
    }).join("")
    
    // display the buttons
    btnContainer.innerHTML = categoryBtns
        
    // button function
    const filterBtns = document.querySelectorAll('.filter-btn')
    // filter items
    filterBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem
                }
            })

            // all items
            if (category === "all") {
                displayMenuItems(menu)
            } else {    // filtered
                displayMenuItems(menuCategory)
            }
        })
    })
}

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {

        return `
        <article class="menu-item">
            <img src="${item.img}" class="photo" alt="${item.title}">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">P ${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}

