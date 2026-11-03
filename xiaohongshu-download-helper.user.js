// ==UserScript==
// @name         小红书下载助手
// @namespace    waelun
// @version      2.1.3
// @author       waelun; maintained by ChenshuXu
// @description  小红书图片、视频、实况下载（个人维护版）
// @license      MIT
// @homepageURL  https://github.com/ChenshuXu/xiaohongshu-download-helper
// @supportURL   https://github.com/ChenshuXu/xiaohongshu-download-helper/issues
// @icon         https://picasso-static.xiaohongshu.com/fe-platform/f43dc4a8baf03678996c62d8db6ebc01a82256ff.png
// @match        https://www.xiaohongshu.com/*
// @match        https://www.xiaohongshu.com/explore/*
// @match        https://rednote.com/*
// @match        https://www.rednote.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.min.js
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3Bwindow.VueDemi%3DVue%3B
// @require      https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js
// @require      https://cdn.jsdelivr.net/npm/streamsaver@2.0.6/StreamSaver.js
// @require      data:application/javascript,%3Bwindow.StreamSaver%3DstreamSaver%3B
// @require      https://cdn.jsdelivr.net/npm/pinia@2.2.6/dist/pinia.iife.prod.js
// @require      data:application/javascript,%3Bwindow.Pinia%3DPinia%3B
// @require      https://cdn.jsdelivr.net/npm/pinia-plugin-persistedstate@4.1.3/dist/index.global.js
// @connect      *
// @connect      xhscdn.com
// @connect      xhscdn.net
// @connect      xiaohongshu.com
// @connect      rednotecdn.com
// @connect      localhost
// @grant        GM.info
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @run-at       document-end
// @downloadURL  https://raw.githubusercontent.com/ChenshuXu/xiaohongshu-download-helper/main/xiaohongshu-download-helper.user.js
// @updateURL    https://raw.githubusercontent.com/ChenshuXu/xiaohongshu-download-helper/main/xiaohongshu-download-helper.user.js
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const r=document.createElement("style");r.textContent=e,document.head.append(r)})(' @charset "UTF-8";:root{--el-color-white: #ffffff;--el-color-black: #000000;--el-color-primary-rgb: 255, 46, 77;--el-color-success-rgb: 103, 194, 58;--el-color-warning-rgb: 230, 162, 60;--el-color-danger-rgb: 245, 108, 108;--el-color-error-rgb: 245, 108, 108;--el-color-info-rgb: 144, 147, 153;--el-font-size-extra-large: 20px;--el-font-size-large: 18px;--el-font-size-medium: 16px;--el-font-size-base: 14px;--el-font-size-small: 13px;--el-font-size-extra-small: 12px;--el-font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5FAE\u8F6F\u96C5\u9ED1", Arial, sans-serif;--el-font-weight-primary: 500;--el-font-line-height-primary: 24px;--el-index-normal: 1;--el-index-top: 1000;--el-index-popper: 2000;--el-border-radius-base: 4px;--el-border-radius-small: 2px;--el-border-radius-round: 20px;--el-border-radius-circle: 100%;--el-transition-duration: .3s;--el-transition-duration-fast: .2s;--el-transition-function-ease-in-out-bezier: cubic-bezier(.645, .045, .355, 1);--el-transition-function-fast-bezier: cubic-bezier(.23, 1, .32, 1);--el-transition-all: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade: opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade: transform var(--el-transition-duration) var(--el-transition-function-fast-bezier), opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear: opacity var(--el-transition-duration-fast) linear;--el-transition-border: border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow: box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color: color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large: 40px;--el-component-size: 32px;--el-component-size-small: 24px}:root{color-scheme:light;--el-color-primary: #ff2e4d;--el-color-primary-light-3: rgb(255, 108.7, 130.4);--el-color-primary-light-5: rgb(255, 150.5, 166);--el-color-primary-light-7: rgb(255, 192.3, 201.6);--el-color-primary-light-8: rgb(255, 213.2, 219.4);--el-color-primary-light-9: rgb(255, 234.1, 237.2);--el-color-primary-dark-2: rgb(204, 36.8, 61.6);--el-color-success: #67c23a;--el-color-success-light-3: rgb(148.6, 212.3, 117.1);--el-color-success-light-5: rgb(179, 224.5, 156.5);--el-color-success-light-7: rgb(209.4, 236.7, 195.9);--el-color-success-light-8: rgb(224.6, 242.8, 215.6);--el-color-success-light-9: rgb(239.8, 248.9, 235.3);--el-color-success-dark-2: rgb(82.4, 155.2, 46.4);--el-color-warning: #e6a23c;--el-color-warning-light-3: rgb(237.5, 189.9, 118.5);--el-color-warning-light-5: rgb(242.5, 208.5, 157.5);--el-color-warning-light-7: rgb(247.5, 227.1, 196.5);--el-color-warning-light-8: rgb(250, 236.4, 216);--el-color-warning-light-9: rgb(252.5, 245.7, 235.5);--el-color-warning-dark-2: rgb(184, 129.6, 48);--el-color-danger: #f56c6c;--el-color-danger-light-3: rgb(248, 152.1, 152.1);--el-color-danger-light-5: rgb(250, 181.5, 181.5);--el-color-danger-light-7: rgb(252, 210.9, 210.9);--el-color-danger-light-8: rgb(253, 225.6, 225.6);--el-color-danger-light-9: rgb(254, 240.3, 240.3);--el-color-danger-dark-2: rgb(196, 86.4, 86.4);--el-color-error: #f56c6c;--el-color-error-light-3: rgb(248, 152.1, 152.1);--el-color-error-light-5: rgb(250, 181.5, 181.5);--el-color-error-light-7: rgb(252, 210.9, 210.9);--el-color-error-light-8: rgb(253, 225.6, 225.6);--el-color-error-light-9: rgb(254, 240.3, 240.3);--el-color-error-dark-2: rgb(196, 86.4, 86.4);--el-color-info: #909399;--el-color-info-light-3: rgb(177.3, 179.4, 183.6);--el-color-info-light-5: rgb(199.5, 201, 204);--el-color-info-light-7: rgb(221.7, 222.6, 224.4);--el-color-info-light-8: rgb(232.8, 233.4, 234.6);--el-color-info-light-9: rgb(243.9, 244.2, 244.8);--el-color-info-dark-2: rgb(115.2, 117.6, 122.4);--el-bg-color: #ffffff;--el-bg-color-page: #f2f3f5;--el-bg-color-overlay: #ffffff;--el-text-color-primary: #303133;--el-text-color-regular: #606266;--el-text-color-secondary: #909399;--el-text-color-placeholder: #a8abb2;--el-text-color-disabled: #c0c4cc;--el-border-color: #dcdfe6;--el-border-color-light: #e4e7ed;--el-border-color-lighter: #ebeef5;--el-border-color-extra-light: #f2f6fc;--el-border-color-dark: #d4d7de;--el-border-color-darker: #cdd0d6;--el-fill-color: #f0f2f5;--el-fill-color-light: #f5f7fa;--el-fill-color-lighter: #fafafa;--el-fill-color-extra-light: #fafcff;--el-fill-color-dark: #ebedf0;--el-fill-color-darker: #e6e8eb;--el-fill-color-blank: #ffffff;--el-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);--el-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, .12);--el-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, .12);--el-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16);--el-disabled-bg-color: var(--el-fill-color-light);--el-disabled-text-color: var(--el-text-color-placeholder);--el-disabled-border-color: var(--el-border-color-light);--el-overlay-color: rgba(0, 0, 0, .8);--el-overlay-color-light: rgba(0, 0, 0, .7);--el-overlay-color-lighter: rgba(0, 0, 0, .5);--el-mask-color: rgba(255, 255, 255, .9);--el-mask-color-extra-light: rgba(255, 255, 255, .3);--el-border-width: 1px;--el-border-style: solid;--el-border-color-hover: var(--el-text-color-disabled);--el-border: var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey: var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center top}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center bottom}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transition:var(--el-transition-md-fade);transform-origin:top left}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-icon-loading{animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.el-icon{--color: inherit;height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor;color:var(--color);font-size:inherit}.el-icon.is-loading{animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}.el-drawer{--el-drawer-bg-color: var(--el-dialog-bg-color, var(--el-bg-color));--el-drawer-padding-primary: var(--el-dialog-padding-primary, 20px)}.el-drawer{position:absolute;box-sizing:border-box;background-color:var(--el-drawer-bg-color);display:flex;flex-direction:column;box-shadow:var(--el-box-shadow-dark);overflow:hidden;transition:all var(--el-transition-duration)}.el-drawer .rtl,.el-drawer .ltr,.el-drawer .ttb,.el-drawer .btt{transform:translate(0)}.el-drawer__sr-focus:focus{outline:none!important}.el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:var(--el-drawer-padding-primary);padding-bottom:0}.el-drawer__header>:first-child{flex:1}.el-drawer__title{margin:0;flex:1;line-height:inherit;font-size:16px}.el-drawer__footer{padding:var(--el-drawer-padding-primary);padding-top:10px;text-align:right}.el-drawer__close-btn{display:inline-flex;border:none;cursor:pointer;font-size:var(--el-font-size-extra-large);color:inherit;background-color:transparent;outline:none}.el-drawer__close-btn:focus i,.el-drawer__close-btn:hover i{color:var(--el-color-primary)}.el-drawer__body{flex:1;padding:var(--el-drawer-padding-primary);overflow:auto}.el-drawer__body>*{box-sizing:border-box}.el-drawer.ltr,.el-drawer.rtl{height:100%;top:0;bottom:0}.el-drawer.ttb,.el-drawer.btt{width:100%;left:0;right:0}.el-drawer.ltr{left:0}.el-drawer.rtl{right:0}.el-drawer.ttb{top:0}.el-drawer.btt{bottom:0}.el-drawer-fade-enter-active,.el-drawer-fade-leave-active{transition:all var(--el-transition-duration)}.el-drawer-fade-enter-from,.el-drawer-fade-enter-active,.el-drawer-fade-enter-to,.el-drawer-fade-leave-from,.el-drawer-fade-leave-active,.el-drawer-fade-leave-to{overflow:hidden!important}.el-drawer-fade-enter-from,.el-drawer-fade-leave-to{background-color:transparent!important}.el-drawer-fade-enter-from .rtl,.el-drawer-fade-leave-to .rtl{transform:translate(100%)}.el-drawer-fade-enter-from .ltr,.el-drawer-fade-leave-to .ltr{transform:translate(-100%)}.el-drawer-fade-enter-from .ttb,.el-drawer-fade-leave-to .ttb{transform:translateY(-100%)}.el-drawer-fade-enter-from .btt,.el-drawer-fade-leave-to .btt{transform:translateY(100%)}.el-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000;height:100%;background-color:var(--el-overlay-color-lighter);overflow:auto}.el-overlay .el-overlay-root{height:0}.el-form{--el-form-label-font-size: var(--el-font-size-base);--el-form-inline-content-width: 220px}.el-form--inline .el-form-item{display:inline-flex;vertical-align:middle;margin-right:32px}.el-form--inline.el-form--label-top{display:flex;flex-wrap:wrap}.el-form--inline.el-form--label-top .el-form-item{display:block}.el-form-item{display:flex;--font-size: 14px;margin-bottom:18px}.el-form-item .el-form-item{margin-bottom:0}.el-form-item .el-input__validateIcon{display:none}.el-form-item--large{--font-size: 14px;--el-form-label-font-size: var(--font-size);margin-bottom:22px}.el-form-item--large .el-form-item__label{height:40px;line-height:40px}.el-form-item--large .el-form-item__content{line-height:40px}.el-form-item--large .el-form-item__error{padding-top:4px}.el-form-item--default{--font-size: 14px;--el-form-label-font-size: var(--font-size);margin-bottom:18px}.el-form-item--default .el-form-item__label{height:32px;line-height:32px}.el-form-item--default .el-form-item__content{line-height:32px}.el-form-item--default .el-form-item__error{padding-top:2px}.el-form-item--small{--font-size: 12px;--el-form-label-font-size: var(--font-size);margin-bottom:18px}.el-form-item--small .el-form-item__label{height:24px;line-height:24px}.el-form-item--small .el-form-item__content{line-height:24px}.el-form-item--small .el-form-item__error{padding-top:2px}.el-form-item--label-left .el-form-item__label{justify-content:flex-start}.el-form-item--label-top{display:block}.el-form-item--label-top .el-form-item__label{display:inline-block;vertical-align:middle;height:auto;text-align:left;margin-bottom:8px;line-height:22px}.el-form-item__label-wrap{display:flex}.el-form-item__label{display:inline-flex;justify-content:flex-end;align-items:flex-start;flex:0 0 auto;font-size:var(--el-form-label-font-size);color:var(--el-text-color-regular);height:32px;line-height:32px;padding:0 12px 0 0;box-sizing:border-box}.el-form-item__content{display:flex;flex-wrap:wrap;align-items:center;flex:1;line-height:32px;position:relative;font-size:var(--font-size);min-width:0}.el-form-item__content .el-input-group{vertical-align:top}.el-form-item__error{color:var(--el-color-danger);font-size:12px;line-height:1;padding-top:2px;position:absolute;top:100%;left:0}.el-form-item__error--inline{position:relative;top:auto;left:auto;display:inline-block;margin-left:10px}.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before,.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before{content:"*";color:var(--el-color-danger);margin-right:4px}.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label:after,.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label-wrap>.el-form-item__label:after{content:"*";color:var(--el-color-danger);margin-left:4px}.el-form-item.is-error .el-input__wrapper,.el-form-item.is-error .el-input__wrapper:hover,.el-form-item.is-error .el-input__wrapper:focus,.el-form-item.is-error .el-input__wrapper.is-focus,.el-form-item.is-error .el-textarea__inner,.el-form-item.is-error .el-textarea__inner:hover,.el-form-item.is-error .el-textarea__inner:focus,.el-form-item.is-error .el-textarea__inner.is-focus,.el-form-item.is-error .el-select__wrapper,.el-form-item.is-error .el-select__wrapper:hover,.el-form-item.is-error .el-select__wrapper:focus,.el-form-item.is-error .el-select__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-form-item.is-error .el-input-group__append .el-input__wrapper,.el-form-item.is-error .el-input-group__prepend .el-input__wrapper{box-shadow:0 0 0 1px transparent inset}.el-form-item.is-error .el-input-group__append .el-input__validateIcon,.el-form-item.is-error .el-input-group__prepend .el-input__validateIcon{display:none}.el-form-item.is-error .el-input__validateIcon{color:var(--el-color-danger)}.el-form-item--feedback .el-input__validateIcon{display:inline-flex}.el-checkbox{--el-checkbox-font-size: 14px;--el-checkbox-font-weight: var(--el-font-weight-primary);--el-checkbox-text-color: var(--el-text-color-regular);--el-checkbox-input-height: 14px;--el-checkbox-input-width: 14px;--el-checkbox-border-radius: var(--el-border-radius-small);--el-checkbox-bg-color: var(--el-fill-color-blank);--el-checkbox-input-border: var(--el-border);--el-checkbox-disabled-border-color: var(--el-border-color);--el-checkbox-disabled-input-fill: var(--el-fill-color-light);--el-checkbox-disabled-icon-color: var(--el-text-color-placeholder);--el-checkbox-disabled-checked-input-fill: var(--el-border-color-extra-light);--el-checkbox-disabled-checked-input-border-color: var(--el-border-color);--el-checkbox-disabled-checked-icon-color: var(--el-text-color-placeholder);--el-checkbox-checked-text-color: var(--el-color-primary);--el-checkbox-checked-input-border-color: var(--el-color-primary);--el-checkbox-checked-bg-color: var(--el-color-primary);--el-checkbox-checked-icon-color: var(--el-color-white);--el-checkbox-input-border-color-hover: var(--el-color-primary)}.el-checkbox{color:var(--el-checkbox-text-color);font-weight:var(--el-checkbox-font-weight);font-size:var(--el-font-size-base);position:relative;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;-webkit-user-select:none;user-select:none;margin-right:30px;height:var(--el-checkbox-height, 32px)}.el-checkbox.is-disabled{cursor:not-allowed}.el-checkbox.is-bordered{padding:0 15px 0 9px;border-radius:var(--el-border-radius-base);border:var(--el-border);box-sizing:border-box}.el-checkbox.is-bordered.is-checked{border-color:var(--el-color-primary)}.el-checkbox.is-bordered.is-disabled{border-color:var(--el-border-color-lighter)}.el-checkbox.is-bordered.el-checkbox--large{padding:0 19px 0 11px;border-radius:var(--el-border-radius-base)}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__label{font-size:var(--el-font-size-base)}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.is-bordered.el-checkbox--small{padding:0 11px 0 7px;border-radius:calc(var(--el-border-radius-base) - 1px)}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox input:focus-visible+.el-checkbox__inner{outline:2px solid var(--el-checkbox-input-border-color-hover);outline-offset:1px;border-radius:var(--el-checkbox-border-radius)}.el-checkbox__input{white-space:nowrap;cursor:pointer;outline:none;display:inline-flex;position:relative}.el-checkbox__input.is-disabled .el-checkbox__inner{background-color:var(--el-checkbox-disabled-input-fill);border-color:var(--el-checkbox-disabled-border-color);cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner:after{cursor:not-allowed;border-color:var(--el-checkbox-disabled-icon-color)}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-disabled-checked-icon-color);border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled+span.el-checkbox__label{color:var(--el-disabled-text-color);cursor:not-allowed}.el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-checked .el-checkbox__inner:after{transform:rotate(45deg) scaleY(1);border-color:var(--el-checkbox-checked-icon-color)}.el-checkbox__input.is-checked+.el-checkbox__label{color:var(--el-checkbox-checked-text-color)}.el-checkbox__input.is-focus:not(.is-checked) .el-checkbox__original:not(:focus-visible){border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:before{content:"";position:absolute;display:block;background-color:var(--el-checkbox-checked-icon-color);height:2px;transform:scale(.5);left:0;right:0;top:5px}.el-checkbox__input.is-indeterminate .el-checkbox__inner:after{display:none}.el-checkbox__inner{display:inline-block;position:relative;border:var(--el-checkbox-input-border);border-radius:var(--el-checkbox-border-radius);box-sizing:border-box;width:var(--el-checkbox-input-width);height:var(--el-checkbox-input-height);background-color:var(--el-checkbox-bg-color);z-index:var(--el-index-normal);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46),outline .25s cubic-bezier(.71,-.46,.29,1.46)}.el-checkbox__inner:hover{border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__inner:after{box-sizing:content-box;content:"";border:1px solid transparent;border-left:0;border-top:0;height:7px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:3px;transition:transform .15s ease-in .05s;transform-origin:center}.el-checkbox__original{opacity:0;outline:none;position:absolute;margin:0;width:0;height:0;z-index:-1}.el-checkbox__label{display:inline-block;padding-left:8px;line-height:1;font-size:var(--el-checkbox-font-size)}.el-checkbox.el-checkbox--large{height:40px}.el-checkbox.el-checkbox--large .el-checkbox__label{font-size:14px}.el-checkbox.el-checkbox--large .el-checkbox__inner{width:14px;height:14px}.el-checkbox.el-checkbox--small{height:24px}.el-checkbox.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.el-checkbox--small .el-checkbox__inner{width:12px;height:12px}.el-checkbox.el-checkbox--small .el-checkbox__input.is-indeterminate .el-checkbox__inner:before{top:4px}.el-checkbox.el-checkbox--small .el-checkbox__inner:after{width:2px;height:6px}.el-checkbox:last-of-type{margin-right:0}.el-button{--el-button-font-weight: var(--el-font-weight-primary);--el-button-border-color: var(--el-border-color);--el-button-bg-color: var(--el-fill-color-blank);--el-button-text-color: var(--el-text-color-regular);--el-button-disabled-text-color: var(--el-disabled-text-color);--el-button-disabled-bg-color: var(--el-fill-color-blank);--el-button-disabled-border-color: var(--el-border-color-light);--el-button-divide-border-color: rgba(255, 255, 255, .5);--el-button-hover-text-color: var(--el-color-primary);--el-button-hover-bg-color: var(--el-color-primary-light-9);--el-button-hover-border-color: var(--el-color-primary-light-7);--el-button-active-text-color: var(--el-button-hover-text-color);--el-button-active-border-color: var(--el-color-primary);--el-button-active-bg-color: var(--el-button-hover-bg-color);--el-button-outline-color: var(--el-color-primary-light-5);--el-button-hover-link-text-color: var(--el-color-info);--el-button-active-color: var(--el-text-color-primary)}.el-button{display:inline-flex;justify-content:center;align-items:center;line-height:1;height:32px;white-space:nowrap;cursor:pointer;color:var(--el-button-text-color);text-align:center;box-sizing:border-box;outline:none;transition:.1s;font-weight:var(--el-button-font-weight);-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color)}.el-button:hover{color:var(--el-button-hover-text-color);border-color:var(--el-button-hover-border-color);background-color:var(--el-button-hover-bg-color);outline:none}.el-button:active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button>span{display:inline-flex;align-items:center}.el-button+.el-button{margin-left:12px}.el-button{padding:8px 15px;font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base)}.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color: var(--el-color-primary);--el-button-hover-bg-color: var(--el-fill-color-blank);--el-button-hover-border-color: var(--el-color-primary)}.el-button.is-active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{color:var(--el-button-disabled-text-color);cursor:not-allowed;background-image:none;background-color:var(--el-button-disabled-bg-color);border-color:var(--el-button-disabled-border-color)}.el-button.is-loading{position:relative;pointer-events:none}.el-button.is-loading:before{z-index:1;pointer-events:none;content:"";position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:var(--el-mask-color-extra-light)}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-circle{width:32px;border-radius:50%;padding:8px}.el-button.is-text{color:var(--el-button-text-color);border:0 solid transparent;background-color:transparent}.el-button.is-text.is-disabled{color:var(--el-button-disabled-text-color);background-color:transparent!important}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{border-color:transparent;color:var(--el-button-text-color);background:transparent;padding:2px;height:auto}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{color:var(--el-button-disabled-text-color);background-color:transparent!important;border-color:transparent!important}.el-button.is-link:not(.is-disabled):hover{border-color:transparent;background-color:transparent}.el-button.is-link:not(.is-disabled):active{color:var(--el-button-active-color);border-color:transparent;background-color:transparent}.el-button--text{border-color:transparent;background:transparent;color:var(--el-color-primary);padding-left:0;padding-right:0}.el-button--text.is-disabled{color:var(--el-button-disabled-text-color);background-color:transparent!important;border-color:transparent!important}.el-button--text:not(.is-disabled):hover{color:var(--el-color-primary-light-3);border-color:transparent;background-color:transparent}.el-button--text:not(.is-disabled):active{color:var(--el-color-primary-dark-2);border-color:transparent;background-color:transparent}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color: var(--el-color-white);--el-button-bg-color: var(--el-color-primary);--el-button-border-color: var(--el-color-primary);--el-button-outline-color: var(--el-color-primary-light-5);--el-button-active-color: var(--el-color-primary-dark-2);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-link-text-color: var(--el-color-primary-light-5);--el-button-hover-bg-color: var(--el-color-primary-light-3);--el-button-hover-border-color: var(--el-color-primary-light-3);--el-button-active-bg-color: var(--el-color-primary-dark-2);--el-button-active-border-color: var(--el-color-primary-dark-2);--el-button-disabled-text-color: var(--el-color-white);--el-button-disabled-bg-color: var(--el-color-primary-light-5);--el-button-disabled-border-color: var(--el-color-primary-light-5)}.el-button--primary.is-plain,.el-button--primary.is-text,.el-button--primary.is-link{--el-button-text-color: var(--el-color-primary);--el-button-bg-color: var(--el-color-primary-light-9);--el-button-border-color: var(--el-color-primary-light-5);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-bg-color: var(--el-color-primary);--el-button-hover-border-color: var(--el-color-primary);--el-button-active-text-color: var(--el-color-white)}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:hover,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--success{--el-button-text-color: var(--el-color-white);--el-button-bg-color: var(--el-color-success);--el-button-border-color: var(--el-color-success);--el-button-outline-color: var(--el-color-success-light-5);--el-button-active-color: var(--el-color-success-dark-2);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-link-text-color: var(--el-color-success-light-5);--el-button-hover-bg-color: var(--el-color-success-light-3);--el-button-hover-border-color: var(--el-color-success-light-3);--el-button-active-bg-color: var(--el-color-success-dark-2);--el-button-active-border-color: var(--el-color-success-dark-2);--el-button-disabled-text-color: var(--el-color-white);--el-button-disabled-bg-color: var(--el-color-success-light-5);--el-button-disabled-border-color: var(--el-color-success-light-5)}.el-button--success.is-plain,.el-button--success.is-text,.el-button--success.is-link{--el-button-text-color: var(--el-color-success);--el-button-bg-color: var(--el-color-success-light-9);--el-button-border-color: var(--el-color-success-light-5);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-bg-color: var(--el-color-success);--el-button-hover-border-color: var(--el-color-success);--el-button-active-text-color: var(--el-color-white)}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:hover,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:active,.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--warning{--el-button-text-color: var(--el-color-white);--el-button-bg-color: var(--el-color-warning);--el-button-border-color: var(--el-color-warning);--el-button-outline-color: var(--el-color-warning-light-5);--el-button-active-color: var(--el-color-warning-dark-2);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-link-text-color: var(--el-color-warning-light-5);--el-button-hover-bg-color: var(--el-color-warning-light-3);--el-button-hover-border-color: var(--el-color-warning-light-3);--el-button-active-bg-color: var(--el-color-warning-dark-2);--el-button-active-border-color: var(--el-color-warning-dark-2);--el-button-disabled-text-color: var(--el-color-white);--el-button-disabled-bg-color: var(--el-color-warning-light-5);--el-button-disabled-border-color: var(--el-color-warning-light-5)}.el-button--warning.is-plain,.el-button--warning.is-text,.el-button--warning.is-link{--el-button-text-color: var(--el-color-warning);--el-button-bg-color: var(--el-color-warning-light-9);--el-button-border-color: var(--el-color-warning-light-5);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-bg-color: var(--el-color-warning);--el-button-hover-border-color: var(--el-color-warning);--el-button-active-text-color: var(--el-color-white)}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:hover,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--danger{--el-button-text-color: var(--el-color-white);--el-button-bg-color: var(--el-color-danger);--el-button-border-color: var(--el-color-danger);--el-button-outline-color: var(--el-color-danger-light-5);--el-button-active-color: var(--el-color-danger-dark-2);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-link-text-color: var(--el-color-danger-light-5);--el-button-hover-bg-color: var(--el-color-danger-light-3);--el-button-hover-border-color: var(--el-color-danger-light-3);--el-button-active-bg-color: var(--el-color-danger-dark-2);--el-button-active-border-color: var(--el-color-danger-dark-2);--el-button-disabled-text-color: var(--el-color-white);--el-button-disabled-bg-color: var(--el-color-danger-light-5);--el-button-disabled-border-color: var(--el-color-danger-light-5)}.el-button--danger.is-plain,.el-button--danger.is-text,.el-button--danger.is-link{--el-button-text-color: var(--el-color-danger);--el-button-bg-color: var(--el-color-danger-light-9);--el-button-border-color: var(--el-color-danger-light-5);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-bg-color: var(--el-color-danger);--el-button-hover-border-color: var(--el-color-danger);--el-button-active-text-color: var(--el-color-white)}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:hover,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--info{--el-button-text-color: var(--el-color-white);--el-button-bg-color: var(--el-color-info);--el-button-border-color: var(--el-color-info);--el-button-outline-color: var(--el-color-info-light-5);--el-button-active-color: var(--el-color-info-dark-2);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-link-text-color: var(--el-color-info-light-5);--el-button-hover-bg-color: var(--el-color-info-light-3);--el-button-hover-border-color: var(--el-color-info-light-3);--el-button-active-bg-color: var(--el-color-info-dark-2);--el-button-active-border-color: var(--el-color-info-dark-2);--el-button-disabled-text-color: var(--el-color-white);--el-button-disabled-bg-color: var(--el-color-info-light-5);--el-button-disabled-border-color: var(--el-color-info-light-5)}.el-button--info.is-plain,.el-button--info.is-text,.el-button--info.is-link{--el-button-text-color: var(--el-color-info);--el-button-bg-color: var(--el-color-info-light-9);--el-button-border-color: var(--el-color-info-light-5);--el-button-hover-text-color: var(--el-color-white);--el-button-hover-bg-color: var(--el-color-info);--el-button-hover-border-color: var(--el-color-info);--el-button-active-text-color: var(--el-color-white)}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:hover,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:active,.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--large{--el-button-size: 40px;height:var(--el-button-size)}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large{padding:12px 19px;font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base)}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{width:var(--el-button-size);padding:12px}.el-button--small{--el-button-size: 24px;height:var(--el-button-size)}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small{padding:5px 11px;font-size:12px;border-radius:calc(var(--el-border-radius-base) - 1px)}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{width:var(--el-button-size);padding:5px}.el-textarea{--el-input-text-color: var(--el-text-color-regular);--el-input-border: var(--el-border);--el-input-hover-border: var(--el-border-color-hover);--el-input-focus-border: var(--el-color-primary);--el-input-transparent-border: 0 0 0 1px transparent inset;--el-input-border-color: var(--el-border-color);--el-input-border-radius: var(--el-border-radius-base);--el-input-bg-color: var(--el-fill-color-blank);--el-input-icon-color: var(--el-text-color-placeholder);--el-input-placeholder-color: var(--el-text-color-placeholder);--el-input-hover-border-color: var(--el-border-color-hover);--el-input-clear-hover-color: var(--el-text-color-secondary);--el-input-focus-border-color: var(--el-color-primary);--el-input-width: 100%}.el-textarea{position:relative;display:inline-block;width:100%;vertical-align:bottom;font-size:var(--el-font-size-base)}.el-textarea__inner{position:relative;display:block;resize:vertical;padding:5px 11px;line-height:1.5;box-sizing:border-box;width:100%;font-size:inherit;font-family:inherit;color:var(--el-input-text-color, var(--el-text-color-regular));background-color:var(--el-input-bg-color, var(--el-fill-color-blank));background-image:none;-webkit-appearance:none;box-shadow:0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;border-radius:var(--el-input-border-radius, var(--el-border-radius-base));transition:var(--el-transition-box-shadow);border:none}.el-textarea__inner::placeholder{color:var(--el-input-placeholder-color, var(--el-text-color-placeholder))}.el-textarea__inner:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-textarea__inner:focus{outline:none;box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.el-textarea .el-input__count{color:var(--el-color-info);background:var(--el-fill-color-blank);position:absolute;font-size:12px;line-height:14px;bottom:5px;right:10px}.el-textarea.is-disabled .el-textarea__inner{box-shadow:0 0 0 1px var(--el-disabled-border-color) inset;background-color:var(--el-disabled-bg-color);color:var(--el-disabled-text-color);cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:var(--el-text-color-placeholder)}.el-textarea.is-exceed .el-textarea__inner{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-textarea.is-exceed .el-input__count{color:var(--el-color-danger)}.el-input{--el-input-text-color: var(--el-text-color-regular);--el-input-border: var(--el-border);--el-input-hover-border: var(--el-border-color-hover);--el-input-focus-border: var(--el-color-primary);--el-input-transparent-border: 0 0 0 1px transparent inset;--el-input-border-color: var(--el-border-color);--el-input-border-radius: var(--el-border-radius-base);--el-input-bg-color: var(--el-fill-color-blank);--el-input-icon-color: var(--el-text-color-placeholder);--el-input-placeholder-color: var(--el-text-color-placeholder);--el-input-hover-border-color: var(--el-border-color-hover);--el-input-clear-hover-color: var(--el-text-color-secondary);--el-input-focus-border-color: var(--el-color-primary);--el-input-width: 100%}.el-input{--el-input-height: var(--el-component-size);position:relative;font-size:var(--el-font-size-base);display:inline-flex;width:var(--el-input-width);line-height:var(--el-input-height);box-sizing:border-box;vertical-align:middle}.el-input::-webkit-scrollbar{z-index:11;width:6px}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:var(--el-text-color-disabled)}.el-input::-webkit-scrollbar-corner{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track-piece{background:var(--el-fill-color-blank);width:6px}.el-input .el-input__clear,.el-input .el-input__password{color:var(--el-input-icon-color);font-size:14px;cursor:pointer}.el-input .el-input__clear:hover,.el-input .el-input__password:hover{color:var(--el-input-clear-hover-color)}.el-input .el-input__count{height:100%;display:inline-flex;align-items:center;color:var(--el-color-info);font-size:12px}.el-input .el-input__count .el-input__count-inner{background:var(--el-fill-color-blank);line-height:initial;display:inline-block;padding-left:8px}.el-input__wrapper{display:inline-flex;flex-grow:1;align-items:center;justify-content:center;padding:1px 11px;background-color:var(--el-input-bg-color, var(--el-fill-color-blank));background-image:none;border-radius:var(--el-input-border-radius, var(--el-border-radius-base));cursor:text;transition:var(--el-transition-box-shadow);transform:translateZ(0);box-shadow:0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset}.el-input__wrapper:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.el-input__inner{--el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);width:100%;flex-grow:1;-webkit-appearance:none;color:var(--el-input-text-color, var(--el-text-color-regular));font-size:inherit;height:var(--el-input-inner-height);line-height:var(--el-input-inner-height);padding:0;outline:none;border:none;background:none;box-sizing:border-box}.el-input__inner:focus{outline:none}.el-input__inner::placeholder{color:var(--el-input-placeholder-color, var(--el-text-color-placeholder))}.el-input__inner[type=password]::-ms-reveal{display:none}.el-input__inner[type=number]{line-height:1}.el-input__prefix{display:inline-flex;white-space:nowrap;flex-shrink:0;flex-wrap:nowrap;height:100%;text-align:center;color:var(--el-input-icon-color, var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none}.el-input__prefix-inner{pointer-events:all;display:inline-flex;align-items:center;justify-content:center}.el-input__prefix-inner>:last-child{margin-right:8px}.el-input__prefix-inner>:first-child,.el-input__prefix-inner>:first-child.el-input__icon{margin-left:0}.el-input__suffix{display:inline-flex;white-space:nowrap;flex-shrink:0;flex-wrap:nowrap;height:100%;text-align:center;color:var(--el-input-icon-color, var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none}.el-input__suffix-inner{pointer-events:all;display:inline-flex;align-items:center;justify-content:center}.el-input__suffix-inner>:first-child{margin-left:8px}.el-input .el-input__icon{height:inherit;line-height:inherit;display:flex;justify-content:center;align-items:center;transition:all var(--el-transition-duration);margin-left:8px}.el-input__validateIcon{pointer-events:none}.el-input.is-active .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-color, ) inset}.el-input.is-disabled{cursor:not-allowed}.el-input.is-disabled .el-input__wrapper{background-color:var(--el-disabled-bg-color);box-shadow:0 0 0 1px var(--el-disabled-border-color) inset}.el-input.is-disabled .el-input__inner{color:var(--el-disabled-text-color);-webkit-text-fill-color:var(--el-disabled-text-color);cursor:not-allowed}.el-input.is-disabled .el-input__inner::placeholder{color:var(--el-text-color-placeholder)}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-exceed .el-input__wrapper{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-input.is-exceed .el-input__suffix .el-input__count{color:var(--el-color-danger)}.el-input--large{--el-input-height: var(--el-component-size-large);font-size:14px}.el-input--large .el-input__wrapper{padding:1px 15px}.el-input--large .el-input__inner{--el-input-inner-height: calc(var(--el-input-height, 40px) - 2px)}.el-input--small{--el-input-height: var(--el-component-size-small);font-size:12px}.el-input--small .el-input__wrapper{padding:1px 7px}.el-input--small .el-input__inner{--el-input-inner-height: calc(var(--el-input-height, 24px) - 2px)}.el-input-group{display:inline-flex;width:100%;align-items:stretch}.el-input-group__append,.el-input-group__prepend{background-color:var(--el-fill-color-light);color:var(--el-color-info);position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:100%;border-radius:var(--el-input-border-radius);padding:0 20px;white-space:nowrap}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:none}.el-input-group__append .el-select,.el-input-group__append .el-button,.el-input-group__prepend .el-select,.el-input-group__prepend .el-button{display:inline-block;margin:0 -20px}.el-input-group__append button.el-button,.el-input-group__append button.el-button:hover,.el-input-group__append div.el-select .el-select__wrapper,.el-input-group__append div.el-select:hover .el-select__wrapper,.el-input-group__prepend button.el-button,.el-input-group__prepend button.el-button:hover,.el-input-group__prepend div.el-select .el-select__wrapper,.el-input-group__prepend div.el-select:hover .el-select__wrapper{border-color:transparent;background-color:transparent;color:inherit}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;box-shadow:1px 0 0 0 var(--el-input-border-color) inset,0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset}.el-input-group__append{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset,-1px 0 0 0 var(--el-input-border-color) inset}.el-input-group--prepend>.el-input__wrapper{border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--prepend .el-input-group__prepend .el-select .el-select__wrapper{border-top-right-radius:0;border-bottom-right-radius:0;box-shadow:1px 0 0 0 var(--el-input-border-color) inset,0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset}.el-input-group--append>.el-input__wrapper{border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group--append .el-input-group__append .el-select .el-select__wrapper{border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset,-1px 0 0 0 var(--el-input-border-color) inset}.el-input-hidden{display:none!important}.el-divider{position:relative}.el-divider--horizontal{display:block;height:1px;width:100%;margin:24px 0;border-top:1px var(--el-border-color) var(--el-border-style)}.el-divider--vertical{display:inline-block;width:1px;height:1em;margin:0 8px;vertical-align:middle;position:relative;border-left:1px var(--el-border-color) var(--el-border-style)}.el-divider__text{position:absolute;background-color:var(--el-bg-color);padding:0 20px;font-weight:500;color:var(--el-text-color-primary);font-size:14px}.el-divider__text.is-left{left:20px;transform:translateY(-50%)}.el-divider__text.is-center{left:50%;transform:translate(-50%) translateY(-50%)}.el-divider__text.is-right{right:20px;transform:translateY(-50%)}.el-badge{--el-badge-bg-color: var(--el-color-danger);--el-badge-radius: 10px;--el-badge-font-size: 12px;--el-badge-padding: 6px;--el-badge-size: 18px;position:relative;vertical-align:middle;display:inline-block;width:fit-content}.el-badge__content{background-color:var(--el-badge-bg-color);border-radius:var(--el-badge-radius);color:var(--el-color-white);display:inline-flex;justify-content:center;align-items:center;font-size:var(--el-badge-font-size);height:var(--el-badge-size);padding:0 var(--el-badge-padding);white-space:nowrap;border:1px solid var(--el-bg-color)}.el-badge__content.is-fixed{position:absolute;top:0;right:calc(1px + var(--el-badge-size) / 2);transform:translateY(-50%) translate(100%);z-index:var(--el-index-normal)}.el-badge__content.is-fixed.is-dot{right:5px}.el-badge__content.is-dot{height:8px;width:8px;padding:0;right:0;border-radius:50%}.el-badge__content.is-hide-zero{display:none}.el-badge__content--primary{background-color:var(--el-color-primary)}.el-badge__content--success{background-color:var(--el-color-success)}.el-badge__content--warning{background-color:var(--el-color-warning)}.el-badge__content--info{background-color:var(--el-color-info)}.el-badge__content--danger{background-color:var(--el-color-danger)}.el-message{--el-message-bg-color: var(--el-color-info-light-9);--el-message-border-color: var(--el-border-color-lighter);--el-message-padding: 11px 15px;--el-message-close-size: 16px;--el-message-close-icon-color: var(--el-text-color-placeholder);--el-message-close-hover-color: var(--el-text-color-secondary)}.el-message{width:fit-content;max-width:calc(100% - 32px);box-sizing:border-box;border-radius:var(--el-border-radius-base);border-width:var(--el-border-width);border-style:var(--el-border-style);border-color:var(--el-message-border-color);position:fixed;left:50%;top:20px;transform:translate(-50%);background-color:var(--el-message-bg-color);transition:opacity var(--el-transition-duration),transform .4s,top .4s;padding:var(--el-message-padding);display:flex;align-items:center;gap:8px}.el-message.is-center{justify-content:center}.el-message.is-plain{background-color:var(--el-bg-color-overlay);border-color:var(--el-bg-color-overlay);box-shadow:var(--el-box-shadow-light)}.el-message p{margin:0}.el-message--success{--el-message-bg-color: var(--el-color-success-light-9);--el-message-border-color: var(--el-color-success-light-8);--el-message-text-color: var(--el-color-success)}.el-message--success .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--success{color:var(--el-message-text-color)}.el-message--info{--el-message-bg-color: var(--el-color-info-light-9);--el-message-border-color: var(--el-color-info-light-8);--el-message-text-color: var(--el-color-info)}.el-message--info .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--info{color:var(--el-message-text-color)}.el-message--warning{--el-message-bg-color: var(--el-color-warning-light-9);--el-message-border-color: var(--el-color-warning-light-8);--el-message-text-color: var(--el-color-warning)}.el-message--warning .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--warning{color:var(--el-message-text-color)}.el-message--error{--el-message-bg-color: var(--el-color-error-light-9);--el-message-border-color: var(--el-color-error-light-8);--el-message-text-color: var(--el-color-error)}.el-message--error .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--error{color:var(--el-message-text-color)}.el-message .el-message__badge{position:absolute;top:-8px;right:-8px}.el-message__content{padding:0;font-size:14px;line-height:1}.el-message__content:focus{outline-width:0}.el-message .el-message__closeBtn{cursor:pointer;color:var(--el-message-close-icon-color);font-size:var(--el-message-close-size)}.el-message .el-message__closeBtn:focus{outline-width:0}.el-message .el-message__closeBtn:hover{color:var(--el-message-close-hover-color)}.el-message-fade-enter-from,.el-message-fade-leave-to{opacity:0;transform:translate(-50%,-100%)}.link[data-v-d8bbc8c0]:hover{text-decoration:underline}.el-input-number{position:relative;display:inline-flex;width:150px;line-height:30px;vertical-align:middle}.el-input-number .el-input__wrapper{padding-left:42px;padding-right:42px}.el-input-number .el-input__inner{-webkit-appearance:none;-moz-appearance:textfield;text-align:center;line-height:1}.el-input-number .el-input__inner::-webkit-inner-spin-button,.el-input-number .el-input__inner::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.el-input-number__increase,.el-input-number__decrease{display:flex;justify-content:center;align-items:center;height:auto;position:absolute;z-index:1;top:1px;bottom:1px;width:32px;background:var(--el-fill-color-light);color:var(--el-text-color-regular);cursor:pointer;font-size:13px;-webkit-user-select:none;user-select:none}.el-input-number__increase:hover,.el-input-number__decrease:hover{color:var(--el-color-primary)}.el-input-number__increase:hover~.el-input:not(.is-disabled) .el-input__wrapper,.el-input-number__decrease:hover~.el-input:not(.is-disabled) .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-border-color, var(--el-color-primary)) inset}.el-input-number__increase.is-disabled,.el-input-number__decrease.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-input-number__increase{right:1px;border-radius:0 var(--el-border-radius-base) var(--el-border-radius-base) 0;border-left:var(--el-border)}.el-input-number__decrease{left:1px;border-radius:var(--el-border-radius-base) 0 0 var(--el-border-radius-base);border-right:var(--el-border)}.el-input-number.is-disabled .el-input-number__increase,.el-input-number.is-disabled .el-input-number__decrease{border-color:var(--el-disabled-border-color);color:var(--el-disabled-border-color)}.el-input-number.is-disabled .el-input-number__increase:hover,.el-input-number.is-disabled .el-input-number__decrease:hover{color:var(--el-disabled-border-color);cursor:not-allowed}.el-input-number--large{width:180px;line-height:38px}.el-input-number--large .el-input-number__increase,.el-input-number--large .el-input-number__decrease{width:40px;font-size:14px}.el-input-number--large .el-input--large .el-input__wrapper{padding-left:47px;padding-right:47px}.el-input-number--small{width:120px;line-height:22px}.el-input-number--small .el-input-number__increase,.el-input-number--small .el-input-number__decrease{width:24px;font-size:12px}.el-input-number--small .el-input--small .el-input__wrapper{padding-left:31px;padding-right:31px}.el-input-number--small .el-input-number__increase [class*=el-icon],.el-input-number--small .el-input-number__decrease [class*=el-icon]{transform:scale(.9)}.el-input-number.is-without-controls .el-input__wrapper{padding-left:15px;padding-right:15px}.el-input-number.is-controls-right .el-input__wrapper{padding-left:15px;padding-right:42px}.el-input-number.is-controls-right .el-input-number__increase,.el-input-number.is-controls-right .el-input-number__decrease{--el-input-number-controls-height: 15px;height:var(--el-input-number-controls-height);line-height:var(--el-input-number-controls-height)}.el-input-number.is-controls-right .el-input-number__increase [class*=el-icon],.el-input-number.is-controls-right .el-input-number__decrease [class*=el-icon]{transform:scale(.8)}.el-input-number.is-controls-right .el-input-number__increase{bottom:auto;left:auto;border-radius:0 var(--el-border-radius-base) 0 0;border-bottom:var(--el-border)}.el-input-number.is-controls-right .el-input-number__decrease{right:1px;top:auto;left:auto;border-right:none;border-left:var(--el-border);border-radius:0 0 var(--el-border-radius-base) 0}.el-input-number.is-controls-right[class*=large] [class*=increase],.el-input-number.is-controls-right[class*=large] [class*=decrease]{--el-input-number-controls-height: 19px}.el-input-number.is-controls-right[class*=small] [class*=increase],.el-input-number.is-controls-right[class*=small] [class*=decrease]{--el-input-number-controls-height: 11px}.el-tabs{--el-tabs-header-height: 40px;display:flex}.el-tabs__header{padding:0;position:relative;margin:0 0 15px;display:flex;align-items:center;justify-content:space-between}.el-tabs__header-vertical{flex-direction:column}.el-tabs__active-bar{position:absolute;bottom:0;left:0;height:2px;background-color:var(--el-color-primary);z-index:1;transition:width var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier),transform var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);list-style:none}.el-tabs__new-tab{display:flex;align-items:center;justify-content:center;border:1px solid var(--el-border-color);height:20px;width:20px;line-height:20px;margin:10px 0 10px 10px;border-radius:3px;text-align:center;font-size:12px;color:var(--el-text-color-primary);cursor:pointer;transition:all .15s}.el-tabs__new-tab .is-icon-plus{height:inherit;width:inherit;transform:scale(.8)}.el-tabs__new-tab .is-icon-plus svg{vertical-align:middle}.el-tabs__new-tab:hover{color:var(--el-color-primary)}.el-tabs__new-tab-vertical{margin-left:0}.el-tabs__nav-wrap{overflow:hidden;margin-bottom:-1px;position:relative;flex:1 auto}.el-tabs__nav-wrap:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background-color:var(--el-border-color-light);z-index:var(--el-index-normal)}.el-tabs__nav-wrap.is-scrollable{padding:0 20px;box-sizing:border-box}.el-tabs__nav-scroll{overflow:hidden}.el-tabs__nav-next,.el-tabs__nav-prev{position:absolute;cursor:pointer;line-height:44px;font-size:12px;color:var(--el-text-color-secondary);width:20px;text-align:center}.el-tabs__nav-next{right:0}.el-tabs__nav-prev{left:0}.el-tabs__nav{display:flex;white-space:nowrap;position:relative;transition:transform var(--el-transition-duration);float:left;z-index:calc(var(--el-index-normal) + 1)}.el-tabs__nav.is-stretch{min-width:100%;display:flex}.el-tabs__nav.is-stretch>*{flex:1;text-align:center}.el-tabs__item{padding:0 20px;height:var(--el-tabs-header-height);box-sizing:border-box;display:flex;align-items:center;justify-content:center;list-style:none;font-size:var(--el-font-size-base);font-weight:500;color:var(--el-text-color-primary);position:relative}.el-tabs__item:focus,.el-tabs__item:focus:active{outline:none}.el-tabs__item:focus-visible{box-shadow:0 0 2px 2px var(--el-color-primary) inset;border-radius:3px}.el-tabs__item .is-icon-close{border-radius:50%;text-align:center;transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);margin-left:5px}.el-tabs__item .is-icon-close:before{transform:scale(.9);display:inline-block}.el-tabs__item .is-icon-close:hover{background-color:var(--el-text-color-placeholder);color:#fff}.el-tabs__item.is-active{color:var(--el-color-primary)}.el-tabs__item:hover{color:var(--el-color-primary);cursor:pointer}.el-tabs__item.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-tabs__content{overflow:hidden;position:relative;flex-grow:1}.el-tabs--top>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:0}.el-tabs--top>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom>.el-tabs__header .el-tabs__item:last-child{padding-right:0}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:20px}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child{padding-right:20px}.el-tabs--card>.el-tabs__header{border-bottom:1px solid var(--el-border-color-light);height:var(--el-tabs-header-height)}.el-tabs--card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--card>.el-tabs__header .el-tabs__nav{border:1px solid var(--el-border-color-light);border-bottom:none;border-radius:4px 4px 0 0;box-sizing:border-box}.el-tabs--card>.el-tabs__header .el-tabs__active-bar{display:none}.el-tabs--card>.el-tabs__header .el-tabs__item .is-icon-close{position:relative;font-size:12px;width:0;height:14px;overflow:hidden;right:-2px;transform-origin:100% 50%}.el-tabs--card>.el-tabs__header .el-tabs__item{border-bottom:1px solid transparent;border-left:1px solid var(--el-border-color-light);transition:color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier),padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier)}.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{border-left:none}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{padding-left:13px;padding-right:13px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover .is-icon-close{width:14px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color:var(--el-bg-color)}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{padding-left:20px;padding-right:20px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable .is-icon-close{width:14px}.el-tabs--border-card{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color)}.el-tabs--border-card>.el-tabs__content{padding:15px}.el-tabs--border-card>.el-tabs__header{background-color:var(--el-fill-color-light);border-bottom:1px solid var(--el-border-color-light);margin:0}.el-tabs--border-card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--border-card>.el-tabs__header .el-tabs__item{transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);border:1px solid transparent;margin-top:-1px;color:var(--el-text-color-secondary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{color:var(--el-color-primary);background-color:var(--el-bg-color-overlay);border-right-color:var(--el-border-color);border-left-color:var(--el-border-color)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{color:var(--el-color-primary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled{color:var(--el-disabled-text-color)}.el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child{margin-left:0}.el-tabs--bottom{flex-direction:column}.el-tabs--bottom .el-tabs__header.is-bottom{margin-bottom:0;margin-top:10px}.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom{border-bottom:0;border-top:1px solid var(--el-border-color)}.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom{margin-top:-1px;margin-bottom:0}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active){border:1px solid transparent}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom{margin:0 -1px -1px}.el-tabs--left,.el-tabs--right{overflow:hidden}.el-tabs--left .el-tabs__header.is-left,.el-tabs--left .el-tabs__header.is-right,.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--left .el-tabs__nav-scroll,.el-tabs--right .el-tabs__header.is-left,.el-tabs--right .el-tabs__header.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-scroll{height:100%}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__active-bar.is-right,.el-tabs--right .el-tabs__active-bar.is-left,.el-tabs--right .el-tabs__active-bar.is-right{top:0;bottom:auto;width:2px;height:auto}.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{margin-bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{height:30px;line-height:30px;width:100%;text-align:center;cursor:pointer}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i{transform:rotate(90deg)}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{left:auto;top:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{right:auto;bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{padding:30px 0}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__nav-wrap.is-right:after,.el-tabs--right .el-tabs__nav-wrap.is-left:after,.el-tabs--right .el-tabs__nav-wrap.is-right:after{height:100%;width:2px;bottom:auto;top:0}.el-tabs--left .el-tabs__nav.is-left,.el-tabs--left .el-tabs__nav.is-right,.el-tabs--right .el-tabs__nav.is-left,.el-tabs--right .el-tabs__nav.is-right{flex-direction:column}.el-tabs--left .el-tabs__item.is-left,.el-tabs--right .el-tabs__item.is-left{justify-content:flex-end}.el-tabs--left .el-tabs__item.is-right,.el-tabs--right .el-tabs__item.is-right{justify-content:flex-start}.el-tabs--left{flex-direction:row-reverse}.el-tabs--left .el-tabs__header.is-left{margin-bottom:0;margin-right:10px}.el-tabs--left .el-tabs__nav-wrap.is-left{margin-right:-1px}.el-tabs--left .el-tabs__nav-wrap.is-left:after{left:auto;right:0}.el-tabs--left .el-tabs__active-bar.is-left{right:0;left:auto}.el-tabs--left .el-tabs__item.is-left{text-align:right}.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left{display:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left{border-left:none;border-right:1px solid var(--el-border-color-light);border-bottom:none;border-top:1px solid var(--el-border-color-light);text-align:left}.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{border-right:1px solid var(--el-border-color-light);border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{border:1px solid var(--el-border-color-light);border-right-color:#fff;border-left:none;border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child{border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child{border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__nav{border-radius:4px 0 0 4px;border-bottom:1px solid var(--el-border-color-light);border-right:none}.el-tabs--left.el-tabs--card .el-tabs__new-tab{float:none}.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{border-right:1px solid var(--el-border-color)}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{border:1px solid transparent;margin:-1px 0 -1px -1px}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{border-color:transparent;border-top-color:#d1dbe5;border-bottom-color:#d1dbe5}.el-tabs--right .el-tabs__header.is-right{margin-bottom:0;margin-left:10px}.el-tabs--right .el-tabs__nav-wrap.is-right{margin-left:-1px}.el-tabs--right .el-tabs__nav-wrap.is-right:after{left:0;right:auto}.el-tabs--right .el-tabs__active-bar.is-right{left:0}.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right{display:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right{border-bottom:none;border-top:1px solid var(--el-border-color-light)}.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child{border-left:1px solid var(--el-border-color-light);border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active{border:1px solid var(--el-border-color-light);border-left-color:#fff;border-right:none;border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child{border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child{border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__nav{border-radius:0 4px 4px 0;border-bottom:1px solid var(--el-border-color-light);border-left:none}.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right{border-left:1px solid var(--el-border-color)}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right{border:1px solid transparent;margin:-1px -1px -1px 0}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active{border-color:transparent;border-top-color:#d1dbe5;border-bottom-color:#d1dbe5}.el-tabs--top{flex-direction:column-reverse}.slideInRight-transition,.slideInLeft-transition{display:inline-block}.slideInRight-enter{animation:slideInRight-enter var(--el-transition-duration)}.slideInRight-leave{position:absolute;left:0;right:0;animation:slideInRight-leave var(--el-transition-duration)}.slideInLeft-enter{animation:slideInLeft-enter var(--el-transition-duration)}.slideInLeft-leave{position:absolute;left:0;right:0;animation:slideInLeft-leave var(--el-transition-duration)}@keyframes slideInRight-enter{0%{opacity:0;transform-origin:0 0;transform:translate(100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInRight-leave{0%{transform-origin:0 0;transform:translate(0);opacity:1}to{transform-origin:0 0;transform:translate(100%);opacity:0}}@keyframes slideInLeft-enter{0%{opacity:0;transform-origin:0 0;transform:translate(-100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInLeft-leave{0%{transform-origin:0 0;transform:translate(0);opacity:1}to{transform-origin:0 0;transform:translate(-100%);opacity:0}}.el-radio-group{display:inline-flex;align-items:center;flex-wrap:wrap;font-size:0}.el-radio{--el-radio-font-size: var(--el-font-size-base);--el-radio-text-color: var(--el-text-color-regular);--el-radio-font-weight: var(--el-font-weight-primary);--el-radio-input-height: 14px;--el-radio-input-width: 14px;--el-radio-input-border-radius: var(--el-border-radius-circle);--el-radio-input-bg-color: var(--el-fill-color-blank);--el-radio-input-border: var(--el-border);--el-radio-input-border-color: var(--el-border-color);--el-radio-input-border-color-hover: var(--el-color-primary)}.el-radio{color:var(--el-radio-text-color);font-weight:var(--el-radio-font-weight);position:relative;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;outline:none;font-size:var(--el-font-size-base);-webkit-user-select:none;user-select:none;margin-right:30px;height:32px}.el-radio.el-radio--large{height:40px}.el-radio.el-radio--small{height:24px}.el-radio.is-bordered{padding:0 15px 0 9px;border-radius:var(--el-border-radius-base);border:var(--el-border);box-sizing:border-box}.el-radio.is-bordered.is-checked{border-color:var(--el-color-primary)}.el-radio.is-bordered.is-disabled{cursor:not-allowed;border-color:var(--el-border-color-lighter)}.el-radio.is-bordered.el-radio--large{padding:0 19px 0 11px;border-radius:var(--el-border-radius-base)}.el-radio.is-bordered.el-radio--large .el-radio__label{font-size:var(--el-font-size-base)}.el-radio.is-bordered.el-radio--large .el-radio__inner{height:14px;width:14px}.el-radio.is-bordered.el-radio--small{padding:0 11px 0 7px;border-radius:var(--el-border-radius-base)}.el-radio.is-bordered.el-radio--small .el-radio__label{font-size:12px}.el-radio.is-bordered.el-radio--small .el-radio__inner{height:12px;width:12px}.el-radio:last-child{margin-right:0}.el-radio__input{white-space:nowrap;cursor:pointer;outline:none;display:inline-flex;position:relative;vertical-align:middle}.el-radio__input.is-disabled .el-radio__inner{background-color:var(--el-disabled-bg-color);border-color:var(--el-disabled-border-color);cursor:not-allowed}.el-radio__input.is-disabled .el-radio__inner:after{cursor:not-allowed;background-color:var(--el-disabled-bg-color)}.el-radio__input.is-disabled .el-radio__inner+.el-radio__label{cursor:not-allowed}.el-radio__input.is-disabled.is-checked .el-radio__inner{background-color:var(--el-disabled-bg-color);border-color:var(--el-disabled-border-color)}.el-radio__input.is-disabled.is-checked .el-radio__inner:after{background-color:var(--el-text-color-placeholder)}.el-radio__input.is-disabled+span.el-radio__label{color:var(--el-text-color-placeholder);cursor:not-allowed}.el-radio__input.is-checked .el-radio__inner{border-color:var(--el-color-primary);background:var(--el-color-primary)}.el-radio__input.is-checked .el-radio__inner:after{transform:translate(-50%,-50%) scale(1)}.el-radio__input.is-checked+.el-radio__label{color:var(--el-color-primary)}.el-radio__input.is-focus .el-radio__inner{border-color:var(--el-radio-input-border-color-hover)}.el-radio__inner{border:var(--el-radio-input-border);border-radius:var(--el-radio-input-border-radius);width:var(--el-radio-input-width);height:var(--el-radio-input-height);background-color:var(--el-radio-input-bg-color);position:relative;cursor:pointer;display:inline-block;box-sizing:border-box}.el-radio__inner:hover{border-color:var(--el-radio-input-border-color-hover)}.el-radio__inner:after{width:4px;height:4px;border-radius:var(--el-radio-input-border-radius);background-color:var(--el-color-white);content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(0);transition:transform .15s ease-in}.el-radio__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.el-radio__original:focus-visible+.el-radio__inner{outline:2px solid var(--el-radio-input-border-color-hover);outline-offset:1px;border-radius:var(--el-radio-input-border-radius)}.el-radio:focus:not(:focus-visible):not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner{box-shadow:0 0 2px 2px var(--el-radio-input-border-color-hover)}.el-radio__label{font-size:var(--el-radio-font-size);padding-left:8px}.el-radio.el-radio--large .el-radio__label{font-size:14px}.el-radio.el-radio--large .el-radio__inner{width:14px;height:14px}.el-radio.el-radio--small .el-radio__label{font-size:12px}.el-radio.el-radio--small .el-radio__inner{width:12px;height:12px}.el-empty{--el-empty-padding: 40px 0;--el-empty-image-width: 160px;--el-empty-description-margin-top: 20px;--el-empty-bottom-margin-top: 20px;--el-empty-fill-color-0: var(--el-color-white);--el-empty-fill-color-1: #fcfcfd;--el-empty-fill-color-2: #f8f9fb;--el-empty-fill-color-3: #f7f8fc;--el-empty-fill-color-4: #eeeff3;--el-empty-fill-color-5: #edeef2;--el-empty-fill-color-6: #e9ebef;--el-empty-fill-color-7: #e5e7e9;--el-empty-fill-color-8: #e0e3e9;--el-empty-fill-color-9: #d5d7de;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;box-sizing:border-box;padding:var(--el-empty-padding)}.el-empty__image{width:var(--el-empty-image-width)}.el-empty__image img{-webkit-user-select:none;user-select:none;width:100%;height:100%;vertical-align:top;object-fit:contain}.el-empty__image svg{color:var(--el-svg-monochrome-grey);fill:currentColor;width:100%;height:100%;vertical-align:top}.el-empty__description{margin-top:var(--el-empty-description-margin-top)}.el-empty__description p{margin:0;font-size:var(--el-font-size-base);color:var(--el-text-color-secondary)}.el-empty__bottom{margin-top:var(--el-empty-bottom-margin-top)}.el-checkbox-group{font-size:0;line-height:0}.flex-center{display:flex;align-items:center;justify-content:center}.flex-end{display:flex;align-items:center;justify-content:flex-end}.form-title{font-weight:700}.form-example{display:flex;flex-direction:column;justify-content:flex-start;text-align:left;font-size:12px;color:#999}.form-example.important,.form-example a{color:#ff2e4d}.form-examplea{text-decoration:underline}.xiaohongshu-download-script{position:relative}.xiaohongshu-download-script_float-btn{-webkit-user-select:none;user-select:none;color:#fff;background-color:#ff2e4d80;z-index:99999;position:fixed;border-radius:0 30px 30px 0;display:inline-block;width:fit-content;transition:all ease-in-out .3s;cursor:pointer}.xiaohongshu-download-script_float-btn.right{border-radius:30px 0 0 30px}.xiaohongshu-download-script_float-btn:hover{background-color:#ff2e4d;border-radius:30px}.xiaohongshu-download-script_float-btn:active{background-color:#ff2e4d;border-radius:30px;transition:none}.xiaohongshu-download-script_float-btn .icon{padding:10px 20px;text-align:center;transform:translateY(3px)}.xiaohongshu-download-script_dialog{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"!important}.xiaohongshu-download-script_dialog .drag-line{width:5px;background-color:#eee;position:absolute;top:0;bottom:0;left:0;cursor:w-resize;transition:all ease .3s}.xiaohongshu-download-script_dialog .drag-line:hover,.xiaohongshu-download-script_dialog .drag-line.active{background-color:#ff2e4d}.xiaohongshu-download-script_dialog.drag{transition:none!important}.xiaohongshu-download-script_dialog .tool-box{position:absolute;top:20px;right:80px;display:flex}.xiaohongshu-download-script_dialog .tool-box .download-item-size{display:flex;align-items:center;margin-right:8px}.xiaohongshu-download-script_dialog .tool-box .download-item-size .title{flex-shrink:0}.xiaohongshu-download-script_dialog .download-container{height:100%}.xiaohongshu-download-script_dialog .download-container .el-tabs{border-radius:4px;overflow:hidden;height:100%}.xiaohongshu-download-script_dialog .download-container .el-tabs__content{height:100%}.xiaohongshu-download-script_dialog .download-container .el-tabs__content .el-tab-pane{display:flex;flex-direction:column;height:100%}.xiaohongshu-download-script_dialog .download-container .el-tabs__content .el-tab-pane .download-container_top{flex:1;overflow:auto}.xiaohongshu-download-script_dialog .download-container .el-tabs__content .el-tab-pane .custom-download{margin-top:10px}.xiaohongshu-download-script_dialog .download-container .el-tabs__content .el-tab-pane .custom-download .el-form-item{margin-bottom:0}.xiaohongshu-download-script_dialog .file-list{display:grid;gap:10px;padding:10px;border-radius:8px;background-color:#eee}.xiaohongshu-download-script_dialog .file-list .el-checkbox{position:relative;width:100%;height:100%}.xiaohongshu-download-script_dialog .file-list .el-checkbox .el-checkbox__input{position:absolute;top:0;left:0}.xiaohongshu-download-script_dialog .file-list .el-checkbox .el-checkbox__label{height:100%;padding:0;margin:0}.xiaohongshu-download-script_dialog .file-list .item{height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative;border-radius:8px;overflow:hidden}.xiaohongshu-download-script_dialog .file-list .item .tag{position:absolute;background-color:#00000080;color:#fff;padding:5px 10px}.xiaohongshu-download-script_dialog .file-list .item .tag{right:0;bottom:0;border-top-left-radius:10px}.xiaohongshu-download-script_dialog .file-list .item img{width:100%;height:100%;object-fit:cover}.notedetail-menu{z-index:999!important}.el-drawer__header{margin-bottom:0} ');

(function (vue, dayjs, pinia, StreamSaver, piniaPluginPersistedstate) {
  'use strict';

  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_main_001 = __commonJS({
    "main-D304TbJx.js"(exports, module) {
      var __defProp$9 = Object.defineProperty;
      var __defProps$6 = Object.defineProperties;
      var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
      var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
      var __hasOwnProp$b = Object.prototype.hasOwnProperty;
      var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
      var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues$9 = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp$b.call(b, prop))
            __defNormalProp$9(a, prop, b[prop]);
        if (__getOwnPropSymbols$b)
          for (var prop of __getOwnPropSymbols$b(b)) {
            if (__propIsEnum$b.call(b, prop))
              __defNormalProp$9(a, prop, b[prop]);
          }
        return a;
      };
      var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
      function computedEager(fn, options) {
        var _a2;
        const result = vue.shallowRef();
        vue.watchEffect(() => {
          result.value = fn();
        }, __spreadProps$6(__spreadValues$9({}, options), {
          flush: (_a2 = void 0) != null ? _a2 : "sync"
        }));
        return vue.readonly(result);
      }
      var _a;
      const isClient = typeof window !== "undefined";
      const isString$1 = (val) => typeof val === "string";
      const noop = () => {
      };
      isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
      function resolveUnref(r) {
        return typeof r === "function" ? r() : vue.unref(r);
      }
      function createFilterWrapper(filter, fn) {
        function wrapper(...args) {
          return new Promise((resolve, reject) => {
            Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
          });
        }
        return wrapper;
      }
      function debounceFilter(ms, options = {}) {
        let timer;
        let maxTimer;
        let lastRejector = noop;
        const _clearTimeout = (timer2) => {
          clearTimeout(timer2);
          lastRejector();
          lastRejector = noop;
        };
        const filter = (invoke) => {
          const duration = resolveUnref(ms);
          const maxDuration = resolveUnref(options.maxWait);
          if (timer)
            _clearTimeout(timer);
          if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
            if (maxTimer) {
              _clearTimeout(maxTimer);
              maxTimer = null;
            }
            return Promise.resolve(invoke());
          }
          return new Promise((resolve, reject) => {
            lastRejector = options.rejectOnCancel ? reject : resolve;
            if (maxDuration && !maxTimer) {
              maxTimer = setTimeout(() => {
                if (timer)
                  _clearTimeout(timer);
                maxTimer = null;
                resolve(invoke());
              }, maxDuration);
            }
            timer = setTimeout(() => {
              if (maxTimer)
                _clearTimeout(maxTimer);
              maxTimer = null;
              resolve(invoke());
            }, duration);
          });
        };
        return filter;
      }
      function identity$1(arg) {
        return arg;
      }
      function tryOnScopeDispose(fn) {
        if (vue.getCurrentScope()) {
          vue.onScopeDispose(fn);
          return true;
        }
        return false;
      }
      function useDebounceFn(fn, ms = 200, options = {}) {
        return createFilterWrapper(debounceFilter(ms, options), fn);
      }
      function refDebounced(value, ms = 200, options = {}) {
        const debounced = vue.ref(value.value);
        const updater = useDebounceFn(() => {
          debounced.value = value.value;
        }, ms, options);
        vue.watch(value, () => updater());
        return debounced;
      }
      function tryOnMounted(fn, sync = true) {
        if (vue.getCurrentInstance())
          vue.onMounted(fn);
        else if (sync)
          fn();
        else
          vue.nextTick(fn);
      }
      function useTimeoutFn(cb, interval, options = {}) {
        const {
          immediate = true
        } = options;
        const isPending = vue.ref(false);
        let timer = null;
        function clear() {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
        }
        function stop() {
          isPending.value = false;
          clear();
        }
        function start(...args) {
          clear();
          isPending.value = true;
          timer = setTimeout(() => {
            isPending.value = false;
            timer = null;
            cb(...args);
          }, resolveUnref(interval));
        }
        if (immediate) {
          isPending.value = true;
          if (isClient)
            start();
        }
        tryOnScopeDispose(stop);
        return {
          isPending: vue.readonly(isPending),
          start,
          stop
        };
      }
      function unrefElement(elRef) {
        var _a2;
        const plain = resolveUnref(elRef);
        return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
      }
      const defaultWindow = isClient ? window : void 0;
      const defaultDocument = isClient ? window.document : void 0;
      function useEventListener(...args) {
        let target;
        let events;
        let listeners;
        let options;
        if (isString$1(args[0]) || Array.isArray(args[0])) {
          [events, listeners, options] = args;
          target = defaultWindow;
        } else {
          [target, events, listeners, options] = args;
        }
        if (!target)
          return noop;
        if (!Array.isArray(events))
          events = [events];
        if (!Array.isArray(listeners))
          listeners = [listeners];
        const cleanups = [];
        const cleanup = () => {
          cleanups.forEach((fn) => fn());
          cleanups.length = 0;
        };
        const register = (el, event, listener, options2) => {
          el.addEventListener(event, listener, options2);
          return () => el.removeEventListener(event, listener, options2);
        };
        const stopWatch = vue.watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
          cleanup();
          if (!el)
            return;
          cleanups.push(...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, options2));
          }));
        }, { immediate: true, flush: "post" });
        const stop = () => {
          stopWatch();
          cleanup();
        };
        tryOnScopeDispose(stop);
        return stop;
      }
      function useSupported(callback, sync = false) {
        const isSupported = vue.ref();
        const update = () => isSupported.value = Boolean(callback());
        update();
        tryOnMounted(update, sync);
        return isSupported;
      }
      const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
      const globalKey = "__vueuse_ssr_handlers__";
      _global[globalKey] = _global[globalKey] || {};
      function useDocumentVisibility({ document: document2 = defaultDocument } = {}) {
        if (!document2)
          return vue.ref("visible");
        const visibility = vue.ref(document2.visibilityState);
        useEventListener(document2, "visibilitychange", () => {
          visibility.value = document2.visibilityState;
        });
        return visibility;
      }
      var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
      var __hasOwnProp$g = Object.prototype.hasOwnProperty;
      var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
      var __objRest$2 = (source, exclude) => {
        var target = {};
        for (var prop in source)
          if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
        if (source != null && __getOwnPropSymbols$g)
          for (var prop of __getOwnPropSymbols$g(source)) {
            if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
              target[prop] = source[prop];
          }
        return target;
      };
      function useResizeObserver(target, callback, options = {}) {
        const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
        let observer;
        const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
        const cleanup = () => {
          if (observer) {
            observer.disconnect();
            observer = void 0;
          }
        };
        const stopWatch = vue.watch(() => unrefElement(target), (el) => {
          cleanup();
          if (isSupported.value && window2 && el) {
            observer = new ResizeObserver(callback);
            observer.observe(el, observerOptions);
          }
        }, { immediate: true, flush: "post" });
        const stop = () => {
          cleanup();
          stopWatch();
        };
        tryOnScopeDispose(stop);
        return {
          isSupported,
          stop
        };
      }
      var SwipeDirection;
      (function(SwipeDirection2) {
        SwipeDirection2["UP"] = "UP";
        SwipeDirection2["RIGHT"] = "RIGHT";
        SwipeDirection2["DOWN"] = "DOWN";
        SwipeDirection2["LEFT"] = "LEFT";
        SwipeDirection2["NONE"] = "NONE";
      })(SwipeDirection || (SwipeDirection = {}));
      var __defProp = Object.defineProperty;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
              __defNormalProp(a, prop, b[prop]);
          }
        return a;
      };
      const _TransitionPresets = {
        easeInSine: [0.12, 0, 0.39, 0],
        easeOutSine: [0.61, 1, 0.88, 1],
        easeInOutSine: [0.37, 0, 0.63, 1],
        easeInQuad: [0.11, 0, 0.5, 0],
        easeOutQuad: [0.5, 1, 0.89, 1],
        easeInOutQuad: [0.45, 0, 0.55, 1],
        easeInCubic: [0.32, 0, 0.67, 0],
        easeOutCubic: [0.33, 1, 0.68, 1],
        easeInOutCubic: [0.65, 0, 0.35, 1],
        easeInQuart: [0.5, 0, 0.75, 0],
        easeOutQuart: [0.25, 1, 0.5, 1],
        easeInOutQuart: [0.76, 0, 0.24, 1],
        easeInQuint: [0.64, 0, 0.78, 0],
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInExpo: [0.7, 0, 0.84, 0],
        easeOutExpo: [0.16, 1, 0.3, 1],
        easeInOutExpo: [0.87, 0, 0.13, 1],
        easeInCirc: [0.55, 0, 1, 0.45],
        easeOutCirc: [0, 0.55, 0.45, 1],
        easeInOutCirc: [0.85, 0, 0.15, 1],
        easeInBack: [0.36, 0, 0.66, -0.56],
        easeOutBack: [0.34, 1.56, 0.64, 1],
        easeInOutBack: [0.68, -0.6, 0.32, 1.6]
      };
      __spreadValues({
        linear: identity$1
      }, _TransitionPresets);
      function useWindowFocus({ window: window2 = defaultWindow } = {}) {
        if (!window2)
          return vue.ref(false);
        const focused = vue.ref(window2.document.hasFocus());
        useEventListener(window2, "blur", () => {
          focused.value = false;
        });
        useEventListener(window2, "focus", () => {
          focused.value = true;
        });
        return focused;
      }
      const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
      /**
      * @vue/shared v3.5.13
      * (c) 2018-present Yuxi (Evan) You and Vue contributors
      * @license MIT
      **/
      const NOOP = () => {
      };
      const hasOwnProperty$c = Object.prototype.hasOwnProperty;
      const hasOwn = (val, key) => hasOwnProperty$c.call(val, key);
      const isArray$1 = Array.isArray;
      const isFunction$1 = (val) => typeof val === "function";
      const isString = (val) => typeof val === "string";
      const isObject$1 = (val) => val !== null && typeof val === "object";
      const cacheStringFunction = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      const camelizeRE = /-(\w)/g;
      const camelize = cacheStringFunction(
        (str) => {
          return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
        }
      );
      const capitalize$1 = cacheStringFunction((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var Symbol$1 = root.Symbol;
      var objectProto$e = Object.prototype;
      var hasOwnProperty$b = objectProto$e.hasOwnProperty;
      var nativeObjectToString$1 = objectProto$e.toString;
      var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
        try {
          value[symToStringTag$1] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString$1.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag$1] = tag;
          } else {
            delete value[symToStringTag$1];
          }
        }
        return result;
      }
      var objectProto$d = Object.prototype;
      var nativeObjectToString = objectProto$d.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var symbolTag$3 = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      var isArray = Array.isArray;
      var INFINITY$1 = 1 / 0;
      var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function identity(value) {
        return value;
      }
      var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
      }
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var funcProto$1 = Function.prototype;
      var funcToString$1 = funcProto$1.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString$1.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype, objectProto$c = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty$a = objectProto$c.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function getValue$1(object, key) {
        return object == null ? void 0 : object[key];
      }
      function getNative(object, key) {
        var value = getValue$1(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      var WeakMap = getNative(root, "WeakMap");
      var objectCreate = Object.create;
      var baseCreate = /* @__PURE__ */ function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var baseSetToString = !defineProperty ? identity : function(func, string2) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string2),
          "writable": true
        });
      };
      var setToString = shortOut(baseSetToString);
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      var MAX_SAFE_INTEGER$1 = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER$1 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var objectProto$b = Object.prototype;
      var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty$9.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      var objectProto$a = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
        return value === proto;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      var argsTag$3 = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag$3;
      }
      var objectProto$9 = Object.prototype;
      var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
      var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
      };
      function stubFalse() {
        return false;
      }
      var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
      var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
      var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
      typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
      var freeProcess = moduleExports$1 && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
          if (types2) {
            return types2;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      var objectProto$8 = Object.prototype;
      var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var nativeKeys = overArg(Object.keys, Object);
      var objectProto$7 = Object.prototype;
      var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty$6.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      var objectProto$6 = Object.prototype;
      var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty$5.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      var nativeCreate = getNative(Object, "create");
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
      var objectProto$5 = Object.prototype;
      var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED$2 ? void 0 : result;
        }
        return hasOwnProperty$4.call(data, key) ? data[key] : void 0;
      }
      var objectProto$4 = Object.prototype;
      var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
      }
      var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
        return this;
      }
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      var Map$1 = getNative(root, "Map");
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map$1 || ListCache)(),
          "string": new Hash()
        };
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string2) {
        var result = [];
        if (string2.charCodeAt(0) === 46) {
          result.push("");
        }
        string2.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (predicate(value)) {
            {
              arrayPush(result, value);
            }
          } else {
            result[result.length] = value;
          }
        }
        return result;
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array) : [];
      }
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function stubArray() {
        return [];
      }
      var objectProto$3 = Object.prototype;
      var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
      var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      var DataView = getNative(root, "DataView");
      var Promise$1 = getNative(root, "Promise");
      var Set$1 = getNative(root, "Set");
      var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
      var dataViewTag$3 = "[object DataView]";
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag$3;
              case mapCtorString:
                return mapTag$4;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag$4;
              case weakMapCtorString:
                return weakMapTag$1;
            }
          }
          return result;
        };
      }
      var objectProto$2 = Object.prototype;
      var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      var Uint8Array$1 = root.Uint8Array;
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
        return result;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
      var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag$2:
            return cloneArrayBuffer(object);
          case boolTag$2:
          case dateTag$2:
            return new Ctor(+object);
          case dataViewTag$2:
            return cloneDataView(object);
          case float32Tag$1:
          case float64Tag$1:
          case int8Tag$1:
          case int16Tag$1:
          case int32Tag$1:
          case uint8Tag$1:
          case uint8ClampedTag$1:
          case uint16Tag$1:
          case uint32Tag$1:
            return cloneTypedArray(object);
          case mapTag$3:
            return new Ctor();
          case numberTag$2:
          case stringTag$2:
            return new Ctor(object);
          case regexpTag$2:
            return cloneRegExp(object);
          case setTag$3:
            return new Ctor();
          case symbolTag$2:
            return cloneSymbol(object);
        }
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      var mapTag$2 = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag$2;
      }
      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      var setTag$2 = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag$2;
      }
      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      var CLONE_FLAT_FLAG = 2;
      var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
      var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isFlat = bitmask & CLONE_FLAT_FLAG;
        if (result !== void 0) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value);
          }
          if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
            result = isFunc ? {} : initCloneObject(value);
            {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = getAllKeys ;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      var CLONE_SYMBOLS_FLAG = 4;
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function setToArray(set2) {
        var index = -1, result = Array(set2.size);
        set2.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
      var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      var COMPARE_PARTIAL_FLAG$1 = 1;
      var objectProto$1 = Object.prototype;
      var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
        while (++index < length) {
          var pair = pairs[index];
          result[pair[0]] = pair[1];
        }
        return result;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isNil(value) {
        return value == null;
      }
      function isUndefined$1(value) {
        return value === void 0;
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      const isUndefined = (val) => val === void 0;
      const isBoolean = (val) => typeof val === "boolean";
      const isNumber = (val) => typeof val === "number";
      const isElement = (e) => {
        if (typeof Element === "undefined")
          return false;
        return e instanceof Element;
      };
      const isPropAbsent = (prop) => isNil(prop);
      const isStringNumber = (val) => {
        if (!isString(val)) {
          return false;
        }
        return !Number.isNaN(Number(val));
      };
      const capitalize = (str) => capitalize$1(str);
      const keysOf = (arr) => Object.keys(arr);
      const getProp = (obj, path, defaultValue) => {
        return {
          get value() {
            return get(obj, path, defaultValue);
          },
          set value(val) {
            set(obj, path, val);
          }
        };
      };
      class ElementPlusError extends Error {
        constructor(m) {
          super(m);
          this.name = "ElementPlusError";
        }
      }
      function throwError(scope, m) {
        throw new ElementPlusError(`[${scope}] ${m}`);
      }
      function debugWarn(scope, message2) {
      }
      const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
      const hasClass = (el, cls) => {
        if (!el || !cls)
          return false;
        if (cls.includes(" "))
          throw new Error("className should not contain space.");
        return el.classList.contains(cls);
      };
      const addClass = (el, cls) => {
        if (!el || !cls.trim())
          return;
        el.classList.add(...classNameToArray(cls));
      };
      const removeClass = (el, cls) => {
        if (!el || !cls.trim())
          return;
        el.classList.remove(...classNameToArray(cls));
      };
      const getStyle = (element, styleName) => {
        var _a2;
        if (!isClient || !element || !styleName)
          return "";
        let key = camelize(styleName);
        if (key === "float")
          key = "cssFloat";
        try {
          const style = element.style[key];
          if (style)
            return style;
          const computed2 = (_a2 = document.defaultView) == null ? void 0 : _a2.getComputedStyle(element, "");
          return computed2 ? computed2[key] : "";
        } catch (e) {
          return element.style[key];
        }
      };
      function addUnit(value, defaultUnit = "px") {
        if (!value)
          return "";
        if (isNumber(value) || isStringNumber(value)) {
          return `${value}${defaultUnit}`;
        } else if (isString(value)) {
          return value;
        }
      }
      let scrollBarWidth;
      const getScrollBarWidth = (namespace) => {
        var _a2;
        if (!isClient)
          return 0;
        if (scrollBarWidth !== void 0)
          return scrollBarWidth;
        const outer = document.createElement("div");
        outer.className = `${namespace}-scrollbar__wrap`;
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.position = "absolute";
        outer.style.top = "-9999px";
        document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = "scroll";
        const inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        (_a2 = outer.parentNode) == null ? void 0 : _a2.removeChild(outer);
        scrollBarWidth = widthNoScroll - widthWithScroll;
        return scrollBarWidth;
      };
      /*! Element Plus Icons Vue v2.3.1 */
      var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "ArrowDown",
        __name: "arrow-down",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
            })
          ]));
        }
      });
      var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
      var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "ArrowLeft",
        __name: "arrow-left",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
            })
          ]));
        }
      });
      var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
      var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "ArrowRight",
        __name: "arrow-right",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            })
          ]));
        }
      });
      var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
      var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "ArrowUp",
        __name: "arrow-up",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            })
          ]));
        }
      });
      var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
      var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "CircleCheck",
        __name: "circle-check",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
            })
          ]));
        }
      });
      var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
      var circle_close_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "CircleCloseFilled",
        __name: "circle-close-filled",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
            })
          ]));
        }
      });
      var circle_close_filled_default = circle_close_filled_vue_vue_type_script_setup_true_lang_default;
      var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "CircleClose",
        __name: "circle-close",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            })
          ]));
        }
      });
      var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
      var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "Close",
        __name: "close",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            })
          ]));
        }
      });
      var close_default = close_vue_vue_type_script_setup_true_lang_default;
      var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "Hide",
        __name: "hide",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
            })
          ]));
        }
      });
      var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
      var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "InfoFilled",
        __name: "info-filled",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
            })
          ]));
        }
      });
      var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
      var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "Loading",
        __name: "loading",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
            })
          ]));
        }
      });
      var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
      var minus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "Minus",
        __name: "minus",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
            })
          ]));
        }
      });
      var minus_default = minus_vue_vue_type_script_setup_true_lang_default;
      var plus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "Plus",
        __name: "plus",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
            })
          ]));
        }
      });
      var plus_default = plus_vue_vue_type_script_setup_true_lang_default;
      var success_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "SuccessFilled",
        __name: "success-filled",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
            })
          ]));
        }
      });
      var success_filled_default = success_filled_vue_vue_type_script_setup_true_lang_default;
      var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "View",
        __name: "view",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
            })
          ]));
        }
      });
      var view_default = view_vue_vue_type_script_setup_true_lang_default;
      var warning_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
        name: "WarningFilled",
        __name: "warning-filled",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
            })
          ]));
        }
      });
      var warning_filled_default = warning_filled_vue_vue_type_script_setup_true_lang_default;
      const epPropKey = "__epPropKey";
      const definePropType = (val) => val;
      const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
      const buildProp = (prop, key) => {
        if (!isObject$1(prop) || isEpProp(prop))
          return prop;
        const { values, required, default: defaultValue, type, validator } = prop;
        const _validator = values || validator ? (val) => {
          let valid = false;
          let allowedValues = [];
          if (values) {
            allowedValues = Array.from(values);
            if (hasOwn(prop, "default")) {
              allowedValues.push(defaultValue);
            }
            valid || (valid = allowedValues.includes(val));
          }
          if (validator)
            valid || (valid = validator(val));
          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
            vue.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
          }
          return valid;
        } : void 0;
        const epProp = {
          type,
          required: !!required,
          validator: _validator,
          [epPropKey]: true
        };
        if (hasOwn(prop, "default"))
          epProp.default = defaultValue;
        return epProp;
      };
      const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
        key,
        buildProp(option, key)
      ]));
      const iconPropType = definePropType([
        String,
        Object,
        Function
      ]);
      const TypeComponents = {
        Close: close_default,
        SuccessFilled: success_filled_default,
        InfoFilled: info_filled_default,
        WarningFilled: warning_filled_default,
        CircleCloseFilled: circle_close_filled_default
      };
      const TypeComponentsMap = {
        success: success_filled_default,
        warning: warning_filled_default,
        error: circle_close_filled_default,
        info: info_filled_default
      };
      const ValidateComponentsMap = {
        validating: loading_default,
        success: circle_check_default,
        error: circle_close_default
      };
      const withInstall = (main, extra) => {
        main.install = (app2) => {
          for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
            app2.component(comp.name, comp);
          }
        };
        if (extra) {
          for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
          }
        }
        return main;
      };
      const withInstallFunction = (fn, name) => {
        fn.install = (app2) => {
          fn._context = app2._context;
          app2.config.globalProperties[name] = fn;
        };
        return fn;
      };
      const withNoopInstall = (component) => {
        component.install = NOOP;
        return component;
      };
      const EVENT_CODE = {
        tab: "Tab",
        enter: "Enter",
        space: "Space",
        left: "ArrowLeft",
        up: "ArrowUp",
        right: "ArrowRight",
        down: "ArrowDown",
        esc: "Escape",
        delete: "Delete",
        backspace: "Backspace",
        numpadEnter: "NumpadEnter",
        pageUp: "PageUp",
        pageDown: "PageDown",
        home: "Home",
        end: "End"
      };
      const UPDATE_MODEL_EVENT = "update:modelValue";
      const CHANGE_EVENT = "change";
      const INPUT_EVENT = "input";
      const componentSizes = ["", "default", "small", "large"];
      var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
        PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
        PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
        PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
        PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
        PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
        PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
        PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
        PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
        PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
        PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
        PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
        PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
        PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
        return PatchFlags2;
      })(PatchFlags || {});
      const flattedChildren = (children) => {
        const vNodes = isArray$1(children) ? children : [children];
        const result = [];
        vNodes.forEach((child) => {
          var _a2;
          if (isArray$1(child)) {
            result.push(...flattedChildren(child));
          } else if (vue.isVNode(child) && ((_a2 = child.component) == null ? void 0 : _a2.subTree)) {
            result.push(child, ...flattedChildren(child.component.subTree));
          } else if (vue.isVNode(child) && isArray$1(child.children)) {
            result.push(...flattedChildren(child.children));
          } else {
            result.push(child);
          }
        });
        return result;
      };
      const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
      const mutable = (val) => val;
      const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
      const LISTENER_PREFIX = /^on[A-Z]/;
      const useAttrs = (params = {}) => {
        const { excludeListeners = false, excludeKeys } = params;
        const allExcludeKeys = vue.computed(() => {
          return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
        });
        const instance = vue.getCurrentInstance();
        if (!instance) {
          return vue.computed(() => ({}));
        }
        return vue.computed(() => {
          var _a2;
          return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
        });
      };
      const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
        vue.watch(() => vue.unref(condition), (val) => {
        }, {
          immediate: true
        });
      };
      var English = {
        name: "en",
        el: {
          breadcrumb: {
            label: "Breadcrumb"
          },
          colorpicker: {
            confirm: "OK",
            clear: "Clear",
            defaultLabel: "color picker",
            description: "current color is {color}. press enter to select a new color.",
            alphaLabel: "pick alpha value"
          },
          datepicker: {
            now: "Now",
            today: "Today",
            cancel: "Cancel",
            clear: "Clear",
            confirm: "OK",
            dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
            monthTablePrompt: "Use the arrow keys and enter to select the month",
            yearTablePrompt: "Use the arrow keys and enter to select the year",
            selectedDate: "Selected date",
            selectDate: "Select date",
            selectTime: "Select time",
            startDate: "Start Date",
            startTime: "Start Time",
            endDate: "End Date",
            endTime: "End Time",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            year: "",
            month1: "January",
            month2: "February",
            month3: "March",
            month4: "April",
            month5: "May",
            month6: "June",
            month7: "July",
            month8: "August",
            month9: "September",
            month10: "October",
            month11: "November",
            month12: "December",
            week: "week",
            weeks: {
              sun: "Sun",
              mon: "Mon",
              tue: "Tue",
              wed: "Wed",
              thu: "Thu",
              fri: "Fri",
              sat: "Sat"
            },
            weeksFull: {
              sun: "Sunday",
              mon: "Monday",
              tue: "Tuesday",
              wed: "Wednesday",
              thu: "Thursday",
              fri: "Friday",
              sat: "Saturday"
            },
            months: {
              jan: "Jan",
              feb: "Feb",
              mar: "Mar",
              apr: "Apr",
              may: "May",
              jun: "Jun",
              jul: "Jul",
              aug: "Aug",
              sep: "Sep",
              oct: "Oct",
              nov: "Nov",
              dec: "Dec"
            }
          },
          inputNumber: {
            decrease: "decrease number",
            increase: "increase number"
          },
          select: {
            loading: "Loading",
            noMatch: "No matching data",
            noData: "No data",
            placeholder: "Select"
          },
          mention: {
            loading: "Loading"
          },
          dropdown: {
            toggleDropdown: "Toggle Dropdown"
          },
          cascader: {
            noMatch: "No matching data",
            loading: "Loading",
            placeholder: "Select",
            noData: "No data"
          },
          pagination: {
            goto: "Go to",
            pagesize: "/page",
            total: "Total {total}",
            pageClassifier: "",
            page: "Page",
            prev: "Go to previous page",
            next: "Go to next page",
            currentPage: "page {pager}",
            prevPages: "Previous {pager} pages",
            nextPages: "Next {pager} pages",
            deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
          },
          dialog: {
            close: "Close this dialog"
          },
          drawer: {
            close: "Close this dialog"
          },
          messagebox: {
            title: "Message",
            confirm: "OK",
            cancel: "Cancel",
            error: "Illegal input",
            close: "Close this dialog"
          },
          upload: {
            deleteTip: "press delete to remove",
            delete: "Delete",
            preview: "Preview",
            continue: "Continue"
          },
          slider: {
            defaultLabel: "slider between {min} and {max}",
            defaultRangeStartLabel: "pick start value",
            defaultRangeEndLabel: "pick end value"
          },
          table: {
            emptyText: "No Data",
            confirmFilter: "Confirm",
            resetFilter: "Reset",
            clearFilter: "All",
            sumText: "Sum"
          },
          tour: {
            next: "Next",
            previous: "Previous",
            finish: "Finish"
          },
          tree: {
            emptyText: "No Data"
          },
          transfer: {
            noMatch: "No matching data",
            noData: "No data",
            titles: ["List 1", "List 2"],
            filterPlaceholder: "Enter keyword",
            noCheckedFormat: "{total} items",
            hasCheckedFormat: "{checked}/{total} checked"
          },
          image: {
            error: "FAILED"
          },
          pageHeader: {
            title: "Back"
          },
          popconfirm: {
            confirmButtonText: "Yes",
            cancelButtonText: "No"
          },
          carousel: {
            leftArrow: "Carousel arrow left",
            rightArrow: "Carousel arrow right",
            indicator: "Carousel switch to index {index}"
          }
        }
      };
      const buildTranslator = (locale) => (path, option) => translate(path, option, vue.unref(locale));
      const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
        var _a2;
        return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
      });
      const buildLocaleContext = (locale) => {
        const lang = vue.computed(() => vue.unref(locale).name);
        const localeRef = vue.isRef(locale) ? locale : vue.ref(locale);
        return {
          lang,
          locale: localeRef,
          t: buildTranslator(locale)
        };
      };
      const localeContextKey = Symbol("localeContextKey");
      const useLocale = (localeOverrides) => {
        const locale = localeOverrides || vue.inject(localeContextKey, vue.ref());
        return buildLocaleContext(vue.computed(() => locale.value || English));
      };
      const defaultNamespace = "el";
      const statePrefix = "is-";
      const _bem = (namespace, block, blockSuffix, element, modifier) => {
        let cls = `${namespace}-${block}`;
        if (blockSuffix) {
          cls += `-${blockSuffix}`;
        }
        if (element) {
          cls += `__${element}`;
        }
        if (modifier) {
          cls += `--${modifier}`;
        }
        return cls;
      };
      const namespaceContextKey = Symbol("namespaceContextKey");
      const useGetDerivedNamespace = (namespaceOverrides) => {
        const derivedNamespace = namespaceOverrides || (vue.getCurrentInstance() ? vue.inject(namespaceContextKey, vue.ref(defaultNamespace)) : vue.ref(defaultNamespace));
        const namespace = vue.computed(() => {
          return vue.unref(derivedNamespace) || defaultNamespace;
        });
        return namespace;
      };
      const useNamespace = (block, namespaceOverrides) => {
        const namespace = useGetDerivedNamespace(namespaceOverrides);
        const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
        const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
        const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
        const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
        const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
        const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
        const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
        const is = (name, ...args) => {
          const state = args.length >= 1 ? args[0] : true;
          return name && state ? `${statePrefix}${name}` : "";
        };
        const cssVar = (object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[`--${namespace.value}-${key}`] = object[key];
            }
          }
          return styles;
        };
        const cssVarBlock = (object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[`--${namespace.value}-${block}-${key}`] = object[key];
            }
          }
          return styles;
        };
        const cssVarName = (name) => `--${namespace.value}-${name}`;
        const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
        return {
          namespace,
          b,
          e,
          m,
          be,
          em,
          bm,
          bem,
          is,
          cssVar,
          cssVarName,
          cssVarBlock,
          cssVarBlockName
        };
      };
      const useLockscreen = (trigger, options = {}) => {
        if (!vue.isRef(trigger)) {
          throwError("[useLockscreen]", "You need to pass a ref param to this function");
        }
        const ns = options.ns || useNamespace("popup");
        const hiddenCls = vue.computed(() => ns.bm("parent", "hidden"));
        if (!isClient || hasClass(document.body, hiddenCls.value)) {
          return;
        }
        let scrollBarWidth2 = 0;
        let withoutHiddenClass = false;
        let bodyWidth = "0";
        const cleanup = () => {
          setTimeout(() => {
            if (typeof document === "undefined")
              return;
            removeClass(document == null ? void 0 : document.body, hiddenCls.value);
            if (withoutHiddenClass && document) {
              document.body.style.width = bodyWidth;
            }
          }, 200);
        };
        vue.watch(trigger, (val) => {
          if (!val) {
            cleanup();
            return;
          }
          withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
          if (withoutHiddenClass) {
            bodyWidth = document.body.style.width;
          }
          scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
          const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          const bodyOverflowY = getStyle(document.body, "overflowY");
          if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
            document.body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
          }
          addClass(document.body, hiddenCls.value);
        });
        vue.onScopeDispose(() => cleanup());
      };
      const useProp = (name) => {
        const vm = vue.getCurrentInstance();
        return vue.computed(() => {
          var _a2, _b;
          return (_b = (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$props) == null ? void 0 : _b[name];
        });
      };
      const useSameTarget = (handleClick) => {
        if (!handleClick) {
          return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
        }
        let mousedownTarget = false;
        let mouseupTarget = false;
        const onClick = (e) => {
          if (mousedownTarget && mouseupTarget) {
            handleClick(e);
          }
          mousedownTarget = mouseupTarget = false;
        };
        const onMousedown = (e) => {
          mousedownTarget = e.target === e.currentTarget;
        };
        const onMouseup = (e) => {
          mouseupTarget = e.target === e.currentTarget;
        };
        return { onClick, onMousedown, onMouseup };
      };
      const defaultIdInjection = {
        prefix: Math.floor(Math.random() * 1e4),
        current: 0
      };
      const ID_INJECTION_KEY = Symbol("elIdInjection");
      const useIdInjection = () => {
        return vue.getCurrentInstance() ? vue.inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
      };
      const useId = (deterministicId) => {
        const idInjection = useIdInjection();
        const namespace = useGetDerivedNamespace();
        const idRef = computedEager(() => vue.unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
        return idRef;
      };
      let registeredEscapeHandlers = [];
      const cachedHandler = (event) => {
        if (event.code === EVENT_CODE.esc) {
          registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
        }
      };
      const useEscapeKeydown = (handler) => {
        vue.onMounted(() => {
          if (registeredEscapeHandlers.length === 0) {
            document.addEventListener("keydown", cachedHandler);
          }
          if (isClient)
            registeredEscapeHandlers.push(handler);
        });
        vue.onBeforeUnmount(() => {
          registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
          if (registeredEscapeHandlers.length === 0) {
            if (isClient)
              document.removeEventListener("keydown", cachedHandler);
          }
        });
      };
      const initial = {
        current: 0
      };
      const zIndex = vue.ref(0);
      const defaultInitialZIndex = 2e3;
      const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
      const zIndexContextKey = Symbol("zIndexContextKey");
      const useZIndex = (zIndexOverrides) => {
        const increasingInjection = vue.getCurrentInstance() ? vue.inject(ZINDEX_INJECTION_KEY, initial) : initial;
        const zIndexInjection = zIndexOverrides || (vue.getCurrentInstance() ? vue.inject(zIndexContextKey, void 0) : void 0);
        const initialZIndex = vue.computed(() => {
          const zIndexFromInjection = vue.unref(zIndexInjection);
          return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
        });
        const currentZIndex = vue.computed(() => initialZIndex.value + zIndex.value);
        const nextZIndex = () => {
          increasingInjection.current++;
          zIndex.value = increasingInjection.current;
          return currentZIndex.value;
        };
        if (!isClient && !vue.inject(ZINDEX_INJECTION_KEY)) ;
        return {
          initialZIndex,
          currentZIndex,
          nextZIndex
        };
      };
      function useCursor(input) {
        let selectionInfo;
        function recordCursor() {
          if (input.value == void 0)
            return;
          const { selectionStart, selectionEnd, value } = input.value;
          if (selectionStart == null || selectionEnd == null)
            return;
          const beforeTxt = value.slice(0, Math.max(0, selectionStart));
          const afterTxt = value.slice(Math.max(0, selectionEnd));
          selectionInfo = {
            selectionStart,
            selectionEnd,
            value,
            beforeTxt,
            afterTxt
          };
        }
        function setCursor() {
          if (input.value == void 0 || selectionInfo == void 0)
            return;
          const { value } = input.value;
          const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
          if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
            return;
          let startPos = value.length;
          if (value.endsWith(afterTxt)) {
            startPos = value.length - afterTxt.length;
          } else if (value.startsWith(beforeTxt)) {
            startPos = beforeTxt.length;
          } else {
            const beforeLastChar = beforeTxt[selectionStart - 1];
            const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
            if (newIndex !== -1) {
              startPos = newIndex + 1;
            }
          }
          input.value.setSelectionRange(startPos, startPos);
        }
        return [recordCursor, setCursor];
      }
      const getOrderedChildren = (vm, childComponentName, children) => {
        const nodes = flattedChildren(vm.subTree).filter((n) => {
          var _a2;
          return vue.isVNode(n) && ((_a2 = n.type) == null ? void 0 : _a2.name) === childComponentName && !!n.component;
        });
        const uids = nodes.map((n) => n.component.uid);
        return uids.map((uid) => children[uid]).filter((p) => !!p);
      };
      const useOrderedChildren = (vm, childComponentName) => {
        const children = {};
        const orderedChildren = vue.shallowRef([]);
        const addChild = (child) => {
          children[child.uid] = child;
          orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
        };
        const removeChild = (uid) => {
          delete children[uid];
          orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
        };
        return {
          children: orderedChildren,
          addChild,
          removeChild
        };
      };
      const useSizeProp = buildProp({
        type: String,
        values: componentSizes,
        required: false
      });
      const SIZE_INJECTION_KEY = Symbol("size");
      const useGlobalSize = () => {
        const injectedSize = vue.inject(SIZE_INJECTION_KEY, {});
        return vue.computed(() => {
          return vue.unref(injectedSize.size) || "";
        });
      };
      function useFocusController(target, {
        beforeFocus,
        afterFocus,
        beforeBlur,
        afterBlur
      } = {}) {
        const instance = vue.getCurrentInstance();
        const { emit } = instance;
        const wrapperRef = vue.shallowRef();
        const isFocused = vue.ref(false);
        const handleFocus = (event) => {
          const cancelFocus = isFunction$1(beforeFocus) ? beforeFocus(event) : false;
          if (cancelFocus || isFocused.value)
            return;
          isFocused.value = true;
          emit("focus", event);
          afterFocus == null ? void 0 : afterFocus();
        };
        const handleBlur = (event) => {
          var _a2;
          const cancelBlur = isFunction$1(beforeBlur) ? beforeBlur(event) : false;
          if (cancelBlur || event.relatedTarget && ((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(event.relatedTarget)))
            return;
          isFocused.value = false;
          emit("blur", event);
          afterBlur == null ? void 0 : afterBlur();
        };
        const handleClick = () => {
          var _a2, _b;
          if (((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(document.activeElement)) && wrapperRef.value !== document.activeElement)
            return;
          (_b = target.value) == null ? void 0 : _b.focus();
        };
        vue.watch(wrapperRef, (el) => {
          if (el) {
            el.setAttribute("tabindex", "-1");
          }
        });
        useEventListener(wrapperRef, "focus", handleFocus, true);
        useEventListener(wrapperRef, "blur", handleBlur, true);
        useEventListener(wrapperRef, "click", handleClick, true);
        return {
          isFocused,
          wrapperRef,
          handleFocus,
          handleBlur
        };
      }
      function useComposition({
        afterComposition,
        emit
      }) {
        const isComposing = vue.ref(false);
        const handleCompositionStart = (event) => {
          emit == null ? void 0 : emit("compositionstart", event);
          isComposing.value = true;
        };
        const handleCompositionUpdate = (event) => {
          var _a2;
          emit == null ? void 0 : emit("compositionupdate", event);
          const text = (_a2 = event.target) == null ? void 0 : _a2.value;
          const lastCharacter = text[text.length - 1] || "";
          isComposing.value = !isKorean(lastCharacter);
        };
        const handleCompositionEnd = (event) => {
          emit == null ? void 0 : emit("compositionend", event);
          if (isComposing.value) {
            isComposing.value = false;
            vue.nextTick(() => afterComposition(event));
          }
        };
        const handleComposition = (event) => {
          event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
        };
        return {
          isComposing,
          handleComposition,
          handleCompositionStart,
          handleCompositionUpdate,
          handleCompositionEnd
        };
      }
      const emptyValuesContextKey = Symbol("emptyValuesContextKey");
      const useEmptyValuesProps = buildProps({
        emptyValues: Array,
        valueOnClear: {
          type: [String, Number, Boolean, Function],
          default: void 0,
          validator: (val) => isFunction$1(val) ? !val() : !val
        }
      });
      const ariaProps = buildProps({
        ariaLabel: String,
        ariaOrientation: {
          type: String,
          values: ["horizontal", "vertical", "undefined"]
        },
        ariaControls: String
      });
      const useAriaProps = (arias) => {
        return pick(ariaProps, arias);
      };
      const configProviderContextKey = Symbol();
      const globalConfig = vue.ref();
      function useGlobalConfig(key, defaultValue = void 0) {
        const config = vue.getCurrentInstance() ? vue.inject(configProviderContextKey, globalConfig) : globalConfig;
        if (key) {
          return vue.computed(() => {
            var _a2, _b;
            return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
          });
        } else {
          return config;
        }
      }
      function useGlobalComponentSettings(block, sizeFallback) {
        const config = useGlobalConfig();
        const ns = useNamespace(block, vue.computed(() => {
          var _a2;
          return ((_a2 = config.value) == null ? void 0 : _a2.namespace) || defaultNamespace;
        }));
        const locale = useLocale(vue.computed(() => {
          var _a2;
          return (_a2 = config.value) == null ? void 0 : _a2.locale;
        }));
        const zIndex2 = useZIndex(vue.computed(() => {
          var _a2;
          return ((_a2 = config.value) == null ? void 0 : _a2.zIndex) || defaultInitialZIndex;
        }));
        const size = vue.computed(() => {
          var _a2;
          return vue.unref(sizeFallback) || ((_a2 = config.value) == null ? void 0 : _a2.size) || "";
        });
        provideGlobalConfig(vue.computed(() => vue.unref(config) || {}));
        return {
          ns,
          locale,
          zIndex: zIndex2,
          size
        };
      }
      const provideGlobalConfig = (config, app2, global2 = false) => {
        var _a2;
        const inSetup = !!vue.getCurrentInstance();
        const oldConfig = inSetup ? useGlobalConfig() : void 0;
        const provideFn = (_a2 = void 0) != null ? _a2 : inSetup ? vue.provide : void 0;
        if (!provideFn) {
          return;
        }
        const context = vue.computed(() => {
          const cfg = vue.unref(config);
          if (!(oldConfig == null ? void 0 : oldConfig.value))
            return cfg;
          return mergeConfig(oldConfig.value, cfg);
        });
        provideFn(configProviderContextKey, context);
        provideFn(localeContextKey, vue.computed(() => context.value.locale));
        provideFn(namespaceContextKey, vue.computed(() => context.value.namespace));
        provideFn(zIndexContextKey, vue.computed(() => context.value.zIndex));
        provideFn(SIZE_INJECTION_KEY, {
          size: vue.computed(() => context.value.size || "")
        });
        provideFn(emptyValuesContextKey, vue.computed(() => ({
          emptyValues: context.value.emptyValues,
          valueOnClear: context.value.valueOnClear
        })));
        if (global2 || !globalConfig.value) {
          globalConfig.value = context.value;
        }
        return context;
      };
      const mergeConfig = (a, b) => {
        const keys2 = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
        const obj = {};
        for (const key of keys2) {
          obj[key] = b[key] !== void 0 ? b[key] : a[key];
        }
        return obj;
      };
      const configProviderProps = buildProps({
        a11y: {
          type: Boolean,
          default: true
        },
        locale: {
          type: definePropType(Object)
        },
        size: useSizeProp,
        button: {
          type: definePropType(Object)
        },
        experimentalFeatures: {
          type: definePropType(Object)
        },
        keyboardNavigation: {
          type: Boolean,
          default: true
        },
        message: {
          type: definePropType(Object)
        },
        zIndex: Number,
        namespace: {
          type: String,
          default: "el"
        },
        ...useEmptyValuesProps
      });
      const messageConfig = {};
      const ConfigProvider = vue.defineComponent({
        name: "ElConfigProvider",
        props: configProviderProps,
        setup(props, { slots }) {
          vue.watch(() => props.message, (val) => {
            Object.assign(messageConfig, val != null ? val : {});
          }, { immediate: true, deep: true });
          const config = provideGlobalConfig(props);
          return () => vue.renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
        }
      });
      const ElConfigProvider = withInstall(ConfigProvider);
      var _export_sfc$1 = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };
      const iconProps = buildProps({
        size: {
          type: definePropType([Number, String])
        },
        color: {
          type: String
        }
      });
      const __default__$k = vue.defineComponent({
        name: "ElIcon",
        inheritAttrs: false
      });
      const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
        ...__default__$k,
        props: iconProps,
        setup(__props) {
          const props = __props;
          const ns = useNamespace("icon");
          const style = vue.computed(() => {
            const { size, color } = props;
            if (!size && !color)
              return {};
            return {
              fontSize: isUndefined(size) ? void 0 : addUnit(size),
              "--color": color
            };
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("i", vue.mergeProps({
              class: vue.unref(ns).b(),
              style: vue.unref(style)
            }, _ctx.$attrs), [
              vue.renderSlot(_ctx.$slots, "default")
            ], 16);
          };
        }
      });
      var Icon$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "icon.vue"]]);
      const ElIcon = withInstall(Icon$1);
      const formContextKey = Symbol("formContextKey");
      const formItemContextKey = Symbol("formItemContextKey");
      const useFormSize = (fallback, ignore = {}) => {
        const emptyRef = vue.ref(void 0);
        const size = ignore.prop ? emptyRef : useProp("size");
        const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
        const form = ignore.form ? { size: void 0 } : vue.inject(formContextKey, void 0);
        const formItem = ignore.formItem ? { size: void 0 } : vue.inject(formItemContextKey, void 0);
        return vue.computed(() => size.value || vue.unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
      };
      const useFormDisabled = (fallback) => {
        const disabled = useProp("disabled");
        const form = vue.inject(formContextKey, void 0);
        return vue.computed(() => disabled.value || vue.unref(fallback) || (form == null ? void 0 : form.disabled) || false);
      };
      const useFormItem = () => {
        const form = vue.inject(formContextKey, void 0);
        const formItem = vue.inject(formItemContextKey, void 0);
        return {
          form,
          formItem
        };
      };
      const useFormItemInputId = (props, {
        formItemContext,
        disableIdGeneration,
        disableIdManagement
      }) => {
        if (!disableIdGeneration) {
          disableIdGeneration = vue.ref(false);
        }
        if (!disableIdManagement) {
          disableIdManagement = vue.ref(false);
        }
        const inputId = vue.ref();
        let idUnwatch = void 0;
        const isLabeledByFormItem = vue.computed(() => {
          var _a2;
          return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
        });
        vue.onMounted(() => {
          idUnwatch = vue.watch([vue.toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
            const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
            if (newId !== inputId.value) {
              if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
                inputId.value && formItemContext.removeInputId(inputId.value);
                if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
                  formItemContext.addInputId(newId);
                }
              }
              inputId.value = newId;
            }
          }, { immediate: true });
        });
        vue.onUnmounted(() => {
          idUnwatch && idUnwatch();
          if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
            inputId.value && formItemContext.removeInputId(inputId.value);
          }
        });
        return {
          isLabeledByFormItem,
          inputId
        };
      };
      const formMetaProps = buildProps({
        size: {
          type: String,
          values: componentSizes
        },
        disabled: Boolean
      });
      const formProps = buildProps({
        ...formMetaProps,
        model: Object,
        rules: {
          type: definePropType(Object)
        },
        labelPosition: {
          type: String,
          values: ["left", "right", "top"],
          default: "right"
        },
        requireAsteriskPosition: {
          type: String,
          values: ["left", "right"],
          default: "left"
        },
        labelWidth: {
          type: [String, Number],
          default: ""
        },
        labelSuffix: {
          type: String,
          default: ""
        },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: {
          type: Boolean,
          default: true
        },
        validateOnRuleChange: {
          type: Boolean,
          default: true
        },
        hideRequiredAsterisk: Boolean,
        scrollToError: Boolean,
        scrollIntoViewOptions: {
          type: [Object, Boolean]
        }
      });
      const formEmits = {
        validate: (prop, isValid, message2) => (isArray$1(prop) || isString(prop)) && isBoolean(isValid) && isString(message2)
      };
      function useFormLabelWidth() {
        const potentialLabelWidthArr = vue.ref([]);
        const autoLabelWidth = vue.computed(() => {
          if (!potentialLabelWidthArr.value.length)
            return "0";
          const max = Math.max(...potentialLabelWidthArr.value);
          return max ? `${max}px` : "";
        });
        function getLabelWidthIndex(width) {
          const index = potentialLabelWidthArr.value.indexOf(width);
          if (index === -1 && autoLabelWidth.value === "0") ;
          return index;
        }
        function registerLabelWidth(val, oldVal) {
          if (val && oldVal) {
            const index = getLabelWidthIndex(oldVal);
            potentialLabelWidthArr.value.splice(index, 1, val);
          } else if (val) {
            potentialLabelWidthArr.value.push(val);
          }
        }
        function deregisterLabelWidth(val) {
          const index = getLabelWidthIndex(val);
          if (index > -1) {
            potentialLabelWidthArr.value.splice(index, 1);
          }
        }
        return {
          autoLabelWidth,
          registerLabelWidth,
          deregisterLabelWidth
        };
      }
      const filterFields = (fields, props) => {
        const normalized = castArray(props);
        return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
      };
      const COMPONENT_NAME$4 = "ElForm";
      const __default__$j = vue.defineComponent({
        name: COMPONENT_NAME$4
      });
      const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
        ...__default__$j,
        props: formProps,
        emits: formEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const fields = [];
          const formSize = useFormSize();
          const ns = useNamespace("form");
          const formClasses = vue.computed(() => {
            const { labelPosition, inline } = props;
            return [
              ns.b(),
              ns.m(formSize.value || "default"),
              {
                [ns.m(`label-${labelPosition}`)]: labelPosition,
                [ns.m("inline")]: inline
              }
            ];
          });
          const getField = (prop) => {
            return fields.find((field) => field.prop === prop);
          };
          const addField = (field) => {
            fields.push(field);
          };
          const removeField = (field) => {
            if (field.prop) {
              fields.splice(fields.indexOf(field), 1);
            }
          };
          const resetFields = (properties = []) => {
            if (!props.model) {
              return;
            }
            filterFields(fields, properties).forEach((field) => field.resetField());
          };
          const clearValidate = (props2 = []) => {
            filterFields(fields, props2).forEach((field) => field.clearValidate());
          };
          const isValidatable = vue.computed(() => {
            const hasModel = !!props.model;
            return hasModel;
          });
          const obtainValidateFields = (props2) => {
            if (fields.length === 0)
              return [];
            const filteredFields = filterFields(fields, props2);
            if (!filteredFields.length) {
              return [];
            }
            return filteredFields;
          };
          const validate = async (callback) => validateField(void 0, callback);
          const doValidateField = async (props2 = []) => {
            if (!isValidatable.value)
              return false;
            const fields2 = obtainValidateFields(props2);
            if (fields2.length === 0)
              return true;
            let validationErrors = {};
            for (const field of fields2) {
              try {
                await field.validate("");
              } catch (fields3) {
                validationErrors = {
                  ...validationErrors,
                  ...fields3
                };
              }
            }
            if (Object.keys(validationErrors).length === 0)
              return true;
            return Promise.reject(validationErrors);
          };
          const validateField = async (modelProps = [], callback) => {
            const shouldThrow = !isFunction$1(callback);
            try {
              const result = await doValidateField(modelProps);
              if (result === true) {
                await (callback == null ? void 0 : callback(result));
              }
              return result;
            } catch (e) {
              if (e instanceof Error)
                throw e;
              const invalidFields = e;
              if (props.scrollToError) {
                scrollToField(Object.keys(invalidFields)[0]);
              }
              await (callback == null ? void 0 : callback(false, invalidFields));
              return shouldThrow && Promise.reject(invalidFields);
            }
          };
          const scrollToField = (prop) => {
            var _a2;
            const field = filterFields(fields, prop)[0];
            if (field) {
              (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView(props.scrollIntoViewOptions);
            }
          };
          vue.watch(() => props.rules, () => {
            if (props.validateOnRuleChange) {
              validate().catch((err) => debugWarn());
            }
          }, { deep: true });
          vue.provide(formContextKey, vue.reactive({
            ...vue.toRefs(props),
            emit,
            resetFields,
            clearValidate,
            validateField,
            getField,
            addField,
            removeField,
            ...useFormLabelWidth()
          }));
          expose({
            validate,
            validateField,
            resetFields,
            clearValidate,
            scrollToField,
            fields
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("form", {
              class: vue.normalizeClass(vue.unref(formClasses))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2);
          };
        }
      });
      var Form = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "form.vue"]]);
      var define_process_env_default = {};
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct.bind();
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [null];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2) _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2)) return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var formatRegExp = /%[sdj%]/g;
      var warning = function warning2() {
      };
      if (typeof process !== "undefined" && define_process_env_default && false) {
        warning = function warning3(type4, errors) {
          if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
            if (errors.every(function(e) {
              return typeof e === "string";
            })) {
              console.warn(type4, errors);
            }
          }
        };
      }
      function convertFieldsError(errors) {
        if (!errors || !errors.length) return null;
        var fields = {};
        errors.forEach(function(error) {
          var field = error.field;
          fields[field] = fields[field] || [];
          fields[field].push(error);
        });
        return fields;
      }
      function format(template) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var i = 0;
        var len = args.length;
        if (typeof template === "function") {
          return template.apply(null, args);
        }
        if (typeof template === "string") {
          var str = template.replace(formatRegExp, function(x) {
            if (x === "%%") {
              return "%";
            }
            if (i >= len) {
              return x;
            }
            switch (x) {
              case "%s":
                return String(args[i++]);
              case "%d":
                return Number(args[i++]);
              case "%j":
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return "[Circular]";
                }
                break;
              default:
                return x;
            }
          });
          return str;
        }
        return template;
      }
      function isNativeStringType(type4) {
        return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
      }
      function isEmptyValue(value, type4) {
        if (value === void 0 || value === null) {
          return true;
        }
        if (type4 === "array" && Array.isArray(value) && !value.length) {
          return true;
        }
        if (isNativeStringType(type4) && typeof value === "string" && !value) {
          return true;
        }
        return false;
      }
      function asyncParallelArray(arr, func, callback) {
        var results = [];
        var total = 0;
        var arrLength = arr.length;
        function count(errors) {
          results.push.apply(results, errors || []);
          total++;
          if (total === arrLength) {
            callback(results);
          }
        }
        arr.forEach(function(a) {
          func(a, count);
        });
      }
      function asyncSerialArray(arr, func, callback) {
        var index = 0;
        var arrLength = arr.length;
        function next(errors) {
          if (errors && errors.length) {
            callback(errors);
            return;
          }
          var original = index;
          index = index + 1;
          if (original < arrLength) {
            func(arr[original], next);
          } else {
            callback([]);
          }
        }
        next([]);
      }
      function flattenObjArr(objArr) {
        var ret = [];
        Object.keys(objArr).forEach(function(k) {
          ret.push.apply(ret, objArr[k] || []);
        });
        return ret;
      }
      var AsyncValidationError = /* @__PURE__ */ function(_Error) {
        _inheritsLoose(AsyncValidationError2, _Error);
        function AsyncValidationError2(errors, fields) {
          var _this;
          _this = _Error.call(this, "Async Validation Error") || this;
          _this.errors = errors;
          _this.fields = fields;
          return _this;
        }
        return AsyncValidationError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
      function asyncMap(objArr, option, func, callback, source) {
        if (option.first) {
          var _pending = new Promise(function(resolve, reject) {
            var next = function next2(errors) {
              callback(errors);
              return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
            };
            var flattenArr = flattenObjArr(objArr);
            asyncSerialArray(flattenArr, func, next);
          });
          _pending["catch"](function(e) {
            return e;
          });
          return _pending;
        }
        var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
        var objArrKeys = Object.keys(objArr);
        var objArrLength = objArrKeys.length;
        var total = 0;
        var results = [];
        var pending = new Promise(function(resolve, reject) {
          var next = function next2(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
              callback(results);
              return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
            }
          };
          if (!objArrKeys.length) {
            callback(results);
            resolve(source);
          }
          objArrKeys.forEach(function(key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) {
              asyncSerialArray(arr, func, next);
            } else {
              asyncParallelArray(arr, func, next);
            }
          });
        });
        pending["catch"](function(e) {
          return e;
        });
        return pending;
      }
      function isErrorObj(obj) {
        return !!(obj && obj.message !== void 0);
      }
      function getValue(value, path) {
        var v = value;
        for (var i = 0; i < path.length; i++) {
          if (v == void 0) {
            return v;
          }
          v = v[path[i]];
        }
        return v;
      }
      function complementError(rule, source) {
        return function(oe) {
          var fieldValue;
          if (rule.fullFields) {
            fieldValue = getValue(source, rule.fullFields);
          } else {
            fieldValue = source[oe.field || rule.fullField];
          }
          if (isErrorObj(oe)) {
            oe.field = oe.field || rule.fullField;
            oe.fieldValue = fieldValue;
            return oe;
          }
          return {
            message: typeof oe === "function" ? oe() : oe,
            fieldValue,
            field: oe.field || rule.fullField
          };
        };
      }
      function deepMerge(target, source) {
        if (source) {
          for (var s in source) {
            if (source.hasOwnProperty(s)) {
              var value = source[s];
              if (typeof value === "object" && typeof target[s] === "object") {
                target[s] = _extends({}, target[s], value);
              } else {
                target[s] = value;
              }
            }
          }
        }
        return target;
      }
      var required$1 = function required(rule, value, source, errors, options, type4) {
        if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
          errors.push(format(options.messages.required, rule.fullField));
        }
      };
      var whitespace = function whitespace2(rule, value, source, errors, options) {
        if (/^\s+$/.test(value) || value === "") {
          errors.push(format(options.messages.whitespace, rule.fullField));
        }
      };
      var urlReg;
      var getUrlRegex = function() {
        if (urlReg) {
          return urlReg;
        }
        var word = "[a-fA-F\\d:]";
        var b = function b2(options) {
          return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
        };
        var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
        var v6seg = "[a-fA-F\\d]{1,4}";
        var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
        var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
        var v4exact = new RegExp("^" + v4 + "$");
        var v6exact = new RegExp("^" + v6 + "$");
        var ip = function ip2(options) {
          return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
        };
        ip.v4 = function(options) {
          return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
        };
        ip.v6 = function(options) {
          return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
        };
        var protocol = "(?:(?:[a-z]+:)?//)";
        var auth = "(?:\\S+(?::\\S*)?@)?";
        var ipv4 = ip.v4().source;
        var ipv6 = ip.v6().source;
        var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
        var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
        var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
        var port = "(?::\\d{2,5})?";
        var path = '(?:[/?#][^\\s"]*)?';
        var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
        urlReg = new RegExp("(?:^" + regex + "$)", "i");
        return urlReg;
      };
      var pattern$2 = {
        // http://emailregex.com/
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        // url: new RegExp(
        //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
        //   'i',
        // ),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
      };
      var types = {
        integer: function integer(value) {
          return types.number(value) && parseInt(value, 10) === value;
        },
        "float": function float(value) {
          return types.number(value) && !types.integer(value);
        },
        array: function array(value) {
          return Array.isArray(value);
        },
        regexp: function regexp(value) {
          if (value instanceof RegExp) {
            return true;
          }
          try {
            return !!new RegExp(value);
          } catch (e) {
            return false;
          }
        },
        date: function date(value) {
          return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
        },
        number: function number(value) {
          if (isNaN(value)) {
            return false;
          }
          return typeof value === "number";
        },
        object: function object(value) {
          return typeof value === "object" && !types.array(value);
        },
        method: function method(value) {
          return typeof value === "function";
        },
        email: function email(value) {
          return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
        },
        url: function url(value) {
          return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
        },
        hex: function hex2(value) {
          return typeof value === "string" && !!value.match(pattern$2.hex);
        }
      };
      var type$1 = function type(rule, value, source, errors, options) {
        if (rule.required && value === void 0) {
          required$1(rule, value, source, errors, options);
          return;
        }
        var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
        var ruleType = rule.type;
        if (custom.indexOf(ruleType) > -1) {
          if (!types[ruleType](value)) {
            errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
          }
        } else if (ruleType && typeof value !== rule.type) {
          errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
        }
      };
      var range = function range2(rule, value, source, errors, options) {
        var len = typeof rule.len === "number";
        var min = typeof rule.min === "number";
        var max = typeof rule.max === "number";
        var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        var val = value;
        var key = null;
        var num = typeof value === "number";
        var str = typeof value === "string";
        var arr = Array.isArray(value);
        if (num) {
          key = "number";
        } else if (str) {
          key = "string";
        } else if (arr) {
          key = "array";
        }
        if (!key) {
          return false;
        }
        if (arr) {
          val = value.length;
        }
        if (str) {
          val = value.replace(spRegexp, "_").length;
        }
        if (len) {
          if (val !== rule.len) {
            errors.push(format(options.messages[key].len, rule.fullField, rule.len));
          }
        } else if (min && !max && val < rule.min) {
          errors.push(format(options.messages[key].min, rule.fullField, rule.min));
        } else if (max && !min && val > rule.max) {
          errors.push(format(options.messages[key].max, rule.fullField, rule.max));
        } else if (min && max && (val < rule.min || val > rule.max)) {
          errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
        }
      };
      var ENUM$1 = "enum";
      var enumerable$1 = function enumerable(rule, value, source, errors, options) {
        rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
        if (rule[ENUM$1].indexOf(value) === -1) {
          errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
        }
      };
      var pattern$1 = function pattern(rule, value, source, errors, options) {
        if (rule.pattern) {
          if (rule.pattern instanceof RegExp) {
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) {
              errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          } else if (typeof rule.pattern === "string") {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) {
              errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          }
        }
      };
      var rules = {
        required: required$1,
        whitespace,
        type: type$1,
        range,
        "enum": enumerable$1,
        pattern: pattern$1
      };
      var string = function string2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "string") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, "string");
          if (!isEmptyValue(value, "string")) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
            rules.pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) {
              rules.whitespace(rule, value, source, errors, options);
            }
          }
        }
        callback(errors);
      };
      var method2 = function method3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var number2 = function number3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (value === "") {
            value = void 0;
          }
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var _boolean = function _boolean2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var regexp2 = function regexp3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value)) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var integer2 = function integer3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var floatFn = function floatFn2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var array2 = function array3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if ((value === void 0 || value === null) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, "array");
          if (value !== void 0 && value !== null) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var object2 = function object3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var ENUM = "enum";
      var enumerable2 = function enumerable3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules[ENUM](rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var pattern2 = function pattern3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "string") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value, "string")) {
            rules.pattern(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var date2 = function date3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "date") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value, "date")) {
            var dateObject;
            if (value instanceof Date) {
              dateObject = value;
            } else {
              dateObject = new Date(value);
            }
            rules.type(rule, dateObject, source, errors, options);
            if (dateObject) {
              rules.range(rule, dateObject.getTime(), source, errors, options);
            }
          }
        }
        callback(errors);
      };
      var required2 = function required3(rule, value, callback, source, options) {
        var errors = [];
        var type4 = Array.isArray(value) ? "array" : typeof value;
        rules.required(rule, value, source, errors, options, type4);
        callback(errors);
      };
      var type2 = function type3(rule, value, callback, source, options) {
        var ruleType = rule.type;
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, ruleType) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, ruleType);
          if (!isEmptyValue(value, ruleType)) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var any = function any2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
        }
        callback(errors);
      };
      var validators = {
        string,
        method: method2,
        number: number2,
        "boolean": _boolean,
        regexp: regexp2,
        integer: integer2,
        "float": floatFn,
        array: array2,
        object: object2,
        "enum": enumerable2,
        pattern: pattern2,
        date: date2,
        url: type2,
        hex: type2,
        email: type2,
        required: required2,
        any
      };
      function newMessages() {
        return {
          "default": "Validation error on field %s",
          required: "%s is required",
          "enum": "%s must be one of %s",
          whitespace: "%s cannot be empty",
          date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
          },
          types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            "boolean": "%s is not a %s",
            integer: "%s is not an %s",
            "float": "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
          },
          string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
          },
          number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
          },
          array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
          },
          pattern: {
            mismatch: "%s value %s does not match pattern %s"
          },
          clone: function clone2() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
          }
        };
      }
      var messages = newMessages();
      var Schema = /* @__PURE__ */ function() {
        function Schema2(descriptor) {
          this.rules = null;
          this._messages = messages;
          this.define(descriptor);
        }
        var _proto = Schema2.prototype;
        _proto.define = function define(rules2) {
          var _this = this;
          if (!rules2) {
            throw new Error("Cannot configure a schema with no rules");
          }
          if (typeof rules2 !== "object" || Array.isArray(rules2)) {
            throw new Error("Rules must be an object");
          }
          this.rules = {};
          Object.keys(rules2).forEach(function(name) {
            var item = rules2[name];
            _this.rules[name] = Array.isArray(item) ? item : [item];
          });
        };
        _proto.messages = function messages2(_messages) {
          if (_messages) {
            this._messages = deepMerge(newMessages(), _messages);
          }
          return this._messages;
        };
        _proto.validate = function validate(source_, o, oc) {
          var _this2 = this;
          if (o === void 0) {
            o = {};
          }
          if (oc === void 0) {
            oc = function oc2() {
            };
          }
          var source = source_;
          var options = o;
          var callback = oc;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) {
              callback(null, source);
            }
            return Promise.resolve(source);
          }
          function complete(results) {
            var errors = [];
            var fields = {};
            function add2(e) {
              if (Array.isArray(e)) {
                var _errors;
                errors = (_errors = errors).concat.apply(_errors, e);
              } else {
                errors.push(e);
              }
            }
            for (var i = 0; i < results.length; i++) {
              add2(results[i]);
            }
            if (!errors.length) {
              callback(null, source);
            } else {
              fields = convertFieldsError(errors);
              callback(errors, fields);
            }
          }
          if (options.messages) {
            var messages$1 = this.messages();
            if (messages$1 === messages) {
              messages$1 = newMessages();
            }
            deepMerge(messages$1, options.messages);
            options.messages = messages$1;
          } else {
            options.messages = this.messages();
          }
          var series = {};
          var keys2 = options.keys || Object.keys(this.rules);
          keys2.forEach(function(z) {
            var arr = _this2.rules[z];
            var value = source[z];
            arr.forEach(function(r) {
              var rule = r;
              if (typeof rule.transform === "function") {
                if (source === source_) {
                  source = _extends({}, source);
                }
                value = source[z] = rule.transform(value);
              }
              if (typeof rule === "function") {
                rule = {
                  validator: rule
                };
              } else {
                rule = _extends({}, rule);
              }
              rule.validator = _this2.getValidationMethod(rule);
              if (!rule.validator) {
                return;
              }
              rule.field = z;
              rule.fullField = rule.fullField || z;
              rule.type = _this2.getType(rule);
              series[z] = series[z] || [];
              series[z].push({
                rule,
                value,
                source,
                field: z
              });
            });
          });
          var errorFields = {};
          return asyncMap(series, options, function(data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullField(key, schema) {
              return _extends({}, schema, {
                fullField: rule.fullField + "." + key,
                fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
              });
            }
            function cb(e) {
              if (e === void 0) {
                e = [];
              }
              var errorList = Array.isArray(e) ? e : [e];
              if (!options.suppressWarning && errorList.length) {
                Schema2.warning("async-validator:", errorList);
              }
              if (errorList.length && rule.message !== void 0) {
                errorList = [].concat(rule.message);
              }
              var filledErrors = errorList.map(complementError(rule, source));
              if (options.first && filledErrors.length) {
                errorFields[rule.field] = 1;
                return doIt(filledErrors);
              }
              if (!deep) {
                doIt(filledErrors);
              } else {
                if (rule.required && !data.value) {
                  if (rule.message !== void 0) {
                    filledErrors = [].concat(rule.message).map(complementError(rule, source));
                  } else if (options.error) {
                    filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                  }
                  return doIt(filledErrors);
                }
                var fieldsSchema = {};
                if (rule.defaultField) {
                  Object.keys(data.value).map(function(key) {
                    fieldsSchema[key] = rule.defaultField;
                  });
                }
                fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                var paredFieldsSchema = {};
                Object.keys(fieldsSchema).forEach(function(field) {
                  var fieldSchema = fieldsSchema[field];
                  var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                  paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                });
                var schema = new Schema2(paredFieldsSchema);
                schema.messages(options.messages);
                if (data.rule.options) {
                  data.rule.options.messages = options.messages;
                  data.rule.options.error = options.error;
                }
                schema.validate(data.value, data.rule.options || options, function(errs) {
                  var finalErrors = [];
                  if (filledErrors && filledErrors.length) {
                    finalErrors.push.apply(finalErrors, filledErrors);
                  }
                  if (errs && errs.length) {
                    finalErrors.push.apply(finalErrors, errs);
                  }
                  doIt(finalErrors.length ? finalErrors : null);
                });
              }
            }
            var res;
            if (rule.asyncValidator) {
              res = rule.asyncValidator(rule, data.value, cb, data.source, options);
            } else if (rule.validator) {
              try {
                res = rule.validator(rule, data.value, cb, data.source, options);
              } catch (error) {
                console.error == null ? void 0 : console.error(error);
                if (!options.suppressValidatorError) {
                  setTimeout(function() {
                    throw error;
                  }, 0);
                }
                cb(error.message);
              }
              if (res === true) {
                cb();
              } else if (res === false) {
                cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
              } else if (res instanceof Array) {
                cb(res);
              } else if (res instanceof Error) {
                cb(res.message);
              }
            }
            if (res && res.then) {
              res.then(function() {
                return cb();
              }, function(e) {
                return cb(e);
              });
            }
          }, function(results) {
            complete(results);
          }, source);
        };
        _proto.getType = function getType(rule) {
          if (rule.type === void 0 && rule.pattern instanceof RegExp) {
            rule.type = "pattern";
          }
          if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
            throw new Error(format("Unknown rule type %s", rule.type));
          }
          return rule.type || "string";
        };
        _proto.getValidationMethod = function getValidationMethod(rule) {
          if (typeof rule.validator === "function") {
            return rule.validator;
          }
          var keys2 = Object.keys(rule);
          var messageIndex = keys2.indexOf("message");
          if (messageIndex !== -1) {
            keys2.splice(messageIndex, 1);
          }
          if (keys2.length === 1 && keys2[0] === "required") {
            return validators.required;
          }
          return validators[this.getType(rule)] || void 0;
        };
        return Schema2;
      }();
      Schema.register = function register(type4, validator) {
        if (typeof validator !== "function") {
          throw new Error("Cannot register a validator by type, validator is not a function");
        }
        validators[type4] = validator;
      };
      Schema.warning = warning;
      Schema.messages = messages;
      Schema.validators = validators;
      const formItemValidateStates = [
        "",
        "error",
        "validating",
        "success"
      ];
      const formItemProps = buildProps({
        label: String,
        labelWidth: {
          type: [String, Number],
          default: ""
        },
        labelPosition: {
          type: String,
          values: ["left", "right", "top", ""],
          default: ""
        },
        prop: {
          type: definePropType([String, Array])
        },
        required: {
          type: Boolean,
          default: void 0
        },
        rules: {
          type: definePropType([Object, Array])
        },
        error: String,
        validateStatus: {
          type: String,
          values: formItemValidateStates
        },
        for: String,
        inlineMessage: {
          type: [String, Boolean],
          default: ""
        },
        showMessage: {
          type: Boolean,
          default: true
        },
        size: {
          type: String,
          values: componentSizes
        }
      });
      const COMPONENT_NAME$3 = "ElLabelWrap";
      var FormLabelWrap = vue.defineComponent({
        name: COMPONENT_NAME$3,
        props: {
          isAutoWidth: Boolean,
          updateAll: Boolean
        },
        setup(props, {
          slots
        }) {
          const formContext = vue.inject(formContextKey, void 0);
          const formItemContext = vue.inject(formItemContextKey);
          if (!formItemContext)
            throwError(COMPONENT_NAME$3, "usage: <el-form-item><label-wrap /></el-form-item>");
          const ns = useNamespace("form");
          const el = vue.ref();
          const computedWidth = vue.ref(0);
          const getLabelWidth = () => {
            var _a2;
            if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
              const width = window.getComputedStyle(el.value.firstElementChild).width;
              return Math.ceil(Number.parseFloat(width));
            } else {
              return 0;
            }
          };
          const updateLabelWidth = (action = "update") => {
            vue.nextTick(() => {
              if (slots.default && props.isAutoWidth) {
                if (action === "update") {
                  computedWidth.value = getLabelWidth();
                } else if (action === "remove") {
                  formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
                }
              }
            });
          };
          const updateLabelWidthFn = () => updateLabelWidth("update");
          vue.onMounted(() => {
            updateLabelWidthFn();
          });
          vue.onBeforeUnmount(() => {
            updateLabelWidth("remove");
          });
          vue.onUpdated(() => updateLabelWidthFn());
          vue.watch(computedWidth, (val, oldVal) => {
            if (props.updateAll) {
              formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
            }
          });
          useResizeObserver(vue.computed(() => {
            var _a2, _b;
            return (_b = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b : null;
          }), updateLabelWidthFn);
          return () => {
            var _a2, _b;
            if (!slots)
              return null;
            const {
              isAutoWidth
            } = props;
            if (isAutoWidth) {
              const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
              const hasLabel = formItemContext == null ? void 0 : formItemContext.hasLabel;
              const style = {};
              if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
                const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
                const labelPosition = formItemContext.labelPosition || formContext.labelPosition;
                const marginPosition = labelPosition === "left" ? "marginRight" : "marginLeft";
                if (marginWidth) {
                  style[marginPosition] = `${marginWidth}px`;
                }
              }
              return vue.createVNode("div", {
                "ref": el,
                "class": [ns.be("item", "label-wrap")],
                "style": style
              }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
            } else {
              return vue.createVNode(vue.Fragment, {
                "ref": el
              }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
            }
          };
        }
      });
      const __default__$i = vue.defineComponent({
        name: "ElFormItem"
      });
      const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
        ...__default__$i,
        props: formItemProps,
        setup(__props, { expose }) {
          const props = __props;
          const slots = vue.useSlots();
          const formContext = vue.inject(formContextKey, void 0);
          const parentFormItemContext = vue.inject(formItemContextKey, void 0);
          const _size = useFormSize(void 0, { formItem: false });
          const ns = useNamespace("form-item");
          const labelId = useId().value;
          const inputIds = vue.ref([]);
          const validateState = vue.ref("");
          const validateStateDebounced = refDebounced(validateState, 100);
          const validateMessage = vue.ref("");
          const formItemRef = vue.ref();
          let initialValue = void 0;
          let isResettingField = false;
          const labelPosition = vue.computed(() => props.labelPosition || (formContext == null ? void 0 : formContext.labelPosition));
          const labelStyle = vue.computed(() => {
            if (labelPosition.value === "top") {
              return {};
            }
            const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
            if (labelWidth)
              return { width: labelWidth };
            return {};
          });
          const contentStyle = vue.computed(() => {
            if (labelPosition.value === "top" || (formContext == null ? void 0 : formContext.inline)) {
              return {};
            }
            if (!props.label && !props.labelWidth && isNested) {
              return {};
            }
            const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
            if (!props.label && !slots.label) {
              return { marginLeft: labelWidth };
            }
            return {};
          });
          const formItemClasses = vue.computed(() => [
            ns.b(),
            ns.m(_size.value),
            ns.is("error", validateState.value === "error"),
            ns.is("validating", validateState.value === "validating"),
            ns.is("success", validateState.value === "success"),
            ns.is("required", isRequired.value || props.required),
            ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
            (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
            {
              [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon,
              [ns.m(`label-${labelPosition.value}`)]: labelPosition.value
            }
          ]);
          const _inlineMessage = vue.computed(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
          const validateClasses = vue.computed(() => [
            ns.e("error"),
            { [ns.em("error", "inline")]: _inlineMessage.value }
          ]);
          const propString = vue.computed(() => {
            if (!props.prop)
              return "";
            return isString(props.prop) ? props.prop : props.prop.join(".");
          });
          const hasLabel = vue.computed(() => {
            return !!(props.label || slots.label);
          });
          const labelFor = vue.computed(() => {
            return props.for || (inputIds.value.length === 1 ? inputIds.value[0] : void 0);
          });
          const isGroup = vue.computed(() => {
            return !labelFor.value && hasLabel.value;
          });
          const isNested = !!parentFormItemContext;
          const fieldValue = vue.computed(() => {
            const model = formContext == null ? void 0 : formContext.model;
            if (!model || !props.prop) {
              return;
            }
            return getProp(model, props.prop).value;
          });
          const normalizedRules = vue.computed(() => {
            const { required } = props;
            const rules2 = [];
            if (props.rules) {
              rules2.push(...castArray(props.rules));
            }
            const formRules = formContext == null ? void 0 : formContext.rules;
            if (formRules && props.prop) {
              const _rules = getProp(formRules, props.prop).value;
              if (_rules) {
                rules2.push(...castArray(_rules));
              }
            }
            if (required !== void 0) {
              const requiredRules = rules2.map((rule, i) => [rule, i]).filter(([rule]) => Object.keys(rule).includes("required"));
              if (requiredRules.length > 0) {
                for (const [rule, i] of requiredRules) {
                  if (rule.required === required)
                    continue;
                  rules2[i] = { ...rule, required };
                }
              } else {
                rules2.push({ required });
              }
            }
            return rules2;
          });
          const validateEnabled = vue.computed(() => normalizedRules.value.length > 0);
          const getFilteredRule = (trigger) => {
            const rules2 = normalizedRules.value;
            return rules2.filter((rule) => {
              if (!rule.trigger || !trigger)
                return true;
              if (isArray$1(rule.trigger)) {
                return rule.trigger.includes(trigger);
              } else {
                return rule.trigger === trigger;
              }
            }).map(({ trigger: trigger2, ...rule }) => rule);
          };
          const isRequired = vue.computed(() => normalizedRules.value.some((rule) => rule.required));
          const shouldShowError = vue.computed(() => {
            var _a2;
            return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
          });
          const currentLabel = vue.computed(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
          const setValidationState = (state) => {
            validateState.value = state;
          };
          const onValidationFailed = (error) => {
            var _a2, _b;
            const { errors, fields } = error;
            if (!errors || !fields) {
              console.error(error);
            }
            setValidationState("error");
            validateMessage.value = errors ? (_b = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b : `${props.prop} is required` : "";
            formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
          };
          const onValidationSucceeded = () => {
            setValidationState("success");
            formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
          };
          const doValidate = async (rules2) => {
            const modelName = propString.value;
            const validator = new Schema({
              [modelName]: rules2
            });
            return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
              onValidationSucceeded();
              return true;
            }).catch((err) => {
              onValidationFailed(err);
              return Promise.reject(err);
            });
          };
          const validate = async (trigger, callback) => {
            if (isResettingField || !props.prop) {
              return false;
            }
            const hasCallback = isFunction$1(callback);
            if (!validateEnabled.value) {
              callback == null ? void 0 : callback(false);
              return false;
            }
            const rules2 = getFilteredRule(trigger);
            if (rules2.length === 0) {
              callback == null ? void 0 : callback(true);
              return true;
            }
            setValidationState("validating");
            return doValidate(rules2).then(() => {
              callback == null ? void 0 : callback(true);
              return true;
            }).catch((err) => {
              const { fields } = err;
              callback == null ? void 0 : callback(false, fields);
              return hasCallback ? false : Promise.reject(fields);
            });
          };
          const clearValidate = () => {
            setValidationState("");
            validateMessage.value = "";
            isResettingField = false;
          };
          const resetField = async () => {
            const model = formContext == null ? void 0 : formContext.model;
            if (!model || !props.prop)
              return;
            const computedValue = getProp(model, props.prop);
            isResettingField = true;
            computedValue.value = clone(initialValue);
            await vue.nextTick();
            clearValidate();
            isResettingField = false;
          };
          const addInputId = (id) => {
            if (!inputIds.value.includes(id)) {
              inputIds.value.push(id);
            }
          };
          const removeInputId = (id) => {
            inputIds.value = inputIds.value.filter((listId) => listId !== id);
          };
          vue.watch(() => props.error, (val) => {
            validateMessage.value = val || "";
            setValidationState(val ? "error" : "");
          }, { immediate: true });
          vue.watch(() => props.validateStatus, (val) => setValidationState(val || ""));
          const context = vue.reactive({
            ...vue.toRefs(props),
            $el: formItemRef,
            size: _size,
            validateState,
            labelId,
            inputIds,
            isGroup,
            hasLabel,
            fieldValue,
            addInputId,
            removeInputId,
            resetField,
            clearValidate,
            validate
          });
          vue.provide(formItemContextKey, context);
          vue.onMounted(() => {
            if (props.prop) {
              formContext == null ? void 0 : formContext.addField(context);
              initialValue = clone(fieldValue.value);
            }
          });
          vue.onBeforeUnmount(() => {
            formContext == null ? void 0 : formContext.removeField(context);
          });
          expose({
            size: _size,
            validateMessage,
            validateState,
            validate,
            clearValidate,
            resetField
          });
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createElementBlock("div", {
              ref_key: "formItemRef",
              ref: formItemRef,
              class: vue.normalizeClass(vue.unref(formItemClasses)),
              role: vue.unref(isGroup) ? "group" : void 0,
              "aria-labelledby": vue.unref(isGroup) ? vue.unref(labelId) : void 0
            }, [
              vue.createVNode(vue.unref(FormLabelWrap), {
                "is-auto-width": vue.unref(labelStyle).width === "auto",
                "update-all": ((_a2 = vue.unref(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
              }, {
                default: vue.withCtx(() => [
                  vue.unref(hasLabel) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(labelFor) ? "label" : "div"), {
                    key: 0,
                    id: vue.unref(labelId),
                    for: vue.unref(labelFor),
                    class: vue.normalizeClass(vue.unref(ns).e("label")),
                    style: vue.normalizeStyle(vue.unref(labelStyle))
                  }, {
                    default: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "label", { label: vue.unref(currentLabel) }, () => [
                        vue.createTextVNode(vue.toDisplayString(vue.unref(currentLabel)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["id", "for", "class", "style"])) : vue.createCommentVNode("v-if", true)
                ]),
                _: 3
              }, 8, ["is-auto-width", "update-all"]),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("content")),
                style: vue.normalizeStyle(vue.unref(contentStyle))
              }, [
                vue.renderSlot(_ctx.$slots, "default"),
                vue.createVNode(vue.TransitionGroup, {
                  name: `${vue.unref(ns).namespace.value}-zoom-in-top`
                }, {
                  default: vue.withCtx(() => [
                    vue.unref(shouldShowError) ? vue.renderSlot(_ctx.$slots, "error", {
                      key: 0,
                      error: validateMessage.value
                    }, () => [
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass(vue.unref(validateClasses))
                      }, vue.toDisplayString(validateMessage.value), 3)
                    ]) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 8, ["name"])
              ], 6)
            ], 10, ["role", "aria-labelledby"]);
          };
        }
      });
      var FormItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "form-item.vue"]]);
      const ElForm = withInstall(Form, {
        FormItem
      });
      const ElFormItem = withNoopInstall(FormItem);
      let hiddenTextarea = void 0;
      const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  ${isFirefox() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
      const CONTEXT_STYLE = [
        "letter-spacing",
        "line-height",
        "padding-top",
        "padding-bottom",
        "font-family",
        "font-weight",
        "font-size",
        "text-rendering",
        "text-transform",
        "width",
        "text-indent",
        "padding-left",
        "padding-right",
        "border-width",
        "box-sizing"
      ];
      function calculateNodeStyling(targetElement) {
        const style = window.getComputedStyle(targetElement);
        const boxSizing = style.getPropertyValue("box-sizing");
        const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
        const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
        const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
        return { contextStyle, paddingSize, borderSize, boxSizing };
      }
      function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
        var _a2;
        if (!hiddenTextarea) {
          hiddenTextarea = document.createElement("textarea");
          document.body.appendChild(hiddenTextarea);
        }
        const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
        hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
        hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
        let height = hiddenTextarea.scrollHeight;
        const result = {};
        if (boxSizing === "border-box") {
          height = height + borderSize;
        } else if (boxSizing === "content-box") {
          height = height - paddingSize;
        }
        hiddenTextarea.value = "";
        const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (isNumber(minRows)) {
          let minHeight = singleRowHeight * minRows;
          if (boxSizing === "border-box") {
            minHeight = minHeight + paddingSize + borderSize;
          }
          height = Math.max(minHeight, height);
          result.minHeight = `${minHeight}px`;
        }
        if (isNumber(maxRows)) {
          let maxHeight = singleRowHeight * maxRows;
          if (boxSizing === "border-box") {
            maxHeight = maxHeight + paddingSize + borderSize;
          }
          height = Math.min(maxHeight, height);
        }
        result.height = `${height}px`;
        (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
        hiddenTextarea = void 0;
        return result;
      }
      const inputProps = buildProps({
        id: {
          type: String,
          default: void 0
        },
        size: useSizeProp,
        disabled: Boolean,
        modelValue: {
          type: definePropType([
            String,
            Number,
            Object
          ]),
          default: ""
        },
        maxlength: {
          type: [String, Number]
        },
        minlength: {
          type: [String, Number]
        },
        type: {
          type: String,
          default: "text"
        },
        resize: {
          type: String,
          values: ["none", "both", "horizontal", "vertical"]
        },
        autosize: {
          type: definePropType([Boolean, Object]),
          default: false
        },
        autocomplete: {
          type: String,
          default: "off"
        },
        formatter: {
          type: Function
        },
        parser: {
          type: Function
        },
        placeholder: {
          type: String
        },
        form: {
          type: String
        },
        readonly: Boolean,
        clearable: Boolean,
        showPassword: Boolean,
        showWordLimit: Boolean,
        suffixIcon: {
          type: iconPropType
        },
        prefixIcon: {
          type: iconPropType
        },
        containerRole: {
          type: String,
          default: void 0
        },
        tabindex: {
          type: [String, Number],
          default: 0
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        inputStyle: {
          type: definePropType([Object, Array, String]),
          default: () => mutable({})
        },
        autofocus: Boolean,
        rows: {
          type: Number,
          default: 2
        },
        ...useAriaProps(["ariaLabel"])
      });
      const inputEmits = {
        [UPDATE_MODEL_EVENT]: (value) => isString(value),
        input: (value) => isString(value),
        change: (value) => isString(value),
        focus: (evt) => evt instanceof FocusEvent,
        blur: (evt) => evt instanceof FocusEvent,
        clear: () => true,
        mouseleave: (evt) => evt instanceof MouseEvent,
        mouseenter: (evt) => evt instanceof MouseEvent,
        keydown: (evt) => evt instanceof Event,
        compositionstart: (evt) => evt instanceof CompositionEvent,
        compositionupdate: (evt) => evt instanceof CompositionEvent,
        compositionend: (evt) => evt instanceof CompositionEvent
      };
      const __default__$h = vue.defineComponent({
        name: "ElInput",
        inheritAttrs: false
      });
      const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
        ...__default__$h,
        props: inputProps,
        emits: inputEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const rawAttrs = vue.useAttrs();
          const attrs = useAttrs();
          const slots = vue.useSlots();
          const containerKls = vue.computed(() => [
            props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
            nsInput.m(inputSize.value),
            nsInput.is("disabled", inputDisabled.value),
            nsInput.is("exceed", inputExceed.value),
            {
              [nsInput.b("group")]: slots.prepend || slots.append,
              [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
              [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
              [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
              [nsInput.b("hidden")]: props.type === "hidden"
            },
            rawAttrs.class
          ]);
          const wrapperKls = vue.computed(() => [
            nsInput.e("wrapper"),
            nsInput.is("focus", isFocused.value)
          ]);
          const { form: elForm, formItem: elFormItem } = useFormItem();
          const { inputId } = useFormItemInputId(props, {
            formItemContext: elFormItem
          });
          const inputSize = useFormSize();
          const inputDisabled = useFormDisabled();
          const nsInput = useNamespace("input");
          const nsTextarea = useNamespace("textarea");
          const input = vue.shallowRef();
          const textarea = vue.shallowRef();
          const hovering = vue.ref(false);
          const passwordVisible = vue.ref(false);
          const countStyle = vue.ref();
          const textareaCalcStyle = vue.shallowRef(props.inputStyle);
          const _ref = vue.computed(() => input.value || textarea.value);
          const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
            beforeFocus() {
              return inputDisabled.value;
            },
            afterBlur() {
              var _a2;
              if (props.validateEvent) {
                (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "blur").catch((err) => debugWarn());
              }
            }
          });
          const needStatusIcon = vue.computed(() => {
            var _a2;
            return (_a2 = elForm == null ? void 0 : elForm.statusIcon) != null ? _a2 : false;
          });
          const validateState = vue.computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
          const validateIcon = vue.computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
          const passwordIcon = vue.computed(() => passwordVisible.value ? view_default : hide_default);
          const containerStyle = vue.computed(() => [
            rawAttrs.style
          ]);
          const textareaStyle = vue.computed(() => [
            props.inputStyle,
            textareaCalcStyle.value,
            { resize: props.resize }
          ]);
          const nativeInputValue = vue.computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
          const showClear = vue.computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
          const showPwdVisible = vue.computed(() => props.showPassword && !inputDisabled.value && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
          const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
          const textLength = vue.computed(() => nativeInputValue.value.length);
          const inputExceed = vue.computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
          const suffixVisible = vue.computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
          const [recordCursor, setCursor] = useCursor(input);
          useResizeObserver(textarea, (entries) => {
            onceInitSizeTextarea();
            if (!isWordLimitVisible.value || props.resize !== "both")
              return;
            const entry = entries[0];
            const { width } = entry.contentRect;
            countStyle.value = {
              right: `calc(100% - ${width + 15 + 6}px)`
            };
          });
          const resizeTextarea = () => {
            const { type, autosize } = props;
            if (!isClient || type !== "textarea" || !textarea.value)
              return;
            if (autosize) {
              const minRows = isObject$1(autosize) ? autosize.minRows : void 0;
              const maxRows = isObject$1(autosize) ? autosize.maxRows : void 0;
              const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
              textareaCalcStyle.value = {
                overflowY: "hidden",
                ...textareaStyle2
              };
              vue.nextTick(() => {
                textarea.value.offsetHeight;
                textareaCalcStyle.value = textareaStyle2;
              });
            } else {
              textareaCalcStyle.value = {
                minHeight: calcTextareaHeight(textarea.value).minHeight
              };
            }
          };
          const createOnceInitResize = (resizeTextarea2) => {
            let isInit = false;
            return () => {
              var _a2;
              if (isInit || !props.autosize)
                return;
              const isElHidden = ((_a2 = textarea.value) == null ? void 0 : _a2.offsetParent) === null;
              if (!isElHidden) {
                resizeTextarea2();
                isInit = true;
              }
            };
          };
          const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
          const setNativeInputValue = () => {
            const input2 = _ref.value;
            const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
            if (!input2 || input2.value === formatterValue)
              return;
            input2.value = formatterValue;
          };
          const handleInput = async (event) => {
            recordCursor();
            let { value } = event.target;
            if (props.formatter) {
              value = props.parser ? props.parser(value) : value;
            }
            if (isComposing.value)
              return;
            if (value === nativeInputValue.value) {
              setNativeInputValue();
              return;
            }
            emit(UPDATE_MODEL_EVENT, value);
            emit("input", value);
            await vue.nextTick();
            setNativeInputValue();
            setCursor();
          };
          const handleChange = (event) => {
            emit("change", event.target.value);
          };
          const {
            isComposing,
            handleCompositionStart,
            handleCompositionUpdate,
            handleCompositionEnd
          } = useComposition({ emit, afterComposition: handleInput });
          const handlePasswordVisible = () => {
            passwordVisible.value = !passwordVisible.value;
            focus();
          };
          const focus = async () => {
            var _a2;
            await vue.nextTick();
            (_a2 = _ref.value) == null ? void 0 : _a2.focus();
          };
          const blur = () => {
            var _a2;
            return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
          };
          const handleMouseLeave = (evt) => {
            hovering.value = false;
            emit("mouseleave", evt);
          };
          const handleMouseEnter = (evt) => {
            hovering.value = true;
            emit("mouseenter", evt);
          };
          const handleKeydown = (evt) => {
            emit("keydown", evt);
          };
          const select = () => {
            var _a2;
            (_a2 = _ref.value) == null ? void 0 : _a2.select();
          };
          const clear = () => {
            emit(UPDATE_MODEL_EVENT, "");
            emit("change", "");
            emit("clear");
            emit("input", "");
          };
          vue.watch(() => props.modelValue, () => {
            var _a2;
            vue.nextTick(() => resizeTextarea());
            if (props.validateEvent) {
              (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change").catch((err) => debugWarn());
            }
          });
          vue.watch(nativeInputValue, () => setNativeInputValue());
          vue.watch(() => props.type, async () => {
            await vue.nextTick();
            setNativeInputValue();
            resizeTextarea();
          });
          vue.onMounted(() => {
            if (!props.formatter && props.parser) ;
            setNativeInputValue();
            vue.nextTick(resizeTextarea);
          });
          expose({
            input,
            textarea,
            ref: _ref,
            textareaStyle,
            autosize: vue.toRef(props, "autosize"),
            isComposing,
            focus,
            blur,
            select,
            clear,
            resizeTextarea
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass([
                vue.unref(containerKls),
                {
                  [vue.unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
                  [vue.unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
                }
              ]),
              style: vue.normalizeStyle(vue.unref(containerStyle)),
              onMouseenter: handleMouseEnter,
              onMouseleave: handleMouseLeave
            }, [
              vue.createCommentVNode(" input "),
              _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createCommentVNode(" prepend slot "),
                _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(nsInput).be("group", "prepend"))
                }, [
                  vue.renderSlot(_ctx.$slots, "prepend")
                ], 2)) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("div", {
                  ref_key: "wrapperRef",
                  ref: wrapperRef,
                  class: vue.normalizeClass(vue.unref(wrapperKls))
                }, [
                  vue.createCommentVNode(" prefix slot "),
                  _ctx.$slots.prefix || _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(nsInput).e("prefix"))
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(vue.unref(nsInput).e("prefix-inner"))
                    }, [
                      vue.renderSlot(_ctx.$slots, "prefix"),
                      _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 0,
                        class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.prefixIcon)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                    ], 2)
                  ], 2)) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("input", vue.mergeProps({
                    id: vue.unref(inputId),
                    ref_key: "input",
                    ref: input,
                    class: vue.unref(nsInput).e("inner")
                  }, vue.unref(attrs), {
                    minlength: _ctx.minlength,
                    maxlength: _ctx.maxlength,
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                    disabled: vue.unref(inputDisabled),
                    readonly: _ctx.readonly,
                    autocomplete: _ctx.autocomplete,
                    tabindex: _ctx.tabindex,
                    "aria-label": _ctx.ariaLabel,
                    placeholder: _ctx.placeholder,
                    style: _ctx.inputStyle,
                    form: _ctx.form,
                    autofocus: _ctx.autofocus,
                    role: _ctx.containerRole,
                    onCompositionstart: vue.unref(handleCompositionStart),
                    onCompositionupdate: vue.unref(handleCompositionUpdate),
                    onCompositionend: vue.unref(handleCompositionEnd),
                    onInput: handleInput,
                    onChange: handleChange,
                    onKeydown: handleKeydown
                  }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
                  vue.createCommentVNode(" suffix slot "),
                  vue.unref(suffixVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(nsInput).e("suffix"))
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(vue.unref(nsInput).e("suffix-inner"))
                    }, [
                      !vue.unref(showClear) || !vue.unref(showPwdVisible) || !vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                        vue.renderSlot(_ctx.$slots, "suffix"),
                        _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                          key: 0,
                          class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.suffixIcon)))
                          ]),
                          _: 1
                        }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                      ], 64)) : vue.createCommentVNode("v-if", true),
                      vue.unref(showClear) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 1,
                        class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("clear")]),
                        onMousedown: vue.withModifiers(vue.unref(NOOP), ["prevent"]),
                        onClick: clear
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(circle_close_default))
                        ]),
                        _: 1
                      }, 8, ["class", "onMousedown"])) : vue.createCommentVNode("v-if", true),
                      vue.unref(showPwdVisible) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 2,
                        class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("password")]),
                        onClick: handlePasswordVisible
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(passwordIcon))))
                        ]),
                        _: 1
                      }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                      vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                        key: 3,
                        class: vue.normalizeClass(vue.unref(nsInput).e("count"))
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass(vue.unref(nsInput).e("count-inner"))
                        }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(_ctx.maxlength), 3)
                      ], 2)) : vue.createCommentVNode("v-if", true),
                      vue.unref(validateState) && vue.unref(validateIcon) && vue.unref(needStatusIcon) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 4,
                        class: vue.normalizeClass([
                          vue.unref(nsInput).e("icon"),
                          vue.unref(nsInput).e("validateIcon"),
                          vue.unref(nsInput).is("loading", vue.unref(validateState) === "validating")
                        ])
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(validateIcon))))
                        ]),
                        _: 1
                      }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                    ], 2)
                  ], 2)) : vue.createCommentVNode("v-if", true)
                ], 2),
                vue.createCommentVNode(" append slot "),
                _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 1,
                  class: vue.normalizeClass(vue.unref(nsInput).be("group", "append"))
                }, [
                  vue.renderSlot(_ctx.$slots, "append")
                ], 2)) : vue.createCommentVNode("v-if", true)
              ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createCommentVNode(" textarea "),
                vue.createElementVNode("textarea", vue.mergeProps({
                  id: vue.unref(inputId),
                  ref_key: "textarea",
                  ref: textarea,
                  class: [vue.unref(nsTextarea).e("inner"), vue.unref(nsInput).is("focus", vue.unref(isFocused))]
                }, vue.unref(attrs), {
                  minlength: _ctx.minlength,
                  maxlength: _ctx.maxlength,
                  tabindex: _ctx.tabindex,
                  disabled: vue.unref(inputDisabled),
                  readonly: _ctx.readonly,
                  autocomplete: _ctx.autocomplete,
                  style: vue.unref(textareaStyle),
                  "aria-label": _ctx.ariaLabel,
                  placeholder: _ctx.placeholder,
                  form: _ctx.form,
                  autofocus: _ctx.autofocus,
                  rows: _ctx.rows,
                  role: _ctx.containerRole,
                  onCompositionstart: vue.unref(handleCompositionStart),
                  onCompositionupdate: vue.unref(handleCompositionUpdate),
                  onCompositionend: vue.unref(handleCompositionEnd),
                  onInput: handleInput,
                  onFocus: vue.unref(handleFocus),
                  onBlur: vue.unref(handleBlur),
                  onChange: handleChange,
                  onKeydown: handleKeydown
                }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
                vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  style: vue.normalizeStyle(countStyle.value),
                  class: vue.normalizeClass(vue.unref(nsInput).e("count"))
                }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(_ctx.maxlength), 7)) : vue.createCommentVNode("v-if", true)
              ], 64))
            ], 38);
          };
        }
      });
      var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "input.vue"]]);
      const ElInput = withInstall(Input);
      const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
      const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
      const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
      const FOCUS_AFTER_TRAPPED_OPTS = {
        cancelable: true,
        bubbles: false
      };
      const FOCUSOUT_PREVENTED_OPTS = {
        cancelable: true,
        bubbles: false
      };
      const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
      const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
      const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
      const focusReason = vue.ref();
      const lastUserFocusTimestamp = vue.ref(0);
      const lastAutomatedFocusTimestamp = vue.ref(0);
      let focusReasonUserCount = 0;
      const obtainAllFocusableElements = (element) => {
        const nodes = [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (node) => {
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput)
              return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        });
        while (walker.nextNode())
          nodes.push(walker.currentNode);
        return nodes;
      };
      const getVisibleElement = (elements, container) => {
        for (const element of elements) {
          if (!isHidden(element, container))
            return element;
        }
      };
      const isHidden = (element, container) => {
        if (getComputedStyle(element).visibility === "hidden")
          return true;
        while (element) {
          if (container && element === container)
            return false;
          if (getComputedStyle(element).display === "none")
            return true;
          element = element.parentElement;
        }
        return false;
      };
      const getEdges = (container) => {
        const focusable = obtainAllFocusableElements(container);
        const first = getVisibleElement(focusable, container);
        const last = getVisibleElement(focusable.reverse(), container);
        return [first, last];
      };
      const isSelectable = (element) => {
        return element instanceof HTMLInputElement && "select" in element;
      };
      const tryFocus = (element, shouldSelect) => {
        if (element && element.focus) {
          const prevFocusedElement = document.activeElement;
          element.focus({ preventScroll: true });
          lastAutomatedFocusTimestamp.value = window.performance.now();
          if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
            element.select();
          }
        }
      };
      function removeFromStack(list, item) {
        const copy = [...list];
        const idx = list.indexOf(item);
        if (idx !== -1) {
          copy.splice(idx, 1);
        }
        return copy;
      }
      const createFocusableStack = () => {
        let stack = [];
        const push = (layer) => {
          const currentLayer = stack[0];
          if (currentLayer && layer !== currentLayer) {
            currentLayer.pause();
          }
          stack = removeFromStack(stack, layer);
          stack.unshift(layer);
        };
        const remove = (layer) => {
          var _a2, _b;
          stack = removeFromStack(stack, layer);
          (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
        };
        return {
          push,
          remove
        };
      };
      const focusFirstDescendant = (elements, shouldSelect = false) => {
        const prevFocusedElement = document.activeElement;
        for (const element of elements) {
          tryFocus(element, shouldSelect);
          if (document.activeElement !== prevFocusedElement)
            return;
        }
      };
      const focusableStack = createFocusableStack();
      const isFocusCausedByUserEvent = () => {
        return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
      };
      const notifyFocusReasonPointer = () => {
        focusReason.value = "pointer";
        lastUserFocusTimestamp.value = window.performance.now();
      };
      const notifyFocusReasonKeydown = () => {
        focusReason.value = "keyboard";
        lastUserFocusTimestamp.value = window.performance.now();
      };
      const useFocusReason = () => {
        vue.onMounted(() => {
          if (focusReasonUserCount === 0) {
            document.addEventListener("mousedown", notifyFocusReasonPointer);
            document.addEventListener("touchstart", notifyFocusReasonPointer);
            document.addEventListener("keydown", notifyFocusReasonKeydown);
          }
          focusReasonUserCount++;
        });
        vue.onBeforeUnmount(() => {
          focusReasonUserCount--;
          if (focusReasonUserCount <= 0) {
            document.removeEventListener("mousedown", notifyFocusReasonPointer);
            document.removeEventListener("touchstart", notifyFocusReasonPointer);
            document.removeEventListener("keydown", notifyFocusReasonKeydown);
          }
        });
        return {
          focusReason,
          lastUserFocusTimestamp,
          lastAutomatedFocusTimestamp
        };
      };
      const createFocusOutPreventedEvent = (detail) => {
        return new CustomEvent(FOCUSOUT_PREVENTED, {
          ...FOCUSOUT_PREVENTED_OPTS,
          detail
        });
      };
      const _sfc_main$p = vue.defineComponent({
        name: "ElFocusTrap",
        inheritAttrs: false,
        props: {
          loop: Boolean,
          trapped: Boolean,
          focusTrapEl: Object,
          focusStartEl: {
            type: [Object, String],
            default: "first"
          }
        },
        emits: [
          ON_TRAP_FOCUS_EVT,
          ON_RELEASE_FOCUS_EVT,
          "focusin",
          "focusout",
          "focusout-prevented",
          "release-requested"
        ],
        setup(props, { emit }) {
          const forwardRef = vue.ref();
          let lastFocusBeforeTrapped;
          let lastFocusAfterTrapped;
          const { focusReason: focusReason2 } = useFocusReason();
          useEscapeKeydown((event) => {
            if (props.trapped && !focusLayer.paused) {
              emit("release-requested", event);
            }
          });
          const focusLayer = {
            paused: false,
            pause() {
              this.paused = true;
            },
            resume() {
              this.paused = false;
            }
          };
          const onKeydown = (e) => {
            if (!props.loop && !props.trapped)
              return;
            if (focusLayer.paused)
              return;
            const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
            const { loop } = props;
            const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
            const currentFocusingEl = document.activeElement;
            if (isTabbing && currentFocusingEl) {
              const container = currentTarget;
              const [first, last] = getEdges(container);
              const isTabbable = first && last;
              if (!isTabbable) {
                if (currentFocusingEl === container) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                  }
                }
              } else {
                if (!shiftKey && currentFocusingEl === last) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                    if (loop)
                      tryFocus(first, true);
                  }
                } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                    if (loop)
                      tryFocus(last, true);
                  }
                }
              }
            }
          };
          vue.provide(FOCUS_TRAP_INJECTION_KEY, {
            focusTrapRef: forwardRef,
            onKeydown
          });
          vue.watch(() => props.focusTrapEl, (focusTrapEl) => {
            if (focusTrapEl) {
              forwardRef.value = focusTrapEl;
            }
          }, { immediate: true });
          vue.watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
            if (forwardRef2) {
              forwardRef2.addEventListener("keydown", onKeydown);
              forwardRef2.addEventListener("focusin", onFocusIn);
              forwardRef2.addEventListener("focusout", onFocusOut);
            }
            if (oldForwardRef) {
              oldForwardRef.removeEventListener("keydown", onKeydown);
              oldForwardRef.removeEventListener("focusin", onFocusIn);
              oldForwardRef.removeEventListener("focusout", onFocusOut);
            }
          });
          const trapOnFocus = (e) => {
            emit(ON_TRAP_FOCUS_EVT, e);
          };
          const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
          const onFocusIn = (e) => {
            const trapContainer = vue.unref(forwardRef);
            if (!trapContainer)
              return;
            const target = e.target;
            const relatedTarget = e.relatedTarget;
            const isFocusedInTrap = target && trapContainer.contains(target);
            if (!props.trapped) {
              const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
              if (!isPrevFocusedInTrap) {
                lastFocusBeforeTrapped = relatedTarget;
              }
            }
            if (isFocusedInTrap)
              emit("focusin", e);
            if (focusLayer.paused)
              return;
            if (props.trapped) {
              if (isFocusedInTrap) {
                lastFocusAfterTrapped = target;
              } else {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          };
          const onFocusOut = (e) => {
            const trapContainer = vue.unref(forwardRef);
            if (focusLayer.paused || !trapContainer)
              return;
            if (props.trapped) {
              const relatedTarget = e.relatedTarget;
              if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
                setTimeout(() => {
                  if (!focusLayer.paused && props.trapped) {
                    const focusoutPreventedEvent = createFocusOutPreventedEvent({
                      focusReason: focusReason2.value
                    });
                    emit("focusout-prevented", focusoutPreventedEvent);
                    if (!focusoutPreventedEvent.defaultPrevented) {
                      tryFocus(lastFocusAfterTrapped, true);
                    }
                  }
                }, 0);
              }
            } else {
              const target = e.target;
              const isFocusedInTrap = target && trapContainer.contains(target);
              if (!isFocusedInTrap)
                emit("focusout", e);
            }
          };
          async function startTrap() {
            await vue.nextTick();
            const trapContainer = vue.unref(forwardRef);
            if (trapContainer) {
              focusableStack.push(focusLayer);
              const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
              lastFocusBeforeTrapped = prevFocusedElement;
              const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
              if (!isPrevFocusContained) {
                const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
                trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
                trapContainer.dispatchEvent(focusEvent);
                if (!focusEvent.defaultPrevented) {
                  vue.nextTick(() => {
                    let focusStartEl = props.focusStartEl;
                    if (!isString(focusStartEl)) {
                      tryFocus(focusStartEl);
                      if (document.activeElement !== focusStartEl) {
                        focusStartEl = "first";
                      }
                    }
                    if (focusStartEl === "first") {
                      focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
                    }
                    if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                      tryFocus(trapContainer);
                    }
                  });
                }
              }
            }
          }
          function stopTrap() {
            const trapContainer = vue.unref(forwardRef);
            if (trapContainer) {
              trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
              const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
                ...FOCUS_AFTER_TRAPPED_OPTS,
                detail: {
                  focusReason: focusReason2.value
                }
              });
              trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
              trapContainer.dispatchEvent(releasedEvent);
              if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
                tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
              }
              trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
              focusableStack.remove(focusLayer);
            }
          }
          vue.onMounted(() => {
            if (props.trapped) {
              startTrap();
            }
            vue.watch(() => props.trapped, (trapped) => {
              if (trapped) {
                startTrap();
              } else {
                stopTrap();
              }
            });
          });
          vue.onBeforeUnmount(() => {
            if (props.trapped) {
              stopTrap();
            }
            if (forwardRef.value) {
              forwardRef.value.removeEventListener("keydown", onKeydown);
              forwardRef.value.removeEventListener("focusin", onFocusIn);
              forwardRef.value.removeEventListener("focusout", onFocusOut);
              forwardRef.value = void 0;
            }
          });
          return {
            onKeydown
          };
        }
      });
      function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
      }
      var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
      const teleportProps = buildProps({
        to: {
          type: definePropType([String, Object]),
          required: true
        },
        disabled: Boolean
      });
      const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
        __name: "teleport",
        props: teleportProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return _ctx.disabled ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.Teleport, {
              key: 1,
              to: _ctx.to
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 8, ["to"]));
          };
        }
      });
      var Teleport = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "teleport.vue"]]);
      const ElTeleport = withInstall(Teleport);
      const badgeProps = buildProps({
        value: {
          type: [String, Number],
          default: ""
        },
        max: {
          type: Number,
          default: 99
        },
        isDot: Boolean,
        hidden: Boolean,
        type: {
          type: String,
          values: ["primary", "success", "warning", "info", "danger"],
          default: "danger"
        },
        showZero: {
          type: Boolean,
          default: true
        },
        color: String,
        badgeStyle: {
          type: definePropType([String, Object, Array])
        },
        offset: {
          type: definePropType(Array),
          default: [0, 0]
        },
        badgeClass: {
          type: String
        }
      });
      const __default__$g = vue.defineComponent({
        name: "ElBadge"
      });
      const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
        ...__default__$g,
        props: badgeProps,
        setup(__props, { expose }) {
          const props = __props;
          const ns = useNamespace("badge");
          const content = vue.computed(() => {
            if (props.isDot)
              return "";
            if (isNumber(props.value) && isNumber(props.max)) {
              return props.max < props.value ? `${props.max}+` : `${props.value}`;
            }
            return `${props.value}`;
          });
          const style = vue.computed(() => {
            var _a2, _b, _c, _d, _e;
            return [
              {
                backgroundColor: props.color,
                marginRight: addUnit(-((_b = (_a2 = props.offset) == null ? void 0 : _a2[0]) != null ? _b : 0)),
                marginTop: addUnit((_d = (_c = props.offset) == null ? void 0 : _c[1]) != null ? _d : 0)
              },
              (_e = props.badgeStyle) != null ? _e : {}
            ];
          });
          expose({
            content
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass(vue.unref(ns).b())
            }, [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.createVNode(vue.Transition, {
                name: `${vue.unref(ns).namespace.value}-zoom-in-center`,
                persisted: ""
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode("sup", {
                    class: vue.normalizeClass([
                      vue.unref(ns).e("content"),
                      vue.unref(ns).em("content", _ctx.type),
                      vue.unref(ns).is("fixed", !!_ctx.$slots.default),
                      vue.unref(ns).is("dot", _ctx.isDot),
                      vue.unref(ns).is("hide-zero", !_ctx.showZero && props.value === 0),
                      _ctx.badgeClass
                    ]),
                    style: vue.normalizeStyle(vue.unref(style)),
                    textContent: vue.toDisplayString(vue.unref(content))
                  }, null, 14, ["textContent"]), [
                    [vue.vShow, !_ctx.hidden && (vue.unref(content) || _ctx.isDot)]
                  ])
                ]),
                _: 1
              }, 8, ["name"])
            ], 2);
          };
        }
      });
      var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "badge.vue"]]);
      const ElBadge = withInstall(Badge);
      const buttonGroupContextKey = Symbol("buttonGroupContextKey");
      const useButton = (props, emit) => {
        useDeprecated({
          from: "type.text",
          replacement: "link",
          version: "3.0.0",
          scope: "props",
          ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
        }, vue.computed(() => props.type === "text"));
        const buttonGroupContext = vue.inject(buttonGroupContextKey, void 0);
        const globalConfig2 = useGlobalConfig("button");
        const { form } = useFormItem();
        const _size = useFormSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
        const _disabled = useFormDisabled();
        const _ref = vue.ref();
        const slots = vue.useSlots();
        const _type = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
        const autoInsertSpace = vue.computed(() => {
          var _a2, _b, _c;
          return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
        });
        const _props = vue.computed(() => {
          if (props.tag === "button") {
            return {
              ariaDisabled: _disabled.value || props.loading,
              disabled: _disabled.value || props.loading,
              autofocus: props.autofocus,
              type: props.nativeType
            };
          }
          return {};
        });
        const shouldAddSpace = vue.computed(() => {
          var _a2;
          const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
          if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
            const slot = defaultSlot[0];
            if ((slot == null ? void 0 : slot.type) === vue.Text) {
              const text = slot.children;
              return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
            }
          }
          return false;
        });
        const handleClick = (evt) => {
          if (_disabled.value || props.loading) {
            evt.stopPropagation();
            return;
          }
          if (props.nativeType === "reset") {
            form == null ? void 0 : form.resetFields();
          }
          emit("click", evt);
        };
        return {
          _disabled,
          _size,
          _type,
          _ref,
          _props,
          shouldAddSpace,
          handleClick
        };
      };
      const buttonTypes = [
        "default",
        "primary",
        "success",
        "warning",
        "info",
        "danger",
        "text",
        ""
      ];
      const buttonNativeTypes = ["button", "submit", "reset"];
      const buttonProps = buildProps({
        size: useSizeProp,
        disabled: Boolean,
        type: {
          type: String,
          values: buttonTypes,
          default: ""
        },
        icon: {
          type: iconPropType
        },
        nativeType: {
          type: String,
          values: buttonNativeTypes,
          default: "button"
        },
        loading: Boolean,
        loadingIcon: {
          type: iconPropType,
          default: () => loading_default
        },
        plain: Boolean,
        text: Boolean,
        link: Boolean,
        bg: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        color: String,
        dark: Boolean,
        autoInsertSpace: {
          type: Boolean,
          default: void 0
        },
        tag: {
          type: definePropType([String, Object]),
          default: "button"
        }
      });
      const buttonEmits = {
        click: (evt) => evt instanceof MouseEvent
      };
      function bound01(n, max) {
        if (isOnePointZero(n)) {
          n = "100%";
        }
        var isPercent = isPercentage(n);
        n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
        if (isPercent) {
          n = parseInt(String(n * max), 10) / 100;
        }
        if (Math.abs(n - max) < 1e-6) {
          return 1;
        }
        if (max === 360) {
          n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
        } else {
          n = n % max / parseFloat(String(max));
        }
        return n;
      }
      function clamp01(val) {
        return Math.min(1, Math.max(0, val));
      }
      function isOnePointZero(n) {
        return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
      }
      function isPercentage(n) {
        return typeof n === "string" && n.indexOf("%") !== -1;
      }
      function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
        }
        return a;
      }
      function convertToPercentage(n) {
        if (n <= 1) {
          return "".concat(Number(n) * 100, "%");
        }
        return n;
      }
      function pad2(c) {
        return c.length === 1 ? "0" + c : String(c);
      }
      function rgbToRgb(r, g, b) {
        return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
        };
      }
      function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h2 = 0;
        var s = 0;
        var l = (max + min) / 2;
        if (max === min) {
          s = 0;
          h2 = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h2 = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h2 = (b - r) / d + 2;
              break;
            case b:
              h2 = (r - g) / d + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s, l };
      }
      function hue2rgb(p, q, t) {
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * (6 * t);
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      }
      function hslToRgb(h2, s, l) {
        var r;
        var g;
        var b;
        h2 = bound01(h2, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        if (s === 0) {
          g = l;
          b = l;
          r = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h2 + 1 / 3);
          g = hue2rgb(p, q, h2);
          b = hue2rgb(p, q, h2 - 1 / 3);
        }
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h2 = 0;
        var v = max;
        var d = max - min;
        var s = max === 0 ? 0 : d / max;
        if (max === min) {
          h2 = 0;
        } else {
          switch (max) {
            case r:
              h2 = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h2 = (b - r) / d + 2;
              break;
            case b:
              h2 = (r - g) / d + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s, v };
      }
      function hsvToRgb(h2, s, v) {
        h2 = bound01(h2, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = Math.floor(h2);
        var f = h2 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        var mod = i % 6;
        var r = [v, q, p, p, t, v][mod];
        var g = [t, v, v, q, p, p][mod];
        var b = [p, p, t, v, v, q][mod];
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHex(r, g, b, allow3Char) {
        var hex2 = [
          pad2(Math.round(r).toString(16)),
          pad2(Math.round(g).toString(16)),
          pad2(Math.round(b).toString(16))
        ];
        if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
          return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
        }
        return hex2.join("");
      }
      function rgbaToHex(r, g, b, a, allow4Char) {
        var hex2 = [
          pad2(Math.round(r).toString(16)),
          pad2(Math.round(g).toString(16)),
          pad2(Math.round(b).toString(16)),
          pad2(convertDecimalToHex(a))
        ];
        if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
          return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
        }
        return hex2.join("");
      }
      function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
      }
      function convertHexToDecimal(h2) {
        return parseIntFromHex(h2) / 255;
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function numberInputToObject(color) {
        return {
          r: color >> 16,
          g: (color & 65280) >> 8,
          b: color & 255
        };
      }
      var names = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format2 = false;
        if (typeof color === "string") {
          color = stringInputToObject(color);
        }
        if (typeof color === "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format2 = "hsv";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format2 = "hsl";
          }
          if (Object.prototype.hasOwnProperty.call(color, "a")) {
            a = color.a;
          }
        }
        a = boundAlpha(a);
        return {
          ok,
          format: color.format || format2,
          r: Math.min(255, Math.max(rgb.r, 0)),
          g: Math.min(255, Math.max(rgb.g, 0)),
          b: Math.min(255, Math.max(rgb.b, 0)),
          a
        };
      }
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var matchers = {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
      function stringInputToObject(color) {
        color = color.trim().toLowerCase();
        if (color.length === 0) {
          return false;
        }
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else if (color === "transparent") {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        var match = matchers.rgb.exec(color);
        if (match) {
          return { r: match[1], g: match[2], b: match[3] };
        }
        match = matchers.rgba.exec(color);
        if (match) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        match = matchers.hsl.exec(color);
        if (match) {
          return { h: match[1], s: match[2], l: match[3] };
        }
        match = matchers.hsla.exec(color);
        if (match) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        match = matchers.hsv.exec(color);
        if (match) {
          return { h: match[1], s: match[2], v: match[3] };
        }
        match = matchers.hsva.exec(color);
        if (match) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        match = matchers.hex8.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
          };
        }
        match = matchers.hex6.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
          };
        }
        match = matchers.hex4.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? "name" : "hex8"
          };
        }
        match = matchers.hex3.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? "name" : "hex"
          };
        }
        return false;
      }
      function isValidCSSUnit(color) {
        return Boolean(matchers.CSS_UNIT.exec(String(color)));
      }
      var TinyColor = (
        /** @class */
        function() {
          function TinyColor2(color, opts) {
            if (color === void 0) {
              color = "";
            }
            if (opts === void 0) {
              opts = {};
            }
            var _a2;
            if (color instanceof TinyColor2) {
              return color;
            }
            if (typeof color === "number") {
              color = numberInputToObject(color);
            }
            this.originalInput = color;
            var rgb = inputToRGB(color);
            this.originalInput = color;
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
            this.a = rgb.a;
            this.roundA = Math.round(100 * this.a) / 100;
            this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
            this.gradientType = opts.gradientType;
            if (this.r < 1) {
              this.r = Math.round(this.r);
            }
            if (this.g < 1) {
              this.g = Math.round(this.g);
            }
            if (this.b < 1) {
              this.b = Math.round(this.b);
            }
            this.isValid = rgb.ok;
          }
          TinyColor2.prototype.isDark = function() {
            return this.getBrightness() < 128;
          };
          TinyColor2.prototype.isLight = function() {
            return !this.isDark();
          };
          TinyColor2.prototype.getBrightness = function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
          };
          TinyColor2.prototype.getLuminance = function() {
            var rgb = this.toRgb();
            var R;
            var G;
            var B;
            var RsRGB = rgb.r / 255;
            var GsRGB = rgb.g / 255;
            var BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) {
              R = RsRGB / 12.92;
            } else {
              R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
              G = GsRGB / 12.92;
            } else {
              G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
              B = BsRGB / 12.92;
            } else {
              B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
          };
          TinyColor2.prototype.getAlpha = function() {
            return this.a;
          };
          TinyColor2.prototype.setAlpha = function(alpha) {
            this.a = boundAlpha(alpha);
            this.roundA = Math.round(100 * this.a) / 100;
            return this;
          };
          TinyColor2.prototype.isMonochrome = function() {
            var s = this.toHsl().s;
            return s === 0;
          };
          TinyColor2.prototype.toHsv = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
          };
          TinyColor2.prototype.toHsvString = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            var h2 = Math.round(hsv.h * 360);
            var s = Math.round(hsv.s * 100);
            var v = Math.round(hsv.v * 100);
            return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHsl = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
          };
          TinyColor2.prototype.toHslString = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            var h2 = Math.round(hsl.h * 360);
            var s = Math.round(hsl.s * 100);
            var l = Math.round(hsl.l * 100);
            return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHex = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return rgbToHex(this.r, this.g, this.b, allow3Char);
          };
          TinyColor2.prototype.toHexString = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return "#" + this.toHex(allow3Char);
          };
          TinyColor2.prototype.toHex8 = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
          };
          TinyColor2.prototype.toHex8String = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return "#" + this.toHex8(allow4Char);
          };
          TinyColor2.prototype.toHexShortString = function(allowShortChar) {
            if (allowShortChar === void 0) {
              allowShortChar = false;
            }
            return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
          };
          TinyColor2.prototype.toRgb = function() {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toRgbString = function() {
            var r = Math.round(this.r);
            var g = Math.round(this.g);
            var b = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toPercentageRgb = function() {
            var fmt = function(x) {
              return "".concat(Math.round(bound01(x, 255) * 100), "%");
            };
            return {
              r: fmt(this.r),
              g: fmt(this.g),
              b: fmt(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toPercentageRgbString = function() {
            var rnd = function(x) {
              return Math.round(bound01(x, 255) * 100);
            };
            return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toName = function() {
            if (this.a === 0) {
              return "transparent";
            }
            if (this.a < 1) {
              return false;
            }
            var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
            for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
              var _b = _a2[_i], key = _b[0], value = _b[1];
              if (hex2 === value) {
                return key;
              }
            }
            return false;
          };
          TinyColor2.prototype.toString = function(format2) {
            var formatSet = Boolean(format2);
            format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
            var formattedString = false;
            var hasAlpha = this.a < 1 && this.a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
            if (needsAlphaFormat) {
              if (format2 === "name" && this.a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format2 === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format2 === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format2 === "hex" || format2 === "hex6") {
              formattedString = this.toHexString();
            }
            if (format2 === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format2 === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format2 === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format2 === "name") {
              formattedString = this.toName();
            }
            if (format2 === "hsl") {
              formattedString = this.toHslString();
            }
            if (format2 === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          };
          TinyColor2.prototype.toNumber = function() {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
          };
          TinyColor2.prototype.clone = function() {
            return new TinyColor2(this.toString());
          };
          TinyColor2.prototype.lighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.brighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var rgb = this.toRgb();
            rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
            rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
            rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
            return new TinyColor2(rgb);
          };
          TinyColor2.prototype.darken = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.tint = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("white", amount);
          };
          TinyColor2.prototype.shade = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("black", amount);
          };
          TinyColor2.prototype.desaturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.saturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.greyscale = function() {
            return this.desaturate(100);
          };
          TinyColor2.prototype.spin = function(amount) {
            var hsl = this.toHsl();
            var hue = (hsl.h + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.mix = function(color, amount) {
            if (amount === void 0) {
              amount = 50;
            }
            var rgb1 = this.toRgb();
            var rgb2 = new TinyColor2(color).toRgb();
            var p = amount / 100;
            var rgba = {
              r: (rgb2.r - rgb1.r) * p + rgb1.r,
              g: (rgb2.g - rgb1.g) * p + rgb1.g,
              b: (rgb2.b - rgb1.b) * p + rgb1.b,
              a: (rgb2.a - rgb1.a) * p + rgb1.a
            };
            return new TinyColor2(rgba);
          };
          TinyColor2.prototype.analogous = function(results, slices) {
            if (results === void 0) {
              results = 6;
            }
            if (slices === void 0) {
              slices = 30;
            }
            var hsl = this.toHsl();
            var part = 360 / slices;
            var ret = [this];
            for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
              hsl.h = (hsl.h + part) % 360;
              ret.push(new TinyColor2(hsl));
            }
            return ret;
          };
          TinyColor2.prototype.complement = function() {
            var hsl = this.toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.monochromatic = function(results) {
            if (results === void 0) {
              results = 6;
            }
            var hsv = this.toHsv();
            var h2 = hsv.h;
            var s = hsv.s;
            var v = hsv.v;
            var res = [];
            var modification = 1 / results;
            while (results--) {
              res.push(new TinyColor2({ h: h2, s, v }));
              v = (v + modification) % 1;
            }
            return res;
          };
          TinyColor2.prototype.splitcomplement = function() {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            return [
              this,
              new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
              new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
            ];
          };
          TinyColor2.prototype.onBackground = function(background) {
            var fg = this.toRgb();
            var bg = new TinyColor2(background).toRgb();
            var alpha = fg.a + bg.a * (1 - fg.a);
            return new TinyColor2({
              r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
              g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
              b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
              a: alpha
            });
          };
          TinyColor2.prototype.triad = function() {
            return this.polyad(3);
          };
          TinyColor2.prototype.tetrad = function() {
            return this.polyad(4);
          };
          TinyColor2.prototype.polyad = function(n) {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            var result = [this];
            var increment = 360 / n;
            for (var i = 1; i < n; i++) {
              result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
            }
            return result;
          };
          TinyColor2.prototype.equals = function(color) {
            return this.toRgbString() === new TinyColor2(color).toRgbString();
          };
          return TinyColor2;
        }()
      );
      function darken(color, amount = 20) {
        return color.mix("#141414", amount).toString();
      }
      function useButtonCustomStyle(props) {
        const _disabled = useFormDisabled();
        const ns = useNamespace("button");
        return vue.computed(() => {
          let styles = {};
          let buttonColor = props.color;
          if (buttonColor) {
            const match = buttonColor.match(/var\((.*?)\)/);
            if (match) {
              buttonColor = window.getComputedStyle(window.document.documentElement).getPropertyValue(match[1]);
            }
            const color = new TinyColor(buttonColor);
            const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
            if (props.plain) {
              styles = ns.cssVarBlock({
                "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
                "text-color": buttonColor,
                "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
                "hover-text-color": `var(${ns.cssVarName("color-white")})`,
                "hover-bg-color": buttonColor,
                "hover-border-color": buttonColor,
                "active-bg-color": activeBgColor,
                "active-text-color": `var(${ns.cssVarName("color-white")})`,
                "active-border-color": activeBgColor
              });
              if (_disabled.value) {
                styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
                styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
                styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
              }
            } else {
              const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
              const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
              styles = ns.cssVarBlock({
                "bg-color": buttonColor,
                "text-color": textColor,
                "border-color": buttonColor,
                "hover-bg-color": hoverBgColor,
                "hover-text-color": textColor,
                "hover-border-color": hoverBgColor,
                "active-bg-color": activeBgColor,
                "active-border-color": activeBgColor
              });
              if (_disabled.value) {
                const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
                styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
                styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
                styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
              }
            }
          }
          return styles;
        });
      }
      const __default__$f = vue.defineComponent({
        name: "ElButton"
      });
      const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
        ...__default__$f,
        props: buttonProps,
        emits: buttonEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const buttonStyle = useButtonCustomStyle(props);
          const ns = useNamespace("button");
          const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
          const buttonKls = vue.computed(() => [
            ns.b(),
            ns.m(_type.value),
            ns.m(_size.value),
            ns.is("disabled", _disabled.value),
            ns.is("loading", props.loading),
            ns.is("plain", props.plain),
            ns.is("round", props.round),
            ns.is("circle", props.circle),
            ns.is("text", props.text),
            ns.is("link", props.link),
            ns.is("has-bg", props.bg)
          ]);
          expose({
            ref: _ref,
            size: _size,
            type: _type,
            disabled: _disabled,
            shouldAddSpace
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), vue.mergeProps({
              ref_key: "_ref",
              ref: _ref
            }, vue.unref(_props), {
              class: vue.unref(buttonKls),
              style: vue.unref(buttonStyle),
              onClick: vue.unref(handleClick)
            }), {
              default: vue.withCtx(() => [
                _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(ns).is("loading"))
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.loadingIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"]))
                ], 64)) : _ctx.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), { key: 1 }, {
                  default: vue.withCtx(() => [
                    _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), { key: 0 })) : vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
                  ]),
                  _: 3
                })) : vue.createCommentVNode("v-if", true),
                _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 2,
                  class: vue.normalizeClass({ [vue.unref(ns).em("text", "expand")]: vue.unref(shouldAddSpace) })
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2)) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["class", "style", "onClick"]);
          };
        }
      });
      var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "button.vue"]]);
      const buttonGroupProps = {
        size: buttonProps.size,
        type: buttonProps.type
      };
      const __default__$e = vue.defineComponent({
        name: "ElButtonGroup"
      });
      const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
        ...__default__$e,
        props: buttonGroupProps,
        setup(__props) {
          const props = __props;
          vue.provide(buttonGroupContextKey, vue.reactive({
            size: vue.toRef(props, "size"),
            type: vue.toRef(props, "type")
          }));
          const ns = useNamespace("button");
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass(vue.unref(ns).b("group"))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2);
          };
        }
      });
      var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "button-group.vue"]]);
      const ElButton = withInstall(Button, {
        ButtonGroup
      });
      withNoopInstall(ButtonGroup);
      var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
      function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
      }
      const REPEAT_INTERVAL = 100;
      const REPEAT_DELAY = 600;
      const vRepeatClick = {
        beforeMount(el, binding) {
          const value = binding.value;
          const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction$1(value) ? {} : value;
          let intervalId;
          let delayId;
          const handler = () => isFunction$1(value) ? value() : value.handler();
          const clear = () => {
            if (delayId) {
              clearTimeout(delayId);
              delayId = void 0;
            }
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = void 0;
            }
          };
          el.addEventListener("mousedown", (evt) => {
            if (evt.button !== 0)
              return;
            clear();
            handler();
            document.addEventListener("mouseup", () => clear(), {
              once: true
            });
            delayId = setTimeout(() => {
              intervalId = setInterval(() => {
                handler();
              }, interval);
            }, delay);
          });
        }
      };
      const checkboxProps = {
        modelValue: {
          type: [Number, String, Boolean],
          default: void 0
        },
        label: {
          type: [String, Boolean, Number, Object],
          default: void 0
        },
        value: {
          type: [String, Boolean, Number, Object],
          default: void 0
        },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: {
          type: String,
          default: void 0
        },
        trueValue: {
          type: [String, Number],
          default: void 0
        },
        falseValue: {
          type: [String, Number],
          default: void 0
        },
        trueLabel: {
          type: [String, Number],
          default: void 0
        },
        falseLabel: {
          type: [String, Number],
          default: void 0
        },
        id: {
          type: String,
          default: void 0
        },
        border: Boolean,
        size: useSizeProp,
        tabindex: [String, Number],
        validateEvent: {
          type: Boolean,
          default: true
        },
        ...useAriaProps(["ariaControls"])
      };
      const checkboxEmits = {
        [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
        change: (val) => isString(val) || isNumber(val) || isBoolean(val)
      };
      const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
      const useCheckboxDisabled = ({
        model,
        isChecked
      }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isLimitDisabled = vue.computed(() => {
          var _a2, _b;
          const max = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value;
          const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
          return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
        });
        const isDisabled = useFormDisabled(vue.computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
        return {
          isDisabled,
          isLimitDisabled
        };
      };
      const useCheckboxEvent = (props, {
        model,
        isLimitExceeded,
        hasOwnLabel,
        isDisabled,
        isLabeledByFormItem
      }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const { formItem } = useFormItem();
        const { emit } = vue.getCurrentInstance();
        function getLabeledValue(value) {
          var _a2, _b, _c, _d;
          return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
        }
        function emitChangeEvent(checked, e) {
          emit("change", getLabeledValue(checked), e);
        }
        function handleChange(e) {
          if (isLimitExceeded.value)
            return;
          const target = e.target;
          emit("change", getLabeledValue(target.checked), e);
        }
        async function onClickRoot(e) {
          if (isLimitExceeded.value)
            return;
          if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
            const eventTargets = e.composedPath();
            const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
            if (!hasLabel) {
              model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
              await vue.nextTick();
              emitChangeEvent(model.value, e);
            }
          }
        }
        const validateEvent = vue.computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
        vue.watch(() => props.modelValue, () => {
          if (validateEvent.value) {
            formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
          }
        });
        return {
          handleChange,
          onClickRoot
        };
      };
      const useCheckboxModel = (props) => {
        const selfModel = vue.ref(false);
        const { emit } = vue.getCurrentInstance();
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isGroup = vue.computed(() => isUndefined(checkboxGroup) === false);
        const isLimitExceeded = vue.ref(false);
        const model = vue.computed({
          get() {
            var _a2, _b;
            return isGroup.value ? (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a2.value : (_b = props.modelValue) != null ? _b : selfModel.value;
          },
          set(val) {
            var _a2, _b;
            if (isGroup.value && isArray$1(val)) {
              isLimitExceeded.value = ((_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
              isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
            } else {
              emit(UPDATE_MODEL_EVENT, val);
              selfModel.value = val;
            }
          }
        });
        return {
          model,
          isGroup,
          isLimitExceeded
        };
      };
      const useCheckboxStatus = (props, slots, { model }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isFocused = vue.ref(false);
        const actualValue = vue.computed(() => {
          if (!isPropAbsent(props.value)) {
            return props.value;
          }
          return props.label;
        });
        const isChecked = vue.computed(() => {
          const value = model.value;
          if (isBoolean(value)) {
            return value;
          } else if (isArray$1(value)) {
            if (isObject$1(actualValue.value)) {
              return value.map(vue.toRaw).some((o) => isEqual(o, actualValue.value));
            } else {
              return value.map(vue.toRaw).includes(actualValue.value);
            }
          } else if (value !== null && value !== void 0) {
            return value === props.trueValue || value === props.trueLabel;
          } else {
            return !!value;
          }
        });
        const checkboxButtonSize = useFormSize(vue.computed(() => {
          var _a2;
          return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
        }), {
          prop: true
        });
        const checkboxSize = useFormSize(vue.computed(() => {
          var _a2;
          return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
        }));
        const hasOwnLabel = vue.computed(() => {
          return !!slots.default || !isPropAbsent(actualValue.value);
        });
        return {
          checkboxButtonSize,
          isChecked,
          isFocused,
          checkboxSize,
          hasOwnLabel,
          actualValue
        };
      };
      const useCheckbox = (props, slots) => {
        const { formItem: elFormItem } = useFormItem();
        const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
        const {
          isFocused,
          isChecked,
          checkboxButtonSize,
          checkboxSize,
          hasOwnLabel,
          actualValue
        } = useCheckboxStatus(props, slots, { model });
        const { isDisabled } = useCheckboxDisabled({ model, isChecked });
        const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
          formItemContext: elFormItem,
          disableIdGeneration: hasOwnLabel,
          disableIdManagement: isGroup
        });
        const { handleChange, onClickRoot } = useCheckboxEvent(props, {
          model,
          isLimitExceeded,
          hasOwnLabel,
          isDisabled,
          isLabeledByFormItem
        });
        const setStoreValue = () => {
          function addToStore() {
            var _a2, _b;
            if (isArray$1(model.value) && !model.value.includes(actualValue.value)) {
              model.value.push(actualValue.value);
            } else {
              model.value = (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true;
            }
          }
          props.checked && addToStore();
        };
        setStoreValue();
        useDeprecated({
          from: "label act as value",
          replacement: "value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => isGroup.value && isPropAbsent(props.value)));
        useDeprecated({
          from: "true-label",
          replacement: "true-value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => !!props.trueLabel));
        useDeprecated({
          from: "false-label",
          replacement: "false-value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => !!props.falseLabel));
        return {
          inputId,
          isLabeledByFormItem,
          isChecked,
          isDisabled,
          isFocused,
          checkboxButtonSize,
          checkboxSize,
          hasOwnLabel,
          model,
          actualValue,
          handleChange,
          onClickRoot
        };
      };
      const __default__$d = vue.defineComponent({
        name: "ElCheckbox"
      });
      const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
        ...__default__$d,
        props: checkboxProps,
        emits: checkboxEmits,
        setup(__props) {
          const props = __props;
          const slots = vue.useSlots();
          const {
            inputId,
            isLabeledByFormItem,
            isChecked,
            isDisabled,
            isFocused,
            checkboxSize,
            hasOwnLabel,
            model,
            actualValue,
            handleChange,
            onClickRoot
          } = useCheckbox(props, slots);
          const ns = useNamespace("checkbox");
          const compKls = vue.computed(() => {
            return [
              ns.b(),
              ns.m(checkboxSize.value),
              ns.is("disabled", isDisabled.value),
              ns.is("bordered", props.border),
              ns.is("checked", isChecked.value)
            ];
          });
          const spanKls = vue.computed(() => {
            return [
              ns.e("input"),
              ns.is("disabled", isDisabled.value),
              ns.is("checked", isChecked.value),
              ns.is("indeterminate", props.indeterminate),
              ns.is("focus", isFocused.value)
            ];
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(!vue.unref(hasOwnLabel) && vue.unref(isLabeledByFormItem) ? "span" : "label"), {
              class: vue.normalizeClass(vue.unref(compKls)),
              "aria-controls": _ctx.indeterminate ? _ctx.ariaControls : null,
              onClick: vue.unref(onClickRoot)
            }, {
              default: vue.withCtx(() => {
                var _a2, _b, _c, _d;
                return [
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(vue.unref(spanKls))
                  }, [
                    _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 0,
                      id: vue.unref(inputId),
                      "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                      class: vue.normalizeClass(vue.unref(ns).e("original")),
                      type: "checkbox",
                      indeterminate: _ctx.indeterminate,
                      name: _ctx.name,
                      tabindex: _ctx.tabindex,
                      disabled: vue.unref(isDisabled),
                      "true-value": (_b = (_a2 = _ctx.trueValue) != null ? _a2 : _ctx.trueLabel) != null ? _b : true,
                      "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
                      onChange: vue.unref(handleChange),
                      onFocus: ($event) => isFocused.value = true,
                      onBlur: ($event) => isFocused.value = false,
                      onClick: vue.withModifiers(() => {
                      }, ["stop"])
                    }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                      [vue.vModelCheckbox, vue.unref(model)]
                    ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                      key: 1,
                      id: vue.unref(inputId),
                      "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                      class: vue.normalizeClass(vue.unref(ns).e("original")),
                      type: "checkbox",
                      indeterminate: _ctx.indeterminate,
                      disabled: vue.unref(isDisabled),
                      value: vue.unref(actualValue),
                      name: _ctx.name,
                      tabindex: _ctx.tabindex,
                      onChange: vue.unref(handleChange),
                      onFocus: ($event) => isFocused.value = true,
                      onBlur: ($event) => isFocused.value = false,
                      onClick: vue.withModifiers(() => {
                      }, ["stop"])
                    }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [
                      [vue.vModelCheckbox, vue.unref(model)]
                    ]),
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(vue.unref(ns).e("inner"))
                    }, null, 2)
                  ], 2),
                  vue.unref(hasOwnLabel) ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).e("label"))
                  }, [
                    vue.renderSlot(_ctx.$slots, "default"),
                    !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                    ], 64)) : vue.createCommentVNode("v-if", true)
                  ], 2)) : vue.createCommentVNode("v-if", true)
                ];
              }),
              _: 3
            }, 8, ["class", "aria-controls", "onClick"]);
          };
        }
      });
      var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "checkbox.vue"]]);
      const __default__$c = vue.defineComponent({
        name: "ElCheckboxButton"
      });
      const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
        ...__default__$c,
        props: checkboxProps,
        emits: checkboxEmits,
        setup(__props) {
          const props = __props;
          const slots = vue.useSlots();
          const {
            isFocused,
            isChecked,
            isDisabled,
            checkboxButtonSize,
            model,
            actualValue,
            handleChange
          } = useCheckbox(props, slots);
          const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
          const ns = useNamespace("checkbox");
          const activeStyle = vue.computed(() => {
            var _a2, _b, _c, _d;
            const fillValue = (_b = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a2.value) != null ? _b : "";
            return {
              backgroundColor: fillValue,
              borderColor: fillValue,
              color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
              boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
            };
          });
          const labelKls = vue.computed(() => {
            return [
              ns.b("button"),
              ns.bm("button", checkboxButtonSize.value),
              ns.is("disabled", isDisabled.value),
              ns.is("checked", isChecked.value),
              ns.is("focus", isFocused.value)
            ];
          });
          return (_ctx, _cache) => {
            var _a2, _b, _c, _d;
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass(vue.unref(labelKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                class: vue.normalizeClass(vue.unref(ns).be("button", "original")),
                type: "checkbox",
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: vue.unref(isDisabled),
                "true-value": (_b = (_a2 = _ctx.trueValue) != null ? _a2 : _ctx.trueLabel) != null ? _b : true,
                "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
                onChange: vue.unref(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: vue.withModifiers(() => {
                }, ["stop"])
              }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [vue.vModelCheckbox, vue.unref(model)]
              ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                class: vue.normalizeClass(vue.unref(ns).be("button", "original")),
                type: "checkbox",
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: vue.unref(isDisabled),
                value: vue.unref(actualValue),
                onChange: vue.unref(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: vue.withModifiers(() => {
                }, ["stop"])
              }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [vue.vModelCheckbox, vue.unref(model)]
              ]),
              _ctx.$slots.default || _ctx.label ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 2,
                class: vue.normalizeClass(vue.unref(ns).be("button", "inner")),
                style: vue.normalizeStyle(vue.unref(isChecked) ? vue.unref(activeStyle) : void 0)
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                ])
              ], 6)) : vue.createCommentVNode("v-if", true)
            ], 2);
          };
        }
      });
      var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "checkbox-button.vue"]]);
      const checkboxGroupProps = buildProps({
        modelValue: {
          type: definePropType(Array),
          default: () => []
        },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: useSizeProp,
        fill: String,
        textColor: String,
        tag: {
          type: String,
          default: "div"
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        ...useAriaProps(["ariaLabel"])
      });
      const checkboxGroupEmits = {
        [UPDATE_MODEL_EVENT]: (val) => isArray$1(val),
        change: (val) => isArray$1(val)
      };
      const __default__$b = vue.defineComponent({
        name: "ElCheckboxGroup"
      });
      const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
        ...__default__$b,
        props: checkboxGroupProps,
        emits: checkboxGroupEmits,
        setup(__props, { emit }) {
          const props = __props;
          const ns = useNamespace("checkbox");
          const { formItem } = useFormItem();
          const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
            formItemContext: formItem
          });
          const changeEvent = async (value) => {
            emit(UPDATE_MODEL_EVENT, value);
            await vue.nextTick();
            emit("change", value);
          };
          const modelValue = vue.computed({
            get() {
              return props.modelValue;
            },
            set(val) {
              changeEvent(val);
            }
          });
          vue.provide(checkboxGroupContextKey, {
            ...pick(vue.toRefs(props), [
              "size",
              "min",
              "max",
              "disabled",
              "validateEvent",
              "fill",
              "textColor"
            ]),
            modelValue,
            changeEvent
          });
          vue.watch(() => props.modelValue, () => {
            if (props.validateEvent) {
              formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
            }
          });
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
              id: vue.unref(groupId),
              class: vue.normalizeClass(vue.unref(ns).b("group")),
              role: "group",
              "aria-label": !vue.unref(isLabeledByFormItem) ? _ctx.ariaLabel || "checkbox-group" : void 0,
              "aria-labelledby": vue.unref(isLabeledByFormItem) ? (_a2 = vue.unref(formItem)) == null ? void 0 : _a2.labelId : void 0
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
          };
        }
      });
      var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "checkbox-group.vue"]]);
      const ElCheckbox = withInstall(Checkbox, {
        CheckboxButton,
        CheckboxGroup
      });
      withNoopInstall(CheckboxButton);
      const ElCheckboxGroup = withNoopInstall(CheckboxGroup);
      const radioPropsBase = buildProps({
        modelValue: {
          type: [String, Number, Boolean],
          default: void 0
        },
        size: useSizeProp,
        disabled: Boolean,
        label: {
          type: [String, Number, Boolean],
          default: void 0
        },
        value: {
          type: [String, Number, Boolean],
          default: void 0
        },
        name: {
          type: String,
          default: void 0
        }
      });
      const radioProps = buildProps({
        ...radioPropsBase,
        border: Boolean
      });
      const radioEmits = {
        [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
        [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
      };
      const radioGroupKey = Symbol("radioGroupKey");
      const useRadio = (props, emit) => {
        const radioRef = vue.ref();
        const radioGroup = vue.inject(radioGroupKey, void 0);
        const isGroup = vue.computed(() => !!radioGroup);
        const actualValue = vue.computed(() => {
          if (!isPropAbsent(props.value)) {
            return props.value;
          }
          return props.label;
        });
        const modelValue = vue.computed({
          get() {
            return isGroup.value ? radioGroup.modelValue : props.modelValue;
          },
          set(val) {
            if (isGroup.value) {
              radioGroup.changeEvent(val);
            } else {
              emit && emit(UPDATE_MODEL_EVENT, val);
            }
            radioRef.value.checked = props.modelValue === actualValue.value;
          }
        });
        const size = useFormSize(vue.computed(() => radioGroup == null ? void 0 : radioGroup.size));
        const disabled = useFormDisabled(vue.computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
        const focus = vue.ref(false);
        const tabIndex = vue.computed(() => {
          return disabled.value || isGroup.value && modelValue.value !== actualValue.value ? -1 : 0;
        });
        useDeprecated({
          from: "label act as value",
          replacement: "value",
          version: "3.0.0",
          scope: "el-radio",
          ref: "https://element-plus.org/en-US/component/radio.html"
        }, vue.computed(() => isGroup.value && isPropAbsent(props.value)));
        return {
          radioRef,
          isGroup,
          radioGroup,
          focus,
          size,
          disabled,
          tabIndex,
          modelValue,
          actualValue
        };
      };
      const __default__$a = vue.defineComponent({
        name: "ElRadio"
      });
      const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
        ...__default__$a,
        props: radioProps,
        emits: radioEmits,
        setup(__props, { emit }) {
          const props = __props;
          const ns = useNamespace("radio");
          const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } = useRadio(props, emit);
          function handleChange() {
            vue.nextTick(() => emit("change", modelValue.value));
          }
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass([
                vue.unref(ns).b(),
                vue.unref(ns).is("disabled", vue.unref(disabled)),
                vue.unref(ns).is("focus", vue.unref(focus)),
                vue.unref(ns).is("bordered", _ctx.border),
                vue.unref(ns).is("checked", vue.unref(modelValue) === vue.unref(actualValue)),
                vue.unref(ns).m(vue.unref(size))
              ])
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass([
                  vue.unref(ns).e("input"),
                  vue.unref(ns).is("disabled", vue.unref(disabled)),
                  vue.unref(ns).is("checked", vue.unref(modelValue) === vue.unref(actualValue))
                ])
              }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  ref_key: "radioRef",
                  ref: radioRef,
                  "onUpdate:modelValue": ($event) => vue.isRef(modelValue) ? modelValue.value = $event : null,
                  class: vue.normalizeClass(vue.unref(ns).e("original")),
                  value: vue.unref(actualValue),
                  name: _ctx.name || ((_a2 = vue.unref(radioGroup)) == null ? void 0 : _a2.name),
                  disabled: vue.unref(disabled),
                  checked: vue.unref(modelValue) === vue.unref(actualValue),
                  type: "radio",
                  onFocus: ($event) => focus.value = true,
                  onBlur: ($event) => focus.value = false,
                  onChange: handleChange,
                  onClick: vue.withModifiers(() => {
                  }, ["stop"])
                }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [
                  [vue.vModelRadio, vue.unref(modelValue)]
                ]),
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(vue.unref(ns).e("inner"))
                }, null, 2)
              ], 2),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(vue.unref(ns).e("label")),
                onKeydown: vue.withModifiers(() => {
                }, ["stop"])
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                ])
              ], 42, ["onKeydown"])
            ], 2);
          };
        }
      });
      var Radio = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "radio.vue"]]);
      const radioButtonProps = buildProps({
        ...radioPropsBase
      });
      const __default__$9 = vue.defineComponent({
        name: "ElRadioButton"
      });
      const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
        ...__default__$9,
        props: radioButtonProps,
        setup(__props) {
          const props = __props;
          const ns = useNamespace("radio");
          const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } = useRadio(props);
          const activeStyle = vue.computed(() => {
            return {
              backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
              borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
              boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
              color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
            };
          });
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass([
                vue.unref(ns).b("button"),
                vue.unref(ns).is("active", vue.unref(modelValue) === vue.unref(actualValue)),
                vue.unref(ns).is("disabled", vue.unref(disabled)),
                vue.unref(ns).is("focus", vue.unref(focus)),
                vue.unref(ns).bm("button", vue.unref(size))
              ])
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                ref_key: "radioRef",
                ref: radioRef,
                "onUpdate:modelValue": ($event) => vue.isRef(modelValue) ? modelValue.value = $event : null,
                class: vue.normalizeClass(vue.unref(ns).be("button", "original-radio")),
                value: vue.unref(actualValue),
                type: "radio",
                name: _ctx.name || ((_a2 = vue.unref(radioGroup)) == null ? void 0 : _a2.name),
                disabled: vue.unref(disabled),
                onFocus: ($event) => focus.value = true,
                onBlur: ($event) => focus.value = false,
                onClick: vue.withModifiers(() => {
                }, ["stop"])
              }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [
                [vue.vModelRadio, vue.unref(modelValue)]
              ]),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(vue.unref(ns).be("button", "inner")),
                style: vue.normalizeStyle(vue.unref(modelValue) === vue.unref(actualValue) ? vue.unref(activeStyle) : {}),
                onKeydown: vue.withModifiers(() => {
                }, ["stop"])
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                ])
              ], 46, ["onKeydown"])
            ], 2);
          };
        }
      });
      var RadioButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "radio-button.vue"]]);
      const radioGroupProps = buildProps({
        id: {
          type: String,
          default: void 0
        },
        size: useSizeProp,
        disabled: Boolean,
        modelValue: {
          type: [String, Number, Boolean],
          default: void 0
        },
        fill: {
          type: String,
          default: ""
        },
        textColor: {
          type: String,
          default: ""
        },
        name: {
          type: String,
          default: void 0
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        ...useAriaProps(["ariaLabel"])
      });
      const radioGroupEmits = radioEmits;
      const __default__$8 = vue.defineComponent({
        name: "ElRadioGroup"
      });
      const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
        ...__default__$8,
        props: radioGroupProps,
        emits: radioGroupEmits,
        setup(__props, { emit }) {
          const props = __props;
          const ns = useNamespace("radio");
          const radioId = useId();
          const radioGroupRef = vue.ref();
          const { formItem } = useFormItem();
          const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
            formItemContext: formItem
          });
          const changeEvent = (value) => {
            emit(UPDATE_MODEL_EVENT, value);
            vue.nextTick(() => emit("change", value));
          };
          vue.onMounted(() => {
            const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
            const firstLabel = radios[0];
            if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
              firstLabel.tabIndex = 0;
            }
          });
          const name = vue.computed(() => {
            return props.name || radioId.value;
          });
          vue.provide(radioGroupKey, vue.reactive({
            ...vue.toRefs(props),
            changeEvent,
            name
          }));
          vue.watch(() => props.modelValue, () => {
            if (props.validateEvent) {
              formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
            }
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              id: vue.unref(groupId),
              ref_key: "radioGroupRef",
              ref: radioGroupRef,
              class: vue.normalizeClass(vue.unref(ns).b("group")),
              role: "radiogroup",
              "aria-label": !vue.unref(isLabeledByFormItem) ? _ctx.ariaLabel || "radio-group" : void 0,
              "aria-labelledby": vue.unref(isLabeledByFormItem) ? vue.unref(formItem).labelId : void 0
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 10, ["id", "aria-label", "aria-labelledby"]);
          };
        }
      });
      var RadioGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "radio-group.vue"]]);
      const ElRadio = withInstall(Radio, {
        RadioButton,
        RadioGroup
      });
      const ElRadioGroup = withNoopInstall(RadioGroup);
      withNoopInstall(RadioButton);
      const overlayProps = buildProps({
        mask: {
          type: Boolean,
          default: true
        },
        customMaskEvent: Boolean,
        overlayClass: {
          type: definePropType([
            String,
            Array,
            Object
          ])
        },
        zIndex: {
          type: definePropType([String, Number])
        }
      });
      const overlayEmits = {
        click: (evt) => evt instanceof MouseEvent
      };
      const BLOCK = "overlay";
      var Overlay = vue.defineComponent({
        name: "ElOverlay",
        props: overlayProps,
        emits: overlayEmits,
        setup(props, { slots, emit }) {
          const ns = useNamespace(BLOCK);
          const onMaskClick = (e) => {
            emit("click", e);
          };
          const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
          return () => {
            return props.mask ? vue.createVNode("div", {
              class: [ns.b(), props.overlayClass],
              style: {
                zIndex: props.zIndex
              },
              onClick,
              onMousedown,
              onMouseup
            }, [vue.renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : vue.h("div", {
              class: props.overlayClass,
              style: {
                zIndex: props.zIndex,
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
              }
            }, [vue.renderSlot(slots, "default")]);
          };
        }
      });
      const ElOverlay = Overlay;
      const dialogContentProps = buildProps({
        center: Boolean,
        alignCenter: Boolean,
        closeIcon: {
          type: iconPropType
        },
        draggable: Boolean,
        overflow: Boolean,
        fullscreen: Boolean,
        showClose: {
          type: Boolean,
          default: true
        },
        title: {
          type: String,
          default: ""
        },
        ariaLevel: {
          type: String,
          default: "2"
        }
      });
      const dialogProps = buildProps({
        ...dialogContentProps,
        appendToBody: Boolean,
        appendTo: {
          type: definePropType([String, Object]),
          default: "body"
        },
        beforeClose: {
          type: definePropType(Function)
        },
        destroyOnClose: Boolean,
        closeOnClickModal: {
          type: Boolean,
          default: true
        },
        closeOnPressEscape: {
          type: Boolean,
          default: true
        },
        lockScroll: {
          type: Boolean,
          default: true
        },
        modal: {
          type: Boolean,
          default: true
        },
        openDelay: {
          type: Number,
          default: 0
        },
        closeDelay: {
          type: Number,
          default: 0
        },
        top: {
          type: String
        },
        modelValue: Boolean,
        modalClass: String,
        width: {
          type: [String, Number]
        },
        zIndex: {
          type: Number
        },
        trapFocus: Boolean,
        headerAriaLevel: {
          type: String,
          default: "2"
        }
      });
      const dialogEmits = {
        open: () => true,
        opened: () => true,
        close: () => true,
        closed: () => true,
        [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
        openAutoFocus: () => true,
        closeAutoFocus: () => true
      };
      const useDialog = (props, targetRef) => {
        var _a2;
        const instance = vue.getCurrentInstance();
        const emit = instance.emit;
        const { nextZIndex } = useZIndex();
        let lastPosition = "";
        const titleId = useId();
        const bodyId = useId();
        const visible = vue.ref(false);
        const closed = vue.ref(false);
        const rendered = vue.ref(false);
        const zIndex2 = vue.ref((_a2 = props.zIndex) != null ? _a2 : nextZIndex());
        let openTimer = void 0;
        let closeTimer = void 0;
        const namespace = useGlobalConfig("namespace", defaultNamespace);
        const style = vue.computed(() => {
          const style2 = {};
          const varPrefix = `--${namespace.value}-dialog`;
          if (!props.fullscreen) {
            if (props.top) {
              style2[`${varPrefix}-margin-top`] = props.top;
            }
            if (props.width) {
              style2[`${varPrefix}-width`] = addUnit(props.width);
            }
          }
          return style2;
        });
        const overlayDialogStyle = vue.computed(() => {
          if (props.alignCenter) {
            return { display: "flex" };
          }
          return {};
        });
        function afterEnter() {
          emit("opened");
        }
        function afterLeave() {
          emit("closed");
          emit(UPDATE_MODEL_EVENT, false);
          if (props.destroyOnClose) {
            rendered.value = false;
          }
        }
        function beforeLeave() {
          emit("close");
        }
        function open() {
          closeTimer == null ? void 0 : closeTimer();
          openTimer == null ? void 0 : openTimer();
          if (props.openDelay && props.openDelay > 0) {
            ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
          } else {
            doOpen();
          }
        }
        function close() {
          openTimer == null ? void 0 : openTimer();
          closeTimer == null ? void 0 : closeTimer();
          if (props.closeDelay && props.closeDelay > 0) {
            ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
          } else {
            doClose();
          }
        }
        function handleClose() {
          function hide(shouldCancel) {
            if (shouldCancel)
              return;
            closed.value = true;
            visible.value = false;
          }
          if (props.beforeClose) {
            props.beforeClose(hide);
          } else {
            close();
          }
        }
        function onModalClick() {
          if (props.closeOnClickModal) {
            handleClose();
          }
        }
        function doOpen() {
          if (!isClient)
            return;
          visible.value = true;
        }
        function doClose() {
          visible.value = false;
        }
        function onOpenAutoFocus() {
          emit("openAutoFocus");
        }
        function onCloseAutoFocus() {
          emit("closeAutoFocus");
        }
        function onFocusoutPrevented(event) {
          var _a22;
          if (((_a22 = event.detail) == null ? void 0 : _a22.focusReason) === "pointer") {
            event.preventDefault();
          }
        }
        if (props.lockScroll) {
          useLockscreen(visible);
        }
        function onCloseRequested() {
          if (props.closeOnPressEscape) {
            handleClose();
          }
        }
        vue.watch(() => props.modelValue, (val) => {
          if (val) {
            closed.value = false;
            open();
            rendered.value = true;
            zIndex2.value = isUndefined$1(props.zIndex) ? nextZIndex() : zIndex2.value++;
            vue.nextTick(() => {
              emit("open");
              if (targetRef.value) {
                targetRef.value.scrollTop = 0;
              }
            });
          } else {
            if (visible.value) {
              close();
            }
          }
        });
        vue.watch(() => props.fullscreen, (val) => {
          if (!targetRef.value)
            return;
          if (val) {
            lastPosition = targetRef.value.style.transform;
            targetRef.value.style.transform = "";
          } else {
            targetRef.value.style.transform = lastPosition;
          }
        });
        vue.onMounted(() => {
          if (props.modelValue) {
            visible.value = true;
            rendered.value = true;
            open();
          }
        });
        return {
          afterEnter,
          afterLeave,
          beforeLeave,
          handleClose,
          onModalClick,
          close,
          doClose,
          onOpenAutoFocus,
          onCloseAutoFocus,
          onCloseRequested,
          onFocusoutPrevented,
          titleId,
          bodyId,
          closed,
          style,
          overlayDialogStyle,
          rendered,
          visible,
          zIndex: zIndex2
        };
      };
      const dividerProps = buildProps({
        direction: {
          type: String,
          values: ["horizontal", "vertical"],
          default: "horizontal"
        },
        contentPosition: {
          type: String,
          values: ["left", "center", "right"],
          default: "center"
        },
        borderStyle: {
          type: definePropType(String),
          default: "solid"
        }
      });
      const __default__$7 = vue.defineComponent({
        name: "ElDivider"
      });
      const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
        ...__default__$7,
        props: dividerProps,
        setup(__props) {
          const props = __props;
          const ns = useNamespace("divider");
          const dividerStyle = vue.computed(() => {
            return ns.cssVar({
              "border-style": props.borderStyle
            });
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).m(_ctx.direction)]),
              style: vue.normalizeStyle(vue.unref(dividerStyle)),
              role: "separator"
            }, [
              _ctx.$slots.default && _ctx.direction !== "vertical" ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: vue.normalizeClass([vue.unref(ns).e("text"), vue.unref(ns).is(_ctx.contentPosition)])
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], 6);
          };
        }
      });
      var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "divider.vue"]]);
      const ElDivider = withInstall(Divider);
      const drawerProps = buildProps({
        ...dialogProps,
        direction: {
          type: String,
          default: "rtl",
          values: ["ltr", "rtl", "ttb", "btt"]
        },
        size: {
          type: [String, Number],
          default: "30%"
        },
        withHeader: {
          type: Boolean,
          default: true
        },
        modalFade: {
          type: Boolean,
          default: true
        },
        headerAriaLevel: {
          type: String,
          default: "2"
        }
      });
      const drawerEmits = dialogEmits;
      const __default__$6 = vue.defineComponent({
        name: "ElDrawer",
        inheritAttrs: false
      });
      const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
        ...__default__$6,
        props: drawerProps,
        emits: drawerEmits,
        setup(__props, { expose }) {
          const props = __props;
          const slots = vue.useSlots();
          useDeprecated({
            scope: "el-drawer",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/drawer.html#slots"
          }, vue.computed(() => !!slots.title));
          const drawerRef = vue.ref();
          const focusStartRef = vue.ref();
          const ns = useNamespace("drawer");
          const { t } = useLocale();
          const {
            afterEnter,
            afterLeave,
            beforeLeave,
            visible,
            rendered,
            titleId,
            bodyId,
            zIndex: zIndex2,
            onModalClick,
            onOpenAutoFocus,
            onCloseAutoFocus,
            onFocusoutPrevented,
            onCloseRequested,
            handleClose
          } = useDialog(props, drawerRef);
          const isHorizontal = vue.computed(() => props.direction === "rtl" || props.direction === "ltr");
          const drawerSize = vue.computed(() => addUnit(props.size));
          expose({
            handleClose,
            afterEnter,
            afterLeave
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.unref(ElTeleport), {
              to: _ctx.appendTo,
              disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.Transition, {
                  name: vue.unref(ns).b("fade"),
                  onAfterEnter: vue.unref(afterEnter),
                  onAfterLeave: vue.unref(afterLeave),
                  onBeforeLeave: vue.unref(beforeLeave),
                  persisted: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createVNode(vue.unref(ElOverlay), {
                      mask: _ctx.modal,
                      "overlay-class": _ctx.modalClass,
                      "z-index": vue.unref(zIndex2),
                      onClick: vue.unref(onModalClick)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(ElFocusTrap), {
                          loop: "",
                          trapped: vue.unref(visible),
                          "focus-trap-el": drawerRef.value,
                          "focus-start-el": focusStartRef.value,
                          onFocusAfterTrapped: vue.unref(onOpenAutoFocus),
                          onFocusAfterReleased: vue.unref(onCloseAutoFocus),
                          onFocusoutPrevented: vue.unref(onFocusoutPrevented),
                          onReleaseRequested: vue.unref(onCloseRequested)
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("div", vue.mergeProps({
                              ref_key: "drawerRef",
                              ref: drawerRef,
                              "aria-modal": "true",
                              "aria-label": _ctx.title || void 0,
                              "aria-labelledby": !_ctx.title ? vue.unref(titleId) : void 0,
                              "aria-describedby": vue.unref(bodyId)
                            }, _ctx.$attrs, {
                              class: [vue.unref(ns).b(), _ctx.direction, vue.unref(visible) && "open"],
                              style: vue.unref(isHorizontal) ? "width: " + vue.unref(drawerSize) : "height: " + vue.unref(drawerSize),
                              role: "dialog",
                              onClick: vue.withModifiers(() => {
                              }, ["stop"])
                            }), [
                              vue.createElementVNode("span", {
                                ref_key: "focusStartRef",
                                ref: focusStartRef,
                                class: vue.normalizeClass(vue.unref(ns).e("sr-focus")),
                                tabindex: "-1"
                              }, null, 2),
                              _ctx.withHeader ? (vue.openBlock(), vue.createElementBlock("header", {
                                key: 0,
                                class: vue.normalizeClass(vue.unref(ns).e("header"))
                              }, [
                                !_ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "header", {
                                  key: 0,
                                  close: vue.unref(handleClose),
                                  titleId: vue.unref(titleId),
                                  titleClass: vue.unref(ns).e("title")
                                }, () => [
                                  !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", {
                                    key: 0,
                                    id: vue.unref(titleId),
                                    role: "heading",
                                    "aria-level": _ctx.headerAriaLevel,
                                    class: vue.normalizeClass(vue.unref(ns).e("title"))
                                  }, vue.toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : vue.createCommentVNode("v-if", true)
                                ]) : vue.renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                                  vue.createCommentVNode(" DEPRECATED SLOT ")
                                ]),
                                _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
                                  key: 2,
                                  "aria-label": vue.unref(t)("el.drawer.close"),
                                  class: vue.normalizeClass(vue.unref(ns).e("close-btn")),
                                  type: "button",
                                  onClick: vue.unref(handleClose)
                                }, [
                                  vue.createVNode(vue.unref(ElIcon), {
                                    class: vue.normalizeClass(vue.unref(ns).e("close"))
                                  }, {
                                    default: vue.withCtx(() => [
                                      vue.createVNode(vue.unref(close_default))
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
                                ], 10, ["aria-label", "onClick"])) : vue.createCommentVNode("v-if", true)
                              ], 2)) : vue.createCommentVNode("v-if", true),
                              vue.unref(rendered) ? (vue.openBlock(), vue.createElementBlock("div", {
                                key: 1,
                                id: vue.unref(bodyId),
                                class: vue.normalizeClass(vue.unref(ns).e("body"))
                              }, [
                                vue.renderSlot(_ctx.$slots, "default")
                              ], 10, ["id"])) : vue.createCommentVNode("v-if", true),
                              _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", {
                                key: 2,
                                class: vue.normalizeClass(vue.unref(ns).e("footer"))
                              }, [
                                vue.renderSlot(_ctx.$slots, "footer")
                              ], 2)) : vue.createCommentVNode("v-if", true)
                            ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                          ]),
                          _: 3
                        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                      ]),
                      _: 3
                    }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                      [vue.vShow, vue.unref(visible)]
                    ])
                  ]),
                  _: 3
                }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
              ]),
              _: 3
            }, 8, ["to", "disabled"]);
          };
        }
      });
      var Drawer = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "drawer.vue"]]);
      const ElDrawer = withInstall(Drawer);
      const __default__$5 = vue.defineComponent({
        name: "ImgEmpty"
      });
      const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
        ...__default__$5,
        setup(__props) {
          const ns = useNamespace("empty");
          const id = useId();
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("svg", {
              viewBox: "0 0 79 86",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }, [
              vue.createElementVNode("defs", null, [
                vue.createElementVNode("linearGradient", {
                  id: `linearGradient-1-${vue.unref(id)}`,
                  x1: "38.8503086%",
                  y1: "0%",
                  x2: "61.1496914%",
                  y2: "100%"
                }, [
                  vue.createElementVNode("stop", {
                    "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-1")})`,
                    offset: "0%"
                  }, null, 8, ["stop-color"]),
                  vue.createElementVNode("stop", {
                    "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-4")})`,
                    offset: "100%"
                  }, null, 8, ["stop-color"])
                ], 8, ["id"]),
                vue.createElementVNode("linearGradient", {
                  id: `linearGradient-2-${vue.unref(id)}`,
                  x1: "0%",
                  y1: "9.5%",
                  x2: "100%",
                  y2: "90.5%"
                }, [
                  vue.createElementVNode("stop", {
                    "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-1")})`,
                    offset: "0%"
                  }, null, 8, ["stop-color"]),
                  vue.createElementVNode("stop", {
                    "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-6")})`,
                    offset: "100%"
                  }, null, 8, ["stop-color"])
                ], 8, ["id"]),
                vue.createElementVNode("rect", {
                  id: `path-3-${vue.unref(id)}`,
                  x: "0",
                  y: "0",
                  width: "17",
                  height: "36"
                }, null, 8, ["id"])
              ]),
              vue.createElementVNode("g", {
                id: "Illustrations",
                stroke: "none",
                "stroke-width": "1",
                fill: "none",
                "fill-rule": "evenodd"
              }, [
                vue.createElementVNode("g", {
                  id: "B-type",
                  transform: "translate(-1268.000000, -535.000000)"
                }, [
                  vue.createElementVNode("g", {
                    id: "Group-2",
                    transform: "translate(1268.000000, 535.000000)"
                  }, [
                    vue.createElementVNode("path", {
                      id: "Oval-Copy-2",
                      d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
                      fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-3")})`
                    }, null, 8, ["fill"]),
                    vue.createElementVNode("polygon", {
                      id: "Rectangle-Copy-14",
                      fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-7")})`,
                      transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
                      points: "13 58 53 58 42 45 2 45"
                    }, null, 8, ["fill"]),
                    vue.createElementVNode("g", {
                      id: "Group-Copy",
                      transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
                    }, [
                      vue.createElementVNode("polygon", {
                        id: "Rectangle-Copy-10",
                        fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-7")})`,
                        transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                        points: "2.84078316e-14 3 18 3 23 7 5 7"
                      }, null, 8, ["fill"]),
                      vue.createElementVNode("polygon", {
                        id: "Rectangle-Copy-11",
                        fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-5")})`,
                        points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                      }, null, 8, ["fill"]),
                      vue.createElementVNode("rect", {
                        id: "Rectangle-Copy-12",
                        fill: `url(#linearGradient-1-${vue.unref(id)})`,
                        transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                        x: "38",
                        y: "7",
                        width: "17",
                        height: "36"
                      }, null, 8, ["fill"]),
                      vue.createElementVNode("polygon", {
                        id: "Rectangle-Copy-13",
                        fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-2")})`,
                        transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                        points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                      }, null, 8, ["fill"])
                    ]),
                    vue.createElementVNode("rect", {
                      id: "Rectangle-Copy-15",
                      fill: `url(#linearGradient-2-${vue.unref(id)})`,
                      x: "13",
                      y: "45",
                      width: "40",
                      height: "36"
                    }, null, 8, ["fill"]),
                    vue.createElementVNode("g", {
                      id: "Rectangle-Copy-17",
                      transform: "translate(53.000000, 45.000000)"
                    }, [
                      vue.createElementVNode("use", {
                        id: "Mask",
                        fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-8")})`,
                        transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                        "xlink:href": `#path-3-${vue.unref(id)}`
                      }, null, 8, ["fill", "xlink:href"]),
                      vue.createElementVNode("polygon", {
                        id: "Rectangle-Copy",
                        fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-9")})`,
                        mask: `url(#mask-4-${vue.unref(id)})`,
                        transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                        points: "7 0 24 0 20 18 7 16.5"
                      }, null, 8, ["fill", "mask"])
                    ]),
                    vue.createElementVNode("polygon", {
                      id: "Rectangle-Copy-18",
                      fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-2")})`,
                      transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
                      points: "62 45 79 45 70 58 53 58"
                    }, null, 8, ["fill"])
                  ])
                ])
              ])
            ]);
          };
        }
      });
      var ImgEmpty = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "img-empty.vue"]]);
      const emptyProps = buildProps({
        image: {
          type: String,
          default: ""
        },
        imageSize: Number,
        description: {
          type: String,
          default: ""
        }
      });
      const __default__$4 = vue.defineComponent({
        name: "ElEmpty"
      });
      const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
        ...__default__$4,
        props: emptyProps,
        setup(__props) {
          const props = __props;
          const { t } = useLocale();
          const ns = useNamespace("empty");
          const emptyDescription = vue.computed(() => props.description || t("el.table.emptyText"));
          const imageStyle = vue.computed(() => ({
            width: addUnit(props.imageSize)
          }));
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass(vue.unref(ns).b())
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("image")),
                style: vue.normalizeStyle(vue.unref(imageStyle))
              }, [
                _ctx.image ? (vue.openBlock(), vue.createElementBlock("img", {
                  key: 0,
                  src: _ctx.image,
                  ondragstart: "return false"
                }, null, 8, ["src"])) : vue.renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
                  vue.createVNode(ImgEmpty)
                ])
              ], 6),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("description"))
              }, [
                _ctx.$slots.description ? vue.renderSlot(_ctx.$slots, "description", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("p", { key: 1 }, vue.toDisplayString(vue.unref(emptyDescription)), 1))
              ], 2),
              _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("bottom"))
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], 2);
          };
        }
      });
      var Empty = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "empty.vue"]]);
      const ElEmpty = withInstall(Empty);
      const inputNumberProps = buildProps({
        id: {
          type: String,
          default: void 0
        },
        step: {
          type: Number,
          default: 1
        },
        stepStrictly: Boolean,
        max: {
          type: Number,
          default: Number.POSITIVE_INFINITY
        },
        min: {
          type: Number,
          default: Number.NEGATIVE_INFINITY
        },
        modelValue: Number,
        readonly: Boolean,
        disabled: Boolean,
        size: useSizeProp,
        controls: {
          type: Boolean,
          default: true
        },
        controlsPosition: {
          type: String,
          default: "",
          values: ["", "right"]
        },
        valueOnClear: {
          type: [String, Number, null],
          validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
          default: null
        },
        name: String,
        placeholder: String,
        precision: {
          type: Number,
          validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        ...useAriaProps(["ariaLabel"])
      });
      const inputNumberEmits = {
        [CHANGE_EVENT]: (cur, prev) => prev !== cur,
        blur: (e) => e instanceof FocusEvent,
        focus: (e) => e instanceof FocusEvent,
        [INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
        [UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
      };
      const __default__$3 = vue.defineComponent({
        name: "ElInputNumber"
      });
      const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
        ...__default__$3,
        props: inputNumberProps,
        emits: inputNumberEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const { t } = useLocale();
          const ns = useNamespace("input-number");
          const input = vue.ref();
          const data = vue.reactive({
            currentValue: props.modelValue,
            userInput: null
          });
          const { formItem } = useFormItem();
          const minDisabled = vue.computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
          const maxDisabled = vue.computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
          const numPrecision = vue.computed(() => {
            const stepPrecision = getPrecision(props.step);
            if (!isUndefined(props.precision)) {
              if (stepPrecision > props.precision) ;
              return props.precision;
            } else {
              return Math.max(getPrecision(props.modelValue), stepPrecision);
            }
          });
          const controlsAtRight = vue.computed(() => {
            return props.controls && props.controlsPosition === "right";
          });
          const inputNumberSize = useFormSize();
          const inputNumberDisabled = useFormDisabled();
          const displayValue = vue.computed(() => {
            if (data.userInput !== null) {
              return data.userInput;
            }
            let currentValue = data.currentValue;
            if (isNil(currentValue))
              return "";
            if (isNumber(currentValue)) {
              if (Number.isNaN(currentValue))
                return "";
              if (!isUndefined(props.precision)) {
                currentValue = currentValue.toFixed(props.precision);
              }
            }
            return currentValue;
          });
          const toPrecision = (num, pre) => {
            if (isUndefined(pre))
              pre = numPrecision.value;
            if (pre === 0)
              return Math.round(num);
            let snum = String(num);
            const pointPos = snum.indexOf(".");
            if (pointPos === -1)
              return num;
            const nums = snum.replace(".", "").split("");
            const datum = nums[pointPos + pre];
            if (!datum)
              return num;
            const length = snum.length;
            if (snum.charAt(length - 1) === "5") {
              snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
            }
            return Number.parseFloat(Number(snum).toFixed(pre));
          };
          const getPrecision = (value) => {
            if (isNil(value))
              return 0;
            const valueString = value.toString();
            const dotPosition = valueString.indexOf(".");
            let precision = 0;
            if (dotPosition !== -1) {
              precision = valueString.length - dotPosition - 1;
            }
            return precision;
          };
          const ensurePrecision = (val, coefficient = 1) => {
            if (!isNumber(val))
              return data.currentValue;
            return toPrecision(val + props.step * coefficient);
          };
          const increase = () => {
            if (props.readonly || inputNumberDisabled.value || maxDisabled.value)
              return;
            const value = Number(displayValue.value) || 0;
            const newVal = ensurePrecision(value);
            setCurrentValue(newVal);
            emit(INPUT_EVENT, data.currentValue);
            setCurrentValueToModelValue();
          };
          const decrease = () => {
            if (props.readonly || inputNumberDisabled.value || minDisabled.value)
              return;
            const value = Number(displayValue.value) || 0;
            const newVal = ensurePrecision(value, -1);
            setCurrentValue(newVal);
            emit(INPUT_EVENT, data.currentValue);
            setCurrentValueToModelValue();
          };
          const verifyValue = (value, update) => {
            const { max, min, step, precision, stepStrictly, valueOnClear } = props;
            if (max < min) {
              throwError("InputNumber", "min should not be greater than max.");
            }
            let newVal = Number(value);
            if (isNil(value) || Number.isNaN(newVal)) {
              return null;
            }
            if (value === "") {
              if (valueOnClear === null) {
                return null;
              }
              newVal = isString(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
            }
            if (stepStrictly) {
              newVal = toPrecision(Math.round(newVal / step) * step, precision);
              if (newVal !== value) {
                update && emit(UPDATE_MODEL_EVENT, newVal);
              }
            }
            if (!isUndefined(precision)) {
              newVal = toPrecision(newVal, precision);
            }
            if (newVal > max || newVal < min) {
              newVal = newVal > max ? max : min;
              update && emit(UPDATE_MODEL_EVENT, newVal);
            }
            return newVal;
          };
          const setCurrentValue = (value, emitChange = true) => {
            var _a2;
            const oldVal = data.currentValue;
            const newVal = verifyValue(value);
            if (!emitChange) {
              emit(UPDATE_MODEL_EVENT, newVal);
              return;
            }
            if (oldVal === newVal && value)
              return;
            data.userInput = null;
            emit(UPDATE_MODEL_EVENT, newVal);
            if (oldVal !== newVal) {
              emit(CHANGE_EVENT, newVal, oldVal);
            }
            if (props.validateEvent) {
              (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
            }
            data.currentValue = newVal;
          };
          const handleInput = (value) => {
            data.userInput = value;
            const newVal = value === "" ? null : Number(value);
            emit(INPUT_EVENT, newVal);
            setCurrentValue(newVal, false);
          };
          const handleInputChange = (value) => {
            const newVal = value !== "" ? Number(value) : "";
            if (isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
              setCurrentValue(newVal);
            }
            setCurrentValueToModelValue();
            data.userInput = null;
          };
          const focus = () => {
            var _a2, _b;
            (_b = (_a2 = input.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
          };
          const blur = () => {
            var _a2, _b;
            (_b = (_a2 = input.value) == null ? void 0 : _a2.blur) == null ? void 0 : _b.call(_a2);
          };
          const handleFocus = (event) => {
            emit("focus", event);
          };
          const handleBlur = (event) => {
            var _a2;
            data.userInput = null;
            emit("blur", event);
            if (props.validateEvent) {
              (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur").catch((err) => debugWarn());
            }
          };
          const setCurrentValueToModelValue = () => {
            if (data.currentValue !== props.modelValue) {
              data.currentValue = props.modelValue;
            }
          };
          const handleWheel = (e) => {
            if (document.activeElement === e.target)
              e.preventDefault();
          };
          vue.watch(() => props.modelValue, (value, oldValue) => {
            const newValue = verifyValue(value, true);
            if (data.userInput === null && newValue !== oldValue) {
              data.currentValue = newValue;
            }
          }, { immediate: true });
          vue.onMounted(() => {
            var _a2;
            const { min, max, modelValue } = props;
            const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
            innerInput.setAttribute("role", "spinbutton");
            if (Number.isFinite(max)) {
              innerInput.setAttribute("aria-valuemax", String(max));
            } else {
              innerInput.removeAttribute("aria-valuemax");
            }
            if (Number.isFinite(min)) {
              innerInput.setAttribute("aria-valuemin", String(min));
            } else {
              innerInput.removeAttribute("aria-valuemin");
            }
            innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
            innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
            if (!isNumber(modelValue) && modelValue != null) {
              let val = Number(modelValue);
              if (Number.isNaN(val)) {
                val = null;
              }
              emit(UPDATE_MODEL_EVENT, val);
            }
            innerInput.addEventListener("wheel", handleWheel, { passive: false });
          });
          vue.onUpdated(() => {
            var _a2, _b;
            const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
            innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", `${(_b = data.currentValue) != null ? _b : ""}`);
          });
          expose({
            focus,
            blur
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass([
                vue.unref(ns).b(),
                vue.unref(ns).m(vue.unref(inputNumberSize)),
                vue.unref(ns).is("disabled", vue.unref(inputNumberDisabled)),
                vue.unref(ns).is("without-controls", !_ctx.controls),
                vue.unref(ns).is("controls-right", vue.unref(controlsAtRight))
              ]),
              onDragstart: vue.withModifiers(() => {
              }, ["prevent"])
            }, [
              _ctx.controls ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                role: "button",
                "aria-label": vue.unref(t)("el.inputNumber.decrease"),
                class: vue.normalizeClass([vue.unref(ns).e("decrease"), vue.unref(ns).is("disabled", vue.unref(minDisabled))]),
                onKeydown: vue.withKeys(decrease, ["enter"])
              }, [
                vue.renderSlot(_ctx.$slots, "decrease-icon", {}, () => [
                  vue.createVNode(vue.unref(ElIcon), null, {
                    default: vue.withCtx(() => [
                      vue.unref(controlsAtRight) ? (vue.openBlock(), vue.createBlock(vue.unref(arrow_down_default), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(minus_default), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 42, ["aria-label", "onKeydown"])), [
                [vue.unref(vRepeatClick), decrease]
              ]) : vue.createCommentVNode("v-if", true),
              _ctx.controls ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                role: "button",
                "aria-label": vue.unref(t)("el.inputNumber.increase"),
                class: vue.normalizeClass([vue.unref(ns).e("increase"), vue.unref(ns).is("disabled", vue.unref(maxDisabled))]),
                onKeydown: vue.withKeys(increase, ["enter"])
              }, [
                vue.renderSlot(_ctx.$slots, "increase-icon", {}, () => [
                  vue.createVNode(vue.unref(ElIcon), null, {
                    default: vue.withCtx(() => [
                      vue.unref(controlsAtRight) ? (vue.openBlock(), vue.createBlock(vue.unref(arrow_up_default), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(plus_default), { key: 1 }))
                    ]),
                    _: 1
                  })
                ])
              ], 42, ["aria-label", "onKeydown"])), [
                [vue.unref(vRepeatClick), increase]
              ]) : vue.createCommentVNode("v-if", true),
              vue.createVNode(vue.unref(ElInput), {
                id: _ctx.id,
                ref_key: "input",
                ref: input,
                type: "number",
                step: _ctx.step,
                "model-value": vue.unref(displayValue),
                placeholder: _ctx.placeholder,
                readonly: _ctx.readonly,
                disabled: vue.unref(inputNumberDisabled),
                size: vue.unref(inputNumberSize),
                max: _ctx.max,
                min: _ctx.min,
                name: _ctx.name,
                "aria-label": _ctx.ariaLabel,
                "validate-event": false,
                onKeydown: [
                  vue.withKeys(vue.withModifiers(increase, ["prevent"]), ["up"]),
                  vue.withKeys(vue.withModifiers(decrease, ["prevent"]), ["down"])
                ],
                onBlur: handleBlur,
                onFocus: handleFocus,
                onInput: handleInput,
                onChange: handleInputChange
              }, vue.createSlots({
                _: 2
              }, [
                _ctx.$slots.prefix ? {
                  name: "prefix",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "prefix")
                  ])
                } : void 0,
                _ctx.$slots.suffix ? {
                  name: "suffix",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "suffix")
                  ])
                } : void 0
              ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
            ], 42, ["onDragstart"]);
          };
        }
      });
      var InputNumber = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "input-number.vue"]]);
      const ElInputNumber = withInstall(InputNumber);
      const tabsRootContextKey = Symbol("tabsRootContextKey");
      const tabBarProps = buildProps({
        tabs: {
          type: definePropType(Array),
          default: () => mutable([])
        }
      });
      const COMPONENT_NAME$2 = "ElTabBar";
      const __default__$2 = vue.defineComponent({
        name: COMPONENT_NAME$2
      });
      const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
        ...__default__$2,
        props: tabBarProps,
        setup(__props, { expose }) {
          const props = __props;
          const instance = vue.getCurrentInstance();
          const rootTabs = vue.inject(tabsRootContextKey);
          if (!rootTabs)
            throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
          const ns = useNamespace("tabs");
          const barRef = vue.ref();
          const barStyle = vue.ref();
          const getBarStyle = () => {
            let offset = 0;
            let tabSize = 0;
            const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
            const sizeDir = sizeName === "width" ? "x" : "y";
            const position = sizeDir === "x" ? "left" : "top";
            props.tabs.every((tab) => {
              var _a2, _b;
              const $el = (_b = (_a2 = instance.parent) == null ? void 0 : _a2.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
              if (!$el)
                return false;
              if (!tab.active) {
                return true;
              }
              offset = $el[`offset${capitalize(position)}`];
              tabSize = $el[`client${capitalize(sizeName)}`];
              const tabStyles = window.getComputedStyle($el);
              if (sizeName === "width") {
                tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
                offset += Number.parseFloat(tabStyles.paddingLeft);
              }
              return false;
            });
            return {
              [sizeName]: `${tabSize}px`,
              transform: `translate${capitalize(sizeDir)}(${offset}px)`
            };
          };
          const update = () => barStyle.value = getBarStyle();
          const saveObserver = [];
          const observerTabs = () => {
            var _a2;
            saveObserver.forEach((observer) => observer.stop());
            saveObserver.length = 0;
            const list = (_a2 = instance.parent) == null ? void 0 : _a2.refs;
            if (!list)
              return;
            for (const key in list) {
              if (key.startsWith("tab-")) {
                const _el = list[key];
                if (_el) {
                  saveObserver.push(useResizeObserver(_el, update));
                }
              }
            }
          };
          vue.watch(() => props.tabs, async () => {
            await vue.nextTick();
            update();
            observerTabs();
          }, { immediate: true });
          const barObserever = useResizeObserver(barRef, () => update());
          vue.onBeforeUnmount(() => {
            saveObserver.forEach((observer) => observer.stop());
            saveObserver.length = 0;
            barObserever.stop();
          });
          expose({
            ref: barRef,
            update
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              ref_key: "barRef",
              ref: barRef,
              class: vue.normalizeClass([vue.unref(ns).e("active-bar"), vue.unref(ns).is(vue.unref(rootTabs).props.tabPosition)]),
              style: vue.normalizeStyle(barStyle.value)
            }, null, 6);
          };
        }
      });
      var TabBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "tab-bar.vue"]]);
      const tabNavProps = buildProps({
        panes: {
          type: definePropType(Array),
          default: () => mutable([])
        },
        currentName: {
          type: [String, Number],
          default: ""
        },
        editable: Boolean,
        type: {
          type: String,
          values: ["card", "border-card", ""],
          default: ""
        },
        stretch: Boolean
      });
      const tabNavEmits = {
        tabClick: (tab, tabName, ev) => ev instanceof Event,
        tabRemove: (tab, ev) => ev instanceof Event
      };
      const COMPONENT_NAME$1 = "ElTabNav";
      const TabNav = vue.defineComponent({
        name: COMPONENT_NAME$1,
        props: tabNavProps,
        emits: tabNavEmits,
        setup(props, {
          expose,
          emit
        }) {
          const rootTabs = vue.inject(tabsRootContextKey);
          if (!rootTabs)
            throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
          const ns = useNamespace("tabs");
          const visibility = useDocumentVisibility();
          const focused = useWindowFocus();
          const navScroll$ = vue.ref();
          const nav$ = vue.ref();
          const el$ = vue.ref();
          const tabBarRef = vue.ref();
          const scrollable = vue.ref(false);
          const navOffset = vue.ref(0);
          const isFocus = vue.ref(false);
          const focusable = vue.ref(true);
          const sizeName = vue.computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
          const navStyle = vue.computed(() => {
            const dir = sizeName.value === "width" ? "X" : "Y";
            return {
              transform: `translate${dir}(-${navOffset.value}px)`
            };
          });
          const scrollPrev = () => {
            if (!navScroll$.value)
              return;
            const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
            const currentOffset = navOffset.value;
            if (!currentOffset)
              return;
            const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
            navOffset.value = newOffset;
          };
          const scrollNext = () => {
            if (!navScroll$.value || !nav$.value)
              return;
            const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
            const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
            const currentOffset = navOffset.value;
            if (navSize - currentOffset <= containerSize)
              return;
            const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
            navOffset.value = newOffset;
          };
          const scrollToActiveTab = async () => {
            const nav = nav$.value;
            if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
              return;
            await vue.nextTick();
            const activeTab = el$.value.querySelector(".is-active");
            if (!activeTab)
              return;
            const navScroll = navScroll$.value;
            const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
            const activeTabBounding = activeTab.getBoundingClientRect();
            const navScrollBounding = navScroll.getBoundingClientRect();
            const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
            const currentOffset = navOffset.value;
            let newOffset = currentOffset;
            if (isHorizontal) {
              if (activeTabBounding.left < navScrollBounding.left) {
                newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
              }
              if (activeTabBounding.right > navScrollBounding.right) {
                newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
              }
            } else {
              if (activeTabBounding.top < navScrollBounding.top) {
                newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
              }
              if (activeTabBounding.bottom > navScrollBounding.bottom) {
                newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
              }
            }
            newOffset = Math.max(newOffset, 0);
            navOffset.value = Math.min(newOffset, maxOffset);
          };
          const update = () => {
            var _a2;
            if (!nav$.value || !navScroll$.value)
              return;
            props.stretch && ((_a2 = tabBarRef.value) == null ? void 0 : _a2.update());
            const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
            const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
            const currentOffset = navOffset.value;
            if (containerSize < navSize) {
              scrollable.value = scrollable.value || {};
              scrollable.value.prev = currentOffset;
              scrollable.value.next = currentOffset + containerSize < navSize;
              if (navSize - currentOffset < containerSize) {
                navOffset.value = navSize - containerSize;
              }
            } else {
              scrollable.value = false;
              if (currentOffset > 0) {
                navOffset.value = 0;
              }
            }
          };
          const changeTab = (event) => {
            let step = 0;
            switch (event.code) {
              case EVENT_CODE.left:
              case EVENT_CODE.up:
                step = -1;
                break;
              case EVENT_CODE.right:
              case EVENT_CODE.down:
                step = 1;
                break;
              default:
                return;
            }
            const tabList = Array.from(event.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
            const currentIndex = tabList.indexOf(event.target);
            let nextIndex = currentIndex + step;
            if (nextIndex < 0) {
              nextIndex = tabList.length - 1;
            } else if (nextIndex >= tabList.length) {
              nextIndex = 0;
            }
            tabList[nextIndex].focus({
              preventScroll: true
            });
            tabList[nextIndex].click();
            setFocus();
          };
          const setFocus = () => {
            if (focusable.value)
              isFocus.value = true;
          };
          const removeFocus = () => isFocus.value = false;
          vue.watch(visibility, (visibility2) => {
            if (visibility2 === "hidden") {
              focusable.value = false;
            } else if (visibility2 === "visible") {
              setTimeout(() => focusable.value = true, 50);
            }
          });
          vue.watch(focused, (focused2) => {
            if (focused2) {
              setTimeout(() => focusable.value = true, 50);
            } else {
              focusable.value = false;
            }
          });
          useResizeObserver(el$, update);
          vue.onMounted(() => setTimeout(() => scrollToActiveTab(), 0));
          vue.onUpdated(() => update());
          expose({
            scrollToActiveTab,
            removeFocus
          });
          return () => {
            const scrollBtn = scrollable.value ? [vue.createVNode("span", {
              "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
              "onClick": scrollPrev
            }, [vue.createVNode(ElIcon, null, {
              default: () => [vue.createVNode(arrow_left_default, null, null)]
            })]), vue.createVNode("span", {
              "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
              "onClick": scrollNext
            }, [vue.createVNode(ElIcon, null, {
              default: () => [vue.createVNode(arrow_right_default, null, null)]
            })])] : null;
            const tabs = props.panes.map((pane, index) => {
              var _a2, _b, _c, _d;
              const uid = pane.uid;
              const disabled = pane.props.disabled;
              const tabName = (_b = (_a2 = pane.props.name) != null ? _a2 : pane.index) != null ? _b : `${index}`;
              const closable = !disabled && (pane.isClosable || props.editable);
              pane.index = `${index}`;
              const btnClose = closable ? vue.createVNode(ElIcon, {
                "class": "is-icon-close",
                "onClick": (ev) => emit("tabRemove", pane, ev)
              }, {
                default: () => [vue.createVNode(close_default, null, null)]
              }) : null;
              const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
              const tabindex = !disabled && pane.active ? 0 : -1;
              return vue.createVNode("div", {
                "ref": `tab-${uid}`,
                "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
                "id": `tab-${tabName}`,
                "key": `tab-${uid}`,
                "aria-controls": `pane-${tabName}`,
                "role": "tab",
                "aria-selected": pane.active,
                "tabindex": tabindex,
                "onFocus": () => setFocus(),
                "onBlur": () => removeFocus(),
                "onClick": (ev) => {
                  removeFocus();
                  emit("tabClick", pane, tabName, ev);
                },
                "onKeydown": (ev) => {
                  if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
                    emit("tabRemove", pane, ev);
                  }
                }
              }, [...[tabLabelContent, btnClose]]);
            });
            return vue.createVNode("div", {
              "ref": el$,
              "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
            }, [scrollBtn, vue.createVNode("div", {
              "class": ns.e("nav-scroll"),
              "ref": navScroll$
            }, [vue.createVNode("div", {
              "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
              "ref": nav$,
              "style": navStyle.value,
              "role": "tablist",
              "onKeydown": changeTab
            }, [...[!props.type ? vue.createVNode(TabBar, {
              "ref": tabBarRef,
              "tabs": [...props.panes]
            }, null) : null, tabs]])])]);
          };
        }
      });
      const tabsProps = buildProps({
        type: {
          type: String,
          values: ["card", "border-card", ""],
          default: ""
        },
        closable: Boolean,
        addable: Boolean,
        modelValue: {
          type: [String, Number]
        },
        editable: Boolean,
        tabPosition: {
          type: String,
          values: ["top", "right", "bottom", "left"],
          default: "top"
        },
        beforeLeave: {
          type: definePropType(Function),
          default: () => true
        },
        stretch: Boolean
      });
      const isPaneName = (value) => isString(value) || isNumber(value);
      const tabsEmits = {
        [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
        tabClick: (pane, ev) => ev instanceof Event,
        tabChange: (name) => isPaneName(name),
        edit: (paneName, action) => ["remove", "add"].includes(action),
        tabRemove: (name) => isPaneName(name),
        tabAdd: () => true
      };
      const Tabs = vue.defineComponent({
        name: "ElTabs",
        props: tabsProps,
        emits: tabsEmits,
        setup(props, {
          emit,
          slots,
          expose
        }) {
          var _a2;
          const ns = useNamespace("tabs");
          const isVertical = vue.computed(() => ["left", "right"].includes(props.tabPosition));
          const {
            children: panes,
            addChild: sortPane,
            removeChild: unregisterPane
          } = useOrderedChildren(vue.getCurrentInstance(), "ElTabPane");
          const nav$ = vue.ref();
          const currentName = vue.ref((_a2 = props.modelValue) != null ? _a2 : "0");
          const setCurrentName = async (value, trigger = false) => {
            var _a22, _b, _c;
            if (currentName.value === value || isUndefined(value))
              return;
            try {
              const canLeave = await ((_a22 = props.beforeLeave) == null ? void 0 : _a22.call(props, value, currentName.value));
              if (canLeave !== false) {
                currentName.value = value;
                if (trigger) {
                  emit(UPDATE_MODEL_EVENT, value);
                  emit("tabChange", value);
                }
                (_c = (_b = nav$.value) == null ? void 0 : _b.removeFocus) == null ? void 0 : _c.call(_b);
              }
            } catch (e) {
            }
          };
          const handleTabClick = (tab, tabName, event) => {
            if (tab.props.disabled)
              return;
            setCurrentName(tabName, true);
            emit("tabClick", tab, event);
          };
          const handleTabRemove = (pane, ev) => {
            if (pane.props.disabled || isUndefined(pane.props.name))
              return;
            ev.stopPropagation();
            emit("edit", pane.props.name, "remove");
            emit("tabRemove", pane.props.name);
          };
          const handleTabAdd = () => {
            emit("edit", void 0, "add");
            emit("tabAdd");
          };
          vue.watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
          vue.watch(currentName, async () => {
            var _a22;
            await vue.nextTick();
            (_a22 = nav$.value) == null ? void 0 : _a22.scrollToActiveTab();
          });
          vue.provide(tabsRootContextKey, {
            props,
            currentName,
            registerPane: (pane) => {
              panes.value.push(pane);
            },
            sortPane,
            unregisterPane
          });
          expose({
            currentName
          });
          const TabNavRenderer = ({
            render: render2
          }) => {
            return render2();
          };
          return () => {
            const addSlot = slots["add-icon"];
            const newButton = props.editable || props.addable ? vue.createVNode("div", {
              "class": [ns.e("new-tab"), isVertical.value && ns.e("new-tab-vertical")],
              "tabindex": "0",
              "onClick": handleTabAdd,
              "onKeydown": (ev) => {
                if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter].includes(ev.code))
                  handleTabAdd();
              }
            }, [addSlot ? vue.renderSlot(slots, "add-icon") : vue.createVNode(ElIcon, {
              "class": ns.is("icon-plus")
            }, {
              default: () => [vue.createVNode(plus_default, null, null)]
            })]) : null;
            const header = vue.createVNode("div", {
              "class": [ns.e("header"), isVertical.value && ns.e("header-vertical"), ns.is(props.tabPosition)]
            }, [vue.createVNode(TabNavRenderer, {
              "render": () => {
                const hasLabelSlot = panes.value.some((pane) => pane.slots.label);
                return vue.createVNode(TabNav, {
                  ref: nav$,
                  currentName: currentName.value,
                  editable: props.editable,
                  type: props.type,
                  panes: panes.value,
                  stretch: props.stretch,
                  onTabClick: handleTabClick,
                  onTabRemove: handleTabRemove
                }, {
                  $stable: !hasLabelSlot
                });
              }
            }, null), newButton]);
            const panels = vue.createVNode("div", {
              "class": ns.e("content")
            }, [vue.renderSlot(slots, "default")]);
            return vue.createVNode("div", {
              "class": [ns.b(), ns.m(props.tabPosition), {
                [ns.m("card")]: props.type === "card",
                [ns.m("border-card")]: props.type === "border-card"
              }]
            }, [panels, header]);
          };
        }
      });
      const tabPaneProps = buildProps({
        label: {
          type: String,
          default: ""
        },
        name: {
          type: [String, Number]
        },
        closable: Boolean,
        disabled: Boolean,
        lazy: Boolean
      });
      const COMPONENT_NAME = "ElTabPane";
      const __default__$1 = vue.defineComponent({
        name: COMPONENT_NAME
      });
      const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
        ...__default__$1,
        props: tabPaneProps,
        setup(__props) {
          const props = __props;
          const instance = vue.getCurrentInstance();
          const slots = vue.useSlots();
          const tabsRoot = vue.inject(tabsRootContextKey);
          if (!tabsRoot)
            throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
          const ns = useNamespace("tab-pane");
          const index = vue.ref();
          const isClosable = vue.computed(() => props.closable || tabsRoot.props.closable);
          const active = computedEager(() => {
            var _a2;
            return tabsRoot.currentName.value === ((_a2 = props.name) != null ? _a2 : index.value);
          });
          const loaded = vue.ref(active.value);
          const paneName = vue.computed(() => {
            var _a2;
            return (_a2 = props.name) != null ? _a2 : index.value;
          });
          const shouldBeRender = computedEager(() => !props.lazy || loaded.value || active.value);
          vue.watch(active, (val) => {
            if (val)
              loaded.value = true;
          });
          const pane = vue.reactive({
            uid: instance.uid,
            slots,
            props,
            paneName,
            active,
            index,
            isClosable
          });
          tabsRoot.registerPane(pane);
          vue.onMounted(() => {
            tabsRoot.sortPane(pane);
          });
          vue.onUnmounted(() => {
            tabsRoot.unregisterPane(pane.uid);
          });
          return (_ctx, _cache) => {
            return vue.unref(shouldBeRender) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              id: `pane-${vue.unref(paneName)}`,
              class: vue.normalizeClass(vue.unref(ns).b()),
              role: "tabpanel",
              "aria-hidden": !vue.unref(active),
              "aria-labelledby": `tab-${vue.unref(paneName)}`
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 10, ["id", "aria-hidden", "aria-labelledby"])), [
              [vue.vShow, vue.unref(active)]
            ]) : vue.createCommentVNode("v-if", true);
          };
        }
      });
      var TabPane = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "tab-pane.vue"]]);
      const ElTabs = withInstall(Tabs, {
        TabPane
      });
      const ElTabPane = withNoopInstall(TabPane);
      const messageTypes = ["success", "info", "warning", "error"];
      const messageDefaults = mutable({
        customClass: "",
        center: false,
        dangerouslyUseHTMLString: false,
        duration: 3e3,
        icon: void 0,
        id: "",
        message: "",
        onClose: void 0,
        showClose: false,
        type: "info",
        plain: false,
        offset: 16,
        zIndex: 0,
        grouping: false,
        repeatNum: 1,
        appendTo: isClient ? document.body : void 0
      });
      const messageProps = buildProps({
        customClass: {
          type: String,
          default: messageDefaults.customClass
        },
        center: {
          type: Boolean,
          default: messageDefaults.center
        },
        dangerouslyUseHTMLString: {
          type: Boolean,
          default: messageDefaults.dangerouslyUseHTMLString
        },
        duration: {
          type: Number,
          default: messageDefaults.duration
        },
        icon: {
          type: iconPropType,
          default: messageDefaults.icon
        },
        id: {
          type: String,
          default: messageDefaults.id
        },
        message: {
          type: definePropType([
            String,
            Object,
            Function
          ]),
          default: messageDefaults.message
        },
        onClose: {
          type: definePropType(Function),
          default: messageDefaults.onClose
        },
        showClose: {
          type: Boolean,
          default: messageDefaults.showClose
        },
        type: {
          type: String,
          values: messageTypes,
          default: messageDefaults.type
        },
        plain: {
          type: Boolean,
          default: messageDefaults.plain
        },
        offset: {
          type: Number,
          default: messageDefaults.offset
        },
        zIndex: {
          type: Number,
          default: messageDefaults.zIndex
        },
        grouping: {
          type: Boolean,
          default: messageDefaults.grouping
        },
        repeatNum: {
          type: Number,
          default: messageDefaults.repeatNum
        }
      });
      const messageEmits = {
        destroy: () => true
      };
      const instances = vue.shallowReactive([]);
      const getInstance = (id) => {
        const idx = instances.findIndex((instance) => instance.id === id);
        const current = instances[idx];
        let prev;
        if (idx > 0) {
          prev = instances[idx - 1];
        }
        return { current, prev };
      };
      const getLastOffset = (id) => {
        const { prev } = getInstance(id);
        if (!prev)
          return 0;
        return prev.vm.exposed.bottom.value;
      };
      const getOffsetOrSpace = (id, offset) => {
        const idx = instances.findIndex((instance) => instance.id === id);
        return idx > 0 ? 16 : offset;
      };
      const __default__ = vue.defineComponent({
        name: "ElMessage"
      });
      const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
        ...__default__,
        props: messageProps,
        emits: messageEmits,
        setup(__props, { expose }) {
          const props = __props;
          const { Close } = TypeComponents;
          const { ns, zIndex: zIndex2 } = useGlobalComponentSettings("message");
          const { currentZIndex, nextZIndex } = zIndex2;
          const messageRef = vue.ref();
          const visible = vue.ref(false);
          const height = vue.ref(0);
          let stopTimer = void 0;
          const badgeType = vue.computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
          const typeClass = vue.computed(() => {
            const type = props.type;
            return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
          });
          const iconComponent = vue.computed(() => props.icon || TypeComponentsMap[props.type] || "");
          const lastOffset = vue.computed(() => getLastOffset(props.id));
          const offset = vue.computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
          const bottom = vue.computed(() => height.value + offset.value);
          const customStyle = vue.computed(() => ({
            top: `${offset.value}px`,
            zIndex: currentZIndex.value
          }));
          function startTimer() {
            if (props.duration === 0)
              return;
            ({ stop: stopTimer } = useTimeoutFn(() => {
              close();
            }, props.duration));
          }
          function clearTimer() {
            stopTimer == null ? void 0 : stopTimer();
          }
          function close() {
            visible.value = false;
          }
          function keydown({ code }) {
            if (code === EVENT_CODE.esc) {
              close();
            }
          }
          vue.onMounted(() => {
            startTimer();
            nextZIndex();
            visible.value = true;
          });
          vue.watch(() => props.repeatNum, () => {
            clearTimer();
            startTimer();
          });
          useEventListener(document, "keydown", keydown);
          useResizeObserver(messageRef, () => {
            height.value = messageRef.value.getBoundingClientRect().height;
          });
          expose({
            visible,
            bottom,
            close
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.Transition, {
              name: vue.unref(ns).b("fade"),
              onBeforeLeave: _ctx.onClose,
              onAfterLeave: ($event) => _ctx.$emit("destroy"),
              persisted: ""
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode("div", {
                  id: _ctx.id,
                  ref_key: "messageRef",
                  ref: messageRef,
                  class: vue.normalizeClass([
                    vue.unref(ns).b(),
                    { [vue.unref(ns).m(_ctx.type)]: _ctx.type },
                    vue.unref(ns).is("center", _ctx.center),
                    vue.unref(ns).is("closable", _ctx.showClose),
                    vue.unref(ns).is("plain", _ctx.plain),
                    _ctx.customClass
                  ]),
                  style: vue.normalizeStyle(vue.unref(customStyle)),
                  role: "alert",
                  onMouseenter: clearTimer,
                  onMouseleave: startTimer
                }, [
                  _ctx.repeatNum > 1 ? (vue.openBlock(), vue.createBlock(vue.unref(ElBadge), {
                    key: 0,
                    value: _ctx.repeatNum,
                    type: vue.unref(badgeType),
                    class: vue.normalizeClass(vue.unref(ns).e("badge"))
                  }, null, 8, ["value", "type", "class"])) : vue.createCommentVNode("v-if", true),
                  vue.unref(iconComponent) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                    key: 1,
                    class: vue.normalizeClass([vue.unref(ns).e("icon"), vue.unref(typeClass)])
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(iconComponent))))
                    ]),
                    _: 1
                  }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    !_ctx.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock("p", {
                      key: 0,
                      class: vue.normalizeClass(vue.unref(ns).e("content"))
                    }, vue.toDisplayString(_ctx.message), 3)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      vue.createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                      vue.createElementVNode("p", {
                        class: vue.normalizeClass(vue.unref(ns).e("content")),
                        innerHTML: _ctx.message
                      }, null, 10, ["innerHTML"])
                    ], 2112))
                  ]),
                  _ctx.showClose ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                    key: 2,
                    class: vue.normalizeClass(vue.unref(ns).e("closeBtn")),
                    onClick: vue.withModifiers(close, ["stop"])
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(Close))
                    ]),
                    _: 1
                  }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true)
                ], 46, ["id"]), [
                  [vue.vShow, visible.value]
                ])
              ]),
              _: 3
            }, 8, ["name", "onBeforeLeave", "onAfterLeave"]);
          };
        }
      });
      var MessageConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "message.vue"]]);
      let seed = 1;
      const normalizeOptions = (params) => {
        const options = !params || isString(params) || vue.isVNode(params) || isFunction$1(params) ? { message: params } : params;
        const normalized = {
          ...messageDefaults,
          ...options
        };
        if (!normalized.appendTo) {
          normalized.appendTo = document.body;
        } else if (isString(normalized.appendTo)) {
          let appendTo = document.querySelector(normalized.appendTo);
          if (!isElement(appendTo)) {
            appendTo = document.body;
          }
          normalized.appendTo = appendTo;
        }
        if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
          normalized.grouping = messageConfig.grouping;
        }
        if (isNumber(messageConfig.duration) && normalized.duration === 3e3) {
          normalized.duration = messageConfig.duration;
        }
        if (isNumber(messageConfig.offset) && normalized.offset === 16) {
          normalized.offset = messageConfig.offset;
        }
        if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
          normalized.showClose = messageConfig.showClose;
        }
        return normalized;
      };
      const closeMessage = (instance) => {
        const idx = instances.indexOf(instance);
        if (idx === -1)
          return;
        instances.splice(idx, 1);
        const { handler } = instance;
        handler.close();
      };
      const createMessage = ({ appendTo, ...options }, context) => {
        const id = `message_${seed++}`;
        const userOnClose = options.onClose;
        const container = document.createElement("div");
        const props = {
          ...options,
          id,
          onClose: () => {
            userOnClose == null ? void 0 : userOnClose();
            closeMessage(instance);
          },
          onDestroy: () => {
            vue.render(null, container);
          }
        };
        const vnode = vue.createVNode(MessageConstructor, props, isFunction$1(props.message) || vue.isVNode(props.message) ? {
          default: isFunction$1(props.message) ? props.message : () => props.message
        } : null);
        vnode.appContext = context || message._context;
        vue.render(vnode, container);
        appendTo.appendChild(container.firstElementChild);
        const vm = vnode.component;
        const handler = {
          close: () => {
            vm.exposed.visible.value = false;
          }
        };
        const instance = {
          id,
          vnode,
          vm,
          handler,
          props: vnode.component.props
        };
        return instance;
      };
      const message = (options = {}, context) => {
        if (!isClient)
          return { close: () => void 0 };
        const normalized = normalizeOptions(options);
        if (normalized.grouping && instances.length) {
          const instance2 = instances.find(({ vnode: vm }) => {
            var _a2;
            return ((_a2 = vm.props) == null ? void 0 : _a2.message) === normalized.message;
          });
          if (instance2) {
            instance2.props.repeatNum += 1;
            instance2.props.type = normalized.type;
            return instance2.handler;
          }
        }
        if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
          return { close: () => void 0 };
        }
        const instance = createMessage(normalized, context);
        instances.push(instance);
        return instance.handler;
      };
      messageTypes.forEach((type) => {
        message[type] = (options = {}, appContext) => {
          const normalized = normalizeOptions(options);
          return message({ ...normalized, type }, appContext);
        };
      });
      function closeAll(type) {
        for (const instance of instances) {
          if (!type || type === instance.props.type) {
            instance.handler.close();
          }
        }
      }
      message.closeAll = closeAll;
      message._context = null;
      const ElMessage = withInstallFunction(message, "$message");
      var zhCn = {
        name: "zh-cn",
        el: {
          breadcrumb: {
            label: "面包屑"
          },
          colorpicker: {
            confirm: "确定",
            clear: "清空",
            defaultLabel: "颜色选择器",
            description: "当前颜色 {color}，按 Enter 键选择新颜色",
            alphaLabel: "选择透明度的值"
          },
          datepicker: {
            now: "此刻",
            today: "今天",
            cancel: "取消",
            clear: "清空",
            confirm: "确定",
            dateTablePrompt: "使用方向键与 Enter 键可选择日期",
            monthTablePrompt: "使用方向键与 Enter 键可选择月份",
            yearTablePrompt: "使用方向键与 Enter 键可选择年份",
            selectedDate: "已选日期",
            selectDate: "选择日期",
            selectTime: "选择时间",
            startDate: "开始日期",
            startTime: "开始时间",
            endDate: "结束日期",
            endTime: "结束时间",
            prevYear: "前一年",
            nextYear: "后一年",
            prevMonth: "上个月",
            nextMonth: "下个月",
            year: "年",
            month1: "1 月",
            month2: "2 月",
            month3: "3 月",
            month4: "4 月",
            month5: "5 月",
            month6: "6 月",
            month7: "7 月",
            month8: "8 月",
            month9: "9 月",
            month10: "10 月",
            month11: "11 月",
            month12: "12 月",
            weeks: {
              sun: "日",
              mon: "一",
              tue: "二",
              wed: "三",
              thu: "四",
              fri: "五",
              sat: "六"
            },
            weeksFull: {
              sun: "星期日",
              mon: "星期一",
              tue: "星期二",
              wed: "星期三",
              thu: "星期四",
              fri: "星期五",
              sat: "星期六"
            },
            months: {
              jan: "一月",
              feb: "二月",
              mar: "三月",
              apr: "四月",
              may: "五月",
              jun: "六月",
              jul: "七月",
              aug: "八月",
              sep: "九月",
              oct: "十月",
              nov: "十一月",
              dec: "十二月"
            }
          },
          inputNumber: {
            decrease: "减少数值",
            increase: "增加数值"
          },
          select: {
            loading: "加载中",
            noMatch: "无匹配数据",
            noData: "无数据",
            placeholder: "请选择"
          },
          dropdown: {
            toggleDropdown: "切换下拉选项"
          },
          mention: {
            loading: "加载中"
          },
          cascader: {
            noMatch: "无匹配数据",
            loading: "加载中",
            placeholder: "请选择",
            noData: "暂无数据"
          },
          pagination: {
            goto: "前往",
            pagesize: "条/页",
            total: "共 {total} 条",
            pageClassifier: "页",
            page: "页",
            prev: "上一页",
            next: "下一页",
            currentPage: "第 {pager} 页",
            prevPages: "向前 {pager} 页",
            nextPages: "向后 {pager} 页",
            deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
          },
          dialog: {
            close: "关闭此对话框"
          },
          drawer: {
            close: "关闭此对话框"
          },
          messagebox: {
            title: "提示",
            confirm: "确定",
            cancel: "取消",
            error: "输入的数据不合法!",
            close: "关闭此对话框"
          },
          upload: {
            deleteTip: "按 delete 键可删除",
            delete: "删除",
            preview: "查看图片",
            continue: "继续上传"
          },
          slider: {
            defaultLabel: "滑块介于 {min} 至 {max}",
            defaultRangeStartLabel: "选择起始值",
            defaultRangeEndLabel: "选择结束值"
          },
          table: {
            emptyText: "暂无数据",
            confirmFilter: "筛选",
            resetFilter: "重置",
            clearFilter: "全部",
            sumText: "合计"
          },
          tour: {
            next: "下一步",
            previous: "上一步",
            finish: "结束导览"
          },
          tree: {
            emptyText: "暂无数据"
          },
          transfer: {
            noMatch: "无匹配数据",
            noData: "无数据",
            titles: ["列表 1", "列表 2"],
            filterPlaceholder: "请输入搜索内容",
            noCheckedFormat: "共 {total} 项",
            hasCheckedFormat: "已选 {checked}/{total} 项"
          },
          image: {
            error: "加载失败"
          },
          pageHeader: {
            title: "返回"
          },
          popconfirm: {
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          },
          carousel: {
            leftArrow: "上一张幻灯片",
            rightArrow: "下一张幻灯片",
            indicator: "幻灯片切换至索引 {index}"
          }
        }
      };
      var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
      var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
      var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
      function camelToSnake(obj) {
        function toSnakeCase(str) {
          return str.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
        }
        function convertKeys(obj2) {
          const converted = {};
          for (const key in obj2) {
            if (Object.prototype.hasOwnProperty.call(obj2, key)) {
              const snakeCaseKey = toSnakeCase(key);
              if (typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
                converted[snakeCaseKey] = convertKeys(obj2[key]);
              } else if (Array.isArray(obj2[key])) {
                converted[snakeCaseKey] = obj2[key].map((item) => {
                  if (typeof item === "object" && !Array.isArray(item)) {
                    return convertKeys(item);
                  } else {
                    return item;
                  }
                });
              } else {
                converted[snakeCaseKey] = obj2[key];
              }
            }
          }
          return converted;
        }
        return convertKeys(obj);
      }
      function getRandomItemFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }
      function formatTime(timestamp, format2) {
        const res = dayjs(timestamp).format(format2);
        return res;
      }
      const useNoteStore = pinia.defineStore("xhs-download-script-note", {
        state: () => ({
          note: {}
        }),
        actions: {
          setNote(data) {
            this.note = { ...data };
          }
        },
        persist: false
      });
      const appName = "小红书下载助手 v" + _GM.info.script.version;
      const imageRequestBaseUrl = [
        "https://sns-img-hw.xhscdn.net/",
        "https://sns-img-bd.xhscdn.com/",
        "https://sns-img-qc.xhscdn.com/",
        "https://ci.xiaohongshu.com/"
      ];
      const videoRequestBaseUrl = [
        "https://sns-video-hw.xhscdn.com/",
        "https://sns-video-bd.xhscdn.com/",
        "https://sns-video-al.xhscdn.com/"
      ];
      const jpgQueryParams = "?imageView2/2/w/format/jpg";
      const fileKeyReg = new RegExp("(?<=\\/)(spectrum\\/)?((note_pre_post_uhdr|notes_pre_post|notes_uhdr)\\/)?[a-z0-9A-Z\\-]+(?=!)");
      const legacyDefaultFileNameRule = `$<序号>.$
[<发布者昵称>]
<标题>
(<发布时间>)
`;
      const defaultFileNameRule = `[<发布者昵称>]
[<小红书号>]
<标题>
(<发布时间>)
$.<序号>$
`;
      var DownloadFormat = /* @__PURE__ */ ((DownloadFormat2) => {
        DownloadFormat2[DownloadFormat2["default"] = 0] = "default";
        DownloadFormat2[DownloadFormat2["origin"] = 1] = "origin";
        DownloadFormat2[DownloadFormat2["jpg"] = 2] = "jpg";
        DownloadFormat2[DownloadFormat2["live"] = 3] = "live";
        return DownloadFormat2;
      })(DownloadFormat || {});
      function getDefaultSetting() {
        return {
          nameRule: defaultFileNameRule,
          timeFormatRule: "YYYY年MM月DD日HH时mm分ss秒",
          jsonRpcUrl: "http://localhost:16800/jsonrpc",
          jsonRpcToken: "",
          downloadLocation: "",
          useNameAsDir: true,
          useTitleAsDir: true,
          DownloadFormatObj: {
            video: DownloadFormat.default,
            normal: DownloadFormat.default
          },
          preferLive: true,
          openRpcDownload: false,
          downloadContainerSize: "50%",
          downloadContainerCol: 4
        };
      }
      const useSettingStorageStore = pinia.defineStore(
        "xhs-download-script-setting-storage",
        {
          state: () => getDefaultSetting(),
          actions: {
            reset() {
              this.$reset();
            }
          },
          persist: true
        }
      );
      async function extractHtmlContent(url, selector) {
        var _a2;
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const element = doc.querySelector(selector);
        return ((_a2 = element == null ? void 0 : element.textContent) == null ? void 0 : _a2.trim()) || "";
      }
      const globalFileNameVarMap = {
        序号: "index",
        笔记id: "noteId",
        标题: "title",
        发布时间: "publishTime",
        ip归属地: "ipLocation",
        发布者昵称: "nickname",
        小红书号: "redId",
        发布者id: "userId"
      };
      function getFileNameByNamingRule(nameData, nameRule, noSequence = false) {
        let res = nameRule.replaceAll("\n", "");
        Object.entries(globalFileNameVarMap).forEach(([key, value]) => {
          let globalKeyRegExp = new RegExp(`<${key}>`, "g");
          res = res.replaceAll(/\$.*?\$/g, (val) => {
            if (val.includes("序号") && noSequence) {
              val = "";
            }
            return val.replaceAll("$", "");
          });
          res = res.replace(globalKeyRegExp, nameData[value] + "");
        });
        return res;
      }
      async function getRedId() {
        var _a2;
        console.log("获取小红书号 ↓");
        let id = "";
        const settingStore = useSettingStorageStore();
        if (settingStore.nameRule.includes("<小红书号>")) {
          console.log("真的去获取小红书号");
          const link = (_a2 = document.querySelector(".author-wrapper .info a")) == null ? void 0 : _a2.getAttribute("href");
          if (link == null ? void 0 : link.length) {
            const content = await extractHtmlContent(link, ".user-redId");
            id = content.replace(/^(?:小红书号[：:]\s*|rednote ID:\s*)/i, "");
          }
        } else {
          console.log("不满足条件 不去获取");
        }
        return id;
      }
      const request = (url, data, method = "POST") => {
        const settingStore = useSettingStorageStore();
        return new Promise((resolve, reject) => {
          _GM_xmlhttpRequest({
            method,
            url: settingStore.jsonRpcUrl + url,
            data: data ? JSON.stringify(data) : "",
            nocache: true,
            timeout: 2e4,
            headers: {
              "Content-Type": "application/json"
            },
            onload: function(response) {
              var _a2;
              try {
                const contentType = (_a2 = response.responseHeaders) == null ? void 0 : _a2.toLowerCase().includes("application/json");
                const data2 = contentType ? JSON.parse(response.responseText) : response.responseText;
                resolve(data2);
                if (data2.error) {
                  ElMessage.error("aria2:" + data2.error.message);
                }
                console.log("响应的原始数据", data2);
              } catch (error) {
                console.log("失败", error);
                reject(
                  new Error("Failed to parse response as JSON: " + error.message)
                );
              }
            },
            onerror: function(err) {
              console.log("err", err);
              ElMessage.error(err.error || "连接出错");
              reject(err);
            },
            ontimeout: function() {
              reject("timeout");
            }
          });
        });
      };
      const reqAria2Version = async () => {
        var _a2;
        const settingStore = useSettingStorageStore();
        try {
          const res = await request("", {
            id: "小红书下载助手_版本检查",
            // jsonrpc: '2.0',
            method: "aria2.getVersion",
            params: [`token:${settingStore.jsonRpcToken}`]
          });
          if (((_a2 = res.error) == null ? void 0 : _a2.message) == "Unauthorized") {
            ElMessage.error("连接失败，请检查秘钥是否正确");
          } else {
            ElMessage.success("连接测试成功，可以使用aria2远程下载");
          }
        } catch (error) {
          ElMessage.error("连接失败，请检查地址、秘钥是否正确或服务是否启动");
        }
        return "ok";
      };
      const reqAria2Download = async (list) => {
        var _a2, _b;
        if (!(list == null ? void 0 : list.length)) return;
        const settingStore = useSettingStorageStore();
        const token = settingStore.jsonRpcToken;
        const downloadLocation = settingStore.downloadLocation;
        const urlList = list.map((item) => {
          const urlItem = {
            out: item.name,
            dir: (downloadLocation ? downloadLocation + "/" : downloadLocation) + item.dir || ""
          };
          if (urlItem.dir == "") {
            delete urlItem.dir;
          }
          const res = {
            methodName: "aria2.addUri",
            params: [`token:${token}`, [item.url], urlItem]
          };
          return res;
        });
        console.log("下载列表", urlList);
        try {
          const res = await request("", {
            id: "小红书下载助手_下载",
            // jsonrpc: '2.0',
            method: "system.multicall",
            params: [urlList]
          });
          console.log("下载列表", res.result);
          if (((_a2 = res.error) == null ? void 0 : _a2.message) == "Unauthorized" || ((_b = res.result[0]) == null ? void 0 : _b.message) == "Unauthorized") {
            ElMessage.error("连接失败，请检查秘钥是否正确");
          } else {
            ElMessage.success("已添加到下载列表");
          }
        } catch (error) {
          ElMessage.error("连接失败，请检查远程下载配置是否正确");
        }
        return "ok";
      };
      const _hoisted_1$4 = { class: "form-example" };
      const _hoisted_2$3 = { class: "form-example important" };
      const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
        __name: "SettingDialogContent",
        setup(__props) {
          const varListStr = vue.computed(() => {
            return Object.entries(globalFileNameVarMap).map(([key, label]) => key).join(",");
          });
          const settingStorageStore = useSettingStorageStore();
          function reset() {
            settingStorageStore.reset();
          }
          function testRpcConnection() {
            ElMessage.info("请求已发送");
            reqAria2Version();
          }
          const noteStore = useNoteStore();
          const exampleName = vue.ref("");
          vue.watch(
            [
              () => settingStorageStore.nameRule,
              () => settingStorageStore.timeFormatRule
            ],
            async () => {
              var _a2, _b, _c, _d, _e, _f, _g;
              if (!((_a2 = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _a2.title)) {
                exampleName.value = "打开笔记后方可预览";
                return;
              }
              exampleName.value = getFileNameByNamingRule(
                {
                  index: 1,
                  title: (_b = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _b.title,
                  ipLocation: (_c = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _c.ip_location,
                  nickname: (_d = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _d.user.nickname,
                  noteId: (_e = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _e.note_id,
                  publishTime: formatTime(
                    (_f = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _f.time,
                    settingStorageStore.timeFormatRule
                  ),
                  userId: (_g = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _g.user.user_id,
                  redId: await getRedId()
                },
                settingStorageStore.nameRule
              );
            },
            { immediate: true }
          );
          return (_ctx, _cache) => {
            const _component_el_divider = ElDivider;
            const _component_el_input = ElInput;
            const _component_el_form_item = ElFormItem;
            const _component_el_button = ElButton;
            const _component_el_checkbox = ElCheckbox;
            const _component_el_form = ElForm;
            return vue.openBlock(), vue.createBlock(_component_el_form, { "label-width": "6rem" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_divider, null, {
                  default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                    vue.createElementVNode("div", { class: "form-title" }, "文件命名设置", -1)
                  ])),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "命名规则" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_input, {
                      modelValue: vue.unref(settingStorageStore).nameRule,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(settingStorageStore).nameRule = $event),
                      type: "textarea",
                      rows: 6
                    }, null, 8, ["modelValue"]),
                    vue.createElementVNode("div", _hoisted_1$4, "全局变量：" + vue.toDisplayString(vue.unref(varListStr)), 1),
                    vue.createElementVNode("div", _hoisted_2$3, "示例：" + vue.toDisplayString(vue.unref(exampleName)), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "时间格式" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_input, {
                      modelValue: vue.unref(settingStorageStore).timeFormatRule,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(settingStorageStore).timeFormatRule = $event)
                    }, null, 8, ["modelValue"]),
                    _cache[8] || (_cache[8] = vue.createElementVNode("div", { class: "form-example" }, [
                      vue.createElementVNode("a", {
                        href: "https://dayjs.fenxianglu.cn/category/display.html#%E6%A0%BC%E5%BC%8F%E5%8C%96",
                        target: "_blank",
                        class: "link"
                      }, " 格式参考 ")
                    ], -1))
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_divider, null, {
                  default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                    vue.createElementVNode("div", { class: "title" }, "远程下载设置", -1)
                  ])),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "请求地址" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_input, {
                      modelValue: vue.unref(settingStorageStore).jsonRpcUrl,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(settingStorageStore).jsonRpcUrl = $event)
                    }, {
                      append: vue.withCtx(() => [
                        vue.createVNode(_component_el_button, { onClick: testRpcConnection }, {
                          default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                            vue.createTextVNode("测试连接")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "rpc秘钥" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_input, {
                      modelValue: vue.unref(settingStorageStore).jsonRpcToken,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(settingStorageStore).jsonRpcToken = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "下载位置" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_input, {
                      modelValue: vue.unref(settingStorageStore).downloadLocation,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(settingStorageStore).downloadLocation = $event)
                    }, null, 8, ["modelValue"]),
                    _cache[11] || (_cache[11] = vue.createElementVNode("div", { class: "form-example" }, " 示例：F:\\xiaohongshu 或 /home/download/xiaohongshu ", -1))
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, { label: "文件分类" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_checkbox, {
                      modelValue: vue.unref(settingStorageStore).useNameAsDir,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(settingStorageStore).useNameAsDir = $event)
                    }, {
                      default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                        vue.createElementVNode("div", { class: "flex-center" }, "按作者昵称分类", -1)
                      ])),
                      _: 1
                    }, 8, ["modelValue"]),
                    vue.createVNode(_component_el_checkbox, {
                      modelValue: vue.unref(settingStorageStore).useTitleAsDir,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(settingStorageStore).useTitleAsDir = $event)
                    }, {
                      default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                        vue.createElementVNode("div", { class: "flex-center" }, "按笔记标题分类", -1)
                      ])),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_button, {
                      type: "warning",
                      onClick: reset
                    }, {
                      default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                        vue.createTextVNode(" 重置设置 ")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            });
          };
        }
      });
      const _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };
      const SettingDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d8bbc8c0"]]);
      const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
        __name: "SettingDialog",
        props: {
          modelValue: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, { emit: __emit }) {
          const emit = __emit;
          const props = __props;
          const isOpenSettingDialog = vue.computed({
            get: () => props.modelValue,
            set: (val) => {
              emit("update:modelValue", val);
            }
          });
          return (_ctx, _cache) => {
            const _component_el_drawer = ElDrawer;
            return vue.openBlock(), vue.createBlock(_component_el_drawer, {
              modelValue: vue.unref(isOpenSettingDialog),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(isOpenSettingDialog) ? isOpenSettingDialog.value = $event : null),
              "destroy-on-close": "",
              class: "xiaohongshu-download-script_dialog",
              title: "设置"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(SettingDialogContent)
              ]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });
      var dist = {};
      var patternTree = {};
      var toHex$1 = {};
      Object.defineProperty(toHex$1, "__esModule", { value: true });
      toHex$1.fromHex = toHex$1.toHex = void 0;
      const hex = (num) => new Number(num).toString(16).toLowerCase();
      const toHex = (num) => `0x${hex(num).length === 1 ? "0" + hex(num) : hex(num)}`;
      toHex$1.toHex = toHex;
      const fromHex = (hex2) => new Number(hex2);
      toHex$1.fromHex = fromHex;
      var tree$1 = {};
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.createComplexNode = exports2.createNode = exports2.merge = void 0;
        const createMatch = (leaf) => ({
          typename: leaf.typename,
          mime: leaf.info.mime,
          extension: leaf.info.extension
        });
        const isMatchingNode = (tree2, path) => tree2 && path.length === 0;
        const head = (arr) => arr[0];
        const tail = (arr) => arr.slice(1, arr.length);
        const merge = (node, tree2) => {
          if (node.bytes.length === 0)
            return tree2;
          const currentByte = head(node.bytes);
          const path = tail(node.bytes);
          const currentTree = tree2.bytes[currentByte];
          if (isMatchingNode(currentTree, path)) {
            const matchingNode = tree2.bytes[currentByte];
            tree2.bytes[currentByte] = {
              ...matchingNode,
              matches: [
                ...matchingNode.matches ? matchingNode.matches : [],
                createMatch(node)
              ]
            };
            return tree2;
          }
          if (tree2.bytes[currentByte]) {
            tree2.bytes[currentByte] = exports2.merge(exports2.createNode(node.typename, path, node.info), tree2.bytes[currentByte]);
            return tree2;
          }
          if (!tree2.bytes[currentByte]) {
            tree2.bytes[currentByte] = {
              ...tree2.bytes[currentByte],
              ...exports2.createComplexNode(node.typename, path, node.info)
            };
          }
          return tree2;
        };
        exports2.merge = merge;
        const createNode = (typename, bytes, info) => {
          return { typename, bytes, info: info ? info : {} };
        };
        exports2.createNode = createNode;
        const createComplexNode = (typename, bytes, info) => {
          let obj = {
            bytes: {},
            matches: void 0
          };
          const currentKey = head(bytes);
          const path = tail(bytes);
          if (bytes.length === 0) {
            return {
              matches: [
                createMatch({
                  typename,
                  info: info ? { extension: info.extension, mime: info.mime } : {}
                })
              ],
              bytes: {}
            };
          }
          obj.bytes[currentKey] = exports2.createComplexNode(typename, path, info);
          return obj;
        };
        exports2.createComplexNode = createComplexNode;
      })(tree$1);
      Object.defineProperty(patternTree, "__esModule", { value: true });
      const toHex_1 = toHex$1;
      const tree_1 = tree$1;
      let tree = {
        noOffset: null,
        offset: {}
      };
      const add = (typename, signature, additionalInfo, offset) => {
        if (offset) {
          const existing = tree.offset[toHex_1.toHex(offset)];
          if (!existing) {
            tree.offset[toHex_1.toHex(offset)] = tree_1.createComplexNode(typename, signature.map((e) => e.toLowerCase()), additionalInfo);
          } else {
            const merged = tree_1.merge(tree_1.createNode(typename, signature.map((e) => e.toLowerCase()), additionalInfo), { ...existing });
            tree.offset[toHex_1.toHex(offset)] = merged;
          }
        } else {
          if (tree.noOffset === null) {
            tree.noOffset = tree_1.createComplexNode(typename, signature.map((e) => e.toLowerCase()), additionalInfo);
          } else {
            tree.noOffset = tree_1.merge(tree_1.createNode(typename, signature.map((e) => e.toLowerCase()), additionalInfo), tree.noOffset);
          }
        }
      };
      add("gif", ["0x47", "0x49", "0x46", "0x38", "0x37", "0x61"], {
        mime: "image/gif",
        extension: "gif"
      });
      add("gif", ["0x47", "0x49", "0x46", "0x38", "0x39", "0x61"], {
        mime: "image/gif",
        extension: "gif"
      });
      add("jpg", ["0xFF", "0xD8", "0xFF"], {
        mime: "image/jpeg",
        extension: "jpeg"
      });
      add("webp", [
        "0x52",
        "0x49",
        "0x46",
        "0x46",
        "?",
        "?",
        "?",
        "?",
        "0x57",
        "0x45",
        "0x42",
        "0x50"
      ], { mime: "image/webp", extension: "webp" });
      add("heif", ["0x66", "0x74", "0x79", "0x70", "0x6D", "0x69", "0x66", "0x31"], { mime: "image/heif", extension: "heif" }, 4);
      add("heif", ["0x66", "0x74", "0x79", "0x70", "0x68", "0x65", "0x69", "0x63"], { mime: "image/heif", extension: "heic" }, 4);
      add("rpm", ["0xed", "0xab", "0xee", "0xdb"]);
      add("bin", ["0x53", "0x50", "0x30", "0x31"], {
        mime: "application/octet-stream",
        extension: "bin"
      });
      add("pic", ["0x00"]);
      add("pif", ["0x00"]);
      add("sea", ["0x00"]);
      add("ytr", ["0x00"]);
      add("mp4", ["0x66", "0x74", "0x79", "0x70"], { mime: "video/mp4", extension: "mp4" }, 4);
      add("ttf", ["0x00", "0x01", "0x00", "0x00", "0x00"], {
        mime: "font/ttf",
        extension: "ttf"
      });
      add("otf", ["0x4F", "0x54", "0x54", "0x4F"], {
        mime: "font/otf",
        extension: "otf"
      });
      add("eot", ["0x50", "0x4C"], {
        mime: "application/vnd.ms-fontobject",
        extension: "eot"
      });
      add("woff", ["0x77", "0x4F", "0x46", "0x46"], {
        mime: "font/woff",
        extension: "woff"
      });
      add("woff2", ["0x77", "0x4F", "0x46", "0x32"], {
        mime: "font/woff2",
        extension: "woff2"
      });
      add("pdb", [
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00"
      ]);
      add("dba", ["0xBE", "0xBA", "0xFE", "0xCA"]);
      add("dba2", ["0x00", "0x01", "0x42", "0x44"]);
      add("tda", ["0x00", "0x01", "0x44", "0x54"]);
      add("tda2", ["0x00", "0x01", "0x00", "0x00"]);
      add("ico", ["0x00", "0x00", "0x01", "0x00"], {
        mime: "image/x-icon",
        extension: "ico"
      });
      add("3gp", ["0x66", "0x74", "0x79", "0x70", "0x33", "0x67"]);
      add("z", ["0x1F", "0x9D"]);
      add("tar.z", ["0x1F", "0xA0"]);
      add("bac", [
        "0x42",
        "0x41",
        "0x43",
        "0x4B",
        "0x4D",
        "0x49",
        "0x4B",
        "0x45",
        "0x44",
        "0x49",
        "0x53",
        "0x4B"
      ]);
      add("bz2", ["0x42", "0x5A", "0x68"], {
        mime: "application/x-bzip2",
        extension: "bz2"
      });
      add("tif", ["0x49", "0x49", "0x2A", "0x00"], {
        mime: "image/tiff",
        extension: "tif"
      });
      add("tiff", ["0x4D", "0x4D", "0x00", "0x2A"], {
        mime: "image/tiff",
        extension: "tiff"
      });
      add("cr2", [
        "0x49",
        "0x49",
        "0x2A",
        "0x00",
        "0x10",
        "0x00",
        "0x00",
        "0x00",
        "0x43",
        "0x52"
      ]);
      add("cin", ["0x80", "0x2A", "0x5F", "0xD7"]);
      add("cin1", ["0x52", "0x4E", "0x43", "0x01"]);
      add("cin2", ["0x52", "0x4E", "0x43", "0x02"]);
      add("dpx", ["0x53", "0x44", "0x50", "0x58"]);
      add("dpx2", ["0x58", "0x50", "0x44", "0x53"]);
      add("exr", ["0x76", "0x2F", "0x31", "0x01"]);
      add("bpg", ["0x42", "0x50", "0x47", "0xFB"]);
      add("ilbm", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x49",
        "0x4C",
        "0x42",
        "0x4D"
      ]);
      add("8svx", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x38",
        "0x53",
        "0x56",
        "0x58"
      ]);
      add("acbm", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x41",
        "0x43",
        "0x42",
        "0x4D"
      ]);
      add("anbm", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x41",
        "0x4E",
        "0x42",
        "0x4D"
      ]);
      add("anim", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x41",
        "0x4E",
        "0x49",
        "0x4D"
      ]);
      add("faxx", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x46",
        "0x41",
        "0x58",
        "0x58"
      ]);
      add("ftxt", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x46",
        "0x54",
        "0x58",
        "0x54"
      ]);
      add("smus", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x53",
        "0x4D",
        "0x55",
        "0x53"
      ]);
      add("cmus", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x43",
        "0x4D",
        "0x55",
        "0x53"
      ]);
      add("yuvn", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x59",
        "0x55",
        "0x56",
        "0x4E"
      ]);
      add("iff", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x46",
        "0x41",
        "0x4E",
        "0x54"
      ]);
      add("aiff", [
        "0x46",
        "0x4F",
        "0x52",
        "0x4D",
        "?",
        "?",
        "?",
        "?",
        "0x41",
        "0x49",
        "0x46",
        "0x46"
      ], { mime: "audio/x-aiff", extension: "aiff" });
      add("idx", ["0x49", "0x4E", "0x44", "0x58"]);
      add("lz", ["0x4C", "0x5A", "0x49", "0x50"]);
      add("exe", ["0x4D", "0x5A"]);
      add("zip", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/zip",
        extension: "zip"
      });
      add("zip", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/zip",
        extension: "zip"
      });
      add("zip", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/zip",
        extension: "zip"
      });
      add("jar", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/java-archive",
        extension: "jar"
      });
      add("jar", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/java-archive",
        extension: "jar"
      });
      add("jar", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/java-archive",
        extension: "jar"
      });
      add("odt", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.oasis.opendocument.text",
        extension: "odt"
      });
      add("odt", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.oasis.opendocument.text",
        extension: "odt"
      });
      add("odt", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.oasis.opendocument.text",
        extension: "odt"
      });
      add("ods", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.oasis.opendocument.spreadsheet",
        extension: "ods"
      });
      add("ods", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.oasis.opendocument.spreadsheet",
        extension: "ods"
      });
      add("ods", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.oasis.opendocument.spreadsheet",
        extension: "ods"
      });
      add("odp", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.oasis.opendocument.presentation",
        extension: "odp"
      });
      add("odp", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.oasis.opendocument.presentation",
        extension: "odp"
      });
      add("odp", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.oasis.opendocument.presentation",
        extension: "odp"
      });
      add("docx", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extension: "docx"
      });
      add("docx", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extension: "docx"
      });
      add("docx", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extension: "docx"
      });
      add("xlsx", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: "xlsx"
      });
      add("xlsx", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: "xlsx"
      });
      add("xlsx", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: "xlsx"
      });
      add("pptx", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extension: "pptx"
      });
      add("pptx", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extension: "pptx"
      });
      add("pptx", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extension: "pptx"
      });
      add("vsdx", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.ms-visio.drawing",
        extension: "vsdx"
      });
      add("vsdx", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.ms-visio.drawing",
        extension: "vsdx"
      });
      add("vsdx", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.ms-visio.drawing",
        extension: "vsdx"
      });
      add("apk", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.android.package-archive",
        extension: "apk"
      });
      add("apk", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.android.package-archive",
        extension: "apk"
      });
      add("apk", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.android.package-archive",
        extension: "apk"
      });
      add("aar", ["0x50", "0x4B", "0x03", "0x04"], {
        mime: "application/vnd.android.package-archive",
        extension: "aar"
      });
      add("aar", ["0x50", "0x4B", "0x05", "0x06"], {
        mime: "application/vnd.android.package-archive",
        extension: "aar"
      });
      add("aar", ["0x50", "0x4B", "0x07", "0x08"], {
        mime: "application/vnd.android.package-archive",
        extension: "aar"
      });
      add("rar", ["0x52", "0x61", "0x72", "0x21", "0x1A", "0x07", "0x00"], {
        mime: "application/vnd.rar",
        extension: "rar"
      });
      add("rar", ["0x52", "0x61", "0x72", "0x21", "0x1A", "0x07", "0x01", "0x00"], {
        mime: "application/vnd.rar",
        extension: "rar"
      });
      add("rar", ["0x7F", "0x45", "0x4C", "0x46"], {
        mime: "application/vnd.rar",
        extension: "rar"
      });
      add("png", ["0x89", "0x50", "0x4E", "0x47", "0x0D", "0x0A", "0x1A", "0x0A"], {
        mime: "image/png",
        extension: "png"
      });
      add("apng", ["0x89", "0x50", "0x4E", "0x47", "0x0D", "0x0A", "0x1A", "0x0A"], {
        mime: "image/apng",
        extension: "apng"
      });
      add("class", ["0xCA", "0xFE", "0xBA", "0xBE"]);
      add("class", ["0xEF", "0xBB", "0xBF"]);
      add("class", ["0xFE", "0xed", "0xFA", "0xCE"], void 0, 4096);
      add("class", ["0xFE", "0xed", "0xFA", "0xCF"], void 0, 4096);
      add("class", ["0xCE", "0xFA", "0xed", "0xFE"]);
      add("class", ["0xCF", "0xFA", "0xed", "0xFE"]);
      add("class", ["0xFF", "0xFE"]);
      add("class", ["0xFF", "0xFE"]);
      add("class", ["0xFF", "0xFE", "0x00", "0x00"]);
      add("ps", ["0x25", "0x21", "0x50", "0x53"], {
        mime: "application/postscript",
        extension: ".ps"
      });
      add("pdf", ["0x25", "0x50", "0x44", "0x46"], {
        mime: "application/pdf",
        extension: "pdf"
      });
      add("asf", [
        "0x30",
        "0x26",
        "0xB2",
        "0x75",
        "0x8E",
        "0x66",
        "0xCF",
        "0x11",
        "0xA6",
        "0xD9",
        "0x00",
        "0xAA",
        "0x00",
        "0x62",
        "0xCE",
        "0x6C"
      ]);
      add("wma", [
        "0x30",
        "0x26",
        "0xB2",
        "0x75",
        "0x8E",
        "0x66",
        "0xCF",
        "0x11",
        "0xA6",
        "0xD9",
        "0x00",
        "0xAA",
        "0x00",
        "0x62",
        "0xCE",
        "0x6C"
      ]);
      add("wmv", [
        "0x30",
        "0x26",
        "0xB2",
        "0x75",
        "0x8E",
        "0x66",
        "0xCF",
        "0x11",
        "0xA6",
        "0xD9",
        "0x00",
        "0xAA",
        "0x00",
        "0x62",
        "0xCE",
        "0x6C"
      ]);
      add("deploymentimage", [
        "0x24",
        "0x53",
        "0x44",
        "0x49",
        "0x30",
        "0x30",
        "0x30",
        "0x31"
      ]);
      add("ogv", [
        "0x4F",
        "0x67",
        "0x67",
        "0x53",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "0x80",
        "0x74",
        "0x68",
        "0x65",
        "0x6F",
        "0x72",
        "0x61"
      ], {
        mime: "video/ogg",
        extension: "ogv"
      });
      add("ogm", [
        "0x4F",
        "0x67",
        "0x67",
        "0x53",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "0x01",
        "0x76",
        "0x69",
        "0x64",
        "0x65",
        "0x6F",
        "0x00"
      ], {
        mime: "video/ogg",
        extension: "ogm"
      });
      add("oga", [
        "0x4F",
        "0x67",
        "0x67",
        "0x53",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "0x7F",
        "0x46",
        "0x4C",
        "0x41",
        "0x43"
      ], {
        mime: "audio/ogg",
        extension: "oga"
      });
      add("spx", [
        "0x4F",
        "0x67",
        "0x67",
        "0x53",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "0x53",
        "0x70",
        "0x65",
        "0x65",
        "0x78",
        "0x20",
        "0x20"
      ], {
        mime: "audio/ogg",
        extension: "spx"
      });
      add("ogg", [
        "0x4F",
        "0x67",
        "0x67",
        "0x53",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "0x01",
        "0x76",
        "0x6F",
        "0x72",
        "0x62",
        "0x69",
        "0x73"
      ], {
        mime: "audio/ogg",
        extension: "ogg"
      });
      add("ogx", ["0x4F", "0x67", "0x67", "0x53"], {
        mime: "application/ogg",
        extension: "ogx"
      });
      add("psd", ["0x38", "0x42", "0x50", "0x53"], {
        mime: "application/x-photoshop",
        extension: "psd"
      });
      add("clip", ["0x43", "0x53", "0x46", "0x43", "0x48", "0x55", "0x4e", "0x4b"]);
      add("wav", [
        "0x52",
        "0x49",
        "0x46",
        "0x46",
        "?",
        "?",
        "?",
        "?",
        "0x57",
        "0x41",
        "0x56",
        "0x45"
      ], { mime: "audio/x-wav", extension: "wav" });
      add("avi", [
        "0x52",
        "0x49",
        "0x46",
        "0x46",
        "?",
        "?",
        "?",
        "?",
        "0x41",
        "0x56",
        "0x49",
        "0x20"
      ], { mime: "video/x-msvideo", extension: "avi" });
      add("mp3", ["0xFF", "0xFB"], { mime: "audio/mpeg", extension: "mp3" });
      add("mp3", ["0xFF", "0xF3"], { mime: "audio/mpeg", extension: "mp3" });
      add("mp3", ["0xFF", "0xF2"], { mime: "audio/mpeg", extension: "mp3" });
      add("mp3", ["0x49", "0x44", "0x33"], { mime: "audio/mpeg", extension: "mp3" });
      add("bmp", ["0x42", "0x4D"], { mime: "image/bmp", extension: "bmp" });
      add("iso", ["0x43", "0x44", "0x30", "0x30", "0x31"]);
      add("flac", ["0x66", "0x4C", "0x61", "0x43"]);
      add("mid", ["0x4D", "0x54", "0x68", "0x64"], {
        mime: "audio/midi",
        extension: "mid"
      });
      add("midi", ["0x4D", "0x54", "0x68", "0x64"], {
        mime: "audio/midi",
        extension: "midi"
      });
      add("doc", ["0xD0", "0xCF", "0x11", "0xE0", "0xA1", "0xB1", "0x1A", "0xE1"], {
        mime: "application/msword",
        extension: "doc"
      });
      add("xls", ["0xD0", "0xCF", "0x11", "0xE0", "0xA1", "0xB1", "0x1A", "0xE1"], {
        mime: "application/vnd.ms-excel",
        extension: "xls"
      });
      add("ppt", ["0xD0", "0xCF", "0x11", "0xE0", "0xA1", "0xB1", "0x1A", "0xE1"], {
        mime: "application/vnd.ms-powerpoint",
        extension: "ppt"
      });
      add("msg", ["0xD0", "0xCF", "0x11", "0xE0", "0xA1", "0xB1", "0x1A", "0xE1"]);
      add("dex", ["0x64", "0x65", "0x78", "0x0A", "0x30", "0x33", "0x35", "0x00"]);
      add("vmdk", ["0x4B", "0x44", "0x4D"]);
      add("crx", ["0x43", "0x72", "0x32", "0x34"]);
      add("fh8", ["0x41", "0x47", "0x44", "0x33"]);
      add("cwk", [
        "0x05",
        "0x07",
        "0x00",
        "0x00",
        "0x42",
        "0x4F",
        "0x42",
        "0x4F",
        "0x05",
        "0x07",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x01"
      ]);
      add("cwk", [
        "0x06",
        "0x07",
        "0xE1",
        "0x00",
        "0x42",
        "0x4F",
        "0x42",
        "0x4F",
        "0x06",
        "0x07",
        "0xE1",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x00",
        "0x01"
      ]);
      add("toast", ["0x45", "0x52", "0x02", "0x00", "0x00", "0x00"]);
      add("toast", ["0x8B", "0x45", "0x52", "0x02", "0x00", "0x00", "0x00"]);
      add("dmg", ["0x78", "0x01", "0x73", "0x0D", "0x62", "0x62", "0x60"]);
      add("xar", ["0x78", "0x61", "0x72", "0x21"]);
      add("dat", ["0x50", "0x4D", "0x4F", "0x43", "0x43", "0x4D", "0x4F", "0x43"]);
      add("nes", ["0x4E", "0x45", "0x53", "0x1A"]);
      add("tar", ["0x75", "0x73", "0x74", "0x61", "0x72", "0x00", "0x30", "0x30"], {
        // As per Mozilla documentation available at:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        // or wikipedia page:
        // https://en.wikipedia.org/wiki/List_of_archive_formats
        mime: "application/x-tar",
        extension: "tar"
      }, 257);
      add("tar", ["0x75", "0x73", "0x74", "0x61", "0x72", "0x20", "0x20", "0x00"], {
        mime: "application/x-tar",
        extension: "tar"
      }, 257);
      add("tox", ["0x74", "0x6F", "0x78", "0x33"]);
      add("mlv", ["0x4D", "0x4C", "0x56", "0x49"]);
      add("windowsupdate", [
        "0x44",
        "0x43",
        "0x4D",
        "0x01",
        "0x50",
        "0x41",
        "0x33",
        "0x30"
      ]);
      add("7z", ["0x37", "0x7A", "0xBC", "0xAF", "0x27", "0x1C"], {
        mime: "application/x-7z-compressed",
        extension: "7z"
      });
      add("gz", ["0x1F", "0x8B"], { mime: "application/gzip", extension: "gz" });
      add("tar.gz", ["0x1F", "0x8B"], {
        mime: "application/gzip",
        extension: "tar.gz"
      });
      add("xz", ["0xFD", "0x37", "0x7A", "0x58", "0x5A", "0x00", "0x00"], {
        mime: "application/gzip",
        extension: "xz"
      });
      add("tar.xz", ["0xFD", "0x37", "0x7A", "0x58", "0x5A", "0x00", "0x00"], {
        mime: "application/gzip",
        extension: "tar.xz"
      });
      add("lz2", ["0x04", "0x22", "0x4D", "0x18"]);
      add("cab", ["0x4D", "0x53", "0x43", "0x46"]);
      add("mkv", ["0x1A", "0x45", "0xDF", "0xA3"], {
        mime: "video/x-matroska",
        extension: "mkv"
      });
      add("mka", ["0x1A", "0x45", "0xDF", "0xA3"], {
        mime: "audio/x-matroska",
        extension: "mka"
      });
      add("mks", ["0x1A", "0x45", "0xDF", "0xA3"], {
        mime: "video/x-matroska",
        extension: "mks"
      });
      add("mk3d", ["0x1A", "0x45", "0xDF", "0xA3"]);
      add("webm", ["0x1A", "0x45", "0xDF", "0xA3"], {
        mime: "audio/webm",
        extension: "webm"
      });
      add("dcm", ["0x44", "0x49", "0x43", "0x4D"], void 0, 128);
      add("xml", ["0x3C", "0x3f", "0x78", "0x6d", "0x6C", "0x20"], {
        mime: "application/xml",
        extension: "xml"
      });
      add("wasm", ["0x00", "0x61", "0x73", "0x6d"], {
        mime: "application/wasm",
        extension: "wasm"
      });
      add("lep", ["0xCF", "0x84", "0x01"]);
      add("swf", ["0x43", "0x57", "0x53"], {
        mime: "application/x-shockwave-flash",
        extension: "swf"
      });
      add("swf", ["0x46", "0x57", "0x53"], {
        mime: "application/x-shockwave-flash",
        extension: "swf"
      });
      add("deb", ["0x21", "0x3C", "0x61", "0x72", "0x63", "0x68", "0x3E"]);
      add("rtf", ["0x7B", "0x5C", "0x72", "0x74", "0x66", "0x31"], {
        mime: "application/rtf",
        extension: "rtf"
      });
      add("m2p", ["0x00", "0x00", "0x01", "0xBA"]);
      add("vob", ["0x00", "0x00", "0x01", "0xBA"]);
      add("mpg", ["0x00", "0x00", "0x01", "0xBA"], {
        mime: "video/mpeg",
        extension: "mpg"
      });
      add("mpeg", ["0x00", "0x00", "0x01", "0xBA"], {
        mime: "video/mpeg",
        extension: "mpeg"
      });
      add("mpeg", ["0x47"], { mime: "video/mpeg", extension: "mpeg" });
      add("mpeg", ["0x00", "0x00", "0x01", "0xB3"], {
        mime: "video/mpeg",
        extension: "mpeg"
      });
      add("mov", ["0x66", "0x72", "0x65", "0x65"], {
        mime: "video/quicktime",
        extension: "mov"
      }, 4);
      add("mov", ["0x6D", "0x64", "0x61", "0x74"], {
        mime: "video/quicktime",
        extension: "mov"
      }, 4);
      add("mov", ["0x6D", "0x6F", "0x6F", "0x76"], {
        mime: "video/quicktime",
        extension: "mov"
      }, 4);
      add("mov", ["0x77", "0x69", "0x64", "0x65"], {
        mime: "video/quicktime",
        extension: "mov"
      }, 4);
      add("mov", ["0x66", "0x74", "0x79", "0x70", "0x71", "0x74"], {
        mime: "video/quicktime",
        extension: "mov"
      }, 4);
      add("hl2demo", ["0x48", "0x4C", "0x32", "0x44", "0x45", "0x4D", "0x4F"]);
      add("txt", ["0xEF", "0xBB", "0xBF"], {
        mime: "text/plain; charset=UTF-8",
        extension: "txt"
      });
      add("txt", ["0xFF", "0xFE"], {
        mime: "text/plain; charset=UTF-16LE",
        extension: "txt"
      });
      add("txt", ["0xFE", "0xFF"], {
        mime: "text/plain; charset=UTF-16BE",
        extension: "txt"
      });
      add("txt", ["0xFF", "0xFE", "0x00", "0x00"], {
        mime: "text/plain; charset=UTF-32LE",
        extension: "txt"
      });
      add("txt", ["0x00", "0x00", "0xFE", "0xFF"], {
        mime: "text/plain; charset=UTF-32BE",
        extension: "txt"
      });
      add("SubRip", ["0x31", "0x0D", "0x0A", "0x30", "0x30", "0x3A"], {
        mime: "application/x-subrip",
        extension: "srt"
      });
      add("WebVTT", [
        "0xEF",
        "0xBB",
        "0xBF",
        "0x57",
        "0x45",
        "0x42",
        "0x56",
        "0x54",
        "0x54",
        "0x0A"
      ], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", [
        "0xEF",
        "0xBB",
        "0xBF",
        "0x57",
        "0x45",
        "0x42",
        "0x56",
        "0x54",
        "0x54",
        "0x0D"
      ], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", [
        "0xEF",
        "0xBB",
        "0xBF",
        "0x57",
        "0x45",
        "0x42",
        "0x56",
        "0x54",
        "0x54",
        "0x20"
      ], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", [
        "0xEF",
        "0xBB",
        "0xBF",
        "0x57",
        "0x45",
        "0x42",
        "0x56",
        "0x54",
        "0x54",
        "0x09"
      ], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", ["0x57", "0x45", "0x42", "0x56", "0x54", "0x54", "0x0A"], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", ["0x57", "0x45", "0x42", "0x56", "0x54", "0x54", "0x0D"], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", ["0x57", "0x45", "0x42", "0x56", "0x54", "0x54", "0x20"], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("WebVTT", ["0x57", "0x45", "0x42", "0x56", "0x54", "0x54", "0x09"], {
        mime: "text/vtt",
        extension: "vtt"
      });
      add("Json", ["0x7B"], {
        mime: "application/json",
        extension: ".json"
      });
      add("Json", ["0x5B"], {
        mime: "application/json",
        extension: ".json"
      });
      add("ELF", ["0x7F", "0x45", "0x4C", "0x46"], {
        mime: "application/x-executable",
        extension: ".elf"
      });
      add("Mach-O", ["0xFE", "0xED", "0xFA", "0xC"], {
        mime: "application/x-mach-binary",
        extension: ".o"
      });
      add("Mach-O", ["0xFE", "0xED", "0xFA", "0xCF"], {
        mime: "application/x-executable",
        extension: "elf"
      });
      add("EML", ["0x52", "0x65", "0x63", "0x65", "0x69", "0x76", "0x65", "0x64", "0x3A"], {
        mime: "message/rfc822",
        extension: ".eml"
      });
      add("SVG", ["0x3c", "0x73", "0x76", "0x67"], {
        mime: "image/svg+xml",
        extension: "svg"
      });
      patternTree.default = () => tree;
      (function(exports2) {
        var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.filetypeextension = exports2.filetypemime = exports2.filetypename = exports2.filetypeinfo = void 0;
        const pattern_tree_1 = __importDefault(patternTree);
        const toHex_12 = toHex$1;
        const patternTree$1 = pattern_tree_1.default();
        const filetypeinfo2 = (bytes) => {
          let tree2 = patternTree$1;
          for (const k of Object.keys(tree2.offset)) {
            const offset = toHex_12.fromHex(k);
            const offsetExceedsFile = offset >= bytes.length;
            if (offsetExceedsFile) {
              continue;
            }
            const node = patternTree$1.offset[k];
            const guessed = walkTree(offset, bytes, node);
            if (guessed.length > 0) {
              return guessed;
            }
          }
          if (tree2.noOffset === null) {
            return [];
          }
          return walkTree(0, bytes, tree2.noOffset);
        };
        exports2.filetypeinfo = filetypeinfo2;
        const walkTree = (index, bytes, node) => {
          let step = node;
          let guessFile = [];
          while (true) {
            const currentByte = toHex_12.toHex(bytes[index]);
            if (step.bytes["?"] && !step.bytes[currentByte]) {
              step = step.bytes["?"];
            } else {
              step = step.bytes[currentByte];
            }
            if (!step) {
              return guessFile;
            }
            if (step && step.matches) {
              guessFile = step.matches.slice(0);
            }
            index += 1;
          }
        };
        exports2.default = exports2.filetypeinfo;
        const filetypename = (bytes) => exports2.filetypeinfo(bytes).map((e) => e.typename);
        exports2.filetypename = filetypename;
        const filetypemime = (bytes) => exports2.filetypeinfo(bytes).map((e) => e.mime ? e.mime : null).filter((x) => x !== null);
        exports2.filetypemime = filetypemime;
        const filetypeextension = (bytes) => exports2.filetypeinfo(bytes).map((e) => e.extension ? e.extension : null).filter((x) => x !== null);
        exports2.filetypeextension = filetypeextension;
      })(dist);
      const filetypeinfo = /* @__PURE__ */ getDefaultExportFromCjs(dist);
      const downloadHistoryKey = "xhs-download-script-completed-v1";
      const completedDownloads = vue.reactive(new Set(GM_getValue(downloadHistoryKey, [])));
      function rememberDownload(key) {
        completedDownloads.add(key);
        // Keep recent completions across refreshes and browser restarts.
        while (completedDownloads.size > 2000) {
          completedDownloads.delete(completedDownloads.values().next().value);
        }
        try {
          GM_setValue(downloadHistoryKey, [...completedDownloads]);
        } catch (error) {
          console.error("保存下载记录失败", error);
          ElMessage.warning("文件已下载，但下载记录保存失败；刷新后可能重复下载");
        }
      }
      function getDownloadError(error) {
        const reasons = {
          not_enabled: "请在 Tampermonkey 设置中启用下载功能，并选择浏览器 API 模式",
          not_permitted: "请在 Tampermonkey 中允许下载权限",
          not_whitelisted: "请在 Tampermonkey 的下载设置中允许该文件后缀",
          not_supported: "当前脚本管理器不支持下载，请使用 Tampermonkey 的浏览器 API 模式"
        };
        if (/USER_CANCEL(?:ED|LED)/i.test(JSON.stringify(error && error.details || ""))) {
          return Object.assign(new Error("下载已取消"), { retryable: false });
        }
        const code = error && error.error;
        const message = reasons[code] || (error && error.message) || code || "下载失败";
        return Object.assign(new Error(message), { retryable: !reasons[code] });
      }
      function downloadLargeFile(url, fileName) {
        return new Promise((resolve, reject) => {
          if (typeof GM_download !== "function") {
            reject(getDownloadError({ error: "not_supported" }));
            return;
          }
          GM_download({
            url,
            name: fileName.replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_"),
            saveAs: false,
            onload: resolve,
            onerror: (error) => reject(getDownloadError(error)),
            ontimeout: () => reject(new Error("下载超时"))
          });
        });
      }
      function getFileExtensionFromPartialContent(url) {
        return new Promise((resolve, reject) => {
          _GM_xmlhttpRequest({
            method: "GET",
            url,
            headers: { Range: "bytes=0-1023" },
            responseType: "arraybuffer",
            timeout: 2e4,
            onload(response) {
              if (response.status < 200 || response.status >= 300) {
                reject(new Error(`资源请求失败：HTTP ${response.status}`));
                return;
              }
              try {
                const type = filetypeinfo(new Uint8Array(response.response)).find((item) =>
                  /^(image|video)\//.test(item.mime || "") && item.extension
                );
                if (!type) throw new Error("资源未返回可识别的图片或视频");
                resolve("." + type.extension.replace(/^\./, ""));
              } catch (error) {
                reject(error);
              }
            },
            onerror: () => reject(new Error("资源连接失败")),
            ontimeout: () => reject(new Error("资源请求超时")),
            onabort: () => reject(new Error("资源请求已取消"))
          });
        });
      }
      async function runDownloadBatch(list, onProgress, wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))) {
        const result = { completed: [], failed: [], skipped: 0 };
        for (const item of list) {
          if (completedDownloads.has(item.key)) {
            result.skipped++;
            continue;
          }
          for (let attempt = 0; attempt < 4; attempt++) {
            onProgress(item, attempt, result);
            try {
              const urls = item.getUrls();
              const url = urls[attempt % urls.length];
              if (!url) throw new Error("未找到可下载的资源地址");
              const extension = await getFileExtensionFromPartialContent(url);
              await downloadLargeFile(url, item.name + extension);
              rememberDownload(item.key);
              result.completed.push(item);
              break;
            } catch (error) {
              console.error(`第 ${item.index + 1} 项下载失败（第 ${attempt + 1} 次）`, error);
              if (error.retryable === false || attempt === 3) {
                result.failed.push({ item, error });
                break;
              }
              await wait(1000 * 2 ** attempt);
            }
          }
        }
        return result;
      }
      const _hoisted_1$3 = { class: "download-container", style: "display:flex;flex-direction:column;gap:8px;min-height:0" };
      const _hoisted_2$2 = { class: "download-container_top" };
      const _hoisted_3$1 = { class: "item" };
      const _hoisted_4 = ["src"];
      const _hoisted_5 = {
        key: 0,
        class: "tag"
      };
      const _hoisted_6 = {
        key: 1,
        class: "tag"
      };
      const _hoisted_7 = { key: 1 };
      const _hoisted_8 = {
        key: 0,
        class: "custom-download"
      };
      const _hoisted_9 = { class: "flex-center" };
      const _hoisted_10 = { class: "download-container_top" };
      const _hoisted_11 = { class: "item" };
      const _hoisted_12 = ["src"];
      const _hoisted_13 = { key: 1 };
      const _hoisted_14 = {
        key: 0,
        class: "custom-download"
      };
      const _hoisted_15 = { class: "flex-center" };
      const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
        __name: "DownloadDilogContent",
        props: {
          closeDialog: {
            type: Function,
            required: true
          }
        },
        setup(__props) {
          const props = __props;
          const settingStorageStore = useSettingStorageStore();
          const noteStore = useNoteStore();
          const state = vue.reactive({
            checkList: [],
            title: "",
            downloading: false,
            downloadStatus: ""
          });
          const checkAll = vue.computed(() => {
            var _a2, _b;
            if ((_a2 = noteStore.note) == null ? void 0 : _a2.note_id) {
              return state.checkList.length == ((_b = noteStore.note) == null ? void 0 : _b.image_list.length);
            }
          });
          const checkAllIndeterminate = vue.computed(() => {
            var _a2;
            const listLength = ((_a2 = noteStore.note) == null ? void 0 : _a2.image_list.length) || 0;
            return state.checkList.length < listLength && state.checkList.length > 0;
          });
          function handleCheckAllChange(val) {
            var _a2, _b;
            if ((_a2 = noteStore.note) == null ? void 0 : _a2.note_id) {
              if (val) {
                state.checkList = (_b = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _b.image_list.map(
                  (item, index) => {
                    return index;
                  }
                );
              } else {
                state.checkList = [];
              }
            }
          }
          const activeTab = vue.ref("normal");
          vue.watch(
            [
              () => {
                var _a2;
                return (_a2 = noteStore.note) == null ? void 0 : _a2.note_id;
              }
            ],
            () => {
              var _a2;
              activeTab.value = ((_a2 = noteStore.note) == null ? void 0 : _a2.type) || "normal";
              initState();
            },
            {
              immediate: true
            }
          );
          async function initState() {
            var _a2, _b, _c, _d;
            state.title = ((_b = (_a2 = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _a2.title) == null ? void 0 : _b.slice(0, 220)) || ((_d = (_c = noteStore == null ? void 0 : noteStore.note) == null ? void 0 : _c.desc) == null ? void 0 : _d.slice(0, 220)) || "";
            handleCheckAllChange(true);
            if (!state.downloading) state.downloadStatus = "";
          }
          function handleDownloadFormatChnage(e, type) {
            console.log("修改下载格式", e);
            settingStorageStore.DownloadFormatObj[type] = e;
          }
          async function getDownloadUrlList() {
            // Snapshot before the first await: changing notes/settings must not mix batches.
            const note = noteStore.note;
            if (!note.note_id) return [];
            const tab = activeTab.value;
            const title = state.title;
            const { useNameAsDir, useTitleAsDir, nameRule, timeFormatRule, preferLive } = settingStorageStore;
            const downloadFormat = settingStorageStore.DownloadFormatObj[tab];
            const selected = tab === "normal"
              ? (note.image_list || []).map((file, index) => ({ file, index })).filter(({ index }) => state.checkList.includes(index))
              : [{ file: {}, index: 0 }];
            if (!selected.length) return [];
            const notePublishTime = formatTime(note.time, timeFormatRule);
            const redId = await getRedId();
            const dir = (useNameAsDir && note.user.nickname ? note.user.nickname + "/" : "") + (useTitleAsDir && title ? title + "/" : "");
            return selected.map(({ file, index }) => ({
              key: [note.note_id, tab, index, downloadFormat, !!(tab === "normal" && file.live_photo && preferLive)].join(":"),
              noteId: note.note_id,
              index,
              name: getFileNameByNamingRule({
                index: index + 1,
                title,
                ipLocation: note.ip_location,
                nickname: note.user.nickname,
                noteId: note.note_id,
                publishTime: notePublishTime,
                userId: note.user.user_id,
                redId
              }, nameRule, tab !== "normal" || note.image_list.length <= 1),
              dir,
              getUrls: () => getDownloadUrls(file, { note, tab, downloadFormat, preferLive })
            }));
          }
          function getDownloadUrls(file, { note, tab, downloadFormat, preferLive }) {
            const uniqueUrls = (urls) => [...new Set(urls.filter(Boolean).map((url) => url.replace(/^http:/, "https:")))];
            const streamUrls = (stream = {}) => {
              const items = [stream.h265, stream.h264, stream.av1, ...Object.values(stream)].find((items) => Array.isArray(items) && items.length) || [];
              return items.flatMap((item) => [item.master_url, item.masterUrl, ...(item.backup_urls || item.backupUrls || [])]).filter(Boolean);
            };
            let urls;
            if (tab === "normal") {
              const liveUrls = file.live_photo && preferLive ? streamUrls(file.stream) : [];
              if (liveUrls.length) return uniqueUrls(liveUrls);
              if (downloadFormat === DownloadFormat.default && !(file.live_photo && preferLive)) return uniqueUrls([file.url_default]);
              const url2 = file.url_default;
              const key = file.file_id || (url2.match(fileKeyReg) || [new URL(url2).pathname.split("/").filter(Boolean).pop().split("!")[0]])[0];
              urls = imageRequestBaseUrl.map((base, index) => base + (index >= 2 && !key.includes("/") ? "notes_pre_post/" : "") + key);
              if (downloadFormat === DownloadFormat.jpg && !(file.live_photo && preferLive)) urls = urls.map((url) => url + jpgQueryParams);
            } else {
              const video = note.video || {};
              const consumer = video.consumer || {};
              const key = consumer.origin_video_key || consumer.originVideoKey;
              urls = downloadFormat === DownloadFormat.origin && key
                ? videoRequestBaseUrl.map((base) => base + key)
                : streamUrls(video.media && video.media.stream);
            }
            return uniqueUrls(urls);
          }
          async function downLoad(useAria2 = false) {
            if (state.downloading) return;
            state.downloading = true;
            state.downloadStatus = "正在准备下载…";
            try {
              const list = await getDownloadUrlList();
              if (!list.length) {
                state.downloadStatus = "请先选择要下载的文件";
                return;
              }
              if (useAria2) {
                const prepared = [];
                for (const item of list) {
                  const url = item.getUrls()[0];
                  const extension = await getFileExtensionFromPartialContent(url);
                  prepared.push({ ...item, url, name: item.name + extension });
                }
                await reqAria2Download(prepared);
                state.downloadStatus = "aria2 请求已处理，请在 aria2 中查看下载结果";
                return;
              }
              const result = await runDownloadBatch(list, (item, attempt, result) => {
                state.downloadStatus = `已完成 ${result.completed.length + result.skipped}/${list.length}；正在下载第 ${item.index + 1} 项${attempt ? `（自动重试 ${attempt}/3）` : ""}`;
              });
              const summary = `本次下载完成 ${result.completed.length} 项，跳过已完成 ${result.skipped} 项，失败 ${result.failed.length} 项`;
              state.downloadStatus = summary;
              if (result.failed.length) {
                state.downloadStatus += `。失败序号：${result.failed.map(({ item }) => item.index + 1).join("、")}。${result.failed[0].error.message}；再次点击只会补下载未完成项。`;
                ElMessage.warning(summary);
              } else {
                ElMessage.success(summary);
              }
            } catch (error) {
              state.downloadStatus = `下载未完成：${error.message}`;
              ElMessage.error(state.downloadStatus);
            } finally {
              state.downloading = false;
            }
          }
          function clearDownloadHistory() {
            if (state.downloading || !noteStore.note.note_id) return;
            const prefix = noteStore.note.note_id + ":";
            for (const key of completedDownloads) {
              if (key.startsWith(prefix)) completedDownloads.delete(key);
            }
            GM_setValue(downloadHistoryKey, [...completedDownloads]);
            state.downloadStatus = "已清除本篇下载记录，可以重新下载文件";
          }
          return (_ctx, _cache) => {
            const _component_el_checkbox = ElCheckbox;
            const _component_el_checkbox_group = ElCheckboxGroup;
            const _component_el_empty = ElEmpty;
            const _component_el_input = ElInput;
            const _component_el_form_item = ElFormItem;
            const _component_el_radio = ElRadio;
            const _component_el_radio_group = ElRadioGroup;
            const _component_el_form = ElForm;
            const _component_el_button = ElButton;
            const _component_el_tab_pane = ElTabPane;
            const _component_el_tabs = ElTabs;
            return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
              vue.createElementVNode("p", {
                role: "status",
                "aria-live": "polite",
                style: "margin:0;line-height:1.6;overflow-wrap:anywhere;flex-shrink:0"
              }, vue.toDisplayString(state.downloadStatus || "下载失败会自动重试，已完成的文件会自动跳过。"), 1),
              vue.createVNode(_component_el_button, {
                size: "small",
                style: "align-self:flex-start;flex-shrink:0",
                disabled: state.downloading,
                onClick: clearDownloadHistory
              }, {
                default: vue.withCtx(() => [vue.createTextVNode("清除本篇下载记录（允许重新下载）")]),
                _: 1
              }, 8, ["disabled"]),
              vue.createVNode(_component_el_tabs, {
                type: "border-card",
                style: "flex:1;min-height:0;height:auto",
                modelValue: vue.unref(activeTab),
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => vue.isRef(activeTab) ? activeTab.value = $event : null)
              }, {
                default: vue.withCtx(() => {
                  var _a2, _b, _c;
                  return [
                    vue.createVNode(_component_el_tab_pane, {
                      lazy: "",
                      name: "normal",
                      label: "图片"
                    }, {
                      default: vue.withCtx(() => {
                        var _a3, _b2, _c2, _d, _e;
                        return [
                          vue.createElementVNode("div", _hoisted_2$2, [
                            ((_c2 = (_b2 = (_a3 = vue.unref(noteStore)) == null ? void 0 : _a3.note) == null ? void 0 : _b2.image_list) == null ? void 0 : _c2.length) ? (vue.openBlock(), vue.createBlock(_component_el_checkbox_group, {
                              key: 0,
                              modelValue: vue.unref(state).checkList,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(state).checkList = $event)
                            }, {
                              default: vue.withCtx(() => {
                                var _a4, _b3;
                                return [
                                  vue.createElementVNode("div", {
                                    class: "file-list",
                                    style: vue.normalizeStyle(`grid-template-columns: repeat(${vue.unref(settingStorageStore).downloadContainerCol}, 1fr)`)
                                  }, [
                                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_b3 = (_a4 = vue.unref(noteStore)) == null ? void 0 : _a4.note) == null ? void 0 : _b3.image_list, (item, index) => {
                                      return vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                                        value: index,
                                        size: "large",
                                        key: index
                                      }, {
                                        default: vue.withCtx(() => [
                                          vue.createElementVNode("div", _hoisted_3$1, [
                                            vue.createElementVNode("img", {
                                              src: item.url_default
                                            }, null, 8, _hoisted_4),
                                            item.live_photo ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, "实况")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, "图片"))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ], 4)
                                ];
                              }),
                              _: 1
                            }, 8, ["modelValue"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                              vue.createVNode(_component_el_empty)
                            ]))
                          ]),
                          ((_e = (_d = vue.unref(noteStore)) == null ? void 0 : _d.note) == null ? void 0 : _e.note_id) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                            vue.createVNode(_component_el_form, { "label-width": "6rem" }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_form_item, { label: "标题" }, {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(_component_el_input, {
                                      modelValue: vue.unref(state).title,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(state).title = $event),
                                      autocomplete: "off"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_form_item, { label: "下载格式" }, {
                                  default: vue.withCtx(() => {
                                    var _a4, _b3;
                                    return [
                                      vue.createVNode(_component_el_radio_group, {
                                        "model-value": ((_b3 = (_a4 = vue.unref(noteStore)) == null ? void 0 : _a4.note) == null ? void 0 : _b3.type) ? vue.unref(settingStorageStore).DownloadFormatObj.normal : vue.unref(DownloadFormat).default,
                                        onChange: _cache[2] || (_cache[2] = ($event) => handleDownloadFormatChnage($event, "normal"))
                                      }, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode(_component_el_radio, {
                                            value: vue.unref(DownloadFormat).default
                                          }, {
                                            default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                                              vue.createTextVNode("普通")
                                            ])),
                                            _: 1
                                          }, 8, ["value"]),
                                          vue.createVNode(_component_el_radio, {
                                            value: vue.unref(DownloadFormat).origin
                                          }, {
                                            default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                                              vue.createTextVNode(" 高清 ")
                                            ])),
                                            _: 1
                                          }, 8, ["value"]),
                                          vue.createVNode(_component_el_radio, {
                                            value: vue.unref(DownloadFormat).jpg
                                          }, {
                                            default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                                              vue.createTextVNode(" jpg ")
                                            ])),
                                            _: 1
                                          }, 8, ["value"])
                                        ]),
                                        _: 1
                                      }, 8, ["model-value"])
                                    ];
                                  }),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_form_item, { label: "实况" }, {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(_component_el_checkbox, {
                                      modelValue: vue.unref(settingStorageStore).preferLive,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(settingStorageStore).preferLive = $event)
                                    }, {
                                      default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                                        vue.createElementVNode("div", { class: "flex-center" }, "优先下载实况", -1)
                                      ])),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            vue.createElementVNode("div", _hoisted_9, [
                              vue.createVNode(_component_el_checkbox, {
                                border: "",
                                onChange: handleCheckAllChange,
                                modelValue: vue.unref(checkAll),
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(checkAll) ? checkAll.value = $event : null),
                                indeterminate: vue.unref(checkAllIndeterminate),
                                style: { "margin": "0 10px" }
                              }, {
                                default: vue.withCtx(() => [
                                  vue.createTextVNode(" 全选(" + vue.toDisplayString(vue.unref(state).checkList.length) + ") ", 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "indeterminate"]),
                              vue.createVNode(_component_el_button, {
                                type: "primary",
                                onClick: _cache[5] || (_cache[5] = ($event) => downLoad()),
                                loading: state.downloading,
                                disabled: state.downloading || vue.unref(state).checkList.length == 0
                              }, {
                                default: vue.withCtx(() => _cache[16] || (_cache[16] = [
                                  vue.createTextVNode(" 浏览器下载 ")
                                ])),
                                _: 1
                              }, 8, ["disabled", "loading"]),
                              vue.createVNode(_component_el_button, {
                                color: "#3f85ff",
                                onClick: _cache[6] || (_cache[6] = ($event) => downLoad(true)),
                                disabled: state.downloading || vue.unref(state).checkList.length == 0
                              }, {
                                default: vue.withCtx(() => _cache[17] || (_cache[17] = [
                                  vue.createTextVNode(" aria2下载 ")
                                ])),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ])) : vue.createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    vue.createVNode(_component_el_tab_pane, {
                      lazy: "",
                      name: "video",
                      label: "视频",
                      disabled: !((_c = (_b = (_a2 = vue.unref(noteStore)) == null ? void 0 : _a2.note) == null ? void 0 : _b.video) == null ? void 0 : _c.capa)
                    }, {
                      default: vue.withCtx(() => {
                        var _a3, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
                        return [
                          vue.createElementVNode("div", _hoisted_10, [
                            ((_d = (_c2 = (_b2 = (_a3 = vue.unref(noteStore)) == null ? void 0 : _a3.note) == null ? void 0 : _b2.image_list) == null ? void 0 : _c2[0]) == null ? void 0 : _d.url_default) ? (vue.openBlock(), vue.createElementBlock("div", {
                              key: 0,
                              class: "file-list",
                              style: vue.normalizeStyle(`grid-template-columns: repeat(${vue.unref(settingStorageStore).downloadContainerCol}, 1fr)`)
                            }, [
                              vue.createElementVNode("div", _hoisted_11, [
                                vue.createElementVNode("img", {
                                  src: (_h = (_g = (_f = (_e = vue.unref(noteStore)) == null ? void 0 : _e.note) == null ? void 0 : _f.image_list) == null ? void 0 : _g[0]) == null ? void 0 : _h.url_default
                                }, null, 8, _hoisted_12),
                                _cache[18] || (_cache[18] = vue.createElementVNode("div", { class: "tag" }, "视频", -1))
                              ])
                            ], 4)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
                              vue.createVNode(_component_el_empty)
                            ]))
                          ]),
                          ((_j = (_i = vue.unref(noteStore)) == null ? void 0 : _i.note) == null ? void 0 : _j.note_id) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14, [
                            vue.createVNode(_component_el_form, { "label-width": "6rem" }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_form_item, { label: "标题" }, {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(_component_el_input, {
                                      modelValue: vue.unref(state).title,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.unref(state).title = $event),
                                      autocomplete: "off"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_form_item, { label: "下载格式" }, {
                                  default: vue.withCtx(() => {
                                    var _a4, _b3;
                                    return [
                                      vue.createVNode(_component_el_radio_group, {
                                        "model-value": ((_b3 = (_a4 = vue.unref(noteStore)) == null ? void 0 : _a4.note) == null ? void 0 : _b3.type) ? vue.unref(settingStorageStore).DownloadFormatObj.video : vue.unref(DownloadFormat).default,
                                        onChange: _cache[8] || (_cache[8] = ($event) => handleDownloadFormatChnage($event, "video"))
                                      }, {
                                        default: vue.withCtx(() => [
                                          vue.createVNode(_component_el_radio, {
                                            value: vue.unref(DownloadFormat).default
                                          }, {
                                            default: vue.withCtx(() => _cache[19] || (_cache[19] = [
                                              vue.createTextVNode("普通")
                                            ])),
                                            _: 1
                                          }, 8, ["value"]),
                                          vue.createVNode(_component_el_radio, {
                                            value: vue.unref(DownloadFormat).origin
                                          }, {
                                            default: vue.withCtx(() => _cache[20] || (_cache[20] = [
                                              vue.createTextVNode("高清")
                                            ])),
                                            _: 1
                                          }, 8, ["value"])
                                        ]),
                                        _: 1
                                      }, 8, ["model-value"])
                                    ];
                                  }),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            vue.createElementVNode("div", _hoisted_15, [
                              vue.createVNode(_component_el_button, {
                                type: "primary",
                                onClick: _cache[9] || (_cache[9] = ($event) => downLoad()),
                                loading: state.downloading,
                                disabled: state.downloading
                              }, {
                                default: vue.withCtx(() => _cache[21] || (_cache[21] = [
                                  vue.createTextVNode(" 浏览器下载 ")
                                ])),
                                _: 1
                              }, 8, ["loading", "disabled"]),
                              vue.createVNode(_component_el_button, {
                                color: "#3f85ff",
                                onClick: _cache[10] || (_cache[10] = ($event) => downLoad(true)),
                                disabled: state.downloading
                              }, {
                                default: vue.withCtx(() => _cache[22] || (_cache[22] = [
                                  vue.createTextVNode(" aria2下载 ")
                                ])),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ])) : vue.createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }),
                _: 1
              }, 8, ["modelValue"])
            ]);
          };
        }
      });
      const _hoisted_1$2 = { class: "tool-box" };
      const _hoisted_2$1 = { class: "download-item-size" };
      const _hoisted_3 = { class: "setting" };
      const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
        __name: "DownloadDilog",
        props: {
          modelValue: {
            type: Boolean,
            default: ""
          }
        },
        emits: ["update:modelValue", "settingClick"],
        setup(__props, { emit: __emit }) {
          const emit = __emit;
          const props = __props;
          const isOpenDownloadDialog = vue.computed({
            get: () => props.modelValue,
            set: (val) => {
              emit("update:modelValue", val);
            }
          });
          function closeDialog() {
            isOpenDownloadDialog.value = false;
          }
          const settingStorage = useSettingStorageStore();
          const isDragging = vue.ref(false);
          const size = vue.ref("50%");
          function handleMouseMove(e) {
            const x = (window.screen.availWidth - e.pageX) / window.screen.availWidth;
            let w = +(x * 100).toFixed(2);
            if (w <= 50) w = 50;
            size.value = w + "%";
          }
          function handleMouseDown() {
            isDragging.value = true;
            document.body.style.cursor = "w-resize";
            document.body.style.userSelect = "none";
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", () => {
              isDragging.value = false;
              settingStorage.downloadContainerSize = size.value;
              document.body.style.cursor = "auto";
              document.body.style.userSelect = "auto";
              window.removeEventListener("mousemove", handleMouseMove);
            });
          }
          vue.onMounted(() => {
            size.value = settingStorage.downloadContainerSize;
          });
          return (_ctx, _cache) => {
            const _component_el_input_number = ElInputNumber;
            const _component_el_button = ElButton;
            const _component_el_drawer = ElDrawer;
            return vue.openBlock(), vue.createBlock(_component_el_drawer, {
              modelValue: vue.unref(isOpenDownloadDialog),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(isOpenDownloadDialog) ? isOpenDownloadDialog.value = $event : null),
              size: vue.unref(size),
              title: vue.unref(appName),
              class: vue.normalizeClass(["xiaohongshu-download-script_dialog", {
                drag: vue.unref(isDragging)
              }])
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_1$2, [
                  vue.createElementVNode("div", _hoisted_2$1, [
                    _cache[3] || (_cache[3] = vue.createElementVNode("div", { class: "title" }, "显示列数：", -1)),
                    vue.createVNode(_component_el_input_number, {
                      size: "small",
                      modelValue: vue.unref(settingStorage).downloadContainerCol,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(settingStorage).downloadContainerCol = $event),
                      min: 1,
                      max: 10,
                      style: { "width": "80px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  vue.createElementVNode("div", _hoisted_3, [
                    vue.createVNode(_component_el_button, {
                      size: "small",
                      type: "info",
                      onClick: _cache[1] || (_cache[1] = ($event) => emit("settingClick"))
                    }, {
                      default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                        vue.createTextVNode(" 设置 ")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["drag-line", {
                    active: vue.unref(isDragging)
                  }]),
                  onMousedown: handleMouseDown
                }, null, 34),
                vue.createVNode(_sfc_main$4, { closeDialog })
              ]),
              _: 1
            }, 8, ["modelValue", "size", "title", "class"]);
          };
        }
      });
      const useFloatButtonStorageStore = pinia.defineStore(
        "xhs-download-script-float-btn-storage",
        {
          state: () => ({
            left: "0px",
            top: "45%"
          }),
          persist: true
        }
      );
      /**
       * @license lucide-vue-next v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const toKebabCase = (string2) => string2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      /**
       * @license lucide-vue-next v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      var defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      };
      /**
       * @license lucide-vue-next v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
        return vue.h(
          "svg",
          {
            ...defaultAttributes,
            width: size || defaultAttributes.width,
            height: size || defaultAttributes.height,
            stroke: color || defaultAttributes.stroke,
            "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            class: ["lucide", `lucide-${toKebabCase(name ?? "icon")}`],
            ...props
          },
          [...iconNode.map((child) => vue.h(...child)), ...slots.default ? [slots.default()] : []]
        );
      };
      /**
       * @license lucide-vue-next v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const createLucideIcon = (iconName, iconNode) => (props, { slots }) => vue.h(
        Icon,
        {
          ...props,
          iconNode,
          name: iconName
        },
        slots
      );
      /**
       * @license lucide-vue-next v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const FolderDown = createLucideIcon("FolderDownIcon", [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
          }
        ],
        ["path", { d: "M12 10v6", key: "1bos4e" }],
        ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
      ]);
      const _hoisted_1$1 = ["title"];
      const _hoisted_2 = { class: "icon" };
      const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
        __name: "FloatButton",
        emits: ["click"],
        setup(__props, { emit: __emit }) {
          const emit = __emit;
          const btnRef = vue.ref();
          const floatButtonStorageStore = useFloatButtonStorageStore();
          let isDragging = false;
          let maxTop;
          let maxLeft;
          let innerTop;
          let innerLeft;
          let time = 0;
          let duration = 0;
          function initState() {
            var _a2, _b;
            maxTop = window.innerHeight - ((_a2 = btnRef.value) == null ? void 0 : _a2.clientHeight);
            maxLeft = window.innerWidth - ((_b = btnRef.value) == null ? void 0 : _b.clientWidth);
            if (floatButtonStorageStore.left != "0px") {
              floatButtonStorageStore.left = maxLeft + "px";
            }
          }
          function handleBtnMousedown(event) {
            var _a2, _b;
            duration = 0;
            time = Date.now();
            isDragging = true;
            innerTop = event.pageY - ((_a2 = btnRef.value) == null ? void 0 : _a2.offsetTop);
            innerLeft = event.pageX - ((_b = btnRef.value) == null ? void 0 : _b.offsetLeft);
          }
          function handleBtnMouseUp() {
            duration = Date.now() - time;
            isDragging = false;
          }
          function handleWindowMouseMove(event) {
            if (!isDragging) return;
            let top = event.pageY - innerTop;
            let left = event.pageX - innerLeft;
            if (top < 0) {
              top = 0;
            } else if (top > maxTop) {
              top = maxTop;
            }
            if (left < 0) {
              left = 0;
            } else if (left > maxLeft) {
              left = maxLeft;
            }
            setPosition(left, top);
          }
          function handleWindowMouseUp() {
            var _a2;
            const left = (_a2 = btnRef.value) == null ? void 0 : _a2.offsetLeft;
            if (left > maxLeft / 2) {
              setPosition(maxLeft);
            } else {
              setPosition(0);
            }
          }
          function setPosition(left, top) {
            if (left != void 0) {
              floatButtonStorageStore.left = left + "px";
            }
            if (top != void 0) {
              floatButtonStorageStore.top = top + "px";
            }
          }
          function handleBtnClick() {
            setTimeout(() => {
              if (duration <= 250) {
                emit("click");
              }
            }, 250);
          }
          vue.onMounted(() => {
            initState();
            window.addEventListener("mousemove", handleWindowMouseMove);
            window.addEventListener("mouseup", handleWindowMouseUp);
            window.addEventListener("resize", initState);
          });
          vue.onUnmounted(() => {
            window.removeEventListener("mousemove", handleWindowMouseMove);
            window.removeEventListener("mouseup", handleWindowMouseUp);
            window.removeEventListener("resize", initState);
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              ref_key: "btnRef",
              ref: btnRef,
              title: vue.unref(appName),
              class: vue.normalizeClass(["xiaohongshu-download-script_float-btn", {
                right: vue.unref(floatButtonStorageStore).left != "0px",
                active: vue.unref(isDragging)
              }]),
              style: vue.normalizeStyle({
                left: vue.unref(floatButtonStorageStore).left,
                top: vue.unref(floatButtonStorageStore).top
              }),
              onMousedown: handleBtnMousedown,
              onMouseup: handleBtnMouseUp,
              onClick: handleBtnClick
            }, [
              vue.createElementVNode("div", _hoisted_2, [
                vue.createVNode(vue.unref(FolderDown), { size: 20 })
              ])
            ], 46, _hoisted_1$1);
          };
        }
      });
      const _hoisted_1 = { class: "xiaohongshu-download-script" };
      const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
        __name: "Index",
        setup(__props) {
          const isOpenDownloadDialog = vue.ref(false);
          const isOpenSettingDialog = vue.ref(false);
          function handleFloatBtnClick() {
            isOpenDownloadDialog.value = true;
          }
          const noteStore = useNoteStore();
          vue.onMounted(() => {
            initEventListener();
          });
          const settingStorageStore = useSettingStorageStore();
          if (settingStorageStore.nameRule === legacyDefaultFileNameRule) {
            settingStorageStore.nameRule = defaultFileNameRule;
          }
          function getInitialState() {
            const initialState = _unsafeWindow.__INITIAL_STATE__;
            if (initialState && initialState.note && initialState.note.noteDetailMap) {
              return initialState;
            }
            const initialStatePattern = /^\s*window\.__INITIAL_STATE__\s*=\s*/;
            const initialStateScript = Array.from(document.scripts).find((script) => initialStatePattern.test(script.textContent || ""));
            if (!initialStateScript) {
              return initialState;
            }
            try {
              const serializedState = (initialStateScript.textContent || "").replace(initialStatePattern, "").replace(/;\s*$/, "").replace(/:\s*undefined(?=\s*[,}])/g, ":null");
              return JSON.parse(serializedState);
            } catch (error) {
              console.error("解析页面初始数据失败", error);
              return initialState;
            }
          }
          async function initEventListener() {
            const originalXhrSend = window.XMLHttpRequest.prototype.send;
            window.XMLHttpRequest.prototype.send = function() {
              this.addEventListener("load", function() {
                var _a2, _b;
                if (this.responseURL.includes("/api/sns/web/v1/feed")) {
                  const resData = JSON.parse(this.responseText);
                  console.log(resData);
                  const note = (_b = (_a2 = resData.data) == null ? void 0 : _a2.items[0]) == null ? void 0 : _b.note_card;
                  console.log("数据", note);
                  noteStore.setNote(note);
                }
              });
              return originalXhrSend.apply(this, arguments);
            };
            const { pathname } = window.location;
            console.log({ pathname });
            const notePageReg = /(\/user\/profile\/.*\/.*)|(\/explore\/.*)|(\/discovery\/item\/[^/]+)/;
            if (notePageReg.test(pathname)) {
              const id = pathname.split("/").filter(Boolean).at(-1);
              const initialState = getInitialState();
              console.log("初始化数据", id, initialState);
              const noteRes = initialState && initialState.note && initialState.note.noteDetailMap && initialState.note.noteDetailMap[id] && initialState.note.noteDetailMap[id].note;
              if (noteRes) {
                const note = camelToSnake(noteRes);
                noteStore.setNote(note);
              } else {
                console.warn("未找到笔记数据", { id, pathname });
              }
            }
          }
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.createVNode(_sfc_main$2, { onClick: handleFloatBtnClick }),
              vue.createVNode(_sfc_main$3, {
                modelValue: vue.unref(isOpenDownloadDialog),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(isOpenDownloadDialog) ? isOpenDownloadDialog.value = $event : null),
                onSettingClick: _cache[1] || (_cache[1] = ($event) => isOpenSettingDialog.value = true)
              }, null, 8, ["modelValue"]),
              vue.createVNode(_sfc_main$5, {
                modelValue: vue.unref(isOpenSettingDialog),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(isOpenSettingDialog) ? isOpenSettingDialog.value = $event : null)
              }, null, 8, ["modelValue"])
            ]);
          };
        }
      });
      const _sfc_main = /* @__PURE__ */ vue.defineComponent({
        __name: "App",
        setup(__props) {
          return (_ctx, _cache) => {
            const _component_el_config_provider = ElConfigProvider;
            return vue.openBlock(), vue.createBlock(_component_el_config_provider, { locale: vue.unref(zhCn) }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$1)
              ]),
              _: 1
            }, 8, ["locale"]);
          };
        }
      });
      const app = vue.createApp(_sfc_main);
      const pinia$1 = pinia.createPinia();
      app.use(pinia$1);
      pinia$1.use(piniaPluginPersistedstate.createPersistedState({ storage: localStorage }));
      app.mount(
        (() => {
          const app2 = document.createElement("div");
          document.body.append(app2);
          return app2;
        })()
      );
    }
  });
  require_main_001();

})(Vue, dayjs, Pinia, StreamSaver, piniaPluginPersistedstate);
