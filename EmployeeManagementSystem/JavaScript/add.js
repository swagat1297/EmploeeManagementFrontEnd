

addInput = (event) => {
    event.preventDefault();
    // $errors = array();
    // $data = array();
    // $(document).ready(function () {
    //     if (empty($_POST['firstName']))
    //         $errors['firName'] = 'First Name is required.';

    //     if (empty($_POST['lastName']))
    //         $errors['lastName'] = 'Last Name is required.';

    //     if (empty($_POST['email']))
    //         $errors['email'] = 'Email is required.';
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/employee/addEmployee",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify({
            "firstName": $('#firstName').val(),
            "lastName": $('#lastName').val(),
            "email": $('#email').val()
        }),
        success: function (result, status, xhr) {
            console.log(result.data);
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    })
}