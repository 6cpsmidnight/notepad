const notepadEl = document.getElementById("notepad");
const saveContBtnEl = document.getElementById("saveContentBtn");
const pEl = document.querySelector("p");

notepadEl.value = "";

saveContBtnEl.addEventListener("click", function () {
    const notepadContent = notepadEl.value;
    const blob = new Blob([notepadContent], {
        type: "text/plain"
    });

    const aEl = document.createElement("a");
    aEl.href = URL.createObjectURL(blob);
    let fileName = prompt("File name:");
    if (fileName === null || fileName.length === 0) {
        alert("Insert file name")
    } else {
        aEl.download = `${fileName}.txt`;
        aEl.style.display = "none";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }
});