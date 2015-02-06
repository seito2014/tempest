/*global
 require:false,
 module:false
 */
/* exported config,module */

var selectChange = function () {

    'use strict';

    var DEFAULT_TEXT = '選択してください';

    var currentText = DEFAULT_TEXT;

    var $select = $('.js_select'),
        $selectInner = $select.children('.select_inner'),
        $selectText = $select.children('.select_text');

    //ロード時にセレクト内のテキストを表示
    $(window).on('load', function () {
        $selectText.html(currentText);
    });

    //セレクトの値変えられたら表示に反映
    $selectInner.on('change', function () {
        var $this = $(this);
        currentText = ($this.val() === '') ? DEFAULT_TEXT : $this.val();
        $selectText.html(currentText);
    });
}();

module.exports = selectChange;