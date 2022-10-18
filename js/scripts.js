$(document).ready(() => {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carousel-button').click(() => {
        if( $('#carousel-button').children('span').hasClass('fa-pause') ) {
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
        }
    });
    $('#reserveTableButton').click( () => {
        $('#reserveTableModal').modal('show');
    });
    $('#loginButton').click( () => {
        $('#loginModal').modal('show');
    });
});
