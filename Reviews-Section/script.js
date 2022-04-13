// local review data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "Software Engineer",
      img:
        "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web developer",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYfHD5Iv4wHuuRrgaYq7YoL6v8cXNq9tEsg&usqp=CAU",
      text:
        "Hello world,dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    },
    {
      id: 3,
      name: "peter jones",
      job: "Digital Marketing",
      img:
        "https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg",
      text:
        "HI,friend dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    },
    {
      id: 4,
      name: "Boby Peteer",
      job: "CEO",
      img:
        "https://image.shutterstock.com/image-photo/portrait-young-happy-man-smiling-260nw-1715732143.jpg",
      text:
        "Hey,how are you.dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    },
  ];
//   select element
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

// set starting item
let currentItem =0;
//load intial item
window.addEventListener('DOMContentLoaded',()=>{
showPerson(currentItem);
})
//show person based on item
function showPerson(){
    const item=reviews[currentItem];
    img.src =item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
    
}
//show next person
nextBtn.addEventListener('click',()=>{
currentItem++;
if (currentItem> reviews.length-1){
    currentItem=0;
}
showPerson()
});
//show prev-btn
prevBtn.addEventListener('click',()=>{
    currentItem--;
    if (currentItem<0 ){
        currentItem=reviews.length-1;
    }
    showPerson()
    });
    // SHOW RANDOM PERSON
    randomBtn.addEventListener('click',()=>{
        currentItem=Math.floor(Math.random()*reviews.length);
        showPerson();
    })