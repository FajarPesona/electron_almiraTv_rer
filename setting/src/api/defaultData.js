const labelsWs = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];
const iWs = [1, 4, 5, 6, 7];

const defaultKota = {
  nama: "SURABAYA",
  bujur: 112.75,
  lintang: -7.25,
  timezone: 7,
};

const defaultRuntext = [
  "ini default text-1",
  "ini default text-2",
  "ini default text-3",
  "ini default text-4",
  "ini default text-5",
];

const defaultDataAdzan = [
  { durasi: 1, useMp3: false, track: "0090.mp3" },
  { durasi: 1, useMp3: false, track: "0090.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
  { durasi: 1, useMp3: false, track: "0091.mp3" },
];

const defaultDataTarhim = [
  { durasi: 0, track: "0081.mp3" },
  { durasi: 2, track: "0081.mp3" },
  { durasi: 0, track: "0081.mp3" },
  { durasi: 0, track: "0081.mp3" },
  { durasi: 2, track: "0081.mp3" },
  { durasi: 2, track: "0081.mp3" },
  { durasi: 2, track: "0081.mp3" },
  { durasi: 2, track: "0081.mp3" },
];

const defaultIqomah = [0, 1, 0, 0, 2, 3, 2, 1];
const defaultKoreksi = [0, 0, 0, 0, 0, 0, 0, 0];
const defaultInfo = {
  nama: "Al-Hikmah",
  alamat: "Jl. Pakis II/6 - Surabaya",
};

export {
  labelsWs,
  iWs,
  defaultKota,
  defaultRuntext,
  defaultDataAdzan,
  defaultDataTarhim,
  defaultIqomah,
  defaultKoreksi,
  defaultInfo,
};
