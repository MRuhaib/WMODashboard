function clock () {


    var clockElement = document.getElementById('clock');
    console.log(clockElement)
  
    function updateClock ( clock ) {
    
    clock.innerHTML = new Date().toLocaleTimeString();
    console.log(new Date().toLocaleTimeString());
    }
  
    setInterval(function () {
        updateClock( clockElement );
    }, 1000);
  
  };

clock();

