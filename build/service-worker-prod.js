(function() {
    'use strict';

    const { hostname } = window.location;

    var isLocalhost = Boolean(hostname === 'localhost' || hostname === '[::1]' || hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

    window.addEventListener('load', function() {
        if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
            navigator.serviceWorker.register('service-worker.js').then(function(registration) {
                registration.onupdatefound = function() {
                    if (navigator.serviceWorker.controller) {
                        var installingWorker = registration.installing;

                        installingWorker.onstatechange = function() {
                            switch (installingWorker.state) {
                                case 'installed':
                                    break;
                                case 'redundant':
                                    throw new Error('The installing ' + 'service worker became redundant.');
                            }
                        };
                    }
                };
            }).catch(function(e) {
                console.error('Error during service worker registration:', e);
            });
        }
    });
})();
