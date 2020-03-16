/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    document.getElementById('CODE_EMAIL_DEF').disabled = true;
});

function loadData() {
    $.ajax({
        url: "/DefEmail/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.CODE + '</td>';
                html += '<td>' + item.SENDER + '</td>';
                html += '<td>' + item.RECPT + '</td>';
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
function clearTextBox() {
    $('#CODE_EMAIL_DEF').val("");
    $('#SENDER_EMAIL_DEF').val("");
    $('#RECEIPT_EMAIL_DEF').val("");
    $('#CC_EMAIL_DEF').val("");
    $('#BCC_EMAIL_DEF').val("");
    $('#TYPE_EMAIL_DEF').val("");
    $('#INACTIVE_LMS_EMAIL_DEF').val("");
    $('#INACTIVE_IMS_EMAIL_DEF').val("");
    $('#INACTIVE_MFL_EMAIL_DEF').val("");
    $('#AUTH_STATUS_EMAIL_DEF').val("");
    $('#AUTH_BY_EMAIL_DEF').val("");
    $('#AUTH_DATE_EMAIL_DEF').val("");
    $('#AUTH_REMARKS_EMAIL_DEF').val("");

    $('#CODEBTN').show();
}
function enablebtn() {
    $('#CODEBTN').hide();
}
function Edit() {

    $('#myModal').modal('hide');
    $('#btnUpdate').show();
    $('#btnAdd').hide();
    $('#btnDelete').hide();
    $('#btnEdit').hide();
    enablefields();

}
function disablefields() {
    document.getElementById('CODE_EMAIL_DEF').disabled = true;
    document.getElementById('SENDER_EMAIL_DEF').disabled = true;
    document.getElementById('CC_EMAIL_DEF').disabled = true;
    document.getElementById('BCC_EMAIL_DEF').disabled = true;
    document.getElementById('RECEIPT_EMAIL_DEF').disabled = true;
    document.getElementById('TYPE_EMAIL_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_EMAIL_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_EMAIL_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_EMAIL_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_EMAIL_DEF').disabled = true;
    document.getElementById('AUTH_BY_EMAIL_DEF').disabled = true;
    document.getElementById('AUTH_DATE_EMAIL_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_EMAIL_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('CODE_EMAIL_DEF').disabled = false;
    document.getElementById('SENDER_EMAIL_DEF').disabled = false;
    document.getElementById('CC_EMAIL_DEF').disabled = false;
    document.getElementById('BCC_EMAIL_DEF').disabled = false;
    document.getElementById('RECEIPT_EMAIL_DEF').disabled = false;
    document.getElementById('TYPE_EMAIL_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_EMAIL_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_EMAIL_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_EMAIL_DEF').disabled = false;
    document.getElementById('AUTH_STATUS_EMAIL_DEF').disabled = false;
    document.getElementById('AUTH_BY_EMAIL_DEF').disabled = false;
    document.getElementById('AUTH_DATE_EMAIL_DEF').disabled = false;
    document.getElementById('AUTH_REMARKS_EMAIL_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#CODE_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#SENDER_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#RECEIPT_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#CC_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#BCC_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#TYPE_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_EMAIL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_EMAIL_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefEmail/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_EMAIL_DEF').val(result.CODE);
            $('#SENDER_EMAIL_DEF').val(result.SENDER);
            $('#RECEIPT_EMAIL_DEF').val(result.RECPT);
            $('#CC_EMAIL_DEF').val(result.CC);
            $('#BCC_EMAIL_DEF').val(result.BCC);
            $('#TYPE_EMAIL_DEF').val(result.TYPE);
            $('#INACTIVE_LMS_EMAIL_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_EMAIL_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_EMAIL_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_EMAIL_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_EMAIL_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_EMAIL_DEF').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_EMAIL_DEF').val(result.AUTH_REMARKS);

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
function Add() {
    var bnkObj = {
        CODE: $('#CODE_EMAIL_DEF').val(),
        SENDER: $('#SENDER_EMAIL_DEF').val(),
        RECPT: $('#RECEIPT_EMAIL_DEF').val(),
        CC: $('#CC_EMAIL_DEF').val(),
        BCC: $('#BCC_EMAIL_DEF').val(),
        TYPE: $('#TYPE_EMAIL_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_EMAIL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_EMAIL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_EMAIL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_EMAIL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_EMAIL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_EMAIL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_EMAIL_DEF').val(),
    };
    $.ajax({
        url: "/DefEmail/Add",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Update() {
    var bnkObj = {
        CODE: $('#CODE_EMAIL_DEF').val(),
        SENDER: $('#SENDER_EMAIL_DEF').val(),
        RECPT: $('#RECEIPT_EMAIL_DEF').val(),
        CC: $('#CC_EMAIL_DEF').val(),
        BCC: $('#BCC_EMAIL_DEF').val(),
        TYPE: $('#TYPE_EMAIL_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_EMAIL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_EMAIL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_EMAIL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_EMAIL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_EMAIL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_EMAIL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_EMAIL_DEF').val(),
    };
    $.ajax({
        url: "/DefEmail/Update",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('show');
            clearTextBox();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete() {
    var bnkObj = {
        CODE: $('#CODE_EMAIL_DEF').val(),
        SENDER: $('#SENDER_EMAIL_DEF').val(),
        RECPT: $('#RECEIPT_EMAIL_DEF').val(),
        CC: $('#CC_EMAIL_DEF').val(),
        BCC: $('#BCC_EMAIL_DEF').val(),
        TYPE: $('#TYPE_EMAIL_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_EMAIL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_EMAIL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_EMAIL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_EMAIL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_EMAIL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_EMAIL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_EMAIL_DEF').val(),
    };
    $.ajax({
        url: "/DefEmail/Delete/",
        type: "POST",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(bnkObj),
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('show');
            clearTextBox();
        }

    });

}
