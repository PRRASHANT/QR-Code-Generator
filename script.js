const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');
const qrForm = document.getElementById('qrForm');
const qrStatus = document.getElementById('qrStatus');

qrForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = qrText.value.trim();

    if (!text) {
        imgBox.classList.remove('show-img');
        qrImage.removeAttribute('src');
        qrText.setAttribute('aria-invalid', 'true');
        qrText.classList.add('error');
        qrStatus.textContent = 'Please enter some text or a URL.';
        setTimeout(() => qrText.classList.remove('error'), 1000);
        qrText.focus();
        return;
    }

    qrText.removeAttribute('aria-invalid');
    qrText.classList.remove('error');
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
    imgBox.classList.add('show-img');
    qrStatus.textContent = 'QR code generated.';
});
