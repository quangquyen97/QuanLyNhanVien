function NhanVien(taiKhoan, ten, email, matKhau, calender, salary, chucVu, time){
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.calender = calender;
    this.salary = salary;
    this.chucVu = chucVu;
    this.time = time;
    this.luong = 0;

    this.xepLoai = function(){
        if(this.time >= 192){
            return 'Xuất sắc'
        }else if(this.time >= 176 && this.time < 192){
            return 'Giỏi'
        }else if(this.time >= 160 && this.time < 176){
            return 'Khá'
        }else{
            return 'Trung Bình'
        }
    }
    this.tongLuong = function(){
        switch(this.chucVu) {
            case 'Sếp':
                this.luong = this.salary * 3;   
                break;
            case 'Trưởng phòng':
                this.luong = this.salary * 2;
                break;
            case 'Nhân viên':
                this.luong = this.salary * 1;
                break;
            default:
                this.luong= 'Chọn sai chức vụ'
                break;
        }
    }
    
}
