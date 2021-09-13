var cL="en_us"
var temp={}
var px={
  userData:{
    installPX:function(){
      for(temp.x in r.install.firstInstall){localStorage.setItem(r.install.firstInstall[temp.x][0],r.install.firstInstall[temp.x][1])}
      console.debug("install done")
    }
  },
  ui:{
    reloadUiAssets:function(){
      //Reloads UI Assets
      document.title=s[cL]["paintx_title"]
      $("#fv").setAttribute("href",r.meta.icon.favicon)

    },
    setTitle:function(fileMode,fName=)
  }
}
try{localStorage.getItem("debug_flags")["00"]}catch(err){console.warn("not installed.",err);px.userData.installPX()}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}else{
  console.error("ERR:PX003")
  alert(`${s[cL]["error_occur"]}\nCODE=PX003\nNAME=${s[cL]["error_px003_name"]}\nDESC=${s[cL]["error_px003_desc"]}`)
}
px.ui.reloadUiAssets()
