/// <reference path="jquery-1.9.1.intellisense.js" />
//Load Data in Table when documents is ready
$(document).ready(function () {
    loadData();
});
//Load Data function
function loadData() {
    $.ajax({
        url: "/MASTER_EDU/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.USER_CODE + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.CNIC + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.USER_CODE + ')">Edit</a> | <a href="#" onclick="Delele(' + item.USER_CODE + ')">Delete</a></td>';
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
        USE_CODE: $('#USE_CODE').val(),
        Name: $('#Name').val(),
        CNIC: $('#CNIC').val(),
        
    };
    $.ajax({
        url: "/MASTER_EDU/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//Function for getting the Data Based upon Employee ID
function getbyID(USER_CODE) {
    $('#Name').css('border-color', 'lightgrey');
    $('#CNIC').css('border-color', 'lightgrey');
    $.ajax({
        url: "/MASTER_EDU/getbyID/" + USER_CODE,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#USER_CODE').val(result.USER_CODE);
            $('#Name').val(result.Name);
            $('#CNIC').val(result.CNIC);
            
            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
//function for updating employee's record
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        USER_CODE: $('#USER_CODE').val(),
        Name: $('#Name').val(),
        CNIC: $('#CNIC').val(),
    };
    $.ajax({
        url: "/MASTER_EDU/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            $('#USER_CODE').val("");
            $('#Name').val("");
            $('#CNIC').val("");
            
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//function for deleting employee's record
function Delele(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "/MASTER_EDU/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
//Function for clearing the textboxes
function clearTextBox() {
    $('#USER_CODE').val("");
    $('#Name').val("");
    $('#CNIC').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Name').css('border-color', 'lightgrey');
    $('#Age').css('border-color', 'lightgrey');
    $('#CNIC').css('border-color', 'lightgrey');
    
}







