var students_arr = [];


function submit() {
    var student1 = document.getElementById("name_of_student_1").value;
    var student2 = document.getElementById("name_of_student_2").value;
    var student3 = document.getElementById("name_of_student_3").value;
    var student4 = document.getElementById("name_of_student_4").value;

    students_arr.push(student1);
    students_arr.push(student2);
    students_arr.push(student3);
    students_arr.push(student4);

    console.log(students_arr);

    document.getElementById("answer_div").innerHTML = `${students_arr[0]}, ${students_arr[1]}, ${students_arr[2]}, ${students_arr[3]}`;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";
}

function sort() {
    students_arr.sort();

    document.getElementById("answer_div").innerHTML = students_arr;
    document.getElementById("sort_btn").style.display = "none";
    document.getElementById("submit_btn").style.display = "inline-block";
}