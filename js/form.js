function modalregis() {
    let cl = document.getElementById("popup");
    let hide = document.getElementById("exit");
    let popup = document.getElementById("modal");

	popup.style.display = "block";
    
	hide.addEventListener("click", function() {
		popup.style.display = "none";
	})
}

function Send() {
    let result1 = document.querySelector('.inp:checked').value;
    let result2 = document.querySelector('.inp2:checked').value;
    let result3 = document.querySelector('.inp3:checked').value;
    let result4 = document.querySelector('.inp4:checked').value;
    let result5 = document.querySelector('.inp5:checked').value;
    let result6 = document.querySelector('.inp6:checked').value;


    let data = {    
        'entry.1710507412': result1,
        'entry.1082734637': result2,
        'entry.1418303997': result3,
        'entry.521704283': result4,
        'entry.1110735581': result5,
        'entry.1609233835': result6,
        };
       let queryString = new URLSearchParams(data);
       queryString = queryString.toString();
       console.log(data);
       let xhr = new XMLHttpRequest();
       xhr.open("POST", 'https://docs.google.com/forms/d/e/1FAIpQLSciiLOdIRudNyArrwSwnMgETL6yhaHZXZ5w2v8clHJLWb7dow/formResponse', true);
       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.send(queryString);

        modalregis();
}

function sub() {
        let agree1 = document.getElementById('polii1');
        let agree2 = document.getElementById('polii2');
        
        if (agree1.checked == true || agree2.checked == true) {
            let emails = document.getElementById('emailsub').value;
            let emails1 = document.getElementById('emailsub1').value;
            let data = {    
                'entry.1536382861': emails + emails1,
                };
               let queryString = new URLSearchParams(data);
               queryString = queryString.toString();
               console.log(data);
               let xhr = new XMLHttpRequest();
               xhr.open("POST", 'https://docs.google.com/forms/d/e/1FAIpQLSfLPWWNtGCjx_KQ0KJcTaPRBdpIkqKzsqmBUWNKFzNj-v0VAg/formResponse', true);
               xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
               xhr.send(queryString);
               alert('Đăng ký nhận thông báo thành công')
        }
        else {
            alert('Vui lòng tích vào ô đồng ý.')
        }
}


