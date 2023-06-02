String.prototype.clear = function (this: string) {
  return this.replace(/\n/g, "").trim();
};

String.prototype.infoClear = function (this: string) {
  return this.replace(/,/g, "").split(" ")[0].trim();
};

String.prototype.usernameClear = function (this: string) {
  return this.replace("@", "").replace(/\n/g, "").trim();
};
