noseY = 0;
noseX = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/VsGzDcN3/clownnose.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-22;
        noseY = results[0].pose.nose.y-22;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("yose x = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
/* fill(255,0,0)
    stroke(255,0,0);
    circle(noseX, noseY, 20);*/
    image(clown_nose,NoseX,NoseY, 45, 45)
}

function take_snapshot() {
    save('hehehmyIMGGMUAHAH.png')
}