$(function(){
    
    window.addEventListener('scroll',function parallele(){
        
        var menu = document.getElementById('menu');
       var offset = window.pageYOffset;
        var navigator = document.querySelectorAll('#menu .navi');
        var paragraaf = document.querySelectorAll('.navi .para');
        
        
        if(offset >200){
           menu.style.transition = 'height 1.0s linear 0s'; 
           menu.style.height = '25px';
        
            
             navigator[0].style.transition = 'height 1.0s linear 0s'; 
            navigator[0].style.height = '30px';
            
            navigator[0].style.transition = 'bottom 1.0s linear 0s'; 
            navigator[0].style.bottom = '30px';
            
            for(var i = 0; i <= 5; i++){
                
                paragraaf[i].style.position = 'relative';
                 paragraaf[i].style.marginTop = '-2px';
                
                }
        }else{
            menu.style.transition = 'height 1.0s linear 0s'; 
            menu.style.height = '120px';
            
             navigator[0].style.transition = 'height 1.0s linear 0s'; 
            navigator[0].style.height = '70px';
            
            navigator[0].style.transition = 'bottom 1.0s linear 0s'; 
            navigator[0].style.bottom = '0px';
            
            for(var i = 0; i <= 5; i++){
                
                paragraaf[i].style.position = 'relative';
                 paragraaf[i].style.marginTop = '15px';
                
                }
            
        }
        
    },false)
    
    
})