window.onload = function() {
    //set eventhandlers
    document.getElementById("romInput").addEventListener('change', fileLoaded);

    //Populate color DIVs
    addPaletteRow();
}

function fileLoaded() {
    let reader = new FileReader();
    reader.onload = function() {
        let arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);
        
        console.log(binaryString);
    }
    reader.readAsArrayBuffer(this.files[0]);
}


function addPaletteRow() {
    let stackDiv = document.getElementById("stack");

    let paletteDiv = document.createElement("div");
    paletteDiv.classList.add("center");
    paletteDiv.style.display = "flex";

    for (let i = 0; i < 16; i++) {
        let colorDiv = document.createElement('div');
        colorDiv.classList.add("card");
        colorDiv.classList.add("color-selector");

        paletteDiv.append(colorDiv);
    }

    stackDiv.insertBefore(paletteDiv, document.getElementById("addRow"));
}


function toggleDarkMode() {
    let darkMode = document.getElementById("htmlDocument").classList.toggle("dark");

    let element = document.getElementById("darkModeIcon");
    if (darkMode) {
        element.innerHTML = "light_mode";
        return;
    }
    element.innerHTML = "dark_mode";
}


function openFileDialog() {
    document.getElementById("romInput").click();
}


currentOpenDialog = null;
function saveFileDialog(sender) {
    if (currentOpenDialog == sender) return;
    if (currentOpenDialog != null) {
        closeSaveDialog();
        return;
    }

    sender.classList.add("file-download");
    sender.classList.remove("accent");
    currentOpenDialog = sender;
}
function closeSaveDialog() {
    if (currentOpenDialog == null) return;
    currentOpenDialog.classList.remove("file-download");
    currentOpenDialog.classList.add("accent");
    currentOpenDialog = null;
}