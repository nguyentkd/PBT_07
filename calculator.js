// calculator.js
// Simple calculator per B1

function calculate(num1, operator, num2) {
  const a = Number(num1);
  const b = Number(num2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return 'Lỗi: Input không phải số';
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Lỗi: Không thể chia cho 0';
      return a / b;
    case '%':
      if (b === 0) return 'Lỗi: Không thể chia cho 0';
      return a % b;
    case '**':
      return a ** b;
    default:
      return `Lỗi: Operator '${operator}' không hợp lệ`;
  }
}

// Tests
if (require.main === module) {
  console.log(calculate(10, '+', 5));    // 15
  console.log(calculate(10, '/', 0));    // Lỗi chia 0
  console.log(calculate(10, '^', 5));    // lỗi operator
  console.log(calculate('abc', '+', 5)); // lỗi input
  console.log(calculate(2, '**', 10));   // 1024
}

module.exports = { calculate };
