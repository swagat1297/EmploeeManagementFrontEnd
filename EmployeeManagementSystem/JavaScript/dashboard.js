$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:3000/employee/showAllEmployee",
        success: function (result, status, xhr) {
            valueEnter(result.data);
            console.log(result.data);
        },
        error: function (xhr, status, error){
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    })

    const valueEnter = (result) => {
        let employee = ''
        $.each(result, function (key, tableValues) {
            employee += `<tr>
        <td>${tableValues.firstName}</td>
        <td>${tableValues.lastName}</td>
        <td>${tableValues.email}</td>
        <td><a href="../Html/edit.html">Edit</a></td>
        <td><a>Delete</a></td>
  </tr>`
        })
        $('#tableBody').append(employee);
    }
})

// if (result == null) {
//     document.getElementById("h2").innerText = "No Record Found!";
// }
// else {
//     document.getElementById("h2").innerText = "Employee Record";
// }