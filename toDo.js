// I need to write a script, which takes the input from the form and display the same input to the form, but in a list manner.

// lest write the script, and if needed will do the changes.


function checklist()
{
    console.log("inside the checklist function");
    var ftitle=document.getElementById("Ftitle").value ;
    var fdesc=document.getElementById("fdesc").value ;

//     var dummyh1=document.getElementById("dummyh1");

//     var finalcheckCont=document.getElementById("finalchecklist");
//     var Listh3tag=document.createElement("h3");
//     var Listh6tag=document.createElement("h6");

// finalcheckCont.insertBefore(Listh3tag,dummyh1);

// finalcheckCont.insertAdjacentElement("beforeend",Listh6tag);
// Listh3tag.innerHTML=ftitle;
// Listh6tag.innerHTML=fdesc;   

// note: when we put any title and description , it doesnt store in browser, and it goes away when we refresh ,, i wana save the tasks on the website, but not on the websites server, but on the webpage  itself.

// so even if I refresh , or change the sessio , I can still go and access the tasks I added yesterday.

// also note, when I add title ad description , //
//all the title are going into single line, as I have in the the script mention them to insert into a single tag.

// how to seperate every titles to go and sit in a separate tag each time, same for the description?

// and most important how to store all the Title and description coming from user/form , how to store each one of them??

// use array?? or object??
let todos=[];
let localtodo=localStorage.getItem("keyforlists");

if (localtodo!= null)
{
todos= JSON.parse(localtodo) //JSON.parse(localtodo); 
// converting string into an object.

}

let todoobject={
title:ftitle,
description:fdesc,
id:Math.trunc(Math.random()*1000),

};         // here every object is coming and I think it is overriding the previous objec, if that is not the case,
 //then why are even we pushing it into  a array, why cannot we just push the whole object(which has all those other objects)??


 todos.push(todoobject);
//todos=[{"title1:description"},{"title2:description"},{},{}];



//localStorage.setItem("keyforlists// just a name for key","arrayOfobjects// [all the objects which were pushed pushed ]")
console.log(todos);
localStorage.setItem("keyforlists", JSON.stringify(todos));
 //console.log(todos); // it is array, you are trying to print array consist of more then one object.

//console.log(localStorage.getItem("keyforlists"));

ShowToDoOnHtml();

};

// note, we have successfully stored the data from form/user input to the web Storage/browser's local storage.
// now the main thing I have to do is that I have to dispaly each objects data to the html page. need to insert each object stored in localstorage.


function ShowToDoOnHtml()

{

var todoSofar=localStorage.getItem("keyforlists"); // this will give me string   " [{},{},{}]"
var todotaskObjs;
let content=" ";
if(todoSofar==null)
{
console.log("there is no To do taks so far")
}
 else{
      todotaskObjs=JSON.parse(todoSofar);
      //console.log(todotaskObjs);
      // once you get all the objects, that is we get the array of objects, and in order to dispaly , we need to traverse it
      
      for(let singletaskObj of todotaskObjs)
      {
   // now the main thing is how do you convert a object which you have {title: study, desc: I have to comple...}
// into noraml string title and description . ${singletaskObj.title} and ${singletaskObj.desc} we are going to use.



        content=content+`

<div class="card" style="margin-top:10px;">
<h3> ${singletaskObj.title} </h3>
<p> ${singletaskObj.description}</p>

</div>  `
// in the back tick we will basically have to the tasks in the html format
//we are using string interpolation and inserting  some string directly to the "finalchecklist" container's inner html //
     // so once the traversing is done

    //  content will basically have 4 to 5 cards   like these below
    
    
//     <div class="card">
// <h3> ${singletaskObj.title} </h3>
// <p> ${singletaskObj.description}</p>

// // </div> 
// with different Todo tasks with their title and desc 


// once content has all the Data I need to put it to the finalchecklist Container I have made .


}


}

document.getElementById("finalchecklist").innerHTML=content;

}


// whenever the script run, it will atleast display this function ShowToDoOnHtml();,
 //cos the other function ( checklist())is event function , will run only on a event occurance
// but showToDoOnHtml will run as soon as the scripts loads with html page.

// so this function will load all the dat from localstorage object to the html page,
// as soon as the html page is loaded nad this script on that page runs.

//
// even though the user has not passed any data yet, it will show the old data which was inserted before and alreaDY PRESENT IN THE LOCALSTORAGE.


ShowToDoOnHtml();


// note, if I use sessionStorage object , then once the  browser is closed , previous data which was store will also be gone.