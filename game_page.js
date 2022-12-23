function check()
{
    get_answer = document.getElementById("imput_check_box").value;
    answer = get_answer.toLowercase();
    console.log("answear in lower case")
}

function send() {
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    actual_answer = parseInt(Number1) * parseInt(Number2);
    question_number = "<h4>" + " X "+ Number2+"</h4>";
    Input_box = "<br>Answer : <input type='text' id=input_check_box'>";
    check_button = "<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    row = question_number + Input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}