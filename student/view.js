function render(students){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>ข้อมูลนักศึกษา</title>
    </head>
    <body bgcolor="#FFCC33">
     <table>
        <th>ลำดับ</th>
        <th>ชื่อ-นามสกุล</th>
        <th>เกรดเฉลี่ย</th>
        <tbody>
            ${students
            .map((student)=> `<tr>
                <td>${student.id}</td>
                <td>${student.title}</td>
                <td>${student.grade}</td>
                <td> <a href ="/student/delete/${student.id}">delete</a></td>
            <tr>`)
         .join('')}
        </tbody>
      </table>
    </body>
    </html>
    `};
    
    module.exports = render;
    