const wrapper = document.querySelector(".wrapper");
const herdBatchInput = wrapper.querySelector(".herd-batch-input");
const generateBtn = wrapper.querySelector("button");
const qrcodeDiv = document.querySelector(".qr-code");

generateBtn.addEventListener("click", () => {
  let herdBatch = herdBatchInput.value;
  
  if (!herdBatch) return;
  
  // Generate the QR code using the API
  generateQRCode(herdBatch);
});

herdBatchInput.addEventListener("input", () => {
  qrcodeDiv.innerHTML = "";
});

function generateQRCode(herdBatch) {
  // Clear the existing QR code, if any
  qrcodeDiv.innerHTML = "";
  
  // Create the API URL with the data parameter
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(herdBatch)}`;
  
  // Create the image element
  const qrCodeImg = document.createElement("img");
  qrCodeImg.src = apiUrl;
  qrCodeImg.alt = "QR code";
  
  // Append the image to the QR code div
  qrcodeDiv.appendChild(qrCodeImg);
  
  wrapper.classList.add("active");
}

