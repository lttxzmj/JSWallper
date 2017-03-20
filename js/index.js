window.onload = function() {
    imgLocation('container', 'box');
    var imgData = {
        "data": [{
            "src": "2.jpg"
        }, {
            "src": "3.jpg"
        }, {
            "src": "4.jpg"
        }, {
            "src": "5.jpg"
        }, {
            "src": "6.jpg"
        }]
    }
    window.onscroll = function() {
        if (checkFlag()) {
            var cparent = document.getElementById('container');
            for (var i = 0; i < imgData.data.length; i++) {
                var ccontent = document.createElement('div'); //添加元素节点
                ccontent.className = 'box'; //添加类名
                cparent.appendChild(ccontent);
                var boxImg = document.createElement('div'); //添加子节点
                boxImg.className = "box_img";
                ccontent.appendChild(boxImg);
                var img = document.createElement('img');
                img.src = 'img/' + imgData.data[i].src;
                boxImg.appendChild(img);
            }
        }
        imgLocation('container', 'box');
    }
}

function checkFlag() {
    var cparent = document.getElementById('container');
    var ccontent = getChildElement(cparent, 'box');
    //得到最后一张图片距离顶部的高度
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    //获取元素距离他容器顶部的像素距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //获取页面高度
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;

    if (lastContentHeight < scrollTop + pageHeight) {
        return true;
    }

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
        } else {
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getMinHeightLocation(BoxHeightArr, minHeight);

            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
            BoxHeightArr[minIndex] += ccontent[i].offsetHeight;
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
