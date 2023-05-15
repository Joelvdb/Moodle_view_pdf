// onload window run function
window.onload = function () {
  //get all anchors
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
    //if pdf?forcedownload=1 in link
    if (anchors[i].href.indexOf("pdf?forcedownload=1") >= 0) {
      var element = anchors[i];
      //replace force download
      preview_a = anchors[i].href.replace("forcedownload=1", "forcedownload=0");
      var newElement = `
      <div>
      <p style="color:brown;text-align:left;margin:'10px';border-style:none;  border-color: orange; border-radius:30px;  border-width: medium;
">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
<a style="color:orange;" href="${preview_a}">View pdf</a>
</p>
</div>
      `;
      //insert anchor below pdf file
      element.parentElement.parentElement.insertAdjacentHTML(
        "beforeend",
        newElement
      );
    }
  }
};
