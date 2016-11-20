/**
 * Created by zhaojunlike on 2016/11/14.
 */

/**
 *##方法：
 *$(function(){
 *
 *  //必须要jquery
 *
 * //step1:添加监听
 *  $.eyCheckAll('全反选ele','子元素ele');
 * //step2:获取选属性
 * var data= $.eyGetCheckItemVal('attr');
 *
 *
 * });
 *
 *
 */
; (function ($) {
    var _ele;
    var _eleItem;

    $.extend({
        eyCheckAll: function (ele, itemEle) {
            _ele = ele;
            _eleItem = itemEle;
            /**checkALL**/
            $(ele).bind('click', function () {
                $(itemEle).prop("checked", this.checked);
            });
            $(itemEle).click(function () {
                var option = $(itemEle);
                option.each(function (i) {
                    if (!this.checked) {
                        $(ele).prop("checked", false);
                        return false;
                    } else {
                        $(ele).prop("checked", true);
                    }
                });
            });
        },
        eyGetCheckItemVal: function (attr) {
            var option = $(_eleItem);
            console.log(attr);
            var data = [];
            option.each(function (i) {
                if (!this.checked) {
                    return false;
                } else {
                    data.push($(this).attr(attr));
                }
            });
            return data;
        }
    })
})($);
