// snap table
var svg=Snap("100%","100%");

createPixel();
//绘制x,y轴
function createPixel(){

	var pX=svg.paper.line(70,10,70,360).attr({
		stroke:"#555",
		strokeWidth:5
	});
	var pY=svg.paper.line(68,360,940,360).attr({
		stroke:"#555",
		strokeWidth:5
	});

	var pXText=svg.paper.text(900,380,"skill").attr({
		stroke:"#555"
	});
	var pYText=svg.paper.text(10,30,"power").attr({
		stroke:"#555"
	});

}

//绘制数据
var data=[
	{//html
		text:['ps','html5','htmlPlus','git','canvas','svg','php'],
		power:[80,90,70,85,80,80,75]
	},
	{//css
		text:['css','css3','less','BootStrap'],
		power:[85,90,80,75]
	},
	{//js
		text:['nativejs','jquery','AF','seajs','angular','nodejs'],
		power:[90,88,78,80,75,70]
	}
];
/*起点[55,358],终点[940,358]
x:75 ~ 940
y:358 ~ 10
根据text的数目均分x轴,根据power与100的百分比求得y轴坐标
*/
var polyLine;
var skillText=[];
var totalX=865; //总宽度
var totalY=348;//总高度
createPointsArr(data[0]);

function createPointsArr(data){
	if(polyLine){
		polyLine.remove();
	}
	if(skillText.length>=0){//
		for(var i=0;i<skillText.length;i++){
			skillText[i].remove();
		}
	}
	var perBoxW=totalX / data.text.length;
	var pointsArr=[];//存储计算出来的坐标
	for(var i=0;i<data.text.length;i++){
		var px=75+perBoxW*i;
		var py=348-data.power[i] / 100 * 348; //y轴反向
		pointsArr.push(px,py);
		skillText[i]=svg.paper.text(75+perBoxW*i,380,data.text[i]).attr({
			"stroke":"#7195F2"
		});
	}
	polyLine=svg.paper.polyline(pointsArr).attr({
		stroke:"#6EBAF0",
		strokeWidth:0,
		fill:"none",
		"stroke-dasharray":"1000",
		"stroke-dashoffset":"1000"
	});
	polyLine.animate({
		strokeWidth:3,
		"stroke-dashoffset":"0"
	},2000,mina.easeOut);

}


$("#table").append($(svg.node));

//切换绘图
$(".tab-btn").find('li').on("click",function(){
	$(".tab-btn").find('li').removeClass('active');
	$(this).addClass('active');
	var idx=$(this).index();
	createPointsArr(data[idx]);
});