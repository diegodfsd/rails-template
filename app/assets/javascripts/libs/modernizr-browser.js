;(function(module){
  var userAgent = navigator.userAgent;

  module.addTest("opera",       !!userAgent.match(/opera/i));
  module.addTest("firefox",     !!userAgent.match(/firefox/i));
  module.addTest("webkit",      !!userAgent.match(/safari|chrome|iphone|ipad|ipod/i));
  module.addTest("chrome",      !!userAgent.match(/chrome/i));

  if (module.webkit) {
    module.addTest("iphone",    !!userAgent.match(/iphone/i));
    module.addTest("ipad",      !!userAgent.match(/ipad/i));
    module.addTest("ipod",      !!userAgent.match(/ipod/i));
  }

  module.addTest("ie",          !!userAgent.match(/msie/i));

  if (module.ie) {
    module.addTest("ie6",       !!userAgent.match(/msie 6/i));
    module.addTest("ie7",       !!userAgent.match(/msie 7/i));
    module.addTest("ie8",       !!userAgent.match(/msie 8/i));
    module.addTest("ie9",       !!userAgent.match(/msie 9/i));
    module.addTest("ie10",      !!userAgent.match(/msie 10/i));
    module.addTest("lt-ie8",    !!userAgent.match(/msie [0-7]/i));
    module.addTest("lt-ie9",    !!userAgent.match(/msie [0-8]/i));
    module.addTest("lt-ie10",   !!userAgent.match(/msie [0-9]/i));
  }
})(Modernizr);