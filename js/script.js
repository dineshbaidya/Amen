//console.log('script is running');

//Navbar

// Get the elements
const accLinkDiv = document.getElementById("accLinkDiv").scrollHeight;
const logoSigninDiv = document.querySelector("#logoSigninDiv");
const cartDiv = document.querySelector("#cartDiv");
//console.log(accLinkDiv);
if(accLinkDiv<30){
logoSigninDiv.style.height = 155;
}else if(accLinkDiv>30 && accLinkDiv<45){
logoSigninDiv.style.height = 165;
}else if(accLinkDiv>45 && accLinkDiv<60){
logoSigninDiv.style.height = 185;
}else if(accLinkDiv>60 && accLinkDiv<75){
logoSigninDiv.style.height = 205;
}else if(accLinkDiv>75 && accLinkDiv<90){
logoSigninDiv.style.height = 225;
}else if(accLinkDiv>90 && accLinkDiv<105){
logoSigninDiv.style.height = 245;
}else if(accLinkDiv>105 && accLinkDiv<120){
logoSigninDiv.style.height = 265;
}else if(accLinkDiv>135 && accLinkDiv<150){
logoSigninDiv.style.height = 285;
}else if(accLinkDiv>150 && accLinkDiv<165){
logoSigninDiv.style.height = 305;
}else if(accLinkDiv>165 && accLinkDiv<180){
logoSigninDiv.style.height = 325;
}else if(accLinkDiv>180 && accLinkDiv<195){
logoSigninDiv.style.height = 345;
}else{
logoSigninDiv.style.height = 365;
}
//console.log(logoSigninDiv.scrollHeight)
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
if(
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc.")
{
//console.log('Chrome Browser');
}else{
document.getElementsByClassName('search')[0].style.paddingBottom=3.5;
}

let theDiv = document.getElementsByClassName('about-content')[0];
let divHeight = theDiv.clientHeight;
if(divHeight>306){
theDiv.style.paddingBottom= 45;
}

const prevDiv1 = document.getElementsByClassName('prev-div')[0];
const nextDiv1 = document.getElementsByClassName('next-div')[0];
const prevImg1 = document.getElementsByClassName('prev-icon')[0];
const nextImg1 = document.getElementsByClassName('next-icon')[0];

prevDiv1.addEventListener("mouseover", mouseover);
prevDiv1.addEventListener("mouseout", mouseout);

nextDiv1.addEventListener("mouseover", mouseoverNext);
nextDiv1.addEventListener("mouseout", mouseoutNext);

function mouseover() {
  prevImg1.style.transform='scale(1.4)';
  prevImg1.style.transition='all .2s ease-in';
}
function mouseout() {
  prevImg1.style.transform='scale(1)';
  prevImg1.style.transition='all .2s ease-in';
}
function mouseoverNext() {
  nextImg1.style.transform='scale(1.4)';
  nextImg1.style.transition='all .2s ease-in';
}
function mouseoutNext() {
  nextImg1.style.transform='scale(1)';
  nextImg1.style.transition='all .2s ease-in';
}

const subDiv = document.getElementsByClassName('subscribe-div')[0]; 
const shadowDiv = document.getElementsByClassName('shadow-subcribe-div')[0]; 

shadowDiv.style.height=subDiv.clientHeight;

// Sponcers Image Part

const carousel = document.querySelector('.spocers-img-div');
const arrowIcons = document.querySelectorAll('.icon-divs');
const firstImg = carousel.getElementsByClassName('sponcers-imgs-div')[0];
//console.log(carousel.scrollLeft);
const scroll = firstImg.offsetWidth +25;
const scrollPrev = firstImg.offsetWidth+25;
let scrollWidth = carousel.scrollWidth - carousel.offsetWidth;
let firstImgWidth = firstImg.offsetWidth+25;
window.addEventListener("load", (event) => {
  showHideIcons();
  currentIndexNo = 0;
});
const showHideIcons = () =>{
arrowIcons[1].style.display= carousel.scrollLeft == 0 ? "none" : "block";
arrowIcons[0].style.display= carousel.scrollLeft == scrollWidth ? "none" : "block";
}
function nextClick() {
carousel.scrollLeft += scroll*5;
setInterval(()=> showHideIcons(), 100);
}
function prevClick() {
carousel.scrollLeft -= scrollPrev*5;
setInterval(()=> showHideIcons(), 100);
}

//top slider

let nowIndexNo = 0;
let sliderDivs = document.querySelectorAll('.sliders-div');
let topSliderDots = document.querySelectorAll('.btns');


let topNextIconDiv = document.getElementById('next-icon-div');
let topPrevIconDiv = document.getElementById('prev-icon-div');

window.addEventListener('load', function() {
  sliderDivs[0].style.transform = 'translateX(0)';
  showHideThePreNextIcon();
  dotsBackgroundChange();
});

for (let dotsClicked = 0; dotsClicked < topSliderDots.length; dotsClicked++) {
  topSliderDots[dotsClicked].addEventListener('click', function() {
    slideControlByDots(dotsClicked);
  });
}

topNextIconDiv.addEventListener('click', function() {
  getNextSlide();
});

topPrevIconDiv.addEventListener('click', function() {
  getPrevSlide();
});

function getNextSlide() {
  if (nowIndexNo === 0) {
    nowIndexNo = 1;
    sliderDivs[nowIndexNo-1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo-1].style.transform = 'translateX(-100%)';
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
  } else if (nowIndexNo === 1) {
    nowIndexNo = 2;
    sliderDivs[nowIndexNo-1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo-1].style.transform = 'translateX(-100%)';
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
  } else if (nowIndexNo === 2) {
    nowIndexNo = 3;
    sliderDivs[nowIndexNo-1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo-1].style.transform = 'translateX(-100%)';
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
  }
}

function getPrevSlide() {
  if (nowIndexNo === 3) {
    nowIndexNo = 2;
    sliderDivs[nowIndexNo].style.transform = 'translateX(-100%)';
    sliderDivs[nowIndexNo+1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo+1].style.transform = 'translateX(100%)';
    
    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 1);
  }else if (nowIndexNo === 2) {
    nowIndexNo = 1;
    sliderDivs[nowIndexNo].style.transform = 'translateX(-100%)';
    sliderDivs[nowIndexNo+1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo+1].style.transform = 'translateX(100%)';
    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 1);
  }else if (nowIndexNo === 1) {
    nowIndexNo = 0;

sliderDivs[nowIndexNo].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo+1].style.transition = '.6s ease';
    sliderDivs[nowIndexNo+1].style.transform = 'translateX(100%)';
    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 1);
  }
}

function slideControlByDots(dotsClicked) {
  if (nowIndexNo === 0 && dotsClicked === 0) {
    return;
  }else if (nowIndexNo === 0 && dotsClicked === 1) {
  nowIndexNo = 1;

  sliderDivs[0].style.transition = '.6s ease';
  sliderDivs[0].style.transform = 'translateX(-100%)';

  sliderDivs[nowIndexNo].style.transition = '0s ease';
  sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

  setTimeout(function() {
  sliderDivs[nowIndexNo].style.transition = '.6s ease';
  sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
  showHideThePreNextIcon();
  dotsBackgroundChange();
  }, 0);

  sliderDivs[0].addEventListener('transitionend', function() {
      sliderDivs[0].style.transition = '0s ease';
      sliderDivs[0].style.transform = 'translateX(100%)';
      sliderDivs[0].removeEventListener('transitionend', arguments.callee);
    });

} else if (nowIndexNo === 0 && dotsClicked === 2) {
    nowIndexNo = 2;

  sliderDivs[0].style.transition = '.6s ease';
  sliderDivs[0].style.transform = 'translateX(-100%)';

  sliderDivs[nowIndexNo].style.transition = '0s ease';
  sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

  setTimeout(function() {
  sliderDivs[nowIndexNo].style.transition = '.6s ease';
  sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
  showHideThePreNextIcon();
  dotsBackgroundChange();
  }, 0);

  sliderDivs[0].addEventListener('transitionend', function() {
      sliderDivs[0].style.transition = '0s ease';
      sliderDivs[0].style.transform = 'translateX(100%)';
      sliderDivs[0].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 0 && dotsClicked === 3) {
    nowIndexNo = 3;
    
    sliderDivs[0].style.transition = '.6s ease';
    sliderDivs[0].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 0);

  sliderDivs[0].addEventListener('transitionend', function() {
      sliderDivs[0].style.transition = '0s ease';
      sliderDivs[0].style.transform = 'translateX(100%)';
      sliderDivs[0].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 1 && dotsClicked === 0) {
    nowIndexNo = 0;

    sliderDivs[1].style.transition = '.6s ease';
    sliderDivs[1].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[1].addEventListener('transitionend', function() {
      sliderDivs[1].style.transition = '0s ease';
      sliderDivs[1].style.transform = 'translateX(100%)';
      sliderDivs[1].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 1 && dotsClicked === 1) {
    return;
  } else if (nowIndexNo === 1 && dotsClicked === 2) {
    nowIndexNo = 2;
    
    sliderDivs[1].style.transition = '.6s ease';
    sliderDivs[1].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 0);

  sliderDivs[1].addEventListener('transitionend', function() {
      sliderDivs[1].style.transition = '0s ease';
      sliderDivs[1].style.transform = 'translateX(100%)';
      sliderDivs[1].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 1 && dotsClicked === 3) {
    nowIndexNo = 3;
    
    sliderDivs[1].style.transition = '.6s ease';
    sliderDivs[1].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 0);

  sliderDivs[1].addEventListener('transitionend', function() {
      sliderDivs[1].style.transition = '0s ease';
      sliderDivs[1].style.transform = 'translateX(100%)';
      sliderDivs[1].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 2 && dotsClicked === 0) {
    nowIndexNo = 0;
    

    sliderDivs[2].style.transition = '.6s ease';
    sliderDivs[2].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[2].addEventListener('transitionend', function() {
      sliderDivs[2].style.transition = '0s ease';
      sliderDivs[2].style.transform = 'translateX(100%)';
      sliderDivs[2].removeEventListener('transitionend', arguments.callee);
    });


  } else if (nowIndexNo === 2 && dotsClicked === 1) {
    nowIndexNo = 1;

    sliderDivs[2].style.transition = '.6s ease';
    sliderDivs[2].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[2].addEventListener('transitionend', function() {
      sliderDivs[2].style.transition = '0s ease';
      sliderDivs[2].style.transform = 'translateX(100%)';
      sliderDivs[2].removeEventListener('transitionend', arguments.callee);
    });


  } else if (nowIndexNo === 2 && dotsClicked === 2) {
    return;
  } else if (nowIndexNo === 2 && dotsClicked === 3) {
    nowIndexNo = 3;
    
    sliderDivs[2].style.transition = '.6s ease';
    sliderDivs[2].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
    }, 0);

  sliderDivs[2].addEventListener('transitionend', function() {
      sliderDivs[2].style.transition = '0s ease';
      sliderDivs[2].style.transform = 'translateX(100%)';
      sliderDivs[2].removeEventListener('transitionend', arguments.callee);
    });


  } else if (nowIndexNo === 3 && dotsClicked === 0) {
    nowIndexNo = 0;

    sliderDivs[3].style.transition = '.6s ease';
    sliderDivs[3].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[3].addEventListener('transitionend', function() {
      sliderDivs[3].style.transition = '0s ease';
      sliderDivs[3].style.transform = 'translateX(100%)';
      sliderDivs[3].removeEventListener('transitionend', arguments.callee);
    });

  } else if (nowIndexNo === 3 && dotsClicked === 1) {
    nowIndexNo = 1;
    
    sliderDivs[3].style.transition = '.6s ease';
    sliderDivs[3].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[3].addEventListener('transitionend', function() {
      sliderDivs[3].style.transition = '0s ease';
      sliderDivs[3].style.transform = 'translateX(100%)';
      sliderDivs[3].removeEventListener('transitionend', arguments.callee);
    });


  } else if (nowIndexNo === 3 && dotsClicked === 2) {
    nowIndexNo = 2;
    
    sliderDivs[3].style.transition = '.6s ease';
    sliderDivs[3].style.transform = 'translateX(-100%)';

    sliderDivs[nowIndexNo].style.transition = '0s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(100%)';

    setTimeout(function() {
    sliderDivs[nowIndexNo].style.transition = '.6s ease';
    sliderDivs[nowIndexNo].style.transform = 'translateX(0)';
    showHideThePreNextIcon();
    dotsBackgroundChange();
   }, 0);

  sliderDivs[3].addEventListener('transitionend', function() {
      sliderDivs[3].style.transition = '0s ease';
      sliderDivs[3].style.transform = 'translateX(100%)';
      sliderDivs[3].removeEventListener('transitionend', arguments.callee);
    });


  } else if (nowIndexNo === 3 && dotsClicked === 3) {
    return;
  }
}

function dotsBackgroundChange(){
for(let i=0;i<topSliderDots.length;i++){
topSliderDots[i].style.background="#dd90de";
}
topSliderDots[nowIndexNo].style.background="white";
}

function showHideThePreNextIcon(){
if(nowIndexNo===0){
  topPrevIconDiv.style.display= 'none';
  topNextIconDiv.style.display= 'block';
}else if(nowIndexNo===3){
  topPrevIconDiv.style.display= 'block';
  topNextIconDiv.style.display= 'none';
}else{
  topPrevIconDiv.style.display= 'block';
  topNextIconDiv.style.display= 'block';
}
}