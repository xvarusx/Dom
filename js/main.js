
var removeBotton = document.getElementsByClassName('delete')
console.log(removeBotton);
for (var i=0 ;i<removeBotton.length ; i++){
      var bottonRemove= removeBotton[i];
      bottonRemove.addEventListener('click',function(e){
                console.log('clicked');
               var buttonClicked=e.target;
              
               buttonClicked.parentElement.parentElement.parentElement.remove();
            }) 
}
var likeBotton = document.getElementsByClassName('like');
for(var i=0;i<likeBotton.length;i++){
    var bottonLike =likeBotton[i]
    bottonLike.addEventListener('click',function(e){
            var botton=e.target;
             if(botton.style.color=='red'){
                 botton.style.color='rgb(219, 218, 218)';
             }else{
                botton.style.color='red';}

        })
}
var addBotton=document.getElementsByClassName('material-icons add')
for(var i=0;i<addBotton.length;i++){
    console.log(addBotton[i]);
    var bottonAdd=addBotton[i];
    bottonAdd.addEventListener('click',function(e){
    var botton=e.target;
    
   var inputField=botton.parentElement.firstElementChild.nextElementSibling;
       inputField.value=parseInt(parseInt(inputField.value)+1);   
})
}
var decBotton=document.getElementsByClassName('material-icons rm')
for(var i=0;i<decBotton.length;i++){
    console.log(decBotton[i]);
    var bottonDec=decBotton[i];
    bottonDec.addEventListener('click',function(e){
    var botton=e.target;
    
   var inputField=botton.parentElement.firstElementChild.nextElementSibling;
       inputField.value=parseInt(parseInt(inputField.value)-1);   
})
}
function updateCarttotal(){
  
}