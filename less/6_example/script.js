let data = [
    {
        icon: "fa-thumbs-up",
        title: "Unlimited Access",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }, {
        icon: "fa-users",
        title: "Expert Teachers",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }, {
        icon: "fa-pencil",
        title: "Learn Anything",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }, {
        icon: "fa-book",
        title: "Many Courses",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }, {
        icon: "fa-star",
        title: "Bright Future",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }, {
        icon: "fa-check",
        title: "Verified Course",
        description: "Sit amet consect etur adipi sicing elit. Rem quib usdam corporis, dolores quos, nobis culpaest",
    }
]

let grid = document.querySelector(".gridsystem")
data.forEach(items => {
    grid.innerHTML += `
            <div class="box">
                    <i class="fa-solid ${items.icon}"></i>
                    <h2>${items.title}</h2>
                    <p>${items.description}</p>
            </div>`
})