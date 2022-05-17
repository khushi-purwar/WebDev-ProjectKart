console.log("Script Running.......")
document.querySelector('.close').style.display = 'none';
document.querySelector('.menu').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.menu-item').style.display = 'inline';
        document.querySelector('.close').style.display = 'none';
    }
    else {
        document.querySelector('.menu-item').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.close').style.display = 'inline';
        }, 300)

    }
})

