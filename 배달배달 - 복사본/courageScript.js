var currentQuestionIndex = 0;
var userResponses = [];

var questions = [
    {
        text: "배달음식에 쓸 수 있는 돈은?",
        options: ["A. ~5,000원", "B. 5,000원~10,000원", "C. 10,000원 이상"]
    },
    {
        text: "배달음식을 얼마나 기다릴 수 있나요?",
        options: ["A. ~30분", "B. 30분~1시간", "C. 1시간 이상"]
    },
    {
        text: "오늘의 기분은 어떤가요?",
        options: ["A. 상쾌하고 활기찬 느낌", "B. 편안하고 따뜻한 느낌", "C. 진지하고 심도 있는 느낌"]
    },
    {
        text: "음식의 맛 선호도는?",
        options: ["A. 매운 맛", "B. 달콤한 맛", "C. 짭짤한 맛"]
    },
    {
        text: "오늘 선호하는 음식의 종류는?",
        options: ["A. 한식", "B. 양식", "C. 아시안 음식"]
    },
    {
        text: "식사시간에 중요하게 생각하는 것은?",
        options: ["A. 건강과 영양", "B. 맛과 풍미", "C. 편리함과 빠른 배달"]
    },
    {
        text: "현재 날씨는 어떤가요?",
        options: ["A. 맑고 따뜻함", "B. 추움", "C. 비가 옴"]
    },
    {
        text: "오늘 하루의 활동 수준은 어떤가요?",
        options: ["A. 활동적이었음", "B. 보통", "C. 대부분 쉬었음"]
    },
    {
        text: "식사하는 장소는 어디인가요?",
        options: ["A. 집", "B. 사무실", "C. 야외"]
    },
    {
        text: "오늘의 음식은 어떤 목적으로 선택하나요?",
        options: ["A. 기분 전환", "B. 친구들과의 모임", "C. 혼자만의 휴식"]
    }
];


function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
        document.getElementById("questionText").textContent = question.text;
        var optionsHtml = question.options.map(function(option) {
            return `<button class="answerButton" onclick="handleAnswer('${option.charAt(0)}')">${option}</button>`;
        }).join('');
        document.getElementById("answerOptions").innerHTML = optionsHtml;
        updateProgressBar();
    } else {
        showResult(); // 모든 질문이 끝나면 결과를 보여줌
    }
}

// 사용자가 선택지를 클릭할 때 호출되는 함수
function handleAnswer(option) {
    userResponses.push(option);
    currentQuestionIndex++;
    showQuestion();      // 먼저 다음 질문을 보여준 후에
    updateProgressBar();  // 진행률을 업데이트합니다.
}

// 진행 상태를 업데이트하는 함수
function updateProgressBar() {
    var progressPercentage = (currentQuestionIndex / questions.length) * 100;
    document.getElementById("progress").style.width = progressPercentage + '%';
    document.getElementById("currentQuestionNumber").textContent = `문제 ${currentQuestionIndex} / ${questions.length}`;


// 현재 질문 번호를 업데이트합니다.
document.getElementById("currentQuestionNumber").textContent = `문제 ${currentQuestionIndex } / ${questions.length}`;
}

// 결과 계산 및 결과 페이지로 이동
function showResult() {
    var resultKey = calculateResult();
    var resultPageUrl = 'result.html?result=' + resultKey;
    window.location.href = resultPageUrl;
}

// 결과를 계산하는 함수
function calculateResult() {
    var score = { A: 0, B: 0, C: 0 };
    userResponses.forEach(function(response) {
        score[response]++;
    });

    var maxScore = Math.max(score.A, score.B, score.C);
    return Object.keys(score).find(key => score[key] === maxScore);
}

document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});