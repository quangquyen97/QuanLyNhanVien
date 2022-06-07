const dsnv = new DanhSachNhanVien();
const validation = new Validation();

// taiKhoan, ten, email, matKhau, calender, salary, position, time

function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV") != null) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    hienThiTable(dsnv.mangNV);
  }
}

function thongTinNhanVien() {
  var taiKhoan = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var calender = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value;

  //! TÀI KHOẢN
  var isValid = true;
  isValid &=
    validation.kiemTraRong(
      taiKhoan,
      "tbTKNV",
      "Tài khoản không được bỏ trống!"
    ) &&
    validation.kiemTraTrung(
      taiKhoan,
      "tbTKNV",
      "Tai Khoản bị trùng",
      dsnv.mangNV
    ) &&
    validation.kiemTraTK(taiKhoan, "tbTKNV", "Tài khoản tối đa 4 - 6 ký số");

  //!TÊN NGƯỜI DÙNG
  isValid &=
    validation.kiemTraRong(ten, "tbTen", "Không được để trống") &&
    validation.kiemTraTen(ten, "tbTen", "Không đúng định dạng");

  //!EMAIL
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "Không được để trống") &&
    validation.kiemTraEmail(email, "tbEmail", "Sai định dạng email");

  //!MẬT KHẨU
  isValid &=
    validation.kiemTraRong(matKhau, "tbMatKhau", "Không được để trống") &&
    validation.kiemTraPass(
      matKhau,
      "tbMatKhau",
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );
    
    //!DATE
    isValid &= validation.kiemTraRong(calender,'tbNgay','Không được để trống!') && validation.kiemTraDate(calender,'tbNgay','định dạng chưa đúng');

    //!SALARY
    isValid &= validation.kiemTraRong(salary,'tbLuongCB','Không được để trống!') && validation.kiemTraLuongCB(Number(salary),'tbLuongCB','Lương cơ bản 1 000 000 - 20 000 000, không để trống');
    
    //!Chức vụ
    isValid &= validation.kiemTraChucVu(chucVu,'tbChucVu','Không được để trống');

    //!TIME
    isValid &= validation.kiemTraRong(Number(time),'tbGiolam','Không được để trống!');

    if (isValid) {
      var nv = new NhanVien(
      taiKhoan,
      ten,
      email,
      matKhau,
      calender,
      Number(salary),
      chucVu,
      time
    );
    dsnv.themNV(nv);
    setLocalStorage();
    getLocalStorage();
  }
}

getLocalStorage();

document.getElementById("btnThemNV").onclick = thongTinNhanVien;

function hienThiTable() {
  var content = "";
  console.log(dsnv.mangNV);
  dsnv.mangNV.map(function (nv, index) {
    console.log(nv);

    nv.tongLuong = function () {
      switch (nv.chucVu) {
        case "Sếp":
          nv.luong = nv.salary * 3;
          break;
        case "Trưởng phòng":
          nv.luong = nv.salary * 2;
          break;
        case "Nhân viên":
          nv.luong = nv.salary * 1;
          break;
        default:
          nv.luong = "Chọn sai chức vụ";
          break;
      }
    };
    nv.xepLoai = function () {
      if (nv.time >= 192) {
        return "Xuất sắc";
      } else if (nv.time >= 176 && nv.time < 192) {
        return "Giỏi";
      } else if (nv.time >= 160 && nv.time < 176) {
        return "Khá";
      } else {
        return "Trung Bình";
      }
    };
    nv.tongLuong();
    var trELE = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.ten}</td>
        <td>${nv.email}</td>
        <td>${nv.calender}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.luong}</td>
        <td>${nv.xepLoai()}</td>
        <td><button class= "btn btn-danger" onclick= "xoaNV('${
          nv.taiKhoan
        }')">Xoá</button>
        <button class= "btn btn-primary" onclick= "hienThiChiTiet('${
          nv.taiKhoan
        }')" data-toggle="modal" data-target="#myModal" >Xem</button></td>
        </tr>`;
    content += trELE;
  });
  document.getElementById("tableDanhSach").innerHTML = content;
}
// hienThiTable();

function xoaNV(id) {
  dsnv.xoaNhanVien(id);
  setLocalStorage();
  getLocalStorage();
}

function hienThiChiTiet(id) {
  var viTri = dsnv.timViTri(id);

  if (viTri > -1) {
    document.getElementById("tknv").value = dsnv.mangNV[viTri].taiKhoan;
    document.getElementById("tknv").disabled = true;
    document.getElementById("name").value = dsnv.mangNV[viTri].ten;
    document.getElementById("email").value = dsnv.mangNV[viTri].email;
    document.getElementById("password").value = dsnv.mangNV[viTri].matKhau;
    document.getElementById("datepicker").value = dsnv.mangNV[viTri].calender;
    document.getElementById("luongCB").value = dsnv.mangNV[viTri].salary;
    document.getElementById("chucvu").value = dsnv.mangNV[viTri].chucVu;
    document.getElementById("gioLam").value = dsnv.mangNV[viTri].time;
  }
}

function capNhatNhanVien() {
  var taiKhoan = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var calender = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var chucVu = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value;

  var nv = new NhanVien(
    taiKhoan,
    ten,
    email,
    matKhau,
    calender,
    Number(salary),
    chucVu,
    time
  );
  nv.xepLoai();
  nv.tongLuong();
  dsnv.capNhat(nv);
  setLocalStorage();
  getLocalStorage();
}
// function display() {
//   document.getElementById("tknv").disabled = false;
//   document.getElementById("tknv").value = '';
//   document.getElementById("name").value = '';
//   document.getElementById("email").value = '';
//   document.getElementById("password").value = '';
//   document.getElementById("luongCB").value = '';
//   document.getElementById("gioLam").value = '';
// }
// document.getElementById("btnThem").onclick = display;
