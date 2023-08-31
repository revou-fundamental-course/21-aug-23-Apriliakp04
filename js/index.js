let nameInput= document.getElementById('name-input')
document.getElementById('submit').addEventListener("click", function() {
    const nama = nameInput.value;
    document.getElementById('name').innerHTML = nama;})
    

    function submitdata(){

        var nameInput =document.getElementById("name-input").value;
        var  lahir =document.getElementById("lahir").value;
        var gender =document.getElementById("gender").value;
        var pesan1 =document.getElementById("pesan1").value;

    alert (" Nama : " + nameInput + "\n Tanggal Lahir :"+  lahir + 
    "\n Jenis Kelamin : "+  gender +"\n Pesan : " + pesan1);
        
    }