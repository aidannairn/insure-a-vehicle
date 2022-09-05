"use strict";
exports.__esModule = true;
exports.CarInsurance = void 0;
var react_1 = require("react");
var comprehensive_png_1 = require("../../images/comprehensive.png");
var thirdparty_property_png_1 = require("../../images/thirdparty-property.png");
var thirdparty_theft_png_1 = require("../../images/thirdparty-theft.png");
var CarInsuranceTable_1 = require("./CarInsuranceTable");
var up_arrow_png_1 = require("../../images/up-arrow.png");
var down_arrow_png_1 = require("../../images/down-arrow.png");
exports.CarInsurance = function (_a) {
    var _b = react_1["default"].useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleDrawer = function () {
        setIsOpen(function (prevState) { return !prevState; });
    };
    var _c = react_1["default"].useState(true), showMore = _c[0], setShowMore = _c[1];
    var handleShowMore = function () {
        setShowMore(!showMore);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "car-insurance" },
            react_1["default"].createElement("div", { className: "list-container" },
                react_1["default"].createElement("ul", { className: "list-content" },
                    react_1["default"].createElement("li", { className: "item1" },
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement("img", { src: comprehensive_png_1["default"] }),
                            react_1["default"].createElement("p", null,
                                "Comprehensive",
                                react_1["default"].createElement("br", null),
                                " Everyday Plus"))),
                    react_1["default"].createElement("li", { className: "item2" },
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement("img", { src: thirdparty_property_png_1["default"] }),
                            react_1["default"].createElement("p", null,
                                "Third Party",
                                react_1["default"].createElement("br", null),
                                " Property Damage"))),
                    react_1["default"].createElement("li", { className: "item3" },
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement("img", { src: thirdparty_theft_png_1["default"] }),
                            react_1["default"].createElement("p", null,
                                "Third Party",
                                react_1["default"].createElement("br", null),
                                " Fire & Theft")))),
                react_1["default"].createElement(CarInsuranceTable_1.CarInsuranceTable, { showMore: showMore }),
                react_1["default"].createElement("div", { className: "feature" },
                    react_1["default"].createElement("a", { onClick: handleShowMore, className: "features" },
                        showMore ? "Show all features" : "Hide features",
                        react_1["default"].createElement("span", { className: showMore ? "down-arrow" : "up-arrow" }, showMore ? (react_1["default"].createElement("img", { src: down_arrow_png_1["default"], className: "arrow-ico" })) : (react_1["default"].createElement("img", { src: up_arrow_png_1["default"], className: "arrow-ico" })))))))));
};
