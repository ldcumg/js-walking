const apiUrl = "https://jsonplaceholder.typicode.com/comments";

const button = document.querySelector(".showBtn");
button.addEventListener("click", fetchComments);

// 1. fetchComments 함수 내부에서 api를 호출하여 데이터가 불러와지고 나서 데이터를 정제한 후 DOM API를 활용하여 div를 추가해주려고 합니다.
//    fetchComments 함수를 async ~ await를 활용하여 비동기 함수로 만들어주세요
// 2. try ...catch를 사용하여 오류 처리를 해주세요.
//    hint: try {기본적으로 실행해야될 코드} catch (error) {console.error("오류:", error);}

async function fetchComments() {
    // hint: 여기부터 try문이 시작됩니다.
    try {
        const response = await fetch(apiUrl);
        const comments = await response.json();

        // 3. 여기에 slice 메서드를 활용하여 API에서 받아온 결과 배열에서
        //     0번째부터 9번째 값까지를 복사한 새로운 배열인 slicedData를 만들어주세요.
        let slicedData = comments.slice(0, 10);
        const commentsDiv = document.getElementById("comments");

        slicedData.forEach((comment) => {
            let slicedBody = "";
            // 4. 여기에 slice 메서드를 활용하여
            //    comment의 body의 길이가 40 이상일 때
            //    0번째부터 39번째 문자를 복사하고 맨 뒤에 "..."을 붙인 문자열을
            //    slicedBody라는 변수에 할당해주세요.
            if (comment.body.length >= 40) {
                slicedBody = comment.body.slice(0, 40) + "...";
            }

            const commentElement = document.createElement("div");
            commentElement.innerHTML = `
                  <h2>${slicedBody}</h2>
                  <p>사용자 이름: ${comment.name}</p>
                  <p>이메일: ${comment.email}</p>
              `;
            commentsDiv.appendChild(commentElement);
        });
    } catch (error) {
        console.log("오류:", error);
    }
}