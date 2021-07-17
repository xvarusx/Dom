var removeBotton = document.getElementsByClassName('material-icons rm md-48')
console.log(removeBotton);
for (var i=0 ;i<removeBotton.length ; i++)
    {
       
        
        removeBotton[i].addEventListener('click',function(e){
                console.log('clicked');
               var buttonClicked=e.target;
              
               buttonClicked.parentElement.parentElement.remove();
            }) 
}
var likeButton = document.getElementsByClassName('material-icons recemendet');
console.log(likeButton);
for(var i=0;i<likeButton.length;i++){
        var buttonlike=likeButton[i];
        button.addEventListener('click',function(e){
            var buttonLiked=e.target
            buttonLiked.style.color='red';

        })
}
