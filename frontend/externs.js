/**
 * @fileoverview Define global variables which should be ignored by the Closure
 *               compiler, such that our other libraries don't break.
 * @author readybreak@gmail.com (Wes Goodman)
 */
var $root;
/**
 * @constructor
 */
var $window = function() {
};
$window.$root = {};

/**
 * angularjs
 */
var angular = {};
var index;
var keyValue;
angular.compile = {};
angular.copy = {};
angular.isArray = {};
angular.forEach = {};
angular.service = {};
angular.widget = {};
angular.filter = {};
angular.Object = {
  'equals' : function(a, b) {}
};
angular.Array = {};
angular.toJson = function(a) {
};
/**
 * @constructor
 */
var $location = function() {
  this.update = function(a, b, c) {
  };
};
/**
 * @constructor
 */
var $route = function() {
  this.when = function(a, b, c) {
  };
  this.current = {};
  this.current.$scope = new angular.scope();
  this.onChange = function(a, b, c) {
  };
  this.otherwise = function(a, b, c) {
  };
};
/**
 * @constructor
 */
var $xhr = function(a, b, c, d, e, f) {
};
/**
 * @constructor
 */
$xhr.cache = function(a, b, c, d, e, f) {
};
/**
 * @constructor
 */
var $defer = function(a, b) {
};
/**
 * @constructor
 */
angular.scope = function() {
  this.$eval = function(opt_a) {
  };
  this.$tryEval = function(a) {
  };
  this.session = {
  };
};