document.addEventListener("DOMContentLoaded", function() {
    // URL에서 쿼리 문자열을 파싱하여 결과 키를 가져옵니다.
    var urlParams = new URLSearchParams(window.location.search);
    var resultKey = urlParams.get('result');

    // 결과에 따른 데이터를 정의합니다.
    var resultData = getResultData(resultKey);

    // 결과 이미지와 텍스트를 페이지에 설정합니다.
    document.getElementById("resultImage").src = resultData.image;
    document.getElementById("resultText").textContent = resultData.text;
});

// 결과 키에 따라 해당하는 결과 데이터를 반환하는 함수입니다.
function getResultData(key) {
    var results = {
        "A": {
            image: "https://m.eatmorning.co.kr/web/product/big/202212/42b6af54f1c1066b9c75aa941facd3d3.jpg",
            text: "경쾌하고 가벼운 맛의 음식을 추천합니다. 예를 들어, 샐러드, 샌드위치, 또는 가벼운 한식 정식 등이 좋습니다. 이러한 음식들은 가볍고 소화가 잘 되며, 활동적인 하루를 위한 에너지를 제공합니다. 샐러드는 신선한 야채와 건강한 단백질이 풍부하여 영양가 있으면서도 가볍게 즐길 수 있습니다. 샌드위치는 다양한 재료를 활용하여 맛과 영양의 균형을 맞출 수 있으며, 간편하게 들고 다니며 먹을 수 있는 장점이 있습니다. 가벼운 한식 정식은 균형 잡힌 식단으로 건강을 유지하면서도 만족스러운 식사를 할 수 있도록 해줍니다. 이러한 음식들은 바쁜 일상 속에서도 건강을 챙길 수 있는 최적의 선택입니다."
        },
        "B": {
            image: "https://gi.esmplus.com/lwwin2104/%EB%9D%B5%EA%B5%B4%EB%A7%88%EC%BC%93/%EB%B0%80%ED%82%A4%ED%8A%B8/%EC%89%AC%EB%A6%BC%ED%94%84%EB%A1%9C%EC%A0%9C%ED%8C%8C%EC%8A%A4%ED%83%80/%EC%89%AC%EB%A6%BC%ED%94%84%EB%A1%9C%EC%A0%9C%ED%8C%8C%EC%8A%A4%ED%83%80_%EC%A0%9C%ED%92%88%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
            text: "따뜻하고 편안한 맛의 음식을 추천합니다. 예를 들어, 크림 파스타, 치킨 스튜, 또는 부대찌개 등이 좋습니다. 이러한 음식들은 풍미가 풍부하며 몸과 마음에 포근함을 줍니다. 크림 파스타는 부드러운 맛과 풍부한 크림의 조화로 위로가 되는 맛을 제공하며, 치킨 스튜는 따뜻하고 푸짐한 한 끼로 마음까지 따뜻하게 해줍니다. 부대찌개는 다양한 재료가 어우러진 맛으로, 진한 국물의 편안함을 선사합니다. 이런 음식들은 특히 추운 날씨나 피곤한 하루 끝에 든든한 식사를 원할 때 아주 좋은 선택이 될 것입니다."
        },
        "C": {
            image: "https://post-phinf.pstatic.net/MjAxODAzMjFfMTI5/MDAxNTIxNjIxNTE0MjU4.K6A7tUiwden3UQMwelM35_4GIFB-NlhoPPIVD6IWokEg.KiHRHoreNOKSDQtEsW2de4ikvCRXlemsHah2xEjUGjQg.PNG/CA180320A_01.png?type=w1200",
            text: "풍미가 깊고 심도 있는 음식을 추천합니다. 예를 들어, 진한 맛의 스테이크, 중식요리 또는 전통 한식 등이 이상적입니다. 이러한 음식들은 강한 맛과 풍부한 조미료로 깊은 만족감을 줍니다. 스테이크는 고기의 풍미와 육즙이 살아있어 미식가들에게 사랑받는 메뉴입니다. 중식요리는 다양한 향신료와 맛의 조화로 복잡하면서도 깊은 맛을 느낄 수 있게 해주며, 전통 한식은 정성스럽게 준비된 반찬과 국물 요리로 몸과 마음을 모두 만족시킬 수 있습니다. 이런 음식들은 특별한 날, 혹은 일상을 벗어나 무언가 새롭고 특별한 것을 원할 때 훌륭한 선택이 됩니다."
        }
    };    

    // 결과 키가 유효하지 않은 경우 기본값을 반환합니다.
    return results[key] ||  {
        image: "path-to-default-image.jpg",
        text: "결과를 찾을 수 없습니다."
    };
}
