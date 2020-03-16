/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    loadCity();
    disablefields();
    disableNav();
    document.getElementById('CODE_BR_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_BR_DEF').disabled = true;
    document.getElementById('AUTH_BY_BR_DEF').disabled = true;
    document.getElementById('AUTH_DATE_BR_DEFs').disabled = true;
    document.getElementById('AUTH_REMARKS_BR_DEF').disabled = true;
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
        url: "/DefBranch/List",
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
    $('#ABRV_BR_DEF').val("");
    $('#CITY_BR_DEF').val("");
    $('#HDBR_CD_BR_DEF').val("");
    $('#CODE_BR_DEF').val("");
    $('#DESC_BR_DEF').val("");
    $('#ADDRESS_BR_DEF').val("");
    $('#PHONE_BR_DEF').val("");
    $('#EMAIL_BR_DEF').val("");
    $('#MANAGER_BR_DEF').val("");
    $('#INACTIVE_LMS_BR_DEF').val("");
    $('#INACTIVE_IMS_BR_DEF').val("");
    $('#INACTIVE_MFL_BR_DEF').val("");
    $('#AUTH_STATUS_BR_DEF').val("");
    $('#AUTH_BY_BR_DEF').val("");
    $('#AUTH_DATE_BR_DEFs').val("");
    $('#AUTH_REMARKS_BR_DEF').val("");

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
    document.getElementById('ABRV_BR_DEF').disabled = true;
    document.getElementById('CITY_BR_DEF').disabled = true;
    document.getElementById('HDBR_CD_BR_DEF').disabled = true;
    document.getElementById('CODE_BR_DEF').disabled = true;
    document.getElementById('DESC_BR_DEF').disabled = true;
    document.getElementById('ADDRESS_BR_DEF').disabled = true;
    document.getElementById('PHONE_BR_DEF').disabled = true;
    document.getElementById('EMAIL_BR_DEF').disabled = true;
    document.getElementById('MANAGER_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_BR_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_BR_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_BR_DEF').disabled = true;
    document.getElementById('AUTH_BY_BR_DEF').disabled = true;
    document.getElementById('AUTH_DATE_BR_DEFs').disabled = true;
    document.getElementById('AUTH_REMARKS_BR_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('ABRV_BR_DEF').disabled = false;
    document.getElementById('CITY_BR_DEF').disabled = false;
    document.getElementById('HDBR_CD_BR_DEF').disabled = false;
    document.getElementById('DESC_BR_DEF').disabled = false;
    document.getElementById('ADDRESS_BR_DEF').disabled = false;
    document.getElementById('PHONE_BR_DEF').disabled = false;
    document.getElementById('EMAIL_BR_DEF').disabled = false;
    document.getElementById('MANAGER_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_BR_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_BR_DEF').disabled = false;
}
function getbyID(EmpID) {
    $('#ABRV_BR_DEF').css('border-color', 'lightgrey');
    $('#CITY_BR_DEF').css('border-color', 'lightgrey');
    $('#HDBR_CD_BR_DEF').css('border-color', 'lightgrey');
    $('#CODE_BR_DEF').css('border-color', 'lightgrey');
    $('#DESC_BR_DEF').css('border-color', 'lightgrey');
    $('#ADDRESS_BR_DEF').css('border-color', 'lightgrey');
    $('#PHONE_BR_DEF').css('border-color', 'lightgrey');
    $('#EMAIL_BR_DEF').css('border-color', 'lightgrey');
    $('#MANAGER_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_BR_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_AC_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_BR_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_BR_DEFs').css('border-color', 'lightgrey');

    $.ajax({
        url: "/DefBranch/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#ABRV_BR_DEF').val(result.ABRV);
            $('#CITY_BR_DEF').val(result.CITY_CODE);
            $('#HDBR_CD_BR_DEF').val(result.HDBR_CD);
            $('#CODE_BR_DEF').val(result.CODE);
            $('#DESC_BR_DEF').val(result.DESC);
            $('#ADDRESS_BR_DEF').val(result.ADDRESS);
            $('#PHONE_BR_DEF').val(result.PHONE);
            $('#EMAIL_BR_DEF').val(result.EMAIL);
            $('#MANAGER_BR_DEF').val(result.MANAGER);
            $('#INACTIVE_LMS_BR_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_BR_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_BR_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_BR_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_BR_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_BR_DEFs').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_BR_DEF').val(result.AUTH_REMARKS);

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
        CITY_CODE: $('#CITY_BR_DEF').val(),
        ABRV: $('#ABRV_BR_DEF').val(),
        HDRB_CD: $('#HCRB_CD_BR_DEF').val(),
        CODE: $('#CODE_BR_DEF').val(),
        DESC: $('#DESC_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BR_DEF').val(),
        PHONE: $('#PHONE_BR_DEF').val(),
        EMAIL: $('#EMAIL_BR_DEF').val(),
        MANAGER: $('#MANAGER_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BR_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBranch/Add",
        data: JSON.stringify(bnkObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
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
        CITY_CODE: $('#CITY_BR_DEF').val(),
        ABRV: $('#ABRV_BR_DEF').val(),
        HDRB_CD: $('#HCRB_CD_BR_DEF').val(),
        CODE: $('#CODE_BR_DEF').val(),
        DESC: $('#DESC_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BR_DEF').val(),
        PHONE: $('#PHONE_BR_DEF').val(),
        EMAIL: $('#EMAIL_BR_DEF').val(),
        MANAGER: $('#MANAGER_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BR_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBranch/Update",
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
        CITY_CODE: $('#CITY_BR_DEF').val(),
        ABRV: $('#ABRV_BR_DEF').val(),
        HDRB_CD: $('#HCRB_CD_BR_DEF').val(),
        CODE: $('#CODE_BR_DEF').val(),
        DESC: $('#DESC_BR_DEF').val(),
        ADDRESS: $('#ADDRESS_BR_DEF').val(),
        PHONE: $('#PHONE_BR_DEF').val(),
        EMAIL: $('#EMAIL_BR_DEF').val(),
        MANAGER: $('#MANAGER_BR_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_BR_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_BR_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_BR_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_BR_DEF').val(),
        AUTH_BY: $('#AUTH_BY_BR_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_BR_DEFs').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_BR_DEF').val(),
    };
    $.ajax({
        url: "/DefBranch/Delete/",
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

function loadCity() {
    $.ajax({
        type: "GET",
        url: "/DefBranch/getCityType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">City</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#CITY_BR_DEF").html(s);
        }
    });
}

function Forward() {
    CODE = $('#CODE_BR_DEF').val()
    $.ajax({
        url: "/DefBranch/Forward/" + CODE,
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
    CODE = $('#CODE_BR_DEF').val()
    $.ajax({
        url: "/DefBranch/Backward/" + CODE,
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
    CODE = $('#CODE_BR_DEF').val()
    $.ajax({
        url: "/DefBranch/First/" + CODE,
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
    CODE = $('#CODE_BR_DEF').val()
    $.ajax({
        url: "/DefBranch/Last/" + CODE,
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
