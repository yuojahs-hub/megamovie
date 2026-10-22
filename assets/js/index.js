// 영화 차트 메뉴
const movBtn = document.querySelectorAll(".movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart>div");

// 모든 뮤비 차트를 숨기고, 첫 번째만 보이기 (기본 화면)
movCont.forEach((cont) => {
    cont.style.display = "none";
});
movCont[0].style.display = "block";

// 이벤트 시작
movBtn.forEach((menu, idx) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();

        movBtn.forEach((item) => {
            item.classList.remove("active");
        }); // 모든 버튼에서 active 제거
        menu.classList.add("active"); // 클릭한 버튼만 active 추가

        movCont.forEach((cont) => {
            cont.style.display = "none";
        }); // 모든 차트 숨기기
        movCont[idx].style.display = "block"; // 클릭한 버튼과 같은 idx 번호의 콘텐츠 보이기
    });
});
