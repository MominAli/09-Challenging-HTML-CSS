const elements = document.querySelectorAll('#card--description .card--section');

elements.forEach((element, i) => {

    element.addEventListener('click', () => {
        const arrow = document.getElementById(`answer-arrow-${i+1}`)
        const question = document.getElementById(`section-question-${i+1}`)
        const answer = document.getElementById(`answer-${i+1}`)

        arrow.classList.toggle('flip')
        answer.classList.toggle('active')

        if(!question.classList.contains('font--color')){
            question.classList.add('font--color')
        }else{
            question.classList.remove('font--color')
        }
    })    
});