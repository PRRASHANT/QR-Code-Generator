let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function GenrateQR() {
    const text = qrText.value.trim();

    if (text.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
        imgBox.classList.add('show-img');
        qrText.classList.remove('error');
    } else {
        imgBox.classList.remove('show-img');
        qrImage.removeAttribute('src');
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
