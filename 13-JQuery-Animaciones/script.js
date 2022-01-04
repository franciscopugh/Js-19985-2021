let darkMode;

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    darkMode = "light"
}

localStorage.setItem('darkMode', darkMode)

$(() => {
    if(localStorage.getItem('darkMode') == "dark") {
        $('body').addClass('darkMode')
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
    } else {
        $('#btnLightMode').hide()
    }

    $('#btnDarkMode').click(() => {
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()

        $('body').css({
            "background-color": "black",
            "color": "azure"
        })
        //$('body').addClass('darkMode')
        localStorage.setItem('darkMode', "dark")
    })

    $('#btnLightMode').click(() => {
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()
        $('body').css({
            "background-color": "azure",
            "color": "black"
        })
        //$('body').removeClass('darkMode')
        localStorage.setItem('darkMode', "light")
    })

    $('#btnAnimacion').click(function() {
        $('#box').animate({
            width: "300px",
            height: "300px"
        }, {
            duration: 800,
            easing: "linear",
            complete: () => {
                console.log(this)
                $(this).after("<p>Hola Coders!</p>")
            }
        })
    })

    $('#parrafo1').animate({
        "font-size": "50px"
    }).fadeOut(4000).delay(1000).fadeIn(4000)
})