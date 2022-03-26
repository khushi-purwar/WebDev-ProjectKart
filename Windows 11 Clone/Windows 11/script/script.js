
let startbutton = document.getElementById("startbutton")
let startmenu = document.getElementsByClassName("startmenu")[0]

let searchbutton = document.getElementById('searchbutton')
let searchmenu = document.getElementsByClassName("searchmenu")[0]


let widgetsIcon = document.getElementById("widgetsIcon")
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]


startbutton.addEventListener("click" , ()=>{
    
    if(startmenu.style.bottom== "-650px"){
        widgetsmenu.style.left = "-950px"
        searchmenu.style.bottom = "-650px"
        startmenu.style.bottom = "55px"
    }
    else{
        startmenu.style.bottom = "-650px"
    }

        
    }
)

searchbutton.addEventListener("click" , ()=>{
    
    if(searchmenu.style.bottom== "-650px"){
        widgetsmenu.style.left = "-950px"
        startmenu.style.bottom = "-650px"
        searchmenu.style.bottom = "55px"
    }
    else{
        searchmenu.style.bottom = "-650px"
    }

        
    }
)

widgetsIcon.addEventListener("click" , ()=>{
    
    if(widgetsmenu.style.left== "-950px"){
       startmenu.style.bottom = "-650px"
       searchmenu.style.bottom = "-650px"
       widgetsmenu.style.left = "0px"
    }
    else{
        widgetsmenu.style.left = "-950px"
    }

}
)