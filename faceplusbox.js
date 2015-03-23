/**
 * ---------------------------------------------------------------------------------------------------------------
 * Skrypt FacePlus BOX - Wersja 2013
 * Autor: Grzegorz Miśkiewicz
 * Copyright (c) 2011-2013 Avatec.pl. Wszystkie prawa zastrzeżone
 *
 * KOPIOWANIE I ROZPOWSZECHNIANIE SKRYPTU, BEZ ZGODY AUTORA JEST ZABRONIONE
 * ---------------------------------------------------------------------------------------------------------------
 * www.avatec.pl
 * biuro@avatec.pl
 * ---------------------------------------------------------------------------------------------------------------
 * W przypadku jakichkolwiek problemów z uruchomieniem skryptu prosimy o kontakt:
 * EMail: biuro@avatec.pl
 * Tel: 603-942-561
 * GG: 7819895
 * ---------------------------------------------------------------------------------------------------------------
 **/
 
(function( jQuery ){
    jQuery.fn.extend({ 
		FacePlusBOX: function( options ) {
		
			var defaults = {
				fbkey		:	"105100776257949"	,
				theme		:	""					,
				color		: 	"blue"				,
				position	:	"left"				,
				top			:	"100px"				,
				fadeSpeed	:	200				,
				pathname	:	""
			};
			
			var options = jQuery.extend(defaults, options);
			return this.each(function() {
				var o = options;
				
				if(o.theme) { o.theme = o.theme + "_"; 	}
				
				if(o.pathname == "") {
					o.pathname = location.href.replace("/C:/" , "C://");
					o.pathname = o.pathname.replace(/([a-zA-Z0-9_-]+)\.html/g , "") + "faceplusbox/";
				}
				
				jQuery("body").append('<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/pl_PL/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script><div id="avatec_faceplusbox" style="display:block;position:fixed;height:300px;cursor:pointer;background-repeat:none;z-index:9999;"><div style="margin-top:10px;margin-left:-6px;border:none;" class="whiteBox"></div></div>');
				
				jQuery(".whiteBox").append('<div class="fb-like-box" data-href="'+o.fbkey+'" data-width="292" data-show-faces="true" data-stream="false" data-header="false" data-show-border="false"></div><div style="margin: 10px 0px 10px 20px;"><script type="text/javascript" src="https://apis.google.com/js/plusone.js">{lang: "pl"}</script><table><tr><td><g:plusone size="medium"></g:plusone></td><td><a href="http://www.avatec.pl/faceplus-demo/" style="display:block;background:white;color:black;text-decoration:none;font-family:arial;font-size:8pt" target="_blank" title="Dodaj FacePlus BOX na swoja strone !">FacePlus BOX - www.avatec.pl</a></td></tr></table>');
				
				var obj = jQuery("div#avatec_faceplusbox");

				if(o.color == "blue") 	{ var background = o.pathname + o.theme + "blue_"   + o.position + ".png"; }
				if(o.color == "yellow") { var background = o.pathname + o.theme + "yellow_" + o.position + ".png"; }
				if(o.color == "orange") { var background = o.pathname + o.theme + "orange_" + o.position + ".png"; }
				if(o.color == "green") 	{ var background = o.pathname + o.theme + "green_"  + o.position + ".png"; }
				if(o.color == "black") 	{ var background = o.pathname + o.theme + "black_"  + o.position + ".png"; }
				if(o.color == "silver") { var background = o.pathname + o.theme + "silver_" + o.position + ".png"; }
				if(o.color == "fb") { var background = o.pathname + o.theme + "fb_" + o.position + ".png"; }
				
				jQuery(obj).css("top" , o.top);
				jQuery(obj).css("background" , "url("+background+")");
				jQuery(obj).css("margin-top" , "10px");
				
				jQuery(obj).find("div.whiteBox").css("width" , "290px");
				jQuery(obj).find("div.whiteBox").css("height" , "280px");
				jQuery(obj).find("div.whiteBox").css("background" , "white");
				
				var hideDelay		= 300;
				var hideDelayTimer	= null;
				jQuery(document).promise().done(function(){
				if(o.position=="left") { 
					jQuery(obj).css("width" , "360px");
					jQuery(obj).css("left" , "-310px");
					
					jQuery(obj).hover( function(){
						if(hideDelayTimer)	clearTimeout(hideDelayTimer);
						jQuery(obj).animate( {left:'0'},o.fadeSpeed );
					}, function() {
						if(hideDelayTimer)	clearTimeout(hideDelayTimer);
						hideDelayTimer=setTimeout(function() {
							hideDelayTimer=null;
							jQuery(obj).animate( {left:'-=310'},o.fadeSpeed);
						},hideDelay);
					});
				}
				
				if(o.position=="right") {
					var winWidth = $(window).width()-50;
					jQuery(obj).css("width" , "360px");
					jQuery(obj).css("left" , winWidth);
					jQuery(obj).css("padding-left" , "50px");
					
					var leftPosition = $(obj).css("left");
					jQuery("#counter").val( "AKTUALNIE: " + jQuery(obj).css("left") );
					jQuery(obj).hover(function(){
						if(hideDelayTimer)	clearTimeout(hideDelayTimer);
						jQuery(obj).animate( {left:'-=310'},o.fadeSpeed );
					}, function() {
						if(hideDelayTimer)	clearTimeout(hideDelayTimer);
						hideDelayTimer=setTimeout(function() {
							hideDelayTimer=null; 
							jQuery(obj).animate( {left:'+=310'},o.fadeSpeed);
						},hideDelay);
					});
				}
				});
            });
		}
 
    });
})( jQuery );
