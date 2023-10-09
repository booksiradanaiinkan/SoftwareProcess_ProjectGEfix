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
        var commentContainer = document.getElementById("commentContainer");
        
        // ไม่ซ่อนคอนเทนเนอร์แชท
        // แค่ปิด pop-up
        document.getElementById("popup").style.display = "none";
    } 
// JavaScript
const slider = document.querySelector('.slider');
let counter = 0;
let autoSlideInterval;

// ฟังก์ชันเลื่อน Slide
function slide() {
    if (counter < 0) {
        counter = 2; // หากคลิก "ก่อนหน้า" จากหน้าแรกให้ไปที่รูปภาพสุดท้าย
    }
    if (counter > 2) {
        counter = 0; // หากคลิก "ถัดไป" จากหน้าสุดท้ายให้ไปที่รูปภาพแรก
    }
    slider.style.transform = `translateX(-${counter * 100}%)`;

    // เพิ่มตรวจสอบเมื่อเลื่อนมาถึงรูปสุดท้าย
    if (counter === 2) {
        // หากเลื่อนมาถึงรูปสุดท้ายให้กลับไปที่รูปแรก
        setTimeout(() => {
            counter = 0;
            slider.style.transition = 'none'; // ปิดการเปลี่ยนแปลงตำแหน่งด้วย transition
            slider.style.transform = `translateX(-${counter * 100}%)`;
            setTimeout(() => {
                slider.style.transition = ''; // เปิดการเปลี่ยนแปลงตำแหน่งด้วย transition
            }, 10);
        }, 500); // รอเวลาเพื่อให้รูปสุดท้ายแสดงเป็นเวลาสั้นๆ ก่อนกลับไปที่รูปแรก
    }
}
// เริ่มเลื่อน Slide อัตโนมัติ
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        counter++;
        slide();
    }, 3000); // เลื่อน Slide ทุก 5 วินาที (5000 มิลลิวินาที)
}

// หยุดเลื่อน Slide อัตโนมัติ
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// ฟังก์ชันเลื่อน Slide
function slide() {
    if (counter < 0) {
        counter = 2; // หากคลิก "ก่อนหน้า" จากหน้าแรกให้ไปที่รูปภาพสุดท้าย
    }
    if (counter > 2) {
        counter = 0; // หากคลิก "ถัดไป" จากหน้าสุดท้ายให้ไปที่รูปภาพแรก
    }
    slider.style.transform = `translateX(-${counter * 100}%)`;
}

// เริ่มเลื่อน Slide อัตโนมัติเมื่อโหลดหน้าเว็บ
startAutoSlide();
