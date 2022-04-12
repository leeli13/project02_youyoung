$(function(){

     $('.iframeBox').iframeHeight({

       resizeMaxTry         : 2,
       resizeWaitTime       : 300,
       minimumHeight        : 100,
       defaultHeight        : 100,
       heightOffset         : 90,
       exceptPages          : "",
       debugMode            : false,
       visibilitybeforeload : true,
       blockCrossDomain     : true,
       externalHeightName   : "bodyHeight",
       onMessageFunctionName: "getHeight",
       domainName           : "*",
       watcher              : true,
       watcherTime          : 400

     });

});


