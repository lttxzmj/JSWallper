window.onload = function() {
    imgLocation('container', 'box');
}

function imgLocation(parent, content) {
    //将parent下没有图片的 content 全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
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
