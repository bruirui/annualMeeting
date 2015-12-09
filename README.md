# annualMeeting
年会抽奖活动；随机生成400个数据打乱顺序进行抽奖活动；中奖员工下次不参与抽奖；

1、随机产生400以内的数字，打乱排序；
2、本轮中奖者，在之后的抽奖活动不能参与；
3、屏幕数字滚动效果


主要收获：
1、数组打乱顺序	
array.sort(function(){return 0.5-Math.random();});

2、屏幕员工随机序号滚动效果,首尾相接的效果
setInterval()
offsetTop、offsetHeight、scrollTop
innerHTML

3、原生JS拼接页面节点
var node = document.createElement("li");
var textnode = document.createTextNode(newEmployeeList[i]);
node.appendChild(textnode);
ulele.appendChild(node);

4、本轮中奖者，在之后的抽奖活动中不能参与

利用HTML5新特性：sessionStorage——在一个会话中，值都存在（若浏览器窗口关闭，则sessionStorage值就清空了）
在抽出中奖者后，将中奖者编号存入sessionStorage;
每次进入抽奖页面时，先将sessionStorage中的值删除，再开始抽奖；

//设置sessionStorage.delNumber的值
sessionStorage.delNumber = del_gotPrice_empNumber;

/**
 * 删除已经获奖的员工
 * @return {[type]} [description]
 */
function del() {
	//delArray为需要删除的员工，即已经中奖者的编号
	var delArray = new Array();
	del_gotPrice_empNumber = sessionStorage.delNumber;
	if (del_gotPrice_empNumber) {
		delArray = del_gotPrice_empNumber.split("|");
		delHaveGotPrize(delArray);
	}
}


拓展：localStorage——即使浏览器窗口关闭，该值不清空;
除非手动清除浏览器中localstorage内的值，或一段时间内clear();

页面间传参：url拼接参数
参数暴露在url地址上，不安全；

