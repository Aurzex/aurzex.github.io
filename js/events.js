HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},Fluid.events={registerNavbarEvent:function(){var e=jQuery("#navbar");if(0!==e.length){var n=jQuery("#navbar .dropdown-menu");e.offset().top>0&&(e.removeClass("navbar-dark"),n.removeClass("navbar-dark")),Fluid.utils.listenScroll((function(){e[e.offset().top>50?"addClass":"removeClass"]("top-nav-collapse"),n[e.offset().top>50?"addClass":"removeClass"]("dropdown-collapse"),e.offset().top>0?(e.removeClass("navbar-dark"),n.removeClass("navbar-dark")):(e.addClass("navbar-dark"),n.removeClass("navbar-dark"))})),jQuery("#navbar-toggler-btn").on("click",(function(){jQuery(".animated-icon").toggleClass("open"),jQuery("#navbar").toggleClass("navbar-col-show")}))}},registerParallaxEvent:function(){var e=jQuery('#banner[parallax="true"]');if(0!==e.length){var n=jQuery("#board");0!==n.length&&Fluid.utils.listenScroll((function(){var r=jQuery(window).scrollTop()/5,o=96+parseInt(n.css("margin-top"),10);r>o&&(r=o),e.css({transform:"translate3d(0,"+r+"px,0)"});var a=jQuery(".side-col");a&&a.css({"padding-top":r+"px"})}))}},registerScrollDownArrowEvent:function(){var e=jQuery(".scroll-down-bar");0!==e.length&&e.on("click",(function(){Fluid.utils.scrollToElement("#board",-jQuery("#navbar").height())}))},registerScrollTopArrowEvent:function(){var e=jQuery("#scroll-top-button");if(0!==e.length){var n=jQuery("#board");if(0!==n.length){var r=!1,o=!1,a=function(){var a=n[0].getClientRects()[0].right,t=document.body.offsetWidth-a;r=t>=50,e.css({bottom:r&&o?"20px":"-60px",right:t-64+"px"})};a(),jQuery(window).resize(a);var t=n.offset().top;Fluid.utils.listenScroll((function(){var n=document.body.scrollTop+document.documentElement.scrollTop;o=n>=t,e.css({bottom:r&&o?"20px":"-60px"})})),e.on("click",(function(){jQuery("body,html").animate({scrollTop:0,easing:"swing"})}))}}},registerImageLoadedEvent:function(){if("NProgress"in window){var e=document.getElementById("banner");if(e){var n=e.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/(['"])/g,""),r=new Image;r.onload=function(){window.NProgress&&window.NProgress.inc(.2)},r.src=n,r.complete&&r.onload()}var o=jQuery("main img:not([lazyload])"),a=o.length;for(const e of o){const n=e.onload;e.onload=function(){n&&n(),window.NProgress&&window.NProgress.inc(.5/a)},e.complete&&e.onload()}}},registerRefreshCallback:function(e){Array.isArray(Fluid.events._refreshCallbacks)||(Fluid.events._refreshCallbacks=[]),Fluid.events._refreshCallbacks.push(e)},refresh:function(){if(Array.isArray(Fluid.events._refreshCallbacks))for(var e of Fluid.events._refreshCallbacks)e instanceof Function&&e()},billboard:function(){"console"in window&&console.log("\n-------------------------------------------------\n|                                               |\n|      ________  __            _        __      |\n|     |_   __  |[  |          (_)      |  ]     |\n|       | |_ \\_| | | __   _   __   .--.| |      |\n|       |  _|    | |[  | | | [  |/ /'`\\' |      |\n|      _| |_     | | | \\_/ |, | || \\__/  |      |\n|     |_____|   [___]'.__.'_/[___]'.__.;__]     |\n|                                               |\n|            Powered by Hexo x Fluid            |\n| https://github.com/fluid-dev/hexo-theme-fluid |\n|                                               |\n-------------------------------------------------\n    ")}};