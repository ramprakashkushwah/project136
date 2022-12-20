function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
  
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log('poseNet is Initialized!');
}

function draw(){
  background('#969A97');
  document.getElementById("font-size").innerHTML - "font size of text will Be -"+difference +"px";
  fill('#F90093');
  textSize(difference);
  stroke('#F90093');
  text('deepak',50,400);
}

left_wrist_x =0;
right_wrist_x =0;
difference = 0;
function gotPoses(results,error){
  if(error){
    console.error(error);
  }
  if(results.length >0){
    console.log(results);

    right_wrist_x = results[0].pose.rightWrist.x;
    left_wrist_x = results[0].pose.leftWrist.x;

    difference = floor(left_wrist_x - right_wrist_x);

    console.log("rightwrist_x ="+results[0].pose.rightWrist.x+"rightwrist_y ="+results[0].pose.rightWrist.y);
    console.log("leftwrist_x ="+results[0].pose.leftWrist.x+"leftwrist_y ="+results[0].pose.leftWrist.y);
  }
}
