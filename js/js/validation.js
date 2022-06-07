function Validation(){
    this.kiemTraRong = function(value, spanID, message){
        if(value.trim() === ""){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
        document.getElementById(spanID).innerHTML = '';
        document.getElementById(spanID).style.display = 'none';
        return true;
    }
    this.kiemTraTK = function(value, spanID, message){
        var pattern = /^[0-9]{4,6}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
        
    }
    this.kiemTraTrung = function(value,spanID,message,array){
        var isExist = array.some(function(nv){
            return value === nv.taiKhoan;
        })
        if(isExist){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
        document.getElementById(spanID).innerHTML = '';
        document.getElementById(spanID).style.display = 'none';
        return true;
        
    }

    this.kiemTraTen = function(value,spanID,message){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
    }

    this.kiemTraEmail = function(value,spanID,message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
        
    }

    this.kiemTraPass = function(value, spanID, message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
        
    }

    this.kiemTraDate = function(value, spanID, message){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
    }
    
    this.kiemTraLuongCB = function(value, spanID, message){
        if(value >= 1000000 && value <= 20000000 ){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'block';
        return false;
    }

    this.kiemTraChucVu = function(value, spanID, message){
        if(value === 'Chọn chức vụ'){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }else if(value === 'Sếp'){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else if(value === 'Trưởng phòng'){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else if(value === 'Nhân viên'){
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
    }
}