// Get the social sharing icons
const facebookIcon = document.getElementById("facebook-icon");
const twitterIcon = document.getElementById("twitter-icon");
const copyIcon = document.getElementById("copy-icon");

// Add event listeners for social sharing
facebookIcon.addEventListener("click", shareOnFacebook);
twitterIcon.addEventListener("click", shareOnTwitter);
copyIcon.addEventListener("click", copyLink);
copyIcon.addEventListener("mouseout", hideTooltip);

// create tooltip instance
const tooltip = new bootstrap.Tooltip(copyIcon);
tooltip.hide();

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

async function copyLink() {
  const url = window.location.href;
  tooltip.update();
  tooltip._config.title = "Copied";
  const shortURL = await urlshortener(url);
  navigator.clipboard.writeText(shortURL);
  tooltip.update();
  tooltip.show();
  tooltip._config.title = "Copy Link";
}

function hideTooltip(params) {
  tooltip.hide();
}

document.addEventListener("visibilitychange", function () {
  tooltip.hide();
});

// function to shorten URL
async function urlshortener(url) {
  try {
    let request = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`
    );
    let response = await request.json();
    return response.result.full_short_link;
  } catch (error) {
    return "";
  }
}
