var images = document.querySelectorAll(".image");

  // เพิ่ม event listener สำหรับแต่ละรูปภาพ
  images.forEach(function(image) {
    image.addEventListener("click", function() {

      // ดึงลิงค์จากค่า data-link
      var link = this.getAttribute("data-link");
      // เปลี่ยนหน้าไปยังลิงค์ที่ระบุ
      window.location.href = link;
    });
  }); 
  var images = document.querySelectorAll(".image");

  // เพิ่ม event listener สำหรับแต่ละรูปภาพ
  images.forEach(function(image) {
    image.addEventListener("mouseenter", function() {
      // เปลี่ยนสีของรูปภาพเป็นสีขาวดำ (grayscale)
      this.style.filter = "grayscale(100%)";
    });

    image.addEventListener("mouseleave", function() {
      // เรียกคืนสีเดิมของรูปภาพ
      this.style.filter = "none";
    });
  });  
    //JavaScript สำหรับเปิด Pop-up อัตโนมัติ 
    openPopup(); 

    function openPopup() {
        document.getElementById("popup").style.display = "block"; 
    } 

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
