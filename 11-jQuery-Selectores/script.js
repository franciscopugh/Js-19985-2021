/*
$(document).ready(function () {

})

$(function() {

})

$(() => {

})
*/

$(() => {
    console.log($('#parrafo1')) //document.getElementById("parrafo1")
    console.log($('.parrafos')) //document.getElementsByClassName("parrafos")
    console.log($('p'))        //document.getElementsByTagName("p")
    console.log($('p,a'))
    console.log($('#parrafo3, .parrafos, a, #parrafo4'))
    console.log($('p:first-child'))
    console.log($('.parrafos > p'))

    $('#parrafos').append("<p> Hola Coders </p>")
    $('#parrafos').prepend("<p> Hola Coders </p>")
})