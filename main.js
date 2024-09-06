const markButton = document.getElementById("mark");
const notifications = document.querySelectorAll(".not");
const spnum = document.getElementById("spnum");
spnum.innerHTML = notifications.length / 2;

markButton.onclick = function () {
  let allRead = Array.from(notifications).every(
    (e) => !e.classList.contains("not")
  );
  console.log(allRead);

  notifications.forEach(function (e) {
    allRead ? e.classList.add("not") : e.classList.remove("not");
  });

  if (allRead) {
    spnum.innerHTML = notifications.length / 2;
    spnum.style.background = "#0a317b";
    markButton.style.color = "#939dae";
  } else {
    spnum.innerHTML = 0;
    spnum.style.background = "green";
    markButton.style.color = "green";
  }
};

////////////////////////////////////////////////////////////////////
//  let mark = document.getElementById("mark");
// let not = document.querySelectorAll(".not");
// let spnum = document.getElementById("spnum");
// console.log(mark);
// console.log(not);
// console.log(length);
// console.log((spnum.innerHTML = not.length / 2));

// mark.onclick = function () {
//   not.forEach(function (e) {
//     e.classList.toggle("not");
//     if (!e.classList.contains("not")) {
//       spnum.innerHTML = 0;
//       spnum.style.background = "green";
//       mark.style.color = "green";
//     } else {
//       spnum.innerHTML = not.length / 2;
//       spnum.style.background = "#0a317b";
//       mark.style.color = "#939dae";
//     }
//   });
// };
