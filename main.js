Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:500
    });
    camera=document.getElementById("camera");
    Webcam.attach(camera);
    function takesnapshot(){
    Webcam.snap(
        function(data_uri){ 
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">'});}
        console.log("ml5version",ml5.version);
        classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-3ZDtLBER/model.json',modelLoaded);
        function modelLoaded(){
        console.log("modelLoaded");
        }