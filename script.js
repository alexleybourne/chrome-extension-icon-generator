const zip = new JSZip();

function resizeImage() {
  const inputImage = document.getElementById('inputImage');
  const outputImages = document.getElementById('outputImages');
  outputImages.innerHTML = '';

  const downloadAllButton = document.getElementById('downloadAll');
  downloadAllButton.classList.add('hidden');

  if (inputImage.files && inputImage.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;

      img.onload = function () {
        const sizes = [128, 48, 32, 16];
        sizes.forEach((size) => {
          const resizedImage = document.createElement('canvas');
          resizedImage.width = size;
          resizedImage.height = size;

          const ctx = resizedImage.getContext('2d');
          ctx.drawImage(img, 0, 0, size, size);

          const imageDataURL = resizedImage.toDataURL(inputImage.files[0].type);

          const preview = document.createElement('img');
          preview.src = imageDataURL;
          preview.width = size;
          preview.height = size;

          const link = document.createElement('a');
          link.classList.add('blue-button');
          link.download = `icon${size}.${getFileExtension(
            inputImage.files[0].type
          )}`;
          link.href = imageDataURL;
          link.innerHTML = `Download ${size}x${size} px`;

          const div = document.createElement('div');
          div.appendChild(preview);
          div.appendChild(link);
          outputImages.appendChild(div);

          zip.file(link.download, imageDataURL.split('base64,')[1], {
            base64: true,
          });
        });

        downloadAllButton.classList.remove('hidden');
        downloadAllButton.disabled = false;
      };
    };
    reader.readAsDataURL(inputImage.files[0]);
  }
}

function getFileExtension(mimeType) {
  switch (mimeType) {
    case 'image/jpeg':
      return 'jpeg';
    case 'image/png':
      return 'png';
    default:
      return 'png'; // Defaults to png
  }
}

function downloadAll() {
  zip.generateAsync({ type: 'blob' }).then(function (content) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'icons.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
