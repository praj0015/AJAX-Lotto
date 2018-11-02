document.addEventListener("DOMContentLoaded",init);

function getRandomInteger (min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max + 1); 
    return Math.floor(Math.random() * (max - min)) + min; 
}

function init(){
    
    
    document.getElementById("btnSend").addEventListener("click",getData,serverData);
    
}
function getData(){
    
    let url="https://davidst.edumedia.ca/mad9014/nums.php?digits=6&max=42";
    
    let formData = new FormData();
    
    formData.append("digits",document.getElementById("digits").value);
    formData.append("max",document.getElementById("max").value);
    
    let customSettings={
        mode:"cors",
        method:"POST",
        body : formData
    };
    
    let request=new Request(url,customSettings);
    
     fetch(request)
    .then(function(response){
        console.log(response);
        getRandomInteger(response.value);
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        alert(error);
    });
}
function serverData(){
    let url="https://davidst.edumedia.ca/mad9014/nums.php?digits=6&max=42";
    let customSettings={
        mode:"cors",
        method:"GET"
    };
    
    let request=new Request(url,customSettings);
    
    fetch(request)
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(data){
        let ul=document.querySelector('.num_list');
        ul.innerHTML="";
        for(let item in data){
            let li=document.createElement("li");
            li.innerHTML=data[item];
            ul.appendChild(li);
        }
        
        /*let df=new DocumentFragment();
        jsondata.forEach((user)=>{
            let li=document.createElement('li');
            let ph=document.createElement('placeholder');
            ph.textContent=
            
        })*/
    })
    .catch(function(error){
        alert(error);
    });
}
function navigate(){
    
    
}
