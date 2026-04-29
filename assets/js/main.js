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

/*==================== DARK LIGHT THEME ====================*/ 
// (기존 테마 관련 코드가 있다면 이 위에 유지하세요)

const projectDetails = {
    'stm32-advanced': {
        title: 'Cortex-M3 임베디드 시스템 심화 실습',
        content: `
            <p>STM32F103 마이크로컨트롤러의 핵심 주변장치를 활용하여 하드웨어 제어 로직을 구현했습니다.</p>
            <ul>
                <li><strong>인터럽트 제어 (EXTI/NVIC):</strong> 외부 스위치 입력을 통한 LED 순차 점등 및 디지털 타이머 제어 (Lab 06)</li>
                <li><strong>타이머 및 PWM:</strong> TIM2/TIM3를 이용한 1초 주기 타이머 및 PWM 기반 버저 음계 제어 (Lab 07, 08)</li>
                <li><strong>직렬 통신 (UART):</strong> USART1을 활용한 PC-보드 간 데이터 송수신 구현 (Lab 09)</li>
                <li><strong>표시 장치 제어:</strong> 8-bit 모드 TEXT LCD 제어 알고리즘 및 Busy Flag 체크 로직 구현 (Lab 10)</li>
            </ul>
            <div style="margin-top: 1rem;">
                <a href="https://drive.google.com/drive/folders/15NFufNs_NRM3Cmf3aVb0oHRU7Y2Pvrni?usp=drive_link" target="_blank" class="portfolio__link" style="font-size: 0.8rem; color: var(--first-color);">
                    <i class="uil uil-external-link-alt"></i> [실습 전체 리포트(Google Docs) 보기]
                </a>
            </div>
        `
    },
    /* main.js 의 hdl 부분 */
'hdl': {
    title: 'Verilog Sequence Detector 설계',
    content: `
        <div style="line-height: 1.6;">
            <h4 style="color: var(--first-color); margin-bottom: 0.5rem;">[실습 개요] 001 비트 패턴 감지기 구현</h4>
            <p>디지털 논리 회로의 핵심인 FSM(상태 머신)을 설계하고, Verilog를 이용해 Dataflow와 Behavioral 방식으로 각각 구현하여 하드웨어 합성 결과를 비교했습니다.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;">
                <tr style="background-color: var(--first-color-lighten); border-bottom: 2px solid var(--first-color);">
                    <th style="padding: 8px; text-align: left;">구현 방식</th>
                    <th style="padding: 8px; text-align: left;">특징 및 상세</th>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 8px;"><strong>Dataflow</strong></td>
                    <td style="padding: 8px;">assign 문을 사용한 논리식 기반 설계</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 8px;"><strong>Behavioral</strong></td>
                    <td style="padding: 8px;">always 블록을 사용한 동작 중심 설계</td>
                </tr>
            </table>

            <h4 style="color: var(--first-color); margin: 1.5rem 0 0.5rem 0;">[검증 결과] Simulation 및 Waveform</h4>
            <ul style="padding-left: 1.2rem; margin-bottom: 1rem;">
                <li><strong>Test Bench:</strong> 10ns 주기의 클록 신호 생성 및 0→0→1 패턴 입력 시뮬레이션</li>
                <li><strong>Waveform:</strong> 클록의 Rising Edge에서 상태가 계단 형태로 변화하며 패턴 감지 시 출력 '1' 발생 확인</li>
            </ul>

            <div style="background-color: #f9f9f9; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid var(--first-color);">
                <strong>💡 핵심 분석:</strong><br>
                추상화 수준에 따른 두 설계 방식의 차이점을 이해하고, VIVADO를 활용한 RTL 합성 및 타이밍 검증 프로세스를 숙달했습니다.
            </div>
            
            <div style="margin-top: 1.5rem; text-align: center;">
                <a href="https://docs.google.com/document/d/1rpFKd2ImV7db_t_9B7G-VrCL8BWP3NU9Ifhi0H0sb-s/edit?usp=drive_link" target="_blank" class="button button--small">
                    <i class="uil uil-file-alt"></i> 전체 보고서 원본 보기 (Word)
                </a>
            </div>
        </div>
    `
    }
}; 

/*==================== MODAL FUNCTIONS ====================*/
function openModal(projectId) {
    const modal = document.getElementById("portfolioModal");
    const modalBody = document.getElementById("modal-body");
    
    // 데이터가 있는지 확인
    if (projectDetails[projectId]) {
        const data = projectDetails[projectId];
        modalBody.innerHTML = `<h3>${data.title}</h3>${data.content}`;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // 스크롤 방지
    } else {
        console.error("해당 ID에 대한 데이터가 없습니다:", projectId);
    }
}

function closeModal() {
    const modal = document.getElementById("portfolioModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 다시 허용
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById("portfolioModal");
    if (event.target == modal) {
        closeModal();
    }
};