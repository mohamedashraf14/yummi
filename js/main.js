let imgSrc = document.getElementById('imgSrc')
let nameFood = document.getElementById('nameFood')
let dscrb = document.getElementById('dscrb')
let areaa = document.getElementById('areaa')
let foodCtg = document.getElementById('foodCtg')
let navWidth1 = $("#nav1").outerWidth();
let switchBtn = document.getElementById("switchBtn");
switchBtn.innerHTML = `<i class="fa-solid open-close-icon fa-2x fa-align-justify" id="menuBtn" onclick="switt()"></i>`;
$("#mainnav").animate({ left: -navWidth1 }, 0);
$("list").slideToggle(0);
console.log(navWidth1);
async function HomePage() {
  let myResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  data1 = await myResponse.json();
  console.log(data1);
  displayHome();
}
HomePage();
function displayHome() {
  let cartona = "";
  for (let i = 0; i < data1.meals.length; i++) {
    cartona += ` <div class="col-md-3 col-sm-12 " onclick="detailss(${data1.meals[i].idMeal})">
  <div class="position-relative mainImg">
    <img src="${data1.meals[i].strMealThumb}" class="w-100" alt="" />
    <div class="windowPhoto d-flex align-items-center">
      <h4 class="h3 text-black ms-2">${data1.meals[i].strMeal}</h4>
    </div>
  </div>
</div> `;
  }

  document.getElementById("row1").innerHTML = cartona;
}
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
    cartona2 += ` <div class="col-md-3 col-sm-12">
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
    cartona3 += ` <div class="col-md-3 col-sm-12">
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
async function categoryPage() {
  let myResponse4 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  data4 = await myResponse4.json();
  console.log(data4);
  displayCategory();
}
categoryPage();
function displayCategory() {
  let cartona4 = "";
  for (let i = 0; i < data4.categories.length; i++) {
    cartona4 += ` <div class="col-md-3 col-sm-12">
    <div class="position-relative mainImg">
      <img src="${data4.categories[i].strCategoryThumb}" class="w-100" alt="" />
      <div class="windowPhoto d-flex align-items-center">
        <h4 class="h3 text-black ms-2">${data4.categories[i].strCategory}</h4>
      </div>
    </div>
  </div> `;
  }

  document.getElementById("row3").innerHTML = cartona4;
}
async function areaPage() {
  let myResponse5 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  data5 = await myResponse5.json();
  console.log(data5);
  displayArea();
}
areaPage();
function displayArea() {
  let cartona5 = "";
  for (let i = 0; i < data5.meals.length; i++) {
    cartona5 += `   <div  class="rounded-2 text-center cursor-pointer text-white col-md-3">
      <i class="fa-solid fa-house-laptop fa-4x"></i>
      <h3>${data5.meals[i].strArea}</h3>
</div> `;
  }

  document.getElementById("row4").innerHTML = cartona5;
}
async function ingredPage() {
  let myResponse6 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  data6 = await myResponse6.json();
  console.log(data6);
  displaIngred();
}
ingredPage();
function displaIngred() {
  let cartona6 = "";
  for (let i = 0; i < data6.meals.length; i++) {
    cartona6 += `   <div  class="rounded-2 text-center cursor-pointer text-white col-md-3">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${data6.meals[i].strIngredient}</h3>
        <p>${data6.meals[i].strDescription}</p>
  </div> `;
  }

  document.getElementById("row5").innerHTML = cartona6;
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

