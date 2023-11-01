function ListEmploy(){
    this.list = [];

    this.addEmployee = function(employees){
        this.list.push(employees);
    };

    this.findAccount = function(account){
        var index = -1;
        for (var i = 0; i < this.list.length; i++){
            if(this.list[i].account == account){
                index = i;
                break;
            }
        }
        return index; 
    };

    this.delAccount = function(account){
        var index = this.findAccount(account);
        if (index !== -1) {
        this.list.splice(index, 1);
        }
    };

    this.getInfo = function(account){
        var index = this.findAccount(account);
        if (index !== -1){
            return this.list[index];
        }
    };

    this.updateEmployees = function (employees){
        var index = this.findAccount(employees.account);
        if (index !== -1){
            this.list[index] = employees;
        }
    };
}

ListEmploy.prototype.searchEmployee = function (keyword){
    var arrSearch = [];
    for(var i = 0; i < this.list.length; i++) {
        if (this.list[i].ranking.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
            arrSearch.push(this.list[i]);
        }
    }
    return arrSearch;
}