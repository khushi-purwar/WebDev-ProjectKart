( function() {
	
	let recaptchaWidgets = [];
	recaptchaCallback = function() {
		
		let forms = document.getElementsByTagName( 'form' );
		let pattern = /(^|\s)g-recaptcha(\s|$)/;

		for ( let i = 0; i < forms.length; i++ ) {
			let recaptchas = forms[ i ].getElementsByClassName( 'wpcf7-recaptcha' );
			
			for ( let j = 0; j < recaptchas.length; j++ ) {
				let sitekey = recaptchas[ j ].getAttribute( 'data-sitekey' );

				if ( recaptchas[ j ].className && recaptchas[ j ].className.match( pattern ) && sitekey ) {
					let params = {
						'sitekey': sitekey,
						'type': recaptchas[ j ].getAttribute( 'data-type' ),
						'size': recaptchas[ j ].getAttribute( 'data-size' ),
						'theme': recaptchas[ j ].getAttribute( 'data-theme' ),
						'align': recaptchas[ j ].getAttribute( 'data-align' ),
						'badge': recaptchas[ j ].getAttribute( 'data-badge' ),
						'tabindex': recaptchas[ j ].getAttribute( 'data-tabindex' )
					};

					let callback = recaptchas[ j ].getAttribute( 'data-callback' );

					if ( callback && 'function' == typeof window[ callback ] ) {
						params[ 'callback' ] = window[ callback ];
					}

					let expired_callback = recaptchas[ j ].getAttribute( 'data-expired-callback' );

					if ( expired_callback && 'function' == typeof window[ expired_callback ] ) {
						params[ 'expired-callback' ] = window[ expired_callback ];
					}

					let widget_id = grecaptcha.render( recaptchas[ j ], params );
					recaptchaWidgets.push( widget_id );
					break;
				}
			}
		}
	};

	/**
	 * Reset the reCaptcha when Contact Form 7 gives us:
	 *  - Spam
	 *  - Success
	 *  - Fail
	 * 
	 * @return void
	 */
	document.addEventListener( 'wpcf7submit', function( event ) {
		switch ( event.detail.status ) {
			case 'spam':
			case 'mail_sent':
			case 'mail_failed':
				for ( let i = 0; i < recaptchaWidgets.length; i++ ) {
					grecaptcha.reset( recaptchaWidgets[ i ] );
				}
		}
	}, false );
	
} )();