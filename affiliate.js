
document.addEventListener('DOMContentLoaded', function () {
  const affiliateLinks = [
    { name: "Jewellery Tools Store", url: "https://example.com/affiliate1" },
    { name: "Gold Export Hub", url: "https://example.com/affiliate2" },
    { name: "Jewellers Marketplace", url: "https://example.com/affiliate3" }
  ];
  const container = document.getElementById('affiliateLinks');
  affiliateLinks.forEach(link => {
    const btn = document.createElement('a');
    btn.href = link.url;
    btn.target = "_blank";
    btn.textContent = "Visit " + link.name;
    btn.style.display = 'block';
    btn.style.margin = '10px';
    container.appendChild(btn);
  });
});
