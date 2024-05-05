let yes = document.getElementById('yes');
let no = document.getElementById("no");


const wrapper = 
document.querySelector('.wrapper');
const question = 
document.querySelector('.question');

const yesBtn = document.querySelector('.yes-btn');
const noBtn= document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'আমার ও আপনাকে ভালো লাগে';
});

no.addEventListener('mouseover', () =>{
    no.style.position ="absolute";
    no.style.top =Math.floor(Math.random()*40) + 'vh';
    no.style.right = Math.floor(Math.random()*40) + "vh"
});


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'আমার ও আপনাকে ভালো লাগে, বিশেষ করে পর্দা করাটা';
});
