img="";
statuss="";
objects=[];

function bck()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("text1").innerHTML = " Cocossd has detected 1 object out of three.";
}

function modelLoaded()
{
    console.log("model loaded");
    statuss = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function preload()
{
    img = loadImage('TA.jpg');
}

function draw()
{


    image(img, 0, 0, 640, 420);

    if(statuss != "")
    {
        for ( i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
        
        fill('#ff0000');
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke('#ff0000');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

    
 
}

