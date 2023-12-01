const twMerge = (...classes) => {
  return classes.join(" ");
};
function getTextFromBg(bgColor) {
  let r = bgColor.substring(1, 3);
  let g = bgColor.substring(3, 5);
  let b = bgColor.substring(5, 7);
  const bgDelta = parseInt(r, 16) * 0.2 + parseInt(g, 16) * 0.5 + parseInt(b, 16) * 0.114;
  return 255 - bgDelta < 105 ? "#000" : "#fff";
}
export {
  getTextFromBg as g,
  twMerge as t
};
