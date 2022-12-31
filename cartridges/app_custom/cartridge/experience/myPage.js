'use strict';
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
/**
 * Render logic for the page.
 */
module.exports.render = function (context) {
   var model = new HashMap();

   // add parameters to model as required for rendering based on the given context (dw.experience.PageScriptContext):
   // * context.page (dw.experience.Page)
   // * context.renderParameters (String)
   // * context.content (dw.util.Map)
   var page= context.page;
   model.page = page;
   model.content = context.page;


 return new Template('experience/pages/promopage').render(model).text;
};
