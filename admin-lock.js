
document.addEventListener('DOMContentLoaded', () => {
  fetch('site-data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('companyName').textContent = data.companyName;
      document.getElementById('emailID').textContent = data.emailID;
      document.getElementById('phoneNumber').textContent = data.phoneNumber;
    });

  document.getElementById('editRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const field = formData.get('field');
    const newValue = formData.get('newValue');
    const password = formData.get('adminPass');

    // Default password, to be changed later
    const adminPassword = "mjceo123";

    if (password === adminPassword) {
      fetch('site-data.json')
        .then(response => response.json())
        .then(data => {
          data[field] = newValue;

          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'site-data.json';
          a.click();
          document.getElementById('editStatus').textContent = "Updated. Please replace 'site-data.json' in your repo.";
        });
    } else {
      document.getElementById('editStatus').textContent = "Incorrect admin password!";
    }
  });
});
