$('input').on('change',function(){
sum_numbers();  
});
function sum_numbers(){
var a = $('.anyclass').val();
var b = $('.otherclass').val();
if(a.substring(1) === "-"){
 a= parseInt(a) * -1;
}else{
 a= parseInt(a);
}
if(b.substring(1) === "-"){
 b= parseInt(b) * -1;
}else{
 b= parseInt(b);
}
$('#append_ID').html(a+b);
}
