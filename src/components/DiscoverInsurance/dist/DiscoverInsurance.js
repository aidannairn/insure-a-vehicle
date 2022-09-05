"use strict";
exports.__esModule = true;
exports.DiscoverInsurance = void 0;
var react_1 = require("react");
var CarInsurance_1 = require("./CarInsurance");
var MechanicalInsurance_1 = require("./MechanicalInsurance");
var Tow_Truck_png_1 = require("../../images/Tow Truck.png");
var Vehicle_Insurance_png_1 = require("../../images/Vehicle Insurance.png");
require("./DiscoverInsurance.css");
exports.DiscoverInsurance = function (_a) {
    var alignment = _a.alignment;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "insurance-container" }, alignment === "left" ? react_1["default"].createElement(CarInsurance_1.CarInsurance, null) : react_1["default"].createElement(MechanicalInsurance_1.MechanicalInsurance, null)),
        alignment === "left" ? (react_1["default"].createElement("div", { className: "bottom-insurance" },
            react_1["default"].createElement("button", { className: "get-quote-btn" }, "Get a Quote / Buy"),
            react_1["default"].createElement("div", { className: "other-plan" },
                react_1["default"].createElement("img", { src: Tow_Truck_png_1["default"] }),
                "Do you want to get mechanical coverage?",
                " ",
                react_1["default"].createElement("a", null, "Check our Mechanical Breakdown Insurance"),
                " plan."))) : (react_1["default"].createElement("div", { className: "bottom-insurance" },
            react_1["default"].createElement("div", { className: "other-plan" },
                react_1["default"].createElement("img", { src: Vehicle_Insurance_png_1["default"] }),
                "Are you after car insurance? ",
                react_1["default"].createElement("a", null, "Check our Car Insurance"),
                " plan.")))));
};
