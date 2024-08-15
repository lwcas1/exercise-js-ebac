const A = document.getElementById('A');  
const B = document.getElementById('B');
const msg = document.getElementById('mesage');
const bttn = document.getElementById('button');

function submit() {
    bttn.addEventListener("click", (e) => {
        e.preventDefault();
        if (B.value > A.value) {
            msg.innerHTML = "Tudo certo!";
        } else {
            msg.innerHTML = "Errado! Tente novamente!";
        }
    });
};

submit();