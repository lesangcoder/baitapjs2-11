function getFalse  (spanID, mess) {
    getEle(spanID).innerHTML = mess;
    getEle(spanID).className = "alert-danger";
    getEle(spanID).style.fontSize = "11px";
    getEle(spanID).style.color = "red";
    getEle(spanID).style.padding = "0.3rem";
    getEle(spanID).style.display= "block";
}

function getTrue(spanID) {
    getEle(spanID).innerHTML = "";
    getEle(spanID).className = "";
    getEle(spanID).style.display= "none";
}

function Validation(){
    this.checkValidation = function(input, spanID, mess){
        if(input.trim() === ""){
            getFalse(spanID, mess);
            return false;
        }
            getTrue(spanID);
            return true;
    };

    this.checkWhiteSpace  = function(input, spanID, mess){
        if(/\s/g.test(input)){
            getFalse(spanID, mess);
            return false;
        }
            getTrue(spanID);
            return true;
    };
    this.checkSpecialSymbol  = function(input, spanID, mess){
        if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input)){
            getFalse(spanID, mess);
            return false;
        }
            getTrue(spanID);
            return true;
    };

    this.checkLength = function (input, spanID, mess, min, max){
        if (input.length >= min && input.length <= max){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
    };



    this.checkLengthTknv = function (input, spanID, mess, min, max){
        if (input.length >= 4 && input.length <= 6){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
    };

    this.checkLetter = function (input, spanID, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (input.match(letter)){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkNumber = function (input, spanID, mess){
        var letter = /^[0-9]+$/;
        if (input.match(letter)){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkPassword = function (input, spanID, mess){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkEmail = function (input, spanID, mess){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkDate = function (input, spanID, mess){
        var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (input.match(letter)){
            getTrue(spanID);
            return true;
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkPosition = function (idSelect, spanID, mess){
        if (getEle(idSelect).selectedIndex !=0){
            getTrue(spanID);
            return true; 
        }
            getFalse(spanID, mess);
            return false;
        };

    this.checkAccount = function(input, spanID, mess, arr){
        var status = true;
        for (var i = 0; i < arr.length; i++){
            if (arr[i].account === input){
                status = false;
                break;
            }
        }
        if (status) {
            getTrue(spanID);
            return true;
        }                
            getFalse(spanID, mess);
            return fasle;
        };
}