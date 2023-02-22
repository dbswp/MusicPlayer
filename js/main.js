// 패널 돌리기
const frame = document.querySelector("section"); //section 태그
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 / len; //패널 개수에 맞게 각도 돌리기

for (let i = 0; i < len; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh) `;
}
