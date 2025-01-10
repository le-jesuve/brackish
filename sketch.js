function updateLinksPosition() {
  const linksDiv = document.getElementById("links");
  // const vidleft = document.getElementById("vidleft");
  // const vidright = document.getElementById("vidright");
  const video = document.getElementById("video");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const photos = document.getElementById("photos");
  const video1 = document.getElementById("video-container");
  const video1T = document.getElementById("video1");
  const video2T = document.getElementById("video2");
  const video3T = document.getElementById("video3");
  const topPosition = (window.innerHeight / 3) * 2 + window.innerHeight / 30; // One-third of the window height
  const videoPosition = window.innerWidth / 5 + window.innerWidth / 20; // One-third of the window height
  const aboutPosition = (window.innerWidth / 5) * 1.5 + window.innerWidth / 10; // One-third of the window height
  const contactPosition =
    (window.innerWidth / 5) * 2.3 + window.innerWidth / 15; // One-third of the window height
  const photosPosition = (window.innerWidth / 5) * 3 + window.innerWidth / 12; // One-third of the window height
  if (w > h) {
    const video1PositionL = (window.innerWidth / 30) * 10 + 5;
    const video1PositionT = (window.innerHeight / 30) * 9 + 10;
    const video1PositionB = (window.innerHeight / 30) * 18 + 10;
    const video1PositionW = (window.innerWidth / 30) * 10; // - ((window.innerWidth / 30)) ;
    // const leftButtonPositionL = (window.innerWidth /30) * 9;
    // const leftButtonPositionT = window.innerHeight / 3;
    // vidleft.style.left = `${leftButtonPositionL}px`;
    // vidleft.style.top = `${leftButtonPositionT}px`;
    video1.style.left = `${video1PositionL}px`;
    video1.style.top = `${video1PositionT}px`;
    video1.style.bottom = `${video1PositionB}px`;
    video1T.style.width = `${video1PositionW}px`;
    video2T.style.width = `${video1PositionW}px`;
    video3T.style.width = `${video1PositionW}px`;
  }
  if (window.innerHeight > window.innerWidth) {
    const video1PositionL = (window.innerWidth / 30) * 10 + 5;
    const video1PositionT = (window.innerHeight / 30) * 15 + 10;
    const video1PositionW = (window.innerWidth / 30) * 10; // - ((window.innerWidth / 30)) ;
     // const leftButtonPositionL = (window.innerWidth /30) * 9;
    // const leftButtonPositionT = (window.innerHeight / 30) * 25 ;
    // vidleft.style.left = `${leftButtonPositionL}px`;
    // vidleft.style.top = `${leftButtonPositionT}px`;

    video1.style.left = `${video1PositionL}px`;
    video1.style.top = `${video1PositionT}px`;
  video2T.style.width = `${video1PositionW}px`;
    video3T.style.width = `${video1PositionW}px`;
   video1T.style.width = `${video1PositionW}px`;
  }
  linksDiv.style.top = `${topPosition}px`;
  video.style.left = `${videoPosition}px`;
  about.style.left = `${aboutPosition}px`;
  contact.style.left = `${contactPosition}px`;
  photos.style.left = `${photosPosition}px`;
}



// Update the position on load and resize
window.addEventListener("load", setup);
window.addEventListener("load", updateLinksPosition);
// window.addEventListener("resize", updateLinksPosition);

function mediaBox([]) {
  if (w > h) {
    // walls.push(
    //   new Boundary((w / 30) * 10, (h / 30) * 18, (w / 30) * 10, (h / 30) * 9),
    // ); //left
    // walls.push(
    //   new Boundary((w / 30) * 20, (h / 30) * 18, (w / 30) * 20, (h / 30) * 9),
    // ); //right
    // walls.push(
    //   new Boundary((w / 30) * 20, (h / 30) * 18, (w / 30) * 10, (h / 30) * 18),
    // ); //bottom
    walls.push(
      new Boundary(
        (w / 30) * 20 -5,
        (h / 30) * 9 + 5,
        (w / 30) * 10,
        (h / 30) * 9 + 5,
      ),
    ); //top
  } else if (h > w) {
    // walls.push(
    //   new Boundary(
    //     (w / 30) * 10,
    //     (h / 30) * 19.5,
    //     (w / 30) * 10,
    //     (h / 30) * 15,
    //   ),
    // ); //left
    // walls.push(
    //   new Boundary(
    //     (w / 30) * 20,
    //     (h / 30) * 19.5,
    //     (w / 30) * 20,
    //     (h / 30) * 15,
    //   ),
    // ); //right
    // walls.push(
    //   new Boundary(
    //     (w / 30) * 20,
    //     (h / 30) * 19.5,
    //     (w / 30) * 10,
    //     (h / 30) * 19.5,
    //   ),
    // ); //bottom
    walls.push(
      new Boundary(
        (w / 30) * 20 - 5,
        (h / 30) * 15 + 5,
        (w / 30) * 10,
        (h / 30) * 15 + 5,
      ),
    ); //top
  }
}

document.getElementById("video").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    console.log("Link clicked:", event.target.href);
    box = true;
    about = false;
    contact = false;
  }
});
document.getElementById("photos").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    console.log("Link clicked:", event.target.href);
    box = true;
    about = false;
    contact = false;
  }
});
document.getElementById("about").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    console.log("Link clicked:", event.target.href);
    box = false;
    about = true;
    contact = false;
  }
});
document.getElementById("contact").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    console.log("Link clicked:", event.target.href);
    box = false;
    about = false;
    contact = true;
  }
});

let box = false;
let uIn = "";
let input;
let contact = false;
let about = false;
let wallsRf = [];
let contactBorder = [];
let c = [];
let walls = [];
let ray;
let particle;
let xoff = -10;
let yoff = 10000;
let w = window.innerWidth;
let h = window.innerHeight;

function setup() {
  createCanvas(w, h);
  for (let i = 0; i < 1; i++) {
    let x1 = w / 5;
    let y1 = (h / 3) * 2;
    let x2 = (w / 5) * 4;
    let y2 = (h / 3) * 2;

    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  particle = new Particle();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }

  if (box === true) {
    if (input) {
      uIn = input.value();
      input.remove();
      input = null;
    }
    stroke(0);
    mediaBox(walls);
    stroke(255);
    particle.update();
    particle.show();
    particle.look(walls);
  } else if (box === false) {
    for (let i = 0; i < 1; i++) {
      let x1 = w / 5;
      let y1 = (h / 3) * 2;
      let x2 = (w / 5) * 4;
      let y2 = (h / 3) * 2;

      wallsRf[i] = new Boundary(x1, y1, x2, y2);
      background(0);
    }
    for (let wall of wallsRf) {
      wall.show();
      particle.update();
      particle.show();
      particle.look(wallsRf);
    }
    if (video1 === true || photos === true) {
      if (input) {
        uIn = input.value();
        input.remove();
        input = null;
      }
    }
    if (about === true) {
      stroke(0);
      textSize(h / 50);
      // textStyle(BOLD);
      textAlign(CENTER, CENTER);
      textFont("Fira Code");
if (uIn != "") {
        text("(you)\n" + uIn, (w / 10) * 5, (h / 6) * 2.5);
      } else {
        text(
          "\n(brackish)\nseduction\nis at the\nboundary\nof horror",
          (w / 10) * 5,
          (h / 6) * 2.5,
        );
      }
    }
    if (contact === true) {
      if (!input) {
        input = createElement("textarea");
        input.position((w / 10) * 4, (h / 6) * 3);
        input.size((w / 10) * 2, (h / 48) * 4);
        input.style("font-size", "15px");
        input.style("text-align", "top-left");
        input.style("background-color", "black");
        input.style("color", "white");
        input.style("resize", "none"); // Disable resizing of the textarea
        input.style("font-family", "Fira Code");
        input.style("font-family", "Console");

        // input.style('border', '1px solid white');
        input.style("caret-color", "crimson");
      }

      // let userInput = input.value();
      textFont("mono");
      textSize(24);
      stroke(255);
      // text(+userInput, (w / 10) * 4, (h / 6) * 3);
      //stroke(0);

      for (let i = 0; i < 1; i++) {
        contactBorder[i] = new Boundary(
          (w / 10) * 4,
          (h / 6) * 3,
          (w / 10) * 6,
          (h / 6) * 3,
        );
      }
      // background(0);
      for (let wall of contactBorder) {
        wall.show();
        particle.update();
        particle.show();
        particle.look(contactBorder);
        stroke(255);
        textSize(h / 80);
        textAlign(CENTER, CENTER);
        fill(255);
        textFont("Fira Code");
        text("vent your spleen", (w / 10) * 5, (h / 6) * 5);
      }
    } else if (contact === false && input) {
      uIn = input.value();
      input.remove();
      input = null;
    }
    // ellipse(mouseX, mouseY, 30, 50);
    // ellipse(mouseX + 5, mouseY + 5, 30, 50);
  }
}
