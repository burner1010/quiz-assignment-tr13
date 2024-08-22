import { LocalStorageDB } from "./db";
import { Question, Quiz } from "./model";

const questionForm = documnet.querySelector("#questionForm")
const quizForm = doucment.querySelector("#quizForm")


questionForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData();
    const id = LocalStorageDB.getCollection("questions").length;
    const options = {
        opt1: data.get("opt1"),
        opt2: data.get("opt2"),
        opt3: data.get("opt3"),
        opt4: data.get("opt4")
    
    }
    
    const question = new Question(id, data.get("title"), options, data.get("correct"));
    console.log(question)
})
