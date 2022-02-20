const questionContainer=document.querySelectorAll('.question-item');
const answers=document.querySelectorAll('.answer');
questionContainer.forEach(item=>{
    const btn=item.querySelector('.icon');
    const answer=item.querySelector('.answer')
    btn.addEventListener('click',function(){
        answers.forEach(item=>{
            if(item!==answer){
                item.classList.remove('show')
            }
        })
        answer.classList.toggle('show')
    })
})