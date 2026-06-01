// student_data.js — giải B2

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function avgScore(s) {
  return +(s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3).toFixed(1);
}

// 1. Tính điểm TB và xếp loại
const results = students.map((s, idx) => {
  const tb = avgScore(s);
  let rank = '';
  if (tb >= 8.0) rank = 'Giỏi';
  else if (tb >= 6.5) rank = 'Khá';
  else if (tb >= 5.0) rank = 'Trung bình';
  else rank = 'Yếu';
  return { STT: idx + 1, Tên: s.name, TB: tb, 'Xếp loại': rank, gender: s.gender };
});

console.log('\nBảng kết quả:');
console.table(results.map(r => ({ STT: r.STT, Tên: r.Tên, TB: r.TB, 'Xếp loại': r['Xếp loại'] })));

// 4. Đếm số SV mỗi xếp loại
const counts = results.reduce((acc, r) => {
  acc[r['Xếp loại']] = (acc[r['Xếp loại']] || 0) + 1;
  return acc;
}, {});
console.log('\nSố SV theo xếp loại:');
console.table(counts);

// 5. Tìm SV có điểm TB cao nhất và thấp nhất
const sortedByTB = [...results].sort((a, b) => b.TB - a.TB);
console.log('\nSV điểm cao nhất:', sortedByTB[0]);
console.log('SV điểm thấp nhất:', sortedByTB[sortedByTB.length - 1]);

// 6. Tính điểm TB toàn lớp cho từng môn
const subjectAvg = students.reduce((acc, s) => {
  acc.math += s.math;
  acc.physics += s.physics;
  acc.cs += s.cs;
  return acc;
}, { math: 0, physics: 0, cs: 0 });

const n = students.length;
console.log('\nĐiểm trung bình lớp theo môn:');
console.table({ math: +(subjectAvg.math / n).toFixed(2), physics: +(subjectAvg.physics / n).toFixed(2), cs: +(subjectAvg.cs / n).toFixed(2) });

// Bonus: theo giới tính
const genderGroup = students.reduce((acc, s) => {
  const g = s.gender;
  if (!acc[g]) acc[g] = { count: 0, math: 0, physics: 0, cs: 0 };
  acc[g].count++;
  acc[g].math += s.math;
  acc[g].physics += s.physics;
  acc[g].cs += s.cs;
  return acc;
}, {});

for (const g of Object.keys(genderGroup)) {
  const gg = genderGroup[g];
  console.log(`\nGiới tính ${g}: TB môn math=${(gg.math/gg.count).toFixed(2)}, physics=${(gg.physics/gg.count).toFixed(2)}, cs=${(gg.cs/gg.count).toFixed(2)}`);
}

module.exports = { students };
