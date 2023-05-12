// Get the social sharing icons
const facebookIcon = document.getElementById("facebook-icon");
const twitterIcon = document.getElementById("twitter-icon");
const copyIcon = document.getElementById("copy-icon");
const tooltip = new bootstrap.Tooltip(copyIcon);
// Add event listeners for social sharing
facebookIcon.addEventListener("click", shareOnFacebook);
twitterIcon.addEventListener("click", shareOnTwitter);
copyIcon.addEventListener("click", copyLink);

// Sharing functions
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareUrl, "_blank");
}

function shareOnTwitter() {
  const text = encodeURIComponent("Check out this awesome product!");
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(shareUrl, "_blank");
}

function copyLink() {
  const url = window.location.href;
  console.log(url);
  navigator.clipboard.writeText(url);
  // alert("Link copied");
  console.log(tooltip);
  tooltip.show();
}
