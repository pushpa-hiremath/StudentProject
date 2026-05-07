function addStudent() {

    let studentName = document.getElementById("studentName").value;

    let li = document.createElement("li");

    li.textContent = studentName;

    document.getElementById("studentList").appendChild(li);
}