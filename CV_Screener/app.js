// data is an array which contains info of candidates
const data = [
    {
        name: "Prottush Negi",
        age: 34,
        city: "Bengaluru",
        language: "C++",
        framework: "Node.js",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        exp: "10"
    },
    
    {
        name: "Sohan das",
        age: 26,
        city: "Kolkata",
        language: "Javascript",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/84.jpg",
        exp: "3"
    },
    {
        name: "Mohan Karamchand",
        age: 27,
        city: "Chennai",
        language: "Java++",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        exp: "4"
    },
    {
        name: "Mohd. Zubair",
        age: 36,
        city: "Delhi",
        language: "C#",
        framework: "Vue",
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        exp: "12"
    },
    {
        name: "Anjali Dawar",
        age: 38,
        city: "Ghaziabad",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        exp: "11"
    },
    {
        name: "Anjana Aggarwal",
        age: 31,
        city: "Gujarat",
        language: "C++",
        framework: "React",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        exp: "8"
    },
    {
        name: "Avantika Tomar",
        age: 28,
        city: "Lucknow",
        language: "Python",
        framework: "PHP",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
        exp: "6"
    },
    {
        name: "Prem Dubey",
        age: 40,
        city: "West Bengal",
        language: "C#",
        framework: "Vue",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        exp: "13"
    },

]

function cvIterator(profiles){
    let nxtIndex = 0;
    return{
        next: function(){
            return nxtIndex<profiles.length ?
            {value: profiles[nxtIndex++], done: false}:{done: true}
        }
    }
}
const candidates = cvIterator(data);
cvNext();

// Button listener
const next = document.getElementById("next");
next.addEventListener("click", cvNext);

function cvNext(){
    const currentcand = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if(currentcand != undefined){
    image.innerHTML = `<img src='${currentcand.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    
    <li class="list-group-item">${currentcand.name}</li>
    <li class="list-group-item">${currentcand.age} years old</li>
    <li class="list-group-item">Currently lives in ${currentcand.city}</li>
    <li class="list-group-item">Primarily works on ${currentcand.language}</li>
    <li class="list-group-item">with ${currentcand.framework}</li>
    <li class="list-group-item">${currentcand.exp} years of experience.</li>
  </ul>`;
    }

    else{
        alert("Applications finished.");
        window.location.reload();
    }
}