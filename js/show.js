//渲染数据
var data=[
	{
		imgUrl:"img/show/100du.png",
		alt:"100度电商网站",
		detail:"PC端电商网站前端页面制作,模块化布局,对低版本浏览器采用优雅降级处理,浏览器兼容到ie6",
		url:"http://1.beartest123.sinaapp.com/100du/index.html",
		cls:"pc"
	},
	{
		imgUrl:"img/show/20111111.png",
		alt:"H5微场景制作",
		detail:"毕业季班级微场景制作",
		barCode:"img/code/20111111.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/aifahongbao.png",
		alt:"微信抢红包",
		detail:"爱法珑庭抢红包吸粉游戏,使用jquery,CSS3动画效果实现,OOP编写游戏逻辑",
		barCode:"img/code/AFhongbao.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/anggerui.png",
		alt:"武汉昂格瑞公司网站制作",
		detail:"企业公司传统门户网站制作，仿网站模板制作，包括分页模块,整个页面纯前端实现",
		url:"#",
		cls:"pc"
	},
	{
		imgUrl:"img/show/colorBox.png",
		alt:"看你有多嗨",
		detail:"创意微信小游戏制作,包括微信jssdk的分享功能实现",
		barCode:"img/code/colorBox.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/CSS3clock.png",
		alt:"纯CSS3时钟制作",
		detail:"用CSS3技术实现的石英钟",
		url:"#",
		cls:"pc"
	},
	{
		imgUrl:"img/show/dianfangkuai.png",
		alt:"点方块小游戏",
		detail:"点方块小游戏制作,用基于zepto与animate.css的两个库自制了一个前端框架，包括了游戏的动画和转场等",
		barCode:"img/code/boxGame.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/frontEnd.png",
		alt:"前端规范",
		detail:"根据平时项目中积累的一些经验，通过自制的简单移动端框架记录了一些移动开发的前端规范",
		barCode:"img/code/frontEnd.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/jiyidashi.png",
		alt:"记忆大师",
		detail:"微信翻牌小游戏",
		barCode:"img/code/flipCard.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/jqplayer.png",
		alt:"html5音乐播放器",
		detail:"基于jquery Player插件,仿照百度首页音乐制作的一款html5音乐播放器,支持切歌和滚动歌词",
		url:"#",
		cls:"pc"
	},
	{
		imgUrl:"img/show/loushu.png",
		alt:"微楼书制作",
		detail:"爱法珑庭微楼书页面制作,微信页面,使用zepto与css3的animate，自主搭建的全屏滚动框架",
		barCode:"img/code/AFloushu.png",
		cls:"weChat"
	}
]

createDom(data);
function createDom(data,obj){
	var str="";
	for(var i=0;i<data.length;i++){
		str+='<div class="pro-box">'
			+'<img src="'+data[i].imgUrl+'" alt="'+data[i].alt+'">'
			+'<div class="pro-content">'
			+'<span class="pro-tips">'+data[i].alt+'</span>'
			+'<p class="pro-detail">'+data[i].detail+'</p>';
		if(data[i].barCode){
			str+='<img src="'+data[i].barCode+'" alt="'+data[i].alt+'" class="barcode"/>';
		}
		else{
			str+='<a href="'+data[i].url+'" class="linker">点击访问</a>';
		}
		str+='</div></div>';
	}
	$(".product-wrap").html(str);
	//修正有二维码的页面样式
	$(".barcode").parent().find('.pro-detail').css("padding-top","10%");
	$(".pro-box").css("visibility","hidden");
	setTimeout(function(){
		waterFall( $(".pro-box")); //瀑布流布局
		$(".pro-box").css("visibility","visible");
		$(".product-wrap").hide().fadeIn();
	}, 100);
}

/*
针对某一组box进行瀑布流布局
这里固定为三列
*/
function waterFall($objs){
	var arrLeft=[];
	var arrTop=[];
	for(var i=0;i<3;i++){//存储初始的数组
		arrTop.push($objs.eq(i).outerHeight(true));
		arrLeft.push($objs.eq(i).position().left);
	}
	// 无缝转换为绝对定位
	$objs.css({
		position:"absolute",
		margin:0
	});
	for(var i=0;i<3;i++){
		$objs.eq(i).css({
			"top":6,
			"left":arrLeft[i]
		});
	}
	for(var i=3;i<$objs.length;i++){
		var minHeight=Math.min.apply(null,arrTop);
		var cnt=arrTop.indexOf(minHeight);
		$objs.eq(i).css({
			top:arrTop[cnt],
			left:arrLeft[cnt]
		});
		arrTop[cnt]+=$objs.eq(i).outerHeight(true)+6;
	}
	var maxHeight=Math.max.apply(null,arrTop);
	$(".product-wrap").height(maxHeight+30);
}
//数组查找索引
Array.prototype.indexOf=function(num){
	for(var i=0;i<this.length;i++){
		if(this[i]==num){
			return i;
		}
	}
	return -1;
}

//筛选器
var $span=$(".filter").find('span');

$span.on("click",function(){
	$span.removeClass('active');
	$(this).addClass('active');
	//实现筛选功能
	var filter=$(this).data('class');
	if( filter=='all' ){
		createDom(data);
	}
	else{
		var data1=[];
		for(var i=0;i<data.length;i++){
			if(data[i].cls==filter){
				data1.push(data[i]);
			}
		}
		if(data1.length==0){
			var p=$("<p>暂无查询结果 :-(</p>");
			p.css({
				"font-size":"28px",
				"text-align":"center",
				"padding-top":"50px"
			});
			$(".product-wrap").html(p);
		}
		else{
			createDom(data1);
		}
	}
});