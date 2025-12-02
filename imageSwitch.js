//list of images of samus for bio page

function changeImage(version, game){
    var id = ""
    if(game == "M1"){
        id = "metroid1Img"
    }
    else if (game == "M2"){
        id = "metroid2Img"
    }
    else{
        id = "metroidPrimeImg"
    }
    var getImg = document.getElementById(id)
    if(version == "original"){
        if(game == 'M1'){
            getImg.src = "images/metroid_cover.jpg"
        }
        else if(game == 'M2'){
            getImg.src = "images/metroid2_cover.PNG"
        }
        else if(game == 'MP1'){
            getImg.src = "images/prime_cover.JPG"
        }
        else{
            console.log("Error")
        }
    }
    //version == remake
    else{
        if(game == 'M1'){
            getImg.src = "images/zeromission_cover.PNG"
        }
        else if(game == 'M2'){
            getImg.src = "images/samusreturns_cover.JPG"
        }
        else if(game == 'MP1'){
            getImg.src = "images/primeremaster_cover.PNG"
        }
        else{
            console.log("Error")
        }
    }
}

const listOfArt = ["images/power_suit.jpg", "images/varia_suit.jpg", "images/gravity_suit.jpg", "images/fusion_suit.jpg", "images/dread_suit.jpg", "images/metroid_suit.jpg", "images/phazon_suit.jpg", "images/dark_suit.jpg", "images/light_suit.jpg", "images/ped_suit.jpg", "images/beyond_suit.jpg", "images/zero_suit1.jpg", "images/zero_suit2.jpg", "images/helmetless.jpg"]
//state can only be "next" or "back"
var num = 0
localStorage.setItem("idx", num)
function changeBioImage(state){
    if(state == "next"){
        if(localStorage.getItem("idx") == 13){
            localStorage.setItem("idx", 0)
        }
        else{
            localStorage.setItem("idx", (parseInt(localStorage.getItem("idx")) + 1))
        }
        console.log(localStorage.getItem("idx"))
    }
    else{
        if(localStorage.getItem("idx") == 0){
            localStorage.setItem("idx", 13)
        }
        else{
            localStorage.setItem("idx", (parseInt(localStorage.getItem("idx")) - 1))
        }
        console.log(localStorage.getItem("idx"))
    }
    var getImg = document.getElementById("bioMultImages")
    getImg.src = listOfArt[parseInt(localStorage.getItem("idx"))]
}
