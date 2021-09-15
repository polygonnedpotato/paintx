var cL="en_us"
var temp={}
var px={
  userData:{
    installPX:function(){
      for(temp.x in r.install.firstInstall){localStorage.setItem(r.install.firstInstall[temp.x][0],r.install.firstInstall[temp.x][1])}
      console.debug("install done")
    }
  },
  doc:{
    canvas:document.getElementById("cv")
  },
  ui:{
    setTitle:function(fileMode,fName=localStorage.getItem("debug_flags")["01"]){
      if(fileMode==false){document.title=s[cL]["paintx_title"]}else{document.title=localStorage.getItem("debug_flags")["01"]+" -- "+s[cL]["paintx_title"]}
    },
    reloadUiAssets:function(){
      //Reloads UI Assets
      document.title=s[cL]["paintx_title"]
      $("#fv").setAttribute("href",r.meta.icon.favicon)
      
    }
  }
}
try{localStorage.getItem("debug_flags")["00"]}catch(err){console.warn("not installed.",err);px.userData.installPX()}
if ('serviceWorker' in navigator &&(location.hash!="#nosw")) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}else if(location.hash=="#nosw"){
  console.log("service worker manually disabled.")
}{
  console.error("ERR:PX003")
  alert(`${s[cL]["error_occur"]}\nCODE=PX003\nNAME=${s[cL]["error_px003_name"]}\nDESC=${s[cL]["error_px003_desc"]}`)
}
px.ui.reloadUiAssets()
