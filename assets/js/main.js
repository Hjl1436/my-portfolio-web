/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 

const projectDetails = {
    'stm32-advanced': {
        title: 'Cortex-M3 임베디드 시스템 심화 실습',
        content: `
            <p>STM32F103 마이크로컨트롤러의 핵심 주변장치를 활용하여 하드웨어 제어 로직을 구현했습니다.</p>
            <ul>
                <li><strong>인터럽트 제어 (EXTI/NVIC):</strong> 외부 스위치 입력을 통한 LED 순차 점등 및 디지털 타이머 제어 (Lab 06)</li>
                <li><strong>타이머 및 PWM:</strong> TIM2/TIM3를 이용한 1초 주기 타이머 구현 및 PWM 기반 버저 음계/LED 밝기 제어 (Lab 07, 08)</li>
                <li><strong>직렬 통신 (UART):</strong> USART1을 활용한 PC-보드 간 데이터 송수신 및 터미널 인터페이스 구현 (Lab 09)</li>
                <li><strong>표시 장치 제어:</strong> 8-bit 모드 TEXT LCD 제어 알고리즘 및 비지 플래그(Busy Flag) 체크 로직 구현 (Lab 10)</li>
            </ul>
            <div style="margin-top: 1rem;">
                <a href="https://drive.google.com/drive/folders/15NFufNs_NRM3Cmf3aVb0oHRU7Y2Pvrni?usp=drive_link" target="_blank" class="portfolio__link" style="font-size: 0.8rem;">
                    [실습 전체 리포트(Google Docs) 보기]
                </a>
            </div>
        `
    }

  
};

function openModal(projectId) {
    const modal = document.getElementById("portfolioModal");
    const modalBody = document.getElementById("modal-body");
    const data = projectDetails[projectId];

    if (data) {
        modalBody.innerHTML = `<h3>${data.title}</h3>${data.content}`;
        modal.style.display = "block";
    }
}

function closeModal() {
    document.getElementById("portfolioModal").style.display = "none";
}

// 모달 바깥쪽 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById("portfolioModal");
    if (event.target == modal) {
        closeModal();
    }
}