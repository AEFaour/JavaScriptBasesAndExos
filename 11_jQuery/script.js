'use strict'


$(document).ready(function () {
    //jQuery UI:
    $('#date').datepicker();

    $('h1').click(function () {
        $('#paragraphe').text(`Nouveau text !`);
    });
    $('h2').dblclick(function () {
        $('#ma_div').css('background', '#000');
        $('#ma_div > p').css({
            color: 'white',
            fontSize: '30px',
            fontWeight: 700,
            'font-style': 'italic'
        });

    });

    $('.show').show();
    $('.hide').hide();
    $('.hide2').hide(2000);
    $('.hide3').hide('slow');
    $('.hide4').hide(8000,'linear');
    $('.hide5').hide(8000,'swing');

    //animate
    $('h3#1').click(function () {
        $('#anim1').animate({
            height:'200px',
            width:'300px'
        },2000,'swing');
    });
    $('h3#2').click(function () {
        $('#anim2').animate({
            height:'400px',
            width:'400px'
        },2000,'swing',function () {
            alert('animation finie !');
        });
    });

    $('h3#3').click(function () {
        $('#anim3').animate({
            height:'400px',
            width:'400px',
            borderRadius: '50%',
        },1000, 'swing', function () {
            $('#anim3').animate({
                height:'150px',
                width:'150px'
            },1500,'linear',function () {
                $('#anim2').animate({
                    height:'50px',
                    width:'500px'
                },3000,'swing')
            })
        });
    });

})


