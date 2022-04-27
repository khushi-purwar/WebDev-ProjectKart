var list={};
var res={};
var a;
$(document).ready(function(){
    loadLeft();
    loadRight();
    $("#newQues").click(function(){
        loadRight();
    });

    $("#addList").click(function(evt){
        var clicked = evt.target;
        //console.log(clicked.className);
        var clss=clicked.className;
        a=clss;
        if(clss!="p-2" && clss!="")
            $("#right").empty();
        discussion(clss);
    });
    filterSearch();

});

function addToLeft()
{
    var subject=document.getElementById("subject").value;
    var question=document.getElementById("question").value;

    if(subject==='' || question=='')
    {
        alert("Cannot Submit Empty Data");
        return;
    }
    localStorage.setItem(question, JSON.stringify([subject, question]));
    var data=JSON.parse(localStorage.getItem(question));
    //console.log(data);
    createLists(data);
    $("#subject").val('');
    $("#question").val('');
}

function createLists(data)
{
    var div=document.createElement("li");
    div.setAttribute("id", data[0]);
    var h3=document.createElement("h3");
    h3.setAttribute("class", data[0]);
    var h6=document.createElement("h6");
    h6.setAttribute("class", data[0]);
    var hr=document.createElement("hr");
    div.style.padding="5px";
    hr.style.margin="0px";
    h3.innerHTML=data[0];
    h6.innerHTML=data[1];
    div.appendChild(h3);
    div.appendChild(h6);
    div.appendChild(hr);
    document.getElementById("addList").appendChild(div);
    //console.log(div);
}

function loadLeft()
{
    for(i=localStorage.length-1; i>=0; i--)
    {
        var key=localStorage.key(i);
        //console.log(typeof key);
        if(key.endsWith("^key^")==false){
            var data=JSON.parse(localStorage.getItem(key));
            createLists(data);
        }
    }
}

function loadRight()
{
    var right=document.getElementById("right");
    $("#right").empty();
    var h1=document.createElement("h1");
    h1.innerHTML="Welcome to Discussion Portal !";
    var h6=document.createElement("h6");
    h6.innerHTML="Enter a subject and question to get started."
    var div1=document.createElement("div");
    div1.setAttribute("class","form-group");
    var ip=document.createElement("input");
    ip.setAttribute("type","text");
    ip.setAttribute("class", "form-control");
    ip.setAttribute("id","subject");
    ip.setAttribute("placeholder","JSON and Web storage");
    ip.style.width="50%";
    div1.appendChild(ip);

    var div2=document.createElement("div");
    div2.setAttribute("class","form-group");
    var textArea=document.createElement("textarea");
    textArea.setAttribute("class", "form-control");
    textArea.setAttribute("id","question");
    textArea.setAttribute("rows","4");
    textArea.setAttribute("placeholder","How to use Web storage");
    div2.appendChild(textArea);

    var btn=document.createElement("button");              //submit ques
    btn.setAttribute("class", "btn btn-primary");
    btn.innerHTML="Submit";
    btn.setAttribute("id","submit");
    btn.setAttribute("onclick","addToLeft()");
    btn.style.float="right";

    right.appendChild(h1);
    right.appendChild(h6);
    right.appendChild(div1);
    right.appendChild(div2);
    right.appendChild(btn);
}


function discussion(clss)
{
    try{
        var d=document.getElementsByClassName(clss);
        //console.log(typeof JSON.stringify(d[0].firstChild)[0]);
        //console.log(d[1].firstChild);

        var div=document.createElement("div");
        var h3=document.createElement("h3");
        h3.setAttribute("id", "heading");
        var h6=document.createElement("h6");
        h6.setAttribute("id", "f");

        h3.innerHTML=getText(d[0].firstChild);
        h6.innerHTML=getText(d[1].firstChild);
        div.appendChild(h3);
        div.appendChild(h6);
        div.style.background="#D3D3D3";
        div.style.padding="15px";
        $("#right").append("<h5>Question</h5>");
        $("#right").append(div);

        var btn=document.createElement("button");               //resolve button
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("id","resolve");
        btn.setAttribute("onclick","resolving()");
        btn.innerHTML="Resolve";
        btn.style.float="right";
        btn.style.marginTop="10px";
        $("#right").append(btn);

        $("#right").append("<h5 id='response'>Response</h5>");
        $("#response").css({"margin-top": "50px", "margin-bottom": "10px", "padding":"10px"});

//Response entries-------------------------------------//
        var div=document.createElement("div");
        div.setAttribute("id","responseDiv");
        $("#right").append(div);
//------------------------------------------------------//

        $("#right").append("<h4 id='addR'>Add Response</h4>");
        $("#addR").css({"margin-top": "10px", "margin-bottom": "2px", "padding":"15px"});

        var name=document.createElement("div");
        name.setAttribute("class","form-group");
        var ip=document.createElement("input");
        ip.setAttribute("type","text");
        ip.setAttribute("class", "form-control");
        ip.setAttribute("id","name");
        ip.setAttribute("placeholder","Enter Name");
        name.style.paddingLeft="15px";
        ip.style.width="40%";
        name.appendChild(ip);
        $("#right").append(name);

        var txtA=document.createElement("div");
        txtA.setAttribute("class","form-group");
        var area=document.createElement("textarea");
        area.setAttribute("id", "comment");
        area.setAttribute("class", "form-control");
        area.setAttribute("placeholder","Enter Comment");
        area.setAttribute("rows","3");
        txtA.style.paddingLeft="15px";
        txtA.appendChild(area);
        $("#right").append(txtA);

        var btn=document.createElement("button");       //add response button
        btn.setAttribute("class", "btn btn-primary");
        btn.setAttribute("onClick", "addResponse()");
        btn.innerHTML="Submit";
        btn.style.float="right";
        $("#right").append(btn);

        addResponseList(clss+"^key^");

    }
    catch(e){}
}
function getText( obj ) {
    return obj.textContent ? obj.textContent : obj.innerText;
}

var arr={};
function addResponse()
{
    $("#responseDiv").empty();
    var nam=document.getElementById("name").value;
    var comment=document.getElementById("comment").value;
    var key=a+"^key^";
    var v;
    var localArr=JSON.parse(localStorage.getItem(key));
    if(nam==='' || comment=='')
    {
        alert("Cannot Submit Empty Data");
        addResponseList(key);
        return;
    }

    if(localArr!=null){
        if(nam in localArr){
            var lcom=localArr[nam];
            lcom.push(comment);
            localArr[nam]=lcom;
        }
        else{
            localArr[nam]=[comment];
        }
        localStorage.setItem(key, JSON.stringify(localArr));
    }
    else{
        v={[nam]:[comment]};
        localStorage.setItem(key, JSON.stringify(v));
    }
    $("#name").val('');
    $("#comment").val('');
    addResponseList(key);
}

function addResponseList(key)
{
    var val=JSON.parse(localStorage.getItem(key));
    var len=Object.keys(val).length;
    for(i in val){
        for(var j=0; j<val[i].length; j++){
            //console.log(i+" -> "+val[i][j]);
            var div=document.getElementById("responseDiv");
            var h5=document.createElement("h5");
            var p=document.createElement("span");
            var hr=document.createElement("hr");
            hr.style.marginBottom="0px";
            h5.innerHTML=i;
            p.innerHTML=val[i][j];
            div.appendChild(h5);
            div.appendChild(p);
            div.appendChild(hr);
            div.style.background="#D3D3D3";
            div.style.paddingLeft="10px";
            div.style.paddingRight="10px";
        }
    }
}

function resolving()
{
    var h=document.getElementById("heading").firstChild;
    var f=document.getElementById("f").firstChild;

    h=getText(h);
    f=getText(f);
    localStorage.removeItem(f);
    localStorage.removeItem(h+"^key^");
    $("#addList").empty();
    loadLeft();
    loadRight();
}

function filterSearch()
{
    var $rows = $('#addList li');
    $('#search').keyup(function() {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function() {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });
}