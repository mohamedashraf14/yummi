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
  console.log(
    data4.categories[0].strCategoryDescription.split("").splice(0, 85).join("")
  );
  for (let i = 0; i < data4.categories.length; i++) {
    cartona4 += ` <div class="col-md-3 col-sm-12">
    <div class="position-relative mainImg">
    <img src="${data4.categories[i].strCategoryThumb}" class="w-100" alt="" />
      <div class="windowPhoto windowPhotoCat d-flex align-items-center">
      <h4 class="h3 text-black ms-2">${data4.categories[i].strCategory}</h4>
      <p> ${data4.categories[i].strCategoryDescription
        .split("")
        .splice(0, 85)
        .join("")}</p>
    
    </div>
    </div>
    </div> `;
  }

  document.getElementById("row3").innerHTML = cartona4;
}

function navClick(e) {
  console.log("seeeeeeeearch");
  console.log(window.location.href);
  window.location.href = `./${e}.html`;
}
