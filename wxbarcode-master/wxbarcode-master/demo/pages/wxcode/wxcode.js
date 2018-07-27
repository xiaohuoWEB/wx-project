//index.js
var wxbarcode = require('../../utils/index.js');
const app = getApp();

Page({

  data: {
    code: '1234567890123456789'
  },

  onLoad: function () {
    wxbarcode.barcode('barcode', '1234567890123456789', 680, 200);
    wxbarcode.qrcode('qrcode', '1234567890123456789', 420, 420);

    // wx.getUserInfo({
    //   withCredentials: true,
    //   lang: '',
    //   success: function (res) {
    //     console.log(res);
    //     app.globalData.getUserInfo = res.userInfo;
    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  }
})