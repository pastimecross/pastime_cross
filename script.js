
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");          // <button id="menu" class="hamburger">...</button>
  const overlay = document.getElementById("menuOverlay");  // <div id="menuOverlay" class="menu-overlay"><div class="menu-panel">...</div></div>
  const panel = overlay ? overlay.querySelector(".menu-panel") : null;

  if (!menuBtn || !overlay || !panel) return;

  const openMenu = () => {
    menuBtn.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden"; // 背景スクロール防止
  };

  const closeMenu = () => {
    menuBtn.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = ""; // 戻す
  };

  const toggleMenu = () => {
    if (overlay.classList.contains("open")) closeMenu();
    else openMenu();
  };

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // 透かし部分を押したら閉じる（パネル内は閉じない）
  overlay.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) closeMenu();
  });

  // ESCで閉じる（PC）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeMenu();
  });
});


const cal = document.getElementById("calendar");

cal.addEventListener("click", () => {
  cal.classList.toggle("big");
});
