//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    this.setData({
      title:["to Kevinaskin.top"],
      articleList:'',
      func:'Welcome'
    })
  },
  onTapTag:function(event){
    var that = this;
    var id = event.currentTarget.id;
    console.log(id);
    if(id == "blog"){
      this.getData();
    }else if(id == 'index'){
      this.onLoad();
    }else{
      that.getLog();
    }
  },
  getData:function(){
    var that = this;
    wx.request({
      url:"http://kevinaskin.top/api/article-get",
      success:function(data){
        console.log(data);
        that.setData({
          articleList:data.data,
          title:'',
          func:'Blog'
        })
      }
    })
  },
  getLog:function(){
    var that = this;
    wx.request({
      url:"http://kevinaskin.top/about/getmsg",
      success:function(data){
        console.log(data.data);
        that.setData({
          articleList:data.data,
          title:'',
          func:'Comments'
        })
      }
    })
  }
})
