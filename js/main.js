// 패널 띄우기
const frame = document.querySelector("section"); //section 태그
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 / len; //패널 개수에 맞게 각도 돌리기

//사진 배열
const names = [
  "cardio",
  "groove",
  "happy",
  "light",
  "lily",
  "limes",
  "pop",
  "swing",
];

for (let i = 0; i < len; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh) `;

  //사진 부분 일괄 적용
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url("../music/img/${names[i]}.jpg")`;

  //음악 제목 일괄 적용
  const title = articleArr[i].querySelector(".text>h2");
  title.innerText = `${names[i]}`;

  //음악태그 and 파일 일괄 적용
  const audio = document.createElement("audio");
  audio.setAttribute("src", `../music/music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");
  articleArr[i].append(audio);
}

//버튼 액션 처리 prev, next
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0; // 회전 각도 조절
let active = 0; // 버튼 활성화 위치 기억

prev.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * ++num}deg)`;
  if (active === 0) {
    active = len - 1;
  } else {
    active--;
  }

  for (let pen of articleArr) {
    pen.classList.remove("on");
  }
  articleArr[active].classList.add("on");
});

next.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * --num}deg)`;
  if (active === len - 1) {
    active = 0;
  } else {
    active++;
  }

  for (let pen of articleArr) {
    pen.classList.remove("on");
  }
  articleArr[active].classList.add("on");
});

//버튼클릭시 이미지 회전 and 음악 컨트롤
for (let i of articleArr) {
  const btnPlay = i.querySelector(".play");
  const btnPause = i.querySelector(".pause");
  const btnReload = i.querySelector(".reload");

  btnPlay.addEventListener("click", function (e) {
    i.querySelector(".pic").classList.add("on");
    i.querySelector("audio").play();
  });
  btnPause.addEventListener("click", function (e) {
    e.target.closest("article").querySelector(".pic").classList.remove("on"); //가장 근처에있는 article에서 pic찾기
    i.querySelector("audio").pause();
  });

  btnReload.addEventListener("click", function (e) {
    i.querySelector(".pic").classList.add("on");
    i.querySelector("audio").load();
    i.querySelector("audio").play();
  });
}
