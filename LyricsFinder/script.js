
const ele=document.querySelector('.element');
const btn=document.querySelector('.get');
const song=document.querySelector('.one');
const singer=document.querySelector('.two');
const leftcontainer=document.querySelector('.onegrid');
const rightcontainer=document.querySelector('.twogrid');
const lyricpage=document.querySelector('.lyrics');
const resetit=document.querySelector('.research');

let valueS;
let valueA;


btn.addEventListener('click',function()
{
    valueS=singer.value;
    valueA=song.value;

    if(!valueS && !valueA)
    {
        alert('Input text are empty');
        return 
    }
    let col=Math.floor(Math.random()*300)+1;
    lyricpage.style.backgroundColor=`rgb(${col*1/4},${col*1/2},200)`;

    return fetch(`https://api.lyrics.ovh/v1/${valueS}/${valueA}`).then(value=>{
        console.log(value)
        if(!value.ok)
        {
            throw new Error(`Song not found ${value.status}`);
        }
    return value.json();
}).then(data=>{
    console.log(data.lyrics);
    return data;
}).then((data)=>{
    lyricpage.insertAdjacentText('beforeend',data.lyrics);
    lyricpage.classList.remove('not');
    lyricpage.scrollIntoView({behavior:'smooth'});
    resetit.classList.remove('hid');
    btn.classList.add('hid');
}).catch(err=>{
    alert(`${err.message}`);
})
});
// console.log("Hello world");
// const request=new XMLHttpRequest();
// request.open('GET','https://api.lyrics.ovh/v1/ILLENIUM/Hearts on Fire');
// request.send();
// request.addEventListener('load',function()
// {
//     const obj=this.responseText
//     console.log(this.responseText);
//     console.log(obj);
// })

// fetch(`https://api.lyrics.ovh/v1/The Kid Laroi/STAY`).then(value=>{
//     return value.json();
// }).then(data=>{
//     console.log(data.lyrics);
// })




///Reset
resetit.addEventListener('click',function()
{
    song.value='';
    singer.value='';
    lyricpage.innerHTML='';
    lyricpage.classList.add('not');
    resetit.classList.add('hid');
    btn.classList.remove('hid');
})