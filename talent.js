
const homeUnderline = document.querySelector('.home_underline');
const impactUnderline = document.querySelector('.impact_underline');
const whyUsUnderline = document.querySelector('.why_us_underline');
    


// Using intersection observer API

const homeSection = document.querySelector('.hero_section');
const revealSection3 = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting) return;
  
    impactUnderline.classList.remove('show');
    homeUnderline.classList.add('show');
    whyUsUnderline.classList.remove('show');

}


const  section_observer3 = new IntersectionObserver(revealSection3, {
    root: null,
    threshold: 0.15,
});
section_observer3.observe(homeSection);

const impactSection = document.querySelector('.impact_section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting) return;
  
    impactUnderline.classList.add('show');
    homeUnderline.classList.remove('show');
    whyUsUnderline.classList.remove('show');

}

const  section_observer = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});
section_observer.observe(impactSection);

const whySection = document.querySelector('.why_hire_us');
const revealSection2 = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting) return;
  
    impactUnderline.classList.remove('show');
    homeUnderline.classList.remove('show');
    whyUsUnderline.classList.add('show');

}

const  section_observer2 = new IntersectionObserver(revealSection2, {
    root: null,
    threshold: 0.15,
});
section_observer2.observe(whySection);
