/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    disablefields();
    disableNav();
    loadBankCode();
    $("p").hide();
});
function disableNav() {
    document.getElementById('btnForward').disabled = true;
    document.getElementById('btnBackward').disabled = true;
    document.getElementById('btnFirst').disabled = true;
    document.getElementById('btnLast').disabled = true;
}
function enableNav() {
    document.getElementById('btnForward').disabled = false;
    document.getElementById('btnBackward').disabled = false;
    document.getElementById('btnFirst').disabled = false;
    document.getElementById('btnLast').disabled = false;
}
function loadData() {
    $.ajax({
        url: "/DefBankBr/List",
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
    $('#BANK_CODE_BANK_BR_DEF').val("");
    $('#CODE_BANK_BR_DEF').val("");
    $('#DESC_BANK_BR_DEF').val("");
    $('#ADDRESS_BANK_BR_DEF').val("");
    $('#PHONE_BANK_BR_DEF').val("");
    $('#FAX_BANK_BR_DEF').val("");
    $('#MANAGER_BANK_BR_DEF').val("");
    $('#TELE_BANK_BR_DEF').val("");
    $('#INACTIVE_LMS_BANK_BR_DEF').val("");
    $('#INACTIVE_IMS_BANK_BR_DEF').val("");
    $('#INACTIVE_MFL_BANK_BR_DEF').val("");
    $('#AUTH_STATUS_BANK_BR_DEF').val("");
    $('#AUTH_BY_BANK_BR_DEF').val("");
    $('#AUTH_DATE_BANK_BR_DEF').val("");
    $('#AUTH_REMARKS_BANK_BR_DEF').val("");

    $('#CODEBTN').show();
}
function enablebtn() {
    $('#CODEBTN').hide();
}
function Edit() {
    $('#myModal').modal('hide');
    document.getElementById('btnUpdate').disabled = false;
    document.getElementById('btnAdd').disabled = true;
    document.getElementById('btnDelete').disabled = true;
    document.getElementById('btnCreate').disabled = true;
    disableNav();
    enablefields();
    $("p").hide();

}

function Create() {
    document.getElementById('btnUpdate').disabled = true;
    document.getElementById('btnAdd').disabled = false;
    document.getElementById('btnDelete').disabled = true;
    document.getElementById('btnCreate').disabled = true;
    document.getElementById('btnEdit').disabled = true;
    clearTextBox();
    disableNav();
    enablefields();
    $("p").hide();
}
function disablefields() {
    document.getElementById('BANK_CODE_BANK_BR_DEF').disabled = true;
    document.getElementById('CODE_BANK_BR_DEF').disabled = true;
    document.getElementById('DESC_BANK_BR_DEF').disabled = true;
    document.getElementById('ADDRESS_BANK_BR_DEF').disabled = true;
    document.getElementById('PHONE_BANK_BR_DEF').disabled = true;
    document.getElementById('FAX_BANK_BR_DEF').disabled = true;
    document.getElementById('MANAGER_BANK_BR_DEF').disabled = true;
    document.getElementById('TELE_BANK_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_BANK_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_BANK_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_BANK_BR_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_BANK_BR_DEF').disabled = true;
    document.getElementById('AUTH_BY_BANK_BR_DEF').disabled = true;
    document.getElementById('AUTH_DATE_BANK_BR_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_BANK_BR_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('BANK_CODE_BANK_BR_DEF').disabled = false;
    document.getElementById('DESC_BANK_BR_DEF').disabled = false;
    document.getElementById('ADDRESS_BANK_BR_DEF').disabled = false;
    document.getElementById('PHONE_BANK_BR_DEF').disabled = false;
    document.getElementById('FAX_BANK_BR_DEF').disabled = false;
    document.getElementById('MANAGER_BANK_BR_DEF').disabled = false;
    document.getElementById('TELE_BANK_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_BANK_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_BANK_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_BANK_BR_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#BANK_CODE_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#CODE_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#DESC_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#ADDRESS_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#PHONE_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#FAX_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#MANAGER_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#TELE_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_BANK_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_BANK_BR_DEF').css('border-color', 'lightgrey');

    $.ajax({
        url: "/DefBankBr/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#BANK_CODE_BANK_BR_DEF').val(result.BANK_CODE);
            $('#CODE_BANK_BR_DEF').val(result.CODE);
            $('#DESC_BANK_BR_DEF').val(result.DESC);
            $('#ADDRESS_BANK_BR_DEF').val(result.ADDRESS);
            $('#PHONE_BANK_BR_DEF').val(result.PHONE);
            $('#FAX_BANK_BR_DEF').val(result.FAX);
            $('#MANAGER_BANK_BR_DEF').val(result.MANAGER);
            $('#TELE_BANK_BR_DEF').val(result.TELE);
            $('#INACTIVE_LMS_BANK_BR_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_BANK_BR_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_BANK_BR_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_REMARKS_BANK_BR_DEF').val(result.AUTH_REMARKS);
            $('#AUTH_STATUS_BANK_BR_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_BANK_BR_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_BANK_BR_DEF').val(result.AUTH_DATE);

            $('#myModal').modal('hide');
            document.getElementById('btnUpdate').disabled = true;
            document.getElementById('btnAdd').disabled = true;
            document.getElementById('btnEdit').disabled = false;
            document.getElementById('btnDelete').disabled = false;
            document.getElementById('btnCreate').disabled = false;
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
        BANK_CODE: $('#BANK_CODE_BANK_BR_DEF').val(),
        CODE: $('#CODE_BANK_BR_DEF').val(),
        DESC: $('#DESC_BANK_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BANK_BR_DEF').val(),
        PHONE: $('#PHONE_BANK_BR_DEF').val(),
        FAX: $('#FAX_BANK_BR_DEF').val(),
        MANAGER: $('#MANAGER_BANK_BR_DEF').val(),
        TELE: $('#TELE_BANK_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BANK_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BANK_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BANK_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BANK_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BANK_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BANK_BR_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BANK_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBankBr/Add",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#myModal').modal('show');
            clearTextBox();
            disablefields();
            disableNav();
            document.getElementById('btnCreate').disabled = false;
            document.getElementById('btnAdd').disabled = true;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Update() {

    var bnkObj = {
        BANK_CODE: $('#BANK_CODE_BANK_BR_DEF').val(),
        CODE: $('#CODE_BANK_BR_DEF').val(),
        DESC: $('#DESC_BANK_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BANK_BR_DEF').val(),
        PHONE: $('#PHONE_BANK_BR_DEF').val(),
        FAX: $('#FAX_BANK_BR_DEF').val(),
        MANAGER: $('#MANAGER_BANK_BR_DEF').val(),
        TELE: $('#TELE_BANK_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BANK_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BANK_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BANK_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BANK_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BANK_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BANK_BR_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BANK_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBankBr/Update",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#myModal').modal('show');
            clearTextBox();
            disablefields();
            disableNav();
            document.getElementById('btnCreate').disabled = false;
            document.getElementById('btnUpdate').disabled = true;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete() {
    var bnkObj = {
        BANK_CODE: $('#BANK_CODE_BANK_BR_DEF').val(),
        CODE: $('#CODE_BANK_BR_DEF').val(),
        DESC: $('#DESC_BANK_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BANK_BR_DEF').val(),
        PHONE: $('#PHONE_BANK_BR_DEF').val(),
        FAX: $('#FAX_BANK_BR_DEF').val(),
        MANAGER: $('#MANAGER_BANK_BR_DEF').val(),
        TELE: $('#TELE_BANK_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BANK_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BANK_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BANK_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BANK_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BANK_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BANK_BR_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BANK_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBankBr/Delete/",
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
            document.getElementById('btnCreate').disabled = false;
            document.getElementById('btnEdit').disabled = true;

            document.getElementById('btnDelete').disabled = true;
            document.getElementById('btnUpdate').disabled = true;
            $("p").hide();
        }

    });

}

function Forward() {
    CODE = $('#BANK_CODE_BANK_BR_DEF').val()
    $.ajax({
        url: "/DefBankBr/Forward/" + CODE,
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
    CODE = $('#BANK_CODE_BANK_BR_DEF').val()
    $.ajax({
        url: "/DefBankBr/Backward/" + CODE,
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
    CODE = $('#BANK_CODE_BANK_BR_DEF').val()
    $.ajax({
        url: "/DefBankBr/First/" + CODE,
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
    CODE = $('#BANK_CODE_BANK_BR_DEF').val()
    $.ajax({
        url: "/DefBankBr/Last/" + CODE,
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

function loadBankCode() {
    $.ajax({
        type: "GET",
        url: "/DefBankBr/getBankCode",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Bank</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#BANK_CODE_BANK_BR_DEF").html(s);
        }
    });
}