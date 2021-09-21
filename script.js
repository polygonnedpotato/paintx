document.getElementById("lw").hidden=false;document.getElementById("lwp").value=0
var cL="en_us"
var temp={debug:{}}
var px={
  dbg:{
    get flags(){
      temp.debug.unparsedFlags=localStorage.getItem("debug_flags");
      temp.debug.parsedFlags=JSON.parse(temp.debug.parsedFlags);
      return temp.debug.parsedFlags
    },
    showDevInfo:function(id){
      switch(id){
        case "00":
          alert(r.meta.dev.todo)
          break
        case "01":
          alert(r.meta.dev.gh)
          break
      }
    }
  },
  userData:{
    installPX:function(){
      for(temp.x in r.install.firstInstall){localStorage.setItem(r.install.firstInstall[temp.x][0],r.install.firstInstall[temp.x][1])}
      console.debug("install done")
    }
  },
  ui:{
    fw:{
      aboutUi:{
        show:function(){alert(s[cL]["paintx_title"]+"\n"+r.meta.version)}
      },
      loader:{
        div:document.getElementById("lw"),
        text:document.getElementById("lwt"),
        progress:document.getElementById("lwp")
      },
    },
    setTitle:function(fileMode,fName=px.dbg.flags["01"]){
      if(fileMode==false){document.title=s[cL]["paintx_title"]}else{document.title=fName+" -- "+s[cL]["paintx_title"]}
    },
    reloadUiAssets:function(){
      //Reloads UI Assets
      console.debug("reloading UI...")
      document.title=s[cL]["paintx_title"]
      px.ui.fw.loader.text.innerText=s[cL]["misc_loading"]
      document.getElementById("fv").href=r.meta.icon.favicon
      document.getElementById("cv").width=window.innerWidth
      document.getElementById("cv").height=window.innerHeight
      console.debug("reloaded UI.")
    },
  },
  doc:{
    canvas:document.getElementById("cv").getContext('2d'),
    resetCanvas:function(){px.doc.canvas=document.getElementById("cv").getContext('2d')},
    draw:{
      rectangle:function(x,y,width,height,fill=true,color='green'){
        if(fill==true){
          px.doc.canvas.fillStyle=color;px.doc.canvas.fillRect(x,y,width,height)
        }else{
          px.doc.canvas.strokeRect(x,y,width,height)
        }
        
      }
    },
    file:{
      new:function(){
        px.doc.resetCanvas()
        px.ui.setTitle(true,"Untitled")
      }
    }
  },
}
try{px.dbg.flags["00"]}catch(err){console.warn("not installed.",err);px.userData.installPX()}
px.ui.fw.loader.progress.value=65
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
}else{
  console.error("ERR:PX003")
  alert(`${s[cL]["error_occur"]}\nCODE=PX003\nNAME=${s[cL]["error_px003_name"]}\nDESC=${s[cL]["error_px003_desc"]}`)
}
px.ui.fw.loader.progress.value=70
window.addEventListener('resize',px.ui.reloadUiAssets,false);console.debug("new event listener: 'resize', which executes 'px.ui.reloadUiAssets'")
px.ui.fw.loader.progress.value=80
px.ui.reloadUiAssets()
px.ui.fw.loader.progress.value=90
if(r.meta.dev.todo!=""){
  console.debug(s[cL]["debug_todo"]+"\n"+r.meta.dev.todo)
}
px.ui.fw.loader.progress.value=100
px.ui.fw.loader.div.hidden=true