// Browser Download function (input element deletion):
function downloadSTR(obj, exportName) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
//create the dom element & set attributes
function domInput(modelname,targetid,callback) {
    let funcstr = '';
    if (callback !== undefined) {
        funcstr = ','+callback.toString();
    }
    let downloadAnchorNode = document.createElement('input');
    downloadAnchorNode.setAttribute("type", "file");
    downloadAnchorNode.setAttribute("id", "upload");
    downloadAnchorNode.setAttribute("onChange", "clickedUpload("+modelname+funcstr+")");
    try {
        if (targetid !== undefined) {
            document.getElementById(targetid).appendChild(downloadAnchorNode);
        } else {
            document.body.appendChild(downloadAnchorNode);
        }
    } catch(err) {
        if (err) {
            window.addEventListener('load', function() {
                domInput(modelname,targetid,callback);
            })
        }

    }
}
// create the html element to upload the dannData.json
function upload(modelname,targetid,callback) {
    try {
        domInput(modelname,targetid,callback);
    } catch(err) {
        console.log(err)
    }

}
// function called when the html element is clicked
function clickedUpload(nn,callback) {
    let callfunc = eval(callback);
    let element = document.getElementById('upload');
    let file = element.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let newNN;
    reader.onload = function() {
        if (reader.result[0] == '{') {
            let xdata =  JSON.parse(reader.result);
            newNN = xdata;
            nn.applyToModel(newNN);
            if (callfunc !== undefined) {
                callfunc(false);
            } else {
                console.log('Succesfully loaded the file.');
            }
        } else {
            if (callfunc !== undefined) {
                callfunc(true);
            } else {
                console.log('Error loading the file.');
            }
        }

    };
    reader.onerror = function() {
        if (callfunc !== undefined) {
            callfunc(true);
        } else {
            console.log(reader.error);
        }
    };
    element.remove();
}
