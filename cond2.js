var userName = prompt('Enter your Name');
var age = +prompt('Enter your Age');
var classRoom = +prompt('Enter your Class');
var classMarks = +prompt('Enter your Marks');
var grade;

document.write('Student Name is ' + userName + "<br>" + "<br>");
document.write('Student Age is ' + age + "<br>" + "<br>");
document.write('Student Past Class is ' + classRoom + "<br>" + "<br>");
document.write('Student Marks is ' + classMarks + "<br>" + "<br>");

if(classMarks > 69 && classMarks < 79){
    grade = "C";
    document.write('Your grade is '+ grade + "<br>" + "<br>");
    classRoom++;
    document.write('Congratulations ' + userName + ' your are ' + 'Next is ' + classRoom + "<br>" + "<br>");
}else if(classMarks > 78 && classMarks < 86){
    grade = "B";
    document.write('Your grade is '+ grade + "<br>" + "<br>");
    classRoom++;
    document.write('Congratulations ' + userName + ' your are ' + 'Next is ' + classRoom + "<br>" + "<br>");
}else if(classMarks > 85 && classMarks < 91){
    grade = "A";
    classRoom++;
    document.write('Your grade is '+ grade + "<br>" + "<br>");
    document.write('Congratulations ' + userName + ' your are ' + 'Next is ' + classRoom + "<br>" + "<br>");
}else if(classMarks > 90 && classMarks < 101){
    grade = "A+";
    document.write('Your grade is '+ grade + "<br>" + "<br>");
    classRoom++;
    document.write('Congratulations ' + userName + ' your are ' + 'Next is ' + classRoom + "<br>" + "<br>");
}else if(classMarks > 100){
    document.write('<h1>Please Enter Valid Marks</h1>');
}else if(classMarks > 0 && classMarks < 70){
    grade = "F";
    document.write('Oops ' + userName + ' you are ' + 'Fail ' + "<br>" + "<br>");
}