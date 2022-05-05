

let headerdiv=document.createElement("div")
let lable3=document.createElement("lable")
lable3.innerHTML="<h1>given input datas</h1><br><h5>rank-popularity-mal_id-score-url-images- x_scored_by</h5>"
let lable=document.createElement("lable")
lable.innerText="enter details"
let br=document.createElement("br")
let input=document.createElement("input")
input.setAttribute("id","inpvalue")
let btn=document.createElement("button")
btn.setAttribute("id","btn_action")
btn.innerHTML="click"
btn.style.margin="5px"
btn.style.width="70px"
btn.addEventListener("click",f2)

headerdiv.append(lable3, lable,br,input,btn)
document.body.append(headerdiv)


function f2(){
    let get=document.getElementById("inpvalue").value
    console.log(get)
fetch(`https://api.jikan.moe/v4/anime`)
.then((data)=>data.json())
.then((data)=>{
    console.log(data)
    let pagination=data.pagenation
    let dataarr=data.data
    dataarr.map((c)=>{
        console.log(c)

        let col3=document.createElement("div")
        col3.classList.add("col")
        col3.innerHTML=`get${c[get]}`
        headerdiv.appendChild(col3)

// if(get==c.popularity){
    //  var img_src = document.getElementById("my-img").src; console.log(img_src);
    if(get=="mal_id"|| get=="url"){
let div1=document.createElement("div")
div1.classList.add("row")
    let lable1=document.createElement("lable")
    lable1.style.color="blue"
// lable1.innerHTML=`popularity${c.popularity}`
lable1.innerHTML=get+"-"+c[get]


headerdiv.appendChild(lable1)
headerdiv.append(div1)
    }
 
    else if(get=="images"){
        console.log(get)
        console.log(data)
        let dataArray=data.data
        for(let i=0;i<dataArray.length;i++){
        

        
        let isImages = dataArray[i].images !== undefined;
        console.log(isImages)

             if(isImages){
                  let imagesObj = dataArray[i].images;
                
let isJPG = imagesObj.jpg !== undefined;
console.log(isJPG)
             if(isJPG){
                  let jpgObj = imagesObj.jpg;

let isImageUrl = jpgObj.image_url !== undefined;
console.log(isImageUrl)
             if(isImageUrl){
                  let imageUrl = jpgObj.image_url;
                  console.log(imageUrl)

                  var img1=document.createElement("img")
                  
                  img1.src=imageUrl;
          
                  let div2=document.createElement("div")
                 div2.classList.add("row")
                 
                 let divimg=document.createElement("div")
               
                 divimg.append(img1)
                  div2.append(divimg)
                 headerdiv.append(div2)
}
}
}
        }
      
        
        // var img2=document.createElement("img")
        // img2.src=`${data.images.webp.image_url}`;
        // headerdiv.appendChild(img2)
    }

// } 
    })


})


.catch((err)=>{
    console.log(err)
})
}




