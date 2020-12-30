const tableMenu = document.getElementById("book-table")
const tableMenu2 = document.getElementById("book-table-1")
const locations = document.getElementById("location")
const online = document.getElementById("online")
const deliveries = document.getElementById("delivery")
let headNav = document.getElementById("head-nav")

const nav = document.getElementById("nav")

tableMenu.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Book a Table'
})

tableMenu2.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Book a Table'
})

locations.addEventListener( "click",function(){
    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Set Your Location'

})
online.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Order Online'
})
deliveries.addEventListener( "click",function(){

    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Get Delivery'
})