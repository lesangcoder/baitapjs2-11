function getEle(id){
    return document.getElementById(id);
}

function Employees(_account, _fullName, _email,
    _password, _workingDay, _basicSalary, _position,
    _workingHours){

    this.account = _account;
    this.fullName = _fullName;
    this.email = _email;
    this.password = _password;
    this.workingDay = _workingDay;
    this.basicSalary = _basicSalary;
    this.position = _position;
    this.workingHours = _workingHours;
    this.sumSalary = 0;
    this.ranking = "";

    this.rank = function() {
        if (this.position == "Nhân viên"){
            if (this.workingHours >= 192){
            return this.ranking = "Xuất sắc";
            }
            if (this.workingHours >= 176){
            return this.ranking = "Giỏi";
            }
            if (this.workingHours >= 160){
            return this.ranking = "Khá";
            }
            return this.ranking = "Trung Bình";   
        }
    };
        
    this.salary = function(){
        if (this.position == "Sếp"){
            return this.sumSalary = parseFloat(this.basicSalary) * 3;
        } 
        if (this.position == "Trưởng phòng"){
            return this.sumSalary = parseFloat(this.basicSalary) * 2;          
        } 
        if (this.position == "Nhân viên"){
            return this.sumSalary = parseFloat(this.basicSalary);
        }
    };
}
