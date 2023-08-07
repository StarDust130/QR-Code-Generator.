let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");



const generateQR = ()=>{
    if(qrText.value.length > 0){
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img")
    }else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
        
    
}
// Change Background Color

const changeColor = ()=>{
    let clr = document.getElementsByTagName("body")[0]
    clr.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

}
