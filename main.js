let current_index = 0;

function incrementSlide() {
    let slideshow_div = document.getElementById('slideshow-gallery');
    let info_div = document.getElementById('slideshow-info');
    let slideshow_length = slideshow_div.getElementsByClassName('slide').length;
    slideshow_div.getElementsByClassName('slide')[current_index].classList.add('hidden');
    info_div.getElementsByClassName('info-slide')[current_index].classList.add('hidden');

    current_index++;

    if(current_index == slideshow_length)  {
        current_index = 0;
    }

    slideshow_div.getElementsByClassName('slide')[current_index].classList.remove('hidden');
    info_div.getElementsByClassName('info-slide')[current_index].classList.remove('hidden');
}

function decrementSlide() {
    let slideshow_div = document.getElementById('slideshow-gallery');
    let info_div = document.getElementById('slideshow-info');
    let slideshow_length = slideshow_div.getElementsByClassName('slide').length;
    slideshow_div.getElementsByClassName('slide')[current_index].classList.add('hidden');
    info_div.getElementsByClassName('info-slide')[current_index].classList.add('hidden');

    current_index--;

    if(current_index < 0)  {
        current_index = slideshow_length - 1;
    }

    slideshow_div.getElementsByClassName('slide')[current_index].classList.remove('hidden');
    info_div.getElementsByClassName('info-slide')[current_index].classList.remove('hidden');
}