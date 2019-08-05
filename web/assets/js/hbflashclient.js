(function($){$.fn.iframeTracker=function(handler){var target=this.get();if(handler===null||handler===false){$.iframeTracker.untrack(target);}else if(typeof handler=="object"){$.iframeTracker.track(target,handler);}else{throw new Error("Wrong handler type (must be an object, or null|false to untrack)");}};$.iframeTracker={focusRetriever:null,focusRetrieved:false,handlersList:[],isIE8AndOlder:false,init:function(){try{if($.browser.msie==true&&$.browser.version<9){this.isIE8AndOlder=true;}}catch(ex){try{var matches=navigator.userAgent.match(/(msie) ([\w.]+)/i);if(matches[2]<9){this.isIE8AndOlder=true;}}catch(ex2){}}
$(window).focus();$(window).blur(function(e){$.iframeTracker.windowLoseFocus(e);});$('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');this.focusRetriever=$('#focus_retriever');this.focusRetrieved=false;$(document).mousemove(function(e){if(document.activeElement&&document.activeElement.tagName=='IFRAME'){$.iframeTracker.focusRetriever.focus();$.iframeTracker.focusRetrieved=true;}});if(this.isIE8AndOlder){this.focusRetriever.blur(function(e){e.stopPropagation();e.preventDefault();$.iframeTracker.windowLoseFocus(e);});$('body').click(function(e){$(window).focus();});$('form').click(function(e){e.stopPropagation();});try{$('body').on('click','form',function(e){e.stopPropagation();});}catch(ex){console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: "+ ex.message+")");}}},track:function(target,handler){handler.target=target;$.iframeTracker.handlersList.push(handler);$(target).bind('mouseover',{handler:handler},$.iframeTracker.mouseoverListener).bind('mouseout',{handler:handler},$.iframeTracker.mouseoutListener);},untrack:function(target){if(typeof Array.prototype.filter!="function"){console.log("Your browser doesn't support Array filter, untrack disabled");return;}
$(target).each(function(index){$(this).unbind('mouseover',$.iframeTracker.mouseoverListener).unbind('mouseout',$.iframeTracker.mouseoutListener);});var nullFilter=function(value){return value===null?false:true;};for(var i in this.handlersList){for(var j in this.handlersList[i].target){if($.inArray(this.handlersList[i].target[j],target)!==-1){this.handlersList[i].target[j]=null;}}
this.handlersList[i].target=this.handlersList[i].target.filter(nullFilter);if(this.handlersList[i].target.length==0){this.handlersList[i]=null;}}
this.handlersList=this.handlersList.filter(nullFilter);},mouseoverListener:function(e){e.data.handler.over=true;try{e.data.handler.overCallback(this);}catch(ex){}},mouseoutListener:function(e){e.data.handler.over=false;$.iframeTracker.focusRetriever.focus();try{e.data.handler.outCallback(this);}catch(ex){}},windowLoseFocus:function(event){for(var i in this.handlersList){if(this.handlersList[i].over==true){try{this.handlersList[i].blurCallback();}catch(ex){}}}}};$(document).ready(function(){$.iframeTracker.init();});})(jQuery);
	var time = 30;
	var timerun = true;

	function closeTheBanner() {
		time = 10;
		timerun = true;
	
		$(".roomenterad-habblet-container").animate({
		top: -$(".roomenterad-habblet-container").height() + "px"
		}, 1000);
	}

	setInterval(function () {
		if (timerun) {
			$(".roomenterad-closing1").text("Fermeture dans " + time +" secondes");
				time--;
		
			if (time < 0) {
				closeTheBanner();
			}
		}
	}, 1000);

	setInterval(function () {
	var HTML = $(".roomenterad-habblet-thead").html();
		$(".roomenterad-habblet-thead").text("");
		$(".roomenterad-habblet-container").animate({
			top: "0px"
		}, 1000);
		$(".roomenterad-habblet-thead").html(HTML);
		time = 10;
		timerun = true;
	}, 3600000);

function Fullscreen(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement){if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen();}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen();}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}}else{if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}}}