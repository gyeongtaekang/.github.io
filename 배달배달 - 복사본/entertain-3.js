document.addEventListener("DOMContentLoaded", function() {
    // URL에서 쿼리 문자열을 파싱하여 결과 키를 가져옵니다.
    var urlParams = new URLSearchParams(window.location.search);
    var resultKey = urlParams.get('result');
    console.log("Received Result Key: ", resultKey); // 받은 결과 키 확인

    // 결과에 따른 데이터를 찾아 설정합니다.
    var resultData = getResultData(resultKey);
    console.log("Found result data: ", resultData); // 찾은 데이터 로그 출력

    // 결과 이미지와 텍스트를 페이지에 설정합니다.
    document.getElementById("resultImage").src = resultData.image;
    document.getElementById("resultText").textContent = resultData.text;
});

// 결과 키에 따라 해당하는 결과 데이터를 반환하는 함수입니다.
function getResultData(key) {
    console.log("Looking for result with key:", key);
    var results = {
        "ISTJ": {
            image: "https://i1.sndcdn.com/artworks-dRAsP1rzhPkVkNyo-edE2dg-t500x500.jpg",
            description: "당신과 맞는 연예인은 에스파 윈터!: 신뢰성이 높고 책임감 있는 당신은 규칙과 전통을 중시하며, 체계적으로 업무를 처리합니다.",
            keywords: "독립심, 단호함, 논리적임, 사교성이 낮음, 합리적, 계획적, 연애를 못함, 신비로움",
            similarCelebrities: "강동원, 김유정, 지드래곤, 손나은, 공민지, 보아, 에릭"
        },
        "ISFJ": {
            image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202310/16/fdadfaeb-6802-48c4-bab5-35bdd2c969c2.jpg",
            description: "당신과 맞는 연예인은 문채원!: 세심하고 배려 깊은 당신은 타인의 필요를 민감하게 인지하고, 안정적인 환경 조성에 힘씁니다.",
            keywords: "통찰력, 교감능력, 이상적, 결단력, 예민함, 완벽주의자, 권태감, 눈치가 빠르다, 자기주장이 강함, 로맨티스트, 주의산만",
            similarCelebrities: "장도연, 주호민, 예지, 나르샤, 최강창민, 다현, 웬디, 안정환, 헤이즈, 문채원"
        },
        "INFJ": {
            image: "https://file.thisisgame.com/upload/tboard/user/2018/01/16/20180116192442_4659.jpg",
            description: "당신과 맞는 연예인은 아이유!: 직관적이고 이상적인 당신은 강한 신념을 가지고, 타인을 돕는 데 헌신합니다.",
            keywords: "당신을 나타내는 키워드 : 온화함,열정적,배려심,공감능력,성실함,협조적,헌신적,현모양처,안정적,갈등회피,변화회피,참을성,일관적,신중함,의리",
            similarCelebrities: "비슷한 연예인 유형 : 태연,아이유,주창욱,김새론,차은우,송지효,현아,성유리,걸스데이 소진,김범수,김종국"
        },
        "INTJ": {
            image: "https://image.mycelebs.com/celeb/sq/28_sq_01.jpg",
            description: "당신과 맞는 연예인은 강동원!: 전략적이고 독창적인 사고를 가진 당신은 복잡한 문제를 해결하는 데 능숙합니다.",
            keywords: "독립적, 단호함, 논리적임, 사교성이낮음, 합리적, 계획적, 연애를 잘못함, 신비로움, 사람들과 거리두기, 내면을 드러내는것을 꺼려함",
            similarCelebrities: "강동원, 김유정, 이수혁, 지드래곤, 유준상, 손나음, 공민지, 보아, 에릭"
        },
        "ISTP": {
            image: "https://mblogthumb-phinf.pstatic.net/MjAyMjA3MjVfOTUg/MDAxNjU4NzM2MzQ2NDk1.HpilgxiPxui-Z2FZEnxUqtvxIPa8mCXN-Bgl9ZFrLGMg.ct6A11bJug0y1RgfTfuzI_L45xvrWiNIDQpVTJLdstEg.JPEG.riael1230/output_2627492952.jpg?type=w800",
            description: "당신과 맞는 연예인은 김연아!: 탐험적이고 실용적인 당신은 새로운 경험을 추구하며 현재 순간을 즐깁니다.",
            keywords: "논리적, 비평적, 통찰력, 적응력, 판단력, 손재주, 독립성, 관대함, 탐험가, 호기심, 솔직함, 가식없음, 현실적",
            similarCelebrities: "김연아, 박명수, 김종민, 트와이스 나연, 원더걸스 유빈, 홍진경"
        },
        "ISFP": {
            image: "https://newsimg-hams.hankookilbo.com/2022/01/21/f96adb47-e8b1-43fe-aa16-f2043012cbec.jpg",
            description: "당신과 맞는 연예인은 유재석! 당신은 예술적이고 적응력 있고 다양한 감정과 경험을 탐색합니다.",
            keywords: "감성적, 겸손함, 예술성, 정이 많다, 상처받기 쉬움, 생각은 많으나 실천이 안 됨, 선택장애, 개성적, 쾌락적, 충동적, 외로움 잘 느낌, 집돌이/집순이",
            similarCelebrities: "유승호, 유재석, 진세연, 설현, 은지원, 레드벨벳 슬기, 트와이스 쯔위, 지효, 양세찬"
        },
        "INFP": {
            image: "https://newsimg.sedaily.com/2021/06/11/22NLG3QG85_1.jpg",
            description: "당신과 맞는 연예인은 레드벨벳 조이! 당신은 창의적이고 이상주의적인 당신은 개인적인 가치를 중시하고 영감을 주는 아이디어를 추구합니다.",
            keywords: "이상적, 순수함, 로맨틱함, 한결같음, 직관력, 감성풍부, 상상력 풍부, 섬세함, 논리부족, 보수적, 스트레스에 취약, 배려심, 상처주기 싫어함",
            similarCelebrities: "선미, 강호동, 윤은혜, 방탄 정국, 레드벨벳 조이, 예리, 백예린, 민효린, 서강준, 유아인"
        },
        "INTP": {
            image: "https://images.khan.co.kr/article/2022/11/04/news-p.v1.20221104.1d8d95923dfc470a98ed4a5c6c6e2377.jpg",
            description: "당신과 맞는 연예인은 방탄소년단 진!: 호기심 많고 분석적인 당신은 논리적 사고와 이론에 관심이 많습니다.",
            keywords: "전략가, 비평가, 비협조적, 자기만의세계 뚜렷, 정직함, 타인에게 무관심, 공감능력 떨어짐, 공상가, 잡학다식, 비현실적, 논리적, 객관적",
            similarCelebrities: "방탄소년단 진, 슈가, 김신영, 황정민, 에이핑크 정은지, 장범준, 기안84"
        },
        "ESTP": {
            image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/06/07/107315462.2.jpg",
            description: "당신과 맞는 연예인은 전현무! 활동적이고 사교적인 당신은 새롭고 긴박한 상황에서 즉흥적으로 행동합니다.",
            keywords: "팩트폭격, 친구사귀기 좋아함, 활동적, 다양함 추구, 제멋대로, 쾌활함, 털털함, 긍정적, 적응력, 센스, 밀당, 관찰력",
            similarCelebrities: "김수미, 블랙핑크 지수, 이경규, 효린, 신동엽, 비투비, 정일훈"
        },
        "ESFP": {
            image: "https://blog.kakaocdn.net/dn/rWQXo/btq97nL7b6N/Y1R6636WbFJ4nEstqHT8Hk/img.png",
            description: "당신과 맞는 연예인은 비! 열정적이고 친화적인 당신은 사람들과 함께하는 것을 즐기고 순간을 살아갑니다.",
            keywords: "분위기 메이커, 긍정적, 사교적, 의리감, 다혈질, 낙천적, 마당발, 열정적, 열린사고, 단순한 사고",
            similarCelebrities: "비, 소녀시대 수영, 모모랜드 주이, 2pm 우영, 전소민, 이가은, 에이프릴 채경"
        },    
        "ENFP": {
            image: "https://i.namu.wiki/i/1IZqtYbi6OtoRd6W9j6yNKb81hwnU-qfT13YSpoy5i2ee-Xw0HajBJ-SJytGXuxMI6Hl6ElJ5vEUohY69uuzsw.webp",
            description: "당신과 맞는 연예인은 싸이!: 열정적이고 창의적인 당신은 새롭고 흥미로운 가능성을 탐색합니다.",
            keywords: "상상력, 아이디어, 열정적, 새로운 관계, 다재다능, 변덕스러움, 도전적, 감정 기복",
            similarCelebrities: "이효리, 홍진영, 방탄 뷔, 조세호, 박나래, 전소미, 정준하, 하하, 노홍철, 조보아"
        },
        "ENFJ": {
            image: "https://image.news1.kr/system/photos/2018/5/23/3124178/article.jpg/dims/optimize",
            description: "당신과 맞는 연예인은 윤시윤!: 카리스마 있고 영감을 주는 당신은 타인을 도우며 긍정적인 변화를 추구합니다.",
            keywords: "달변가, 재치, 창의력, 이상적, 사려깊음, 말을 잘함, 애정결핍, 이타적, 배려심, 착함",
            similarCelebrities: "윤시윤, 신세경, 박진영, 강다니엘, 이성경, 유이, 박미선, 이상민, 이찬원, 송중기, 신민아, 조권"
        },
        "ESTJ": {
            image: "https://entertainimg.kbsmedia.co.kr/cms/uploads/CONTENTS_20220720135138_6ac38a913847d653df0315cd926f36bc.jpg",
            description: "당신과 맞는 연예인은 류준열!: 실용적이고 조직적인 당신은 명확한 구조와 규칙을 선호하며, 효율적인 결정을 내립니다.",
            keywords: "현실적, 실용성, 표현력 풍부, 야심가, 진취적, 주장감함, 뒤끝없음, 계산적, 계획적",
            similarCelebrities: "한채영, 데프콘, 송은이, 류준열, 치타, 제시카, 에이핑크 김남주"
        },
        "ESFJ": {
            image: "https://mblogthumb-phinf.pstatic.net/MjAyMDEyMzBfMjY3/MDAxNjA5MzI0MjY5NjA0.UKG-U9-EA4khBCmd0GeVyXBkChYJ_-iVohE4EU9adQcg.HlgGLPCSkArQrmTPsgWxpD6DrUQZJp1b-xh-afzUBbog.PNG.thdwndyd92/%EB%B0%95%EB%B3%B4%EA%B2%80.png?type=w800",
            description: "당신과 맞는 연예인은 박보검! 협조적이고 사교적인 당신은 타인과의 관계를 중시하며 조화로운 환경을 조성합니다.",
            keywords: "친절함, 사회성, 온순함, 씩씩함, 솔직함, 과거지향적, 전통적, 자신감 부족, 헌신적, 중재자 역할, 사회생활 잘함",
            similarCelebrities: "걸스데이 혜리, 김신영, 박보검, 이이경, 앤디, 오나라, 정동원, 규현"
        },    
        "ENTP": {
            image: "https://newsimg-hams.hankookilbo.com/2022/09/22/3e19abdd-57e2-4a7a-ab80-0a8d3466d3e5.jpg",
            description: "당신과 맞는 연예인은 김세정!: 빠르고 기민한 당신은 다양한 아이디어와 가능성을 탐구합니다.",
            keywords: "독립심, 단호함, 논리적임, 사교성이 낮음, 합리적, 계획적, 연애를 못함, 신비로움",
            similarCelebrities: "카라, 몬스타엑스 민혁, 육성재, 임창정, 자이언티, 제시, 한예슬"
        },
        "ENTJ": {
            image: "https://dimg.donga.com/wps/SPORTS/IMAGE/2019/03/27/94745142.2.jpg",
            description: "당신과 맞는 연예인은 여진구!: 대담하고 야심찬 당신은 복잡한 문제를 해결하고 비전을 실현하는 데 능숙합니다.",
            keywords: "리더쉽, 지도자, 냉철함, 야망, 책임감, 이기적, 성취감 중시, 완벽주의",
            similarCelebrities: "티파니, 여진구, 윤하, 백종원, 스티브잡스, 엑소 디오, 봄, 마크툽, 이특, 지코"
        }
    
    };    
    if (results[key]) {
        console.log("Found result data for key " + key + ":", results[key]);
        var result = results[key];
        return {
            image: result.image,
            text: result.description + "\n" +
                  "키워드: " + result.keywords + "\n" +
                  "비슷한 연예인 유형: " + result.similarCelebrities
        };
    } else {
        console.log("No result found for key:", key);
        return {
            image: "path-to-default-image.jpg",
            text: "결과를 찾을 수 없습니다."
        };
    }
}
