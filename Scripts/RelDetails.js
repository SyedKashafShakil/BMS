/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    document.getElementById('CODE_REL_DEF').disabled = true;
});

function loadData() {
    $.ajax({
        url: "/DefRel/List",
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
    $('#CODE_REL_DEF').val("");
    $('#DESC_REL_DEF').val("");
    $('#INACTIVE_LMS_REL_DEF').val("");
    $('#INACTIVE_IMS_REL_DEF').val("");
    $('#INACTIVE_MFL_REL_DEF').val("");
    $('#AUTH_STATUS_REL_DEF').val("");
    $('#AUTH_BY_REL_DEF').val("");
    $('#AUTH_DATE_REL_DEF').val("");
    $('#AUTH_REMARKS_REL_DEF').val("");

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
    document.getElementById('CODE_REL_DEF').disabled = true;
    document.getElementById('DESC_REL_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_REL_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_REL_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_REL_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_REL_DEF').disabled = true;
    document.getElementById('AUTH_BY_REL_DEF').disabled = true;
    document.getElementById('AUTH_DATE_REL_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_REL_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('CODE_REL_DEF').disabled = false;
    document.getElementById('DESC_REL_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_REL_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_REL_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_REL_DEF').disabled = false;
    document.getElementById('AUTH_STATUS_REL_DEF').disabled = false;
    document.getElementById('AUTH_BY_REL_DEF').disabled = false;
    document.getElementById('AUTH_DATE_REL_DEF').disabled = false;
    document.getElementById('AUTH_REMARKS_REL_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#CODE_REL_DEF').css('border-color', 'lightgrey');
    $('#DESC_REL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_REL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_REL_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_REL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_REL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_REL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_REL_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_REL_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefRel/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_REL_DEF').val(result.CODE);
            $('#DESC_REL_DEF').val(result.DESC);
            $('#INACTIVE_LMS_REL_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_REL_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_REL_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_REL_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_REL_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_REL_DEF').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_REL_DEF').val(result.AUTH_REMARKS);

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
        CODE: $('#CODE_REL_DEF').val(),
        DESC: $('#DESC_REL_DEF').val(),
        INACTIVE_lMS: $('#INACTIVE_LMS_REL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_REL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_REL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_REL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_REL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_REL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_REL_DEF').val(),
    };
    $.ajax({
        url: "/DefRel/Add",
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
        CODE: $('#CODE_REL_DEF').val(),
        DESC: $('#DESC_REL_DEF').val(),
        INACTIVE_lMS: $('#INACTIVE_LMS_REL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_REL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_REL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_REL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_REL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_REL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_REL_DEF').val(),
    };
    $.ajax({
        url: "/DefRel/Update",
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
        CODE: $('#CODE_REL_DEF').val(),
        DESC: $('#DESC_REL_DEF').val(),
        INACTIVE_lMS: $('#INACTIVE_LMS_REL_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_REL_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_REL_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_REL_DEF').val(),
        AUTH_BY: $('#AUTH_BY_REL_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_REL_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_REL_DEF').val(),
    };
    $.ajax({
        url: "/DefRel/Delete/",
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
