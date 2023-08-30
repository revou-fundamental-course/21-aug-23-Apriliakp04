let nameInput= document.getElementById('name-input')
document.getElementById('submit').addEventListener("click", function() {
    const nama = nameInput.value;
    document.getElementById('name').innerHTML = nama;})

    function hasil(){

        var nama = document.getElementById("name-input").value;
        var born= document.getElementById("lahir").value;
        var kelamin = document.getElementById("pria/wanita").value;
        var message= document.getElementById("pesan1").value;

        alert("Nama :"+ nama , "Tanggal Lahir:" + born, "Jenis Kelamin:" + kelamin, "Pesan :"+ message);
    }
    