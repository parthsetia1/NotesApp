console.log("this is working");
shownotes();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    console.log(notesobj);
    addtxt.value="";
    shownotes();

});
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
        html+=`
        <div id="notes"style="width: 18rem;" >

        <div class="notecards  my-2 mx-2">
          <h5 class="card-title">NOTE ${index+1}</h5>
          <p>${element}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="adn adn-primary" style="margin-top: 15px;">delete note</button>
        </div>
        </div>`;
    });
    let htmlele=document.getElementById("notes");
    if(notesobj.length!=0)
    {
        htmlele.innerHTML=html;
    }
    else{
        htmlele.innerHTML="<h5>NOTHING TO SHOW HERE,USE ADD NOTE TO ADD A NOTE</h5>";
    }


};
function deletenote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
};
let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
let inputval=search.value.toLowerCase();
let notecards=document.getElementsByClassName("notecards");
Array.from(notecards).forEach(function(element){
let cardtxt=element.getElementsByTagName("p")[0].innerText;
if(cardtxt.includes(inputval))
{
    element.style.display="block";
}
else{
    element.style.display="none";
}
});
});