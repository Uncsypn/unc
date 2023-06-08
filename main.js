// This script is used to dynamically load the content for each tab
document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  // Retrieve the current URL to determine the active tab
  var path = window.location.pathname;
  var page = path.split("/").pop();

  // Load the appropriate tab content based on the active tab
  if (page === 'home.html') {
    contentDiv.innerHTML = '<object type="text/html" data="home.html" />';
  } else if (page === 'download.html') {
    contentDiv.innerHTML = '<object type="text/html" data="download.html" />';
  } else {
    contentDiv.innerHTML = '<object type="text/html" data="home.html" />';
  }
});
