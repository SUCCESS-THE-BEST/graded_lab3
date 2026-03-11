
let btn=document.getElementById("Execute");
btn.addEventListener("click",()=>{
    let sentence=document.getElementById("sentence").value;
    let sent_count=document.getElementById("sent-count");

    //i used the js regular express to select out all upper and lower case letter and int from 0 to 9
    let cler_char=sentence.replace(/[^a-zA-Z0-9\s]/g,""); // so here i used ^ to say if there are not the values replace them with a space

    let final_sent=cler_char.trim().split(" ") ;//so here i trim to get the total words but i split using space to seperate the wors

    let count=final_sent.length;
    sent_count.value=count;

    //displce the words we have in a sentnce 
    document.getElementById("count").innerHTML="#words: "+count;
    let underline_words = "";

    //i used a for loop usig the sentence length then seperte with a space
    for (let i = 0; i < final_sent.length; i++) {
        underline_words += `<u>${final_sent[i]}</u> `;
    }

    document.getElementById("words").innerHTML = underline_words;
});