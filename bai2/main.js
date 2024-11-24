function calculateRectangleArea(){
    let chiều_dài = document.getElementById("chiều_dài").value;
    let chiều_rộng = document.getElementById("chiều_rộng").value;

    if (chiều_dài && chiều_rộng){
        let diện_tích = chiều_dài * chiều_rộng;
        document.getElementById("diện_tích_hcn").innerHTML = "Diện tích hình chữ nhật:" + diện_tích + "m^2";
    }else {
        document.getElementById("diện_tích_hcn").innerHTML = "Bạn cần nhập đủ thông tin.";
    }
}

function calculateTriangleArea(){
    let cơ_sở = document.getElementById("cơ_sở").value;
    let chiều_cao = document.getElementById("chiều_cao").value;

    if (cơ_sở && chiều_cao){
        let diện_tích = (cơ_sở * chiều_cao)/2;
        document.getElementById("diện_tích_tam_giác").innerHTML = "Diện tích hình tam giác:" + diện_tích + "m^2";
    }else {
        document.getElementById("diện_tích_tam_giác").innerHTML = "Bạn cần nhập đủ thông tin.";
    }
}

function calculateSquareArea(){
    let canh = document.getElementById("canh").value;

    if (canh){
        let diện_tích = canh * canh;
        document.getElementById("diện_tích_hv").innerHTML = "Diện tích hình vuông:" + diện_tích + "m^2";
    }else {
        document.getElementById("diện_tích_hv").innerHTML = "Bạn cần nhập đủ thông tin";
    }
}