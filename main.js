function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5jLEeGKWh/model.json',modelReady);
    console.log
}
function modelReady() {
    console.log("blablabla model is loaded as you probably know");
    classifier.classify(gotResult);
    
}
function gotResult(error,results) {
    if (error) {
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("SoundSpan").innerHTML=results[0].label;
        document.getElementById("AcuSpan").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }
    gifVar=document.getElementById("Gif");
    if (results[0].label=="Background Noise") {
        gifVar.src='BgNoise.gif';
        console.log("BgNoise")
    }
    else if (results[0].label=="Barking") {
        gifVar.src='Bark.gif';
        console.log("")
    }
    else if (results[0].label=="Growling") {
        gifVar.src='Growl.gif';
        console.log("")
    }
    else if (results[0].label=="Meowing") {
        gifVar.src='Meow.gif';
        console.log("")
    }
    else if (results[0].label=="Mooing") {
        gifVar.src='Moo.gif';
        console.log("")
    }
    else if (results[0].label=="Roaring") {
        gifVar.src='Roar.gif';
        console.log("")
    }
}