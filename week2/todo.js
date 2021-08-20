// 체크박스 이미지
const img = [
  {file : 'checkBox.png'},
  {file : 'checkBoxActive.png'},
  {file : 'blueMenu.png'},
  {file : 'star.png'},
  {file : 'starActive.png'},
]

const listInputBox = document.querySelector("#input-category");
const itemInputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
const userList = document.querySelector("#user-list");
const dateInput = document.querySelector("#date-input");
const todayCount = document.querySelector("#today-count");

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
  const leftItemArea = document.createElement('div');
  const rightItemArea = document.createElement('div');
  const item = document.createElement("p");
  const checkBox = document.createElement("img");
  const date = document.createElement("p");
  const star = document.createElement("img");
  saveItemsInLocal();

  itemBox.classList.add("item-box");
  leftItemArea.classList.add("item-area");
  rightItemArea.classList.add("item-area");
  item.classList.add("item");
  item.innerHTML = itemInputBox.value;
  checkBox.classList.add("item-img");
  checkBox.src = img[0].file;   // 빈 체크박스 이미지
  checkBox.setAttribute('onclick', "clickCheckBox()"); // <img onclick = clickCheckBox()>
  date.classList.add("date");
  date.innerHTML = dateInput.value;
  star.classList.add("item-img");
  star.src = img[3].file;
  star.setAttribute('onclick', "clickStar()");  // <img onclick = clickStar()>

  leftItemArea.appendChild(checkBox);
  leftItemArea.appendChild(item);
  itemBox.appendChild(leftItemArea);
  rightItemArea.appendChild(date);
  rightItemArea.appendChild(star);
  itemBox.appendChild(rightItemArea);
  list.appendChild(itemBox);
  // input-box 내용 지우기
  itemInputBox.value = "";
  // 오늘 날짜 세팅
  setCurrentDate();
  // 카테고리 카운트 새로고침
  setCategoryCount();
}

// 카테고리 카운트 새로고침 메서드
function setCategoryCount(){
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 
  todayCount.innerHTML = itemsArray.length;
}

// 오늘 날짜 세팅 메서드
function setCurrentDate(){
  document.querySelector("#date-input").value= new Date().toISOString().slice(0, 10);
  
}

// 할일 불러오기 메서드
function loaditems(){
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 
}

// 할일 로컬 저장소에 저장 메서드
function saveItemsInLocal(){
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 

  const dict = {};
  dict[itemInputBox.value] = dateInput.value;

  itemsArray.push(dict);
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

// 체크 박스 모양 변경 메서드
function clickCheckBox(){
  const parentDiv = event.target.parentNode;  //leftt-item-area

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

// 중요 표시 모양 변겅 메서드
function clickStar(){
  // 이후 중요 카테고리로 이동을 위한 선언
  const parentDiv = event.target.parentNode;  //right-item-area
  // 기본상태인 경우 => 액티브로
  if (!parentDiv.childNodes[1].src.includes("Active")){
    parentDiv.childNodes[1].src = `${img[4].file}`;
    // 액티브인 경우 => 기본 상태로
  }else{
    parentDiv.childNodes[1].src = `${img[3].file}`;
  }
}

setCategoryCount();
loaditems();
setCurrentDate();