if("serviceWorker" in navigator){
    navigator.serviceWorker.register('sscript.js').then((registration)=>{
        
        console.log("service worker registered");
        
    }).catch((err)=>{
        console.log(err);
        
    })

}else{
    console.log("no service worker")
}