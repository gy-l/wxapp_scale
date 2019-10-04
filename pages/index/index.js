// pages/index/index.js
import tool from "../../utils/tools.js";
Page({

  data: {
    weight: 50,
    height: 80,
    styles: {
      line: '#C2D7E7',
      bginner: '#fbfbfb',
      bgoutside: '#EBF6FF',
      font: '#A8BBCA',
      fontColor: '#A8BBCA',
      fontSize: 15
    }
  },

  bindvalue(e) { //滑动回调
    console.log(e, "滑动")
    const value = e.detail.value;
    const key = e.currentTarget.id;
    const data = {};
    data[key] = value;
    console.log(key, "")
    this.setData(data);
  },
  bindKeyInput: tool.debounce(function (e) {
    console.log('e', e[0])
    e[0].detail.value = (e[0].detail.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
    console.log('e', e[0].detail.value)
    this.setData({
      weight: e[0].detail.value
    })
    setTimeout(() => {
      this.weightScroll.init();
    }, 500)
  }, 1500),
  bindHeightInput: tool.debounce(function (e) {
    console.log('e', e[0])
    e[0].detail.value = (e[0].detail.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
    console.log('e', e[0].detail.value)
    this.setData({
      height: e[0].detail.value
    })
    setTimeout(() => {
      this.heightScroll.init();
    }, 500)

  }, 1500),
  bindHeghtvalue(e) { //滑动回调
    console.log(e, "滑动")
    const value = e.detail.value;
    const key = e.currentTarget.id;
    const data = {};
    data[key] = value;
    console.log(data[key])
    this.setData(data);
  },
  onReady: function () {
    this.weightScroll = this.selectComponent("#weight");
    this.heightScroll = this.selectComponent("#height");
  },
})