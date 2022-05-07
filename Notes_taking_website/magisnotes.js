
showNote();
let btn=document.getElementById('addBtn');
let alt=document.getElementById('alert');
btn.addEventListener('click',function(e){
    let addText=document.getElementById('addTxt');
    let addTitle=document.getElementById('addTitle');
    let notes=localStorage.getItem('notes');
    if(notes==null){
       notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        mytitle:addTitle.value,
        myText:addText.value
    }
    if(addTitle.value!=""){
    notesObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    }
    else{
        let str="";
        str=str+`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Please add a valid note title.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      alt.innerHTML=str;
      setTimeout(() => {
          alt.innerHTML="";
      }, 4000);
    }
    addText.value="";
    addTitle.value="";
    showNote();
})
function showNote(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
       notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html=html+`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${index+1}. ${element.mytitle}</h5>
                                <p class="card-text"> ${element.myText}</p>
                                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                        </div>
                    </div>`
    });
    let dis=document.getElementById('notes');
    if(notesObj.length!=0){
        dis.innerHTML=html;
    }
    else{
        dis.innerHTML=`<div class="alert alert-warning" role="alert">
        Nothing to show! Add a note.
      </div>
      `;
    }
}

function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
       notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNote();
}

let search =document.getElementById('searchTxt');
search.addEventListener('input',function(e){
    let mytxt=search.value.toLowerCase();
    let card=document.getElementsByClassName('noteCard');
    Array.from(card).forEach(element=>{
        let para=element.getElementsByTagName('h5')[0].innerText;
        if(para.toLowerCase().includes(mytxt) ){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})