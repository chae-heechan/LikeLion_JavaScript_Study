
// 입력 텍스트 박스
const searchBox = document.querySelector("#search-box");
//동물 이름
const items = document.querySelectorAll(".item");
//검색 결과
const result = document.querySelector(".result");
const darkModeButton = document.querySelector(".dark-btn");
const body = document.querySelector("body");

let itemList = [];
let resultCount = 0;

// Q: 저장과 정렬 구가지 일을 하는데 이것도 메서드를 나눠야 할지
// 항목 정렬 메서드
function saveList(){
  for(let index = 0; index < items.length; index++){
    itemList.push(items[index].textContent);
  }
  itemList.sort();
}

// 리스트 출력 메서드
function displayList(){
  console.log(itemList);
  for(let index = 0; index < items.length; index++){
    items[index].innerHTML = itemList[index];
  }
}

// 검색 메서드
function searchBoxOnKeyUp(){
    resultCount = 0;
    for(let index = 0; index < items.length; index++){
        const animalName = items[index].textContent;
        // 검색 결과가 없을 경우
        if(animalName.indexOf(searchBox.value) == -1){
            items[index].style.display = "none";
        }// 검색 결과가 있을 경우
        else{
            resultCount++;
            items[index].style.display = "block";
        }
        result.innerHTML = `검색 결과 ${resultCount}개`;
    }
}

//다크모드 메서드
function darkModeButtonOnClick(){
  // 다크 모드일 경우
  if (darkModeButton.innerHTML === "DARK"){
    darkModeButton.innerHTML = "LIGHT";
  }// 라이트 모드일 경우
  else{
    darkModeButton.innerHTML = "DARK";
  }
  darkModeButton.classList.toggle("btn-active");
  body.classList.toggle("container-active");
}

// 시작 직후 정렬 후 출력
saveList();
displayList();

searchBox.addEventListener("keyup", searchBoxOnKeyUp);
searchBox.addEventListener("keyup", displayList);
darkModeButton.addEventListener("click", darkModeButtonOnClick);
