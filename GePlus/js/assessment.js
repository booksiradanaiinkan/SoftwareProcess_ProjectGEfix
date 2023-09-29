// JavaScript สำหรับ Popup
function showPopup() {
    var popup = document.getElementById("assessmentPopup");
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("assessmentPopup");
    popup.style.display = "none";
}

// เรียกใช้ showPopup เมื่อคลิกปุ่มประเมิน
function rate() {
    showPopup();
}
