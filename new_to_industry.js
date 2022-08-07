const faqToogle1 = document.querySelector('.faq_toggle1');
const dropdownTxt1 = document.querySelector('.down_txt1');
const faqToogle12 = document.querySelector('.faq_toggle2');
const dropdownTxt2 = document.querySelector('.down_txt2');
const faqToogle13 = document.querySelector('.faq_toggle3');
const dropdownTxt3 = document.querySelector('.down_txt3');
const faqToogle14 = document.querySelector('.faq_toggle4');
const dropdownTxt4 = document.querySelector('.down_txt4');
const faqToogle15 = document.querySelector('.faq_toggle5');
const dropdownTxt5 = document.querySelector('.down_txt5');


const runToggleEvent = function (attEvent, txt) {
    txt.style.display = "none";
    attEvent.addEventListener('click', 
        function (e) {
            console.log(e.target);
            const target = e.target;
            target.style.animationName = "spin";
            if (txt.style.display === "none") {
                txt.style.display = "block";
            }else{
                txt.style.display = "none";            
                target.style.animationName = "close";
            }
        }
    );
}

runToggleEvent(faqToogle1, dropdownTxt1);
runToggleEvent(faqToogle12, dropdownTxt2);
runToggleEvent(faqToogle13, dropdownTxt3);
runToggleEvent(faqToogle14, dropdownTxt4);
runToggleEvent(faqToogle15, dropdownTxt5);


// faqToogle1.addEventListener('click', 
//     function (e) {
//         // targeted.closest(dropdownTxt);
//         console.log(e.target);
//         const target = e.target;
//         target.style.animationName = "spin";
//         if (dropdownTxt1.style.display === "none") {
//             dropdownTxt1.style.display = "block";
//         }else{
//             dropdownTxt1.style.display = "none";            
//             target.style.animationName = "close";
//         }
//     }
// );

