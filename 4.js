// 문제 2번의 사자 객체를 가져옵니다.
const lion = { 이름: "심바", 나이: 3, 주인공: true, 대사: "하쿠나마타타" };

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    return Object.assign({}, lion, { 나이: lion.나이 += 1 });
}
// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));

function include(a) {
    a.다리='4개';
    return a
}
console.log(include(lion));