/***************************************************************************
 *
 * AUTHOR: Digital Pi - Marketing Automation, Consulting and Training
 *
 * WEBSITE: digitalpi.com
 * 
 * REVISED: 2018-02-06
 *
 * DESCRIPTION: This script retrieves UTM query string values, if present, 
 * and saves them in a cookie. If a Marketo form is present, the script will 
 * add hidden fields to it and populate them with the UTM values stored in 
 * the cookie if any exist.
 *
 ***************************************************************************/


/************************** CONFIGURATION OPTIONS **************************/


/* MARKETO UTM FIELDS:
 * Input field names for your Marketo instance in the right column below.
 * If you're not sure what to put here, export all fields from within your 
 * Marketo instance under Admin > Field Management > Export Field Names 
 * (requires admin access) and use your UTM fields' SOAP API Name from the 
 * downloaded Fields.xls file. This is case sensitive! */

var dpi_marketoUtmOrigFields = {
	'utm_medium'	: 'utmorigmedium', // original medium value, not overwritten
	'utm_source'	: 'utmorigsource' // original source value, not overwritten
};

var dpi_marketoUtmFields = {
	'utm_medium'	: 'utmmedium',
	'utm_source'	: 'utmsource',
	'utm_campaign'	: 'utmcampaign',
	'utm_content'	: 'utmcontent'
};


/* DOMAIN NAME (optional):
 * Optionally, set your primary domain name so that the cookie can be read on
 * your main website and across all subdomains. Will auto-detect current 
 * domain if unchanged. */

var dpi_cookieDomain = 'oreilly.com';


/*********************** DO NOT EDIT BELOW THIS LINE ************************/


/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));



/***************************** CUSTOM FUNCTIONS *****************************/


// Retrieve a named value from query string
function dpi_getQueryStringValue(key) {
	key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
	var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
	return match && decodeURIComponent(match[1]);
}

// Get domain name
function dpi_getDomain() {
	var regex = /[\w-]+.(com|net|org|co.uk|co|us)/ig;
	var url = location.hostname;
	return url.match(regex)[0];
}

/************************ MARKETO UTM TRACKING LOGIC ************************/


// Create empty objects for UTM parameters
var dpi_queryStringUtmVals = {};
var dpi_cookieUtmVals = {};

// Set cookie domain from current domain if default is not changed
if(dpi_cookieDomain == 'example.com') {
	dpi_cookieDomain = dpi_getDomain();
}

// Retrieve all UTM query string params and values, store to object
for( property in dpi_marketoUtmFields ) {
	if(dpi_getQueryStringValue(property) && dpi_getQueryStringValue(property).length > 0) {
		dpi_queryStringUtmVals[dpi_marketoUtmFields[property]] = dpi_getQueryStringValue(property);
	}
}

// If we have any UTM query string values...
if(Object.keys(dpi_queryStringUtmVals).length > 0) {	
	// Then create or update the cookie with whatever query string variables are available
	Cookies.set('dpi_utmVals', dpi_queryStringUtmVals , { expires: 3652, domain: '.'+dpi_cookieDomain });
}

// Is there a cookie set with UTM values?
if( typeof Cookies.getJSON('dpi_utmVals') != "undefined" ) {
	// Yes, the cookie is set
	
	// If no cookie is set for ORIGINAL medium and source...
	if( typeof Cookies.getJSON('dpi_utmOrigVals') === "undefined" ) {
		// ...then create cookie to permanently stor medium and source vals
		dpi_cookieUtmVals[dpi_marketoUtmOrigFields.utm_medium] = Cookies.getJSON('dpi_utmVals')[dpi_marketoUtmFields.utm_medium];
		dpi_cookieUtmVals[dpi_marketoUtmOrigFields.utm_source] = Cookies.getJSON('dpi_utmVals')[dpi_marketoUtmFields.utm_source];
		Cookies.set('dpi_utmOrigVals', dpi_cookieUtmVals, { expires: 3652, domain: '.'+dpi_cookieDomain } );
	}

	// Wait two seconds to make sure MktoForms2 library has had time to load
	setTimeout(function(){
		// Is Marketo's Forms 2.0 API library loaded?
		if ( typeof MktoForms2 != "undefined") {
			// Yes, it is loaded
			// If/when a Marketo form says it's ready...
			MktoForms2.whenReady(function (form){
				// ...then add hidden UTM fields to the form
				form.addHiddenFields( Cookies.getJSON('dpi_utmVals'), { domain: '.'+dpi_cookieDomain } );
				form.addHiddenFields( Cookies.getJSON('dpi_utmOrigVals'), { domain: '.'+dpi_cookieDomain } );
				// On successful form submission, delete the cookie
				form.onSuccess(function(form){
					Cookies.remove('dpi_utmVals', { domain: '.'+dpi_cookieDomain } );
				});
			});
		}
	}, 2000); // two-second delay
}