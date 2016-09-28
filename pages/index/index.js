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
      title:["Welcome to Kevinaskin.top"],
      articleList:''
    })
  },
  onTapTag:function(event){
    var id = event.currentTarget.id;
    console.log(id);
    if(id == "blog"){
      this.getData();
    }else if(id == 'index'){
      this.onLoad();
    }else{
      this.setData({
        articleList:'',
        title:['Github:github.com/kevinaskin','mobile:15067148672','job:Web前端']
      })
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
          title:''
        })
      }
    })
  }
})
