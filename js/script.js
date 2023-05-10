console.log('script is running');

var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
if(
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc.")
{
console.log('Chrome Browser');
}else{
document.getElementsByClassName('search')[0].style.paddingBottom=3.5;
}

const prevDiv2 = document.getElementsByClassName('top-icon-bg-prev')[0];
const nextDiv2 = document.getElementsByClassName('top-icon-bg-next')[0];
const prevImg2 = document.getElementsByClassName('top-prev')[0];
const nextImg2 = document.getElementsByClassName('top-next')[0];

prevImg2.addEventListener("mouseover", mouseover2);
prevImg2.addEventListener("mouseout", mouseout2);

nextImg2.addEventListener("mouseover", mouseoverNext2);
nextImg2.addEventListener("mouseout", mouseoutNext2);


prevDiv2.addEventListener("mouseover", mouseover2);
prevDiv2.addEventListener("mouseout", mouseout2);

nextDiv2.addEventListener("mouseover", mouseoverNext2);
nextDiv2.addEventListener("mouseout", mouseoutNext2);

function mouseover2() {
  prevDiv2.style.transform='scale(1.2)';
  prevImg2.style.transform='scale(1.2)';
}
function mouseout2() {
  prevDiv2.style.transform='scale(1)';
  prevImg2.style.transform='scale(1)';
}
function mouseoverNext2() {
  nextDiv2.style.transform='scale(1.2)';
  nextImg2.style.transform='scale(1.2)';
}
function mouseoutNext2() {
  nextDiv2.style.transform='scale(1)';
  nextImg2.style.transform='scale(1)';
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


//Top Slider


const carousel2 = document.querySelector('.main-slider-div');

const arrowIcons2 = document.querySelectorAll('.top-icon-bg');

const arrowIconsImg = document.querySelectorAll('.top-icons');

const firstImg2 = carousel2.getElementsByClassName('sliders-div')[0];

console.log(carousel2.scrollLeft);

const scroll2 = firstImg2.offsetWidth;

const scrollPrev2 = firstImg2.offsetWidth;

let scrollWidth2 = carousel2.scrollWidth - carousel2.offsetWidth;

let firstImgWidth2 = firstImg2.offsetWidth;

window.addEventListener("load", (event) => {
  setInterval(()=> showHideIcons2(), 1);
});

const showHideIcons2 = () =>{
arrowIcons2[0].style.opacity= carousel2.scrollLeft == 0 ? 0 : 1;
arrowIcons2[0].style.cursor= carousel2.scrollLeft == 0 ? 'default' : 'pointer';
arrowIcons2[1].style.opacity= carousel2.scrollLeft == scrollWidth2 ? 0 : 1;
arrowIcons2[1].style.cursor= carousel2.scrollLeft == scrollWidth2 ? 'default' : 'pointer';

arrowIconsImg[0].style.opacity= carousel2.scrollLeft == 0 ? 0 : 1;
arrowIconsImg[0].style.cursor= carousel2.scrollLeft == 0 ? 'default' : 'pointer';

arrowIconsImg[1].style.opacity= carousel2.scrollLeft == scrollWidth2 ? 0 : 1;
arrowIconsImg[1].style.cursor= carousel2.scrollLeft == scrollWidth2 ? 'default' : 'pointer';
}
function sliderNextClick2() {
carousel2.scrollLeft += scroll2;
setInterval(()=> showHideIcons2(), 100);
}
function sliderPrevClick2() {
carousel2.scrollLeft -= scrollPrev2;
setInterval(()=> showHideIcons2(), 100);
}

const innerDots = document.querySelectorAll('.inner-dot');

setInterval(()=> innerDotsFunc(), 1);

const innerDotsFunc = () =>{
if(carousel2.scrollLeft<500){
for(i=0; i<innerDots.length;i++){
innerDots[i].style.background = 'transparent';
}
innerDots[0].style.background = 'white';
innerDots[0].style.height = '8px';
innerDots[0].style.width = '8px';
}else if(carousel2.scrollLeft>500 && carousel2.scrollLeft<1300){
for(i=0; i<innerDots.length;i++){
innerDots[i].style.background = 'transparent';
}
innerDots[1].style.background = 'white';
innerDots[1].style.height = '8px';
innerDots[1].style.width = '8px';
}
else if(carousel2.scrollLeft>1300 && carousel2.scrollLeft<2000){
for(i=0; i<innerDots.length;i++){
innerDots[i].style.background = 'transparent';
}
innerDots[2].style.background = 'white';
innerDots[2].style.height = '8px';
innerDots[2].style.width = '8px';
}
else if(carousel2.scrollLeft>2000 && carousel2.scrollLeft<2400){
for(i=0; i<innerDots.length;i++){
innerDots[i].style.background = 'transparent';
}
innerDots[3].style.background = 'white';
innerDots[3].style.height = '8px';
innerDots[3].style.width = '8px';
}
}

function scrollDots(dotsVal){
if(dotsVal==0){
carousel2.scrollLeft = 0;
}else if(dotsVal==1){
carousel2.scrollLeft = 774;
}else if(dotsVal==2){
carousel2.scrollLeft = 1548;
}else if(dotsVal==3){
carousel2.scrollLeft = 2322;
}
}



//Navbar Problem


// Get the elements
const accLinkDiv = document.getElementById("accLinkDiv").scrollHeight;
const logoSigninDiv = document.querySelector("#logoSigninDiv");
const cartDiv = document.querySelector("#cartDiv");

console.log(accLinkDiv);

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


console.log(logoSigninDiv.scrollHeight);






































