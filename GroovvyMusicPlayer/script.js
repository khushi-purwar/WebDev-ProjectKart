const audio1=document.querySelector('#myAudio1');
const audio2=document.querySelector("#myAudio2");
const audio3=document.querySelector("#myAudio3");
const audio4=document.querySelector("#myAudio4");
let Songtimer;
let active1=0;
let active2=0;
let active3=0;
let active4=0;
let intervalfunct;
let currentgoing;
let timerIncrSeconds1=0;
let timerIncrMinute1=0;
let timerIncrSeconds2=0;
let timerIncrMinute2=0;
let timerIncrSeconds3=0;
let timerIncrMinute3=0;
let firstrender;
let secondrender;
let thirdrender;
let fourthrender;
let timerIncrSeconds4=0;
let timerIncrMinute4=0;
let history=0;
let loadbarAnim;

const SongPageRendering=document.querySelector('.SongtoLoaded');
const SongBarContainer=document.querySelector('.SongBar');
SongBarContainer.innerHTML='';

const listitems=document.querySelectorAll('.Adjust');
const SingerContainer=document.querySelector('.ArtistContainer');
let active=0;
let next=1;
const SongListContainer=document.querySelector('.SongInsideContainer');
const SingerList=[
    {
        url:'/Song_Singers/wp2754671-dope-wallpaper-iphone.jpg',
        name:'Starboy'
    },
    {
        url:'/Song_Singers/wp6210001-travis-scott-computer-wallpapers.jpg',
        name:'Travis Scott'
    },
    {
        url:'/Song_Singers/uwp1278663.jpeg',
        name:'Selena Gomez'
    }
    ,{
        url:'/Song_Singers/wp5388344-billie-eilish-2020-wallpapers.jpg',
        name:'Billie Ellish'
    },
    {
        url:'/Song_Singers/4048075.jpg',
        name:'Juice WRLD'
    }
    ,{
        url:'/Song_Singers/uwp995921.jpeg',
        name:'Justin Bieber'
    }
    ,{
        url:'/Song_Singers/wp3959794-bebe-rexha-2019-wallpapers.jpg',
        name:'Bebe Rexha'
    },
    {
        url:'/Song_Singers/wp6383395-camila-cabello-havana-song-wallpapers.jpg',
        name:'Camila Cabello'
    }
];

const SongName=[
    {
        id:01,
        SongName:'Closer',
        Singer:'The Chainsmokers',
        Imglink:'/Song_Cover_Pictures/wp4606687-the-chainsmokers-closer-ft-halsey-wallpapers.jpg',
        SongLenght:'4:05',
        lenghtSong:245,
    },
    {
        id:02,
        SongName:'Cheap Thrills',
        Singer:'Sia ft. Sean Paul',
        Imglink:'/Song_Cover_Pictures/wp4523444-sia-cheap-thrills-wallpapers.jpg',
        SongLenght:'3:31',
        lenghtSong:211,
    },
    {
        id:03,
        SongName:'TakeAway',
        Singer:'The Chainsmokers,ILLENIUM',
        Imglink:'/Song_Cover_Pictures/wp4537274-the-chainsmokers-and-illenium-takeaway-wallpapers.jpg',
        SongLenght:'3:47',
        lenghtSong:227,
    },
    {
        id:04,
        SongName:'My Universe',
        Singer:'Coldplay, BTS',
        Imglink:'/Song_Cover_Pictures/wp9916876-coldplay-x-bts-my-universe-wallpapers.jpg',
        SongLenght:'3:46',
        lenghtSong:226,
    }
];


const loadingfun=function(value)
{
    // history=value+1;
    loadbarAnim.classList.remove('pauseAnime');
}

const RenderCoverPage=function(value)
{
    const SongDisplay=` <img class="ImgController" src="${SongName[value].Imglink}" alt="">
<div class="SongNameIns">${SongName[value].SongName}</div>
<div class="SongSingerName">${SongName[value].Singer}</div>`;

SongPageRendering.innerHTML='';
SongPageRendering.insertAdjacentHTML('beforeend',SongDisplay);

if(loadbarAnim && loadbarAnim.classList.contains('pauseAnime'))
{
    loadingfun(value);
}

if(history!==currentgoing)
{
    history=currentgoing;
const SongBarDisplay=`<div class="StartingTime">0:00</div>
<div class="LoadingSongbarParent">
<div class="loadingSongbar">
    <div class="loadbar"><div class="endbot"></div></div>
</div>
</div>
<div class="EndingTime">${SongName[value].SongLenght}</div>`;

SongBarContainer.innerHTML='';
SongBarContainer.insertAdjacentHTML('beforeend',SongBarDisplay);
Songtimer=document.querySelector('.StartingTime');
loadbarAnim=document.querySelector('.loadbar');
loadbarAnim.style.animationDuration=`${SongName[value].lenghtSong}s`;
}
}

let insertingel=`<div class="Item"></div>`;
let queryins;
listitems.forEach((item)=>{
    item.addEventListener('mouseenter',function(e)
    {
        e.target.insertAdjacentHTML('beforeend',insertingel);
        queryins=document.querySelector('.Item');
    })
})

listitems.forEach((item)=>[
    item.addEventListener('mouseleave',function()
    {
        queryins.remove();
    })
])





SingerList.forEach((value)=>{
    let html=`<div class="ContentArt Test">
    <img class="ControlImg" src=${value.url} alt="">
    <div class="SingerName">${value.name}</div>
</div>`;

SingerContainer.insertAdjacentHTML('beforeend',html);

});


SongListContainer.innerHTML='';
SongName.forEach((data,index)=>{
    const SongInsertHTML=`<div class="SingleSong">
<div class="straight">
<div class="SongIndex ">${data.id}</div>
<img class="SizeRed " src="${data.Imglink}" alt="">
<div class="Song-namediv ">
    <div class="NameofSong">${data.SongName}</div>
    <div class="SongSingerName">${data.Singer}</div>
</div>
</div>
<div class="straight ">
<div class="duration ">${data.SongLenght}</div>
<div class="LoveOutside Song${index+1} "><i class="fas fa-play"></i></div>
</div>
</div>`
    SongListContainer.insertAdjacentHTML('beforeend',SongInsertHTML);
});

// {
//      if(e.srcElement.classList.contains('LoveOutside') || e.srcElement.classList.contains('fa-play')||e.srcElement.classList.contains('fa-pause'))
//      {
//          if(active===0)
//          {
//          e.srcElement.innerHTML='';
//          let html=`<i class="fas fa-pause"></i>`;
//          e.srcElement.insertAdjacentHTML('beforeend',html);
//          active=1;
//          }
//          else{
//              e.srcElement.innerHTML='';
//              let html=`<i class="fas fa-play"></i>`;
//              e.srcElement.insertAdjacentHTML('beforeend',html);
//              active=0;
//          }
//      }

const button1=document.querySelector('.Song1');
const button2=document.querySelector('.Song2');
const button3=document.querySelector('.Song3');
const button4=document.querySelector('.Song4');

const TimmingFun=function(value)
{
    clearInterval(intervalfunct);
    if(value===1)
    {
     timerIncrSeconds2=0;
     timerIncrMinute2=0;
     timerIncrSeconds3=0;
     timerIncrMinute3=0;
     timerIncrSeconds4=0;
     timerIncrMinute4=0;


    intervalfunct=setInterval(()=>{
        timerIncrSeconds1=timerIncrSeconds1+1;
        timerIncrMinute1=Math.floor(timerIncrSeconds1/60);
        Songtimer.textContent=`${timerIncrMinute1}:${(timerIncrSeconds1%60).toString().padStart(2,'0')}`;
        if(timerIncrSeconds1>SongName[0].lenghtSong)
        {
            clearInterval(intervalfunct);
            timerIncrSeconds1=0;
            Songtimer.textContent=`0:00`
            button1.innerHTML='';
            let html=`<i class="fas fa-play"></i>`;
            button1.insertAdjacentHTML('beforeend',html);
            active1=0;
            history=0;
        }

    }, 1000);
    }
    else if(value===2)
    {
        timerIncrSeconds1=0;
        timerIncrMinute1=0;
        timerIncrSeconds3=0;
        timerIncrMinute3=0;
        timerIncrSeconds4=0;
        timerIncrMinute4=0;
   
   
       intervalfunct=setInterval(()=>{
           timerIncrSeconds2=timerIncrSeconds2+1;
           timerIncrMinute2=Math.floor(timerIncrSeconds2/60);
           Songtimer.textContent=`${timerIncrMinute2}:${(timerIncrSeconds2%60).toString().padStart(2,'0')}`;
           if(timerIncrSeconds2>SongName[1].lenghtSong)
           {
               clearInterval(intervalfunct);
               timerIncrSeconds2=0;
               Songtimer.textContent=`0:00`
               button2.innerHTML='';
               let html=`<i class="fas fa-play"></i>`;
               button2.insertAdjacentHTML('beforeend',html);
               active2=0;
               history=0;
           }
   
       }, 1000);

    }
    else if(value===3)
    {
        timerIncrSeconds1=0;
        timerIncrMinute1=0;
        timerIncrSeconds2=0;
        timerIncrMinute2=0;
        timerIncrSeconds4=0;
        timerIncrMinute4=0;

        intervalfunct=setInterval(()=>{
            timerIncrSeconds3=timerIncrSeconds3+1;
            timerIncrMinute3=Math.floor(timerIncrSeconds3/60);
            Songtimer.textContent=`${timerIncrMinute3}:${(timerIncrSeconds3%60).toString().padStart(2,'0')}`;
            if(timerIncrSeconds3>SongName[2].lenghtSong)
            {
                clearInterval(intervalfunct);
                timerIncrSeconds3=0;
                Songtimer.textContent=`0:00`
                button3.innerHTML='';
                let html=`<i class="fas fa-play"></i>`;
                button3.insertAdjacentHTML('beforeend',html);
                active3=0;
                history=0;
            }
    
        }, 1000);
    }
    else if(value===4)
    {
        timerIncrSeconds1=0;
        timerIncrMinute1=0;
        timerIncrSeconds2=0;
        timerIncrMinute2=0;
        timerIncrSeconds3=0;
        timerIncrMinute3=0;

        intervalfunct=setInterval(()=>{
            timerIncrSeconds4=timerIncrSeconds4+1;
            timerIncrMinute4=Math.floor(timerIncrSeconds4/60);
            Songtimer.textContent=`${timerIncrMinute4}:${(timerIncrSeconds4%60).toString().padStart(2,'0')}`;
            if(timerIncrSeconds4>SongName[3].lenghtSong)
            {
                clearInterval(intervalfunct);
                timerIncrSeconds4=0;
                Songtimer.textContent=`0:00`
                button4.innerHTML='';
                let html=`<i class="fas fa-play"></i>`;
                button4.insertAdjacentHTML('beforeend',html);
                active4=0;
                history=0;
            }
    
        }, 1000);

    }
}

const converttoPlay=function(data)
{
    if(data===1)
    {
        active2=0;
        active3=0;
        active4=0;
        button2.innerHTML='';
        let html2=`<i class="fas fa-play"></i>`;
        button2.insertAdjacentHTML('beforeend',html2);

        button3.innerHTML='';
        let html3=`<i class="fas fa-play"></i>`;
        button3.insertAdjacentHTML('beforeend',html3);

        button4.innerHTML='';
        let html4=`<i class="fas fa-play"></i>`;
        button4.insertAdjacentHTML('beforeend',html4);
        return ;

    }
    else if(data===2)
    {
        active1=0;
        active3=0;
        active4=0;
        button1.innerHTML='';
        let html1=`<i class="fas fa-play"></i>`;
        button1.insertAdjacentHTML('beforeend',html1);

        button3.innerHTML='';
        let html3=`<i class="fas fa-play"></i>`;
        button3.insertAdjacentHTML('beforeend',html3);

        button4.innerHTML='';
        let html4=`<i class="fas fa-play"></i>`;
        button4.insertAdjacentHTML('beforeend',html4);
        return ;
    }
    else if(data===3)
    {
        active1=0;
        active2=0;
        active4=0;
        button1.innerHTML='';
        let html1=`<i class="fas fa-play"></i>`;
        button1.insertAdjacentHTML('beforeend',html1);

        button2.innerHTML='';
        let html2=`<i class="fas fa-play"></i>`;
        button2.insertAdjacentHTML('beforeend',html2);

        button4.innerHTML='';
        let html4=`<i class="fas fa-play"></i>`;
        button4.insertAdjacentHTML('beforeend',html4);
        return;
    }
    else if(data===4)
    {
        active1=0;
        active2=0;
        active3=0;
        
        button1.innerHTML='';
        let html1=`<i class="fas fa-play"></i>`;
        button1.insertAdjacentHTML('beforeend',html1);

        button2.innerHTML='';
        let html2=`<i class="fas fa-play"></i>`;
        button2.insertAdjacentHTML('beforeend',html2);

        button3.innerHTML='';
        let html3=`<i class="fas fa-play"></i>`;
        button3.insertAdjacentHTML('beforeend',html3);
        return;
    }
}



button1.addEventListener('click',function()
{
    secondrender=0;
    thirdrender=0;
    fourthrender=0;
    currentgoing=1;
    if(active1===0)
    {
        converttoPlay(1);
        if(firstrender===0)
        {
        let movehtml=`<div class="rotatingBar"></div>`
        SongPageRendering.innerHTML='';
        SongPageRendering.insertAdjacentHTML('beforeend',movehtml);
        firstrender=1;
        }
        audio1.play().then(()=>{
            RenderCoverPage(0);
            TimmingFun(1);
        })
    button1.innerHTML='';
    let html=`<i class="fas fa-pause"></i>`;
    button1.insertAdjacentHTML('beforeend',html);
    active1=1;
    audio2.pause();
    audio2.currentTime=0;
    audio3.pause();
    audio3.currentTime=0;
    audio4.pause();
    audio4.currentTime=0;
    }
    else{
        clearInterval(intervalfunct);
        loadbarAnim.classList.add('pauseAnime');
        button1.innerHTML='';
        let html=`<i class="fas fa-play"></i>`;
        button1.insertAdjacentHTML('beforeend',html);
        active1=0;
        audio1.pause();
    }
});
button2.addEventListener('click',function()
{
    firstrender=0;
    thirdrender=0;
    fourthrender=0;
    currentgoing=2;
    if(active2===0)
    {
        converttoPlay(2);
        if(secondrender===0)
        {
        let movehtml=`<div class="rotatingBar"></div>`
        SongPageRendering.innerHTML='';
        SongPageRendering.insertAdjacentHTML('beforeend',movehtml);
        secondrender=1;
        }
        audio2.play().then(()=>{
            RenderCoverPage(1);
            TimmingFun(2);
        })
    button2.innerHTML='';
    let html=`<i class="fas fa-pause"></i>`;
    button2.insertAdjacentHTML('beforeend',html);
    active2=1;
    audio1.pause();
    audio1.currentTime=0;
    audio3.pause();
    audio3.currentTime=0;
    audio4.pause();
    audio4.currentTime=0;
    }
    else{
        clearInterval(intervalfunct);
        loadbarAnim.classList.add('pauseAnime');
        button2.innerHTML='';
        let html=`<i class="fas fa-play"></i>`;
        button2.insertAdjacentHTML('beforeend',html);
        active2=0;
        audio2.pause();
    }
});
button3.addEventListener('click',function()
{
    firstrender=0;
    secondrender=0;
    fourthrender=0;
    currentgoing=3;
    if(active3==0)
    {
        converttoPlay(3);
        if(thirdrender===0)
        {
        let movehtml=`<div class="rotatingBar"></div>`;
        SongPageRendering.innerHTML='';
        SongPageRendering.insertAdjacentHTML('beforeend',movehtml);
        thirdrender=1;
        }
        audio3.play().then(()=>{
            RenderCoverPage(2);
            TimmingFun(3);
        })
    button3.innerHTML='';
    let html=`<i class="fas fa-pause"></i>`;
    button3.insertAdjacentHTML('beforeend',html); 
    active3=1;
    audio1.pause();
    audio1.currentTime=0;
    audio2.pause();
    audio2.currentTime=0;
    audio4.pause();
    audio4.currentTime=0;
    }
    else{
        clearInterval(intervalfunct);
        loadbarAnim.classList.add('pauseAnime');
        button3.innerHTML='';
        let html=`<i class="fas fa-play"></i>`;
        button3.insertAdjacentHTML('beforeend',html);
        active3=0;
        audio3.pause();
    }
});
button4.addEventListener('click',function()
{
    firstrender=0;
    secondrender=0;
    thirdrender=0;
    currentgoing=4;
    if(active4===0)
    {
        converttoPlay(4);
        if(fourthrender===0)
        {
        let movehtml=`<div class="rotatingBar"></div>`
        SongPageRendering.innerHTML='';
        SongPageRendering.insertAdjacentHTML('beforeend',movehtml);
        fourthrender=1;
        }
        audio4.play().then(()=>{
            RenderCoverPage(3);
            TimmingFun(4);
        })
    button4.innerHTML='';
    let html=`<i class="fas fa-pause"></i>`;
    button4.insertAdjacentHTML('beforeend',html); 
    active4=1;
    audio1.pause();
    audio1.currentTime=0;
    audio2.pause();
    audio2.currentTime=0;
    audio3.pause();
    audio3.currentTime=0;
    }
    else{
        clearInterval(intervalfunct);
        loadbarAnim.classList.add('pauseAnime');
        button4.innerHTML='';
        let html=`<i class="fas fa-play"></i>`;
        button4.insertAdjacentHTML('beforeend',html);
        active4=0;
        audio4.pause();
    }
});



// ButtonPlay=document.querySelectorAll('.LoveOutside');
// ButtonPlay.forEach((button)=>{
//     button.addEventListener('click',function(e)
//     {
//         e.srcElement.get
//         if(active===0)
//         {
//         button.innerHTML='';
//         let html=`<i class="fas fa-pause"></i>`;
//         button.insertAdjacentHTML('beforeend',html);
//         active=1;
//         }
//         else{
//             button.innerHTML='';
//             let html=`<i class="fas fa-play"></i>`;
//             button.insertAdjacentHTML('beforeend',html);
//             active=0;
//         }
//         next=0;
//     })
// })
// {
//      if(e.srcElement.classList.contains('LoveOutside') || e.srcElement.classList.contains('fa-play')||e.srcElement.classList.contains('fa-pause'))
//      {
//          if(active===0)
//          {
//          e.srcElement.innerHTML='';
//          let html=`<i class="fas fa-pause"></i>`;
//          e.srcElement.insertAdjacentHTML('beforeend',html);
//          active=1;
//          }
//          else{
//              e.srcElement.innerHTML='';
//              let html=`<i class="fas fa-play"></i>`;
//              e.srcElement.insertAdjacentHTML('beforeend',html);
//              active=0;
//          }
//      }