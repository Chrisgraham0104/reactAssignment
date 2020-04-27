'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Main = require('../layouts/Main');

var _Main2 = _interopRequireDefault(_Main);

var _posts = require('../api/posts');

var _Post = require('../components/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\assignment\\pages\\index.js?entry',
    _this = undefined;

//import searchComp from '../components/Search'
var data;

var IndexPage = function IndexPage(_ref) {
    var posts = _ref.posts;
    return _react2.default.createElement(_Main2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_style2.default, {
        styleId: '1540279906',
        css: '.container.jsx-1540279906{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.card.jsx-1540279906{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;}.mb-2.jsx-1540279906,.my-2.jsx-1540279906{margin-bottom:.5rem!important;}.card-header.jsx-1540279906:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0;}.card-header.jsx-1540279906{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125);}.mt-5.jsx-1540279906,.my-5.jsx-1540279906{margin-top:3rem!important;}*.jsx-1540279906,.jsx-1540279906::after,.jsx-1540279906::before{box-sizing:border-box;}.card-body.jsx-1540279906{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;}user.jsx-1540279906 agent.jsx-1540279906 stylesheet.jsx-1540279906 input.jsx-1540279906{-webkit-writing-mode:horizontal-tb !important;text-rendering:auto;color:-internal-light-dark-color(black,white);-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;display:inline-block;text-align:start;-webkit-appearance:textfield;background-color:-internal-light-dark-color(white,black);-webkit-rtl-ordering:logical;cursor:text;margin:0em;font:400 13.3333px Arial;padding:1px 0px;border-width:2px;border-style:inset;border-color:initial;border-image:initial;}.form-control.jsx-1540279906{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;}button.jsx-1540279906,input.jsx-1540279906{overflow:visible;}button.jsx-1540279906,input.jsx-1540279906,optgroup.jsx-1540279906,select.jsx-1540279906,textarea.jsx-1540279906{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}*.jsx-1540279906,.jsx-1540279906::after,.jsx-1540279906::before{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHZ0IsQUFRSyxBQVlZLEFBSWdDLEFBSWpDLEFBTUMsQUFHSixBQUdWLEFBTWdDLEFBd0JoQyxBQWVHLEFBR1IsQUFNYSxTQUxGLEVBeEZELEdBc0VSLEdBZWYsQ0E3RWUsSUE2QmIsQUF5REYsQ0FsRXdCLEVBMkNjLENBckNwQyxHQXVEb0IsQ0F4RkEsQUFtQnRCLFNBU3lDLE9BaUJqQixDQTRDQSxDQXhGRixNQXNDRixFQWhCaEIsR0FnRHVCLE9BckVOLEFBNEM4QixDQTRDbkQsR0FsREEsRUFYaUQsVUEyQzlCLENBckVuQixTQUt3QixLQWlFSixlQTFCTSxDQWpCdEIsQUE0Q2dCLGdCQUNGLGNBQ1Esc0JBQ00sS0FwRWxCLFlBQ1MsV0FvRU0sVUFuRUwsY0FxQ0EsQ0ErQkMsT0FuRUksWUFxQ0wsRUErQmlELGFBbkVyQyxLQXFDaEIsZ0JBQ0MsYUFyQ0UsSUFzQ0UsaUJBckN6QixJQXNDcUIsaUJBQ1ksNkJBQzZCLDRCQTBCOUQsNkJBekJpQyw2QkFDakIsWUFDRCxXQUNjLHlCQUNULGdCQUNDLGlCQUNFLG1CQUNFLHFCQUNBLHFCQUN6QiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovYXNzaWdubWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnbGF5b3V0cy9NYWluJ1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICdhcGkvcG9zdHMnXG5cbmltcG9ydCBQb3N0IGZyb20gJ2NvbXBvbmVudHMvUG9zdCdcbi8vaW1wb3J0IHNlYXJjaENvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnXG52YXIgZGF0YTtcblxuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBwb3N0cyB9KSA9PlxuXG4gICBcbiAgPExheW91dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbi5tYi0yLCAubXktMiB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcbn1cblxuICAgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyguMjVyZW0gLSAxcHgpIGNhbGMoLjI1cmVtIC0gMXB4KSAwIDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICAgIH1cbiAgICAubXQtNSwgLm15LTUge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuY2FyZC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuXG51c2VyIGFnZW50IHN0eWxlc2hlZXRcbmlucHV0IHtcbiAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIGNvbG9yOiAtaW50ZXJuYWwtbGlnaHQtZGFyay1jb2xvcihibGFjaywgd2hpdGUpO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3Iod2hpdGUsIGJsYWNrKTtcbiAgICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcbiAgICBwYWRkaW5nOiAxcHggMHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5idXR0b24sIGlucHV0IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmJ1dHRvbiwgaW5wdXQsIG9wdGdyb3VwLCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgIFxuICAgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbXQtNVwiPlxuICAgICAgICBcbiAgICA8aW5wdXQgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZy12YWxpZCBuZy1kaXJ0eSBuZy10b3VjaGVkXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBUaXRsZSBOYW1lXCIgdHlwZT1cInRleHRcIlxuICAgICAgb25LZXlEb3duPXthc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSAgXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRQb3N0cygpXG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgICBjb25zb2xlLmxvZyhqc29uLkVwaXNvZGVzKVxuICAgICAgICAgIGNvbnN0IGVwID0ganNvbi5FcGlzb2Rlc1xuICAgICAgICAgIGxldCBuZXdfZXAgPSBlcC5maWx0ZXIoeD0+IHguVGl0bGUuaW5jbHVkZXMoZGF0YSkpXG4gICAgICAgICAgY29uc29sZS5sb2cobmV3X2VwKVxuICAgICAgICAgIGpzb24uRXBpc29kZXMgPSBuZXdfZXBcbiAgICAgICAgICAvL3JldHVybiB7IHBvc3RzOiBqc29uIH1cbiAgICAgICAgICBJbmRleFBhZ2UuYmluZCh7IHBvc3RzOiBqc29uIH0pXG4gICAgICB9fS8+ICAgIFxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRob2xkZXIgbXQtNVwiPiAgICAgIFxuICAgICAgIFxuICAgICAgICAgIDxQb3N0ICBwb3N0PXtwb3N0c30gLz5cbiAgICBcbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+XG5cblxuXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0UG9zdHMoKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4geyBwb3N0czoganNvbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl19 */\n/*@ sourceURL=pages\\index.js?entry */'
    }), _react2.default.createElement('div', { 'class': 'form-group mt-5', className: 'jsx-1540279906',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, _react2.default.createElement('input', { id: 'exampleInputEmail1', placeholder: 'Search by Title Name', type: 'text',
        onKeyDown: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var data, res, json, ep, new_ep;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                console.log(event.currentTarget.value);
                                data = event.currentTarget.value;
                                _context.next = 4;
                                return (0, _posts.getPosts)();

                            case 4:
                                res = _context.sent;
                                _context.next = 7;
                                return res.json();

                            case 7:
                                json = _context.sent;

                                console.log(json.Episodes);
                                ep = json.Episodes;
                                new_ep = ep.filter(function (x) {
                                    return x.Title.includes(data);
                                });

                                console.log(new_ep);
                                json.Episodes = new_ep;
                                //return { posts: json }
                                IndexPage.bind({ posts: json });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), className: 'jsx-1540279906' + ' ' + 'form-control ng-valid ng-dirty ng-touched',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1540279906' + ' ' + 'cardholder mt-5',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 136
        }
    }, _react2.default.createElement(_Post2.default, { post: posts, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
        }
    })));
};

IndexPage.getInitialProps = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req;
        var res, json;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _posts.getPosts)();

                    case 2:
                        res = _context2.sent;
                        _context2.next = 5;
                        return res.json();

                    case 5:
                        json = _context2.sent;
                        return _context2.abrupt('return', { posts: json });

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function (_x2) {
        return _ref4.apply(this, arguments);
    };
}();

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsImdldFBvc3RzIiwiUG9zdCIsImRhdGEiLCJJbmRleFBhZ2UiLCJwb3N0cyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInJlcyIsImpzb24iLCJFcGlzb2RlcyIsImVwIiwibmV3X2VwIiwiZmlsdGVyIiwieCIsIlRpdGxlIiwiaW5jbHVkZXMiLCJiaW5kIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7Ozs7Ozs7O0FBQ1A7QUFDQSxJQUFBLEFBQUk7O0FBR0osSUFBTSxZQUFZLFNBQVosQUFBWSxnQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOzJCQUduQixBQUFDOztzQkFBRDt3QkFBQTtBQUFBO0FBQUEsS0FBQTtpQkFBQTthQUFBLEFBdUdFO0FBdkdGLHdCQXVHRSxjQUFBLFNBQUssU0FBTCxBQUFXLDhCQUFYOztzQkFBQTt3QkFBQSxBQUVBO0FBRkE7Z0RBRThELElBQTlELEFBQWlFLHNCQUFxQixhQUF0RixBQUFrRyx3QkFBdUIsTUFBekgsQUFBOEgsQUFDNUg7K0JBQUE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO3lDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUdQOzt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLGNBQWxCLEFBQWdDLEFBQzFCO0FBSkMsdUNBSU0sTUFBQSxBQUFNLGNBSlosQUFJMEI7Z0RBSjFCO3VDQUFBLEFBS1c7O2lDQUFaO0FBTEMsK0NBQUE7Z0RBQUE7dUNBTVksSUFOWixBQU1ZLEFBQUk7O2lDQUFqQjtBQU5DLGdEQU9QOzt3Q0FBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNYO0FBUkMscUNBUUksS0FSSixBQVFTLEFBQ1o7QUFURyw0Q0FTTSxBQUFHLE9BQU8sYUFBQTsyQ0FBSSxFQUFBLEFBQUUsTUFBRixBQUFRLFNBQVosQUFBSSxBQUFpQjtBQVRyQyxBQVNNLEFBQ2IsaUNBRGE7O3dDQUNiLEFBQVEsSUFBUixBQUFZLEFBQ1o7cUNBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO0FBQ0E7MENBQUEsQUFBVSxLQUFLLEVBQUUsT0FiVixBQWFQLEFBQWUsQUFBUzs7aUNBYmpCO2lDQUFBO2dEQUFBOztBQUFBOzRCQUFBO0FBQVg7O2lDQUFBO3lDQUFBO0FBQUE7QUFERixpREFBQSxBQUFrQjs7c0JBQWxCO3dCQXpHRixBQXVHRSxBQUVBLEFBa0JBO0FBbEJBO3lCQWtCQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBRU07QUFGTjtBQUFBLHVCQUVNLEFBQUMsZ0NBQU0sTUFBUCxBQUFhO3NCQUFiO3dCQWhJUSxBQUdoQixBQTJIRSxBQUVNO0FBQUE7O0FBaElWOztBQXVJQSxVQUFBLEFBQVUsOEJBQVY7eUZBQTRCLHlCQUFBO1lBQUEsQUFBUyxZQUFULEFBQVM7aUJBQVQ7d0VBQUE7c0JBQUE7bURBQUE7eUJBQUE7eUNBQUE7K0JBQUEsQUFDUjs7eUJBQVo7QUFEb0Isd0NBQUE7eUNBQUE7K0JBRVAsSUFGTyxBQUVQLEFBQUk7O3lCQUFqQjtBQUZvQix5Q0FBQTswREFHbkIsRUFBRSxPQUhpQixBQUduQixBQUFTOzt5QkFIVTt5QkFBQTt5Q0FBQTs7QUFBQTtxQkFBQTtBQUE1Qjs7MEJBQUE7aUNBQUE7QUFBQTtBQU1BOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2Fzc2lnbm1lbnQifQ==