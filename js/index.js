window.onload = function() {
    imgLocation('container', 'box');
}

function imgLocation(parent, content) {
    //将parent下没有图片的 content 全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    //得到图片宽度
    var imgWidth = ccontent[0].offsetWidth;
    //单个图片的个数
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * num + "px" + ";margin:0 auto";

    //得到每张图片的高度
    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            console.log(BoxHeightArr[i]);
        } else {
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getMinHeightLocation(BoxHeightArr, minHeight);

            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex] + ccontent[i].offsetLeft + 'px';
        }
    }

}

//找到最小高度图片的位置
function getMinHeightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName('*');
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
tArr;
}
