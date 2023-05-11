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
      <p style="color:brown;text-align:center;margin:'10px';border-style:solid;  border-color: orange; border-radius:30px;  border-width: medium;
">
<a style="color:orange;" href="${preview_a}">Preview pdf</a>
</p>
</div>
      `;
      //insert anchor below pdf file
      element.parentElement.insertAdjacentHTML("beforeend", newElement);
    }
  }
};
