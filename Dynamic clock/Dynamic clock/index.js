setInterval(() => {
    d=new Date();
    Htime=d.getHours();
    Mtime=d.getMinutes();
    Stime=d.getSeconds();

    Hrotation=30*Htime + Mtime/2;
    Mrotation=6*Mtime;
    Srotation= 6*Stime;

    hour.style.transform=`rotate(${Hrotation}deg)`;
    minute.style.transform=`rotate(${Mrotation}deg)`;
    second.style.transform=`rotate(${Srotation}deg)`;


}, 1000);