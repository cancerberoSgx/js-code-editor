this["jsCodeEditor"] = this["jsCodeEditor"] || {};
this["jsCodeEditor"]["template"] = this["jsCodeEditor"]["template"] || {};

this["jsCodeEditor"]["template"]["Layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Project name</a>\n    </div>\n    <div class="collapse navbar-collapse " data-template=\'NavBarMain\'>\n    </div>\n  </div> \n</div> \n\n<div class="container body">\n  <div class="starter-template">\n    <h1>Bootstrap starter template</h1>\n    <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n  </div>\n  <section id="droparea">\n    <div dropzone webkitdropzone="copy file:image/png file:image/gif file:image/jpeg" class="centerall">\n      Drop images or a folder of them\n      <div class="arrow left centerall ascolumn">\n        <span>Drag and drop files/folders from your desktop</span>\n      </div>\n    </div>\n\n<div class="container">\n    <div class="row">\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n  <div class="col-md-1">.col-md-1</div>\n</div>\n<div class="row">\n  <div class="col-md-8">.col-md-8</div>\n  <div class="col-md-4">.col-md-4</div>\n</div>\n<div class="row">\n  <div class="col-md-4">.col-md-4</div>\n  <div class="col-md-4">.col-md-4</div>\n  <div class="col-md-4">.col-md-4</div>\n</div>\n<div class="row">\n  <div class="col-md-6">.col-md-6</div>\n  <div class="col-md-6">.col-md-6</div>\n</div>\n</container>\n\n\n  </section>\n</div>';

}
return __p
};

this["jsCodeEditor"]["template"]["NavBarMain"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="nav navbar-nav">\n\t<li class="active"><a href="#">Home</a></li>\n\t<li><a href="#about">About</a></li>\n\t<li><a href="#contact">Contact</a></li>\n</ul>';

}
return __p
};

this["jsCodeEditor"]["template"]["NavigatorView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};