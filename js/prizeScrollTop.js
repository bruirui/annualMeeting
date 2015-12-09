//随机排列后，存放新排列的员工列表
var newEmployeeList = new Array();

var del_gotPrice_empNumber = '';
del();

/**
 * 删除已经获奖的员工
 * @return {[type]} [description]
 */
function del() {
	var delArray = new Array();
	del_gotPrice_empNumber = sessionStorage.delNumber;
	if (del_gotPrice_empNumber) {
		delArray = del_gotPrice_empNumber.split("|");
		delHaveGotPrize(delArray);
	}
}
/**
 * 在employeeList列表中删除已经获奖过的员工
 * @param  {[type]} delArray [需要删除的员工编号数组]
 * @return {[type]}          [description]
 */
function delHaveGotPrize(delArray) {
	for (var i = 1; i < delArray.length; i++) {
		for (var j = 0; j < employeeList.length; j++) {
			if (delArray[i] == employeeList[j]) {
				employeeList.splice(j, 1);
			}
		}
	}
}

/**
 * 产生随机员工编号名单,根据员工编号number随机产生
 * @return {[type]} [description]
 */
function makeRandomEmployeeNumber(arraylist) {
	arraylist.sort(function() {
		return 0.5 - Math.random()
	})
	return arraylist;
}
/**
 * 为页面拼接随机排列的获奖名单
 * @return {[type]} [description]
 */
var prizeListUL = document.getElementById("prizeListUL");

var ulDiv = document.getElementById("ulDiv");
var ulele = ulDiv.querySelector("ul");

function contactLiForPrizeUL(arraylist) {
	newEmployeeList = makeRandomEmployeeNumber(arraylist);
	for (var i = 0; i < newEmployeeList.length; i++) {
		//给ul拼接li节点
		var node = document.createElement("li");
		var textnode = document.createTextNode(newEmployeeList[i]);
		node.appendChild(textnode);
		ulele.appendChild(node);
	}
}
contactLiForPrizeUL(employeeList);


/**
 * 实现滚动
 */
var resultScrollTop = 0;

var liNodeList = ulDiv.querySelectorAll("li");

var mainBoxss = document.getElementById("mainBoxss");

var ulDiv2 = document.getElementById("ulDiv2");

function Marquee(translateYPos, isRewrite) {
	if (isRewrite) {
		ulDiv2.innerHTML = ulDiv.innerHTML;
	}

	if (ulDiv2.offsetTop - mainBoxss.scrollTop <= 0)
		mainBoxss.scrollTop -= ulDiv.offsetHeight
	else {
		mainBoxss.scrollTop += translateYPos
		resultScrollTop = mainBoxss.scrollTop;
	}
}

var MyMar = setInterval(function() {
	Marquee(62, true);
}, 50);

var endBoxs = document.getElementById("endBoxs");
if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', MyMar, false);
	endBoxs.addEventListener('click', getPrizeFun, false);
}

function getPrizeFun() {
	var liNodeList2 = ulDiv2.querySelectorAll("li");
	clearInterval(MyMar);

	//由快到慢的过程
	var count = 1;
	var perSpeed = 150;
	var num = Math.round(Math.random() * 10) + 10;
	do {
		setTimeout(function() {
			Marquee(30, false);
		}, count * perSpeed);
		count++;
	} while (count < num);


	var lowScrollTopY = resultScrollTop;

	setTimeout(function() {

		var srcollTopResult = resultScrollTop;

		var temp = 0;
		var liLength = liNodeList2.length;
		if (srcollTopResult < liLength * 62) {
			var temp = Math.round(srcollTopResult / 62);
			if (temp < liLength - 1) {
				temp++;
				liNodeList[temp].style.color = 'red';
			} else {
				temp = 0;
				liNodeList2[temp].style.color = 'red';
			}
		} else {
			srcollTopResult = Math.abs(srcollTopResult - liLength * 62);
			var temp = Math.round(srcollTopResult / 62) + 1;
			if (temp > 2) {
				liNodeList[temp].style.color = 'red';
			} else {
				liNodeList[temp].style.color = 'red';
				liNodeList2[temp].style.color = 'red';
			}
		}

		for (var i = 0; i < liNodeList.length; i++) {
			if (i == temp) {
				//拼接需要删除的已获奖名单，作为参数拼接在url上传递
				del_gotPrice_empNumber = del_gotPrice_empNumber + '|' + newEmployeeList[i];
				//console.log("已经获奖的，下一轮不参加抽奖活动：" + del_gotPrice_empNumber);
				//重新设置sessionStorage.delNumber的值
				sessionStorage.delNumber = del_gotPrice_empNumber;
				//console.log("已经获奖,sessionStorage..." + sessionStorage.delNumber);
			}
		}

		//庆祝获奖者
		congratulateGetPrize();

	}, num * perSpeed);

}

/**
 * 庆贺获奖者monkey
 * @return {[type]} [description]
 */
function congratulateGetPrize() {
	//小猴庆贺获奖者
	var congratulateEle = document.getElementById("congratulate");
	congratulateEle.style.display = 'block';
	var imgNodeList = congratulateEle.querySelectorAll("img");

	var tempArray = new Array();
	for (var i = 0; i < imgNodeList.length; i++) {
		var tempFlag = false;
		do { //使产生的有机数不等
			tempFlag = false;
			var data_index = Math.round(Math.random() * 9);
			for (var j = 0; j < tempArray.length; j++) {
				if (data_index == tempArray[j]) {
					tempFlag = true;
				}
			}
			tempArray.push(data_index);
		} while (tempFlag);

		imgNodeList[i].style.left = dataArray[data_index].xPos + 'px';
		imgNodeList[i].style.top = dataArray[data_index].yPos + 'px';

		var class_index = Math.round(Math.random() * 3) + 1;
		var class_name = 'translateAction' + class_index;
		imgNodeList[i].className = class_name;
	}
	setTimeout(function() {
		congratulateEle.style.display = 'none';
	}, 2000);
	//庆贺获奖者
	document.getElementsByClassName('prizeHide')[0].style.opacity = 1;
	var gotPrizeBgEles = document.getElementsByClassName('gotPrizeBg');
	gotPrizeBgEles[0].style.opacity = 1;
	//gotPrizeBgEles[0].className += ' rotate360Action_shine';
	gotPrizeBgEles[0].className += ' rotate5';
	//gotPrizeBgEles[1].className += ' rotate5';

}

document.onkeydown = function(event) {
	var e = event || window.event;
	if (e && e.keyCode == 9) { // tab键
		//console.log(del_gotPrice_empNumber);
	}
	if (e && e.keyCode == 13) { // enter键
		window.location.href = "./index.html";
	}
};