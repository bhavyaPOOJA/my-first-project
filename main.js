 // function Loadjson(file,callback){
	// var xhr = new XMLHttpRequest();
 // 	xhr.overrideMimeType("application/json");
 // 	xhr.open("GET",file,true);
 // 	xhr.onreadystatechange=function(){
 // 		if(xhr.readyState === 4 && xhr.status=="200")
 // 		{		callback(xhr.responseText);
	// 	} 	};

 // xhr.send(null);
 // }
 // Loadjson("data.json",function(text)
 // {
	// var data=JSON.parse(text);
 // 	console.log(data);
 // 	basics(data.details);
 // 	careerinfo(data.careerinfo);
 // 	qual(data.eduqua);
	// skillset(data.technicalskills);
 // 	achieve(data.ach);
 // })
 function loadjson(file)
 {
 	return new Promise((resolve,reject)=>{
 		return fetch(file).then(response=>{
 			if(response.ok){
 				resolve(response.json());
 			}
 			else
 			{
 				reject(new Error("error"));
 			}
 		})
 	})

 	
 }
 var newfile = loadjson("data.json");
 newfile.then(data=>{
 
  	console.log(data);
  	basics(data.details);
 	careerinfo(data.careerinfo);
    	qual(data.eduqua);
	 skillset(data.technicalskills);
  	 achieve(data.ach);
  	
 })
var left=document.querySelector(".left")
function basics(det){
  var img=document.createElement("img");
  img.src=det.image;
  left.appendChild(img);
  var name1=document.createElement("h3")
    name1.textContent=det.name;
    left.appendChild(name1);
  var address=document.createElement("h6");
    address.textContent="address";
    left.appendChild(address);
  var email=document.createElement("a");
    email.href="mailto:bhavyanimmala55@gmail.com";
    email.textContent=det.email;
    left.appendChild(email);
  var pno=document.createElement("h6");
    pno.textContent=det.phno;
    left.appendChild(pno);
  var hrline=document.createElement("hr");
    left.appendChild(hrline);
  var add=document.createElement("add");
    add.textContent=det.add;
    left.appendChild(add)
}
var right=document.querySelector(".right")
function careerinfo(info){
	var inf=document.createElement("h4");
	inf.textContent=info.information;
	right.appendChild(inf);
    }
    function qual(q)
    {
    	var add1=document.createElement("h4");
    	add1.textContent="educational qualification";
    	right.appendChild(add1);
    	var hrline=document.createElement("hr");
    	right.appendChild(hrline);
    	var table=document.createElement("table");
    	table.border="2";
    	right.appendChild(table);
    	
    	tabledata="";
    	for(i=0;i<q.length;i++)
    	{
    		tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].institite+"</td><td>"+q[i].year+"</td><td>"+q[i].percentage+"</td></tr>"	;  		
    	}
    	table.innerHTML=tabledata;
    }
    function skillset(ss)
    {
    	var add1 = document.createElement("h3");
    	add1.textContent="technical skills";
    	right.appendChild(add1);
    	var hrline= document.createElement("hr");
    	  right.appendChild(hrline);
    	for(i=0;i<ss.length;i++)
	{ 
	 var s=document.createElement("h3");
	s.textContent=ss[i].title;
    right.appendChild(s);


    var ul=document.createElement("ul");
    var li =document.createElement("li");
    li.textContent=ss[i].info;
    ul.appendChild(li);
    right.appendChild(ul);


}}
function achieve(al)
{
	var ad1=document.createElement("h3");
	ad1.textContent="achievements";
	right.appendChild(ad1);
	for(i=0;i<al.length;i++)
	{
		
		var ul=document.createElement("ul");
    var li =document.createElement("li");
    li.textContent=al[i].info;
    ul.appendChild(li);
    right.appendChild(ul);	
}
}
function openpage()
{
	window.open("project1.html","_self,true");
}