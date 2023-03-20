let input = document.createElement("input");
input.setAttribute("type", "date");
let btn = document.createElement("button");
btn.textContent = "Click me";
document.body.append(input, btn);

var pEle = document.createElement("p");

var yearEnt = document.createElement("p");
var monthEnt = document.createElement("p");
var dayEnt = document.createElement("p");
var hourEnt = document.createElement("p");
var minuteEnt = document.createElement("p");
var secondEnt = document.createElement("p");
var millisecondEnt = document.createElement("p");

document.body.append(
  pEle,
  yearEnt,
  monthEnt,
  dayEnt,
  hourEnt,
  minuteEnt,
  secondEnt,
  millisecondEnt
);
btn.addEventListener("click", function () {
  var [year, month, day] = input.value.split("-");
  console.log(year, month, day);
  var dateEntered = new Date(`${year} ${month}, ${day}`);
  var currentDate = new Date();
  console.log(dateEntered);
  pEle.textContent = `The date entered is ${dateEntered}`;
  yearEnt.textContent = `year ${
    currentDate.getFullYear() - dateEntered.getFullYear()
  }`;
  yearcalc = currentDate.getFullYear() - dateEntered.getFullYear();
  console.log(yearcalc > 0 && currentDate.getMonth() - dateEntered.getMonth());
  monthEnt.textContent = `month ${
    (currentDate.getFullYear() - dateEntered.getFullYear()) * 12 +
    (yearcalc > 0
      ? currentDate.getMonth() - dateEntered.getMonth()
        ? currentDate.getMonth() - dateEntered.getMonth()
        : 12
      : currentDate.getMonth() - dateEntered.getMonth())
  }`;
  console.log(currentDate.getDate());
  dayEnt.textContent = `day ${Math.trunc(
    currentDate.getTime() / (1000 * 60 * 60 * 24) -
      dateEntered.getTime() / (1000 * 60 * 60 * 24)
  )}`;
  hourEnt.textContent = `hour ${Math.trunc(
    currentDate.getTime() / (1000 * 60 * 60) -
      dateEntered.getTime() / (1000 * 60 * 60)
  )}`;
  minuteEnt.textContent = `minute ${Math.trunc(
    currentDate.getTime() / (1000 * 60) - dateEntered.getTime() / (1000 * 60)
  )}`;
  secondEnt.textContent = `second ${Math.trunc(
    currentDate.getTime() / 1000 - dateEntered.getTime() / 1000
  )}`;
  millisecondEnt.textContent = `millisecond ${Math.trunc(
    currentDate.getTime() - dateEntered.getTime()
  )}`;
});
