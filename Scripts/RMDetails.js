/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    document.getElementById('CODE_RM_DEF').disabled = true;
});

function loadData() {
    $.ajax({
        url: "/DefRM/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.CODE + '</td>';
                html += '<td>' + item.DESC + '</td>';
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
    $('#EMP_CODE_RM_DEF').val("");
    $('#BRANCH_CODE_RM_DEF').val("");
    $('#CODE_RM_DEF').val("");
    $('#DESIG_RM_DEF').val("");
    $('#NAME_RM_DEF').val("");
    $('#PHONE_RM_DEF').val("");
    $('#EMAIL_RM_DEF').val("");
    $('#MOBILE_RM_DEF').val("");
    $('#SIGN_RM_DEF').val("");
    $('#INACTIVE_LMS_RM_DEF').val("");
    $('#INACTIVE_IMS_RM_DEF').val("");
    $('#INACTIVE_MFL_RM_DEF').val("");
    $('#AUTH_STATUS_RM_DEF').val("");
    $('#AUTH_BY_RM_DEF').val("");
    $('#AUTH_DATE_RM_DEFs').val("");
    $('#AUTH_REMARKS_RM_DEF').val("");

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
    document.getElementById('EMP_CODE_RM_DEF').disabled = true;
    document.getElementById('BRANCH_CODE_RM_DEF').disabled = true;
    document.getElementById('CODE_RM_DEF').disabled = true;
    document.getElementById('DESIG_RM_DEF').disabled = true;
    document.getElementById('NAME_RM_DEF').disabled = true;
    document.getElementById('PHONE_RM_DEF').disabled = true;
    document.getElementById('EMAIL_RM_DEF').disabled = true;
    document.getElementById('MOBILE_RM_DEF').disabled = true;
    document.getElementById('SIGN_RM_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_RM_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_RM_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_RM_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_RM_DEF').disabled = true;
    document.getElementById('AUTH_BY_RM_DEF').disabled = true;
    document.getElementById('AUTH_DATE_RM_DEFs').disabled = true;
    document.getElementById('AUTH_REMARKS_RM_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('EMP_CODE_RM_DEF').disabled = false;
    document.getElementById('BRANCH_CODE_RM_DEF').disabled = false;
    document.getElementById('CODE_RM_DEF').disabled = false;
    document.getElementById('DESIG_RM_DEF').disabled = false;
    document.getElementById('NAME_RM_DEF').disabled = false;
    document.getElementById('PHONE_RM_DEF').disabled = false;
    document.getElementById('EMAIL_RM_DEF').disabled = false;
    document.getElementById('MOBILE_RM_DEF').disabled = false;
    document.getElementById('SIGN_RM_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_RM_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_RM_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_RM_DEF').disabled = false;
    document.getElementById('AUTH_STATUS_RM_DEF').disabled = false;
    document.getElementById('AUTH_BY_RM_DEF').disabled = false;
    document.getElementById('AUTH_DATE_RM_DEFs').disabled = false;
    document.getElementById('AUTH_REMARKS_RM_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#EMP_CODE_RM_DEF').css('border-color', 'lightgrey');
    $('#BRANCH_CODE_RM_DEF').css('border-color', 'lightgrey');
    $('#CODE_RM_DEF').css('border-color', 'lightgrey');
    $('#DESIG_RM_DEF').css('border-color', 'lightgrey');
    $('#NAME_RM_DEF').css('border-color', 'lightgrey');
    $('#PHONE_RM_DEF').css('border-color', 'lightgrey');
    $('#EMAIL_RM_DEF').css('border-color', 'lightgrey');
    $('#MOBILE_RM_DEF').css('border-color', 'lightgrey');
    $('#SIGN_RM_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_RM_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_RM_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_RM_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_RM_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_RM_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_RM_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_RM_DEFs').css('border-color', 'lightgrey');

    $.ajax({
        url: "/DefRM/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_RM_DEF').val(result.CODE);
            $('#EMP_CODE_RM_DEF').val(result.EMP_CODE);
            $('#NAME_RM_DEF').val(result.NAME);
            $('#DESIG_RM_DEF').val(result.DESIG);
            $('#BRANCH_CODE_RM_DEF').val(result.BRANCH_CODE);
            $('#PHONE_RM_DEF').val(result.PHONE);
            $('#EMAIL_RM_DEF').val(result.EMAIL);
            $('#MOBILE_RM_DEF').val(result.MOBILE);
            $('#SIGN_RM_DEF').val(result.SIGN);
            $('#INACTIVE_LMS_RM_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_RM_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_RM_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_REMARKS_RM_DEF').val(result.AUTH_REMARKS);
            $('#AUTH_STATUS_RM_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_RM_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_RM_DEFs').val(result.AUTH_DATE);

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
        CODE: $('#CODE_RM_DEF').val(),
        EMP_CODE: $('#EMP_CODE_RM_DEF').val(),
        NAME: $('#NAME_RM_DEF').val(),
        DESIG: $('#DESIG_RM_DEF').val(),
        BRANCH_CODE: $('#BRANCH_CODE_RM_DEF').val(),
        PHONE: $('#PHONE_RM_DEF').val(),
        EMAIL: $('#EMAIL_RM_DEF').val(),
        MOBILE: $('#MOBILE_RM_DEF').val(),
        SIGN: $('#SIGN_RM_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_RM_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_RM_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_RM_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_RM_DEF').val(),
        AUTH_BY: $('#AUTH_BY_RM_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_RM_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_RM_DEF').val(),
    };
    $.ajax({
        url: "/DefRM/Add",
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
        CODE: $('#CODE_RM_DEF').val(),
        EMP_CODE: $('#EMP_CODE_RM_DEF').val(),
        NAME: $('#NAME_RM_DEF').val(),
        DESIG: $('#DESIG_RM_DEF').val(),
        BRANCH_CODE: $('#BRANCH_CODE_RM_DEF').val(),
        PHONE: $('#PHONE_RM_DEF').val(),
        EMAIL: $('#EMAIL_RM_DEF').val(),
        MOBILE: $('#MOBILE_RM_DEF').val(),
        SIGN: $('#SIGN_RM_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_RM_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_RM_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_RM_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_RM_DEF').val(),
        AUTH_BY: $('#AUTH_BY_RM_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_RM_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_RM_DEF').val(),
    };
    $.ajax({
        url: "/DefRM/Update",
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
        CODE: $('#CODE_RM_DEF').val(),
        EMP_CODE: $('#EMP_CODE_RM_DEF').val(),
        NAME: $('#NAME_RM_DEF').val(),
        DESIG: $('#DESIG_RM_DEF').val(),
        BRANCH_CODE: $('#BRANCH_CODE_RM_DEF').val(),
        PHONE: $('#PHONE_RM_DEF').val(),
        EMAIL: $('#EMAIL_RM_DEF').val(),
        MOBILE: $('#MOBILE_RM_DEF').val(),
        SIGN: $('#SIGN_RM_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_RM_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_RM_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_RM_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_RM_DEF').val(),
        AUTH_BY: $('#AUTH_BY_RM_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_RM_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_RM_DEF').val(),
    };
    $.ajax({
        url: "/DefRM/Delete/",
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
