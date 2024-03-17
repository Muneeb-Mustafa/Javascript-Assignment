
//  Alert name
document.getElementById("alert").onclick= function(){
    alert("Muneeb Mustafa")
    let statement = alert("Muneeb Mustafa")
    document.getElementById('Statement').innerHTML = 'alert("Muneeb Mustafa")'
    
}
document.getElementById("alert_number").onclick= function(){
    alert(123)
    let statement = "12354425"
    document.getElementById('Statement').innerHTML = statement
}
document.getElementById("variable_name").onclick = function(){
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters,numbers,dollar signs and underscores.</li><li>Though a variable name can't be any of javascript keywords, it can contain keywords. For example, <code>useralert</code> and <code>myVar</code> are legal.<li>Capital letters are fine, but be careful.Variable names are case sensitive. A <code>rose</code>is not a <code>Rose</code>If you assign the string Floribunds to the variable <code>rose</code>, and then ask javascript for the value assigned  to <code>Rose</code>, you will come up empty.</li></ul>"
    document.getElementById('output').innerHTML = html
}
document.getElementById("camel").onclick = function(){
    let html = "<ul><li>user</li><li>userTime</li><li>userTimeLimit</li></ul>"
    document.getElementById('output').innerHTML = html
}

document.getElementById("sum").onclick = function(){
    let num1 = 10;
    let num2 = 50;
    let sum = num1 + num2;
    document.getElementById("output").innerHTML =  "<p class='text-center'>" + sum +"</p>"
    let statement = "let num1 = " + num1 + ";<br>let num2=" + num2 + ";<br>let sum = num1 + num2;" 
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("subtract_num").onclick = function(){
    let num1 = 10;
    let num2 = 50;
    let sum = num1 - num2;
    document.getElementById("output").innerHTML =  "<p class='text-center'>" + sum +"</p>"
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 - num2;" 
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("multiply_num").onclick = function(){
    let num1 = 10;
    let num2 = 50;
    let sum = num1 * num2;
    document.getElementById("output").innerHTML =  "<p class='text-center'>" + sum +"</p>"
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 * num2;" 
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("divide_num").onclick = function(){
    let num1 = 10;
    let num2 = 50;
    let sum = num1 / num2;
    document.getElementById("output").innerHTML =  "<p class='text-center'>" + sum +"</p>"
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 / num2;" 
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("calculate").onclick = function(){
    let calculateSomeNumbers = 36 / 4 * 3 + 2 ** 6 - (5+8);
    document.getElementById('output').innerHTML = "<p class='text-center'>" + calculateSomeNumbers +"</p>"
    let statement = "let calculateSomeNumbers = 36 / 4 * 3 + 2 ** 6 - (5+8);"
    document.getElementById('Statement').innerHTML = statement;
}
document.getElementById("clear").onclick = function(){

    document.getElementById('Statement').innerHTML = ('');
}
document.getElementById("out").onclick = function(){

    document.getElementById('output').innerHTML = ('');
}





