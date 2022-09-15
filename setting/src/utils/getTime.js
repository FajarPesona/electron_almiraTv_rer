function getTime() {
  let time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();

  //   const strTime = `${h < 10 ? "0" : ""}${h} : ${m < 10 ? "0" : ""}${m} : ${
  //     s < 10 ? "0" : ""
  //   }${s}`;

  const strTime = `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}`;
  const strDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    date < 10 ? "0" : ""
  }${date}`;

  //   const strHari = NamaHari[day];
  //   const strDateM = `${date} ${NamaBulanM[month]} ${year}`;

  return {
    hour: h,
    minute: m,
    second: s,
    date,
    month,
    year,
    day: 1,
    strTime,
    strDate,
    // strHari,
    // strDateM,
  };
}

export default getTime;
