function validate() {
    var name = document.getElementById("Textname").value;

    if (name.length == 0) {
        sp1.innerHTML = "required name";

    }
    else {
        document.getElementById("Textname").innerHTML = "";
    }
}