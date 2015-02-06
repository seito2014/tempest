webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*global
	 require:false
	 */

	//外部jsファイルを読み込み
	__webpack_require__(1);
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*global
	 module:false
	*/
	/* exported BASE_URL */

	// サイト全体で使う定数
	module.exports = {
	    BASE_URL:document.getElementById('base_url').value,
	    SPEED_TAB:350,
	    SPEED_SLIDER:350
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ }
]);