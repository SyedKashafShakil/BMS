﻿/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    disablefields();
    disableNav();
    document.getElementById('CODE_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_BY_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CLIENT_TYPE_DEF').disabled = true;
    $("p").hide();
});
function disableNav() {
    $('#btnForward').hide();
    $('#btnBackward').hide();
    $('#btnFirst').hide();
    $('#btnLast').hide();
}
function enableNav() {
    $('#btnForward').show();
    $('#btnBackward').show();
    $('#btnFirst').show();
    $('#btnLast').show();
}
function loadData() {
    $.ajax({
        url: "/DefClientType/List",
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
    $('#CODE_CLIENT_TYPE_DEF').val("");
    $('#DESC_CLIENT_TYPE_DEF').val("");
    $('#TYPE_CLIENT_TYPE_DEF').val("");
    $('#INACTIVE_LM_CLIENT_TYPE_DEF').val("");
    $('#INACTIVE_IMS_CLIENT_TYPE_DEF').val("");
    $('#INACTIVE_MFL_CLIENT_TYPE_DEF').val("");
    $('#AUTH_STATUS_CLIENT_TYPE_DEF').val("");
    $('#AUTH_BY_CLIENT_TYPE_DEF').val("");
    $('#AUTH_DATE_CLIENT_TYPE_DEF').val("");
    $('#AUTH_REMARKS_CLIENT_TYPE_DEF').val("");

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
    $('#btnCreate').hide();
    disableNav();
    enablefields();
    $("p").hide();
}

function Create() {
    $('#btnCreate').hide();
    $('#btnDelete').hide();
    $('#btnEdit').hide();
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    clearTextBox();
    disableNav();
    enablefields();
    $("p").hide();
}
function disablefields() {
    document.getElementById('CODE_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('DESC_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('TYPE_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_BY_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CLIENT_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CLIENT_TYPE_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('DESC_CLIENT_TYPE_DEF').disabled = false;
    document.getElementById('TYPE_CLIENT_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_CLIENT_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_CLIENT_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_CLIENT_TYPE_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#CODE_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#DESC_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#TYPE_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_CLIENT_TYPE_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefClientType/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_CLIENT_TYPE_DEF').val(result.CODE);
            $('#DESC_CLIENT_TYPE_DEF').val(result.DESC);
            $('#TYPE_CLIENT_TYPE_DEF').val(result.TYPE);
            $('#INACTIVE_LMS_CLIENT_TYPE_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_CLIENT_TYPE_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_CLIENT_TYPE_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_CLIENT_TYPE_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_CLIENT_TYPE_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_CLIENT_TYPE_DEF').val(dateFormat(result.AUTH_DATE));
            $('#AUTH_REMARKS_CLIENT_TYPE_DEF').val(result.AUTH_REMARKS);

            $('#myModal').modal('hide');
            $('#btnUpdate').hide();
            $('#btnAdd').hide();
            $('#btnEdit').show();
            $('#btnDelete').show();
            $('#btnCreate').show();
            disablefields();
            enableNav();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
function Add() {
    var bnkObj = {
        CODE: $('#CODE_CLIENT_TYPE_DEF').val(),
        DESC: $('#DESC_CLIENT_TYPE_DEF').val(),
        TYPE: $('#TYPE_CLIENT_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CLIENT_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CLIENT_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CLIENT_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CLIENT_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CLIENT_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefClientType/Add",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('show');
            clearTextBox();
            disablefields();
            disableNav();
            $('#btnCreate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Update() {
    var bnkObj = {
        CODE: $('#CODE_CLIENT_TYPE_DEF').val(),
        DESC: $('#DESC_CLIENT_TYPE_DEF').val(),
        TYPE: $('#TYPE_CLIENT_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CLIENT_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CLIENT_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CLIENT_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CLIENT_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CLIENT_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefClientType/Update",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('show');
            clearTextBox();
            $('#myModal').modal('show');
            clearTextBox();
            disablefields();
            disableNav();
            $('#btnUpdate').hide();
            $('#btnCreate').show();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete() {
    var bnkObj = {
        CODE: $('#CODE_CLIENT_TYPE_DEF').val(),
        DESC: $('#DESC_CLIENT_TYPE_DEF').val(),
        TYPE: $('#TYPE_CLIENT_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CLIENT_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CLIENT_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CLIENT_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CLIENT_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CLIENT_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CLIENT_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefClientType/Delete/",
        type: "POST",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(bnkObj),
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('show');
            clearTextBox();
            disablefields();
            disableNav();
            $('#btnDelete').hide();
            $('#btnUpdate').hide();
            $('#btnEdit').hide();
            $('#btnCreate').show();
            $("p").hide();
        }

    });

}
function Forward() {
    CODE = $('#CODE_CLIENT_TYPE_DEF').val()
    $.ajax({
        url: "/DefClientType/Forward/" + CODE,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {

            getbyID(result);
            if (CODE == result) {
                $("p").text("Last Record");
                $("p").show(1000);
            }
            else {
                $("p").hide();
            }
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function Backward() {
    CODE = $('#CODE_CLIENT_TYPE_DEF').val()
    $.ajax({
        url: "/DefClientType/Backward/" + CODE,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {

            getbyID(result);
            if (CODE == result) {
                $("p").text("First Record");
                $("p").show(1000);
            }
            else {
                $("p").hide();
            }
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function First() {
    CODE = $('#CODE_CLIENT_TYPE_DEF').val()
    $.ajax({
        url: "/DefClientType/First/" + CODE,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {

            getbyID(result);
            $("p").text("First Record");
            $("p").show(1000);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function Last() {
    CODE = $('#CODE_CLIENT_TYPE_DEF').val()
    $.ajax({
        url: "/DefClientType/Last/" + CODE,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {

            getbyID(result);
            $("p").text("Last Record");
            $("p").show(1000);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function dateFormat(d) {
    if (d == null) {
        return d;
    }
    else {
        var pattern = /Date\(([^)]+)\)/;
        var results = pattern.exec(d);
        var dt = new Date(parseFloat(results[1]));
        var d = new Date(dt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}