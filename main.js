let img1 = new Image();
img1.src = "img/1.png";
let img2 = new Image();
img2.src = "img/2.png";
let img3 = new Image();
img3.src = "img/3.png";
let img4 = new Image();
img4.src = "img/4.png";
let img5 = new Image();
img5.src = "img/5.png";

let quest = [img1, img2, img3, img4, img5];
let right_answer = [a2, a5, a5, a3, a5]

let num_img = 0;
let num_ans = 0;
let sum = 0;

document.body.appendChild(quest[num_img]);
btn.addEventListener("click", check);

function check(){
    document.body.removeChild(quest[num_img]);
    num_img++;
    document.body.appendChild(quest[num_img]);
    }

btn.addEventListener("click", img);

function img(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (right_answer[num_ans].checked){  
        alert("Ответ верный!");
        sum++;
    } else {
        alert("Ответ неверный");
    }
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Итог:" + sum);
    }
}
