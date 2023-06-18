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
  console.log(data6.meals[0].strDescription.split("").splice(0, 85).join(""));
  let cartona6 = "";
  let nullValues = [];
  for (let i = 0; i < data6.meals.length; i++) {
    if (data6.meals[i].strDescription) {
      cartona6 += `   <div  class="rounded-2 text-center cursor-pointer text-white col-md-3"onclick="ingredDet(${data6.meals[i].strIngredient})">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
          <h3>${data6.meals[i].strIngredient}</h3>
          
           <p>${data6.meals[i].strDescription
             .split("")
             .splice(0, 85)
             .join("")}</p>
          </div> `;
    } else {
      nullValues.push(i);
    }
    // <p>${data6.meals[i].strDescription}</p>
  }
  console.log(nullValues);
  document.getElementById("row5").innerHTML = cartona6;
}

function navClick(e) {
  console.log("seeeeeeeearch");
  console.log(window.location.href);
  window.location.href = `./${e}.html`;
}
async function ingredDet (e){

  let myResponse8 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=${e}`
  );
  data8 = await myResponse8.json();
  console.log(data8);



}
