const body = document.querySelector("body");
const education = document.querySelector('.education__name');
const educationTable = document.querySelector('.education__table');
const aboutMe = document.querySelector('.aboutMe__name');
const aboutMeTable = document.querySelector('.aboutMe__table');
const projectName = document.querySelector('.projects__slider__info__name');
const projectInfo = document.querySelector('.projects__slider__info__text');
const projectImage = document.querySelector('.projects__slider__image');
const showDescription = document.querySelector('.projects__slider__info__show_description');
const description = document.querySelector('.projects__slider__info__text');
const projects = [
    {'name': 'Repair and design', 'info': '1) HTML<br> 2) SCSS', 'img': 'assets/images/repair.png', 'page': 'projects/repair-design-project/index.html'}, 
    {'name': 'Theyalow', 'info': '1) HTML<br>2) CSS', 'img': 'assets/images/theyalow.jpg', 'page': 'projects/theyalow/index.html'},
    {'name': 'Weather', 'info': '1) HTML<br>2) SCSS<br>3) JS<br>4) WEBPACK', 'img': 'assets/images/weather.png', 'page': 'projects/weather/index.html'},
    {'name': 'Virtual keyboard', 'info': '1) HTML<br>2) CSS<br>3) JS', 'img': 'assets/images/keyboard.png', 'page': 'projects/codejam-virtual-keyboard/index.html'},
];
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
let i = 0;
let swipe = 0;
let startX;
let startY;
let dist;

projectImage.style.backgroundSize = 'cover';

function show(target, elem) {
    if (target.className.indexOf('active') === -1) {
        elem.style.display = 'block';
        target.className += ' active';
        if (target === showDescription) {
            target.childNodes.textContent = 'Hide description';
            projectImage.style.webkitFilter = 'blur(5px)';
        }
    } else {
        elem.style.display = 'none';
        target.className = target.className.replace(/ active/g, '');
        if (target === showDescription) {
            target.childNodes.textContent = 'Show description';
            projectImage.style.webkitFilter = 'none';
        }
    }
}

function switchProject() {
    if (i === 0 && body.offsetWidth >= 675) {
        projectImage.style.backgroundSize = 'cover';
    } else if(body.offsetWidth >= 675) projectImage.style.backgroundSize = 'contain';

    projectName.textContent = projects[i].name;
    projectInfo.innerHTML = projects[i].info;
    projectImage.style.backgroundImage = `url('${projects[i].img}')`;
}

education.addEventListener('click', () => {
    show(education, educationTable);
});

aboutMe.addEventListener('click', () => {
    show(aboutMe, aboutMeTable);
});

showDescription.addEventListener('click', () => {
    show(showDescription, description);
});

arrowLeft.addEventListener('click', () => {
    (i === 0) ? i = projects.length - 1 : i--;
    switchProject();
});

arrowRight.addEventListener('click', () => {
    (i === projects.length - 1) ? i = 0 : i++;
    switchProject();
});

projectImage.addEventListener('click', () => {
    document.location = projects[i].page;
});
  
function handleSwipe(swipe){
    if (swipe === 'right'){
        (i === 0) ? i = projects.length - 1 : i--;
        switchProject();
    } else if (swipe === 'left'){
        (i === projects.length - 1) ? i = 0 : i++;
        switchProject();
    } else {
        document.location = projects[i].page;
    }
}

projectImage.addEventListener('touchstart', function(e){
    var touchElem = e.changedTouches[0];
    dist = 0;
    startX = touchElem.pageX;
    e.preventDefault();
});

projectImage.addEventListener('touchmove', function(e){
    e.preventDefault();
});

projectImage.addEventListener('touchend', function(e){
    var touchElem = e.changedTouches[0];
    dist = touchElem.pageX - startX;
    var swipe = (dist > 0) ? 'right' : (dist < 0) ? 'left' : 'click';
    handleSwipe(swipe);
    e.preventDefault();
});