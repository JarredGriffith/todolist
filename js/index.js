//create to do item
document.getElementById("button").addEventListener("click",() => {
    //creating a element
    let li = document.createElement("li"); 
    //grabing the text from the input feild
    let text = document.getElementById("input").value; 
    let t = document.createTextNode(text); 
    li.appendChild(t);
    //appends the text to the list
    document.getElementById("list").appendChild(li); 
    //clears the input feild.
    document.getElementById("input").value = " "
}); 

