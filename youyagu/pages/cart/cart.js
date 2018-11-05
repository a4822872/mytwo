// pages/cart/cart.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表
    carts:[
      {title:'华为p20 法拉利版',images:'../images/2.jpg',price:'2366',selected:false},
      { title: '华为p20 兰博基尼版', images: '../images/3.jpg', price: '3366', selected: false },
      { title: '小米10 探索透明版', images: '../images/2.jpg', price: '1366', selected: false },
    ],
    zongprice: function (carts){
      var zongprice=0;
      for (i = 0; i < carts.length;i++){
        if(carts[i].selected==true){
          zongprice+= carts[i].price;
        }
        return zongprice;
      }
    },
    //全选按钮状态值
    selectedStasu:false
  },

  // 全选/不全选
  selectedAll:function(e){
    // 定义空数组,存放修改后的值
    if(this.data.selectedStasu==false){
      this.setAll(true);
    }else{
      this.setAll(false);
    }
  },
  setAll:function(boolen=false){
    var _carts=[];
    for (var i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].selected = boolen;
    }
    this.data.selectedStasu = boolen;
    _carts = this.data.carts;
    this.setData({ carts: _carts }); /*重新赋值 */
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
})({

  /**
   * 页面的初始数据
   */
  data: {

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