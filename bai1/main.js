function chuyendoi() {
    
    var celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        
        document.getElementById("fahrenheit").textContent = "Nhập số hợp lệ.";
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("fahrenheit").textContent = celsius + " độ C = " + fahrenheit + " độ F";
}