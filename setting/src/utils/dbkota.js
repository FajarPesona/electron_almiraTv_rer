const databaseKota = [
  { nama: "AMBON", bujur: 128.19, lintang: -3.71, timezone: 9 },
  { nama: "AMUNTAI", bujur: 115.25, lintang: -2.43, timezone: 8 },
  { nama: "ATAMBUA", bujur: 124.89, lintang: -9.1, timezone: 9 },
  { nama: "BALIGE", bujur: 99.06, lintang: -2.33, timezone: 7 },
  { nama: "BALIKPAPAN", bujur: 116.83, lintang: -1.28, timezone: 8 },
  { nama: "BANDA ACEH", bujur: 95.32, lintang: -5.56, timezone: 7 },
  { nama: "BANDAR LAMPUNG", bujur: 7.26, lintang: -5.44, timezone: 7 },
  { nama: "BANDUNG", bujur: 107.61, lintang: -6.95, timezone: 7 },
  { nama: "BANGIL", bujur: 112.47, lintang: -7.38, timezone: 7 },
  { nama: "BANGKALAN", bujur: 112.91, lintang: -7.0, timezone: 7 },
  { nama: "BANJAR", bujur: 114.85, lintang: -6.9, timezone: 7 },
  { nama: "BANJARMASIN", bujur: 114.67, lintang: -3.36, timezone: 8 },
  { nama: "BANJARNEGARA", bujur: 109.68, lintang: -7.38, timezone: 7 },
  { nama: "BANTAENG", bujur: 119.95, lintang: -5.54, timezone: 8 },
  { nama: "BANTEN", bujur: 106.2, lintang: -6.03, timezone: 7 },
  { nama: "BANTUL", bujur: 110.37, lintang: -7.85, timezone: 7 },
  { nama: "BANYUMAS", bujur: 109.23, lintang: -7.41, timezone: 7 },
  { nama: "BANYUWANGI", bujur: 114.38, lintang: -8.56, timezone: 7 },
  { nama: "BARABAI", bujur: 115.38, lintang: -2.58, timezone: 8 },
  { nama: "BARRU", bujur: 119.6, lintang: -4.4, timezone: 8 },
  { nama: "BATANG", bujur: 111.5, lintang: -7.0, timezone: 7 },
  { nama: "BATANG HARI", bujur: 103.61, lintang: -1.6, timezone: 7 },
  { nama: "BATAM", bujur: 104.05, lintang: 1.08, timezone: 7 },
  { nama: "BATU", bujur: 114.35, lintang: -8.2, timezone: 7 },
  { nama: "BATURAJA", bujur: 104.16, lintang: -4.13, timezone: 7 },
  { nama: "BATUSANGKAR", bujur: 100.58, lintang: -0.44, timezone: 7 },
  { nama: "BAWEAN", bujur: 112.5, lintang: -6.5, timezone: 7 },
  { nama: "BAU-BAU", bujur: 122.63, lintang: -5.46, timezone: 8 },
  { nama: "BEKASI", bujur: 107.0, lintang: -6.31, timezone: 7 },
  { nama: "BENGKALIS", bujur: 101.5, lintang: 1.5, timezone: 7 },
  { nama: "BENGKAYANG", bujur: 109.48, lintang: 0.83, timezone: 7 },
  { nama: "BENGKULU", bujur: 102.26, lintang: -3.79, timezone: 7 },
  { nama: "BERAU", bujur: 117.5, lintang: 1.75, timezone: 8 },
  { nama: "BIAK", bujur: 136.1, lintang: -1.16, timezone: 9 },
  { nama: "BIMA", bujur: 118.71, lintang: -8.46, timezone: 8 },
  { nama: "BINJAI", bujur: 108.23, lintang: 3.79, timezone: 7 },
  { nama: "BITUNG", bujur: 125.15, lintang: 1.44, timezone: 8 },
  { nama: "BLITAR", bujur: 112.41, lintang: -8.08, timezone: 7 },
  { nama: "BLORA", bujur: 111.5, lintang: -7.0, timezone: 7 },
  { nama: "BOGOR", bujur: 107.11, lintang: -7.32, timezone: 7 },
  { nama: "BOJONEGORO", bujur: 111.86, lintang: -7.15, timezone: 7 },
  { nama: "BONDOWOSO", bujur: 114.0, lintang: -8.0, timezone: 7 },
  { nama: "BONE", bujur: 119.77, lintang: -4.79, timezone: 8 },
  { nama: "BONTANG", bujur: 117.5, lintang: 0.13, timezone: 8 },
  { nama: "BOYOLALI", bujur: 110.58, lintang: -7.53, timezone: 7 },
  { nama: "BREBES", bujur: 109.0, lintang: -7.0, timezone: 7 },
  { nama: "BUKIT TINGGI", bujur: 100.36, lintang: -0.31, timezone: 7 },
  { nama: "BULUKUMBA", bujur: 8.18, lintang: -5.55, timezone: 8 },
  { nama: "BUNTOK", bujur: 114.8, lintang: -1.7, timezone: 7 },
  { nama: "BURU", bujur: 134.93, lintang: -4.3, timezone: 9 },
  { nama: "CIAMIS", bujur: 108.66, lintang: -6.67, timezone: 7 },
  { nama: "CIANJUR", bujur: 107.08, lintang: -7.16, timezone: 7 },
  { nama: "CILACAP", bujur: 109.16, lintang: -7.58, timezone: 7 },
  { nama: "CIREBON", bujur: 108.56, lintang: -6.73, timezone: 7 },
  { nama: "CILEGON", bujur: 106.05, lintang: -6.01, timezone: 7 },
  { nama: "DEMAK", bujur: 110.75, lintang: -6.83, timezone: 7 },
  { nama: "DENPASAR", bujur: 115.21, lintang: -8.64, timezone: 8 },
  { nama: "DEPOK", bujur: 107.58, lintang: -7.13, timezone: 7 },
  { nama: "DONGGALA", bujur: 119.75, lintang: -0.68, timezone: 8 },
  { nama: "EMPAT LAWANG", bujur: 108.89, lintang: -3.72, timezone: 7 },
  { nama: "ENDE", bujur: 121.65, lintang: -8.83, timezone: 8 },
  { nama: "ENREKANG", bujur: 119.76, lintang: -3.56, timezone: 8 },
  { nama: "FAKFAK", bujur: 132.3, lintang: -2.91, timezone: 9 },
  { nama: "FLORES TIMUR", bujur: 121.3, lintang: -8.85, timezone: 8 },
  { nama: "GARUT", bujur: 107.83, lintang: -7.5, timezone: 7 },
  { nama: "GIANYAR", bujur: 115.41, lintang: -8.41, timezone: 8 },
  { nama: "GORONTALO", bujur: 123.0, lintang: 0.66, timezone: 8 },
  { nama: "GRESIK", bujur: 112.65, lintang: -7.15, timezone: 7 },
  { nama: "HALMAHERA", bujur: 128.0, lintang: 0.0, timezone: 9 },
  { nama: "INDRAMAYU", bujur: 108.16, lintang: -6.5, timezone: 7 },
  { nama: "JAKARTA", bujur: 106.61, lintang: -6.16, timezone: 7 },
  { nama: "JAMBI ", bujur: 103.61, lintang: -1.6, timezone: 7 },
  { nama: "JAYAPURA ", bujur: 139.5, lintang: -3.0, timezone: 9 },
  { nama: "JEMBER", bujur: 113.7, lintang: -8.17, timezone: 7 },
  { nama: "JENEPONTO", bujur: 119.74, lintang: -5.67, timezone: 8 },
  { nama: "JEPARA", bujur: 110.83, lintang: -6.5, timezone: 7 },
  { nama: "JOMBANG", bujur: 112.41, lintang: -7.5, timezone: 7 },
  { nama: "KAIMANA", bujur: 132.75, lintang: -3.65, timezone: 9 },
  { nama: "KANDANGAN", bujur: 115.26, lintang: -2.78, timezone: 8 },
  { nama: "KAPUAS", bujur: 114.35, lintang: -3.01, timezone: 7 },
  { nama: "KARANGANYAR ", bujur: 110.33, lintang: -7.58, timezone: 7 },
  { nama: "KARANG ASEM ", bujur: 115.66, lintang: -8.33, timezone: 8 },
  { nama: "KARAWANG ", bujur: 107.33, lintang: -6.33, timezone: 7 },
  { nama: "KARO  ", bujur: 98.5, lintang: 3.09, timezone: 7 },
  { nama: "KATINGAN ", bujur: 113.38, lintang: -2.0, timezone: 7 },
  { nama: "KAYU AGUNG  ", bujur: 7.16, lintang: -3.25, timezone: 7 },
  { nama: "KEBUMEN", bujur: 109.83, lintang: -7.66, timezone: 7 },
  { nama: "KEDIRI", bujur: 112.01, lintang: -7.81, timezone: 7 },
  { nama: "KENDAL", bujur: 110.16, lintang: -7.0, timezone: 7 },
  { nama: "KENDARI", bujur: 122.5, lintang: -3.94, timezone: 8 },
  { nama: "KETAPANG ", bujur: 109.98, lintang: -1.86, timezone: 7 },
  { nama: "KLATEN", bujur: 110.91, lintang: -7.66, timezone: 7 },
  { nama: "KLUNGKUNG", bujur: 115.4, lintang: -8.53, timezone: 8 },
  { nama: "KOLAKA", bujur: 121.56, lintang: -4.03, timezone: 8 },
  { nama: "KOTA BARU", bujur: 116.22, lintang: -3.23, timezone: 8 },
  { nama: "KOTA DUMAI  ", bujur: 101.44, lintang: 1.68, timezone: 7 },
  { nama: "KUALA KURUN ", bujur: 113.88, lintang: -1.11, timezone: 7 },
  { nama: "KUALA TUNGKAL  ", bujur: 103.46, lintang: -0.81, timezone: 7 },
  { nama: "KUDUS ", bujur: 111.08, lintang: -6.75, timezone: 7 },
  { nama: "KUNINGAN ", bujur: 108.66, lintang: -7.0, timezone: 7 },
  { nama: "KUPANG", bujur: 123.58, lintang: -10.16, timezone: 8 },
  { nama: "KUTACANE ", bujur: 97.8, lintang: 3.5, timezone: 7 },
  { nama: "KUTAI ", bujur: 116.5, lintang: 0.0, timezone: 8 },
  { nama: "LAHAT ", bujur: 103.51, lintang: -3.81, timezone: 7 },
  { nama: "LAMONGAN ", bujur: 112.41, lintang: -7.11, timezone: 7 },
  { nama: "LANGKAT", bujur: 98.38, lintang: 3.76, timezone: 7 },
  { nama: "LANGSA", bujur: 97.96, lintang: 4.47, timezone: 7 },
  { nama: "LEBAK ", bujur: 106.19, lintang: -6.01, timezone: 7 },
  { nama: "LHOKSEUMAWE ", bujur: 97.13, lintang: 5.16, timezone: 7 },
  { nama: "LUBUK LINGGAU  ", bujur: 102.91, lintang: -3.25, timezone: 7 },
  { nama: "LUMAJANG ", bujur: 113.21, lintang: -8.13, timezone: 7 },
  { nama: "LUWUK ", bujur: 8.75, lintang: -2.5, timezone: 8 },
  { nama: "MADIUN", bujur: 111.51, lintang: -7.61, timezone: 7 },
  { nama: "MAGELANG ", bujur: 110.21, lintang: -7.46, timezone: 7 },
  { nama: "MAGETAN", bujur: 111.58, lintang: -7.67, timezone: 7 },
  { nama: "MAJALENGKA  ", bujur: 108.25, lintang: -6.83, timezone: 7 },
  { nama: "MAJENE", bujur: 118.96, lintang: -3.54, timezone: 8 },
  { nama: "MAKASAR", bujur: 119.43, lintang: -5.14, timezone: 8 },
  { nama: "MALANG", bujur: 112.62, lintang: -7.97, timezone: 7 },
  { nama: "MALINAU", bujur: 116.63, lintang: 3.58, timezone: 8 },
  { nama: "MALUKU", bujur: 128.5, lintang: -3.5, timezone: 9 },
  { nama: "MAMUJU", bujur: 119.5, lintang: -1.75, timezone: 8 },
  { nama: "MANADO", bujur: 124.84, lintang: 1.5, timezone: 8 },
  { nama: "MANGGARAI", bujur: 8.44, lintang: -8.6, timezone: 8 },
  { nama: "MANOKWARI", bujur: 134.8, lintang: -1.0, timezone: 9 },
  { nama: "MARABAHAN", bujur: 114.75, lintang: -3.0, timezone: 8 },
  { nama: "MAROS ", bujur: 119.57, lintang: -5.0, timezone: 8 },
  { nama: "MARTAPURA", bujur: 114.85, lintang: -3.41, timezone: 8 },
  { nama: "MATARAM", bujur: 116.11, lintang: -8.58, timezone: 8 },
  { nama: "MEDAN ", bujur: 98.66, lintang: 3.58, timezone: 7 },
  { nama: "MERAUKE", bujur: 140.33, lintang: -8.46, timezone: 9 },
  { nama: "METRO ", bujur: 105.3, lintang: -5.11, timezone: 7 },
  { nama: "MEULABOH ", bujur: 96.12, lintang: 4.13, timezone: 7 },
  { nama: "MIMIKA", bujur: 136.46, lintang: -4.69, timezone: 9 },
  { nama: "MINAHASA", bujur: 124.58, lintang: 1.0, timezone: 8 },
  { nama: "MOJOKERTO", bujur: 112.43, lintang: -7.46, timezone: 7 },
  { nama: "MUARA ENIM", bujur: 103.67, lintang: -3.78, timezone: 7 },
  { nama: "MUARA TAWEH", bujur: 114.88, lintang: -0.95, timezone: 7 },
  { nama: "MUSI BANYUASIN", bujur: 104.0, lintang: -2.5, timezone: 7 },
  { nama: "MUSI RAWAS", bujur: 102.98, lintang: -2.95, timezone: 7 },
  { nama: "NABIRE", bujur: 135.48, lintang: -3.36, timezone: 9 },
  { nama: "NGANJUK", bujur: 112.16, lintang: -7.58, timezone: 7 },
  { nama: "NGAWI", bujur: 111.67, lintang: -7.5, timezone: 7 },
  { nama: "NUNUKAN", bujur: 117.66, lintang: 4.08, timezone: 8 },
  { nama: "OGAN ILIR", bujur: 104.5, lintang: 3.0, timezone: 7 },
  { nama: "OGAN KOMERING I", bujur: 7.0, lintang: 3.0, timezone: 7 },
  { nama: "OGAN KOMERING U", bujur: 104.0, lintang: 3.0, timezone: 7 },
  { nama: "PACITAN", bujur: 111.33, lintang: -8.08, timezone: 7 },
  { nama: "PADANG", bujur: 99.83, lintang: 1.5, timezone: 7 },
  { nama: "PAGARALAM", bujur: 103.26, lintang: -4.17, timezone: 7 },
  { nama: "PAINAN", bujur: 100.65, lintang: -0.66, timezone: 7 },
  { nama: "PALANGKARAYA", bujur: 113.93, lintang: -2.26, timezone: 7 },
  { nama: "PALEMBANG", bujur: 104.75, lintang: -2.98, timezone: 7 },
  { nama: "PALU", bujur: 119.85, lintang: -0.9, timezone: 8 },
  { nama: "PAMEKASAN", bujur: 113.46, lintang: -7.16, timezone: 7 },
  { nama: "PANDEGLANG", bujur: 106.1, lintang: -6.3, timezone: 7 },
  { nama: "PANGKAL PINANG", bujur: 106.21, lintang: -2.11, timezone: 7 },
  { nama: "PANGKALAN BUN", bujur: 111.61, lintang: -2.68, timezone: 7 },
  { nama: "PANUKAL ABAB", bujur: 103.92, lintang: -3.16, timezone: 7 },
  { nama: "PARE-PARE", bujur: 119.62, lintang: -4.01, timezone: 8 },
  { nama: "PARIAMAN", bujur: 100.33, lintang: -0.75, timezone: 7 },
  { nama: "PARIGI", bujur: 121.76, lintang: -1.73, timezone: 8 },
  { nama: "PASIR", bujur: 116.0, lintang: -1.75, timezone: 8 },
  { nama: "PASURUAN", bujur: 112.9, lintang: -7.63, timezone: 7 },
  { nama: "PATI", bujur: 111.33, lintang: -6.83, timezone: 7 },
  { nama: "PAYAKUMBUH", bujur: 100.63, lintang: -0.23, timezone: 7 },
  { nama: "PEKALONGAN", bujur: 109.66, lintang: -6.88, timezone: 7 },
  { nama: "PEKAN BARU", bujur: 101.44, lintang: 1.68, timezone: 7 },
  { nama: "PELAIHAN", bujur: 114.75, lintang: -3.8, timezone: 8 },
  { nama: "PEMALANG", bujur: 109.41, lintang: -7.0, timezone: 7 },
  { nama: "PINIAI", bujur: 136.35, lintang: -3.91, timezone: 9 },
  { nama: "PINRANG", bujur: 119.65, lintang: -3.78, timezone: 8 },
  { nama: "PEM. SIANTAR", bujur: 99.05, lintang: 2.95, timezone: 7 },
  { nama: "POLEWALI", bujur: 119.25, lintang: -3.25, timezone: 8 },
  { nama: "PONOROGO", bujur: 111.66, lintang: -8.0, timezone: 7 },
  { nama: "PONTIANAK", bujur: 108.96, lintang: 0.37, timezone: 7 },
  { nama: "POSO", bujur: 8.75, lintang: -1.39, timezone: 8 },
  { nama: "PRABUMULIH", bujur: 104.22, lintang: -3.43, timezone: 7 },
  { nama: "PRAYA", bujur: 116.28, lintang: -8.69, timezone: 8 },
  { nama: "PROBOLINGGO", bujur: 112.25, lintang: -7.83, timezone: 7 },
  { nama: "PURBALINGGA", bujur: 109.5, lintang: -7.33, timezone: 7 },
  { nama: "PURWAKARTA", bujur: 107.33, lintang: -6.58, timezone: 7 },
  { nama: "PURWOREJO", bujur: 110.08, lintang: -7.66, timezone: 7 },
  { nama: "PULAU MUNA", bujur: 122.5, lintang: -5.0, timezone: 8 },
  { nama: "RANTAU", bujur: 115.15, lintang: -2.93, timezone: 8 },
  { nama: "REMBANG", bujur: 111.66, lintang: -6.83, timezone: 7 },
  { nama: "RENGAT", bujur: 103.46, lintang: 0.92, timezone: 7 },
  { nama: "ROKAN HILIR", bujur: 103.65, lintang: -4.98, timezone: 7 },
  { nama: "ROKAN HULU", bujur: 100.26, lintang: 0.85, timezone: 7 },
  { nama: "ROTE NDAO", bujur: 123.05, lintang: -10.71, timezone: 8 },
  { nama: "SABANG", bujur: 95.32, lintang: 5.89, timezone: 7 },
  { nama: "SALATIGA", bujur: 110.5, lintang: -7.31, timezone: 7 },
  { nama: "SAMARINDA", bujur: 117.15, lintang: -0.5, timezone: 8 },
  { nama: "SAMBAS", bujur: 109.25, lintang: 1.33, timezone: 7 },
  { nama: "SAMPANG", bujur: 113.25, lintang: -7.0, timezone: 7 },
  { nama: "SAMPIT", bujur: 112.95, lintang: -2.53, timezone: 7 },
  { nama: "SEKAYU", bujur: 103.86, lintang: -2.85, timezone: 7 },
  { nama: "SELAYAR", bujur: 8.5, lintang: -6.08, timezone: 8 },
  { nama: "SELONG", bujur: 116.53, lintang: -8.64, timezone: 8 },
  { nama: "SEMARANG", bujur: 110.41, lintang: -6.96, timezone: 7 },
  { nama: "SERAM", bujur: 7.8, lintang: -5.75, timezone: 9 },
  { nama: "SERANG", bujur: 107.11, lintang: -6.35, timezone: 7 },
  { nama: "SERUYAN", bujur: 112.55, lintang: -3.38, timezone: 7 },
  { nama: "SIAK", bujur: 102.06, lintang: 0.76, timezone: 7 },
  { nama: "SIDENRENG", bujur: 119.83, lintang: -4.0, timezone: 8 },
  { nama: "SIDOARJO ", bujur: 112.75, lintang: -7.5, timezone: 7 },
  { nama: "SIGLI", bujur: 95.94, lintang: 5.38, timezone: 7 },
  { nama: "SIJUNJUNG", bujur: 101.16, lintang: -0.66, timezone: 7 },
  { nama: "SIKKA", bujur: 122.23, lintang: -8.61, timezone: 8 },
  { nama: "SINABUNG", bujur: 98.4, lintang: 3.16, timezone: 7 },
  { nama: "SINGKAWANG", bujur: 109.0, lintang: 0.9, timezone: 7 },
  { nama: "SINGKIL", bujur: 97.81, lintang: 2.28, timezone: 7 },
  { nama: "SINJAI", bujur: 8.25, lintang: -5.11, timezone: 8 },
  { nama: "SINTANG", bujur: 111.5, lintang: 0.07, timezone: 7 },
  { nama: "SITUBONDO", bujur: 114.0, lintang: -7.7, timezone: 7 },
  { nama: "SLEMAN", bujur: 110.35, lintang: -7.78, timezone: 7 },
  { nama: "SOE", bujur: 124.28, lintang: -9.86, timezone: 8 },
  { nama: "SOLOK ", bujur: 100.75, lintang: -1.08, timezone: 7 },
  { nama: "SORONG", bujur: 131.25, lintang: -0.88, timezone: 9 },
  { nama: "SRAGEN", bujur: 111.16, lintang: -7.41, timezone: 7 },
  { nama: "SUBANG", bujur: 107.5, lintang: -6.41, timezone: 7 },
  { nama: "SUKABUMI", bujur: 106.75, lintang: -7.0, timezone: 7 },
  { nama: "SUKADANA", bujur: 7.55, lintang: -5.08, timezone: 7 },
  { nama: "SUKAMARA", bujur: 111.18, lintang: -2.71, timezone: 7 },
  { nama: "SUKOHARJO", bujur: 110.83, lintang: -7.7, timezone: 7 },
  { nama: "SUMBAWA", bujur: 117.43, lintang: -8.5, timezone: 8 },
  { nama: "SUMBA BARAT", bujur: 119.41, lintang: -9.63, timezone: 8 },
  { nama: "SUMBA TIMUR", bujur: 8.26, lintang: -9.64, timezone: 8 },
  { nama: "SUMEDANG", bujur: 107.83, lintang: -6.83, timezone: 7 },
  { nama: "SUMENEP", bujur: 113.86, lintang: -7.01, timezone: 7 },
  { nama: "SURABAYA", bujur: 112.75, lintang: -7.25, timezone: 7 },
  { nama: "SURAKARTA", bujur: 110.83, lintang: -7.58, timezone: 7 },
  { nama: "SAWAH LUNTO", bujur: 100.78, lintang: -0.66, timezone: 7 },
  { nama: "TABANAN", bujur: 115.16, lintang: -8.5, timezone: 8 },
  { nama: "TAKALAR", bujur: 119.43, lintang: -5.42, timezone: 8 },
  { nama: "TAMIANG", bujur: 116.25, lintang: -2.38, timezone: 7 },
  { nama: "TANA TORAJA ", bujur: 119.83, lintang: -2.75, timezone: 8 },
  { nama: "TANGERANG", bujur: 106.62, lintang: -6.17, timezone: 7 },
  { nama: "TANJUNG PANDAN", bujur: 107.65, lintang: -2.75, timezone: 7 },
  { nama: "TANJUNG PINANG", bujur: 104.43, lintang: 0.91, timezone: 7 },
  { nama: "TELUK BINTUNI", bujur: 133.5, lintang: -2.1, timezone: 9 },
  { nama: "TELUK WANDAMEN", bujur: 134.49, lintang: -2.7, timezone: 9 },
  { nama: "TAPAKTUAN", bujur: 97.16, lintang: 3.25, timezone: 7 },
  { nama: "TARAKAN", bujur: 117.63, lintang: 3.3, timezone: 8 },
  { nama: "TASIKMALAYA ", bujur: 108.19, lintang: -7.33, timezone: 7 },
  { nama: "TEGAL", bujur: 109.13, lintang: -6.86, timezone: 7 },
  { nama: "TEMANGGUNG", bujur: 110.25, lintang: -7.25, timezone: 7 },
  { nama: "TENGGAMUS", bujur: 104.63, lintang: -5.5, timezone: 7 },
  { nama: "TERNATE", bujur: 126.0, lintang: -3.27, timezone: 9 },
  { nama: "TIDORE", bujur: 127.43, lintang: 0.67, timezone: 9 },
  { nama: "TOLI-TOLI", bujur: 8.81, lintang: 1.04, timezone: 8 },
  { nama: "TRENGGALEK", bujur: 111.83, lintang: -8.08, timezone: 7 },
  { nama: "TUAL", bujur: 132.45, lintang: -5.31, timezone: 9 },
  { nama: "TUBAN", bujur: 112.0, lintang: -6.83, timezone: 7 },
  { nama: "TULUNGAGUNG", bujur: 112.08, lintang: -8.08, timezone: 7 },
  { nama: "UNGARAN", bujur: 110.4, lintang: -7.12, timezone: 7 },
  { nama: "WAJO", bujur: 119.43, lintang: -5.13, timezone: 8 },
  { nama: "WONOGIRI", bujur: 110.65, lintang: -7.48, timezone: 7 },
  { nama: "WONOSARI", bujur: 110.57, lintang: -7.98, timezone: 7 },
  { nama: "WONOSOBO", bujur: 110.0, lintang: -7.41, timezone: 7 },
  { nama: "WATES ", bujur: 110.6, lintang: -7.27, timezone: 7 },
  { nama: "WAY KANAN", bujur: 104.55, lintang: -4.51, timezone: 7 },
  { nama: "YAPEN WAROPEN", bujur: 136.5, lintang: -2.0, timezone: 9 },
  { nama: "YOGYAKARTA", bujur: 110.36, lintang: -7.78, timezone: 7 },
];

export default databaseKota;