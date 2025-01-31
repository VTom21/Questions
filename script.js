document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("quiz-form");
    const submitBtn = document.getElementById("submit-btn");
    const progressBar = document.getElementById("progress-bar");
    const resultDiv = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    const correct_answers = [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1];

    const correct_answers_div = [];

    form.addEventListener("input", () => {
        const total_queries = correct_answers.length;
        const selected_answers = Array.from(form.elements).filter(input => input.type === "radio" && input.checked);
        const progress = Math.round((selected_answers.length / total_queries) * 100);

        progressBar.style.width = progress + '%';

        if (progress === 100) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();  
        
        let score = 0;
        
        correct_answers.forEach((answer, index) => {
            const questionName = `q${index + 1}`;  
            const selectedAnswer = form.querySelector(`input[name="${questionName}"]:checked`);
            
            if (selectedAnswer && parseInt(selectedAnswer.value) === answer) {
                score++;
                // Change the color of the label or container surrounding the radio button
                selectedAnswer.parentElement.style.color = "green";
            }
            else{
                selectedAnswer.parentElement.style.color = "red"; 
            }
        });
        scoreDisplay.textContent = `Pontszámod: ${score} / ${correct_answers.length}`;
        resultDiv.style.display = 'block';      
    });
    
    });
