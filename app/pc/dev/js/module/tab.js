/*global
 require:false,
 module:false
*/
/* exported config,module,require */

var tabWork = (function () {

    'use strict';

    var $tab = $('.js-tab'),
        $tabMenu = $tab.find('.tab-menu').find('a');

    var tabEffectTime;

    //セレクトの値変えられたら表示に反映
    $tabMenu.on('click', function (e) {

        e.preventDefault();

        var $this = $(this);

        clearTimeout(tabEffectTime);

        //対象以外のmenu,areaを非表示
        var group = $this.data('tab-name');
        $(group).removeClass('is-active');

        //menuのカレント表示切り替え
        $this.addClass('is-active');

        //areaの切り替え
        var target = $this.attr('href');
        $(target).show();
        tabEffectTime = setTimeout(function(){
            $(target).addClass('is-active');
        },16);

        //areaの高さ調整
        var areaHeight = $(target).height();
        $(target).parent().css('height',areaHeight);

    });
}());

module.exports = tabWork;