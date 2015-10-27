/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

// TODO ESLint's `exported` directive seems to not be working correctly
// with the current version.
// We should probably `export` Harmonic using ES2015 module syntax and
// trash the `exported` directive.
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    // eslint-disable-line no-unused-vars

    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":10,"name":"Front in Cast","title":"Tudo sobre o ecossistema front-end","domain":"http://awesome.com","subtitle":"Apresentado por Rafael Silva e Thiago Alves","author":"Rafael Silva e Thiago Alves","description":"Podcast que trata de todo ecossistema que envolve o desenvolvimento web front-end, assim como outras temáticas que suas tecnologias podem abordar","bio":"Desenvolvedores Front-End que se conheceram em eventos por aí e não pararam de debater sobre as coisas da web e como elas interferem na nossa vida","theme":"harmonic-theme-default","preprocessor":false,"posts_permalink":":language/:year/:month/:title","pages_permalink":":language/pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"en","languages":["en","pt-br"]},"mycustomdata":"wow","foo":"bar","baz":["a","b"]};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"en":[{"layout":"post","title":"hello world","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Hello World!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"2014/05/hello-world","lang":"en","default_lang":false}],"pt-br":[{"layout":"post","title":"ola mundo","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Olá mundo!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"pt-br/2014/05/hello-world","lang":"pt-br","default_lang":true}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return {"en":[{"layout":"page","title":"About","date":"2014-05-27T07:18:47.847Z","comments":"false","published":"true","keywords":"JavaScript, ES6","description":"About page","categories":"","authorName":"Jaydson","content":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>About - Tudo sobre o ecossistema front-end</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n</head>\n<body>\n<nav class=\"social\">\n    \n        <span>\n            <a href=\"/ \">\n                en\n            </a>\n        </span>\n    \n        <span>\n            <a href=\"/pt-br\">\n                pt-br\n            </a>\n        </span>\n    \n</nav>\n\t<article>\n\t\t<h1 id=\"hello-page\">Hello page</h1>\n\n\t</article>\n\n\t<footer class=\"bottom\">\n    <span class=\"licenses\">\n        Content licensed under <a href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US\">Creative Commons</a><br />\n        Code licensed under <a href=\"https://github.com/es6rocks/harmonic/blob/master/LICENSE\">MIT</a><br />\n        Static website proudly powered by <a href=\"https://github.com/es6rocks/harmonic/\">Harmonic</a>\n    </span>\n</footer>\n<script type=\"text/javascript\" src=\"/harmonic.js\"></script>\n<script type=\"text/javascript\" src=\"/js/main.js\"></script>\n\n\n</body>\n</html>\n","file":"src/posts/about.md","filename":"about","link":"pages/about","lang":"en"}],"pt-br":[{"layout":"page","title":"About","date":"2014-05-27T07:18:47.847Z","comments":"false","published":"true","keywords":"JavaScript, ES6","description":"About page","categories":"","authorName":"Jaydson","content":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>About - Tudo sobre o ecossistema front-end</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n</head>\n<body>\n<nav class=\"social\">\n    \n        <span>\n            <a href=\"/ \">\n                en\n            </a>\n        </span>\n    \n        <span>\n            <a href=\"/pt-br\">\n                pt-br\n            </a>\n        </span>\n    \n</nav>\n\t<article>\n\t\t<h1 id=\"ol-p-gina\">Olá página</h1>\n\n\t</article>\n\n\t<footer class=\"bottom\">\n    <span class=\"licenses\">\n        Content licensed under <a href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US\">Creative Commons</a><br />\n        Code licensed under <a href=\"https://github.com/es6rocks/harmonic/blob/master/LICENSE\">MIT</a><br />\n        Static website proudly powered by <a href=\"https://github.com/es6rocks/harmonic/\">Harmonic</a>\n    </span>\n</footer>\n<script type=\"text/javascript\" src=\"/harmonic.js\"></script>\n<script type=\"text/javascript\" src=\"/js/main.js\"></script>\n\n\n</body>\n</html>\n","file":"src/posts/about.md","filename":"about","link":"pt-br/pages/about","lang":"pt-br"}]};
        }
    }]);

    return Harmonic;
})();