

class User {
    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

class Question {
    constructor(id, title, options, correct) {
        this.id = id;
        this.title = title;
        this.options = options;
        this.correct = correct;
    }
}

class Response {
    constructor(id, username, score) {
        this.id = id;
        this.username = username;
        this.score = score;
    }
}

class Quiz {
    constructor(id, title, questions, userId) {
        this.responses = [];
        this.questions = questions;
        this.score = questions.length;
        this.id = id;
        this.title = title;
        this.userId = userId;
    }
}

export {User, Question, Quiz, Response}

