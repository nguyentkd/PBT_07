// restaurant_bill.js — Câu C2

function formatVND(n) {
  return n.toLocaleString('vi-VN') + 'đ';
}

function printBill(items, options = {}) {
  // items: [{name, price, qty}]
  // options: { day: 'Wednesday'|'Mon'..., tipPercent: number (e.g., 5) }
  const day = options.day || new Date().toLocaleString('en-US', { weekday: 'long' });
  const tipPercent = options.tipPercent || 0;

  let subtotal = 0;
  const lines = items.map((it, idx) => {
    const lineTotal = it.price * it.qty;
    subtotal += lineTotal;
    return { idx: idx + 1, name: it.name, qty: it.qty, price: it.price, total: lineTotal };
  });

  // Discount rules
  let discountRate = 0;
  if (subtotal > 1000000) discountRate = 0.15;
  else if (subtotal > 500000) discountRate = 0.10;

  if (day.toLowerCase().startsWith('w') || day.toLowerCase() === 'wednesday') {
    // Nếu là Wednesday (thứ 3) giảm thêm 5% (tổng cộng)
    discountRate += 0.05;
  }

  const discount = Math.round(subtotal * discountRate);
  const afterDiscount = subtotal - discount;
  const vat = Math.round(afterDiscount * 0.08);
  const tip = Math.round(afterDiscount * (tipPercent / 100));
  const total = afterDiscount + vat + tip;

  // Print
  console.log('╔════════════════════════════════════════╗');
  console.log('║           HÓA ĐƠN NHÀ HÀNG             ║');
  console.log('╠════════════════════════════════════════╣');
  for (const l of lines) {
    const left = `${l.idx}. ${l.name}`.padEnd(25);
    const mid = `x${l.qty}`.padEnd(6);
    const price = formatVND(l.price).padEnd(12);
    const tot = formatVND(l.total).padStart(8);
    console.log(`║ ${left}${mid}${price}${tot} ║`);
  }
  console.log('╠════════════════════════════════════════╣');
  console.log(`║ Tổng cộng:              ${formatVND(subtotal).padStart(12)} ║`);
  console.log(`║ Giảm giá (${(discountRate*100).toFixed(0)}%):       ${formatVND(discount).padStart(12)} ║`);
  console.log(`║ VAT (8%):               ${formatVND(vat).padStart(12)} ║`);
  console.log(`║ Tip (${tipPercent}%):            ${formatVND(tip).padStart(12)} ║`);
  console.log('╠════════════════════════════════════════╣');
  console.log(`║ THANH TOÁN:              ${formatVND(total).padStart(12)} ║`);
  console.log('╚════════════════════════════════════════╝');

  return { subtotal, discountRate, discount, vat, tip, total };
}

// Example usage when run directly
if (require && require.main === module) {
  const items = [
    { name: 'Phở bò', price: 65000, qty: 2 },
    { name: 'Trà đá', price: 5000, qty: 3 },
    { name: 'Bún chả', price: 55000, qty: 1 }
  ];
  printBill(items, { day: 'Wednesday', tipPercent: 5 });
}

module.exports = { printBill };
