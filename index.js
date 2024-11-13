    function submitQuiz() {
            let answers = {};
            const questions = document.querySelectorAll('.question');
            questions.forEach(question => {
                const questionId = question.getAttribute('data-id');
                const selectedOption = question.querySelector('input[type="radio"]:checked');
                if (selectedOption) {
                    answers[questionId] = selectedOption.value;
                }
            });

       
            localStorage.setItem('quizAnswers', JSON.stringify(answers));

       
            showResult(answers);
        }
o
        function showResult(answers) {
            const correctAnswers = {
            "1": 'a',
            "2": 'a',
            "3": 'a',
            "4": 'b',
            "5": 'c'
        };

            let score = 0;
            for (let key in answers) {
                if (answers[key] === correctAnswers[key]) {
                    score++;
                }
            }

            const result = document.getElementById('result');
            result.textContent = 'Você acertou ' + score;
        };

        window.onload = function() {
            const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
            if (savedAnswers) {
                showResult(savedAnswers);
            }
        };

  