// create canvas

var stage=new createjs.Stage("canvas");
canvas.parentNode.style.height=document.documentElement.clientHeight-88+"px";
canvas.width=canvas.parentNode.clientWidth;
canvas.height=canvas.parentNode.clientHeight;

var circleView=new createjs.Container();
stage.addChild(circleView);

createBox();
//创建随机小球
function createBox(){

	
	//随机半径
	var r=Math.random()*2+2;
	//随机位置
	var x=Math.random()*canvas.width/2+r;
	var y=Math.random()*canvas.height/2+r;
	var opacity=Math.random()*0.5+0.2;
	//随机颜色
	// var color=Math.random()*1000000;
	// var cl="#"+Math.floor(color);
	var cl="#ddd";
	var ball=new createjs.Shape();
	ball.graphics
	.beginFill(cl)
	.drawCircle(x,y,r);
	ball.alpha=opacity;
	ball.regX=ball.regY=r/2;
	circleView.addChild(ball);
}
//创建随机的三角形
function createAngle(){



}
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",tick);

function tick(){
	createBox();
	for(var i=0;i<circleView.getNumChildren();i++){
		var s=circleView.getChildAt(i);
		s.scaleX+=0.05;
		s.scaleY+=0.05;
		s.alpha-=0.02;
		if(s.alpha<=0){
			circleView.removeChild(s);
		}
	}
	stage.update();
}
// canvas end

// text
$(".canvas-title-wrap p").on("animationEnd webkitAnimationEnd",function(){

	$(this).css("text-shadow","0px 0px 0px #fff");

});