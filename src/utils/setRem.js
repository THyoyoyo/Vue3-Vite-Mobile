const baseSize = 100;
// 设置 rem 函数
function setRem(e) {
  //   if (document.documentElement.clientWidth > 750) {
  //     document.documentElement.style.fontSize = "100px";
  //     return;
  //   }
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 375;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
setRem();
window.addEventListener("resize", () => {
  setRem();
});
