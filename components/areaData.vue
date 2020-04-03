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