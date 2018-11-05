// pages/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTap:0 ,  /*修改左侧菜单样式*/
    scrollTop:0 ,  /*跳转后右侧视图回到顶部 */
  },
  /*左侧菜单单击事件 */
  navbarTap:function(e){
    console.log(e.currentTap.dataset.id);
    //修改状态值
    var _this=this;
    this.setData({
       currentTap:e.currentTap.dataset.id,
       scrollTop:0
     });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})