const getDateTimeFunc = () => {
	let now = new Date;
	let hour = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();

	let year = now.getFullYear();
	let month = now.getMonth()+1;
	let day = now.getUTCDate();
	
	

	if(hour < 10){
        document.querySelector('.hours').innerText = '0' + hour;
    } else{
        document.querySelector('.hours').innerText = hour;
    }
    if(minute < 10){
        document.querySelector('.minutes').innerText = '0' + minute;
    } else{
        document.querySelector('.minutes').innerText = minute;
    }
    if(second < 10){
        document.querySelector('.seconds').innerText = '0' + second;
    } else{
        document.querySelector('.seconds').innerText = second;
    }
    
	document.querySelector('.container-date').textContent  = ` ${(day<10)?0+String(day):day} | ${(month<10)?0+String(month):month} | ${year} 	`;

}


setInterval(getDateTimeFunc,1000);

