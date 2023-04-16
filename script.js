function resizeImage() {
  const inputImage = document.getElementById('inputImage');
  const outputImages = document.getElementById('outputImages');
  outputImages.innerHTML = '';

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

          const link = document.createElement('a');
          link.download = `image_${size}x${size}.${getFileExtension(
            inputImage.files[0].type
          )}`;
          link.href = resizedImage.toDataURL(inputImage.files[0].type);
          link.innerHTML = `Download ${size}x${size}`;
          outputImages.appendChild(link);
          outputImages.appendChild(document.createElement('br'));
        });
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
      return 'unknown';
  }
}
