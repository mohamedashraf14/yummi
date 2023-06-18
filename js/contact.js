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

function navClick(e) {
  console.log("seeeeeeeearch");
  console.log(window.location.href);
  window.location.href = `./${e}.html`;
}
