var STATIC_CACHE_NAME = "recipe-pwa";
var DYNAMIC_CACHE_NAME = "dynamic-recipe-pwa";
var urlsToCache = ["/", "/search", "/aboutus", "/profile"];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
  if (!navigator.onLine) {
    if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      event.waitUntil(
        self.registration.showNotification("Internet", {
          body: "internet not working",
          icon: "logo.png",
        })
      );
    }
  }
  
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["recipe-pwa"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//Getting Location


/*

self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;

  console.log(notification);

  if (action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  } else {
    console.log(action);
    event.waitUntil(
      clients.matchAll()
        .then(function(clis) {
          var client = clis.find(function(c) {
            return c.visibilityState === 'visible';
          });

          if (client !== undefined) {
            client.navigate(notification.data.url);
            client.focus();
          } else {
            clients.openWindow(notification.data.url);
          }
          notification.close();
        })
    );
  }
});

self.addEventListener('notificationclose', function(event) {
  console.log('Notification was closed', event);
});

self.addEventListener('push', function(event) {
  console.log('Push Notification received', event);

  var data = {title: 'New!', content: 'Something new happened!', openUrl: '/'};

  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  var options = {
    body: data.content,
    icon: '/src/images/icons/app-icon-96x96.png',
    badge: '/src/images/icons/app-icon-96x96.png',
    data: {
      url: data.openUrl
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});


if ( navigator.geolocation ) { 
    
        navigator.geolocation.getCurrentPosition( setCurrentPosition, positionError, { 
            enableHighAccuracy: false, 
            timeout: 15000, 
            maximumAge: 0 
        } );
    } 
    
    function setCurrentPosition( position ) { 
    
        document.querySelector( '.accuracy' ).innerHTML = position.coords.accuracy; 
        document.querySelector( '.altitude' ).innerHTML = position.coords.altitude; 
        document.querySelector( '.altitudeAccuracy' ).innerHTML = position.coords.altitudeAccuracy; 
        document.querySelector( '.heading' ).innerHTML = position.coords.heading; 
        document.querySelector( '.latitude' ).innerHTML = position.coords.latitude; 
        document.querySelector( '.longitude' ).innerHTML = position.coords.longitude; 
        document.querySelector( '.speed' ).innerHTML = position.coords.speed;
    }


   function positionError( error ) { 
    
        switch ( error.code ) { 
            case error.PERMISSION_DENIED: 
                
                console.error( "User denied the request for Geolocation." ); 
                break; 
    
            case error.POSITION_UNAVAILABLE: 
    
                console.error( "Location information is unavailable." ); 
                break; 
    
            case error.TIMEOUT: 
    
                console.error( "The request to get user location timed out." ); 
                break; 
    
            case error.UNKNOWN_ERROR: 
    
                console.error( "An unknown error occurred." ); 
                break; 
        }
    }
*/
