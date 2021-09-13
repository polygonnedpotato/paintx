/* TODO: Reincorperate this into app.
var vfs = {}
window.indexedDB = window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB; //imports indexedDB
window.IDBTransaction = window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction||{ READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;
if (!window.indexedDB) {
  debug.logging(3, nm, "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
} else {
  var db;
  vfsdb = window.indexedDB.open("VirtualFileSystem", 3);
  vfsdb.onsuccess = function (event) { db = event.target.result };
  vfsdb.onupgradeneeded = function (event) {
    // Save the IDBDatabase interface
    var db = event.target.result;
    // Create an objectStore for this database
    var userfs = db.createObjectStore("UserFS", { keyPath: "dir" });
    vfs.saveToFile = function (fsdir, fsdata=null) {
      var tempvfs = [{ dir: fsdir, data: btoa(fsdata) }]
      var trsct = db.transaction(["UserFS"], "readwrite")
      trsct.oncomplete = function (event) {
        //
      };
      trsct.onerror = function (event) {
        //
      };
      var objectStore = trsct.objectStore("UserFS");
      tempvfs.forEach(function (file) {
        var vfsrequest = objectStore.put(customer);
        vfsrequest.onsuccess=function(event){
          debug.logging(4, nm+".saveToFile(\""+fsdir+"\",\""+fsdata+"\")", "Saved \"" + tempvfs.dir + "\" to vfs")
        }
        vfsrequest.onerror=function(event){
          debug.logging(2, nm+".saveToFile(\""+fsdir+"\",\""+fsdata+"\")", "Couldn't save \"" + tempvfs.dir + "\" to vfs")
        }
      })
    }
    vfs.getFile=function(fsdir){
      db.transaction("UserFS").objectStore("UserFS").get(fsdir).onsuccess = function(event) {
        return atob(event.target.result.data);
      };
    }
    vfs.deleteFile=function(fsdir){db.transaction(["UserFS"],"readwrite").objectStore("UserFS").delete(fsdir)}
  }
};
*/
var idb={}
window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction||{READ_WRITE:"readwrite"};window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;
if(!window.indexedDB){
  console.error("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}else{
  var dbz;
  imgstore=window.indexedDB.open("ImageStorage",3);
  imgstore.onsuccess=function(event){dbz=event.target.result};
  imgstore.onupgradeneeded=function(event){
    // Save the IDBDatabase interface
    var dbz = event.target.result;
    // Create an objectStore for this database
    var savedimg=dbz.createObjectStore("SavedImages",{keyPath:"name"});
    idb.saveImage=function (imgname, imgdata=null) {
      var tempa = [{ name: imgname, data: btoa(imgdata) }]
      var trsct = dbz.transaction(["SavedImages"],"readwrite")
      trsct.oncomplete = function (event) {
        //
      };
      trsct.onerror = function (event) {
        //
      };
      var objectStore = trsct.objectStore("SavedImages");
      tempa.forEach(function(data) {
        var idbrequest = objectStore.put(dara);
        idbrequest.onsuccess=function(event){
          //
        }
        idbrequest.onerror=function(event){
          //
        }
      })
    }
    idb.getImg=function(img){
      dbz.transaction("SavedImages").objectStore("SavedImages").get(img).onsuccess = function(event) {
        return atob(event.target.result.data);
      };
    }
    idb.deleteImg=function(img){dbz.transaction(["SavedImages"],"readwrite").objectStore("SavedImages").delete(img)}
}}