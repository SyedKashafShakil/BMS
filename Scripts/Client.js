/// <reference path="jquery-3.3.1.intellisense.js" />

$(document).ready(function () {
    
    loadData();
    loadClientType();
    loadDocType();
    loadTitleType();
    loadBranchDetail();
    loadRelationDetail();
    loadMaritalType();
    loadOccupationType();
    loadCountryType();
    loadCityType();
    loadNationalType();
    loadEduType();
    disablefields();
    document.getElementById('PARTY_CODE_BANK').disabled = true;
    document.getElementById('DD_CODE_BANK').disabled = true;
    document.getElementById('CODE_BANK').disabled = true;
    document.getElementById('PARTY_CODE_NATIONAL').disabled = true;
    document.getElementById('DD_CODE_NATIONAL').disabled = true;
    document.getElementById('CODE_NATIONAL').disabled = true;
    
});
function LoadDataCon(PARTY_CODE_CON) {
    $('#Father').css('border-color', 'lightgrey');
    $('#Mother').css('border-color', 'lightgrey');
    $('#SpouseName').css('border-color', 'lightgrey');
    $('#Occupation').css('border-color', 'lightgrey');
    $('#Gender').css('border-color', 'lightgrey');
    $('#MaritalStatus').css('border-color', 'lightgrey');
    $('#Dependents').css('border-color', 'lightgrey');
    $('#DOB').css('border-color', 'lightgrey');
    $('#BirthCountry').css('border-color', 'lightgrey');
    $('#BirthCity').css('border-color', 'lightgrey');
    $('#Nationality').css('border-color', 'lightgrey');
    $('#DualNationality').css('border-color', 'lightgrey');
    $('#COS').css('border-color', 'lightgrey');
    $('#CountryStay').css('border-color', 'lightgrey');
    $('#CountryNational').css('border-color', 'lightgrey');
    $('#ResidenceType').css('border-color', 'lightgrey');
    $('#Education').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Client/ListCon/" + PARTY_CODE_CON,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#Father').val(result[0].FATHER);
            $('#Mother').val(result[0].MOTHER);
            $('#SpouseName').val(result[0].SPOUSE);
            $('#Occupation').val(result[0].OCCUP);
            $('#Gender').val(result[0].GENDER);
            $('#MaritalStatus').val(result[0].MARITAL);
            $('#Dependents').val(result[0].DEPEND);
            $('#DOB').val(result[0].DOB);
            $('#BirthCountry').val(result[0].BIRTH_COUNTRY);
            $('#BirthCity').val(result[0].BIRTH_CITY);
            $('#Nationality').val(result[0].NATIONAL);
            $('#DualNationality').val(result[0].NATIONAL);
            $('#COS').val(result[0].COS);
            $('#CountryStay').val(result[0].RES_STATUS);
            $('#CountryNational').val(result[0].NATIONAL);
            $('#ResidenceType').val(result[0].RES_TYPE);
            $('#Education').val(result[0].EDUCAT);


        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function getbyID(PARTY_CODE_ID) {
    $('#PartyCode').css('border-color', 'lightgrey');
    $('#CreationDate').css('border-color', 'lightgrey');
    $('#KYCCode').css('border-color', 'lightgrey');
    $('#DocType').css('border-color', 'lightgrey');
    $('#CNIC').css('border-color', 'lightgrey');
    $('#CNICExpiry').css('border-color', 'lightgrey');
    $('#PassportNo').css('border-color', 'lightgrey');
    $('#PassportExpiry').css('border-color', 'lightgrey');
    $('#ClientName').css('border-color', 'lightgrey');
    $('#Title').css('border-color', 'lightgrey');
    $('#Address').css('border-color', 'lightgrey');
    $('#PresentAddress').css('border-color', 'lightgrey');
    $('#PermanentAddress').css('border-color', 'lightgrey');
    $('#City').css('border-color', 'lightgrey');
    $('#Fax').css('border-color', 'lightgrey');
    $('#Email').css('border-color', 'lightgrey');
    $('#Phone').css('border-color', 'lightgrey');
    $('#AccManager').css('border-color', 'lightgrey');
    $('#LeaseType').css('border-color', 'lightgrey');
    $('#Industry').css('border-color', 'lightgrey');
    $('#ISIC').css('border-color', 'lightgrey');
    $('#UWS').css('border-color', 'lightgrey');
    $('#NAPerform').css('border-color', 'lightgrey');
    $('#PoliticalStatus').css('border-color', 'lightgrey');
    $('#CorpStatus').css('border-color', 'lightgrey');
    //$('#Father').css('border-color', 'lightgrey');
    //$('#Mother').css('border-color', 'lightgrey');
    //$('#SpouseName').css('border-color', 'lightgrey');
    //$('#Occupation').css('border-color', 'lightgrey');
    //$('#Gender').css('border-color', 'lightgrey');
    //$('#MaritalStatus').css('border-color', 'lightgrey');
    //$('#Dependents').css('border-color', 'lightgrey');
    //$('#DOB').css('border-color', 'lightgrey');
    //$('#BirthCountry').css('border-color', 'lightgrey');
    //$('#BirthCity').css('border-color', 'lightgrey');
    //$('#Nationality').css('border-color', 'lightgrey');
    //$('#DualNationality').css('border-color', 'lightgrey');
    //$('#COS').css('border-color', 'lightgrey');
    //$('#CountryStay').css('border-color', 'lightgrey');
    //$('#CountryNational').css('border-color', 'lightgrey');
    //$('#ResidenceType').css('border-color', 'lightgrey');
    //$('#Education').css('border-color', 'lightgrey');
    $('#AuthStatus').css('border-color', 'lightgrey');
    $('#AuthBy').css('border-color', 'lightgrey');
    $('#AuthDate').css('border-color', 'lightgrey');
    $('#AuthRemark').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Client/getbyID/" + PARTY_CODE_ID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#PartyCode').val(result.PARTY_CODE);
            $('#PARTY_CODE_BANK').val(result.PARTY_CODE);
            $('#PARTY_CODE_NATIONAL').val(result.PARTY_CODE);
            $('#CreationDate').val(result.CREATION_DATE);
            $('#KYCCode').val(result.DD_CODE);
            $('#DocType').val(result.DOC_TYPE);
            $('#CNIC').val(result.CNIC);
            $('#CNICExpiry').val(result.CNIC_EXPIRY);
            $('#PassportNo').val(result.PASS);
            $('#PassportExpiry').val(result.PASS_EXPIRY);
            $('#ClientName').val(result.NAME);
            $('#Title').val(result.TITLE);
            $('#Address').val(result.ADD);
            $('#PresentAddress').val(result.ADD_PERM);
            $('#PermanentAddress').val(result.ADD_PERM);
            $('#City').val(result.ADD_CITY);
            $('#Fax').val(result.FAX);
            $('#Email').val(result.EMAIL);
            $('#Phone').val(result.PHONE);
            $('#AccManager').val(result.PARTY_CODE);
            $('#LeaseType').val(result.PARTY_CODE);
            $('#Industry').val(result.IND);
            $('#ISIC').val(result.PARTY_CODE);
            $('#UWS').val(result.PARTY_CODE);
            $('#NAPerform').val(result.PARTY_CODE);
            $('#PoliticalStatus').val(result.PARTY_CODE);
            $('#CorpStatus').val(result.PARTY_CODE);
            //$('#Father').val(result.FATHER);
            //$('#Mother').val(result.MOTHER);
            //$('#SpouseName').val(result.SPOUSE);
            //$('#Occupation').val(result.OCCUP);
            //$('#Gender').val(result.GENDER);
            //$('#MaritalStatus').val(result.MARITAL);
            //$('#Dependents').val(result.DEPEND);
            //$('#DOB').val(result.DOB);
            //$('#BirthCountry').val(result.BIRTH_PLACE);
            //$('#BirthCity').val(result.NATIONALITY);
            //$('#Nationality').val(result.NATIONALITY);
            //$('#DualNationality').val(result.PARTY_CODE);
            //$('#COS').val(result.COS);
            //$('#CountryStay').val(result.PARTY_CODE);
            //$('#CountryNational').val(result.NATIONAL);
            //$('#ResidenceType').val(result.RES_TYPE);
            //$('#Education').val(result.EDUCAT);
            $('#AuthStatus').val(result.AUTH_STATUS);
            $('#AuthBy').val(result.AUTH_BY);
            $('#AuthDate').val(result.AUTH_DATE);
            $('#AuthRemark').val(result.AUTH_REMARKS);
            
            
            $('#btnUpdate').hide();
            $('#btnAdd').hide();
            $('#btnEdit').show();
            $('#btnDelete').show();
            disablefields();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    

    return false;
}

function disablefields() {
    document.getElementById('PartyCode').disabled = true;
    document.getElementById('CreationDate').disabled = true;
    document.getElementById('KYCCode').disabled = true;
    document.getElementById('DocType').disabled = true;
    document.getElementById('CNIC').disabled = true;
    document.getElementById('CNICExpiry').disabled = true;
    document.getElementById('PassportNo').disabled = true;
    document.getElementById('PassportExpiry').disabled = true;
    document.getElementById('ClientName').disabled = true;
    document.getElementById('Title').disabled = true;
    document.getElementById('Address').disabled = true;
    document.getElementById('PresentAddress').disabled = true;
    document.getElementById('PermanentAddress').disabled = true;
    document.getElementById('City').disabled = true;
    document.getElementById('Fax').disabled = true;
    document.getElementById('Email').disabled = true;
    document.getElementById('Phone').disabled = true;
    document.getElementById('AccManager').disabled = true;
    document.getElementById('LeaseType').disabled = true;
    document.getElementById('Industry').disabled = true;
    document.getElementById('ISIC').disabled = true;
    document.getElementById('UWS').disabled = true;
    document.getElementById('NAPerform').disabled = true;
    document.getElementById('PoliticalStatus').disabled = true;
    document.getElementById('CorpStatus').disabled = true;
    document.getElementById('Father').disabled = true;
    document.getElementById('Mother').disabled = true;
    document.getElementById('SpouseName').disabled = true;
    document.getElementById('Occupation').disabled = true;
    document.getElementById('Gender').disabled = true;
    document.getElementById('MaritalStatus').disabled = true;
    document.getElementById('Dependents').disabled = true;
    document.getElementById('DOB').disabled = true;
    document.getElementById('BirthCountry').disabled = true;
    document.getElementById('BirthCity').disabled = true;
    document.getElementById('Nationality').disabled = true;
    document.getElementById('DualNationality').disabled = true;
    document.getElementById('COS').disabled = true;
    document.getElementById('CountryStay').disabled = true;
    document.getElementById('CountryNational').disabled = true;
    document.getElementById('ResidenceType').disabled = true;
    document.getElementById('Education').disabled = true;
    document.getElementById('AuthStatus').disabled = true;
    document.getElementById('AuthBy').disabled = true;
    document.getElementById('AuthDate').disabled = true;
    document.getElementById('AuthRemark').disabled = true;
}

function loadData() {
    
    $.ajax({
        url: "/Client/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.PARTY_CODE + '</td>';
                html += '<td colspan="2">' + item.NAME + '</td>';
                html += '<td>' + item.PHONE + '</td>';
                html += '<td><a href="#" id="viewbypartycode" onclick="LoadDataCon(' + item.PARTY_CODE + '); loadDataBank(' + item.PARTY_CODE + '); loadDataNational(' + item.PARTY_CODE + ');  getbyID(' + item.PARTY_CODE + ');">View</a></td>';
                html += '</tr>';
            });
            $('#tbodyMaster').html(html);

        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function PaginationForward() {
    obj = {
        PAGINATION_CODE : $('#ValuePage').val()
    }
    $.ajax({
        url: "/Client/PageFwd",
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.PARTY_CODE + '</td>';
                html += '<td colspan="2">' + item.NAME + '</td>';
                html += '<td>' + item.PHONE + '</td>';
                html += '<td><a href="#" id="viewbypartycode" onclick="LoadDataCon(' + item.PARTY_CODE + '); loadDataBank(' + item.PARTY_CODE + '); loadDataNational(' + item.PARTY_CODE + ');  getbyID(' + item.PARTY_CODE + ');">View</a></td>';
                html += '</tr>';
            });
            $('#tbodyMaster').html(html);
            Page = parseInt($('#ValuePage').val());
            Page = Page + 1;
            i = Page.toString();
            $('#ValuePage').val(Page);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

}
function PaginationBack() {
    obj = {
        PAGINATION_CODE: $('#ValuePage').val()
    }
    $.ajax({
        url: "/Client/PageBwd",
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.PARTY_CODE + '</td>';
                html += '<td colspan="2">' + item.NAME + '</td>';
                html += '<td>' + item.PHONE + '</td>';
                html += '<td><a href="#" id="viewbypartycode" onclick="LoadDataCon(' + item.PARTY_CODE + '); loadDataBank(' + item.PARTY_CODE + '); loadDataNational(' + item.PARTY_CODE + ');  getbyID(' + item.PARTY_CODE + ');">View</a></td>';
                html += '</tr>';
            });
            $('#tbodyMaster').html(html);
            Page = parseInt($('#ValuePage').val());
            Page = Page - 1;
            i = Page.toString();
            $('#ValuePage').val(Page);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

}


function loadClientType() {
    $.ajax({
        type: "GET",
        url: "/Client/getClientType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (key,data) {
            var s = '<option value="-1">Client Type</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].TYPE + '</option>';
            }
            $("#ClientType").html(s);
        }
    });
}

function loadTitleType() {
    $.ajax({
        type: "GET",
        url: "/Client/getTitleType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Title</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#Title").html(s);
        }
    });
}

function loadDocType() {
    $.ajax({
        type: "GET",
        url: "/Client/getDocType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Document Type</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#DocType").html(s);
        }
    });
}

function loadMaritalType() {
    $.ajax({
        type: "GET",
        url: "/Client/getMaritalType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Marital</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#MaritalStatus").html(s);
        }
    });
}

function loadEduType() {
    $.ajax({
        type: "GET",
        url: "/Client/getEduType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Education</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#Education").html(s);
        }
    });
}

function loadCityType() {
    $.ajax({
        type: "GET",
        url: "/Client/getCityType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">City</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#BirthCity").html(s);
        }
    });
}

function loadNationalType() {
    $.ajax({
        type: "GET",
        url: "/Client/getNationalType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Nationality</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#Nationality").html(s);
        }
    });
}

function loadCountryType() {
    $.ajax({
        type: "GET",
        url: "/Client/getCountryType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Country</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#BirthCountry").html(s);
            $("#COUNTRY_CODE_NAME").html(s);
        }
    });
}

function loadOccupationType() {
    $.ajax({
        type: "GET",
        url: "/Client/getOccupationType",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Occupation</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#Occupation").html(s);
        }
    });
}

function loadDataBank(PARTY_CODE_BANK) {
    $.ajax({
        url: "/Client/ListBank/" + PARTY_CODE_BANK,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function(key,index){
                html += '<tr>';
                html += '<td>' + index.CODE + '</td>';
                html += '<td>' + index.BANK_CODE + '</td>';
                html += '<td>' + index.BANK_BR_CODE + '</td>';
                html += '<td>' + index.AC_TITLE + '</td>';
                html += '<td>' + index.AC_NO + '</td>';
                html += '<td>' + index.JOINT + '</td>';
                html += '<td>' + index.NAME + '</td>';
                //html += '<td>' + index.RELATION + '</td>';
                html += '<td>' + index.PHONE + '</td>';
                html += '<td>' + index.EMAIL + '</td>';
                html += '<td><a href="#" onclick="return getBankbyID(' + index.PARTY_CODE + ')">Edit</a></td>';
                html += '<td><a href="#" onclick="return getBankbyID(' + index.PARTY_CODE + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('#tbodyBank').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function loadDataNational(PARTY_CODE_NATIONAL) {
    $.ajax({
        url: "/Client/ListNational/" + PARTY_CODE_NATIONAL,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, index) {
                html += '<tr>';
                html += '<td>' + index.CODE + '</td>';
                html += '<td>' + index.COUNTRY + '</td>';
                html += '<td>' + index.ORIGIN + '</td>';
                html += '<td>' + index.CNIC + '</td>';
                html += '<td>' + index.CNIC_EXPIRY + '</td>';
                html += '<td>' + index.NTN + '</td>';
                html += '<td>' + index.TAX_STATUS + '</td>';
                html += '<td>' + index.TAX_FILE_DATE + '</td>';
                html += '<td>' + index.COMMENTS + '</td>';
                html += '<td><a href="#" onclick="return getBankbyID(' + index.PARTY_CODE + ')">Edit</a></td>';
                html += '<td><a href="#" onclick="return getBankbyID(' + index.PARTY_CODE + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('#tbodyNational').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function AddBankDetails(){
    var BankObj = {
        CODE: $('#CODE').val(),
        BRANCH: $('#BRANCH_CODE_NAME').val(),
        TITLE: $('#ACC_TITLE_BANK').val(),
        ACCOUNT: $('#ACC_NO_BANK').val(),
        JOINT: $('#JOINT_BANK').val(),
        NAME: $('#NAME_BANK').val(),
        RELATION: $('#RELATION_CODE_NAME').val(),
        PHONE: $('#PHONE_BANK').val(),
        EMAIL: $('#EMAIL_BANK').val(),
        PARTY_CODE: $('#PARTY_CODE_BANK').val(),
        DD_CODE: $('#DD_CODE_BANK').val(),

    };
    $.ajax({
        url: "/Client/AddBank",
        data: JSON.stringify(BankObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            clearTextBox();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function loadBranchDetail() {
    $.ajax({
        type: "GET",
        url: "/Client/getBranchDetail",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Branch</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#BRANCH_CODE_NAME").html(s);
        }
    });
}

function loadRelationDetail() {
    $.ajax({
        type: "GET",
        url: "/Client/getRelationDetail",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var s = '<option value="-1">Relation</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].CODE + '">' + data[i].DESC + '</option>';
            }
            $("#RELATION_CODE_NAME").html(s);
        }
    });
}

function Forward() {
    CODE = $('#PartyCode').val()
    $.ajax({
        url: "/Client/Forward/" + CODE,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {

            getbyID(result);
            LoadDataCon(result);
            loadDataBank(result);
            loadDataNational(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function Backward() {
    CODE = $('#PartyCode').val()
    $.ajax({
        url: "/Client/Backward/" + CODE,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            loadDataBank(result);
            loadDataNational(result);
            getbyID(result);
            LoadDataCon(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function First() {
    CODE = $('#PartyCode').val()
    $.ajax({
        url: "/Client/First/" + CODE,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            loadDataBank(result);
            loadDataNational(result);
            getbyID(result);
            LoadDataCon(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}

function Last() {
    CODE = $('#PartyCode').val()
    $.ajax({
        url: "/Client/Last/" + CODE,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            loadDataBank(result);
            loadDataNational(result);
            getbyID(result);
            LoadDataCon(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;

}