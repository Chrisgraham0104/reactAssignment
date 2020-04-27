'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.getPost = getPost;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
  return (0, _isomorphicFetch2.default)('http://www.omdbapi.com/?apikey=81283aa7&i=tt0944947&Season=1');
}

function getPost(slug) {
  return (0, _isomorphicFetch2.default)('http://www.omdbapi.com/?apikey=81283aa7&i=' + slug);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaVxccG9zdHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImZldGNoIiwiZ2V0UG9zdHMiLCJnZXRQb3N0Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFTyxBQUFTO1FBSVQsQUFBUzs7QUFOaEIsQUFBTyxBQUVQOzs7Ozs7QUFBTyxvQkFBcUIsQUFDMUI7U0FBTywrQkFBUCxBQUFPLEFBQU8sQUFDZjtBQUVEOztBQUFPLGlCQUFBLEFBQWtCLE1BQU0sQUFDN0I7U0FBTyw4RUFBUCxBQUFPLEFBQW1ELEFBQzNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L2Fzc2lnbm1lbnQifQ==