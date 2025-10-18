/* ===========================================================
   🧮 계산기 JS
   - 키보드 입력 지원
   - 연산 이력 관리
=========================================================== */

const display = document.getElementById("display");
const history = document.getElementById("history");
let current = "";
let lastResult = "";

function updateDisplay() {
  display.textContent = current || "0";
}

function appendNumber(num) {
  current += num;
  updateDisplay();
}

function appendOperator(op) {
  if (current === "" && lastResult) current = lastResult;
  if (/[+\-*/]$/.test(current)) return; // 연속 연산 방지
  current += op;
  updateDisplay();
}

function appendDot() {
  const parts = current.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    current += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  current = "";
  updateDisplay();
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(current);
    history.textContent = `${current} = ${result}`;
    current = result.toString();
    lastResult = current;
    updateDisplay();
  } catch {
    display.textContent = "오류";
  }
}

// ✅ 키보드 입력 지원
window.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) appendNumber(e.key);
  if (["+", "-", "*", "/"].includes(e.key)) appendOperator(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clearDisplay();
  if (e.key === ".") appendDot();
});
