const notepadEl = document.getElementById("notepad");
const saveContBtnEl = document.getElementById("saveContentBtn");
const pEl = document.querySelector("p");

let currContSaveProperty;

notepadEl.value = "";

notepadEl.addEventListener("keydown", () => {
    currContSaveProperty = 0;
    console.log(currContSaveProperty)
});

saveContBtnEl.addEventListener("click", () => {
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

        currContSaveProperty = 1;
    }
});

addEventListener("beforeunload", e => {
    console.log(currContSaveProperty)
    if (notepadEl.value.length > 0 &&
        currContSaveProperty === 0) {
        e.preventDefault();
    }
});