peopl = [];
function clickedme() {
        var person_1 = document.getElementById("name_of_the_student_1").value;
        var person_2 = document.getElementById("name_of_the_student_2").value;
        var person_3 = document.getElementById("name_of_the_student_3").value;
        var person_4 = document.getElementById("name_of_the_student_4").value;

        peopl.push(person_1);
        peopl.push(person_2);
        peopl.push(person_3);
        peopl.push(person_4);

    document.getElementById("a_div").innerHTML = peopl;
    console.log("peopl");
    document.getElementById("cookieclicker").style.display = "none";
    document.getElementById("cookieshower").style.display = "inline-block";
}
function sortme() {
    peopl.sort();
    document.getElementById("a_div").innerHTML = peopl;
    console.log("peopl");
}