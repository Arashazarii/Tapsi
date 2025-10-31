const navBtn = document.querySelector(".nav-btn");
const mobileMenu = document.querySelector(".nav-mobile-menu");

if (navBtn && mobileMenu) {
  // باز و بسته کردن منو با کلیک روی دکمه
  navBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // جلوگیری از بسته شدن فوری
    mobileMenu.classList.toggle("active");
  });

  // بستن منو با کلیک بیرون از آن
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !navBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
}
