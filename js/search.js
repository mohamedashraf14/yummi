let navWidth1 = $("#nav1").outerWidth();
let switchBtn = document.getElementById("switchBtn");
switchBtn.innerHTML = `<i class="fa-solid open-close-icon fa-2x fa-align-justify" id="menuBtn" onclick="switt()"></i>`;
$("#mainnav").animate({ left: -navWidth1 }, 0);
$("list").slideToggle(0);
console.log(navWidth1);

$("#closeBtn").click(function (e) {});

function switt(e) {
  $("#mainnav").animate({ left: "0px" }, 1000);
  console.log("okkk");
  switchBtn.innerHTML = `<i class="fa-solid open-close-icon fa-2x fa-x " onclick="switt2()" id="closeBtn"></i>`;
  $("list").slideToggle(1000);
}
function switt2(e) {
  $("#mainnav").animate({ left: "0px" }, 1000);
  $("#mainnav").animate({ left: -navWidth1 }, 1000);
  console.log("okkk");
  switchBtn.innerHTML = `<i class="fa-solid open-close-icon fa-2x fa-align-justify" id="menuBtn" onclick="switt()"></i>`;
  $("list").slideToggle(1000);
}
async function searchName(e = "") {
  let myResponse2 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`
  );
  data2 = await myResponse2.json();
  console.log(data2);
  displayName();
}

function displayName() {
  let cartona2 = "";
  for (let i = 0; i < data2.meals.length; i++) {
    cartona2 += ` <div class="col-md-3 col-sm-12" onclick="detailss(${data2.meals[i].idMeal})">
  <div class="position-relative mainImg">
    <img src="${data2.meals[i].strMealThumb}" class="w-100" alt="" />
    <div class="windowPhoto d-flex align-items-center">
      <h4 class="h3 text-black ms-2">${data2.meals[i].strMeal}</h4>
    </div>
  </div>
</div> `;
  }
  console.log(data2.meals);
  document.getElementById("row2").innerHTML = cartona2;
}
async function searchLetter(e = "a") {
  if (e == "") {
    e == "a";
  }
  let myResponse3 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`
  );
  data3 = await myResponse3.json();
  console.log(data3);
  displayLetter();
}
function displayLetter() {
  let cartona3 = "";
  for (let i = 0; i < data3.meals.length; i++) {
    cartona3 += ` <div class="col-md-3 col-sm-12" onclick="detailss(${data3.meals[i].idMeal})">
    <div class="position-relative mainImg">
      <img src="${data3.meals[i].strMealThumb}" class="w-100" alt="" />
      <div class="windowPhoto d-flex align-items-center">
        <h4 class="h3 text-black ms-2">${data3.meals[i].strMeal}</h4>
      </div>
    </div>
  </div> `;
  }
  console.log(data3.meals);
  document.getElementById("row2").innerHTML = cartona3;
}

function navClick(e) {
  console.log("seeeeeeeearch");
  console.log(window.location.href);
  window.location.href = `./${e}.html`;
}
async function detailss(e){
  let myResponse7 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`
  );
  data7 = await myResponse7.json();
  console.log(data7);
  displayDetails()
  
}
function displayDetails (){

  imgSrc.innerHTML=data7.meals[0].strMealThumb
  nameFood.innerHTML=data7.meals[0].strMeal
  dscrb.innerHTML=data7.meals[0].strInstructions
  foodCtg.innerHTML= 'Category : ' +  data7.meals[0].strCategory
  areaa.innerHTML= 'Area : ' + data7.meals[0].strArea
  $('#detailsContainer').removeClass('d-none');




}
