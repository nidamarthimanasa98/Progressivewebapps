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



}//
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
