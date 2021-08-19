// 체크박스 이미지
const img = [
  {
    file : 'checkBox.png'
  },
  {
    file : 'checkBoxActive.png'
  }
]

const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
let checkBox = document.querySelector(".check-box");

// 엔터 검사 메서드
const isEnter = () =>{
  if (window.event.keyCode == 13 && inputBox.value != ""){
    enterInput();
  }
}

// item 추가 메서드
const enterInput = () =>{
  const itemBox = document.createElement('div');
  const item = document.createElement("p");
  const checkBox = document.createElement("img");

  itemBox.classList.add("item-box");
  item.classList.add("item");
  item.innerHTML = inputBox.value;
  checkBox.classList.add("check-box");
  checkBox.src = img[0].file;
  checkBox.setAttribute('onclick', "clickCheckBox()"); // <img onclick = clickCheckBox()>
  console.log(checkBox);

  itemBox.appendChild(checkBox);
  itemBox.appendChild(item);
  list.appendChild(itemBox);
  // input-box 내용 지우기
  inputBox.value = "";

  // checkBox = document.querySelector(".check-box");
}

function clickCheckBox(){
  const parentDiv = event.target.parentNode;

  // 기본인 경우 => 엑티브로
  if (!parentDiv.childNodes[0].src.includes("Active")) {
    parentDiv.childNodes[0].src = `${img[1].file}`;
    parentDiv.childNodes[1].classList.add("cancellation-line");
    // 액티브인 경우 => 기본으로
  } else {
    parentDiv.childNodes[0].src = `${img[0].file}`;
    parentDiv.childNodes[1].classList.remove("cancellation-line");

  }
}
