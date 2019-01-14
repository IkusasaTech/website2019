var cacheName = 'Ikusasa';
var filesToCache = [
    './',
    'index.html',
    'about.html',
    'blog.html',
    'consulting.html',
    'contact.html',
    'portfolio.html',
    'training.html',
    '/css/bootstrap-theme.css',
    '/css/bootstrap.min.css',
    '/css/camera.css',
    '/css/font-awesome.min.css',
    '/css/isotope.css',
    '/css/style.css',
    '/font/fontawesome-webfont.eot',
    '/font/fontawesome-webfont.svg',
    '/font/fontawesome-webfont.ttf',
    '/font/fontawesome-webfont.woff',
    '/images/portfolio/ikusaasa-learners1.jpg',
    '/images/portfolio/ikusaasa-learners2.jpg',
    '/images/portfolio/ikusaasa7.jpg',
    '/images/portfolio/ikusasa1.jpg',
    '/images/portfolio/ikusasa2.jpg',
    '/images/portfolio/ikusasa3.jpg',
    '/images/portfolio/ikusasa4.jpg',
    '/images/portfolio/ikusasa5.jpg',
    '/images/portfolio/ikusasa6.jpg',
    '/images/portfolio/ikusasa8.jpg',
    '/images/portfolio/ikusasa9.jpg',
    '/images/portfolio/ikusasa10.jpg',
    '/images/portfolio/ikusasa11.jpg',
    '/images/portfolio/ikusasa12.jpg',
    '/images/portfolio/ikusasa13.jpg',
    '/images/portfolio/ikusasa14.jpg',
    '/images/portfolio/ikusasa15.jpg',
    '/images/portfolio/ikusasa16.jpg',
    '/images/portfolio/ikusasa17.jpg',
    '/images/portfolio/ikusasa18.jpg',
    '/images/portfolio/ikusasa19.jpg',
    '/images/portfolio/ikusasa20.jpg',
    '/images/portfolio/ikusasa21.jpg',
    '/images/portfolio/ikusasa22.jpg',
    '/images/portfolio/ikusasa23.jpg',
    '/images/portfolio/ikusasa24.jpg',
    '/images/portfolio/ikusasa25.jpg',
    '/images/portfolio/ikusasa26.jpg',
    '/images/portfolio/ikusasa27.jpg',
    '/images/portfolio/ikusasa29.jpg',
    '/images/portfolio/ikusasa30.jpg',
    '/images/portfolio/img1.jpg',
    '/images/portfolio/img2.jpg',
    '/images/portfolio/img3.jpg',
    '/images/portfolio/img4.jpg',
    '/images/portfolio/img5.jpg',
    '/images/portfolio/img6.jpg',
    '/images/portfolio/img7.jpg',
    '/images/portfolio/img8.jpg',
    '/images/portfolio/img9.jpg',
    '/images/portfolio/induction1.jpg',
    '/images/portfolio/induction2.jpg',
    '/images/portfolio/induction3.jpg',
    '/images/portfolio/induction4.jpg',
    '/images/portfolio/induction5.jpg',
    '/images/portfolio/induction6.jpg',
    '/images/portfolio/induction7.jpg',
    '/images/portfolio/induction8.jpg',
    '/images/portfolio/induction9.jpg',
    '/images/portfolio/induction10.jpg',
    '/images/portfolio/induction11.jpg',
    '/images/portfolio/induction12.jpg',
    '/images/portfolio/induction13.jpg',
    '/images/portfolio/induction14.jpg',
    '/images/portfolio/induction15.jpg',
    '/images/portfolio/induction16.jpg',
    '/images/portfolio/induction17.jpg',
    '/images/portfolio/induction18.jpg',
    '/images/portfolio/induction19.jpg',
    '/images/portfolio/induction20.jpg',
    '/images/portfolio/induction21.jpg',
    '/images/portfolio/induction22.jpg',
    '/images/portfolio/induction23.jpg',
    '/images/portfolio/induction24.jpg',
    '/images/portfolio/induction25.jpg',
    '/images/portfolio/induction26.jpg',
    '/images/portfolio/induction27.jpg',
    '/images/portfolio/induction28.jpg',
    '/images/portfolio/induction29.jpg',
    '/images/portfolio/induction20.jpg',
    '/images/portfolio/induction31.jpg',
    '/images/portfolio/induction32.jpg',
    '/images/portfolio/induction33.jpg',
    '/images/portfolio/induction34.jpg',
    '/images/portfolio/induction35.jpg',
    '/images/portfolio/induction36.jpg',
    '/images/portfolio/induction37.jpg',
    '/images/portfolio/induction38.jpg',
    '/images/portfolio/induction40.jpg',
    '/images/portfolio/induction41.jpg',
    '/images/portfolio/induction42.jpg',
    '/images/portfolio/induction43.jpg',
    '/images/portfolio/induction44.jpg',
    '/images/portfolio/induction45.jpg',
    '/images/portfolio/induction46.jpg',
    '/images/portfolio/induction47.jpg',
    '/images/portfolio/induction48.jpg',
    '/images/portfolio/induction49.jpg',
    '/images/portfolio/other1.jpg',
    '/images/portfolio/other2.jpg',
    '/images/portfolio/other3.jpg',
    '/images/portfolio/other4.jpg',
    '/images/portfolio/other5.jpg',
    '/images/portfolio/other6.jpg',
    '/images/portfolio/other7.jpg',
    '/images/portfolio/other8.jpg',
    '/images/portfolio/other9.jpg',
    '/images/slides/ikusasa-laptop.jpg',
    '/images/slides/induction.jpg',
    '/images/slides/SAM_0755.jpg',
    '/images/slides/students.jpg',
    '/js/bootstrap.min.js',
    '/js/camera.min.js',
    '/js/emailValidation.js',
    '/js/google-map.js',
    '/js/html5shiv.js',
    '/js/jquery.cslider.js'
];


self.addEventListener('install',(e) => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache)
          	.then(() => {
              console.log('All files are cached');
              return self.skipWaiting();
            })
            .catch((error) => {
              console.error('Failed to catch', error);
            })
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(cacheName).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                var fetchPromise = fetch(event.request).then(function(networkResponse) {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        })
    );
});