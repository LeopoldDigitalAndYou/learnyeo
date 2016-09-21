// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require("../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js");
window.jQuery = $;

require('../../node_modules/foundation-sites/dist/foundation.min.js');
$(document).foundation();
