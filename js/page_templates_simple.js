window.__xt_onload_events = function (){
    if ( document.body.className.indexOf ( 'xt_touch' ) < 0 ){
        document.body.className+=' xt_touch';
    }

    if ( document.getElementsByClassName ){
        window.__xt_mark_active_navigation = function (){
            var items = document.getElementsByClassName('xt_navigation');

            if ( items != undefined && items != null && items [0] != undefined )
            {
                items = items[0].childNodes;

                var loc = decodeURI ( document.location.pathname ).replace ( ' ', '+' ).replace ( /\/__xt.+/, '' );

                for (var i = 0; i < items.length; i++)
                {
                    if ( items [ i ].firstChild && items [ i ].firstChild.getAttribute && items [ i ].firstChild.getAttribute('href') == loc ) { items[i].className += ' active'; break; };
                }
            }
        };

        window.__xt_mark_active_navigation ();
    }
}
window.__xt_onload_events ();
