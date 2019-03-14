webpackHotUpdate("main",{

/***/ "./src/components/CommentBody.js":
/*!***************************************!*\
  !*** ./src/components/CommentBody.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _VoteList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VoteList */ "./src/components/VoteList.js");





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/CommentBody.js";



var CommentBody =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentBody, _React$Component);

  function CommentBody() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentBody)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      display_reply_box: false,
      upvoted: false,
      reply_text: "",
      display_vote_list: false
    };

    _this.display_reply = function () {
      _this.setState({
        display_reply_box: _this.state.display_reply_box === false
      });
    };

    _this.display_vote_list = function () {
      _this.setState({
        display_vote_list: _this.state.display_vote_list === false
      });
    };

    _this.upvote = function (event) {
      event.preventDefault();

      _this.setState({
        upvoted: true
      });
    };

    return _this;
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var comment = this.props.comment;
      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: user.profile_image,
        alt: comment.author + " 's profile picture",
        className: "img  profile-pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: " author-name",
        href: "https://steemit.com/@" + comment.author,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, user.display_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "author-steem-username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "steem_logo.png",
        alt: "steem logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://steemit.com/@" + comment.author,
        style: {
          color: "#999999"
        },
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, user.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-secondary text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, comment.date))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: comment.body
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: this.display_reply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fa fa-reply",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), " Reply"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        className: "float-right btn " + (this.state.upvoted === true ? "btn-primary" : "btn-outline-primary") + " btn-circle ml-2",
        onClick: this.upvote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "upvote fa fa-2x fa-angle-up ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "float-right payout",
        style: {
          "cursor": "pointer"
        },
        onClick: this.display_vote_list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, comment.total_payout, " $")), this.state.display_vote_list === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_VoteList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        origin: "votelist-body",
        vote_list: comment.active_votes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), this.state.display_reply_box === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "reply-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        className: "form-control",
        onChange: function onChange(e) {
          return _this2.setState({
            reply_text: e.target.value
          });
        },
        id: comment.id + "reply-form",
        value: this.state.reply_text,
        rows: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: function onClick() {
          return _this2.props.publish(_this2, _this2.state.reply_text, comment.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "  Publish"))));
    }
  }]);

  return CommentBody;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentBody);

/***/ })

})
//# sourceMappingURL=main.eb74ef6aaef9593cc4c4.hot-update.js.map