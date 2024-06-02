export default function saveAnswerLocalStorage(event: React.MouseEvent) {
    if (event.target instanceof HTMLButtonElement && event.target.innerText !== "Отправить ответы") {
        let ans = event.target.value.split(":");

        //Save text button and number of question
        localStorage.setItem(ans[1], ans[0]);



    }

}