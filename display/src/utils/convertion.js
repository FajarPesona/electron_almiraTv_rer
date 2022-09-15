function hmToStr(h, m) {
  return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}`;
}

export { hmToStr };
