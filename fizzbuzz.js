// fizzbuzz.js — B4

function classicFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
  }
}

function customFizzBuzz(n, rules) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    let s = '';
    for (const r of rules) {
      if (i % r.divisor === 0) s += r.word;
    }
    res.push(s || i);
  }
  return res;
}

// Exports and quick test when run directly
if (require && require.main === module) {
  console.log('Classic FizzBuzz 1..15:');
  for (let i = 1; i <= 15; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
  }

  console.log('\nCustom FizzBuzz up to 30:');
  const arr = customFizzBuzz(30, [
    { divisor: 3, word: 'Fizz' },
    { divisor: 5, word: 'Buzz' },
    { divisor: 7, word: 'Jazz' }
  ]);
  console.log(arr.filter((v, idx) => [14,20,34].includes(idx+1) || typeof v === 'string').slice(0,30));
}

module.exports = { classicFizzBuzz, customFizzBuzz };
