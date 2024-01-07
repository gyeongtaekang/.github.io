var currentQuestionIndex = 0;
var userResponses = [];

var questions = [
    // 외향(E) / 내향(I)
    {
        text: "새로운 사람들을 만날 때 당신은:",
        options: [
            { text: "적극적으로 다가가 새 친구를 만든다.", type: "E" },
            { text: "조용히 관찰하며 상황을 파악한다.", type: "I" }
        ]
    },
    // 감각(S) / 직관(N)
    {
        text: "문제를 해결할 때 당신은:",
        options: [
            { text: "사실과 세부 사항에 기반하여 해결책을 찾는다.", type: "S" },
            { text: "직관과 전체적인 그림을 보며 해결책을 찾는다.", type: "N" }
        ]
    },
    // 사고(T) / 감정(F)
    {
        text: "프로젝트를 할 때 당신은:",
        options: [
            { text: "논리적이고 체계적인 접근을 선호한다.", type: "T" },
            { text: "사람들의 감정과 의견을 중요하게 생각한다.", type: "F" }
        ]
    },
    // 판단(J) / 인식(P)
    {
        text: "결정을 내릴 때 당신은:",
        options: [
            { text: "계획을 세우고 조직적으로 접근한다.", type: "J" },
            { text: "유연하고 즉흥적으로 접근한다.", type: "P" }
        ]
    },
    // 나머지 8개의 질문 추가...
    // ...
];


function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
        document.getElementById("questionText").textContent = question.text;
        var optionsHtml = question.options.map(function(option) {
            return `<button class="answerButton" onclick="handleAnswer('${option.type}')">${option.text}</button>`;
        }).join('');
        document.getElementById("answerOptions").innerHTML = optionsHtml;
    } else {
        showResult();
    }
    updateProgressBar();
}

function handleAnswer(type) {
    userResponses.push(type);
    currentQuestionIndex++;
    showQuestion();
}

function updateProgressBar() {
    var progressPercentage = (currentQuestionIndex / questions.length) * 100;
    document.getElementById("progress").style.width = progressPercentage + '%';
    document.getElementById("currentQuestionNumber").textContent = `문제 ${currentQuestionIndex } / ${questions.length}`;
}

function showResult() {
    var resultType = calculateResult();
    // 'type' 대신 'result'를 쿼리 파라미터로 사용합니다.
    window.location.href = 'entertain-3.html?result=' + resultType;
}

function calculateResult() {
    var score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    userResponses.forEach(function(response) {
        score[response]++;
    });

    var type = "";
    type += score["E"] >= score["I"] ? "E" : "I";
    type += score["S"] >= score["N"] ? "S" : "N";
    type += score["T"] >= score["F"] ? "T" : "F";
    type += score["J"] >= score["P"] ? "J" : "P";
    return type;
}

document.addEventListener("DOMContentLoaded", showQuestion);
