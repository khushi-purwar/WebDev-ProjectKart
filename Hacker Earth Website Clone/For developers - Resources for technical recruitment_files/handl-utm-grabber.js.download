jQuery(function($) {
    var qvars = getUrlVars()

    $.each([ 'utm_source','utm_medium','utm_term', 'utm_content', 'utm_campaign', 'gclid', 'email', 'username' ], function( i,v ) {

        var cookie_field = GetQVars(v,qvars)

        if ( cookie_field != '' )
            Cookies.set(v, cookie_field, { expires: 30 });

        var curval = Cookies.get(v)

        if (curval != undefined) {
            curval = decodeURIComponent(curval.replace(/[%]/g,' '))
            if (v == 'username') {
                //Maybe this should apply to all... We'll see...
                curval = curval.replace(/\+/g, ' ')
            }

            jQuery('input[name=\"'+v+'\"]').val(curval)
            jQuery('input#'+v).val(curval)
            jQuery('input.'+v).val(curval)
        }
    });

    $('.utm-out').each(function(){
        var merged = $.extend( {}, handl_utm, getSearchParams(this.href) )
        this.href = ""
        if ( !$.isEmptyObject(merged) )
            this.href += "?"+$.param(merged)
    });
});

function getSearchParams(url,k){
    var p={};
    var a = document.createElement('a');
    a.href = url;
    a.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
}

function GetQVars(v,qvars){
    if (qvars[v] != undefined) {
        return qvars[v]
    }
    return ''
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}