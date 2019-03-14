webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_steempress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/steempress */ "./src/api/steempress.js");
/* harmony import */ var _CommentTree_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentTree.js */ "./src/components/CommentTree.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.js");
/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderBar */ "./src/components/HeaderBar.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data */ "./src/components/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/utils */ "./src/api/utils.js");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_api_utils__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/App.js";








var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      comments: [],
      ready: false,
      logged_user: ""
    };

    _this.publish = function (event, text, parent_id) {
      var comment = {
        active_votes: [],
        author: "acidyo",
        body: text,
        date: "just now",
        id: 161894964,
        total_payout: 0,
        replies: [],
        upvotes: 0,
        parent_id: parent_id
      };
      event.setState({
        display_reply_box: false
      });
      var comments = {}; // if t's a reply on the post itself

      if (_this.state.comments.id === parent_id) {
        comments = _this.state.comments;
        comments.replies.push(comment);
      } else {
        comments = _this.state.comments.replies;
        comments.replies = _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.add_to_comment_tree(_this.state.comments.replies, comment);
      }

      _this.setState({
        comments: comments
      });
    };

    _this.steempress_sp_refresh = function (event) {
      if (event.origin !== "http://localhost:8002") return;
      var data = {};
      console.log(event.data);

      try {
        data = JSON.parse(event.data);
        console.log(data);
      } catch (e) {
        return;
      }

      _this.setState({
        logged_user: data
      });
    };

    _this.sort_comments = function (comment, replies, method) {
      _this.setState({
        comments: _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.sort_comments(comment, replies, method)
      });
    };

    return _this;
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, comments;
        return _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /*const response = await steempress.get('/',
                    {params : { author : "acidyo", permlink : "5gpzbm-steem-fantasy-premier-league-gameweek-29-review", display_comment : true}});
                */
                response = _data__WEBPACK_IMPORTED_MODULE_12___default.a;
                comments = response.data.comments[0];
                comments = _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.sort_comments(comments, comments.replies, _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.compare_posts_newest);
                this.setState({
                  comments: comments,
                  ready: true,
                  authors: response.data.authors_data
                });
                window.addEventListener("message", this.steempress_sp_refresh);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.ready === true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HeaderBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          sort_comments: this.sort_comments,
          logged_user: this.state.logged_user,
          publish: this.publish,
          comments: this.state.comments,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CommentTree_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          publish: this.publish,
          comments: this.state.comments,
          authors: this.state.authors,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        });
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.52c25185cfe02f7d42e3.hot-update.js.map