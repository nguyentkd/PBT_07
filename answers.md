# PBT_07 — Answers (Phần A & C1)

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### A1 — `var` / `let` / `const` (dự đoán)
- Đoạn 1:
  - Dự đoán: `undefined` (do hoisting của `var`)
- Đoạn 2:
  - Dự đoán: ReferenceError (hoặc lỗi tương tự do TDZ với `let`)
- Đoạn 3:
  - Dự đoán: TypeError khi gán lại `const` (vì không thể reassign)
- Đoạn 4:
  - Dự đoán: `[1,2,3,4]` — `const` không ngăn việc mutate nội dung mảng
- Đoạn 5:
  - Dự đoán: In `Trong block: 2` rồi `Ngoài block: 1` (vì `let` có block scope)

### A2 — Data Types & Coercion (dự đoán)
- `typeof null` → "object"  (bug lịch sử)
- `typeof undefined` → "undefined"
- `typeof NaN` → "number"
- `"5" + 3` → "53"
- `"5" - 3` → 2
- `"5" * "3"` → 15
- `true + true` → 2
- `[] + []` → "" (empty string)
- `[] + {}` → "[object Object]" or depending on environment — typically "[object Object]"
- `{} + []` → 0 or "[object Object]" depending on parsing; when run as expression, node may treat `{}` as block — behavior can vary. (See chạy thực tế trong `var_let_const.js`)

Giải thích ngắn: `+` khi có operand là string sẽ thực hiện concatenation; các toán tử số học khác (`-`, `*`, `/`) sẽ chuyển operands sang Number.

### A3 — `==` vs `===` (dự đoán)
- `5 == "5"` → true
- `5 === "5"` → false
- `null == undefined` → true
- `null === undefined` → false
- `NaN == NaN` → false
- `0 == false` → true
- `0 === false` → false
- `"" == false` → true

Quy tắc: Luôn dùng `===` (strict equality) để tránh type coercion bất ngờ.

### A4 — Truthy & Falsy
Tất cả giá trị falsy: `false`, `0`, `0n`, `""` (empty string), `null`, `undefined`, `NaN`.

Dự đoán in ra:
- `if ("0")` → in A (string "0" là truthy)
- `if ("")` → không in B (empty string falsy)
- `if ([])` → in C (array rỗng truthy)
- `if ({})` → in D (object rỗng truthy)
- `if (null)` → không in E
- `if (0)` → không in F
- `if (-1)` → in G (non-zero là truthy)
- `if (" ")` → in H (string with space is truthy)

### A5 — Template Literals (chuyển)
- Cách 1:
  ```javascript
  const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
  ```
- Cách 2:
  ```javascript
  const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
  ```
- Cách 3:
  ```javascript
  const html = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
  </div>
  `;
  ```

## PHẦN C — C1 Debug JavaScript (liệt kê lỗi & sửa)
Original code có nhiều lỗi; dưới đây là các lỗi tìm thấy và cách sửa:

1. Thiếu dấu chấm phẩy không phải lỗi nghiêm trọng ở JS, nhưng làm code khó đọc. (tùy)
2. Trong `if (giaSauGiam = 0)` — dùng phép gán `=` thay vì so sánh `===` hoặc `==`. Phải sửa thành `if (giaSauGiam === 0) { ... }`.
3. Hàm nhận `giaBan` là chuỗi trong test: `tinhGiaGiamGia("100000", 20)` — cần convert `giaBan` thành Number trước khi tính; nếu không phải số, trả lỗi.
4. Thiếu xử lý khi `phanTramGiam` không phải số — cần kiểm tra `isNaN(phanTramGiam)`.
5. `console.log("Sản phẩm miễn phí!")` — nên dùng `return` hay vẫn in, nhưng hiện tại nếu dùng gán trong điều kiện sẽ luôn thực thi (sửa ở điểm 2).
6. Vấn đề `var` trong vòng lặp với `setTimeout`: `var i` là function-scoped → khi callback chạy, `i` đã bằng 5 cho tất cả callback. Sửa bằng `let i` để giữ giá trị mỗi vòng lặp.

Sửa tham khảo đã được implement trong file `var_let_const.js` và `restaurant_bill.js` / mã nguồn kèm theo trong repo.

---


