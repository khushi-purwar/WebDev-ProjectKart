const data=[
    {
        name:"Jack",
        age:18,
        city:"Kolkata",
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name:"Rachel",
        age:20,
        city:"Delhi",
        language:'C++',
        framework:'Data Structures',
        image:'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name:"Sumit",
        age:21,
        city:"Chennai",
        language:'Javascript',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/men/50.jpg'
    },
    {
        name:"Jeniffer",
        age:18,
        city:"Mumbai",
        language:'PHP',
        framework:'Web Development',
        image:'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name:"Mohit",
        age:22,
        city:"Jaipur",
        language:'Go',
        framework:'Framework Go',
        image:'https://randomuser.me/api/portraits/men/63.jpg'
    },

]

function cvIterator(profiles){
    let nextIndex=0;
    return {
        next:function(){
            return nextIndex<profiles.length?{value:profiles[nextIndex++],done:false}:{done:true};
        }
    };
}
let candidate=cvIterator(data);
run();
let next=document.getElementById('next');
next.addEventListener('click',run);
function run(){
        let pic=document.getElementById('pic');
        let profile=document.getElementById('profile');
        let curCandidate=candidate.next().value;
        if(curCandidate!=undefined){
        pic.innerHTML=`<img src="${curCandidate.image}">`;
        profile.innerHTML=`<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"><b>Name : </b>${curCandidate.name}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"><b>Age : </b>${curCandidate.age}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"><b>City : </b>${curCandidate.city}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"><b>Language : </b> ${curCandidate.language}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"><b>Framework : </b>${curCandidate.framework}</a>  
      </div>`;
        }
        else{
            alert('End of candidate applications')
            location.reload();
        }
}