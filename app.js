

var el = document.querySelector('.keyframeDiv')


var btn = document.querySelector('button')
btn.addEventListener('click', startAnimate);

function startAnimate(){
    
    el.classList.add('keyframeTrial');

    setTimeout( () => {el.style.animationPlayState = 'paused'}, 2500);
    setTimeout( () => {el.classList.remove('keyframeTrial')}, 5000)


}