//筛选器
var $span=$(".filter").find('span');

$span.on("click",function(){
	$span.removeClass('active');
	$(this).addClass('active');
});

//渲染数据
var data=[
	{
		imgUrl:"img/show/100du.png",
		alt:"100度电商网站",
		detail:"PC端电商网站前端页面制作,模块化布局,对低版本浏览器采用优雅降级处理,浏览器兼容到ie6",
		url:"http://1.beartest123.sinaapp.com/100du/index.html"
	},
	{
		imgUrl:"img/show/20111111.png",
		alt:"H5微场景制作",
		detail:"毕业季班级微场景制作",
		barCode:"img/code/20111111.png"
	},
	{
		imgUrl:"img/show/aifahongbao.png",
		alt:"微信抢红包",
		detail:"爱法珑庭抢红包吸粉游戏,使用jquery,CSS3动画效果实现,OOP编写游戏逻辑`",
		barCode:"img/code/AFhongbao.png"
	}
]

createDom(data);
function createDom(data){
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
	// waterFall( $(".pro-box")); //瀑布流布局
}