const jokebtn=document.querySelector(".jokebtn")
const api=document.querySelector(".api")
const loading=document.querySelector(".loader")

function loader(){
    loading.classList.add("active")
api.classList.remove("active")
}

function closeloader(){
    loading.classList.remove("active")
    api.classList.add("active")
}

async function displayjoke(){
  loader();
   const header={ headers: { 'X-Api-Key': 'xE8jjTKBh+h893psiEvLug==w3FOaa6kenpYrI3x'}}
   const url="https://api.api-ninjas.com/v1/dadjokes?limit=5"
   let response= await fetch(url,header)
   response= await response.json()
   closeloader()
   api.innerHTML=response[0].joke;

}


jokebtn.addEventListener("click",displayjoke)