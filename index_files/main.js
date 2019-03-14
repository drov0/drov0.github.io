(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/api/steempress.js":
/*!*******************************!*\
  !*** ./src/api/steempress.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:8002'
}));

/***/ }),

/***/ "./src/api/utils.js":
/*!**************************!*\
  !*** ./src/api/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function get_user_data(username, authors) {
  for (var i = 0; i < authors.length; i++) {
    if (authors[i].name === username) return authors[i];
  }

  return {};
}

function add_to_comment_tree(comment_tree, comment) {
  var parent_id = comment.parent_id;

  for (var i = 0; i < comment_tree.length; i++) {
    console.log(comment_tree[i].id);

    if (comment_tree[i].id === parent_id) {
      comment.replies = [];
      console.log("it happnsd");
      comment_tree[i].replies.push(comment);
      return comment_tree;
    } else {
      if (comment_tree[i].replies.length > 0) {
        comment_tree[i].replies = add_to_comment_tree(comment_tree[i].replies, comment);
      }
    }
  }

  return comment_tree;
}

function compare_posts_payout(a, b) {
  if (a.total_payout === undefined || b.total_payout === undefined) return 0;
  if (a.total_payout < b.total_payout) return 1;
  if (a.total_payout > b.total_payout) return -1;
  return 0;
}

function compare_posts_newest(a, b) {
  if (a.unix === undefined || b.unix === undefined) return 0;
  if (a.unix < b.unix) return 1;
  if (a.unix > b.unix) return -1;
  return 0;
}

function compare_posts_oldest(a, b) {
  if (a.unix === undefined || b.unix === undefined) return 0;
  if (a.unix < b.unix) return -1;
  if (a.unix > b.unix) return 1;
  return 0;
}

function sort_comments(comment, replies, method) {
  for (var i = 0; i < comment.replies.length; i++) {
    var reply = replies[i];
    comment.replies[i] = sort_comments(reply, reply.replies, method);
  }

  comment.replies.sort(method);
  return comment;
}

module.exports = {
  get_user_data: get_user_data,
  add_to_comment_tree: add_to_comment_tree,
  compare_posts_oldest: compare_posts_oldest,
  compare_posts_newest: compare_posts_newest,
  compare_posts_payout: compare_posts_payout,
  sort_comments: sort_comments
};

/***/ }),

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
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/utils */ "./src/api/utils.js");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_api_utils__WEBPACK_IMPORTED_MODULE_12__);







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
        comments.replies = _api_utils__WEBPACK_IMPORTED_MODULE_12___default.a.add_to_comment_tree(_this.state.comments.replies, comment);
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
        comments: _api_utils__WEBPACK_IMPORTED_MODULE_12___default.a.sort_comments(comment, replies, method)
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
                _context.next = 2;
                return _api_steempress__WEBPACK_IMPORTED_MODULE_8__["default"].get('/', {
                  params: {
                    author: "acidyo",
                    permlink: "5gpzbm-steem-fantasy-premier-league-gameweek-29-review",
                    display_comment: true
                  }
                });

              case 2:
                response = _context.sent;
                comments = response.data.comments[0];
                comments = _api_utils__WEBPACK_IMPORTED_MODULE_12___default.a.sort_comments(comments, comments.replies, _api_utils__WEBPACK_IMPORTED_MODULE_12___default.a.compare_posts_newest);
                this.setState({
                  comments: comments,
                  ready: true,
                  authors: response.data.authors_data
                });
                window.addEventListener("message", this.steempress_sp_refresh);

              case 7:
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
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HeaderBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          sort_comments: this.sort_comments,
          logged_user: this.state.logged_user,
          publish: this.publish,
          comments: this.state.comments,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CommentTree_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          publish: this.publish,
          comments: this.state.comments,
          authors: this.state.authors,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        });
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

/***/ "./src/components/CommentCard.js":
/*!***************************************!*\
  !*** ./src/components/CommentCard.js ***!
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
/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentBody */ "./src/components/CommentBody.js");





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/CommentCard.js";



var CommentCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentCard, _React$Component);

  function CommentCard() {
    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentCard);

    return Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentCard).apply(this, arguments));
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card collapse",
        id: "#collapse-" + this.props.comment.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CommentBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
        publish: this.props.publish,
        user: this.props.user,
        comment: this.props.comment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), this.props.children));
    }
  }]);

  return CommentCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentCard);

/***/ }),

/***/ "./src/components/CommentTree.js":
/*!***************************************!*\
  !*** ./src/components/CommentTree.js ***!
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
/* harmony import */ var _CommentCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentCard */ "./src/components/CommentCard.js");
/* harmony import */ var _SubCommentCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubCommentCard */ "./src/components/SubCommentCard.js");





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/CommentTree.js";




var CommentTree =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentTree, _React$Component);

  function CommentTree() {
    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentTree);

    return Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentTree).apply(this, arguments));
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentTree, [{
    key: "get_user_data",
    value: function get_user_data(username) {
      for (var i = 0; i < this.props.authors.length; i++) {
        if (this.props.authors[i].name === username) return this.props.authors[i];
      }

      return {};
    }
  }, {
    key: "get_replies",
    value: function get_replies(comment) {
      var children = [];

      for (var i = 0; i < comment.replies.length; i++) {
        var user = this.get_user_data(comment.replies[i].author);
        children.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SubCommentCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: comment.replies[i] + "-card",
          publish: this.props.publish,
          user: user,
          comment: comment.replies[i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.get_replies(comment.replies[i])));
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var comments = this.props.comments;
      var comment_list = [];

      for (var i = 0; i < comments.replies.length; i++) {
        var user = this.get_user_data(comments.replies[i].author);
        var comment = comments.replies[i];
        comment_list.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CommentCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: comment.id + "-card",
          publish: this.props.publish,
          user: user,
          comment: comment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, this.get_replies(comment)));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, comment_list);
    }
  }]);

  return CommentTree;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentTree);

/***/ }),

/***/ "./src/components/HeaderBar.js":
/*!*************************************!*\
  !*** ./src/components/HeaderBar.js ***!
  \*************************************/
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
/* harmony import */ var _api_steempress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/steempress */ "./src/api/steempress.js");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/utils */ "./src/api/utils.js");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_api_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _VoteList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoteList */ "./src/components/VoteList.js");





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/HeaderBar.js";





var HeaderBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderBar, _React$Component);

  function HeaderBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      display_reply_box: false,
      upvoted: false,
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

    _this.login = function (event) {
      window.open('http://localhost:8002/auth', '', ' scrollbars=yes,menubar=no,width=500,height=600, resizable=yes,toolbar=no,location=no,status=no');
    };

    return _this;
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var comment = this.props.comments;
      var account = this.props.logged_user;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "text-secondary text-center",
        href: "https://steempress.io",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Powered by SteemPress"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), account === "" ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: " btn btn-outline-primary ml-2",
        onClick: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "  Login") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: " btn btn-outline-primary ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "  Logout")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: this.display_reply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fa fa-reply",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), " Reply"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        className: "float-right btn " + (this.state.upvoted === true ? "btn-primary" : "btn-outline-primary") + " btn-circle ml-2",
        onClick: this.upvote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "upvote fa fa-2x fa-angle-up ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
          lineNumber: 79
        },
        __self: this
      }, comment.total_payout, " $")), this.state.display_vote_list === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_VoteList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        list_id: comment.id,
        origin: "votelist-head",
        vote_list: comment.active_votes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dropdown float-right",
        style: {
          marginTop: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Order comments by"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        onClick: function onClick() {
          return _this2.props.sort_comments(comment, comment.replies, _api_utils__WEBPACK_IMPORTED_MODULE_7___default.a.compare_posts_newest);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Newest"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        onClick: function onClick() {
          return _this2.props.sort_comments(comment, comment.replies, _api_utils__WEBPACK_IMPORTED_MODULE_7___default.a.compare_posts_oldest);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "oldest"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        onClick: function onClick() {
          return _this2.props.sort_comments(comment, comment.replies, _api_utils__WEBPACK_IMPORTED_MODULE_7___default.a.compare_posts_payout);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Payout"))), this.state.display_reply_box === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "reply-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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
          lineNumber: 98
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: function onClick() {
          return _this2.props.publish(_this2, _this2.state.reply_text, comment.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "  Publish")))))));
    }
  }]);

  return HeaderBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

/***/ }),

/***/ "./src/components/Spinner.js":
/*!***********************************!*\
  !*** ./src/components/Spinner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/Spinner.js";

function _templateObject() {
  var data = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // First way to import



var Spinner = function Spinner() {
  var override = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sweet-loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__["CircleLoader"], {
    css: override,
    sizeUnit: "px",
    size: 150,
    color: 'grey',
    loading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/SubCommentCard.js":
/*!******************************************!*\
  !*** ./src/components/SubCommentCard.js ***!
  \******************************************/
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
/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentBody */ "./src/components/CommentBody.js");





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/SubCommentCard.js";



var SubCommentCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubCommentCard, _React$Component);

  function SubCommentCard() {
    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubCommentCard);

    return Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubCommentCard).apply(this, arguments));
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubCommentCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card card-inner collapse",
        id: "#collapse-" + this.props.comment.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CommentBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
        publish: this.props.publish,
        user: this.props.user,
        comment: this.props.comment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), this.props.children);
    }
  }]);

  return SubCommentCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SubCommentCard);

/***/ }),

/***/ "./src/components/VoteList.js":
/*!************************************!*\
  !*** ./src/components/VoteList.js ***!
  \************************************/
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





var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/components/VoteList.js";


var VoteList =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VoteList, _React$Component);

  function VoteList() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VoteList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VoteList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      votelist: []
    };
    return _this;
  }

  Object(_home_drov_projects_steempress_twoway_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VoteList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        votelist: this.render_votelist()
      });
    }
  }, {
    key: "render_votelist",
    value: function render_votelist() {
      var votelist = [];

      if (this.props.vote_list.length === 0) {
        votelist.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: this.props.list_id + "-none",
          className: "list-group-item float-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "No votes"));
        return votelist;
      }

      var left = this.props.vote_list.length - 4;
      var length = left < 0 ? this.props.vote_list.length : 4;

      for (var i = 0; i < length; i++) {
        var vote = this.props.vote_list[i];
        votelist.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: this.props.list_id + "-" + vote.voter,
          className: "list-group-item float-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://steemit.com/@" + vote.voter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, " ", vote.voter), " ", vote.value, " $"));
      }

      if (left > 0) {
        votelist.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: this.props.list_id + "-left",
          className: "list-group-item float-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "And ", left, " more..."));
      }

      return votelist;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card float-right " + this.props.origin,
        style: {
          "width": "13rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-group list-group-flush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.state.votelist));
    }
  }]);

  return VoteList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (VoteList);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
var _jsxFileName = "/home/drov/projects/steempress-twoway-front/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.querySelector("#root"));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/drov/projects/steempress-twoway-front/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/drov/projects/steempress-twoway-front/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map