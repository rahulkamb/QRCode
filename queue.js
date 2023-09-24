let imgdiv = document.querySelector(".img-div");
let input_text = document.querySelector(".input-text");
let qrimage = document.querySelector(".qrimage");
let btngenerate = document.querySelector(".generate-button");

function generateQRCode(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input_text.value;
    
}

btngenerate.addEventListener("click", () => {
    console.log(input_text.value);
    setTimeout(() => {
        //generateQRCode();
    }, 3000);
    console.log("End");
    generateQRCode();

    // const load = document.querySelector(".loader");
    // load.classList.add("loader-hidden");

    // load.addEventListener("transitionend", () => {
    //     document.body.removeChild("loader");
    // })
    
});
