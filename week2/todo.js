const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
const checkBox = document.querySelector(".check-box");

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
  const checkBox = document.createElement("button");

  itemBox.classList.add("item-box");
  item.classList.add("item");
  item.innerHTML = inputBox.value;
  checkBox.classList.add("check-box");

  itemBox.appendChild(checkBox);
  itemBox.appendChild(item);
  list.appendChild(itemBox);
  // input-box 내용 지우기
}

function clickCheckBox(){
  // 클릭시 item에 취소선 클래스 추가
  // 이 부분 다시 설계 해야함
}

checkBox.addEventListener("click", clickCheckBox);