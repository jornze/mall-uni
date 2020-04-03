<template>
<view>
<!--model.wxml-->
<template name="msgItem">
  <view class="centerText">
    <text>{{index}}: {{msg}}</text>
    <text>Time: {{time}}</text>
  </view>
</template>

<!-- --------------分割线------------- -->

<template name="areaData">
  <view class="animation-element-wrapper" :animation="animation" :style="'visibility:' + (show ? 'visible':'hidden')" @tap="hiddenFloatView" data-id="444">
     <view class="animation-element" @tap.stop="nono">
        <text class="left-bt" @tap.stop="hiddenFloatView" data-id="555">取消</text>
        <text class="right-bt" @tap.stop="hiddenFloatView" data-id="666">确定</text>
          <view class="line"></view> 

        <picker-view indicator-style="height: 50rpx;" :value="value" @change="bindChange" @tap.stop="nono">
        <!--省-->
        <picker-view-column>
           <view v-for="(sheng, index) in provinces" :key="index">{{sheng.name}}</view>
        </picker-view-column>
        <!--地级市-->
        <picker-view-column>
          <view v-for="(shi, index) in citys" :key="index">{{shi.name}}</view>
        </picker-view-column>
        <!--区县-->
        <picker-view-column>
          <view v-for="(xian, index) in countys" :key="index">{{xian.name}}</view>
        </picker-view-column>
        </picker-view>
    </view>
  </view>
</template>
</view>
</template>

// model.js
var area = require("../utils/area.js");

var areaInfo = []; //所有省市区县数据

var provinces = []; //省

var citys = []; //城市

var countys = []; //区县

var value = [0, 0, 0]; //数据位置下标

var info = {};

function updateAreaData(that, status, e) {
  //获取省份数据
  var getProvinceData = function () {
    var s;
    provinces = [];
    var num = 0;

    for (var i = 0; i < areaInfo.length; i++) {
      s = areaInfo[i];

      if (s.di == "00" && s.xian == "00") {
        provinces[num] = s;
        num++;
      }
    } //初始化调一次
    //获取地级市数据


    getCityArr(); //获取区县数据

    getCountyInfo(); //模型赋值

    info = {
      item: {
        provinces: provinces,
        citys: citys,
        countys: countys,
        value: value
      }
    };
    animationEvents(that, 200, false, 0);
  }; // 获取地级市数据


  var getCityArr = function (count = 0) {
    var c;
    citys = [];
    var num = 0;

    for (var i = 0; i < areaInfo.length; i++) {
      c = areaInfo[i];

      if (c.xian == "00" && c.sheng == provinces[count].sheng && c.di != "00") {
        citys[num] = c;
        num++;
      }
    }

    if (citys.length == 0) {
      citys[0] = {
        name: ''
      };
    }
  }; // 获取区县数据


  var getCountyInfo = function (column0 = 0, column1 = 0) {
    var c;
    countys = [];
    var num = 0;

    for (var i = 0; i < areaInfo.length; i++) {
      c = areaInfo[i];

      if (c.xian != "00" && c.sheng == provinces[column0].sheng && c.di == citys[column1].di) {
        countys[num] = c;
        num++;
      }
    }

    if (countys.length == 0) {
      countys[0] = {
        name: ''
      };
    }

    value = [column0, column1, 0];
  }; //滑动事件


  var valueChange = function (e, that) {
    var val = e.detail.value; //判断滑动的是第几个column
    //若省份column做了滑动则定位到地级市和区县第一位

    if (value[0] != val[0]) {
      val[1] = 0;
      val[2] = 0;
      getCityArr(val[0]); //获取地级市数据

      getCountyInfo(val[0], val[1]); //获取区县数据
    } else {
      //若省份column未做滑动，地级市做了滑动则定位区县第一位
      if (value[1] != val[1]) {
        val[2] = 0;
        getCountyInfo(val[0], val[1]); //获取区县数据
      }
    }

    value = val;
    assignmentData(that, that.data.item.show); //回调
    //callBack(val);
  };

  if (status == 0) {
    area.getAreaInfo(function (arr) {
      areaInfo = arr; //获取省份数据

      getProvinceData();
    });
  } //滑动事件
  else {
      valueChange(e, that);
    }
} //动画事件


function animationEvents(that, moveY, show, duration) {
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: duration,
    timingFunction: "ease",
    delay: 0
  });
  that.animation.translateY(moveY + 'vh').step(); //赋值

  assignmentData(that, show);
} //赋值


function assignmentData(that, show) {
  that.setData({
    item: {
      animation: that.animation.export(),
      show: show,
      provinces: provinces,
      citys: citys,
      countys: countys,
      value: value
    }
  });
}

module.exports = {
  updateAreaData: updateAreaData,
  animationEvents: animationEvents
};<style>
@import "./model.css";
</style>