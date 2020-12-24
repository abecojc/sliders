const tableMenu = document.getElementById("book-table")
const tableMenu2 = document.getElementById("book-table-1")
const locations = document.getElementById("location")
const online = document.getElementById("online")
const deliveries = document.getElementById("delivery")


const nav = document.getElementById("nav")

tableMenu.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
})

tableMenu2.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
})

locations.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
})
online.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
})
deliveries.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
})