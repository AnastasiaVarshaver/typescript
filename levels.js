"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.firstFight = void 0;
var Stats = /** @class */ (function () {
    function Stats(playerHP) {
        if (playerHP === void 0) { playerHP = 100; }
        this.playerHP = playerHP;
    }
    ;
    return Stats;
}());
var firstFight = /** @class */ (function (_super) {
    __extends(firstFight, _super);
    function firstFight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    firstFight.create = function (event) {
        return new Stats(event.playerHP);
    };
    return firstFight;
}(Stats));
exports.firstFight = firstFight;
var stats = firstFight.create({
    playerHP: 100
});
