var removeBotton = document.getElementsByClassName('material-icons rm md-48')
console.log(removeBotton);
for (var i=0; i<removeBotton.length; i++)
    {
        var button=removeBotton[i];
        
            button.addEventListener('click',function(e){
                console.log('clicked');
               var buttonClicked=e.target;
              
               buttonClicked.parentElement.parentElement.remove();
            }) 
    }
