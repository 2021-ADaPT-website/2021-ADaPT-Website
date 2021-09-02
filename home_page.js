function toggleElement(targetDiv) {
    var x = document.getElementById("myDIV" + targetDiv);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }