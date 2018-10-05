function active() {
    let divs = $('.container div');
    divs.on('mouseover', changeStatus);

    function changeStatus() {
        divs.removeClass('active');
        $(this).addClass('active');
    }
}