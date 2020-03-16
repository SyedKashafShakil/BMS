/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    disablefields();
    disableNav();
    document.getElementById('CODE_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_BY_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CHQ_TYPE_DEF').disabled = true;
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
        url: "/DefChqType/List",
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
    $('#CODE_CHQ_TYPE_DEF').val("");
    $('#DESC_CHQ_TYPE_DEF').val("");
    $('#PAY_MODE_CHQ_TYPE_DEF').val("");
    $('#CHQ_FROM_CHQ_TYPE_DEF').val("");
    $('#CHQ_TO_CHQ_TYPE_DEF').val("");
    $('#INACTIVE_LMS_CHQ_TYPE_DEF').val("");
    $('#INACTIVE_IMS_CHQ_TYPE_DEF').val("");
    $('#INACTIVE_MFL_CHQ_TYPE_DEF').val("");
    $('#AUTH_STATUS_CHQ_TYPE_DEF').val("");
    $('#AUTH_BY_CHQ_TYPE_DEF').val("");
    $('#AUTH_DATE_CHQ_TYPE_DEF').val("");
    $('#AUTH_REMARKS_CHQ_TYPE_DEF').val("");

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
    document.getElementById('CODE_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('DESC_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('PAY_MODE_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('CHQ_FROM_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('CHQ_TO_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_BY_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CHQ_TYPE_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CHQ_TYPE_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('DESC_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('PAY_MODE_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('CHQ_FROM_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('CHQ_TO_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_CHQ_TYPE_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_CHQ_TYPE_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#CODE_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#DESC_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#PAY_MODE_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#CHQ_FROM_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#CHQ_TO_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_CHQ_TYPE_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_CHQ_TYPE_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefChqType/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#CODE_CHQ_TYPE_DEF').val(result.CODE);
            $('#DESC_CHQ_TYPE_DEF').val(result.DESC);
            $('#PAY_MODE_CHQ_TYPE_DEF').val(result.PAY_MODE);
            $('#CHQ_FROM_CHQ_TYPE_DEF').val(result.CHQ_FROM);
            $('#CHQ_TO_CHQ_TYPE_DEF').val(result.CHQ_TO);
            $('#INACTIVE_LMS_CHQ_TYPE_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_CHQ_TYPE_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_CHQ_TYPE_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_CHQ_TYPE_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_CHQ_TYPE_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_CHQ_TYPE_DEF').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_CHQ_TYPE_DEF').val(result.AUTH_REMARKS);

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
        CODE: $('#CODE_CHQ_TYPE_DEF').val(),
        DESC: $('#DESC_CHQ_TYPE_DEF').val(),
        PAY_MODE: $('#PAY_MODE_CHQ_TYPE_DEF').val(),
        CHQ_FROM: $('#CHQ_FROM_CHQ_TYPE_DEF').val(),
        CHQ_TO: $('#CHQ_TO_CHQ_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CHQ_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CHQ_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CHQ_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CHQ_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CHQ_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CHQ_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CHQ_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefChqType/Add",
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
        CODE: $('#CODE_CHQ_TYPE_DEF').val(),
        DESC: $('#DESC_CHQ_TYPE_DEF').val(),
        PAY_MODE: $('#PAY_MODE_CHQ_TYPE_DEF').val(),
        CHQ_FROM: $('#CHQ_FROM_CHQ_TYPE_DEF').val(),
        CHQ_TO: $('#CHQ_TO_CHQ_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CHQ_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CHQ_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CHQ_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CHQ_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CHQ_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CHQ_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CHQ_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefChqType/Update",
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
        CODE: $('#CODE_CHQ_TYPE_DEF').val(),
        DESC: $('#DESC_CHQ_TYPE_DEF').val(),
        PAY_MODE: $('#PAY_MODE_CHQ_TYPE_DEF').val(),
        CHQ_FROM: $('#CHQ_FROM_CHQ_TYPE_DEF').val(),
        CHQ_TO: $('#CHQ_TO_CHQ_TYPE_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CHQ_TYPE_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CHQ_TYPE_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CHQ_TYPE_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CHQ_TYPE_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CHQ_TYPE_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CHQ_TYPE_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CHQ_TYPE_DEF').val(),
    };
    $.ajax({
        url: "/DefChqType/Delete/",
        type: "POST",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(bnkObj),
        dataType: "json",
        success: function (result) {
            loadData();
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
    CODE = $('#CODE_CHQ_TYPE_DEF').val()
    $.ajax({
        url: "/DefChqType/Forward/" + CODE,
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
    CODE = $('#CODE_CHQ_TYPE_DEF').val()
    $.ajax({
        url: "/DefChqType/Backward/" + CODE,
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
    CODE = $('#CODE_CHQ_TYPE_DEF').val()
    $.ajax({
        url: "/DefChqType/First/" + CODE,
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
    CODE = $('#CODE_CHQ_TYPE_DEF').val()
    $.ajax({
        url: "/DefChqType/Last/" + CODE,
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
