const btn = document.querySelector("button");
const str = document.querySelector("input");
btn.addEventListener("click", (e) => {
e.preventDefault();

const inputWord = str.value.toLocaleLowerCase();
const string = inputWord.split("");
const reArray = string.reverse();
const joinArray = reArray.join("");

if(inputWord == joinArray)
{
    document.querySelector(".output-text").innerHTML = `<div>
    <p>${inputWord} = ${joinArray}  </p>
    <p style="font-size: 1rem" >It is a Palindrome.</p>
    </div>`;
    str.value = "";
}
else{
    document.querySelector(".output-text").innerHTML = `<div>
    <p style="font-size: 1rem"> It is not a Palindrome </p>
    </div>`
}





});