



var el = document.querySelector('.keyframeDiv')

var btn = document.querySelector('button')
btn.addEventListener('click', startAnimate);

function startAnimate(){
    el.classList.add('keyframeTrial');

    setTimeout( () => {el.style.animationPlayState = 'paused'}, 2500);
    setTimeout( () => {el.classList.remove('keyframeTrial')}, 5000)
}


buttonid.onclick = function() {
    this.style.backgroundColor = 'green';
    this.style.opacity = 0;
  };


// note: the "transition" from CSS works here because the transition takes place whenever the
//property you mention CHANGES! it doens't have to change in CSS class, it can just change in JS!!
//the transition takes effect when the css property chagnes, regardless of how it does
var elTrans = document.querySelector('.transJS');
document.addEventListener('click', () => {
    elTrans.style.backgroundColor = 'orange';
});



var vanishBtn = document.querySelector('.vanishbutton')
var getBody = document.querySelector('body')
vanishBtn.addEventListener('click', () => {
    getBody.classList.add('vanish')
})