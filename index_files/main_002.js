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
                console.log(response);
                comments = response.data.comments[0];
                comments = _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.sort_comments(comments, comments.replies, _api_utils__WEBPACK_IMPORTED_MODULE_13___default.a.compare_posts_newest);
                this.setState({
                  comments: comments,
                  ready: true,
                  authors: response.data.authors_data
                });
                window.addEventListener("message", this.steempress_sp_refresh);

              case 6:
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
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HeaderBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          sort_comments: this.sort_comments,
          logged_user: this.state.logged_user,
          publish: this.publish,
          comments: this.state.comments,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CommentTree_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          publish: this.publish,
          comments: this.state.comments,
          authors: this.state.authors,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
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
        className: "col-md-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: user.profile_image,
        alt: comment.author + " 's profile picture",
        className: "img img-fluid  profile-pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-secondary text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, comment.date)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "float-left",
        style: {
          lineHeight: "10%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: " author-name",
        href: "https://steemit.com/@" + comment.author,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, user.display_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "author-steem-username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "steem_logo.png",
        alt: "steem logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 47
        },
        __self: this
      }, user.name))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: comment.body
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: this.display_reply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fa fa-reply",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), " Reply"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        className: "float-right btn " + (this.state.upvoted === true ? "btn-primary" : "btn-outline-primary") + " btn-circle ml-2",
        onClick: this.upvote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "upvote fa fa-2x fa-angle-up ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
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
          lineNumber: 58
        },
        __self: this
      }, comment.total_payout, " $")), this.state.display_vote_list === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_VoteList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        origin: "votelist-body",
        vote_list: comment.active_votes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), this.state.display_reply_box === true && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "reply-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "float-right btn btn-outline-primary ml-2",
        onClick: function onClick() {
          return _this2.props.publish(_this2, _this2.state.reply_text, comment.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "data": {
    "comments": [{
      "id": 71120888,
      "parent_id": null,
      "author": "acidyo",
      "permlink": "5gpzbm-steem-fantasy-premier-league-gameweek-29-review",
      "community": "acidyo",
      "category": "steem",
      "depth": 0,
      "created_at": "2019-03-08T21:49:45.000Z",
      "is_deleted": false,
      "is_pinned": false,
      "is_muted": false,
      "is_valid": true,
      "promoted": "0.000",
      "post_id": 71120888,
      "children": 10,
      "author_rep": 78.52,
      "flag_weight": 0,
      "total_votes": 574,
      "up_votes": 574,
      "title": "Steem Fantasy Premier League - Gameweek 29 Review",
      "preview": "<center>\n\nhttps://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmaKw63HBMpvG9vQbBQ7TyWEUuY9xtPtMbgLMub4ap6LV6/image.png\n\n___\n\nGameweek 29 comes with 3 derbies. The North London derby featuring Arsenal and Tottenham, the West London derby featuring Chelsea and Fulham and last but not least the Merseyside derby featuring Liverpool and Everton\n\nLiverpool is still holding on the first place, City is very close being only 2 points behind though. This gameweek will also be very important for the champions league qualification. Manchester United are on an amazing run ever since Ole Gunnar Solksjaer took over and they are finally catching up to the 4th place currently being held by Arsenal.\n\nLeicester sacked Claude Puel after a series of bad results and Brendan Rodgers looks to be their new manager. I personally think Brendan is a great manager and he deserved a new chance on the premier league. He leaves Celtic Glasgow who was on track of achieving a record this season.\n\nFulham also sacked their manager af",
      "img_url": "https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmaKw63HBMpvG9vQbBQ7TyWEUuY9xtPtMbgLMub4ap6LV6/image.png",
      "payout": "82.830",
      "payout_at": "2019-03-15T21:49:45.000Z",
      "updated_at": "2019-03-08T21:49:45.000Z",
      "is_paidout": false,
      "is_nsfw": false,
      "is_declined": false,
      "is_full_power": false,
      "is_hidden": false,
      "is_grayed": false,
      "rshares": "107482774616901",
      "sc_trend": 3240.54,
      "sc_hot": 155216,
      "body": "<center><br /><a href=\"https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmaKw63HBMpvG9vQbBQ7TyWEUuY9xtPtMbgLMub4ap6LV6/image.png\">https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmaKw63HBMpvG9vQbBQ7TyWEUuY9xtPtMbgLMub4ap6LV6/image.png</a><br /><br />Gameweek 29 comes with 3 derbies. The North London derby featuring Arsenal and Tottenham, the West London derby featuring Chelsea and Fulham and last but not least the Merseyside derby featuring Liverpool and Everton<br />Liverpool is still holding on the first place, City is very close being only 2 points behind though. This gameweek will also be very important for the champions league qualification. Manchester United are on an amazing run ever since Ole Gunnar Solksjaer took over and they are finally catching up to the 4th place currently being held by Arsenal.<br />Leicester sacked Claude Puel after a series of bad results and Brendan Rodgers looks to be their new manager. I personally think Brendan is a great manager and he deserved a new chance on the premier league. He leaves Celtic Glasgow who was on track of achieving a record this season.<br />Fulham also sacked their manager after only 16 matches and losing 2-0 to Southampton. Scott Parker will be the replacement.<br />The battle to avoid relegation seems to be dragging Brighton into the fight, Newcastle and Burnley have shown signs of improvement, but their quest for salvation is far from over. Southampton on the other side has shown signs of fatigue.<br />With Fulham and Huddersfield looking set to be relegated, Newcastle Southampton Brighton and Burnley will try their best to avoid the 18th place.<br />The week starts with the North London derby. Both teams need a victory. Spurs might be weaker at home, but everything can happen in a derby.<br />For fantasy players this might be the most interesting match as both teams have many popular fantasy assets such as Kolasinac Laca Auba Son Eriksen<br />Liverpool faces Everton.The Reds seem to be on a great run and Trent Alexander Arnold is back from injury. Everton has been quite unpredictable recently, their form is on a downward trend. This has motivated many players to transfer Richarlison from their teams<br />Bournemouth will have a tough fixture against City. The cherries are usually stronger at home, but City is simply on a great run, thrashing Chelsea 6-0 and beating Arsenal as well.<br />United will be hosting Southampton this gameweek. The Saints might have a chance of surviving this season with their manager Ralph Hassenhüttl. Recently their form has taken a dip though, United is besides City one of the best teams at the moment form wise. Defensively both teams aren’t that good, thus there shouldn’t be a clean sheet.<br />United will have many injuries on their midfield to deal with. Lingard, Ander Herrera Martial, Mata and Matic are injured. Alexis Sanchez might have a chance to start due to the current injury crisis. Southampton won’t have Danny Ings on their side.<br />With all their injuries United managed to get a draw against Liverpool though.<br />Possible starting lineups:<br />United: De Gea, Young, Lindelöf, Smalling, Shaw, McTominay, Pogba, Pereira, Sanchez, Lukaku, Rashford.<br />Southampton: Gunn, Yoshida, Bednarek, Vestergaard, Bertrand, Romeu, Redmond, Höjberg, Valery, Ward Prowse, Austin<br />Wolves is hosting Cardiff at the Molyneux, Fantasy players might be cautious after Wolves lost against Huddersfield last week.<br />Brighton will be playing Huddersfield in what looks to be a very uneventful match as both teams are having bad runs.<br />Burnley lost their first match of the year against Newcastle last week. This week they have to play against Crystal Palace. Palace is on a great run recently<br />Fulham will be receiving Chelsea, with both teams being on a bad run. Chelsea should beat Fulham, as Fulham is the worst team when it comes to form<br />Leicester will be hosting Watford, which looks to be an interesting match. Outside the “top six” Watford is the second best teams only after Wolves. Leicester will be managed by an interim manager for this game<br />Newcastle will be playing against West Ham. Newcastle has improved a lot recently and they will need great results if they want to be saved. West Ham on the other hand has had tough fixtures against teams like Liverpool and City but did really well.<br />Disclaimer: This post is written by <a href=\"https://steemit.com/@carita-feliz\">@carita-feliz</a>. The rewards of these posts are gathered in a pool to be rewarded to managers of the league and authors at the end of the season.<br />This Tournament is sponsored by <a href=\"https://steemit.com/@blocktrades\">@blocktrades</a>, check out <a href=\"https://widget.blocktrades.us?affiliate_id=4f41884c-b15c-444d-b7a2-d5b2b5da1a0a\">blocktrades.us</a> for easy and fast crypto exchange and consider voting him for witness!<br /></center><br />___<br /><a href=\"https://steemitimages.com/0x0/https://cdn.steemitimages.com/0x0/https://media.discordapp.net/attachments/331165119612452894/353956387350380544/acidyo-posting-banner.gif\">https://steemitimages.com/0x0/https://cdn.steemitimages.com/0x0/https://media.discordapp.net/attachments/331165119612452894/353956387350380544/acidyo-posting-banner.gif</a><br />",
      "votes": "blocktrades,85219795613035,10000,25\ntombstone,483834999709,200,25\nnanzo-scoop,512190728473,1000,25\nacidyo,8114972168434,10000,25\nmummyimperfect,6912122960,1000,25\nkevinwong,815022515602,1000,25\nak2020,2806636415,1000,25\nwritewords,509274473,800,25\nthe-alien,6807311852,10000,25\nola-haukland,24327802604,10000,25\nemily-cook,201758502,1000,25\nhitmeasap,9609168742,3300,25\nmrwang,82900074,500,25\nardina,151288767,10000,25\ngikitiki,19017019376,5000,25\nmeesterboom,575423239940,4400,25\njillfeint,4852098094,10000,25\nherverisson,244676865625,10000,25\narcange,40538487520,400,25\niamwne,314178417,10000,25\narconite,2997940447,500,25\nraphaelle,2068143714,400,25\ndaynewright,9276246694,5000,25\nace108,92056141830,600,25\nsazbird,524932588,2200,25\njphamer1,1436852072703,10000,25\nazizbd,41213141601,2300,25\npeppernrino,649568928,10000,25\nwisbeech,2777453954,4400,25\nvegeta,4362284280,10000,25\nstephenkendal,1442105819178,10000,25\npatrickulrich,42040488470,2500,25\nphusionphil,2172768196,380,25\nabh12345,310646328522,5000,25\nvotehumanity,266252158,10000,25\nnelyp,890044945,2000,25\nt-bot,293512149532,1000,25\njoep,73983917,10000,25\naksinya,50658981855,5000,25\nsyahhiran,2392664312,10000,25\nwakeupworldnews,21173143790,10000,25\nsteemtruth,1993839807,1000,25\njaybird,257287203963,10000,25\nahmedelakehal,792470339,10000,25\nvoronoi,49889856395,5000,25\ndemartini,1849093141,10000,25\napsu,14655135240,5000,25\nmafeeva,8526187167,1000,25\nmariana85,232845566,1000,25\nplayfulfoodie,114188316191,4000,25\nades,8094566583,10000,25\nripperone,1401260864903,2800,25\nerikaflynn,22417299960,5000,25\nsudutpandang,5465192179,10000,25\ncomfortgenius,2242695082,10000,25\nemonandels,274677095,10000,25\nfreebornsociety,5481068929,1000,25\ncryptophunk,524633549,10000,25\njakechalmers,257212014,10000,25\nanomadsoul,149272559869,10000,25\noendertuerk,73783321920,2500,25\nkingofdew,18213800730,4000,25\nvinnu,183302601,10000,25\ndevi1714,178430726,10000,25\nmorph,432992963,800,25\nijoel,14240008141,10000,25\nchilluminati,517309596,10000,25\njkkim,27068039,1000,25\ngmuxx,3237645372,1000,25\nscandinavianlife,817971850,2500,25\nkhunfarang,465232717,10000,25\ncheaky,228059561,10000,25\ndailygiveaway,196186976,4100,25\nlazylove,183935088,10000,25\nrycharde,4752727316,991,25\nkhunpoom,254754871,5000,25\nchuckyfucky,4485134667,10000,25\nfreethink,23278422155,8100,25\nnecio,36475731695,10000,25\nelteamgordo,55114696844,7500,25\nschoolforsdg4,27042964359,2300,25\nbenniebanana,194972102,10000,25\nworld5list,115352149025,10000,25\nsarmins,907757025,10000,25\nlarsson9,2584679559,10000,25\nchrispy99,46356928416,10000,25\ngokulnk,23826822277,10000,25\ninsiders,173508168,5800,25\nhowtostartablog,3012470708,800,25\ndandesign86,32562706625,5000,25\nricko66,43462744264,10000,25\nmuhammadsabil,99851557,10000,25\nelliotjgardner,185420483,7500,25\nandyluy,685275185,100,25\nstock84,160054748,10000,25\nasterix87,14081518495,10000,25\ncheech-oz,2622512006,10000,25\nbaracudapakira,552695309,10000,25\njaraumoses,23114106497,10000,25\ndigitalis,18701240939,10000,25\nmakrotheblack,6314395705,10000,25\nbritcoins,1734686877,10000,25\nachlord,664015965,5000,25\noddreality,10419525,1000,25\nkhoon,32532950240,10000,25\nyvonneinoregon,598888530,3500,25\njefflombardo,246299631,3300,25\notom,17597147457,3000,25\nfenola,351524549,10000,25\njaph,2308996189,10000,25\nopc,314715301,7200,25\nhope-on-fire,14858380529,10000,25\nsirdeza,1276287161,8000,25\nartistslatam,554195243,10000,25\newuoso,1046680756,5000,25\nchristianity101,282117657,6800,25\nrarebooksleuth,18141013625,10000,25\nthorthur22,152393651934,10000,25\nsweetcharity705,310240520,10000,25\niykecollins,139526531,10000,25\nmrliga,20775917663,10000,25\ndijital,42551385598,10000,25\ndiana01,658301101,10000,25\ntaylor.swift,268639303,6600,25\nimbritish,177833629,5900,25\nfunnystuff,37706404,500,25\nadal111,766190283,3000,25\nanonimous,262546170,5000,25\nopheliapoe,1991123781,5000,25\ntravelingmercies,1579231250,10000,25\ncombofrenzy,4147069428,10000,25\nsteemcarny86,214451962,10000,25\nunrared,3476447234,500,25\nopenledgerio,346365219,6600,25\ningdirect,395129722,7400,25\ntookta,97564791768,10000,25\nabcbullion,255451038,5100,25\nakhysimpati17,231846228,10000,25\nbeardsandbass,99116025,2500,25\nmonash,280963123,5500,25\nsteem-d-anlovnit,12674585894,2500,25\njrobi,426060394,4000,25\nsteemabuse,274647099,5400,25\nmohammad32,431178965,10000,25\nbahagia-arbi,8015342502,10000,25\nkimzwarch,59451961937,5000,25\nredwood419,20348066612,5000,25\nreekadoh,196054777,10000,25\nnurhayati,426944954,1000,25\nunimelb,384393381,7200,25\nsukro,269162617,10000,25\napasia.tech,1703708632,10000,25\ncalatorulmiop,13635061702,2500,25\nsbdraffle,250416791,5000,25\ndjei.art22,1146781198,10000,25\ndgorbunov,486432132,10000,25\nsawcraz.art,3384055514,10000,25\nryoplasmic,10660536178,10000,25\ngnarlyanimations,188628075,10000,25\nijoelmudisteem,543400844,10000,25\nhillaryaa,1153246194,10000,25\ncipas,616657873,5000,25\nmonita05,1227322219,10000,25\nwalidchabir,1474285984,10000,25\ntakeru255,2034925629,10000,25\nmila00,153226673,10000,25\nkettleandseagull,15884927870,10000,25\nsteembet.asia,485182039,10000,25\nacehnature,1255039340,10000,25\nfirman,1635326867,10000,25\nsyami,386801654,10000,25\ngvand,1792021447,10000,25\nenjieneer,4496673945,10000,25\nmaria.isaaccura,433689282,10000,25\nsynergy-now,14477109532,10000,25\nnoises,510373137,7500,25\nbobtucks,173310526,5000,25\naldoman-75,11415226516,10000,25\nmuchlis7star,554195243,10000,25\ncryptohax,554195243,10000,25\nstevejhuggett,3304335470,1000,25\npuggle,774212577,10000,25\nmrjamesbond,344985096,10000,25\nprinceso,6419676036,5000,25\nbangmimi,275810629,1500,25\nkimchi-king,1236644035,5000,25\nmichaeljpsalazar,1810781907,10000,25\nproudlynigerian,407791442,10000,25\nmichaeljn,12561795467,5000,25\notemzi,27683108740,10000,25\nlearnandteach01,1194342903,10000,25\ncizzo,32015728539,10000,25\nlegendarryll,4473493475,10000,25\nnitro.live,275182620,10000,25\nfknmayhem,25788672863,6000,25\nsuper-em,38265295056,10000,25\nthatphysicsguy,498727872,10000,25\nheyimsnuffles,2243243828,1000,25\nsmartbot,252490934,5900,25\nomstavan,3011857718,10000,25\nsenorcoconut,6668608763,3000,25\nstmtazerbaijan,0,10000,25\nmikemolina1,551763179,10000,25\nmzuami,190997902,10000,25\nyulem,3361655016,10000,25\nhanen,47793228401,10000,25\njury.online,189555636,10000,25\npreciousmettle-x,131569131,2000,25\nj-lee,2312472189,7500,25\nangelicagarcia,2898442174,10000,25\nrozioo,138257627425,10000,25\nhrhmikelength,526345015,10000,25\nberkaytekinsen,1854513790,10000,25\nsteemsecretfiles,552646064,10000,25\narsik306,343850383,10000,25\nmurad06,128929629,2500,25\nlmir1965,360161407,10000,25\ncitizensmith,16268601270,4400,25\nwilerv,175766963,10000,25\nb00m,5372892261,3520,25\nearisu,1245357127,10000,25\npeewills,175301252,5000,25\nacidzapps,1933415610,10000,25\negotheist,12644539952,10000,25\najmaln,8668832516,10000,25\nthehypnotist,2605616009,10000,25\nhealthadvice,252031558,5000,25\nsemfire,252197899,5000,25\ngiemijares,162377028,10000,25\ndanda-daniel,222142971,10000,25\nhandfree42,300787477,10000,25\naqli,589351841,10000,25\nwillsaldeno,8948374811,9800,25\nnikonmarshall,8851650139,10000,25\nbaroen96,6485530665,10000,25\nekonugraha,17392326230,10000,25\nhrhridoy,1840997453,10000,25\nmattniblock,13232881806,10000,25\ntunstuns,420553772,10000,25\ndavidsc,551546038,10000,25\nr00sj3,3430194015,1250,25\ntim3w4rp,2466778572,10000,25\nbaart,12294805811,10000,25\nneexal,175167657,5000,25\npatulrich,1044069626,5000,25\nskaybliss,162419924,5000,25\ncamillius,78044637,1500,25\ndanielalbujas,517601053,10000,25\nsalahudeen,210792730,5500,25\ndrtarts,5873775344,10000,25\nsukiyakii,671703601,10000,25\nhrubikscube,553306020,10000,25\nnot-a-gamer,1333392893,10000,25\npoweruprewards,552943249,10000,25\nakpolopez,313168814,10000,25\neprolific,5742027327,7500,25\nboggan,89790184,3600,25\ntriviastreak,39594147084,10000,25\nsparklez,148456375,10000,25\nsparkosonic,531766659,10000,25\nwomenempowerment,2844180689,2300,25\nfgungen,3065224122,10000,25\nmermaidvampire,12361747948,500,25\npearlkel,538688240,10000,25\nacelad,36129780013,10000,25\nfreerolll,320118662,10000,25\nmotordrive,1269073488,10000,25\nfullcoverbetting,20898089579,2500,25\nomg-is-biology,751804189,10000,25\nvaansteam,148587163919,4000,25\nmatthiasjohn,131524212,10000,25\nlesshorrible,459907331,7000,25\nabuz,542716458,10000,25\ngocho94,521873404,10000,25\npeewillz,296507599,10000,25\nmistakili,5650153298,10000,25\ncomingback,206942386,1200,25\nbishoppeter1,2066131250,8500,25\nshahbazfayyaz,0,1000,25\nheajin,342013212,7500,25\nlemony-cricket,455487497587,10000,25\ngabyrutigliano,517759346,10000,25\nanabell.brett,518299025,10000,25\nlovelyboo,266496696,5000,25\ngreen015,1819159995,10000,25\nfelixgarciap,891542598,2000,25\nevansbankx,324113445,10000,25\nzotopower,367714284,5000,25\nmarcusbraeburn,114388411120,10000,25\nsisygoboom,8434715965,1500,25\ngabrielarondon,416349845,10000,25\nhowtosteem,4544223707,10000,25\nflozockt,209015173,10000,25\nmylka,2411522861,10000,25\njoluco123,1230694028,10000,25\nnaijatimez,223423056,10000,25\nbenleemusic,5092647017,500,25\nmaggy7419,160254136,10000,25\nbozz,3557717673,1000,25\nakpos,10512915125,8000,25\nkeepingtarotreal,538922789,10000,25\nwhack.science,80067611620,10000,25\njdarkmaxter,540904520,10000,25\njasonwaterfalls,119204109,3960,25\njagoe,2951589442,1200,25\npolashsen,513532835,10000,25\nbtccurrency1,64514830,10000,25\nerikklok,14406894579,10000,25\nphilanthropic,554396212,10000,25\nfaglerabbi,550752341,10000,25\npr0t0type98,49862036,2500,25\ndarkikal,235581834,10000,25\nbackinblackdevil,68116807582,1000,25\nvargart,3136286111,5000,25\njvpengine,250687527,5000,25\njhaveapostol,391500222,10000,25\ninedido,1285442014,10000,25\nsupreme7,244093246,5000,25\nwisejg,3171465086,10000,25\nbulent1976,283331032,2200,25\nlionsuit,10510717535,5000,25\nomoyiwolabusayo,345543822,2500,25\nshela,160022184,5000,25\nalexsteemiter,275858422,10000,25\nbelaviel,3466863514,10000,25\nandimywapblog14,210919388,10000,25\naniesta,243536348,5000,25\njombu,386211176,10000,25\nandrenavarro,542447066,10000,25\nnellyperez,469644039,10000,25\njvhteach,4618466842,10000,25\nalakadar,421197922,7800,25\nvirgo27,964055668,10000,25\nask2lance,222797381,10000,25\nbit6in,529698197,10000,25\nbharathi22,6548161416,10000,25\nvaderetro,6718839433,10000,25\nwolfhart,84493335771,5000,25\nlucious,24628819904,10000,25\nbookoons,4520412098,10000,25\ntiket,2168047963,5000,25\nbnn,70655565,2000,25\nmemeload,252097622,5000,25\nayoade96,196074545,10000,25\nsholi,4897482932,8000,25\nxymaros,551615138,10000,25\nlugi,545635810,10000,25\nyo-yo,32809210907,3000,25\nluiscalzadilla,3550815995,10000,25\nonuvaldis,25018939,10000,25\nsteem-factuals,168771023,5000,25\nruyi,553082720,10000,25\nadigleh,554195243,10000,25\ngametrailerflash,535299610,10000,25\naghmat,205133376,5000,25\nrueblikuchen,500107966,10000,25\nchuks0chuks,143765190,10000,25\nwealth4good,364148445,700,25\ncapnsostre,754966703,10000,25\nrj1,384361182,10000,25\nmarianelamendoza,516904089,10000,25\nyandakuala,0,200,25\njustinzidi3,541809380,10000,25\nlucy-smith,331160393,10000,25\nnldv1122,97596389,2125,25\nsteemitkidsworld,20528903568,10000,25\nlemcriq,1072571654,10000,25\ndarkline,527896142,100,25\nkaylatruett,144002626,2250,25\nvampirgarfield,176101452,10000,25\nserialfiller,38888272484,6500,25\ndiabonua,25830277726,10000,25\nkhalilputra,333117541,10000,25\nnikkojimenez,528305696,10000,25\ndanbiohackingman,3609070818,10000,25\nmelaniesaray,1202132228,5000,25\nmcquine,790832665,5000,25\ndeus-vult,313268523,10000,25\nspamfarmer,673061594,3520,25\nmaxofp2p,318397297,10000,25\nsanne,195551711,10000,25\nagoha,166895085,5000,25\nmasudurrahman,388106670,10000,25\ninsaneworks,22362149639,5000,25\naroraproject,552326068,10000,25\nhakan1988,402804615,10000,25\nehisokoedion,383466345,10000,25\nrainieraveradio,26715181301,10000,25\nibook-ishare,445509985,10000,25\nkrbecrypto,99007918,2500,25\nbot.vote,552782295,10000,25\ntutchpa,168231604,10000,25\nzephyr119,198446144,5000,25\ndevitech,412009629,10000,25\nsupremacy126,368057731,10000,25\nelmisra,542595159,10000,25\ntoyinbaruba,70271534,2000,25\nmilayosawa,1058613074,10000,25\nvotoloko,551804677,10000,25\nanakrimba,441418486,10000,25\nsirteamsteemit,3753140004,10000,25\nlmahda70,542751512,10000,25\nismazahara,545644202,10000,25\nsunnya,488948614,10000,25\ncryptodivision,543844147,10000,25\naparanoide,511247592,10000,25\nfotostef,29263832629,10000,25\nvampire-steem,157691025,10000,25\nfitat40,16489484152,1000,25\ndavidric,534461767,10000,25\nbawativi,249443064,5000,25\nfajriyahnur421,543264703,10000,25\nblewitt,44311783063,1000,25\nsapridelima,545539084,10000,25\nfoysalahmmed,509917578,10000,25\nprojectmaia,469303100,10000,25\nklabboy,547070749,10000,25\nfuckmesilly,551803232,10000,25\nnurily,488967202,10000,25\nabcor,119744211,8,25\nlivingstone9,381534210,10000,25\nweblift,553882006,10000,25\nenormeanimal,2152702758,10000,25\ncarita-feliz,529583328,10000,25\nsakibhossain,543314771,10000,25\nannasilvia,248766301,5000,25\nkiwitravels,554275428,10000,25\ngenesiissrc,549900264,10000,25\nverendra,553061156,10000,25\nzephyrepic,565807870,10000,25\nchrome.citizen,377059644,10000,25\nsteinz,1382939383,10000,25\nminnowboostere,176814514,10000,25\nmrandreas,202894981,5000,25\nyestermorrow,1912156843,500,25\nxybb,532256137,10000,25\ndpoll.economy,193225417,10000,25\npoppypyro,72143154,10000,25\nmrbigglesworth1,251683453,5000,25\nla-a,252026394,5000,25\nsingingintherain,251541360,5000,25\nbyebyebirdie,242138623,5000,25\nsignus,544232243,10000,25\ncolt45-2zigzags,251774382,5000,25\narrr,6501514760,10000,25\ngpcx86,126771779,200,25\nrobinhoodupme,119431726,800,25\nkokeshlover,252097622,5000,25\nsupernaturallove,251963134,5000,25\naurorious,252023265,5000,25\noutsidemydoor,251984502,5000,25\nfriskykitty,199389432,5000,25\nmomstermania,251621820,5000,25\ncraniumgames,252035740,5000,25\nclyde.ericson,249597665,5000,25\nmiaapado03,408045189,10000,25\nsteem-oon,436916475,10000,25\ntjessie,386407883,10000,25\napujoy,252097622,5000,25\narcaniuss,156978632,10000,25\ncollinstochukwu,194438105,10000,25\nmaybedog,3996064176,10000,25\nfaady92,1213893449,10000,25\npangahg,1231788916,10000,25\nkhairi95,553024130,10000,25\nindianapatt,1857433984,10000,25\nfaza13,209195258,10000,25\nparradoks,565296648,10000,25\nphoenix.rising,70363069,10000,25\ndream77124,250271265,5000,25\nocundhatfa,532871947,10000,25\nhydquihaipie,510136325,10000,25\nnieloagranca,1175020456,800,25\ndianation,435198091,10000,25\nnatltreasury,716340801,10000,25\njidgabol,118442424,10000,25\ngoodnuel,425919529,10000,25\ncryptouno,264940926,300,25\nkikiwiis,519471771,10000,25\nsoyronaldo,519638496,10000,25\nescfrancis,909508741,10000,25\nnsikakntia,252231977,5000,25\njoygalz,495382085,10000,25\nedgmanyerber,551413588,10000,25\njokinmenipieleen,1277092263,10000,25\nhibashah1992,521717990,10000,25\nmargaretred,550839184,10000,25\nshepherd-stories,1511647172,10000,25\nsteembullet,804516311,10000,25\npedrocanella,53597091580,8000,25\nhongman96,379951305,10000,25\nasforex,380011237,10000,25\nchike4545,118272245,10000,25\nandresdbrito,539822244,10000,25\nemma-hs,2623656987,10000,25\ndigital-jesus,465444387,10000,25\nadigun12,373295564,10000,25\ntwotoedsloth,38644308098,10000,25\nupvoteshares,10734118350,800,25\nhaley4k,531384473,10000,25\ncryptocrib,435970037,10000,25\nfaithmso0b,498630871,10000,25\ndurchmanfaimet,530059179,10000,25\nalqudsid,365057818,10000,25\nmdsohagm752,379040640,10000,25\nebakuglobal,181362506,10000,25\npraserr,251607939,5000,25\npeleafabmold,510230607,10000,25\nroringeotur,520801486,10000,25\ntabontbiho,510579526,10000,25\nharaterla1989,519774231,10000,25\nboykeren,75140629,10000,25\ncryptomythic,346239780,10000,25\ngozben24,384622645,10000,25\ndeepaks1996,374629287,10000,25\nhernaryruiz,519489027,10000,25\nrebe2015,540449724,10000,25\nallinoncrypto,102986593,1875,25\nsparkling1,456937347,10000,25\nguard-of-gamers,551371493,10000,25\nalina82,546791532,10000,25\nrajeshdas666,479064751,10000,25\ntopbuzzer,454852613,10000,25\nqilin,184068560,10000,25\nfahim.shahriar,517721822,10000,25\nsagors,71509783,5000,25\nolatunjipaul,79059039,10000,25\nmacanselm,215829404,10000,25\ntheodosiskatq,60251626,5000,25\nvotum,13930599254,2000,25\ndessyhodin97,257696189,10000,25\nask4peace,71538531,10000,25\ntwoshyguys,477732463,2125,25\nsameguy123,543469905,10000,25\ndarekem,83379701,10000,25\nyeiverlin,275817299,3000,25\ndubb,0,500,25\nmichealb,78222811255,300,25\npowermax2,547355345,10000,25\nngockim,160726061,10000,25\nthemightysquid,17131923020,10000,25\njoecoolup,541355171,10000,25\nsteemitbuzz,0,100,25\nfantasyleague,129842174601,9900,25\nbizzniche,323782583,10000,25\nwilliamdiaaaz,553855334,10000,25\nshyant,6884504022,10000,25\nomegaultra,554195243,10000,25\nswiftbot,2165797713,5000,25\npamahdoo,0,600,25\ncarrycarrie,640647899,10000,25\nhoneygirl,464724965,10000,25\nlyannanatura,721184476,10000,25\nscoopstakes,17133332236,1000,25\nnanzo-snaps,32021303399,1000,25\nbharatgar8511,538673583,10000,25\nocdbfund,44527305203,10000,25\nfirststrike,4674456135,10000,25\nsm-navidad,742297260,10000,25\ndfacademy,22697408790,10000,25\nyoyo-jp,24510986750,10000,25\nnatasng,551955696,10000,25\nsadheaven,9465701519,10000,25\nwizzycats,2982976229,10000,25\nbitcoinator,14338458552,3000,25\nboby400,0,10000,25\nlimitlesschuks,186556160,10000,25\ngetfood,1660089034,10000,25\nlynched,41063000,10000,25\ncuratorhulk,1739322759122,1100,25\nactifit-devil,212608495,5000,25\nrender-obsolete,11763077231,10000,25\nrashedul2018,530801555,10000,25\nhooliganstv,1645711227,10000,25",
      "json": "{\"tags\":[\"steem\",\"fantasy\",\"football\",\"premierleague\",\"fpl\"],\"users\":[\"carita-feliz\",\"blocktrades\"],\"image\":[\"https:\\/\\/steemitimages.com\\/640x0\\/https:\\/\\/cdn.steemitimages.com\\/DQmaKw63HBMpvG9vQbBQ7TyWEUuY9xtPtMbgLMub4ap6LV6\\/image.png\"],\"links\":[\"https:\\/\\/widget.blocktrades.us?affiliate_id=4f41884c-b15c-444d-b7a2-d5b2b5da1a0a\"],\"app\":\"steemit\\/0.1\",\"format\":\"markdown\"}",
      "raw_json": "{\"id\":71141560,\"parent_author\":\"\",\"parent_permlink\":\"steem\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
      "replies": [{
        "post_id": 71125183,
        "author": "sadheaven",
        "permlink": "re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t020133211z",
        "category": "steem",
        "depth": 1,
        "children": 0,
        "author_rep": 57.09,
        "flag_weight": 0,
        "total_votes": 0,
        "up_votes": 0,
        "title": "",
        "preview": "Hi Acidyo! \n\nHonestly, these global changes in coaches create intrigue, Manchester made a good statement about himself in the last match with PSG, I did not expect that everything would be so extravagant if you were honest, although what can I say, after Ajax crushed Real Madrid, I’m not surprised at anything . I have been a Juve  fan for 18 years, and to be honest, I believe that they will be able to give an adequate response to Atletico in the next match, in any case, I am for beautiful, honest football, and the outcome of the Champions League matches is completely unpredictable!\n\nThere are also a lot of intrigues in the Premier League, and this is very good!\n\nI live in Russia, in the South, near Krasnodar, and I am going to the match Krasnodar - Vlensiya which will take place on March 14, I hope to see a decent game, and I think I will tell about the match, about the stadium mood and about the game as a whole.\n\nHug.",
        "img_url": "",
        "payout": "0.000",
        "promoted": "0.000",
        "created_at": "2019-03-09T01:02:03.000Z",
        "payout_at": "2019-03-16T01:02:03.000Z",
        "updated_at": "2019-03-09T01:11:33.000Z",
        "is_paidout": false,
        "is_nsfw": false,
        "is_declined": false,
        "is_full_power": false,
        "is_hidden": false,
        "is_grayed": false,
        "rshares": "0",
        "sc_trend": 3233.54,
        "sc_hot": 155210,
        "body": "Hi Acidyo! <br />Honestly, these global changes in coaches create intrigue, Manchester made a good statement about himself in the last match with PSG, I did not expect that everything would be so extravagant if you were honest, although what can I say, after Ajax crushed Real Madrid, I’m not surprised at anything . I have been a Juve  fan for 18 years, and to be honest, I believe that they will be able to give an adequate response to Atletico in the next match, in any case, I am for beautiful, honest football, and the outcome of the Champions League matches is completely unpredictable!<br />There are also a lot of intrigues in the Premier League, and this is very good!<br />I live in Russia, in the South, near Krasnodar, and I am going to the match Krasnodar - Vlensiya which will take place on March 14, I hope to see a decent game, and I think I will tell about the match, about the stadium mood and about the game as a whole.<br />Hug.<br />",
        "votes": "",
        "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
        "raw_json": "{\"id\":71145862,\"parent_author\":\"acidyo\",\"parent_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@sadheaven\\/re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t020133211z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
        "replies": [],
        "id": 71125183,
        "unix": 1552093323,
        "date": "6 days ago",
        "reputation": 57.09,
        "total_payout": 0,
        "active_votes": [],
        "upvotes": 0
      }, {
        "post_id": 71123146,
        "author": "amosbastian",
        "permlink": "re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003341761z",
        "category": "steem",
        "depth": 1,
        "children": 3,
        "author_rep": 71.36,
        "flag_weight": 0,
        "total_votes": 3,
        "up_votes": 3,
        "title": "",
        "preview": "This is a preview of the previous week, and so everything touched on in this post has already happened (gameweek 30 starts tomorrow). Am I missing something?\n\n>Liverpool faces Everton.The Reds seem to be on a great run and Trent Alexander Arnold is back from injury. \n\nI'm biased, but this isn't true at all. They had a 7 point lead, and now they are 2nd (which makes me happy, as Man City is the lesser of two evils) - I would definitely not describe that as \"being on a great run\"!",
        "img_url": "",
        "payout": "0.004",
        "promoted": "0.000",
        "created_at": "2019-03-08T23:33:42.000Z",
        "payout_at": "2019-03-15T23:33:42.000Z",
        "updated_at": "2019-03-08T23:37:54.000Z",
        "is_paidout": false,
        "is_nsfw": false,
        "is_declined": false,
        "is_full_power": false,
        "is_hidden": false,
        "is_grayed": false,
        "rshares": "6558115649",
        "sc_trend": 3236.34,
        "sc_hot": 155212,
        "body": "This is a preview of the previous week, and so everything touched on in this post has already happened (gameweek 30 starts tomorrow). Am I missing something?<br /><br />Liverpool faces Everton.The Reds seem to be on a great run and Trent Alexander Arnold is back from injury. <br /><br />I'm biased, but this isn't true at all. They had a 7 point lead, and now they are 2nd (which makes me happy, as Man City is the lesser of two evils) - I would definitely not describe that as \"being on a great run\"!<br />",
        "votes": "shammi,376577155,700,25\nsteemtaker,6110746314,600,25\noscarliam,70792180,10000,25",
        "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
        "raw_json": "{\"id\":71143823,\"parent_author\":\"acidyo\",\"parent_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@amosbastian\\/re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003341761z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
        "replies": [{
          "post_id": 71123185,
          "author": "acidyo",
          "permlink": "re-amosbastian-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003555117z",
          "category": "steem",
          "depth": 2,
          "children": 2,
          "author_rep": 78.49,
          "flag_weight": 0,
          "total_votes": 0,
          "up_votes": 0,
          "title": "",
          "preview": "Oh, I must've copied the wrong one, thanks for letting me know!",
          "img_url": "",
          "payout": "0.000",
          "promoted": "0.000",
          "created_at": "2019-03-08T23:35:57.000Z",
          "payout_at": "2019-03-15T23:35:57.000Z",
          "updated_at": "2019-03-08T23:35:57.000Z",
          "is_paidout": false,
          "is_nsfw": false,
          "is_declined": false,
          "is_full_power": true,
          "is_hidden": false,
          "is_grayed": false,
          "rshares": "0",
          "sc_trend": 3233.52,
          "sc_hot": 155209,
          "body": "Oh, I must've copied the wrong one, thanks for letting me know!<br />",
          "votes": "",
          "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
          "raw_json": "{\"id\":71143862,\"parent_author\":\"amosbastian\",\"parent_permlink\":\"re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003341761z\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":0,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@acidyo\\/re-amosbastian-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003555117z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
          "replies": [{
            "post_id": 71123263,
            "author": "amosbastian",
            "permlink": "re-acidyo-re-amosbastian-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003853285z",
            "category": "steem",
            "depth": 3,
            "children": 1,
            "author_rep": 71.36,
            "flag_weight": 0,
            "total_votes": 5,
            "up_votes": 5,
            "title": "",
            "preview": "I was hoping I travelled back in time and could actually captain the correct player this time. :(",
            "img_url": "",
            "payout": "0.491",
            "promoted": "0.000",
            "created_at": "2019-03-08T23:38:54.000Z",
            "payout_at": "2019-03-15T23:38:54.000Z",
            "updated_at": "2019-03-08T23:38:54.000Z",
            "is_paidout": false,
            "is_nsfw": false,
            "is_declined": false,
            "is_full_power": false,
            "is_hidden": false,
            "is_grayed": false,
            "rshares": "770072165640",
            "sc_trend": 3238.41,
            "sc_hot": 155214,
            "body": "I was hoping I travelled back in time and could actually captain the correct player this time. :(<br />",
            "votes": "acidyo,763043813609,1000,25\nelviento,477593293,86,25\nshammi,376325754,700,25\nsteemtaker,6107987974,600,25\noscarliam,66445010,10000,25",
            "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
            "raw_json": "{\"id\":71143940,\"parent_author\":\"acidyo\",\"parent_permlink\":\"re-amosbastian-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003555117z\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@amosbastian\\/re-acidyo-re-amosbastian-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t003853285z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
            "replies": [],
            "id": 71123263,
            "parent_id": 71123185,
            "unix": 1552088334,
            "date": "6 days ago",
            "reputation": 71.36,
            "total_payout": 0.49,
            "active_votes": [{
              "voter": "acidyo",
              "rshares": "763043813609",
              "percent": "1000",
              "value": 0.48
            }, {
              "voter": "elviento",
              "rshares": "477593293",
              "percent": "86",
              "value": 0
            }, {
              "voter": "shammi",
              "rshares": "376325754",
              "percent": "700",
              "value": 0
            }, {
              "voter": "steemtaker",
              "rshares": "6107987974",
              "percent": "600",
              "value": 0
            }, {
              "voter": "oscarliam",
              "rshares": "66445010",
              "percent": "10000",
              "value": 0
            }],
            "upvotes": 5
          }],
          "id": 71123185,
          "parent_id": 71123146,
          "unix": 1552088157,
          "date": "6 days ago",
          "reputation": 78.49,
          "total_payout": 0,
          "active_votes": [],
          "upvotes": 0
        }],
        "id": 71123146,
        "unix": 1552088022,
        "date": "6 days ago",
        "reputation": 71.36,
        "total_payout": 0,
        "active_votes": [{
          "voter": "shammi",
          "rshares": "376577155",
          "percent": "700",
          "value": 0
        }, {
          "voter": "steemtaker",
          "rshares": "6110746314",
          "percent": "600",
          "value": 0
        }, {
          "voter": "oscarliam",
          "rshares": "70792180",
          "percent": "10000",
          "value": 0
        }],
        "upvotes": 3
      }, {
        "post_id": 71121989,
        "author": "abh12345",
        "permlink": "re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t234325160z",
        "category": "steem",
        "depth": 1,
        "children": 2,
        "author_rep": 72.93,
        "flag_weight": 0,
        "total_votes": 1,
        "up_votes": 1,
        "title": "",
        "preview": "> With all their injuries United managed to get a draw against Liverpool though.\n# \nAnd an unbelievable win at PSG!\n\nHappy the reds are performing much better than my dreamteam!",
        "img_url": "",
        "payout": "0.257",
        "promoted": "0.000",
        "created_at": "2019-03-08T22:43:24.000Z",
        "payout_at": "2019-03-15T22:43:24.000Z",
        "updated_at": "2019-03-08T22:43:24.000Z",
        "is_paidout": false,
        "is_nsfw": false,
        "is_declined": false,
        "is_full_power": true,
        "is_hidden": false,
        "is_grayed": false,
        "rshares": "402866178266",
        "sc_trend": 3238.12,
        "sc_hot": 155213,
        "body": "<br />With all their injuries United managed to get a draw against Liverpool though.<br /><br />And an unbelievable win at PSG!<br /><br />Happy the reds are performing much better than my dreamteam!<br />",
        "votes": "acidyo,402866178266,500,25",
        "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
        "raw_json": "{\"id\":71142662,\"parent_author\":\"acidyo\",\"parent_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":0,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@abh12345\\/re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t234325160z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
        "replies": [{
          "post_id": 71122951,
          "author": "amosbastian",
          "permlink": "re-abh12345-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t002447873z",
          "category": "steem",
          "depth": 2,
          "children": 1,
          "author_rep": 71.41,
          "flag_weight": 0,
          "total_votes": 4,
          "up_votes": 4,
          "title": "",
          "preview": "Arsenal is next in line!",
          "img_url": "",
          "payout": "0.004",
          "promoted": "0.000",
          "created_at": "2019-03-08T23:24:48.000Z",
          "payout_at": "2019-03-15T23:24:48.000Z",
          "updated_at": "2019-03-08T23:24:48.000Z",
          "is_paidout": false,
          "is_nsfw": false,
          "is_declined": false,
          "is_full_power": false,
          "is_hidden": false,
          "is_grayed": false,
          "rshares": "7044699554",
          "sc_trend": 3236.37,
          "sc_hot": 155212,
          "body": "Arsenal is next in line!<br />",
          "votes": "elviento,482745055,87,25\nshammi,376593690,700,25\nsteemtaker,6110356186,600,25\noscarliam,75004623,10000,25",
          "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
          "raw_json": "{\"id\":71143628,\"parent_author\":\"abh12345\",\"parent_permlink\":\"re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t234325160z\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@amosbastian\\/re-abh12345-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t002447873z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
          "replies": [{
            "post_id": 71123621,
            "author": "abh12345",
            "permlink": "re-amosbastian-re-abh12345-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t005351782z",
            "category": "steem",
            "depth": 3,
            "children": 0,
            "author_rep": 72.93,
            "flag_weight": 0,
            "total_votes": 0,
            "up_votes": 0,
            "title": "",
            "preview": "Ole has been hired today? So probably a loss then!",
            "img_url": "",
            "payout": "0.000",
            "promoted": "0.000",
            "created_at": "2019-03-08T23:53:51.000Z",
            "payout_at": "2019-03-15T23:53:51.000Z",
            "updated_at": "2019-03-08T23:53:51.000Z",
            "is_paidout": false,
            "is_nsfw": false,
            "is_declined": false,
            "is_full_power": true,
            "is_hidden": false,
            "is_grayed": false,
            "rshares": "0",
            "sc_trend": 3233.53,
            "sc_hot": 155209,
            "body": "Ole has been hired today? So probably a loss then!<br />",
            "votes": "",
            "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
            "raw_json": "{\"id\":71144298,\"parent_author\":\"amosbastian\",\"parent_permlink\":\"re-abh12345-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t002447873z\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":0,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@abh12345\\/re-amosbastian-re-abh12345-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t005351782z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
            "replies": [],
            "id": 71123621,
            "parent_id": 71122951,
            "unix": 1552089231,
            "date": "6 days ago",
            "reputation": 72.93,
            "total_payout": 0,
            "active_votes": [],
            "upvotes": 0
          }],
          "id": 71122951,
          "parent_id": 71121989,
          "unix": 1552087488,
          "date": "6 days ago",
          "reputation": 71.41,
          "total_payout": 0,
          "active_votes": [{
            "voter": "elviento",
            "rshares": "482745055",
            "percent": "87",
            "value": 0
          }, {
            "voter": "shammi",
            "rshares": "376593690",
            "percent": "700",
            "value": 0
          }, {
            "voter": "steemtaker",
            "rshares": "6110356186",
            "percent": "600",
            "value": 0
          }, {
            "voter": "oscarliam",
            "rshares": "75004623",
            "percent": "10000",
            "value": 0
          }],
          "upvotes": 4
        }],
        "id": 71121989,
        "unix": 1552085004,
        "date": "6 days ago",
        "reputation": 72.93,
        "total_payout": 0.25,
        "active_votes": [{
          "voter": "acidyo",
          "rshares": "402866178266",
          "percent": "500",
          "value": 0.25
        }],
        "upvotes": 1
      }, {
        "post_id": 71121712,
        "author": "donnest",
        "permlink": "re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t232715200z",
        "category": "steem",
        "depth": 1,
        "children": 1,
        "author_rep": 56.99,
        "flag_weight": 0,
        "total_votes": 1,
        "up_votes": 1,
        "title": "",
        "preview": "So much ongoing in the EPL. The drama makes it the best. Good review @acidyo\n\nI think Liverpool will give away the title again, they are misbehaving again.",
        "img_url": "",
        "payout": "0.256",
        "promoted": "0.000",
        "created_at": "2019-03-08T22:27:18.000Z",
        "payout_at": "2019-03-15T22:27:18.000Z",
        "updated_at": "2019-03-08T22:27:18.000Z",
        "is_paidout": false,
        "is_nsfw": false,
        "is_declined": false,
        "is_full_power": false,
        "is_hidden": false,
        "is_grayed": false,
        "rshares": "402483100337",
        "sc_trend": 3238.12,
        "sc_hot": 155213,
        "body": "So much ongoing in the EPL. The drama makes it the best. Good review <a href=\"https://steemit.com/@acidyo\">@acidyo</a><br />I think Liverpool will give away the title again, they are misbehaving again.<br />",
        "votes": "acidyo,402483100337,500,25",
        "json": "{\"tags\":[\"steem\"],\"users\":[\"acidyo\"],\"app\":\"steemit\\/0.1\"}",
        "raw_json": "{\"id\":71142385,\"parent_author\":\"acidyo\",\"parent_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":10000,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@donnest\\/re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t232715200z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
        "replies": [{
          "post_id": 71122758,
          "author": "acidyo",
          "permlink": "re-donnest-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t001709456z",
          "category": "steem",
          "depth": 2,
          "children": 0,
          "author_rep": 78.52,
          "flag_weight": 0,
          "total_votes": 1,
          "up_votes": 1,
          "title": "",
          "preview": "I did not write it myself, but it was good indeed! :) \n\nYeah they usually do. xD",
          "img_url": "",
          "payout": "0.029",
          "promoted": "0.000",
          "created_at": "2019-03-08T23:17:12.000Z",
          "payout_at": "2019-03-15T23:17:12.000Z",
          "updated_at": "2019-03-08T23:17:12.000Z",
          "is_paidout": false,
          "is_nsfw": false,
          "is_declined": false,
          "is_full_power": true,
          "is_hidden": false,
          "is_grayed": false,
          "rshares": "37879151822",
          "sc_trend": 3237.1,
          "sc_hot": 155213,
          "body": "I did not write it myself, but it was good indeed! :) <br />Yeah they usually do. xD<br />",
          "votes": "ocdbfund,37879151822,10000,25",
          "json": "{\"tags\":[\"steem\"],\"app\":\"steemit\\/0.1\"}",
          "raw_json": "{\"id\":71143435,\"parent_author\":\"donnest\",\"parent_permlink\":\"re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190308t232715200z\",\"curator_payout_value\":\"0.000 SBD\",\"root_author\":\"acidyo\",\"root_permlink\":\"5gpzbm-steem-fantasy-premier-league-gameweek-29-review\",\"max_accepted_payout\":\"1000000.000 SBD\",\"percent_steem_dollars\":0,\"allow_replies\":true,\"allow_votes\":true,\"allow_curation_rewards\":true,\"beneficiaries\":[],\"url\":\"\\/steem\\/@acidyo\\/5gpzbm-steem-fantasy-premier-league-gameweek-29-review#@acidyo\\/re-donnest-re-acidyo-5gpzbm-steem-fantasy-premier-league-gameweek-29-review-20190309t001709456z\",\"root_title\":\"Steem Fantasy Premier League - Gameweek 29 Review\"}",
          "replies": [],
          "id": 71122758,
          "parent_id": 71121712,
          "unix": 1552087032,
          "date": "6 days ago",
          "reputation": 78.52,
          "total_payout": 0.02,
          "active_votes": [{
            "voter": "ocdbfund",
            "rshares": "37879151822",
            "percent": "10000",
            "value": 0.01
          }],
          "upvotes": 1
        }],
        "id": 71121712,
        "unix": 1552084038,
        "date": "6 days ago",
        "reputation": 56.99,
        "total_payout": 0.25,
        "active_votes": [{
          "voter": "acidyo",
          "rshares": "402483100337",
          "percent": "500",
          "value": 0.25
        }],
        "upvotes": 1
      }],
      "unix": 1552081785,
      "date": "6 days ago",
      "reputation": 78.52,
      "total_payout": 82.83,
      "active_votes": [{
        "voter": "blocktrades",
        "rshares": "85219795613035",
        "percent": "10000",
        "value": 65.67
      }, {
        "voter": "acidyo",
        "rshares": "8114972168434",
        "percent": "10000",
        "value": 6.25
      }, {
        "voter": "curatorhulk",
        "rshares": "1739322759122",
        "percent": "1100",
        "value": 1.34
      }, {
        "voter": "stephenkendal",
        "rshares": "1442105819178",
        "percent": "10000",
        "value": 1.11
      }, {
        "voter": "jphamer1",
        "rshares": "1436852072703",
        "percent": "10000",
        "value": 1.1
      }, {
        "voter": "ripperone",
        "rshares": "1401260864903",
        "percent": "2800",
        "value": 1.07
      }, {
        "voter": "kevinwong",
        "rshares": "815022515602",
        "percent": "1000",
        "value": 0.62
      }, {
        "voter": "meesterboom",
        "rshares": "575423239940",
        "percent": "4400",
        "value": 0.44
      }, {
        "voter": "nanzo-scoop",
        "rshares": "512190728473",
        "percent": "1000",
        "value": 0.39
      }, {
        "voter": "tombstone",
        "rshares": "483834999709",
        "percent": "200",
        "value": 0.37
      }, {
        "voter": "lemony-cricket",
        "rshares": "455487497587",
        "percent": "10000",
        "value": 0.35
      }, {
        "voter": "abh12345",
        "rshares": "310646328522",
        "percent": "5000",
        "value": 0.23
      }, {
        "voter": "t-bot",
        "rshares": "293512149532",
        "percent": "1000",
        "value": 0.22
      }, {
        "voter": "jaybird",
        "rshares": "257287203963",
        "percent": "10000",
        "value": 0.19
      }, {
        "voter": "herverisson",
        "rshares": "244676865625",
        "percent": "10000",
        "value": 0.18
      }, {
        "voter": "anomadsoul",
        "rshares": "149272559869",
        "percent": "10000",
        "value": 0.11
      }, {
        "voter": "thorthur22",
        "rshares": "152393651934",
        "percent": "10000",
        "value": 0.11
      }, {
        "voter": "vaansteam",
        "rshares": "148587163919",
        "percent": "4000",
        "value": 0.11
      }, {
        "voter": "rozioo",
        "rshares": "138257627425",
        "percent": "10000",
        "value": 0.1
      }, {
        "voter": "fantasyleague",
        "rshares": "129842174601",
        "percent": "9900",
        "value": 0.1
      }, {
        "voter": "playfulfoodie",
        "rshares": "114188316191",
        "percent": "4000",
        "value": 0.08
      }, {
        "voter": "world5list",
        "rshares": "115352149025",
        "percent": "10000",
        "value": 0.08
      }, {
        "voter": "marcusbraeburn",
        "rshares": "114388411120",
        "percent": "10000",
        "value": 0.08
      }, {
        "voter": "ace108",
        "rshares": "92056141830",
        "percent": "600",
        "value": 0.07
      }, {
        "voter": "tookta",
        "rshares": "97564791768",
        "percent": "10000",
        "value": 0.07
      }, {
        "voter": "whack.science",
        "rshares": "80067611620",
        "percent": "10000",
        "value": 0.06
      }, {
        "voter": "wolfhart",
        "rshares": "84493335771",
        "percent": "5000",
        "value": 0.06
      }, {
        "voter": "michealb",
        "rshares": "78222811255",
        "percent": "300",
        "value": 0.06
      }, {
        "voter": "oendertuerk",
        "rshares": "73783321920",
        "percent": "2500",
        "value": 0.05
      }, {
        "voter": "backinblackdevil",
        "rshares": "68116807582",
        "percent": "1000",
        "value": 0.05
      }, {
        "voter": "elteamgordo",
        "rshares": "55114696844",
        "percent": "7500",
        "value": 0.04
      }, {
        "voter": "kimzwarch",
        "rshares": "59451961937",
        "percent": "5000",
        "value": 0.04
      }, {
        "voter": "pedrocanella",
        "rshares": "53597091580",
        "percent": "8000",
        "value": 0.04
      }, {
        "voter": "arcange",
        "rshares": "40538487520",
        "percent": "400",
        "value": 0.03
      }, {
        "voter": "azizbd",
        "rshares": "41213141601",
        "percent": "2300",
        "value": 0.03
      }, {
        "voter": "patrickulrich",
        "rshares": "42040488470",
        "percent": "2500",
        "value": 0.03
      }, {
        "voter": "aksinya",
        "rshares": "50658981855",
        "percent": "5000",
        "value": 0.03
      }, {
        "voter": "voronoi",
        "rshares": "49889856395",
        "percent": "5000",
        "value": 0.03
      }, {
        "voter": "chrispy99",
        "rshares": "46356928416",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "ricko66",
        "rshares": "43462744264",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "dijital",
        "rshares": "42551385598",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "hanen",
        "rshares": "47793228401",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "triviastreak",
        "rshares": "39594147084",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "blewitt",
        "rshares": "44311783063",
        "percent": "1000",
        "value": 0.03
      }, {
        "voter": "ocdbfund",
        "rshares": "44527305203",
        "percent": "10000",
        "value": 0.03
      }, {
        "voter": "necio",
        "rshares": "36475731695",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "schoolforsdg4",
        "rshares": "27042964359",
        "percent": "2300",
        "value": 0.02
      }, {
        "voter": "dandesign86",
        "rshares": "32562706625",
        "percent": "5000",
        "value": 0.02
      }, {
        "voter": "khoon",
        "rshares": "32532950240",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "otemzi",
        "rshares": "27683108740",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "cizzo",
        "rshares": "32015728539",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "super-em",
        "rshares": "38265295056",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "acelad",
        "rshares": "36129780013",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "yo-yo",
        "rshares": "32809210907",
        "percent": "3000",
        "value": 0.02
      }, {
        "voter": "serialfiller",
        "rshares": "38888272484",
        "percent": "6500",
        "value": 0.02
      }, {
        "voter": "rainieraveradio",
        "rshares": "26715181301",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "fotostef",
        "rshares": "29263832629",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "twotoedsloth",
        "rshares": "38644308098",
        "percent": "10000",
        "value": 0.02
      }, {
        "voter": "nanzo-snaps",
        "rshares": "32021303399",
        "percent": "1000",
        "value": 0.02
      }, {
        "voter": "ola-haukland",
        "rshares": "24327802604",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "gikitiki",
        "rshares": "19017019376",
        "percent": "5000",
        "value": 0.01
      }, {
        "voter": "wakeupworldnews",
        "rshares": "21173143790",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "apsu",
        "rshares": "14655135240",
        "percent": "5000",
        "value": 0.01
      }, {
        "voter": "erikaflynn",
        "rshares": "22417299960",
        "percent": "5000",
        "value": 0.01
      }, {
        "voter": "kingofdew",
        "rshares": "18213800730",
        "percent": "4000",
        "value": 0.01
      }, {
        "voter": "ijoel",
        "rshares": "14240008141",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "freethink",
        "rshares": "23278422155",
        "percent": "8100",
        "value": 0.01
      }, {
        "voter": "gokulnk",
        "rshares": "23826822277",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "asterix87",
        "rshares": "14081518495",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "jaraumoses",
        "rshares": "23114106497",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "digitalis",
        "rshares": "18701240939",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "otom",
        "rshares": "17597147457",
        "percent": "3000",
        "value": 0.01
      }, {
        "voter": "hope-on-fire",
        "rshares": "14858380529",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "rarebooksleuth",
        "rshares": "18141013625",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "mrliga",
        "rshares": "20775917663",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "redwood419",
        "rshares": "20348066612",
        "percent": "5000",
        "value": 0.01
      }, {
        "voter": "calatorulmiop",
        "rshares": "13635061702",
        "percent": "2500",
        "value": 0.01
      }, {
        "voter": "kettleandseagull",
        "rshares": "15884927870",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "synergy-now",
        "rshares": "14477109532",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "fknmayhem",
        "rshares": "25788672863",
        "percent": "6000",
        "value": 0.01
      }, {
        "voter": "citizensmith",
        "rshares": "16268601270",
        "percent": "4400",
        "value": 0.01
      }, {
        "voter": "ekonugraha",
        "rshares": "17392326230",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "mattniblock",
        "rshares": "13232881806",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "fullcoverbetting",
        "rshares": "20898089579",
        "percent": "2500",
        "value": 0.01
      }, {
        "voter": "erikklok",
        "rshares": "14406894579",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "lucious",
        "rshares": "24628819904",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "steemitkidsworld",
        "rshares": "20528903568",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "diabonua",
        "rshares": "25830277726",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "insaneworks",
        "rshares": "22362149639",
        "percent": "5000",
        "value": 0.01
      }, {
        "voter": "fitat40",
        "rshares": "16489484152",
        "percent": "1000",
        "value": 0.01
      }, {
        "voter": "votum",
        "rshares": "13930599254",
        "percent": "2000",
        "value": 0.01
      }, {
        "voter": "themightysquid",
        "rshares": "17131923020",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "scoopstakes",
        "rshares": "17133332236",
        "percent": "1000",
        "value": 0.01
      }, {
        "voter": "dfacademy",
        "rshares": "22697408790",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "yoyo-jp",
        "rshares": "24510986750",
        "percent": "10000",
        "value": 0.01
      }, {
        "voter": "bitcoinator",
        "rshares": "14338458552",
        "percent": "3000",
        "value": 0.01
      }, {
        "voter": "mummyimperfect",
        "rshares": "6912122960",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "ak2020",
        "rshares": "2806636415",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "writewords",
        "rshares": "509274473",
        "percent": "800",
        "value": 0
      }, {
        "voter": "the-alien",
        "rshares": "6807311852",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "emily-cook",
        "rshares": "201758502",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "hitmeasap",
        "rshares": "9609168742",
        "percent": "3300",
        "value": 0
      }, {
        "voter": "mrwang",
        "rshares": "82900074",
        "percent": "500",
        "value": 0
      }, {
        "voter": "ardina",
        "rshares": "151288767",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jillfeint",
        "rshares": "4852098094",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "iamwne",
        "rshares": "314178417",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "arconite",
        "rshares": "2997940447",
        "percent": "500",
        "value": 0
      }, {
        "voter": "raphaelle",
        "rshares": "2068143714",
        "percent": "400",
        "value": 0
      }, {
        "voter": "daynewright",
        "rshares": "9276246694",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "sazbird",
        "rshares": "524932588",
        "percent": "2200",
        "value": 0
      }, {
        "voter": "peppernrino",
        "rshares": "649568928",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "wisbeech",
        "rshares": "2777453954",
        "percent": "4400",
        "value": 0
      }, {
        "voter": "vegeta",
        "rshares": "4362284280",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "phusionphil",
        "rshares": "2172768196",
        "percent": "380",
        "value": 0
      }, {
        "voter": "votehumanity",
        "rshares": "266252158",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nelyp",
        "rshares": "890044945",
        "percent": "2000",
        "value": 0
      }, {
        "voter": "joep",
        "rshares": "73983917",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "syahhiran",
        "rshares": "2392664312",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steemtruth",
        "rshares": "1993839807",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "ahmedelakehal",
        "rshares": "792470339",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "demartini",
        "rshares": "1849093141",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mafeeva",
        "rshares": "8526187167",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "mariana85",
        "rshares": "232845566",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "ades",
        "rshares": "8094566583",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sudutpandang",
        "rshares": "5465192179",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "comfortgenius",
        "rshares": "2242695082",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "emonandels",
        "rshares": "274677095",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "freebornsociety",
        "rshares": "5481068929",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "cryptophunk",
        "rshares": "524633549",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jakechalmers",
        "rshares": "257212014",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "vinnu",
        "rshares": "183302601",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "devi1714",
        "rshares": "178430726",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "morph",
        "rshares": "432992963",
        "percent": "800",
        "value": 0
      }, {
        "voter": "chilluminati",
        "rshares": "517309596",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jkkim",
        "rshares": "27068039",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "gmuxx",
        "rshares": "3237645372",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "scandinavianlife",
        "rshares": "817971850",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "khunfarang",
        "rshares": "465232717",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cheaky",
        "rshares": "228059561",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "dailygiveaway",
        "rshares": "196186976",
        "percent": "4100",
        "value": 0
      }, {
        "voter": "lazylove",
        "rshares": "183935088",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "rycharde",
        "rshares": "4752727316",
        "percent": "991",
        "value": 0
      }, {
        "voter": "khunpoom",
        "rshares": "254754871",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "chuckyfucky",
        "rshares": "4485134667",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "benniebanana",
        "rshares": "194972102",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sarmins",
        "rshares": "907757025",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "larsson9",
        "rshares": "2584679559",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "insiders",
        "rshares": "173508168",
        "percent": "5800",
        "value": 0
      }, {
        "voter": "howtostartablog",
        "rshares": "3012470708",
        "percent": "800",
        "value": 0
      }, {
        "voter": "muhammadsabil",
        "rshares": "99851557",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "elliotjgardner",
        "rshares": "185420483",
        "percent": "7500",
        "value": 0
      }, {
        "voter": "andyluy",
        "rshares": "685275185",
        "percent": "100",
        "value": 0
      }, {
        "voter": "stock84",
        "rshares": "160054748",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cheech-oz",
        "rshares": "2622512006",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "baracudapakira",
        "rshares": "552695309",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "makrotheblack",
        "rshares": "6314395705",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "britcoins",
        "rshares": "1734686877",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "achlord",
        "rshares": "664015965",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "oddreality",
        "rshares": "10419525",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "yvonneinoregon",
        "rshares": "598888530",
        "percent": "3500",
        "value": 0
      }, {
        "voter": "jefflombardo",
        "rshares": "246299631",
        "percent": "3300",
        "value": 0
      }, {
        "voter": "fenola",
        "rshares": "351524549",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "japh",
        "rshares": "2308996189",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "opc",
        "rshares": "314715301",
        "percent": "7200",
        "value": 0
      }, {
        "voter": "sirdeza",
        "rshares": "1276287161",
        "percent": "8000",
        "value": 0
      }, {
        "voter": "artistslatam",
        "rshares": "554195243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ewuoso",
        "rshares": "1046680756",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "christianity101",
        "rshares": "282117657",
        "percent": "6800",
        "value": 0
      }, {
        "voter": "sweetcharity705",
        "rshares": "310240520",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "iykecollins",
        "rshares": "139526531",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "diana01",
        "rshares": "658301101",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "taylor.swift",
        "rshares": "268639303",
        "percent": "6600",
        "value": 0
      }, {
        "voter": "imbritish",
        "rshares": "177833629",
        "percent": "5900",
        "value": 0
      }, {
        "voter": "funnystuff",
        "rshares": "37706404",
        "percent": "500",
        "value": 0
      }, {
        "voter": "adal111",
        "rshares": "766190283",
        "percent": "3000",
        "value": 0
      }, {
        "voter": "anonimous",
        "rshares": "262546170",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "opheliapoe",
        "rshares": "1991123781",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "travelingmercies",
        "rshares": "1579231250",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "combofrenzy",
        "rshares": "4147069428",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steemcarny86",
        "rshares": "214451962",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "unrared",
        "rshares": "3476447234",
        "percent": "500",
        "value": 0
      }, {
        "voter": "openledgerio",
        "rshares": "346365219",
        "percent": "6600",
        "value": 0
      }, {
        "voter": "ingdirect",
        "rshares": "395129722",
        "percent": "7400",
        "value": 0
      }, {
        "voter": "abcbullion",
        "rshares": "255451038",
        "percent": "5100",
        "value": 0
      }, {
        "voter": "akhysimpati17",
        "rshares": "231846228",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "beardsandbass",
        "rshares": "99116025",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "monash",
        "rshares": "280963123",
        "percent": "5500",
        "value": 0
      }, {
        "voter": "steem-d-anlovnit",
        "rshares": "12674585894",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "jrobi",
        "rshares": "426060394",
        "percent": "4000",
        "value": 0
      }, {
        "voter": "steemabuse",
        "rshares": "274647099",
        "percent": "5400",
        "value": 0
      }, {
        "voter": "mohammad32",
        "rshares": "431178965",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bahagia-arbi",
        "rshares": "8015342502",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "reekadoh",
        "rshares": "196054777",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nurhayati",
        "rshares": "426944954",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "unimelb",
        "rshares": "384393381",
        "percent": "7200",
        "value": 0
      }, {
        "voter": "sukro",
        "rshares": "269162617",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "apasia.tech",
        "rshares": "1703708632",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sbdraffle",
        "rshares": "250416791",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "djei.art22",
        "rshares": "1146781198",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "dgorbunov",
        "rshares": "486432132",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sawcraz.art",
        "rshares": "3384055514",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ryoplasmic",
        "rshares": "10660536178",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gnarlyanimations",
        "rshares": "188628075",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ijoelmudisteem",
        "rshares": "543400844",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hillaryaa",
        "rshares": "1153246194",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cipas",
        "rshares": "616657873",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "monita05",
        "rshares": "1227322219",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "walidchabir",
        "rshares": "1474285984",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "takeru255",
        "rshares": "2034925629",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mila00",
        "rshares": "153226673",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steembet.asia",
        "rshares": "485182039",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "acehnature",
        "rshares": "1255039340",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "firman",
        "rshares": "1635326867",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "syami",
        "rshares": "386801654",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gvand",
        "rshares": "1792021447",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "enjieneer",
        "rshares": "4496673945",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "maria.isaaccura",
        "rshares": "433689282",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "noises",
        "rshares": "510373137",
        "percent": "7500",
        "value": 0
      }, {
        "voter": "bobtucks",
        "rshares": "173310526",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "aldoman-75",
        "rshares": "11415226516",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "muchlis7star",
        "rshares": "554195243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cryptohax",
        "rshares": "554195243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "stevejhuggett",
        "rshares": "3304335470",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "puggle",
        "rshares": "774212577",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mrjamesbond",
        "rshares": "344985096",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "princeso",
        "rshares": "6419676036",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "bangmimi",
        "rshares": "275810629",
        "percent": "1500",
        "value": 0
      }, {
        "voter": "kimchi-king",
        "rshares": "1236644035",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "michaeljpsalazar",
        "rshares": "1810781907",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "proudlynigerian",
        "rshares": "407791442",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "michaeljn",
        "rshares": "12561795467",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "learnandteach01",
        "rshares": "1194342903",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "legendarryll",
        "rshares": "4473493475",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nitro.live",
        "rshares": "275182620",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "thatphysicsguy",
        "rshares": "498727872",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "heyimsnuffles",
        "rshares": "2243243828",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "smartbot",
        "rshares": "252490934",
        "percent": "5900",
        "value": 0
      }, {
        "voter": "omstavan",
        "rshares": "3011857718",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "senorcoconut",
        "rshares": "6668608763",
        "percent": "3000",
        "value": 0
      }, {
        "voter": "stmtazerbaijan",
        "rshares": "0",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mikemolina1",
        "rshares": "551763179",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mzuami",
        "rshares": "190997902",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "yulem",
        "rshares": "3361655016",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jury.online",
        "rshares": "189555636",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "preciousmettle-x",
        "rshares": "131569131",
        "percent": "2000",
        "value": 0
      }, {
        "voter": "j-lee",
        "rshares": "2312472189",
        "percent": "7500",
        "value": 0
      }, {
        "voter": "angelicagarcia",
        "rshares": "2898442174",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hrhmikelength",
        "rshares": "526345015",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "berkaytekinsen",
        "rshares": "1854513790",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steemsecretfiles",
        "rshares": "552646064",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "arsik306",
        "rshares": "343850383",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "murad06",
        "rshares": "128929629",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "lmir1965",
        "rshares": "360161407",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "wilerv",
        "rshares": "175766963",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "b00m",
        "rshares": "5372892261",
        "percent": "3520",
        "value": 0
      }, {
        "voter": "earisu",
        "rshares": "1245357127",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "peewills",
        "rshares": "175301252",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "acidzapps",
        "rshares": "1933415610",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "egotheist",
        "rshares": "12644539952",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ajmaln",
        "rshares": "8668832516",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "thehypnotist",
        "rshares": "2605616009",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "healthadvice",
        "rshares": "252031558",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "semfire",
        "rshares": "252197899",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "giemijares",
        "rshares": "162377028",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "danda-daniel",
        "rshares": "222142971",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "handfree42",
        "rshares": "300787477",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "aqli",
        "rshares": "589351841",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "willsaldeno",
        "rshares": "8948374811",
        "percent": "9800",
        "value": 0
      }, {
        "voter": "nikonmarshall",
        "rshares": "8851650139",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "baroen96",
        "rshares": "6485530665",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hrhridoy",
        "rshares": "1840997453",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "tunstuns",
        "rshares": "420553772",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "davidsc",
        "rshares": "551546038",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "r00sj3",
        "rshares": "3430194015",
        "percent": "1250",
        "value": 0
      }, {
        "voter": "tim3w4rp",
        "rshares": "2466778572",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "baart",
        "rshares": "12294805811",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "neexal",
        "rshares": "175167657",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "patulrich",
        "rshares": "1044069626",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "skaybliss",
        "rshares": "162419924",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "camillius",
        "rshares": "78044637",
        "percent": "1500",
        "value": 0
      }, {
        "voter": "danielalbujas",
        "rshares": "517601053",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "salahudeen",
        "rshares": "210792730",
        "percent": "5500",
        "value": 0
      }, {
        "voter": "drtarts",
        "rshares": "5873775344",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sukiyakii",
        "rshares": "671703601",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hrubikscube",
        "rshares": "553306020",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "not-a-gamer",
        "rshares": "1333392893",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "poweruprewards",
        "rshares": "552943249",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "akpolopez",
        "rshares": "313168814",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "eprolific",
        "rshares": "5742027327",
        "percent": "7500",
        "value": 0
      }, {
        "voter": "boggan",
        "rshares": "89790184",
        "percent": "3600",
        "value": 0
      }, {
        "voter": "sparklez",
        "rshares": "148456375",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sparkosonic",
        "rshares": "531766659",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "womenempowerment",
        "rshares": "2844180689",
        "percent": "2300",
        "value": 0
      }, {
        "voter": "fgungen",
        "rshares": "3065224122",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mermaidvampire",
        "rshares": "12361747948",
        "percent": "500",
        "value": 0
      }, {
        "voter": "pearlkel",
        "rshares": "538688240",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "freerolll",
        "rshares": "320118662",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "motordrive",
        "rshares": "1269073488",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "omg-is-biology",
        "rshares": "751804189",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "matthiasjohn",
        "rshares": "131524212",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lesshorrible",
        "rshares": "459907331",
        "percent": "7000",
        "value": 0
      }, {
        "voter": "abuz",
        "rshares": "542716458",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gocho94",
        "rshares": "521873404",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "peewillz",
        "rshares": "296507599",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mistakili",
        "rshares": "5650153298",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "comingback",
        "rshares": "206942386",
        "percent": "1200",
        "value": 0
      }, {
        "voter": "bishoppeter1",
        "rshares": "2066131250",
        "percent": "8500",
        "value": 0
      }, {
        "voter": "shahbazfayyaz",
        "rshares": "0",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "heajin",
        "rshares": "342013212",
        "percent": "7500",
        "value": 0
      }, {
        "voter": "gabyrutigliano",
        "rshares": "517759346",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "anabell.brett",
        "rshares": "518299025",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lovelyboo",
        "rshares": "266496696",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "green015",
        "rshares": "1819159995",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "felixgarciap",
        "rshares": "891542598",
        "percent": "2000",
        "value": 0
      }, {
        "voter": "evansbankx",
        "rshares": "324113445",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "zotopower",
        "rshares": "367714284",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "sisygoboom",
        "rshares": "8434715965",
        "percent": "1500",
        "value": 0
      }, {
        "voter": "gabrielarondon",
        "rshares": "416349845",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "howtosteem",
        "rshares": "4544223707",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "flozockt",
        "rshares": "209015173",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mylka",
        "rshares": "2411522861",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "joluco123",
        "rshares": "1230694028",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "naijatimez",
        "rshares": "223423056",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "benleemusic",
        "rshares": "5092647017",
        "percent": "500",
        "value": 0
      }, {
        "voter": "maggy7419",
        "rshares": "160254136",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bozz",
        "rshares": "3557717673",
        "percent": "1000",
        "value": 0
      }, {
        "voter": "akpos",
        "rshares": "10512915125",
        "percent": "8000",
        "value": 0
      }, {
        "voter": "keepingtarotreal",
        "rshares": "538922789",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jdarkmaxter",
        "rshares": "540904520",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jasonwaterfalls",
        "rshares": "119204109",
        "percent": "3960",
        "value": 0
      }, {
        "voter": "jagoe",
        "rshares": "2951589442",
        "percent": "1200",
        "value": 0
      }, {
        "voter": "polashsen",
        "rshares": "513532835",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "btccurrency1",
        "rshares": "64514830",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "philanthropic",
        "rshares": "554396212",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "faglerabbi",
        "rshares": "550752341",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "pr0t0type98",
        "rshares": "49862036",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "darkikal",
        "rshares": "235581834",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "vargart",
        "rshares": "3136286111",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "jvpengine",
        "rshares": "250687527",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "jhaveapostol",
        "rshares": "391500222",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "inedido",
        "rshares": "1285442014",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "supreme7",
        "rshares": "244093246",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "wisejg",
        "rshares": "3171465086",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bulent1976",
        "rshares": "283331032",
        "percent": "2200",
        "value": 0
      }, {
        "voter": "lionsuit",
        "rshares": "10510717535",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "omoyiwolabusayo",
        "rshares": "345543822",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "shela",
        "rshares": "160022184",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "alexsteemiter",
        "rshares": "275858422",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "belaviel",
        "rshares": "3466863514",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "andimywapblog14",
        "rshares": "210919388",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "aniesta",
        "rshares": "243536348",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "jombu",
        "rshares": "386211176",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "andrenavarro",
        "rshares": "542447066",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nellyperez",
        "rshares": "469644039",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jvhteach",
        "rshares": "4618466842",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "alakadar",
        "rshares": "421197922",
        "percent": "7800",
        "value": 0
      }, {
        "voter": "virgo27",
        "rshares": "964055668",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ask2lance",
        "rshares": "222797381",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bit6in",
        "rshares": "529698197",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bharathi22",
        "rshares": "6548161416",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "vaderetro",
        "rshares": "6718839433",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bookoons",
        "rshares": "4520412098",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "tiket",
        "rshares": "2168047963",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "bnn",
        "rshares": "70655565",
        "percent": "2000",
        "value": 0
      }, {
        "voter": "memeload",
        "rshares": "252097622",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "ayoade96",
        "rshares": "196074545",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sholi",
        "rshares": "4897482932",
        "percent": "8000",
        "value": 0
      }, {
        "voter": "xymaros",
        "rshares": "551615138",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lugi",
        "rshares": "545635810",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "luiscalzadilla",
        "rshares": "3550815995",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "onuvaldis",
        "rshares": "25018939",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steem-factuals",
        "rshares": "168771023",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "ruyi",
        "rshares": "553082720",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "adigleh",
        "rshares": "554195243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gametrailerflash",
        "rshares": "535299610",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "aghmat",
        "rshares": "205133376",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "rueblikuchen",
        "rshares": "500107966",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "chuks0chuks",
        "rshares": "143765190",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "wealth4good",
        "rshares": "364148445",
        "percent": "700",
        "value": 0
      }, {
        "voter": "capnsostre",
        "rshares": "754966703",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "rj1",
        "rshares": "384361182",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "marianelamendoza",
        "rshares": "516904089",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "yandakuala",
        "rshares": "0",
        "percent": "200",
        "value": 0
      }, {
        "voter": "justinzidi3",
        "rshares": "541809380",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lucy-smith",
        "rshares": "331160393",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nldv1122",
        "rshares": "97596389",
        "percent": "2125",
        "value": 0
      }, {
        "voter": "lemcriq",
        "rshares": "1072571654",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "darkline",
        "rshares": "527896142",
        "percent": "100",
        "value": 0
      }, {
        "voter": "kaylatruett",
        "rshares": "144002626",
        "percent": "2250",
        "value": 0
      }, {
        "voter": "vampirgarfield",
        "rshares": "176101452",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "khalilputra",
        "rshares": "333117541",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nikkojimenez",
        "rshares": "528305696",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "danbiohackingman",
        "rshares": "3609070818",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "melaniesaray",
        "rshares": "1202132228",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "mcquine",
        "rshares": "790832665",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "deus-vult",
        "rshares": "313268523",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "spamfarmer",
        "rshares": "673061594",
        "percent": "3520",
        "value": 0
      }, {
        "voter": "maxofp2p",
        "rshares": "318397297",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sanne",
        "rshares": "195551711",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "agoha",
        "rshares": "166895085",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "masudurrahman",
        "rshares": "388106670",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "aroraproject",
        "rshares": "552326068",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hakan1988",
        "rshares": "402804615",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ehisokoedion",
        "rshares": "383466345",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ibook-ishare",
        "rshares": "445509985",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "krbecrypto",
        "rshares": "99007918",
        "percent": "2500",
        "value": 0
      }, {
        "voter": "bot.vote",
        "rshares": "552782295",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "tutchpa",
        "rshares": "168231604",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "zephyr119",
        "rshares": "198446144",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "devitech",
        "rshares": "412009629",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "supremacy126",
        "rshares": "368057731",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "elmisra",
        "rshares": "542595159",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "toyinbaruba",
        "rshares": "70271534",
        "percent": "2000",
        "value": 0
      }, {
        "voter": "milayosawa",
        "rshares": "1058613074",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "votoloko",
        "rshares": "551804677",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "anakrimba",
        "rshares": "441418486",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sirteamsteemit",
        "rshares": "3753140004",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lmahda70",
        "rshares": "542751512",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ismazahara",
        "rshares": "545644202",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sunnya",
        "rshares": "488948614",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cryptodivision",
        "rshares": "543844147",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "aparanoide",
        "rshares": "511247592",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "vampire-steem",
        "rshares": "157691025",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "davidric",
        "rshares": "534461767",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bawativi",
        "rshares": "249443064",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "fajriyahnur421",
        "rshares": "543264703",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sapridelima",
        "rshares": "545539084",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "foysalahmmed",
        "rshares": "509917578",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "projectmaia",
        "rshares": "469303100",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "klabboy",
        "rshares": "547070749",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "fuckmesilly",
        "rshares": "551803232",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nurily",
        "rshares": "488967202",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "abcor",
        "rshares": "119744211",
        "percent": "8",
        "value": 0
      }, {
        "voter": "livingstone9",
        "rshares": "381534210",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "weblift",
        "rshares": "553882006",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "enormeanimal",
        "rshares": "2152702758",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "carita-feliz",
        "rshares": "529583328",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sakibhossain",
        "rshares": "543314771",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "annasilvia",
        "rshares": "248766301",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "kiwitravels",
        "rshares": "554275428",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "genesiissrc",
        "rshares": "549900264",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "verendra",
        "rshares": "553061156",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "zephyrepic",
        "rshares": "565807870",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "chrome.citizen",
        "rshares": "377059644",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steinz",
        "rshares": "1382939383",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "minnowboostere",
        "rshares": "176814514",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mrandreas",
        "rshares": "202894981",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "yestermorrow",
        "rshares": "1912156843",
        "percent": "500",
        "value": 0
      }, {
        "voter": "xybb",
        "rshares": "532256137",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "dpoll.economy",
        "rshares": "193225417",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "poppypyro",
        "rshares": "72143154",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mrbigglesworth1",
        "rshares": "251683453",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "la-a",
        "rshares": "252026394",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "singingintherain",
        "rshares": "251541360",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "byebyebirdie",
        "rshares": "242138623",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "signus",
        "rshares": "544232243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "colt45-2zigzags",
        "rshares": "251774382",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "arrr",
        "rshares": "6501514760",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gpcx86",
        "rshares": "126771779",
        "percent": "200",
        "value": 0
      }, {
        "voter": "robinhoodupme",
        "rshares": "119431726",
        "percent": "800",
        "value": 0
      }, {
        "voter": "kokeshlover",
        "rshares": "252097622",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "supernaturallove",
        "rshares": "251963134",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "aurorious",
        "rshares": "252023265",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "outsidemydoor",
        "rshares": "251984502",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "friskykitty",
        "rshares": "199389432",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "momstermania",
        "rshares": "251621820",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "craniumgames",
        "rshares": "252035740",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "clyde.ericson",
        "rshares": "249597665",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "miaapado03",
        "rshares": "408045189",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steem-oon",
        "rshares": "436916475",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "tjessie",
        "rshares": "386407883",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "apujoy",
        "rshares": "252097622",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "arcaniuss",
        "rshares": "156978632",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "collinstochukwu",
        "rshares": "194438105",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "maybedog",
        "rshares": "3996064176",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "faady92",
        "rshares": "1213893449",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "pangahg",
        "rshares": "1231788916",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "khairi95",
        "rshares": "553024130",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "indianapatt",
        "rshares": "1857433984",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "faza13",
        "rshares": "209195258",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "parradoks",
        "rshares": "565296648",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "phoenix.rising",
        "rshares": "70363069",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "dream77124",
        "rshares": "250271265",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "ocundhatfa",
        "rshares": "532871947",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hydquihaipie",
        "rshares": "510136325",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nieloagranca",
        "rshares": "1175020456",
        "percent": "800",
        "value": 0
      }, {
        "voter": "dianation",
        "rshares": "435198091",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "natltreasury",
        "rshares": "716340801",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jidgabol",
        "rshares": "118442424",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "goodnuel",
        "rshares": "425919529",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cryptouno",
        "rshares": "264940926",
        "percent": "300",
        "value": 0
      }, {
        "voter": "kikiwiis",
        "rshares": "519471771",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "soyronaldo",
        "rshares": "519638496",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "escfrancis",
        "rshares": "909508741",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "nsikakntia",
        "rshares": "252231977",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "joygalz",
        "rshares": "495382085",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "edgmanyerber",
        "rshares": "551413588",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "jokinmenipieleen",
        "rshares": "1277092263",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hibashah1992",
        "rshares": "521717990",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "margaretred",
        "rshares": "550839184",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "shepherd-stories",
        "rshares": "1511647172",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steembullet",
        "rshares": "804516311",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hongman96",
        "rshares": "379951305",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "asforex",
        "rshares": "380011237",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "chike4545",
        "rshares": "118272245",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "andresdbrito",
        "rshares": "539822244",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "emma-hs",
        "rshares": "2623656987",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "digital-jesus",
        "rshares": "465444387",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "adigun12",
        "rshares": "373295564",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "upvoteshares",
        "rshares": "10734118350",
        "percent": "800",
        "value": 0
      }, {
        "voter": "haley4k",
        "rshares": "531384473",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cryptocrib",
        "rshares": "435970037",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "faithmso0b",
        "rshares": "498630871",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "durchmanfaimet",
        "rshares": "530059179",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "alqudsid",
        "rshares": "365057818",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "mdsohagm752",
        "rshares": "379040640",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ebakuglobal",
        "rshares": "181362506",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "praserr",
        "rshares": "251607939",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "peleafabmold",
        "rshares": "510230607",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "roringeotur",
        "rshares": "520801486",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "tabontbiho",
        "rshares": "510579526",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "haraterla1989",
        "rshares": "519774231",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "boykeren",
        "rshares": "75140629",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "cryptomythic",
        "rshares": "346239780",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "gozben24",
        "rshares": "384622645",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "deepaks1996",
        "rshares": "374629287",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hernaryruiz",
        "rshares": "519489027",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "rebe2015",
        "rshares": "540449724",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "allinoncrypto",
        "rshares": "102986593",
        "percent": "1875",
        "value": 0
      }, {
        "voter": "sparkling1",
        "rshares": "456937347",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "guard-of-gamers",
        "rshares": "551371493",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "alina82",
        "rshares": "546791532",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "rajeshdas666",
        "rshares": "479064751",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "topbuzzer",
        "rshares": "454852613",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "qilin",
        "rshares": "184068560",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "fahim.shahriar",
        "rshares": "517721822",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sagors",
        "rshares": "71509783",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "olatunjipaul",
        "rshares": "79059039",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "macanselm",
        "rshares": "215829404",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "theodosiskatq",
        "rshares": "60251626",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "dessyhodin97",
        "rshares": "257696189",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ask4peace",
        "rshares": "71538531",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "twoshyguys",
        "rshares": "477732463",
        "percent": "2125",
        "value": 0
      }, {
        "voter": "sameguy123",
        "rshares": "543469905",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "darekem",
        "rshares": "83379701",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "yeiverlin",
        "rshares": "275817299",
        "percent": "3000",
        "value": 0
      }, {
        "voter": "dubb",
        "rshares": "0",
        "percent": "500",
        "value": 0
      }, {
        "voter": "powermax2",
        "rshares": "547355345",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "ngockim",
        "rshares": "160726061",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "joecoolup",
        "rshares": "541355171",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "steemitbuzz",
        "rshares": "0",
        "percent": "100",
        "value": 0
      }, {
        "voter": "bizzniche",
        "rshares": "323782583",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "williamdiaaaz",
        "rshares": "553855334",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "shyant",
        "rshares": "6884504022",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "omegaultra",
        "rshares": "554195243",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "swiftbot",
        "rshares": "2165797713",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "pamahdoo",
        "rshares": "0",
        "percent": "600",
        "value": 0
      }, {
        "voter": "carrycarrie",
        "rshares": "640647899",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "honeygirl",
        "rshares": "464724965",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lyannanatura",
        "rshares": "721184476",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "bharatgar8511",
        "rshares": "538673583",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "firststrike",
        "rshares": "4674456135",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sm-navidad",
        "rshares": "742297260",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "natasng",
        "rshares": "551955696",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "sadheaven",
        "rshares": "9465701519",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "wizzycats",
        "rshares": "2982976229",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "boby400",
        "rshares": "0",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "limitlesschuks",
        "rshares": "186556160",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "getfood",
        "rshares": "1660089034",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "lynched",
        "rshares": "41063000",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "actifit-devil",
        "rshares": "212608495",
        "percent": "5000",
        "value": 0
      }, {
        "voter": "render-obsolete",
        "rshares": "11763077231",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "rashedul2018",
        "rshares": "530801555",
        "percent": "10000",
        "value": 0
      }, {
        "voter": "hooliganstv",
        "rshares": "1645711227",
        "percent": "10000",
        "value": 0
      }],
      "upvotes": 574,
      "display_comment": "true"
    }],
    "authors_data": [{
      "id": 9563,
      "name": "acidyo",
      "created_at": "2016-05-23T22:34:48.000Z",
      "reputation": 78.53,
      "display_name": "Acid",
      "about": "Manual Curator, Alt-coin enthusiast, Creator of @OCD",
      "location": "Finland",
      "website": "https://steemconnect.com/sign/account-witness-vote?witness=ocd-witness&approve=1",
      "profile_image": "https://imgur.com/sEKbvku.jpg",
      "cover_image": "https://wallpaperscraft.com/image/planets_stars_space_universe_spots_blurring_59643_3840x1200.jpg",
      "followers": 27107,
      "following": 925,
      "proxy": "",
      "post_count": 14598,
      "proxy_weight": 264154000,
      "vote_weight": 715492000,
      "kb_used": 0,
      "rank": 0,
      "active_at": "2019-03-14T13:24:03.000Z",
      "cached_at": "2019-03-14T13:35:44.000Z",
      "raw_json": "{\"id\":9562,\"name\":\"acidyo\",\"owner\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM5TrWnx3UCwtBXBCNJwaDrGybpgmKaQPk5AMyF3FfKX8zfkAvt5\",1]]},\"active\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM6GLdr7rCKZz4NVtBEnCNM9JWD6yVV8ZkpX7A3BQPh4krddVaoR\",1]]},\"posting\":{\"weight_threshold\":1,\"account_auths\":[[\"buildteam\",1],[\"busy.app\",1],[\"dclick.app\",1],[\"dlike.app\",1],[\"dlive.app\",1],[\"dlux\",1],[\"dreply\",1],[\"drugwars.app\",1],[\"dtube.app\",1],[\"fundition.app\",1],[\"ongame.app\",1],[\"partiko-steemcon\",1],[\"peakmonsters.app\",1],[\"rewarding\",1],[\"sgc-labs.app\",1],[\"steemhunt.com\",1],[\"steempeak.app\",1],[\"steeve.app\",1],[\"tripsteem\",1],[\"vimm.app\",1]],\"key_auths\":[[\"STM87ZyYukWLQWwLEv1EMdvW8TfC83wxY55HYbeGiXp4HStN5HKFG\",1]]},\"memo_key\":\"STM8aERhC2aEHbJXkUpznd37PH6QoG7dfdQgmyPZ7VTnZu6ZnD8pN\",\"proxy\":\"\",\"last_owner_update\":\"2017-05-21T14:47:48\",\"last_account_update\":\"2019-03-09T01:57:06\",\"created\":\"2016-05-24T00:34:48\",\"mined\":false,\"recovery_account\":\"steem\",\"last_account_recovery\":\"1970-01-01T00:00:00\",\"reset_account\":\"null\",\"comment_count\":0,\"lifetime_vote_count\":0,\"post_count\":14598,\"can_vote\":true,\"voting_manabar\":{\"current_mana\":\"430346647985515\",\"last_update_time\":1552573443},\"voting_power\":6018,\"balance\":\"110.000 STEEM\",\"savings_balance\":\"0.000 STEEM\",\"sbd_balance\":\"10.463 SBD\",\"sbd_seconds\":\"3355459014\",\"sbd_seconds_last_update\":\"2019-03-14T13:43:42\",\"sbd_last_interest_payment\":\"2019-03-06T20:08:48\",\"savings_sbd_balance\":\"0.000 SBD\",\"savings_sbd_seconds\":\"4292184\",\"savings_sbd_seconds_last_update\":\"2018-07-21T16:19:54\",\"savings_sbd_last_interest_payment\":\"2018-07-21T16:19:48\",\"savings_withdraw_requests\":0,\"reward_sbd_balance\":\"0.000 SBD\",\"reward_steem_balance\":\"0.000 STEEM\",\"reward_vesting_balance\":\"0.000000 VESTS\",\"reward_vesting_steem\":\"0.000 STEEM\",\"vesting_shares\":\"264154466.321987 VESTS\",\"delegated_vesting_shares\":\"257721259.769389 VESTS\",\"received_vesting_shares\":\"709058741.023403 VESTS\",\"vesting_withdraw_rate\":\"425288.616493 VESTS\",\"next_vesting_withdrawal\":\"2019-03-15T22:38:12\",\"withdrawn\":0,\"to_withdraw\":\"5528752014417\",\"withdraw_routes\":0,\"curation_rewards\":48057136,\"posting_rewards\":100829554,\"proxied_vsf_votes\":[\"80837246729484\",0,0,0],\"witnesses_voted_for\":30,\"last_post\":\"2019-03-14T14:22:18\",\"last_root_post\":\"2019-03-14T00:07:18\",\"last_vote_time\":\"2019-03-14T14:24:03\",\"post_bandwidth\":19016,\"pending_claimed_accounts\":1047,\"vesting_balance\":\"0.000 STEEM\",\"reputation\":\"886169696865496\",\"witness_votes\":[\"actifit\",\"ausbitbank\",\"blocktrades\",\"busy.witness\",\"c-squared\",\"cervantes\",\"clayop\",\"curie\",\"emrebeyler\",\"followbtcnews\",\"gtg\",\"guiltyparties\",\"kevinwong\",\"neoxian\",\"nextgencrypto\",\"ocd-witness\",\"oracle-d\",\"patrice\",\"pfunk\",\"pharesim\",\"riverhead\",\"smooth.witness\",\"steemcommunity\",\"steemgigs\",\"steemhunt\",\"steempeak\",\"steempress\",\"therealwolf\",\"timcliff\",\"wise-team\"]}"
    }, {
      "id": 736036,
      "name": "donnest",
      "created_at": "2018-02-08T16:41:57.000Z",
      "reputation": 57.07,
      "display_name": "Mr  Donnest",
      "about": "Biochemist || JesusGang || Steemjetian || Writer || Footballer ||discord: Donnest#9648",
      "location": "Earth",
      "website": "https://telegram.me/donnest",
      "profile_image": "https://cdn.steemitimages.com/DQmRji5U4mdasx3eUcoPvr2U24C69uoAB6yK8fBRtDF8Tbo/FB_IMG_15275342220061646.jpg",
      "cover_image": "https://cdn.steemitimages.com/DQmQisAfXJodNwspEdXVkHjNDSpusWTzgXEAJcLRGLZDHHT/IMG-20180918-WA0002.jpg",
      "followers": 448,
      "following": 176,
      "proxy": "",
      "post_count": 1327,
      "proxy_weight": 529467,
      "vote_weight": 529467,
      "kb_used": 0,
      "rank": 0,
      "active_at": "2019-03-11T20:47:42.000Z",
      "cached_at": "2019-03-11T20:48:13.000Z",
      "raw_json": "{\"id\":736035,\"name\":\"donnest\",\"owner\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM6SBSVJzYT21Bf82tweLFjv4MeG8EPz38e3JE4w5aVgycD2YudS\",1]]},\"active\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM6XHdRJxiQh15PaUxMMc3Sp8BAEuefWqgn4NfyAgegqWmjchKhZ\",1]]},\"posting\":{\"weight_threshold\":1,\"account_auths\":[[\"busy.app\",1],[\"dpoll.xyz\",1],[\"dtube.app\",1],[\"smartsteem\",1],[\"steemhunt.com\",1]],\"key_auths\":[[\"STM8VNBBR8tHsxiX1m24YkrcEp73JKLsQp9vyLpfgLgjF97PD5gra\",1]]},\"memo_key\":\"STM7qGaLT3WFZgRVKyn6QGNRiePspbTqVvzEPwfZE9ffvom37HvJp\",\"proxy\":\"\",\"last_owner_update\":\"2018-10-01T13:38:45\",\"last_account_update\":\"2019-02-21T07:20:36\",\"created\":\"2018-02-08T17:41:57\",\"mined\":false,\"recovery_account\":\"steem\",\"last_account_recovery\":\"2018-10-01T13:38:45\",\"reset_account\":\"null\",\"comment_count\":0,\"lifetime_vote_count\":0,\"post_count\":1327,\"can_vote\":true,\"voting_manabar\":{\"current_mana\":\"259864062433\",\"last_update_time\":1552340862},\"voting_power\":4908,\"balance\":\"5.892 STEEM\",\"savings_balance\":\"0.000 STEEM\",\"sbd_balance\":\"3.157 SBD\",\"sbd_seconds\":\"28751515434\",\"sbd_seconds_last_update\":\"2019-03-10T21:54:30\",\"sbd_last_interest_payment\":\"2019-02-21T15:14:27\",\"savings_sbd_balance\":\"0.000 SBD\",\"savings_sbd_seconds\":\"0\",\"savings_sbd_seconds_last_update\":\"1970-01-01T00:00:00\",\"savings_sbd_last_interest_payment\":\"1970-01-01T00:00:00\",\"savings_withdraw_requests\":0,\"reward_sbd_balance\":\"0.000 SBD\",\"reward_steem_balance\":\"0.000 STEEM\",\"reward_vesting_balance\":\"38.040332 VESTS\",\"reward_vesting_steem\":\"0.019 STEEM\",\"vesting_shares\":\"529467.428432 VESTS\",\"delegated_vesting_shares\":\"0.000000 VESTS\",\"received_vesting_shares\":\"0.000000 VESTS\",\"vesting_withdraw_rate\":\"0.000000 VESTS\",\"next_vesting_withdrawal\":\"1969-12-31T23:59:59\",\"withdrawn\":0,\"to_withdraw\":0,\"withdraw_routes\":0,\"curation_rewards\":16829,\"posting_rewards\":266783,\"proxied_vsf_votes\":[0,0,0,0],\"witnesses_voted_for\":22,\"last_post\":\"2019-03-10T21:51:42\",\"last_root_post\":\"2019-03-09T09:23:36\",\"last_vote_time\":\"2019-03-11T21:47:42\",\"post_bandwidth\":0,\"pending_claimed_accounts\":0,\"vesting_balance\":\"0.000 STEEM\",\"reputation\":\"3659277586402\",\"witness_votes\":[\"aggroed\",\"ausbitbank\",\"doctorvee\",\"drakos\",\"good-karma\",\"gtg\",\"jerrybanfield\",\"jesta\",\"joseph\",\"klye\",\"liberosist\",\"patrice\",\"prc\",\"roelandp\",\"steemed\",\"steempty\",\"teamsteem\",\"therealwolf\",\"timcliff\",\"utopian-io\",\"valorforfreedom\",\"yabapmatt\"]}"
    }, {
      "id": 1195317,
      "name": "sadheaven",
      "created_at": "2019-01-11T08:20:33.000Z",
      "reputation": 57.52,
      "display_name": "Sad Heaven",
      "about": "sound producer, musician, artist, samurai",
      "location": "Russia",
      "website": "",
      "profile_image": "https://cdn.steemitimages.com/DQmcMyGES2vGpeMTgdPypfVHDeWZNLKKTm4XENMZUFMzzYL/SADD.png",
      "cover_image": "https://cdn.steemitimages.com/DQmfB77H44aBkecwBqsMXx11LxmXgtxRKyeb5UAxqUrBSGy/2018-12-29_arrr_0011a_wip_010.png",
      "followers": 90,
      "following": 64,
      "proxy": "",
      "post_count": 419,
      "proxy_weight": 314469,
      "vote_weight": 515061,
      "kb_used": 0,
      "rank": 0,
      "active_at": "2019-03-13T22:59:27.000Z",
      "cached_at": "2019-03-14T13:32:11.000Z",
      "raw_json": "{\"id\":1195316,\"name\":\"sadheaven\",\"owner\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM5mvos8JYFDzhZqjJLoJbDkge6LCmw38fjrXX5un8PVhMzJ7q46\",1]]},\"active\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM525fSoD98Ms4ViAqx9oanrsoQ9UVj8nCCgL9hpgBqidHGCb7vu\",1]]},\"posting\":{\"weight_threshold\":1,\"account_auths\":[[\"dpoll.xyz\",1],[\"drugwars.app\",1],[\"ntopaz-artisteem\",1]],\"key_auths\":[[\"STM8134En1ugMuwPwVES2Mw2ZUrUKVwXhy3gYfVqJoyKpK9u6j2Sf\",1]]},\"memo_key\":\"STM5rZNaTiUAUiS16LzeBTUG8mEvC2iHvfTJX4Cjiun6JAaYkdDhH\",\"proxy\":\"\",\"last_owner_update\":\"1970-01-01T00:00:00\",\"last_account_update\":\"2019-03-13T23:04:39\",\"created\":\"2019-01-11T09:20:33\",\"mined\":false,\"recovery_account\":\"steem\",\"last_account_recovery\":\"1970-01-01T00:00:00\",\"reset_account\":\"null\",\"comment_count\":0,\"lifetime_vote_count\":0,\"post_count\":419,\"can_vote\":true,\"voting_manabar\":{\"current_mana\":\"467975050074\",\"last_update_time\":1552523169},\"voting_power\":9048,\"balance\":\"3.301 STEEM\",\"savings_balance\":\"0.000 STEEM\",\"sbd_balance\":\"22.770 SBD\",\"sbd_seconds\":\"18760413366\",\"sbd_seconds_last_update\":\"2019-03-14T00:26:09\",\"sbd_last_interest_payment\":\"2019-02-18T21:07:00\",\"savings_sbd_balance\":\"0.000 SBD\",\"savings_sbd_seconds\":\"0\",\"savings_sbd_seconds_last_update\":\"1970-01-01T00:00:00\",\"savings_sbd_last_interest_payment\":\"1970-01-01T00:00:00\",\"savings_withdraw_requests\":0,\"reward_sbd_balance\":\"0.000 SBD\",\"reward_steem_balance\":\"0.000 STEEM\",\"reward_vesting_balance\":\"12.010744 VESTS\",\"reward_vesting_steem\":\"0.006 STEEM\",\"vesting_shares\":\"314469.103486 VESTS\",\"delegated_vesting_shares\":\"0.000000 VESTS\",\"received_vesting_shares\":\"200591.500160 VESTS\",\"vesting_withdraw_rate\":\"0.000000 VESTS\",\"next_vesting_withdrawal\":\"1969-12-31T23:59:59\",\"withdrawn\":0,\"to_withdraw\":0,\"withdraw_routes\":0,\"curation_rewards\":1136,\"posting_rewards\":228172,\"proxied_vsf_votes\":[0,0,0,0],\"witnesses_voted_for\":2,\"last_post\":\"2019-03-12T22:16:39\",\"last_root_post\":\"2019-03-10T11:34:15\",\"last_vote_time\":\"2019-03-13T23:59:27\",\"post_bandwidth\":0,\"pending_claimed_accounts\":0,\"vesting_balance\":\"0.000 STEEM\",\"reputation\":\"4100534060098\",\"witness_votes\":[\"c-squared\",\"curie\"]}"
    }, {
      "id": 481625,
      "name": "amosbastian",
      "created_at": "2017-12-07T16:32:39.000Z",
      "reputation": 71.5,
      "display_name": "Amos",
      "about": "Utopian.io community manager. Programmer, gamer and football enthusiast.",
      "location": "Amsterdam",
      "website": "https://utopian.rocks/",
      "profile_image": "https://cdn.steemitimages.com/DQmWiiKbR3Xnyc9DmAn1KBuQvzxAc1HNgafSS3jgLWrooVs/7c1562f7-ba26-4df4-b891-07b0014da3a1.jpeg",
      "cover_image": "https://i.imgur.com/mOiIPDk.png",
      "followers": 832,
      "following": 67,
      "proxy": "",
      "post_count": 2286,
      "proxy_weight": 18171400,
      "vote_weight": 18171400,
      "kb_used": 0,
      "rank": 0,
      "active_at": "2019-03-14T12:08:18.000Z",
      "cached_at": "2019-03-14T12:16:41.000Z",
      "raw_json": "{\"id\":481624,\"name\":\"amosbastian\",\"owner\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM73RNykdc71HKAh1dc7oAVV3jrjh6oeSjs5Jn569MPpGgVrSfGJ\",1]]},\"active\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM628CygYTYYmSXs8MXU2LNSsJCBDMEAydNh2vnHBzYTvhBUnud4\",1]]},\"posting\":{\"weight_threshold\":1,\"account_auths\":[[\"actifit.app\",1],[\"busy.app\",1],[\"contest-hero.app\",1],[\"dpoll.xyz\",1],[\"drugwars.app\",1],[\"fundition.app\",1],[\"steeditor.app\",1],[\"steembler.app\",1],[\"steempeak.app\",1]],\"key_auths\":[[\"STM8PLBygHDfqrZn32Wsic2kuNfoUwWyzk4mGaPWEaSEyREUN2Se4\",1]]},\"memo_key\":\"STM5WdweCUgaBB3EUcWhhWhVpHEZtyLgsWGozgDrynHKUmbiokV7i\",\"proxy\":\"\",\"last_owner_update\":\"2018-05-04T13:42:21\",\"last_account_update\":\"2019-03-11T15:54:42\",\"created\":\"2017-12-07T17:32:39\",\"mined\":false,\"recovery_account\":\"steem\",\"last_account_recovery\":\"1970-01-01T00:00:00\",\"reset_account\":\"null\",\"comment_count\":0,\"lifetime_vote_count\":0,\"post_count\":2286,\"can_vote\":true,\"voting_manabar\":{\"current_mana\":\"17675295844288\",\"last_update_time\":1552568898},\"voting_power\":9727,\"balance\":\"5508.721 STEEM\",\"savings_balance\":\"0.000 STEEM\",\"sbd_balance\":\"919.029 SBD\",\"sbd_seconds\":\"1606225679466\",\"sbd_seconds_last_update\":\"2019-03-14T12:20:42\",\"sbd_last_interest_payment\":\"2019-02-19T00:27:57\",\"savings_sbd_balance\":\"0.000 SBD\",\"savings_sbd_seconds\":\"0\",\"savings_sbd_seconds_last_update\":\"1970-01-01T00:00:00\",\"savings_sbd_last_interest_payment\":\"1970-01-01T00:00:00\",\"savings_withdraw_requests\":0,\"reward_sbd_balance\":\"0.000 SBD\",\"reward_steem_balance\":\"0.000 STEEM\",\"reward_vesting_balance\":\"0.000000 VESTS\",\"reward_vesting_steem\":\"0.000 STEEM\",\"vesting_shares\":\"18171369.619106 VESTS\",\"delegated_vesting_shares\":\"0.000000 VESTS\",\"received_vesting_shares\":\"0.000000 VESTS\",\"vesting_withdraw_rate\":\"0.000000 VESTS\",\"next_vesting_withdrawal\":\"1969-12-31T23:59:59\",\"withdrawn\":0,\"to_withdraw\":0,\"withdraw_routes\":0,\"curation_rewards\":993224,\"posting_rewards\":10507436,\"proxied_vsf_votes\":[0,0,0,0],\"witnesses_voted_for\":7,\"last_post\":\"2019-03-13T16:35:03\",\"last_root_post\":\"2019-03-08T15:16:06\",\"last_vote_time\":\"2019-03-14T13:08:18\",\"post_bandwidth\":0,\"pending_claimed_accounts\":20,\"vesting_balance\":\"0.000 STEEM\",\"reputation\":\"146902314444321\",\"witness_votes\":[\"actifit\",\"emrebeyler\",\"helo\",\"holger80\",\"justyy\",\"stoodkev\",\"utopian-io\"]}"
    }, {
      "id": 67658,
      "name": "abh12345",
      "created_at": "2016-08-16T18:39:03.000Z",
      "reputation": 73.06,
      "display_name": "Asher @abh12345",
      "about": "Witness: @steemcommunity   | Life  |  Steem  |  Utopian-io",
      "location": "Mallorca, Spain",
      "website": "https://steemit.com/index/@abh12345/profile",
      "profile_image": "https://cdn.steemitimages.com/DQmTL9ZaczkD3LfbAbTT54VMTWxx5rSq9X4e2mAnfhLZywk/1.PNG",
      "cover_image": "",
      "followers": 11576,
      "following": 1023,
      "proxy": "",
      "post_count": 27843,
      "proxy_weight": 35184200,
      "vote_weight": 34526200,
      "kb_used": 0,
      "rank": 0,
      "active_at": "2019-03-14T13:31:00.000Z",
      "cached_at": "2019-03-14T13:42:50.000Z",
      "raw_json": "{\"id\":67657,\"name\":\"abh12345\",\"owner\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM7SDUBreTahJKikVaU5bZuHzhYau4NMGZkGARnRYcz8vhDZMKVC\",1]]},\"active\":{\"weight_threshold\":1,\"account_auths\":[],\"key_auths\":[[\"STM8NJqTwHt5TQxs5iDGsxe18SS4eHntbevZx7c4nwi2kLcdAEeKT\",1]]},\"posting\":{\"weight_threshold\":1,\"account_auths\":[[\"agfa.app\",1],[\"busy.app\",1],[\"dclick.app\",1],[\"dpoll.xyz\",1],[\"drugwars.app\",1],[\"dtube.app\",1],[\"fundition.app\",1],[\"peakmonsters.app\",1],[\"rewarding\",1],[\"steeditor.app\",1],[\"steemauto\",1],[\"steemhunt.com\",1],[\"steempeak.app\",1],[\"steempress.app\",1],[\"steeve.app\",1],[\"utopianpay\",1],[\"vimm.app\",1],[\"wisevote.app\",1]],\"key_auths\":[[\"STM6t5u11uyK4CzmkESkXFKCXkHarSaGQ4VLZvhh2PMLQT1kVZYvP\",1]]},\"memo_key\":\"STM4z6yRuW1k4mR8wL5hGaCxsTbfcnDB93wx57g163g2DvzY2Miro\",\"proxy\":\"\",\"last_owner_update\":\"2018-05-04T13:22:48\",\"last_account_update\":\"2019-03-12T06:34:06\",\"created\":\"2016-08-16T20:39:03\",\"mined\":false,\"recovery_account\":\"steem\",\"last_account_recovery\":\"1970-01-01T00:00:00\",\"reset_account\":\"null\",\"comment_count\":0,\"lifetime_vote_count\":0,\"post_count\":27843,\"can_vote\":true,\"voting_manabar\":{\"current_mana\":\"29505503181383\",\"last_update_time\":1552573860},\"voting_power\":8545,\"balance\":\"111.910 STEEM\",\"savings_balance\":\"0.000 STEEM\",\"sbd_balance\":\"32.522 SBD\",\"sbd_seconds\":\"40890190191\",\"sbd_seconds_last_update\":\"2019-03-14T14:07:39\",\"sbd_last_interest_payment\":\"2019-03-04T22:06:54\",\"savings_sbd_balance\":\"0.000 SBD\",\"savings_sbd_seconds\":\"8042040000\",\"savings_sbd_seconds_last_update\":\"2018-03-10T14:41:21\",\"savings_sbd_last_interest_payment\":\"2018-03-06T22:25:30\",\"savings_withdraw_requests\":0,\"reward_sbd_balance\":\"0.000 SBD\",\"reward_steem_balance\":\"0.000 STEEM\",\"reward_vesting_balance\":\"510.450525 VESTS\",\"reward_vesting_steem\":\"0.255 STEEM\",\"vesting_shares\":\"35184216.633271 VESTS\",\"delegated_vesting_shares\":\"7730098.633617 VESTS\",\"received_vesting_shares\":\"7072096.632305 VESTS\",\"vesting_withdraw_rate\":\"0.000000 VESTS\",\"next_vesting_withdrawal\":\"1969-12-31T23:59:59\",\"withdrawn\":0,\"to_withdraw\":0,\"withdraw_routes\":0,\"curation_rewards\":2030147,\"posting_rewards\":17587011,\"proxied_vsf_votes\":[\"86663547734803\",\"372123667934\",0,0],\"witnesses_voted_for\":30,\"last_post\":\"2019-03-14T14:06:42\",\"last_root_post\":\"2019-03-14T12:57:24\",\"last_vote_time\":\"2019-03-14T14:31:00\",\"post_bandwidth\":10000,\"pending_claimed_accounts\":129,\"vesting_balance\":\"0.000 STEEM\",\"reputation\":\"218538035887919\",\"witness_votes\":[\"aggroed\",\"arcange\",\"ausbitbank\",\"blockbrothers\",\"busy.witness\",\"c-squared\",\"c0ff33a\",\"curie\",\"demotruk\",\"drakos\",\"emrebeyler\",\"felixxx\",\"followbtcnews\",\"good-karma\",\"gtg\",\"holger80\",\"kevinwong\",\"krnel\",\"lukestokes.mhth\",\"ocd-witness\",\"oracle-d\",\"pharesim\",\"roelandp\",\"steemcommunity\",\"steemgigs\",\"teamsteem\",\"timcliff\",\"ura-soul\",\"utopian-io\",\"yabapmatt\"]}"
    }]
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "content-type": "text/html; charset=utf-8"
  },
  "config": {
    "transformRequest": {},
    "transformResponse": {},
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "method": "get",
    "baseURL": "http://localhost:8002",
    "params": {
      "author": "acidyo",
      "permlink": "5gpzbm-steem-fantasy-premier-league-gameweek-29-review",
      "display_comment": true
    },
    "url": "http://localhost:8002/"
  },
  "request": {}
};

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

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map