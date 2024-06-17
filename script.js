document.addEventListener("DOMContentLoaded", function() {
    let snowContainer = document.querySelector(".snow-container");

    // 눈송이 생성 함수
    function createSnowflake() {
        // 눈송이 이미지 요소 생성
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        let img = document.createElement("img");
        img.src = "snow.png"; // 눈송이 이미지 파일 경로
        snowflake.appendChild(img);

        // 초기 위치 설정
        let startX = Math.random() * window.innerWidth;
        snowflake.style.left = startX + "px";

        // 애니메이션 추가
        let duration = Math.random() * 3 + 2; // 2~5초 사이의 떨어지는 시간
        snowflake.style.transition = `transform ${duration}s linear`;

        // 눈송이가 떨어지는 애니메이션 시작
        snowflake.style.transform = `translateY(${window.innerHeight}px)`;

        // 눈송이가 화면 밖으로 사라지면 요소 제거
        snowflake.addEventListener("transitionend", function() {
            snowflake.remove();
        });

        // 눈송이를 컨테이너에 추가
        snowContainer.appendChild(snowflake);
    }

    // 클릭할 때마다 눈송이 생성
    document.addEventListener("click", function(event) {
        createSnowflake();
    });
});
