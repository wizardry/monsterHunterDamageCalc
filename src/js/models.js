app.Model.Const = Backbone.Model.extend({

});
/**
* 電卓モデル
* ～damage => 何かしら計算してreturnする。returnはint or array[attack,element,etc]
* その他のものは数値や倍数をreturnする
*/
app.Model.Calc = Backbone.Model.extend({
	initialize:function(){},
	mathRender:function(){},
	attackDamage:function(){

	},
	elementDamage:function(){

	},
	weaponPower:function(){
		var val = $('input').data('attack');
		return parseInt(val);
	},
	weaponElement:function(){
		var val = $('input').data('element');
		return parseInt(val);
	},
	motion:function(){
		var val = $('input').val();
		return JSON.parse(val);
	},
	sharpness:function(){
		var val = $('input').val();
		return JSON.parse(val);
	},
	clirical:function(){
		//会心有無
		if($('input').prop('checked')){
			return app.const.CLITICAL.normal
		}
		//マイナス会心有無
		if($('input').prop('checked')){
			return app.const.CLITICAL.bad
		}
		//超会心有無
		if($('input').prop('checked')){
			return app.const.CLITICAL.hard
		}
	},
	skill:function(){},
	skillEelement:function(){},
	hardness:function(){},
	bigsorwdDamge:function(){
		/**
		* 大剣ダメージ計算
		* 溜めによる切れ味補正有り
		* 共通で 1=>1.1, 2=> 1.2, 3=> 1.3
		* 中腹補正有り true=> *1.05 false=> *1
		*/
	},
	longsorwdDamge:function(){
		/**
		* 太刀ダメージ計算
		* 錬気ゲージの色によるダメージ補正有り
		* 赤=> 1.2, 黄=>1.1 , 白=> 1.05
		* 錬気ゲージの点滅有無によるダメージ補正有り
		* true=> 1.13, false=>1
		* 中腹補正有り true=> *1.05 false=> *1
		* 中腹補正有り true=> *1.05 false=> *1
		*/
	},
	sorwdDamge:function(){
		/**
		* 片手剣ダメージ計算
		* 片手剣係数有り 
		*　武器補正として*1.05
		*/
	},
	twinsorwdDamge:function(){
		/**
		* 双剣ダメージ計算
		* 鬼人化による倍率上昇有り true=>1.15, false=>1 モーションを見て判定する。
		*
		*/
	},
	lanceDamge:function(){
		/**
		* ランスダメージ計算
		* 特になし？
		*
		*/
	},
	gunlanceDamge:function(){
		/**
		* ガンランスダメージ計算
		* ヒートゲージによる変動有り
		* 
		* 砲撃による変動有り。また砲術師、砲術王、ネコ砲術による変動有り、増弾によるフルバダメ変動有り
		* @see http://kkhk22.seesaa.net/article/431581408.html
		* 
		*/

	},
	slashaxeDamge:function(){
		/**
		* スラッシュアックスダメージ計算
		* 剣モード時にビンによる各補正有り
		* 強撃=> 物理1.2 ,強属性=> 属性1.25
		*/
	},
	chargeaxeDamge:function(){
		/**
		* チャージアックスダメージ計算
		* 特定モーションにビン効果付与
		* 榴弾の場合のみ砲術系スキルによる変動有り
		* 属性圧縮状態による斧攻撃に係数有り
		* スタイルによる属性圧縮係数の変動有り
		*/
	},
	insectclubDamge:function(){
		/**
		* 操虫根ダメージ計算
		* 虫による変動有り
		*/
	},
	bowDamge:function(){
		/**
		* 弓ダメージ計算
		*/
	},
	lightclossbowDamge:function(){
		/**
		* ライトボウガンダメージ計算
		*/

	},
	heabyclossbowDamge:function(){
		/**
		* ヘビィボウガンダメージ計算
		*/

	},
})