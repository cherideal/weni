import {
  user
} from '../../api/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    token: wx.getStorageSync('access_token'),
    user: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUser();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getUser() {
    if (this.data.token) {
      user.info().then(res => {
        this.setData({
          user: res
        });
      });
    }
  },

  goLogin() {
    wx.navigateTo({
      url: '/pages/auth/login',
    })
  }
})