/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    loadData();
    disablefields();
    disableNav();
    loadCountry();
    loadProv();
    document.getElementById('CODE_CITY_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CITY_DEF').disabled = true;
    document.getElementById('AUTH_BY_CITY_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CITY_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CITY_DEF').disabled = true;
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
        url: "/DefCity/List",
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
    $('#COUNTRY_CODE_CITY_DEF').val("");
    $('#PROVINCE_CODE_CITY_DEF').val("");
    $('#CODE_CITY_DEF').val("");
    $('#DESC_CITY_DEF').val("");
    $('#ABRV_CITY_DEF').val("");
    $('#INACTIVE_LMS_CITY_DEF').val("");
    $('#INACTIVE_IMS_CITY_DEF').val("");
    $('#INACTIVE_MFL_CITY_DEF').val("");
    $('#AUTH_STATUS_CITY_DEF').val("");
    $('#AUTH_BY_CITY_DEF').val("");
    $('#AUTH_DATE_CITY_DEF').val("");
    $('#AUTH_REMARKS_CITY_DEF').val("");

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
    document.getElementById('COUNTRY_CODE_CITY_DEF').disabled = true;
    document.getElementById('PROVINCE_CODE_CITY_DEF').disabled = true;
    document.getElementById('CODE_CITY_DEF').disabled = true;
    document.getElementById('DESC_CITY_DEF').disabled = true;
    document.getElementById('ABRV_CITY_DEF').disabled = true;
    document.getElementById('INACTIVE_LMS_CITY_DEF').disabled = true;
    document.getElementById('INACTIVE_IMS_CITY_DEF').disabled = true;
    document.getElementById('INACTIVE_MFL_CITY_DEF').disabled = true;
    document.getElementById('AUTH_STATUS_CITY_DEF').disabled = true;
    document.getElementById('AUTH_BY_CITY_DEF').disabled = true;
    document.getElementById('AUTH_DATE_CITY_DEF').disabled = true;
    document.getElementById('AUTH_REMARKS_CITY_DEF').disabled = true;
}
function enablefields() {
    document.getElementById('COUNTRY_CODE_CITY_DEF').disabled = false;
    document.getElementById('PROVINCE_CODE_CITY_DEF').disabled = false;
    document.getElementById('DESC_CITY_DEF').disabled = false;
    document.getElementById('ABRV_CITY_DEF').disabled = false;
    document.getElementById('INACTIVE_LMS_CITY_DEF').disabled = false;
    document.getElementById('INACTIVE_IMS_CITY_DEF').disabled = false;
    document.getElementById('INACTIVE_MFL_CITY_DEF').disabled = false;

}
function getbyID(EmpID) {
    $('#COUNTRY_CODE_CITY_DEF').css('border-color', 'lightgrey');
    $('#PROVINCE_CODE_CITY_DEF').css('border-color', 'lightgrey');
    $('#CODE_CITY_DEF').css('border-color', 'lightgrey');
    $('#DESC_CITY_DEF').css('border-color', 'lightgrey');
    $('#ABRV_CITY_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_LMS_CITY_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_IMS_CITY_DEF').css('border-color', 'lightgrey');
    $('#INACTIVE_MFL_CITY_DEF').css('border-color', 'lightgrey');
    $('#AUTH_STATUS_CITY_DEF').css('border-color', 'lightgrey');
    $('#AUTH_BY_CITY_DEF').css('border-color', 'lightgrey');
    $('#AUTH_DATE_CITY_DEF').css('border-color', 'lightgrey');
    $('#AUTH_REMARKS_CITY_DEF').css('border-color', 'lightgrey');


    $.ajax({
        url: "/DefCity/getbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#COUNTRY_CODE_CITY_DEF').val(result.COUNTRY_CODE);
            $('#PROVINCE_CODE_CITY_DEF').val(result.PROV_CODE);
            $('#CODE_CITY_DEF').val(result.CODE);
            $('#DESC_CITY_DEF').val(result.DESC);
            $('#ABRV_CITY_DEF').val(result.ABRV);
            $('#INACTIVE_LMS_CITY_DEF').val(result.INACTIVE_LMS);
            $('#INACTIVE_IMS_CITY_DEF').val(result.INACTIVE_IMS);
            $('#INACTIVE_MFL_CITY_DEF').val(result.INACTIVE_MFL);
            $('#AUTH_STATUS_CITY_DEF').val(result.AUTH_STATUS);
            $('#AUTH_BY_CITY_DEF').val(result.AUTH_BY);
            $('#AUTH_DATE_CITY_DEF').val(result.AUTH_DATE);
            $('#AUTH_REMARKS_CITY_DEF').val(result.AUTH_REMARKS);

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
        PROV_CODE: $('#PROVINCE_CODE_CITY_DEF').val(),
        COUNTRY_CODE: $('#COUNTRY_CODE_CITY_DEF').val(),
        CODE: $('#CODE_CITY_DEF').val(),
        DESC: $('#DESC_CITY_DEF').val(),
        ABRV: $('#ABRV_CITY_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CITY_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CITY_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CITY_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CITY_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CITY_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CITY_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CITY_DEF').val(),
    };
    $.ajax({
        url: "/DefCity/Add",
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
        PROV_CODE: $('#PROVINCE_CODE_CITY_DEF').val(),
        COUNTRY_CODE: $('#COUNTRY_CODE_CITY_DEF').val(),
        CODE: $('#CODE_CITY_DEF').val(),
        DESC: $('#DESC_CITY_DEF').val(),
        ABRV: $('#ABRV_CITY_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CITY_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CITY_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CITY_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CITY_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CITY_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CITY_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CITY_DEF').val(),
    };
    $.ajax({
        url: "/DefCity/Update",
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
        PROV_CODE: $('#PROVINCE_CODE_CITY_DEF').val(),
        COUNTRY_CODE: $('#COUNTRY_CODE_CITY_DEF').val(),
        CODE: $('#CODE_CITY_DEF').val(),
        DESC: $('#DESC_CITY_DEF').val(),
        ABRV: $('#ABRV_CITY_DEF').val(),
        INACTIVE_LMS: $('#INACTIVE_LMS_CITY_DEF').val(),
        INACTIVE_IMS: $('#INACTIVE_IMS_CITY_DEF').val(),
        INACTIVE_MFL: $('#INACTIVE_MFL_CITY_DEF').val(),
        AUTH_STATUS: $('#AUTH_STATUS_CITY_DEF').val(),
        AUTH_BY: $('#AUTH_BY_CITY_DEF').val(),
        AUTH_DATE: $('#AUTH_DATE_CITY_DEF').val(),
        AUTH_REMARKS: $('#AUTH_REMARKS_CITY_DEF').val(),
    };
    $.ajax({
        url: "/DefCity/Delete/",
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
    CODE = $('#CODE_CITY_DEF').val()
    $.ajax({
        url: "/DefCity/Forward/" + CODE,
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
    CODE = $('#CODE_CITY_DEF').val()
    $.ajax({
        url: "/DefCity/Backward/" + CODE,
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
    CODE = $('#CODE_CITY_DEF').val()
    $.ajax({
        url: "/DefCity/First/" + CODE,
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
    CODE = $('#CODE_CITY_DEF').val()
    $.ajax({
        url: "/DefCity/Last/" + CODE,
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

function loadCountry() {
    $.ajax({
        type: "GET",
        url: "/DefCity/getCountryType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Country</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#COUNTRY_CODE_CITY_DEF").html(s);
        }
    });
}

function loadProv() {
    $.ajax({
        type: "GET",
        url: "/DefCity/getProvType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Province</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#PROVINCE_CODE_CITY_DEF").html(s);
        }
    });
}