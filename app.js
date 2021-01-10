const tableMenu = document.getElementById("book-table")
const tableMenu2 = document.getElementById("book-table-1")
const locations = document.getElementById("location")
const online = document.getElementById("online")
const deliveries = document.getElementById("delivery")
let menu = document.querySelector("#menu")
let headNav = document.querySelector('#head-nav')
// let opaque = document.querySelector('#opaqueBg')
const nav = document.getElementById("nav")
let access = document.querySelector("#accessIcon")
let accessMenu = document.querySelector("#pop-menu")

//open accessibility menu
access.addEventListener( "click",function() {
    accessMenu.classList.remove('hidden')
    console.log(accessMenu)
    //close accessibility menu
    accessMenu.addEventListener('click', function () {
        accessMenu.classList.add('hidden')
        console.log(accessMenu)

    })
})
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

menu.addEventListener( "click",function(){
    nav.classList.toggle('show-sliding-menu')
    headNav.innerHTML='Find your Menu'})