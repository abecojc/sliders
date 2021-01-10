const tableMenu = document.getElementById("book-table")
const tableMenu2 = document.getElementById("book-table-1")
const locations = document.getElementById("location")
const online = document.getElementById("online")
const deliveries = document.getElementById("delivery")
let headNav = document.getElementById("head-nav")
let menu = document.querySelector("#menu")
const nav = document.getElementById("nav")
let access = document.querySelector("#accessIcon")
let opaque = document.querySelector("#opaqueBg")
let accessMenu = document.querySelector("#pop-menu")

//open accessibility menu
access.addEventListener( "click",function(){
    opaque.classList.remove("hidden") && accessMenu.classList.remove('hidden')
    console.log(opaque) && console.log(accessMenu)
    //close accessibility menu
    window.addEventListener("click",function(e){
        if(e.target!==accessMenu){
            opaque.classList.add('hidden') && accessMenu.classList.add('hidden')}
        else{
            console.log(opaque) && console.log(accessMenu)
            return false

        }})
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
    headNav.innerHTML='Find your Menu'
})