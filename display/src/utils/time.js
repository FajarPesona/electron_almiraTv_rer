const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const namaBulanM = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function getTime(opt) {
  let time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  let strTime;
  //   console.log(opt);

  if (opt.withSec) {
    strTime = `${h < 10 ? "0" : ""}${h} : ${m < 10 ? "0" : ""}${m} : ${
      s < 10 ? "0" : ""
    }${s}`;
  } else {
    strTime = `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}`;
  }

  const strDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    date < 10 ? "0" : ""
  }${date}`;

  const strHari = namaHari[day];
  const strDateM = `${date} ${namaBulanM[month - 1]} ${year}`;

  return {
    hour: h,
    minute: m,
    second: s,
    day: 1,
    strTime,
    strDate,
    strHari,
    strDateM,
  };
}

export { getTime };
