let uploadInput = function UploadInput(elem) {
  let domElem;
  let fileContainer = {};
  let that = this;
  let fileDocumentList = document.createElement("div");
  fileDocumentList.classList.add('file-list');
  return {
    init: function Init() {
      domElem = document.querySelector(elem);
      if (!domElem) {
        console.error("lol, no such elem");
        return;
      }
      domElem.parentNode.insertBefore(fileDocumentList, domElem.nextSibling);
      domElem.addEventListener("change", this.onFilesAdd);
      fileDocumentList.addEventListener("click", this.onFileDelete);
    },
    onFilesAdd: function OnFilesAdd(e) {
      let eventFiles = this.files;
      let i = 0;
      for (i; i < eventFiles.length; ++i) {
        fileContainer[eventFiles.item(i).name] = eventFiles.item(i);
        let newFileRecord = document.createElement("div");
        newFileRecord.className = "file-record";
        newFileRecord.dataset.name = eventFiles.item(i).name;
        newFileRecord.innerHTML =
          eventFiles.item(i).name + ' <span class="file-remove"></span>';

        fileDocumentList.appendChild(newFileRecord);
      }
    },
    onFileDelete: function OnFileDelete(e) {
      if (e.target.className != "file-remove") {
        return;
      }
      delete fileContainer[e.target.parentNode.dataset.name];
      e.target.parentNode.remove();
    },
    getFileList: function GetFileList() {
      let fileList = [];
      Object.keys(fileContainer).forEach(function makeFileList(key) {
        fileList.push(fileContainer[key]);
      });
      return fileList;
    },
  };
};

let uploadControl = uploadInput('#myFile');
uploadControl.init();
