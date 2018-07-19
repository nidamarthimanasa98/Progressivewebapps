function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}

getfile("file.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  CareerObjectives(data.CareerObjectives);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})
var child=document.querySelector(".childone");
function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
var name=document.createElement("h3");
name.textContent=det.name;
child.appendChild(name);
var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);
var mail=document.createElement("a");
mail.href="mailto:maanadutt1610@gmail.com";
mail.textContent=det.email;
child.appendChild(mail);
var Address1=document.createElement("h2");
Address1.textContent="ADDRESS:";
child.appendChild(Address1);
var hor=document.createElement("hr");
child.appendChild(hor);
var Address=document.createElement("h3");
Address.textContent=det.Address;
child.appendChild(Address);
}

var child2=document.querySelector(".childtwo");
function CareerObjectives(careerinfo){
  var info1=document.createElement("h2");
  info1.textContent="CAREER OBJECTIVE:";
  child2.appendChild(info1);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var info=document.createElement("h3");
  info.textContent=careerinfo.info;
  child2.appendChild(info);

}
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent="EDUCATIONAL QUALIFICATIONS:";
  child2.appendChild(ed);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<edu.length;i++){
    var deg=document.createElement("h3");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].institute;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);

    var eduli2=document.createElement("li");
    eduli2.textContent=edu[i].data;
    eduul.appendChild(eduli2);
    child2.appendChild(eduul);
  }
}
function skills(skillinfo){
    var tec=document.createElement("h2");
    tec.textContent="TECHNICAL SKILLS:";
    child2.appendChild(tec);

    var hr=document.createElement("hr");
    child2.appendChild(hr);
    var skilldata=document.createElement("table");
    skilldata.border="5";
    child2.appendChild(skilldata);
    tabledata="";
    for(i=0;i<skillinfo.length;i++){
      tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>"
    }
    skilldata.innerHTML=tabledata;
    // for(i=0;i<skillinfo.length;i++){
    //   var lang=document.createElement("h3");
    //   lang.textContent=skillinfo[i].title;
    //   child2.appendChild(lang);
    //
    //   var lang1=document.createElement("ul");
    //   var lang2=document.createElement("li");
    //   lang2.textContent=skillinfo[i].data;
    //   lang1.appendChild(lang2);
    //   child2.appendChild(lang1);
    //
        }
        function achievements(a){
          var a1=document.createElement("h2");
          a1.textContent="ACHIEVEMENTS:";
          child2.appendChild(a1);
          var hr=document.createElement("hr");
          child2.appendChild(hr);
          var a2=document.createElement("h4");
          a2.textContent=a.a2;
          child2.appendChild(a2);

}



//
// function Loadjson(file) {
//   return new Promise((resolve,reject)=>{
//     return fetch(file).then(response=>{
//       if(response.ok){
//         resolve(response.json());
//
//       }else{
//         reject(new Error('error'));
//       }
//
//     })
//   })
//
// }
//
// var file = Loadjson("data.json");
// file.data=>{
//   console.log(data);
// }
