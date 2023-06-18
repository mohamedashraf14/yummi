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

function navClick(e) {
  console.log("seeeeeeeearch");
  console.log(window.location.href);
  window.location.href = `./${e}.html`;
}
