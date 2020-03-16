/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    document.getElementById('CODE_FLOAT_DEF').disabled = true;
});

function loadData() {
    $.ajax({
        url: "/DefFloat/List",
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
    $('#CODE_FLOAT_DEF').val("");
    $('#DESC_FLOAT_DEF').val("");
    $('#RATE_FLOAT_DEF').val("");
    $('#DAYS_FLOAT_DEF').val("");
    $('#MONTHS_FLOAT_DEF').val("");
    $('#FIXDAY_FLOAT_DEF').val("");
    $('#FIXMONTH_FLOAT_DEF').val("");
    $('#KIBOR_MONTH_FLOAT_DEF').val("");
    $('#INACTIVE_LMS_FLOAT_DEF').val("");
    $('#INACTIVE_IMS_FLOAT_DEF').val("");
    $('#INACTIVE_MFL_FLOAT_DEF').val("");
    $('#AUTH_STATUS_FLOAT_DEF').val("");
    $('#AUTH_BY_FLOAT_DEF').val("");
    $('#AUTH_DATE_FLOAT_DEF').val("");
    $('#AUTH_REMARKS_FLOAT_DEF').val("");

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
    document.getElementById('CODE_FLOAT_DEF').disabled = true;
    document.getElementById('DESC_FLOAT_DEF').disabled = true;
    document.getElementById('RATE_FLOAT_DEF').disabled = true;
    document.getElementById('DAYS_FLOAT_DEF').disabled = true;
    document.getElementById('MONTHS_FLOAT_DEF').disabled = true;
    document.getElementById('FIXDAY_FLOAT_DEF').disabled = true;
    document.getElementById('FIXMONTH_FLOAT_DEF').disabled = true;
    document.getElementById('KIBOR_MONTH_FLOAT_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_FLOAT_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_FLOAT_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_FLOAT_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_FLOAT_DEF').disabled = true;
    document.getElementById('AUTH_BY_FLOAT_DEF').disabled = true;
    document.getElementById('AUTH_DATE_FLOAT_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_FLOAT_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('CODE_FLOAT_DEF').disabled = false;
    document.getElementById('DESC_FLOAT_DEF').disabled = false;
    document.getElementById('RATE_FLOAT_DEF').disabled = false;
    document.getElementById('DAYS_FLOAT_DEF').disabled = false;
    document.getElementById('MONTHS_FLOAT_DEF').disabled = false;
    document.getElementById('FIXDAY_FLOAT_DEF').disabled = false;
    document.getElementById('FIXMONTH_FLOAT_DEF').disabled = false;
    document.getElementById('KIBOR_MONTH_FLOAT_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_FLOAT_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_FLOAT_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_FLOAT_DEF').disabled = false;
    document.getElementById('AUTH_STATUS_FLOAT_DEF').disabled = false;
    document.getElementById('AUTH_BY_FLOAT_DEF').disabled = false;
    document.getElementById('AUTH_DATE_FLOAT_DEF').disabled = false;
    document.getElementById('AUTH_REMARKS_FLOAT_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#CODE_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#DESC_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#RATE_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#DAYS_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#MONTHS_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#FIXDAY_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#FIXMONTH_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#KIBOR_MONTH_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_FLOAT_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_FLOAT_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefFloat/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_FLOAT_DEF').val(result.CODE);
            $('#DESC_FLOAT_DEF').val(result.DESC);
            $('#RATE_FLOAT_DEF').val(result.FLOAT_RATE);
            $('#DAYS_FLOAT_DEF').val(result.FLOAT_DAYS);
            $('#MONTHS_FLOAT_DEF').val(result.FLOAT_MONTH);
            $('#FIXDAY_FLOAT_DEF').val(result.FLOAT_FIX_DAY);
            $('#FIXMONTH_FLOAT_DEF').val(result.FLOAT_FIX_MONTH);
            $('#KIBOR_MONTH_FLOAT_DEF').val(result.KIBOR_MONTH);
            $('#INACTIVE_LMS_FLOAT_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_FLOAT_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_FLOAT_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_FLOAT_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_FLOAT_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_FLOAT_DEF').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_FLOAT_DEF').val(result.AUTH_REMARKS);

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
        CODE: $('#CODE_FLOAT_DEF').val(),
        DESC: $('#DESC_FLOAT_DEF').val(),
        FLOAT_RATE: $('#RATE_FLOAT_DEF').val(),
        FLOAT_DAYS: $('#DAYS_FLOAT_DEF').val(),
        FLOAT_MONTH: $('#MONTHS_FLOAT_DEF').val(),
        FLOAT_FIX_DAY: $('#FIXDAY_FLOAT_DEF').val(),
        FLOAT_FIX_MONTH: $('#FIXMONTH_FLOAT_DEF').val(),
        KIBOR_MONTH: $('#KIBOR_MONTH_FLOAT_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_FLOAT_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_FLOAT_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_FLOAT_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_FLOAT_DEF').val(),
        AUTH_BY: $('#AUTH_BY_FLOAT_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_FLOAT_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_FLOAT_DEF').val(),
    };
    $.ajax({
        url: "/DefFloat/Add",
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
        CODE: $('#CODE_FLOAT_DEF').val(),
        DESC: $('#DESC_FLOAT_DEF').val(),
        FLOAT_RATE: $('#RATE_FLOAT_DEF').val(),
        FLOAT_DAYS: $('#DAYS_FLOAT_DEF').val(),
        FLOAT_MONTH: $('#MONTHS_FLOAT_DEF').val(),
        FLOAT_FIX_DAY: $('#FIXDAY_FLOAT_DEF').val(),
        FLOAT_FIX_MONTH: $('#FIXMONTH_FLOAT_DEF').val(),
        KIBOR_MONTH: $('#KIBOR_MONTH_FLOAT_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_FLOAT_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_FLOAT_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_FLOAT_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_FLOAT_DEF').val(),
        AUTH_BY: $('#AUTH_BY_FLOAT_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_FLOAT_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_FLOAT_DEF').val(),
    };
    $.ajax({
        url: "/DefFloat/Update",
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
        CODE: $('#CODE_FLOAT_DEF').val(),
        DESC: $('#DESC_FLOAT_DEF').val(),
        FLOAT_RATE: $('#RATE_FLOAT_DEF').val(),
        FLOAT_DAYS: $('#DAYS_FLOAT_DEF').val(),
        FLOAT_MONTH: $('#MONTHS_FLOAT_DEF').val(),
        FLOAT_FIX_DAY: $('#FIXDAY_FLOAT_DEF').val(),
        FLOAT_FIX_MONTH: $('#FIXMONTH_FLOAT_DEF').val(),
        KIBOR_MONTH: $('#KIBOR_MONTH_FLOAT_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_FLOAT_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_FLOAT_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_FLOAT_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_FLOAT_DEF').val(),
        AUTH_BY: $('#AUTH_BY_FLOAT_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_FLOAT_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_FLOAT_DEF').val(),
    };
    $.ajax({
        url: "/DefFloat/Delete/",
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
