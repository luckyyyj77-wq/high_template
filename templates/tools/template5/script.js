/* ===========================================================
   ⚖️ 단위 변환기 JS
   - 길이 / 무게 / 온도 실시간 변환
=========================================================== */

const categories = {
  length: ["m", "cm", "km"],
  mass: ["kg", "g", "lb"],
  temp: ["°C", "°F", "K"]
};

let currentCategory = "length";

const input = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const output = document.getElementById("outputValue");
const formula = document.getElementById("formula");

// 🔹 단위 선택 갱신
function setUnits(category) {
  inputUnit.innerHTML = "";
  outputUnit.innerHTML = "";
  categories[category].forEach(unit => {
    const opt1 = new Option(unit, unit);
    const opt2 = new Option(unit, unit);
    inputUnit.add(opt1);
    outputUnit.add(opt2);
  });
  inputUnit.value = categories[category][0];
  outputUnit.value = categories[category][1];
  convert();
}

// 🔹 길이 변환
function convertLength(val, from, to) {
  const meters =
    from === "cm" ? val / 100 :
    from === "km" ? val * 1000 :
    val;
  const result =
    to === "cm" ? meters * 100 :
    to === "km" ? meters / 1000 :
    meters;
  formula.textContent = "1m = 100cm, 1km = 1000m";
  return result;
}

// 🔹 무게 변환
function convertMass(val, from, to) {
  const kg =
    from === "g" ? val / 1000 :
    from === "lb" ? val / 2.205 :
    val;
  const result =
    to === "g" ? kg * 1000 :
    to === "lb" ? kg * 2.205 :
    kg;
  formula.textContent = "1kg = 1000g = 2.205lb";
  return result;
}

// 🔹 온도 변환
function convertTemp(val, from, to) {
  let celsius;
  if (from === "°F") celsius = (val - 32) * 5 / 9;
  else if (from === "K") celsius = val - 273.15;
  else celsius = val;

  let result;
  if (to === "°F") result = celsius * 9 / 5 + 32;
  else if (to === "K") result = celsius + 273.15;
  else result = celsius;

  formula.textContent = "°C ↔ °F ↔ K 변환 공식 적용";
  return result;
}

// 🔹 변환 실행
function convert() {
  const val = parseFloat(input.value);
  if (isNaN(val)) return output.value = "";
  const from = inputUnit.value;
  const to = outputUnit.value;

  let result = val;
  if (currentCategory === "length") result = convertLength(val, from, to);
  else if (currentCategory === "mass") result = convertMass(val, from, to);
  else if (currentCategory === "temp") result = convertTemp(val, from, to);

  output.value = result.toFixed(4);
}

// 이벤트
[input, inputUnit, outputUnit].forEach(el => el.addEventListener("input", convert));

// 🔹 카테고리 버튼
document.getElementById("lenBtn").onclick = () => switchCategory("length");
document.getElementById("massBtn").onclick = () => switchCategory("mass");
document.getElementById("tempBtn").onclick = () => switchCategory("temp");

function switchCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".category button").forEach(b => b.classList.remove("active"));
  document.getElementById(
    cat === "length" ? "lenBtn" : cat === "mass" ? "massBtn" : "tempBtn"
  ).classList.add("active");
  setUnits(cat);
}

// 초기값 설정
setUnits("length");
