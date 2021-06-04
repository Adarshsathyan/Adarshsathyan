self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                
                './',
                'css/scss-files.txt',
                'css/style-green.css',
                'css/style-orange.css',
                'css/style-purple.css',
                'css/style-red.css',
                'css/style.css',
                'img/Adarsh.jpg',
                'img/goauto.jpg',
                'img/jobon.jpg',
                'img/stayon.jpg',
                'img/overlay-bg.jpg',
                'img/profile.jpg',
                'js/main.js'
                
            ])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
       
        caches.match(e.request).then((response)=>{
            console.log(e.request);
            console.log("reached");
            return response || fetch(e.request)
        }).catch(err=>{
            console.log(err);
        })
    )
})