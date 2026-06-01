// guess.js — Mini game đoán số dùng prompt/alert
(function(){
  const MAX_ATTEMPTS = 7;
  const secret = Math.floor(Math.random() * 100) + 1;
  const guesses = new Set();
  let attempts = 0;

  alert('Game bắt đầu: đoán số từ 1 đến 100. Bạn có 7 lần.');

  while (attempts < MAX_ATTEMPTS) {
    const input = prompt(`Lần ${attempts+1}/${MAX_ATTEMPTS} - Nhập số (1-100):`);
    if (input === null) { // user cancel
      alert('Bạn đã hủy game.');
      return;
    }
    const n = Number(input.trim());
    if (!Number.isInteger(n) || n < 1 || n > 100) {
      alert('Vui lòng nhập số nguyên trong khoảng 1 đến 100');
      continue;
    }
    if (guesses.has(n)) {
      alert('Bạn đã đoán số này rồi!');
      continue;
    }
    guesses.add(n);
    attempts++;

    if (n === secret) {
      alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
      return;
    }
    if (n < secret) alert('Cao hơn');
    else alert('Thấp hơn');
  }

  alert(`Hết lượt! Đáp án là ${secret}`);
})();
