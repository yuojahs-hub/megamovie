// 영화 차트 메뉴
const movBtn = document.querySelectorAll(".movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart>div");

// 모든 뮤비 차트를 숨기고, 첫 번째만 보이기 (기본 화면)
movCont.forEach((cont) => {
    cont.style.display = "none";
});
movCont[0].style.display = "block";

movBtn.forEach((menu, idx) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();

        movBtn.forEach((item) => {
            item.classList.remove("active");
        });
        menu.classList.add("active");

        movCont.forEach((cont) => {
            cont.style.display = "none";
        });
        movCont[idx].style.display = "block";
    });
});
