<template>
    <div class="footer page-footer relative">
        <div class="footer-body">
            <div class="footer-body-top">
                <div class="item-1">
                    <img src="../assets/footer_logo.png" height="51"
                        alt="蓝桥云课">
                    <div class="divide"></div>
                    <div class="company-info">
                        <div class="info-first">
                            国信蓝桥教育科技股份有限公司成立于2005年，是一家以大学生就业为切入点，以职业服务为主线，基于大学生职业生涯各个阶段的需求提供精准服务的人才大数据科技服务平台。
                        </div>
                        蓝桥通过提供教育、就业、职业服务，连接高校和企业，做大学生的经纪人，伴随大学生成长。
                    </div>
                </div>
                <div class="item-2 hover-blue">
                    <div class="title">快速导航</div>
                    <div class="record-info"><router-link to="/index" class="link">
                            蓝桥杯
                        </router-link></div>
                    <div class="record-info"><router-link to="/index" class="link">
                            1+X
                        </router-link></div>
                    <div class="record-info"><router-link to="/index" class="link">
                            企业版
                        </router-link></div>
                    <div class="record-info"><router-link to="/index" class="link">
                            成为作者
                        </router-link></div>
                </div>
                <div class="hover-blue">
                    <div class="title">联系我们</div>
                    <div class="record-info">
                        <router-link to="/index" class="link">
                            关于我们
                        </router-link>
                    </div>
                    <div class="record-info">
                        <router-link to="/index" class="link">
                            联系我们
                        </router-link>
                    </div>
                </div>
                <div class="friend-links">
                    <div class="title">相关链接</div>
                    <div class="friend-links-body">
                        <router-link to="/index" class="friend-link">
                            <img src="../assets/img/gyxxh.png" height="31">
                        </router-link>
                    </div>
                    <div class="friend-links-body">
                        <router-link to="/index" class="friend-link">
                            <img src="../assets/img/gyxxhrc.png" height="31">
                        </router-link>
                    </div>
                    <div class="friend-links-body">
                        <router-link to="/index" class="friend-link">
                            <img src="../assets/img/gxrcw.png" height="31">
                        </router-link>
                    </div>
                </div>
                <div class="focusus">
                    <div class="title">关注我们</div>
                    <div class="focusus-top"><span class="text--bold">10w</span>
                        <div>学子与你一起进步</div>
                    </div>
                    <div class="share-us">
                        <div class="item-box">
                            <div class="item">
                                <div class="item-top"><img
                                        src="../assets/icon/code.png"
                                        alt="" width="28"></div>
                                <div class="text-center">代码交流群</div>
                            </div>
                            <div class="popver">
                                <div class="top">
                                    <div>加入社群</div>
                                    <div class="mt-5px">10W学子一起进步</div>
                                </div>
                                <div class="bottom"><img
                                        src="../assets/img/community-qrcode.png"
                                        alt="" height="92"></div>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                <div class="item-top"><img
                                        src="../assets/icon/video.png"
                                        alt="" width="28"></div>
                                <div class="text-center">云课视频号</div>
                            </div>
                            <div class="popver">
                                <div class="top">
                                    <div>云课视频号</div>
                                    <div class="mt-5px">了解更多蓝桥信息</div>
                                </div>
                                <div class="bottom"><img
                                        src="../assets/img/community-qrcode.png"
                                        alt="" height="92"></div>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                <div class="item-top"><img
                                        src="../assets/icon/wechat.png"
                                        alt="" width="28"></div>
                                <div class="text-center">蓝桥公众号</div>
                            </div>
                            <div class="popver">
                                <div class="top">
                                    <div>蓝桥公众号</div>
                                    <div class="mt-5px">关注服务号，登录更方便</div>
                                </div>
                                <div class="bottom"><img
                                        src="../assets/img/community-qrcode.png"
                                        alt="" height="92"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-body-bottom">
                <el-link :underline="false" class="item">
                    <div class="item-img item-img-1">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shizhanke"></use>
                        </svg>

                    </div>
                </el-link> 
                <el-link :underline="false" class="item">
                    <div class="item-img item-img-4">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-shixunying"></use>
                        </svg>
                    </div>
                </el-link> 
                <el-link :underline="false" class="item">
                    <div class="item-img item-img-2">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-huiyuan"></use>
                        </svg>
                    </div>
                </el-link> 
                <el-link :underline="false" class="item">
                    <div class="item-img item-img-3">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-jingsai"></use>
                        </svg>
                    </div>
                </el-link> 
                <el-link :underline="false" target="_blank" class="item">
                    <div class="item-img item-img-5">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-lanqiaobei"></use>
                        </svg>
                    </div>
                </el-link>
            </div>
            <div class="filing-info">
                <span class="copyright">©Copyright2024.</span>
                <span class="copyright">杜勇版权所有</span>
            </div>
        </div>
        <div class="right-bottom" style="bottom: calc(50% - 326px);">
            <div class="widgets-box">
                <div class="robots">
                    <div class="wechat-community">
                        <img src="../assets/icon/icon-wechat.png"
                            alt="" class="icon-wechat">
                        <div class="wechat-community-popover">
                            <img src="../assets/img/community-qrcode.png"
                                alt="" class="community-qrcode">
                            <div class="wechat-community-popover__title">扫码加入社群</div>
                            <div class="wechat-community-popover__desc">和10w学子共同进步</div>
                        </div>
                    </div>
                </div>
                <el-backtop :bottom="100">
                    <div class="back-top-top">回到<br>顶部
                    </div>
                </el-backtop>
            </div>
        </div>
    </div>
</template>

<script setup>
import '../assets/iconfont/iconfont.js'
import { showPic } from '../utils/tools.js'
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.footer {
    background: #000;
    padding: 60px 0;
    z-index: 2
}

.footer-body {
    margin: 0 auto;
    padding: 0;
    width: 1092px
}

.footer-body .footer-top {
    font-size: 14px;
}

.footer-body .footer-body-bottom,
.footer-body .footer-body-top {
    display: flex;
    justify-content: space-between
}

.footer-body .footer-body-bottom {
    margin-top: 20px
}

.footer-body .footer-body-bottom .item {
    align-items: center;
    background: #151518;
    border-radius: 5px;
    display: flex;
    height: 60px;
    justify-content: center;
    width: 194px
}

.footer-body .footer-body-bottom .item:hover {
    background: linear-gradient(318deg, #2d58ff, #3c8dff);
    transition: all .3s
}

.footer-body .footer-body-bottom .item:hover .item-img .icon {
    fill: #fff
}

.footer-body .footer-body-bottom .item .item-img {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 18px
}

.footer-body .footer-body-bottom .item .item-img .icon {
    fill: #444446;
    height: 100%;
    width: 100%
}

.footer-body .filing-info {
    color: #555;
    font-size: 12px;
    margin-top: 20px;
    text-align: center
}

.footer-body .filing-info a {
    color: #555
}

.footer-body .filing-info a:hover {
    color: #555;
    -webkit-text-decoration: none;
    text-decoration: none
}

.footer-body .hover-blue .record-info a {
    color: #a0abb5
}

.footer-body .hover-blue .record-info:hover a {
    color: #2e7eee
}

.item-1 {
    width: 260px
}

.item-1 .divide {
    border: 1px solid #a0abb5;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 17px;
    opacity: .42;
    width: 72px
}

.company-info {
    color: #a0abb5;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px
}

.company-info .info-first {
    margin-bottom: 12px;
}

.record-info {
    margin-bottom: 10px;
}

.record-info a {
    color: #999;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px
}

.record-info a:hover {
    -webkit-text-decoration: none;
    text-decoration: none
}

.company-info {
    color: #a0abb5;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px
}

.margin-b-10 {
    margin-bottom: 10px
}

.title {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0 0 20px
}

.friend-links-body {
    margin-bottom: 10px
}

.focusus .share-us {
    margin-top: 20px;
    display: flex;
}

.focusus .focusus-top {
    align-items: flex-end;
    color: #a0abb5;
    display: flex;
    font-size: 14px;
    font-weight: 400
}

.focusus .focusus-top .text--bold {
    color: #f1f5f7;
    font-size: 72px;
    font-style: italic;
    line-height: 67px;
    margin-right: 9px
}

.focusus .item-box {
    margin-right: 20px;
    position: relative
}

.focusus .item-box:hover .popver {
    display: block !important
}

.focusus .item-box .item {
    color: #a0abb5;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
}

.focusus .item-box .item .item-top {
    align-items: center;
    background: #151518;
    border-radius: 5px;
    display: flex;
    height: 50px;
    justify-content: center;
    margin-bottom: 10px;
    width: 80px
}

.focusus .item-box .popver {
    background: #fff;
    border-radius: 5px;
    display: none;
    height: 202px;
    left: 50%;
    position: absolute;
    top: -227px;
    transform: translateX(-50%);
    width: 180px
}

.focusus .item-box .popver .top {
    background-image: url(../assets/icon/popver-top-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    height: 62px;
    padding: 10px 12px;
    width: 100%
}

.focusus .item-box .popver .top div:last-child {
    font-size: 12px
}

.focusus .item-box .popver .bottom {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center
}

.focusus .item-box .popver .bottom:after {
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 14px solid #fff;
    bottom: -14px;
    content: "";
    display: block;
    position: absolute
}

.min-title {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 8px 0 0
}

.remark {
    color: #998;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px
}

.wx-qrcode {
    margin-top: 42px
}

.register-tip {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    bottom: 22px;
    left: -100%;
    position: fixed;
    transition: left 1s ease-out;
    width: 494px;
    z-index: 3
}

.copyright {
    margin: 0 4px;
}

.right-bottom {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 10px;
    z-index: 5
}

.wechat-community {
    position: relative
}

.wechat-community .icon-wechat {
    height: 35px;
    width: 35px
}

.wechat-community:hover .wechat-community-popover {
    display: flex
}

.wechat-community .wechat-community-popover {
    align-items: center;
    background-image: url(../assets/img/points-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: none;
    flex-direction: column;
    height: 221px;
    justify-content: center;
    position: absolute;
    right: 59px;
    top: 50%;
    transform: translateY(-50%);
    width: 177px
}

.wechat-community .wechat-community-popover .community-qrcode {
    height: 116px;
    width: 116px
}

.wechat-community .wechat-community-popover__title {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-top: 6px
}

.wechat-community .wechat-community-popover__desc {
    color: #6b7986;
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px
}

.widgets-box .robots,
.widgets-box {
    align-items: center;
    display: flex;
    flex-direction: column
}

.widgets-box .robots {
    background: #fff;
    border: 1px solid #d7e2ec;
    border-radius: 24px;
    box-shadow: 0 2px 4px 0 rgba(26, 28, 32, .09);
    height: 63px;
    justify-content: center;
    margin-top: 19px;
    width: 48px
}

.widgets-box .robots.h-63px {
    height: 63px
}

.widgets-box .back-top-top {
    background: #fff;
    border: 1px solid #d7e2ec;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(26, 28, 32, .09);
    color: #6b7986;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-top: 16px;
    padding: 9px 12px
}

.el-backtop {
    position: unset;
    width: unset;
    background-color: unset;
    box-shadow: unset;
}
</style>