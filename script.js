let input = document.getElementById("ip")
let btn = document.querySelector(".btn button")
let images = document.querySelector(".images")
let load = document.querySelector("#load")


const accessKey = "bCSFppQl34DFjG8P_ja1HfNd87yK22-RxA7zyr8B_F4"
let page=1
let keyword=""

function download(imgurl){
    fetch(imgurl).then(res=>res.blob()).then(file=>{
        let a=document.createElement("a")
        a.href=URL.createObjectURL(file)
        a.download=new Date().getTime()
        a.click()
    }).catch(()=>alert("failed download"))
    
}

async function getResponse() {
    
    keyword = input.value
    console.log(input.value);
    
    let url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    let response = await fetch(url)
    let data = await response.json()
    
    let results = data.results;

    if (page==1) {
        images.innerHTML=""
        
    }

    load.style.display="block"

    results.map((result)=>{
        let li=document.createElement("li")
        li.classList.add("image")
        let html=`<img src="${result.preview_photos[0].urls.small}" alt="" class="photo">
                <div class="details">
                    <div class="user">
                        <img src="images/camera.svg" alt="">
                        <span>${result.title}</span>
                    </div>
                    <div class="download" onclick=download('${result.preview_photos[0].urls.small}')>
                        <img src="images/download.svg" alt="">
                    </div>
                </div>`

        li.innerHTML=html
        images.appendChild(li)
    })
    
}

btn.addEventListener("click", ()=>{
    page=1
    getResponse()
})

load.addEventListener("click",()=>{
    page++
    getResponse()
})

input.addEventListener("keyup",(e)=>{
    page=1
    if (e.key=="Enter") {
        getResponse()
        
    }
})