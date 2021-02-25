$(function(){

    $('.qa1').click(function(){faq(1);});
    $('.qa2').click(function(){faq(2);});
    $('.qa3').click(function(){faq(3);});
    $('.qa4').click(function(){faq(4);});
    $('.qa5').click(function(){faq(5);});

});
function faq(n){
    $('#qalist1').hide();
    $('#qalist2').hide();
    $('#qalist3').hide();
    $('#qalist4').hide();
    $('#qalist5').hide();
    $('#qalist' + n).show();
}