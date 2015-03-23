faceplusbox
===========

Plugin dodający do Twojej strony www slidebox z okienkiem facebooka.

Sprawdź również nasz plugin do informacji o cookies: JQuery Cookie Window Information

Instalacja
Wstaw poniższy kod zaraz przed zakończeniem nagłówka HEAD:

`<script src="http://code.jquery.com/jquery-1.6.4.min.js" type="text/javascript"></script>
<script src="/faceplusbox/faceplusbox.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function() {
        
        $("body").FacePlusBOX({ 
                fbkey:          "http://facebook.com/avatecpl",
                theme:          "mini",
                color:          "blue",
                position:       "left",
                top:            "10px",
                fadeSpeed:      800,
                pathname:       "http://www.avatec.pl/faceplusbox/" 
        });
});
</script>`

> w zmiennej fbkey wprowadź adres twojej strony na facebooku - w zmiennej color wybierz kolor Twojego FaceLike? BOX'a (black, blue, yellow, orange, silver, green) - w zmiennej position ustaw pozycję (left, right) - w zmiennej top ustaw odstęp od góry - w zmiennej pathname ustaw pełną ścieżkę do skryptu FaceLike? BOX