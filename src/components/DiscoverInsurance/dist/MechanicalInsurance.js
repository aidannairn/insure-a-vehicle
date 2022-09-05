"use strict";
exports.__esModule = true;
exports.MechanicalInsurance = void 0;
var react_1 = require("react");
var mechanic_png_1 = require("../../images/mechanic.png");
exports.MechanicalInsurance = function (_a) {
    return (react_1["default"].createElement("div", { className: "mechanical-insurance" },
        react_1["default"].createElement("div", { className: "mechanical-insurance-content" },
            react_1["default"].createElement("div", { className: "photo" },
                react_1["default"].createElement("img", { src: mechanic_png_1["default"], className: 'mechanic' })),
            react_1["default"].createElement("div", { className: "content" },
                react_1["default"].createElement("p", { className: "text" },
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    react_1["default"].createElement("br", null),
                    " Nihil reiciendis accusamus libero neque tempore blanditiis!",
                    react_1["default"].createElement("br", null),
                    " Laboriosam, reprehenderit assumenda fugit excepturi provident",
                    react_1["default"].createElement("br", null),
                    " fugiat maxime aliquid quasi odio voluptate repellat,",
                    react_1["default"].createElement("br", null),
                    " ipsam voluptates!"),
                react_1["default"].createElement("div", { className: "btn-container" },
                    react_1["default"].createElement("button", { className: "get-quote-btn" }, "Get a Quote / Buy"),
                    react_1["default"].createElement("button", { className: "learn-more-btn" }, "Learn More")))),
        react_1["default"].createElement("table", { className: "mechanical-table" },
            react_1["default"].createElement("tbody", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Comprehensive cover for mechanical and electrical breakdown")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Parts & Labour")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "AA Roadservice & 24/7 breakdown assistance")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Vehicle recovery and towing")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Accommodation & rental car costs for out of town breakdowns")),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Generous claim limits that are set when you purchase your policy"))))));
};
