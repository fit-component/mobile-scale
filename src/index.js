"use strict";
var scale = function (width, reactDomName) {
    if (width === void 0) { width = 400; }
    if (reactDomName === void 0) { reactDomName = 'react-dom'; }
    var WIDTH = width;
    var ratio = screen.width / WIDTH;
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui');
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.getElementById(reactDomName).style.margin = '0 auto';
    document.getElementById(reactDomName).style.width = width + 'px';
};
exports.__esModule = true;
exports["default"] = scale;
