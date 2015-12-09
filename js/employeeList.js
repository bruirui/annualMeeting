/*庆贺获奖者的小猴坐标数据*/
var congratulateData1 = {
	xPos : 120,
	yPos : 0
}
var congratulateData2 = {
	xPos : 230,
	yPos : 80
}
var congratulateData3 = {
	xPos : 340,
	yPos : 160
}
var congratulateData4 = {
	xPos : 450,
	yPos : 40
}
var congratulateData5 = {
	xPos : 560,
	yPos : 120
}
var congratulateData6 = {
	xPos : 670,
	yPos : 200
}
var congratulateData7 = {
	xPos : 780,
	yPos : 30
}
var congratulateData8 = {
	xPos : 890,
	yPos : 150
}
var congratulateData9 = {
	xPos : 1000,
	yPos : 180
}
var congratulateData10 = {
	xPos : 1200,
	yPos : 100
}

var dataArray = new Array();
dataArray.push(congratulateData1);
dataArray.push(congratulateData2);
dataArray.push(congratulateData3);
dataArray.push(congratulateData4);
dataArray.push(congratulateData5);
dataArray.push(congratulateData6);
dataArray.push(congratulateData7);
dataArray.push(congratulateData8);
dataArray.push(congratulateData9);
dataArray.push(congratulateData10);


var employeeList = new Array();

for(var i = 1; i <= 400; i++){
	var tempLength = i.toString().length;
	if(tempLength == 1){
		employeeList.push('00'+i);
	}else if(tempLength == 2){
		employeeList.push('0'+i);
	}else{
		employeeList.push(i);
	}
}