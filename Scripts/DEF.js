/// <reference path="jquery-3.3.1.intellisense.js" />
//*//<reference path="jquery-1.9.1.intellisense.js" />*/

$(document).ready(function () {
    loadData();
});
function getbyID(EmpID) {
    $('#CODE').css('border-color', 'lightgrey');
    $('#DESC').css('border-color', 'lightgrey');
    $('#ADDRESS').css('border-color', 'lightgrey');
    $('#PHONE').css('border-color', 'lightgrey');
    $('#EMAIL').css('border-color', 'lightgrey');
    $('#AUTH_STATUS').css('border-color', 'lightgrey');
    $('#AUTH_DATE').css('border-color', 'lightgrey');
    $('#AUTH_BY').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS').css('border-color', 'lightgrey');
    $('#INACTIVE').css('border-color', 'lightgrey');
    $.ajax({
        url: "/DEF/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE').val(result.CODE);
            $('#DESC').val(result.DESC);
            $('#ADDRESS').val(result.ADDRESS);
            $('#PHONE').val(result.PHONE);
            $('#AUTH_STATUS').val(result.AUTH_STATUS);
            $('#AUTH_DATE').val(result.AUTH_DATE);
            $('#AUTH_BY').val(result.AUTH_BY);
            $('#AUTH_REMARKS').val(result.AUTH_REMARKS);
            $('#INACTIVE').val(result.INACTIVE);

            $('#myModal').modal('hide');
            $('#btnUpdate').hide();
            $('#btnAdd').hide();
            $('#btnEdit').show();
            $('#btnDelete').show();
            disablefields();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

function loadData() {
    $.ajax({
        url: "/DEF/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.CODE + '</td>';
                html += '<td>' + item.ADDRESS + '</td>';
                html += '<td>' + item.PHONE + '</td>';
                html += '<td>' + item.EMAIL + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.CODE + ')">View</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//Add Data Function 
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        CODE: $('#CODE').val(),
        DESC: $('#DESC').val(),
        ADDRESS: $('#ADDRESS').val(),
        PHONE: $('#PHONE').val(),
        EMAIL: $('#EMAIL').val(),
        AUTH_STATUS: $('#AUTH_STATUS').val(),
        AUTH_DATE: $('#AUTH_DATE').val(),
        AUTH_BY: $('#AUTH_BY').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS').val(),
        INACTIVE: $('#INACTIVE').val(),

    };
    $.ajax({
        url: "/DEF/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            clearTextBox();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function validate() {
    var isValid = true;
    if ($('#CODE').val().trim() == "") {
        $('#CODE').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#CODE').css('border-color', 'lightgrey');
    }
    if ($('#DESC').val().trim() == "") {
        $('#DESC').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#DESC').css('border-color', 'lightgrey');
    }
    if ($('#ADDRESS').val().trim() == "") {
        $('#ADDRESS').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#ADDRESS').css('border-color', 'lightgrey');
    }
    if ($('#PHONE').val().trim() == "") {
        $('#PHONE').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#PHONE').css('border-color', 'lightgrey');
    }
    return isValid;
}

function clearTextBox() {
    $('#CODE').val("");
    $('#DESC').val("");
    $('#ADDRESS').val("");
    $('#PHONE').val("");
    $('#EMAIL').val("");
    $('#URL').val("");
    $('#AUTH_STATUS').val("");
    $('#AUTH_DATE').val("");
    $('#AUTH_BY').val("");
    $('#AUTH_REMARKS').val("");
    $('#INACTIVE').val("");
    
    $('#CODEBTN').show();
}

function enablebtn(){
    $('#CODEBTN').hide();
}

function disablefields() {
    document.getElementById("CODE").disabled = true;
    document.getElementById("DESC").disabled = true;
    document.getElementById("ADDRESS").disabled = true;
    document.getElementById("PHONE").disabled = true;
    document.getElementById("EMAIL").disabled = true;
    document.getElementById("URL").disabled = true;
    document.getElementById("AUTH_STATUS").disabled = true;
    document.getElementById("AUTH_DATE").disabled = true;
    document.getElementById("AUTH_BY").disabled = true;
    document.getElementById("AUTH_REMARKS").disabled = true;
    document.getElementById("INACTIVE").disabled = true;
}

function enablefields() {
    document.getElementById("DESC").disabled = false;
    document.getElementById("ADDRESS").disabled = false;
    document.getElementById("PHONE").disabled = false;
    document.getElementById("EMAIL").disabled = false;
    document.getElementById("URL").disabled = false;
    document.getElementById("AUTH_STATUS").disabled = false;
    document.getElementById("AUTH_DATE").disabled = false;
    document.getElementById("AUTH_BY").disabled = false;
    document.getElementById("AUTH_REMARKS").disabled = false;
    document.getElementById("INACTIVE").disabled = false;
}

function Edit() {

    $('#myModal').modal('hide');
    $('#btnUpdate').show();
    $('#btnAdd').hide();
    $('#btnDelete').hide();
    $('#btnEdit').hide();
    enablefields();

}

function Update() {

    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        CODE: $('#CODE').val(),
        DESC: $('#DESC').val(),
        ADDRESS: $('#ADDRESS').val(),
        PHONE: $('#PHONE').val(),
        EMAIL: $('#EMAIL').val(),
        URL: $('#URL').val(),
        AUTH_STATUS: $('#AUTH_STATUS').val(),
        AUTH_DATE: $('#AUTH_DATE').val(),
        AUTH_BY: $('#AUTH_BY').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS').val(),
        INACTIVE: $('#INACTIVE').val(),
    };
    $.ajax({
        url: "/DEF/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            clearTextBox();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete() {
    var ans = confirm("Are you sure you want to delete this Record?");
    var empObj = {
        CODE: $('#CODE').val(),
        DESC: $('#DESC').val(),
        ADDRESS: $('#ADDRESS').val(),
        PHONE: $('#PHONE').val(),
        EMAIL: $('#EMAIL').val(),
        URL: $('#URL').val(),
        AUTH_STATUS: $('#AUTH_STATUS').val(),
        AUTH_DATE: $('#AUTH_DATE').val(),
        AUTH_BY: $('#AUTH_BY').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS').val(),
        INACTIVE: $('#INACTIVE').val(),
    };
        $.ajax({
            url: "/DEF/Delete/",
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(empObj),
            dataType: "json",
            success: function (result) {
                loadData();
                $('#myModal').modal('show');
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    
}