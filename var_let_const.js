// File: var_let_const.js
// Kiểm chứng các đoạn trong phần A1 — dùng try/catch để tiếp tục khi có lỗi

function snippet1() {
  // Đoạn 1
  try {
    console.log('Đoạn 1 — output:');
    console.log(x);
    var x = 5;
    console.log('After declare x =', x);
  } catch (e) {
    console.error('Đoạn1 lỗi:', e.message);
  }
}

function snippet2() {
  // Đoạn 2
  try {
    console.log('\nĐoạn 2 — output:');
    console.log(y);
    let y = 10;
    console.log('After declare y =', y);
  } catch (e) {
    console.error('Đoạn2 lỗi:', e.message);
  }
}

function snippet3() {
  // Đoạn 3
  try {
    console.log('\nĐoạn 3 — output:');
    const z = 15;
    z = 20; // sẽ ném lỗi
    console.log(z);
  } catch (e) {
    console.error('Đoạn3 lỗi:', e.message);
  }
}

function snippet4() {
  // Đoạn 4
  try {
    console.log('\nĐoạn 4 — output:');
    const arr = [1,2,3];
    arr.push(4);
    console.log(arr);
  } catch (e) {
    console.error('Đoạn4 lỗi:', e.message);
  }
}

function snippet5() {
  // Đoạn 5
  try {
    console.log('\nĐoạn 5 — output:');
    let a = 1;
    {
      let a = 2;
      console.log('Trong block:', a);
    }
    console.log('Ngoài block:', a);
  } catch (e) {
    console.error('Đoạn5 lỗi:', e.message);
  }
}

// Chạy tất cả
snippet1();
snippet2();
snippet3();
snippet4();
snippet5();

// Hướng dẫn: chạy bằng node
// node var_let_const.js
