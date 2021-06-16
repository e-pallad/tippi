(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4551:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(7752);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(8137);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: external "fs"
var external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
var external_gray_matter_namespaceObject = require("gray-matter");;
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./lib/posts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postsDirectory = external_path_default().join(process.cwd(), 'posts');
function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = external_fs_default().readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = external_path_default().join(postsDirectory, fileName);
    const fileContents = external_fs_default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

    const matterResult = external_gray_matter_default()(fileContents); // Combine the data with the id

    return _objectSpread({
      id
    }, matterResult.data);
  }); // Sort posts by date

  return allPostsData.sort(({
    date: a
  }, {
    date: b
  }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
;// CONCATENATED MODULE: ./pages/index.js






async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
function Home({
  allPostsData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    home: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: layout/* siteTitle */.y
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (utils_module_default()).headingMd,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "[Your Self Introduction]"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["(This is a sample website - you\u2019ll be building a site like this on", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://nextjs.org/learn",
          children: "our Next.js tutorial"
        }), ".)"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (utils_module_default()).headingLg,
        children: "Blog"
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (utils_module_default()).list,
        children: allPostsData.map(({
          id,
          date,
          title
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: (utils_module_default()).listItem,
          children: [title, /*#__PURE__*/jsx_runtime_.jsx("br", {}), id, /*#__PURE__*/jsx_runtime_.jsx("br", {}), date]
        }, id))
      })]
    })]
  });
}

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [297,61,796], function() { return __webpack_exec__(4551); });
module.exports = __webpack_exports__;

})();