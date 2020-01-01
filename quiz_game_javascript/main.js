
// console.log(alert('asd'));



(function(){

    function Question(question, answers, correct) {

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
    function() {
        
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans, callback) {
        var sc;
        if(ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);

        } else {
            console.log('Wrong answer! Try again... ');

            sc = callback(false);
        }
        
        this.displayScore(sc);

    }

    Question.prototype.displayScore = 
    function(score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------------------------');
    }
    
    var q1 = new Question('Is Plovdiv the most beautiful in the world?', 
                                                            ['Yes','No'], 0);
    
    var q2 = new Question('What is the name of quiz game\'s creator?', 
                                                            ['John',
                                                             'George',
                                                             'Peter'], 1); 
    var q3 = new Question('How old is he ?', 
                                                ['19',
                                                 '50',
                                                 '30',
                                                 '40'], 2 );


    var question = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
        
    }

    var keepScore = score(); 




    function nextQuestion() {

    
        var n = Math.floor(Math.random() * question.length);
        
        question[n].displayQuestion();
        
        var answer = prompt('Please select the correct answer.');
        
        if(answer !== 'exit') {
            question[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
        
    }

    nextQuestion();

})();
