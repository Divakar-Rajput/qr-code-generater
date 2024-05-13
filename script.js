let wrapper = document.querySelector(".wrapper"),
    userinput = document.getElementById("userInput");
    btn = document.getElementById("button"),
    genrateimg = document.getElementById("image"),
    erroemsg = document.getElementById("error"),
    btn.addEventListener("click", () => {
      let qrvalue = userinput.value;
      if(qrvalue == 0){
      erroemsg.innerText = "No URL & Text to Generate QR Code";
      wrapper.style.height = "300px";
      erroemsg.style.marginTop = "20px"
      }
      else{
        erroemsg.style.display = "none"
        btn.value = "Generating QR Code..."
        genrateimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
  
        genrateimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        btn.value = "QR Code Generated";
        });
        userinput.addEventListener("keyup", () => {
            if(userinput.value != qrvalue){
              wrapper.classList.remove("active");
              btn.value = "Genenrate QR Code";
            }
        });
      }
 });
