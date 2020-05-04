function closeMenu() {
    document.getElementById("menu-btn").checked = false;
}

function goForm() {
    document.getElementById("block-form").style.display = "block";
    document.getElementById("block-waiting").style.display = "none";
    document.getElementById("block-result").style.display = "none";
}

goForm();

function goCheck() {
    document.getElementById("block-form").style.display = "none";
    document.getElementById("block-waiting").style.display = "block";
    document.getElementById("block-result").style.display = "none";
    setTimeout(function () {
        document.getElementById("block-form").style.display = "none";
        document.getElementById("block-waiting").style.display = "none";
        document.getElementById("block-result").style.display = "block";
    }, 3000);
}
