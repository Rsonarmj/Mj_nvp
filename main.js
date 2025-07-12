
document.addEventListener('DOMContentLoaded', function () {
  const userForm = document.getElementById('userForm');
  const uploadSection = document.getElementById('uploadSection');
  const uploadForm = document.getElementById('uploadForm');
  const mediaUpload = document.getElementById('mediaUpload');
  const gallery = document.getElementById('gallery');

  userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userData = {
      name: document.getElementById('userName').value,
      email: document.getElementById('userEmail').value,
      phone: document.getElementById('userPhone').value,
      type: document.getElementById('userType').value
    };
    localStorage.setItem('MJUserData', JSON.stringify(userData));
    alert('धन्यवाद, ' + userData.name + '!');
    userForm.style.display = 'none';
    uploadSection.style.display = 'block';
  });

  uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let file of mediaUpload.files) {
      const type = file.type.startsWith('image') ? 'image' : 'video';
      const reader = new FileReader();
      reader.onload = function (event) {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media-item');
        mediaDiv.innerHTML = type === 'image'
          ? `<img src="${event.target.result}" alt="image">`
          : `<video controls><source src="${event.target.result}" type="${file.type}"></video>`;
        gallery.appendChild(mediaDiv);
      };
      reader.readAsDataURL(file);
    }
  });
});
