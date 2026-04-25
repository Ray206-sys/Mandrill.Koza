const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const result = document.getElementById("result");

        result.textContent = "マンドリルになりたい...!";

        setTimeout(() => {
            const random = Math.random();

            if(random < 0.4){
                result.textContent = "あなたにはマンドリルになる才能があります！";
                result.style.color = "green";
            } else {
                result.textContent = "あなたはマンドリストからの指導を受けた後再挑戦してください。";
                result.style.color = "blue";
            }
        }, 1000);
    });
}



/*猿レベル診断プロセス*/
window.addEventListener("DOMContentLoaded", function(){

    document.getElementById("check").addEventListener("click", function(){

        let score = 0;

        const names = ["Q1", "Q2", "Q3", "Q4", "Q5"];

        for(let i = 0; i < names.length; i++){
            const q = document.querySelector(`input[name="${names[i]}"]:checked`);
            if(q) score += Number(q.value);
        }

        const result = document.getElementById("result");

        if(score === 10){
            result.textContent = "あなたはマンドリストです。今すぐ入社してください";
        } else if(score >= 8){
            result.textContent = "マンドリラーです。精進してください。";
        } else if(score >=5){
            result.textContent = "まだまだマンドリルだね";
        } else if(score >=0){
            result.textContent = "ただの猿。学べ。"
        }

    });

});