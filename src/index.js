export default {
  state: false,
  toggle() {
    this.state = !this.state;
    this.state ? this.request() : this.exit();
  },
  request() {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else {
      console.warn("进入全屏失败");
    }
    return this.state;
  },
  exit() {
    if (document.documentElement.requestFullScreen) {
      document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.mozCancelFullScreen();
    } else {
      console.warn("退出全屏失败");
    }
    return this.state;
  },
};
