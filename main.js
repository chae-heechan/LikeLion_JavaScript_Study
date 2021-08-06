
// 입력 텍스트 박스
const searchBox = document.querySelector("#search-box");
//동물 이름
const items = document.querySelectorAll(".item");
//검색 결과
const result = document.querySelector(".result");
// 다크 모드 버튼
const darkModeButton = document.querySelector(".dark-btn");
// 바디
const body = document.querySelector("body");

// 검색 메서드
function searchBoxOnKeyUp(){
    let resultCount = 0;
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

searchBox.addEventListener("keyup", searchBoxOnKeyUp);
darkModeButton.addEventListener("click", darkModeButtonOnClick);