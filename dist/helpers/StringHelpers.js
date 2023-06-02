"use strict";
String.prototype.clear = function () {
    return this.replace(/\n/g, "").trim();
};
String.prototype.infoClear = function () {
    return this.replace(/,/g, "").split(" ")[0].trim();
};
String.prototype.usernameClear = function () {
    return this.replace("@", "").replace(/\n/g, "").trim();
};
