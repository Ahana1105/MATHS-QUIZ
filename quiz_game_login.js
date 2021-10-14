p1_name = localStorage.getItem("player1");
p2_name = localStorage.getItem("player2");

p1_score = 0;
p2_score = 0;

document.getElementById("p1").innerHTML = p1_name;
document.getElementById("p2").innerHTML = p2_name;

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("p_question").innerHTML = "Question turn : " + p1_name;
document.getElementById("p_answer").innerHTML = "Answer turn : " + p2_name;

function send() {
  number1 = document.getElementById("n1").value;
  number2 = document.getElementById("n2").value;

  question = number1 + " X " + number2;
    question_word = "<h4 id='word_display'> Q." + question + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box' >";
    button_check = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + button_check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value= "";
    document.getElementById("n2").value= "";
    final_ans = number1 * number2;
}

q_turn = "player 1";
a_turn = "player 2";

function check() {
    get_answer = document.getElementById("input_check_box").value;


    if (final_ans == get_answer) {
       if (a_turn == "player 1") {
           p1_score = p1_score +1;
           console.log("p1_score" + p1_score);
           document.getElementById("p1_score").innerHTML = p1_score; 

       } else {
           p2_score = p2_score + 1;
           console.log("p2_score" + p2_score);
           document.getElementById("p2_score").innerHTML = p2_score;
       }
    }

    if (q_turn == "player 1") {
        q_turn = "player 2";
        document.getElementById("p_question").innerHTML = "Question Turn : " + p2_name;
    } else if  (q_turn == "player 2"){
     q_turn = "player 1";
     document.getElementById("p_question").innerHTML = "Question Turn : " + p1_name;
    }

    if (a_turn == "player 1") {
        a_turn = "player 2";
        document.getElementById("p_answer").innerHTML = "Answer Turn : " + p2_name;
    } else if (a_turn == "player 2") {
     a_turn = "player 1";
     document.getElementById("p_answer").innerHTML = "Answer Turn : " + p1_name;
    }
    document.getElementById("output").innerHTML = "";
}