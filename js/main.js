var listEmployees = new ListEmploy();
var validation = new Validation();

function getEle(id){
    return document.getElementById(id);
}
getLocalStorage();

function getValuesInput(){
    var _account = getEle("tknv").value;
    var _fullName = getEle("name").value;
    var _email = getEle("email").value;
    var _password = getEle("password").value;
    var _workingDay = getEle("datepicker").value;
    var _basicSalary = getEle("luongCB").value.replace(/\,/g,'');
    var _position = getEle("chucvu").value;
    var _workingHours = getEle("gioLam").value; 

    var isValid = true;

        isValid &= validation.checkValidation(
            _account,"tbTKNV",
            "* Tài khoản hợp lệ từ 4-6 ký tự (bao gồm số 0-9, chữ IN HOA và chữ thường).\<br\>Không được có khoảng trắng và ký tự đặc biệt.") 
            && validation.checkLengthTknv(
                _account, "tbTKNV", "* Tài khoản hợp lệ từ 4-6 ký tự (bao gồm số 0-9, chữ IN HOA và chữ thường).\<br\>Không được có khoảng trắng và ký tự đặc biệt.", 6,20)
                && validation.checkAccount(
                    _account, "tbTKNV", "* Tài khoản đã có người sử dụng, vui lòng nhập tài khoản khác.\<br\>Tài khoản hợp lệ từ 6-20 ký tự (bao gồm số 0-9, chữ IN HOA và chữ thường) \<br\>Không được có khoảng trắng và ký tự đặc biệt.", listEmployees.list)
                    && validation.checkWhiteSpace(
                        _account,"tbTKNV",
                        "* Tài khoản không được có khoảng trắng.")
                        && validation.checkSpecialSymbol(
                            _account,"tbTKNV",
                        "* Tài khoản không được có ký tự đặc biệt."
                        );

    isValid &= validation.checkValidation(
        _fullName,"tbTen",
        "* Vui lòng nhập đầy đủ họ và tên.\<br\>(chỉ nhập chữ IN HOA và chữ thường, không nhập số và ký tự đặc biệt).") 
        && validation.checkLetter(
            _fullName, "tbTen", "* Chỉ nhập chữ IN HOA và chữ thường, không nhập số và ký tự đặc biệt."
            );
    isValid &= validation.checkValidation(
        _email, "tbEmail",
        "* Email sẽ tự động khởi tạo theo tài khoản của bạn.\<br\>(Email sẽ có định dạng: tàikhoản@cybersoft.vn)."
        );
    isValid &= validation.checkValidation(
        _password,"tbMatKhau",
        "* Vui lòng nhập mật khẩu từ 6-20 ký tự. \<br\>(bao gồm 1 chữ viết IN HOA, 1 chữ số và 1 ký tự đặc biệt).") 
        && validation.checkLength(
            _password, "tbMatKhau", "* Mật khẩu phải từ 6-20 ký tự (bao gồm 1 chữ viết IN HOA, 1 chữ số và 1 ký tự đặc biệt).", 6,20)
            && validation.checkPassword(
                _password, "tbMatKhau","Mật khẩu phải bao gồm 1 chữ viết IN HOA, 1 chữ số và 1 ký tự đặc biệt"
            );
    isValid &= validation.checkValidation(
        _workingDay,"tbNgay",
        "* Vui lòng nhập ngày bắt đầu làm việc.")
        && validation.checkDate (
            _workingDay, "tbNgay", "* Định dạng Ngày/Tháng/Năm không hợp lệ" 
         );
    isValid &= validation.checkValidation(
        _basicSalary, "tbLuongCB",
        "* Vui lòng nhập lương cơ bản.\<br\>(chỉ nhập số, không nhập chữ hoặc ký tự đặc biệt).")
        && validation.checkNumber(
            _basicSalary, "tbLuongCB", "* Chỉ nhập số, không nhập chữ hoặc ký tự đặc biệt."
            );
    isValid &= validation.checkPosition(
            "chucvu", "tbChucVu", "* Vui lòng chọn chức vụ trong công ty."
        );    
    isValid &= validation.checkValidation(
        _workingHours, "tbGiolam",
        "* Vui lòng nhập số giờ làm trong tháng.\<br\>(chỉ nhập số, không nhập chữ hoặc ký tự đặc biệt).")
        && validation.checkNumber(
            _workingHours, "tbGiolam", "Chỉ nhập số, không nhập chữ hoặc ký tự đặc biệt"
        );

        if(isValid){
            var employees = new Employees(
                _account, _fullName, _email,
                _password, _workingDay, _basicSalary, 
                _position, _workingHours);
                return employees;
            }
            return null;
}

getEle("btnThemNV").addEventListener("click", function (event){
    event.preventDefault();
    var employees = getValuesInput(true);
    if(employees){
        employees.salary();
        employees.rank();
        listEmployees.addEmployee(employees);
        createTable(listEmployees.list);
        setLocalStorage();
    }
})

function createTable(arr){
    getEle("tableDanhSach").innerHTML = "";
    
    for (var i = 0; i < arr.length; i++){
        var tagTR = document.createElement("tr");

        var tagTD_Account = document.createElement("td"); 
        var tagTD_FullName = document.createElement("td"); 
        var tagTD_Email = document.createElement("td"); 
        var tagTD_WorkingDay = document.createElement("td");  
        var tagTD_Posistion = document.createElement("td"); 
        var tagTD_SumSalary = document.createElement("td"); 
        var tagTD_Ranking = document.createElement("td");
        var tagTD_BtnDel = document.createElement("td"); 
        var tagTD_BtnEdit = document.createElement("td"); 

        tagTD_Account.innerHTML = arr[i].account;
        tagTD_FullName.innerHTML = arr[i].fullName;
        tagTD_Email.innerHTML = arr[i].email;
        tagTD_WorkingDay.innerHTML = arr[i].workingDay;
        tagTD_Posistion.innerHTML = arr[i].position;
        tagTD_SumSalary.innerHTML = arr[i].sumSalary.toLocaleString();
        tagTD_Ranking.innerHTML = arr[i].ranking;
        tagTD_BtnEdit.innerHTML ='<button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="editEmployee(\'' + arr[i].account + '\')"><i class="fas fa-edit"></i></button>';
        tagTD_BtnDel.innerHTML ='<button class="btn btn-danger" onclick="delEmployee(\'' + arr[i].account + '\')"><i class="fas fa-trash"></i></button>';
        
        tagTR.appendChild(tagTD_Account);
        tagTR.appendChild(tagTD_FullName);
        tagTR.appendChild(tagTD_Email);
        tagTR.appendChild(tagTD_WorkingDay);
        tagTR.appendChild(tagTD_Posistion);
        tagTR.appendChild(tagTD_SumSalary);
        tagTR.appendChild(tagTD_Ranking);
        tagTR.appendChild(tagTD_BtnEdit);
        tagTR.appendChild(tagTD_BtnDel);

        getEle("tableDanhSach").appendChild(tagTR);
    }
}

function delEmployee(account){
    var aus = confirm("Bạn có chắc chắn muốn xoá tài khoản \"" + account + "\" không?");
    if (aus == true){
    listEmployees.delAccount (account);
    createTable(listEmployees.list);
    setLocalStorage();
    }
    else {}
}

function editEmployee (account){
    var information = listEmployees.getInfo(account);
    getEle("tknv").value = information.account;
    getEle("tbTKNV").innerHTML = "* Không thể thay đổi tài khoản";
    alertUpdate("tbTKNV");
    getEle("tknv").disabled = true;
    getEle("name").value = information.fullName;
    getEle("email").value = information.email;
    getEle("email").disabled = true;
    getEle("tbEmail").innerHTML = "* Không thể thay đổi email";
    alertUpdate("tbEmail");
    getEle("password").value = information.password;
    getEle("datepicker").value = information.workingDay;
    getEle("luongCB").value = information.basicSalary;
    getEle("chucvu").value = information.position;
    getEle("gioLam").value = information.workingHours;
    getEle("btnCapNhat").style.display = "inline-block";
    getEle("btnThemNV").style.display = "none";
}

getEle("btnCapNhat").addEventListener("click", function(event){
    event.preventDefault();
    var employees = getValuesInput(false);
    employees.salary();
    employees.rank();
    listEmployees.updateEmployees(employees);
    createTable(listEmployees.list);
    setLocalStorage();
    resetValidation();
})

getEle("btnThem").addEventListener("click", function(){
    getEle("btnCapNhat").style.display = "none";
    getEle("btnThemNV").style.display = "inline-block";
    resetValidation();
})

getEle("btnDong").addEventListener("click", function() {
    resetForm();
})

function resetForm(){
    getEle("formInfoEmployee").reset();
    getEle("tknv").disabled = false;
    resetValidation();
}

function setLocalStorage(){
    var arrString = JSON.stringify(listEmployees.list);
    localStorage.setItem("listEmployees", arrString);
}

function getLocalStorage(){
    if (localStorage.getItem("listEmployees")){
    listEmployees.list = JSON.parse(localStorage.getItem("listEmployees"));
    createTable(listEmployees.list);
    };
}

getEle("searchName").addEventListener("keyup", function(){
    var keyword = getEle("searchName").value;
    var arrSearch = listEmployees.searchEmployee(keyword);
    createTable(arrSearch);
})

function format(input) {
    var nStr = input.value + '';  
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';  
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
  }

function autoFillEmail(){
    getEle("email").value = getEle("tknv").value + "@cybersoft.vn";
};

function alertUpdate(spanID){
    getEle(spanID).style.display = "block";
    getEle(spanID).className = "alert-danger";
    getEle(spanID).style.fontSize = "11px";
    getEle(spanID).style.color = "red";
    getEle(spanID).style.padding = "0.3rem";
    getEle(spanID).style.display= "block";
}

function resetValidation(){
   getEle("tbTKNV").style.display = "none";
   getEle("tbTen").style.display = "none";
   getEle("tbEmail").style.display = "none";
   getEle("tbMatKhau").style.display = "none";
   getEle("tbNgay").style.display = "none";
   getEle("tbLuongCB").style.display = "none";
   getEle("tbChucVu").style.display = "none";
   getEle("tbGiolam").style.display = "none";
};