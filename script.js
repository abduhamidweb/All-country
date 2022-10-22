"use strict";


// ALLLLL
async function Allcountry() {
   const response = await fetch("https://restcountries.com/v2/all");
   const result = await response.json();

   renderData(result);
   console.log(result);
}

Allcountry();


// RENDER=========
function renderData(data = []) {
   if (data.length === 0) {
            $("#loading-page").innerHTML = `
    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="red" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="white" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                to="-360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="blue" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
    </svg>

<style>
*{
    margin:0px;
    padding:0px;
}
#loading-page {
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#loading-page svg {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
}

body {
  overflow: hidden;
}
</style>
        `;
   } else {
      $("#loading-page").innerHTML = "";
      data.forEach((item) => {
         const card = createElement(
           "div",
           "box p-3 my-2 d-flex",
           `
         <img src="${item.flags.png}" alt="" class="box-img">
          <div class="box-body">
          <h2 class="country">${item.name}</h2>
           <p>${item.nativeName}</p>
          </div>`
         );

         card.dataset.info = item.name;

         $(".all").appendChild(card);

         card.addEventListener("click", (e) => {
           renderModal(card.getAttribute("data-info").toLowerCase());
         });
       });

    
   }
}

renderData();


// SEARCH
async function searchCountry(query) {
              $("#loading-page").innerHTML = `
    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="red" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="white" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                to="-360 50 50" repeatCount="indefinite" />
        </path>
        <path fill="blue" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </path>
    </svg>

<style>
*{
    margin:0px;
    padding:0px;
}
#loading-page {
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#loading-page svg {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
}

body {
  overflow: hidden;
}
</style>
        `;

   const data = await fetch(`https://restcountries.com/v2/name/${query}`);
   const res = await data.json();

console.log(res);
   $(".all").innerHTML = "";

   if (res.message) {
      $("#loading-page").innerHTML = `<img src="./images/1.jpg" alt="img" class="img-fluid dvCSs" >`;
   } else {
      renderData(res);
   }

}


// =============== SERACH
$(".search").addEventListener("keyup", (e) => {
   console.log(e.target.value.length);
   if (e.target.value.length === 0) {
      Allcountry();
   } else {
      searchCountry(e.target.value.trim().toLowerCase());
   }
});


// modal

$('.modal-content').style.display="none";

async function renderModal(data){

   const result = await fetch(`https://restcountries.com/v2/name/${data}`);
   const res = await result.json();

   const modal = createElement(
     "div",
     "modals",
     `
   <div class="card">
  <img src="${res[0].flags.svg}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res[0].name}</h5>
<div class="countryInfo"><p class="alpha2Code">alpha2Code=(${res[0].alpha2Code})</p>
            <p class="borders">borders=${res[0].borders}</p><p class="population">population=(${res[0].population})</p>
            <p class="nativeName">nativeName=(${res[0].nativeName})</p>
            <p class="numericCode">numericCode=(${res[0].numericCode})</p>
            <p class = "timezones" > timezones=(${res[0].timezones})</p>
            <p class="demonym">demonym=(${res[0].demonym})</p>
            <p class="latlng">latlng=(${res[0].latlng})</p>
            <p class="region">region=(${res[0].region})</p>
            <p class="capital">capital=(${res[0].capital})</p>
            <p class="callingCodes">callingCodes=(${res[0].callingCodes})</p>
            <p class="languages">languages=(${res[0].languages})</p></div >
  </div>
</div>
   
   `
   );


   $('.modal-content').style.display="flex";
   $('.wrapper').appendChild(modal) ;

   console.log(data);
   console.log(res);
}


$('.hideelement').addEventListener('click',()=>{
   $('.wrapper').innerHTML=""
   $('.modal-content').style.display="none";
})
