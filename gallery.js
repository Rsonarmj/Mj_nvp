
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('uploadForm');
  const mediaUpload = document.getElementById('mediaUpload');
  const gallery = document.getElementById('gallery');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let file of mediaUpload.files) {
      const type = file.type.startsWith('image') ? 'image' : 'video';
      const reader = new FileReader();
      reader.onload = function (event) {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media-item');
        if (type === 'image') {
          mediaDiv.innerHTML = `<img src="\${event.target.result}" alt="Image">`;
        } else {
          mediaDiv.innerHTML = \`
            <video controls>
              <source src="\${event.target.result}" type="\${file.type}">
              Your browser does not support the video tag.
            </video>\`;
        }
        gallery.appendChild(mediaDiv);
      };
      reader.readAsDataURL(file);
    }
  });
});
