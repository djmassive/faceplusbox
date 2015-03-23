<?php
/**
	FACEPLUS Box Plugin v1.2.2013
	Copyright (c)2013 Avatec.pl
	All Right Reserved
	
	Plugin for Avatec Baza Noclegowa 2013
**/

	if(empty($_SESSION['config']['social_facebook_url']))
	{
		return false;
	}
	
	$PLUGIN['faceplusbox'] = array(
		"type"		=> "javascript",
		"source"	=> "<script type=\"text/javascript\" src=\"".APP_URL."plugins/faceplusbox/faceplusbox.js\"></script>
		<script type=\"text/javascript\">$(document).ready(function() { $('body').FacePlusBOX({ fbkey: '".$_SESSION['config']['social_facebook_url']."', theme: 'mini', position: 'left', top: '10px', fadeSpeed: 800, pathname: '".APP_URL."plugins/faceplusbox/' }); });	</script>"
	);
	