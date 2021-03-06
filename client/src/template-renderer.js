'use strict';

var handlebars = require('oc-template-handlebars');
var htmlRenderer = require('./html-renderer');
var jade = require('oc-template-jade');
var validator = require('./validator');

module.exports = function(){
  var templateEngines = {
    handlebars,
    jade
  };

  return function(template, model, options, callback){
    templateEngines[options.templateType].render(
      {
        template,
        model
      },
      function(err, html){
        options.html = html;
        return callback(err, htmlRenderer.renderedComponent(options));
      }
    );
  };
};
