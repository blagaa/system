var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
	formData["lastname"] = document.getElementById("lastname").value;
	formData["age"] = document.getElementById("age").value;
	formData["telephone"] = document.getElementById("telephone").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telephone;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
	document.getElementById("lasttname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("telephone").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.telephone;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("firstname").value == "") {
        isValid = false;
        document.getElementById("firstnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("fistnameValidationError").classList.add("hide");
    }
    return isValid;
}
function validate() {
    isValid = true;
    if (document.getElementById("lastname").value == "") {
        isValid = false;
        document.getElementById("lastnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lastnameValidationError").classList.contains("hide"))
            document.getElementById("lastnameValidationError").classList.add("hide");
    }
    return isValid;
}
function validate() {
    isValid = true;
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("ageValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ageValidationError").classList.contains("hide"))
            document.getElementById("ageValidationError").classList.add("hide");
    }
    return isValid;
}
function validate() {
    isValid = true;
    if (document.getElementById("telephone").value == "") {
        isValid = false;
        document.getElementById("telephoneValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("telephoneValidationError").classList.contains("hide"))
            document.getElementById("telephoneValidationError").classList.add("hide");
    }
    return isValid;
}
