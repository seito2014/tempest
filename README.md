#概要

#使用ツール
EJS
gulp
webpack
Sass
bower

##まず最初にすること
1. "npm i"でgulpが動くようにする

2. "bower i"でjsライブラリをインストールする

#gulpコマンド(pc/sp)

+ gulp/gulp sp  
一括コンパイル＆watch  
※このときscsslint,spriteタスクは走りません。別途実行してください。

+ gulp ejs-pc/gulp ejs-sp  
htmlコンパイル

+ gulp style-pc/gulp style-sp  
cssコンパイル

+ gulp script-pc/gulp script-sp  
webpack,jsコンパイル

+ gulp copy-pc/gulp copy-sp  
lib/,font/内にあるデータをdivからpublicへ移動＆jslint(jsのバリデート)を作動

+ gulp image-pc/gulp image-sp  
image/内にある画像データの移動、画像圧縮

+ gulp scsslint-pc/gulp scsslint-sp
scsslint(scssのバリデート)を作動

+ gulp htmlhint-pc/gulp htmlhint-sp
htmlhint(htmlのバリデート)を作動

+ gulp sprite-pc/gulp sprite-sp  
スプライト画像を生成する。具体的には以下の内容を行います。  
1./sprite/src　にある画像をスプライト化して、 /sprite/dist　にsprite.pngとして出力  
2./sass/sprite/　に、1で出力したsprite.pngに対応したsprite.scssを出力  
※このタスクではスプライト画像は1つしか生成できません（sprite.png）。これ以外にも用意したい場合は手動で用意する必要があります。

#コーディングルール
作業完了前に、scsslint-pc/gulp scsslint-sp　を実行してscsslintにかけるようお願いします。  
主なルールは以下のとおりです。

+ scssネスト階層：4

+ クラス名：チェインケースのみ

+ body：各ページにそれそれ「.page-xxx」クラス名をつける

+ id：スタイルをつける目的での使用→☓、jsによる使用→○
 
+ class：jsを利用する目的で使う場合のみ、他の作業者にわかるよう「.js-」プレフィックスをお付けください。

+ インデント：TAB

+ SMACSS,OOCSSに沿ったコーディング

それ以外のルールはscsslint実行時にチェックしてください。

#その他