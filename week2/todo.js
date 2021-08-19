// 체크박스 이미지
const img = [
  {
    file : 'checkBox.png'
  },
  {
    file : 'checkBoxActive.png'
  },
  {
    file : 'blueMenu.png'
  }
]

const listInputBox = document.querySelector("#input-category");
const itemInputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
const userList = document.querySelector("#user-list");

// item 엔터 검사 메서드
const isEnter = () =>{
  if (window.event.keyCode == 13 && itemInputBox.value != ""){
    enterInput();
  }
}

// list 엔터 검사 메서드
const isEnterForList = () =>{
  if (window.event.keyCode == 13 && listInputBox.value != ""){
    enterCategory();
  }
}

// category 추가 메서드
const enterCategory = () =>{
  const leftNavItem = document.createElement('div');
  const leftNavLeftArea = document.createElement('div');
  const leftNavImg = document.createElement('img');
  const leftNavTitle = document.createElement('div');
  const leftNavcount = document.createElement('div');

  leftNavImg.src = img[2].file;   // 메뉴 이미지
  leftNavTitle.innerHTML = listInputBox.value;

  leftNavItem.classList.add("left-nav-item");
  leftNavLeftArea.classList.add("left-nav-left-area");
  leftNavImg.classList.add("left-nav-img");
  leftNavTitle.classList.add("left-nav-title");
  leftNavcount.classList.add("left-nav-count");

  leftNavLeftArea.appendChild(leftNavImg);
  leftNavLeftArea.appendChild(leftNavTitle);
  leftNavItem.appendChild(leftNavLeftArea);
  leftNavItem.appendChild(leftNavcount);
  userList.appendChild(leftNavItem);
  // input-box 내용 지우기
  listInputBox.value = "";
}

// item 추가 메서드
const enterInput = () =>{

  const itemBox = document.createElement('div');
  const item = document.createElement("p");
  const checkBox = document.createElement("img");
  saveItemsInLocal();

  itemBox.classList.add("item-box");
  item.classList.add("item");
  item.innerHTML = itemInputBox.value;
  checkBox.classList.add("check-box");
  checkBox.src = img[0].file;   // 빈 체크박스 이미지
  checkBox.setAttribute('onclick', "clickCheckBox()"); // <img onclick = clickCheckBox()>

  itemBox.appendChild(checkBox);
  itemBox.appendChild(item);
  list.appendChild(itemBox);
  // input-box 내용 지우기
  itemInputBox.value = "";
}

// 할일 로컬 저장소에 저장 메서드
function saveItemsInLocal(){
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 

  itemsArray.push(itemInputBox.value); 
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

// 체크 박스 모양 변경 메서드
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
