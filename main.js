Prediction1 = ""
Prediction2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
addcamera = document.getElementById("camera")
Webcam.attach(addcamera)

function takesnapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = "<img id='new_img' src='" + data_url + "'>";
    });
}
console.log("ml5 version", ml5.version)
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dhiYYzRJf/model.json", modelloaded)

function modelloaded() {
    console.log("modelisloaded")
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata1 = "the first prediction is" + Prediction1
    speakdata2 = "the second prediction is" + Prediction2
    var utter = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utter)
}

function identify() {
    img = document.getElementById("new_img")
    Classifier.classify(img, getResult)
}

function getResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        Prediction1 = result[0].label
        Prediction2 = result[1].label
        document.getElementById("result_1").innerHTML = Prediction1
        document.getElementById("result_2").innerHTML = Prediction2
        speak()
        if (Prediction1 == "smile") {
            document.getElementById("emoji_1").innerHTML = "&#128522;"

        } else if (Prediction1 == "angry") {
            document.getElementById("emoji_1").innerHTML = "&#128548;"

        } else if (Prediction1 == "sad") {
            document.getElementById("emoji_1").innerHTML = "&#128532;"

        } else if (Prediction1 == "excited") {
            document.getElementById("emoji_1").innerHTML = "&#128513;"

        }
        if (Prediction2 == "smile") {
            document.getElementById("emoji_2").innerHTML = "&#128522;"

        } else if (Prediction2 == "angry") {
            document.getElementById("emoji_2").innerHTML = "&#128548;"

        } else if (Prediction2 == "sad") {
            document.getElementById("emoji_2").innerHTML = "&#128532;"

        } else if (Prediction2 == "excited") {
            document.getElementById("emoji_2").innerHTML = "&#128513;"

        }

    }

}