const CACHE='ayo-movil-v2';
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(['./','./index.html','./app.js']); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var url=e.request.url;
  if(e.request.method!=='GET') return;
  if(url.indexOf('upload.wikimedia.org')!==-1 || url.indexOf('centrodemedioslibres.org')!==-1){
    e.respondWith(fetch(e.request).catch(function(){ return caches.match(e.request); }));
    return;
  }
  e.respondWith(
    fetch(e.request).then(function(res){
      if(res.ok && url.indexOf(self.location.origin)===0){
        var copy=res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      }
      return res;
    }).catch(function(){ return caches.match(e.request); })
  );
});
