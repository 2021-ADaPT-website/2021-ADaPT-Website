

function createItem(name, imageSource, description, pageLink) {
  var div = document.createElement('div');  //creating element
div.textContent = "Hello, World";         //adding text on the element
document.body.appendChild(div);           //appending the element
}

function createItem2(name, imageSource, description, pageLink) {
  return ['<button onclick="myFunction(101)" class="projectCard">',
                  '<p class="timeText">',name,'</p>',
                  '<div id="myDIV101" style="display: none;">',
                  '<img class="projectImg" src="',imageSource,'">',
                  '<p class="projectDesc">',description,'</p>',
                  '<br><br>',
                  '<a href="',pageLink,'" class="viewbutton">View page</a>',
                  '<br><br><br>',
              '</div>',
              '</button>',
              '<br>',
              '<br>'].join('\n');
}

function myFunction(targetDiv) {
  var x = document.getElementById(("myDiv" + targetDiv).trim());
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function createItem3(name, imageSource, description, pageLink, targetDiv, parentID, hostID){
  var myobj = document.getElementById(hostID);
  myobj.remove();

  var divName = ("myDiv" + targetDiv).trim();

  var btn = document.createElement('button'); // button element
    btn.className="projectCard";
    btn.id="buttonHead";
    btn.onclick = myFunction;
    btn.value = 1;
    document.getElementById(parentID).appendChild(btn);

    var projectTitle = document.createElement('p');
    projectTitle.className = "timeText";
    projectTitle.textContent = name;
    document.getElementById("buttonHead").appendChild(projectTitle);
    
    var div = document.createElement('button');
    div.id = divName;
    div.className="projectCardDivBG";
    document.getElementById("buttonHead").appendChild(div);
    
    var image = document.createElement('img');
    image.className = "projectImg";
    image.src = imageSource;
    document.getElementById(divName).appendChild(image);

    var projectDesc = document.createElement('p');
    projectDesc.className = "projectDesc";
    projectDesc.textContent = description;
    document.getElementById(divName).appendChild(projectDesc);

    var nextLine = document.createElement('br');
    document.getElementById(divName).appendChild(nextLine);

    var link = document.createElement('a');
    link.href = pageLink;
    link.textContent = "View Page";
    link.className = "viewButton";
    document.getElementById(divName).appendChild(link);

    var nextLine2 = document.createElement('p');
    document.getElementById(divName).appendChild(nextLine2);

    btn.id="";
}

function sf(){window.alert("You finished the game!")};