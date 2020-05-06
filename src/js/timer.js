window.onload = ()=>{
    if(xhr.readyState === 4){
        let timeCount = 60;
        let timeCountTime = document.querySelector(".timeCount_time");
            setInterval(() => {
                timeCountTime.innerHTML = --timeCount;
            }, 1000);
    }
    
};

