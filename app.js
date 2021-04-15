const colorBox1 = document.querySelector("#c1");
const colorBox2 = document.querySelector("#c2");
const colorBox3 = document.querySelector("#c3");
const container = document.querySelector(".colorChange");
const body = document.querySelector(".body")
var selectedColor;

colorBox1.addEventListener("dragstart", dragStart);
colorBox1.addEventListener("dragend", dragEnd);

colorBox2.addEventListener("dragstart", dragStart);
colorBox2.addEventListener("dragend", dragEnd);

colorBox3.addEventListener("dragstart", dragStart);
colorBox3.addEventListener("dragend", dragEnd);


function dragStart() {
    console.log("Drag Started");
    selectedColor = this.id;
    this.className += " tenu"
}

function dragEnd() {
    console.log("Drag Stoped");
}

container.addEventListener("dragover", dragOver);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);
container.addEventListener("drop", dragDrop);

function dragOver(e){
    e.preventDefault();
    console.log("DragOver");
}

function dragEnter(e) {
    e.preventDefault();
    console.log("Drag Enter");
}

function dragLeave() {
    console.log("Drag Leaved");
}

function dragDrop() {
    console.log("Drag Dropped");

    if (selectedColor === "c1") {
        this.id = ("colorChangePurple");
        body.id = ("purpleBody");
    } else if (selectedColor === "c2") {
        this.id = ("colorChangeBlue");
        body.id = ("blueBody");
    } else if (selectedColor === "c3") {
        this.id = ("colorChangePink");
        body.id = ("pinkBody")
    }
}
