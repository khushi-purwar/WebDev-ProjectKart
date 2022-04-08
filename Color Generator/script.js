function getRandomColor() 
{
    let s = "0123456789ABCDEF";
    let col = "#";
    let temp =0;
    for(let i=0;i<6;++i)
    {
       temp = Math.floor( Math.random() * 16 ); // genreates number between 0-15
       col = col + s[temp];
    }
return col;
}
function getRandomColorLight()
{
    let s = "789ABCDEF" // this will generate lighter colors
    let col = "#";
    let temp =0;
    for(let i=0;i<6;++i)
    {
       temp = Math.floor( Math.random() * 9 ); // genreates number between 0-9
       col = col + s[temp];
    }
return col;
}
function getRandomColorDark()
{
    let s = "01234567" // this will generate dark colors
    let col = "#";
    let temp =0;
    for(let i=0;i<6;++i)
    {
       temp = Math.floor( Math.random() * 8 ); // genreates number between 0-8
       col = col + s[temp];
    }
return col;
}
function change()
{
    console.log("Change function accessed");
    // color comparisions should be avoided
    let element = document.getElementById("bg");
    if(element.className == "changed" )
    {
        element.classList.remove("changed");
        changeButton("Change Again")
    }
    else
    {
    element.className="changed";
        changeButton("Revert Back");
    }
}
function changeButton(data)
{
    document.getElementById("but1").innerHTML = data;
}
function magic()
{
    console.log("Magic function accessed");
    let col = getRandomColor();
    document.getElementById("bg").style.backgroundColor=col;
}

// these three are for infinite ones
function start(n)
{
    if(n==1)setInterval(infinitemagicLight,1000);
    else setInterval(infinitemagicDark,1000);
}
function infinitemagicLight()
{
    let i=0;
    let col = getRandomColorLight();
    document.getElementById("bg").style.backgroundColor=col;
}
function infinitemagicDark()
{
    let i=0;
    let col = getRandomColorDark();
    document.getElementById("bg").style.backgroundColor=col;
}

function gradient()
{   
console.log("Under Development");
}