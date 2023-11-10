let imagesObjs = [{ id: 1, img: "images/1.png" },
    { id: 2, img: "images/6.png" },
    { id: 3, img: "images/3.png" },
    { id: 4, img: "images/2.png" },
    { id: 5, img: "images/4.png" },
    { id: 6, img: "images/5.png" },
    { id: 7, img: "images/8.png" },
    { id: 8, img: "images/1.png" },
    { id: 9, img: "images/5.png" },
    { id: 10, img: "images/3.png" },
    { id: 11, img: "images/6.png" },
    { id: 12, img: "images/4.png" },
    { id: 13, img: "images/7.png" },
    { id: 14, img: "images/2.png" },
    { id: 15, img: "images/8.png" },
    { id: 16, img: "images/7.png" }];

let dotsArray = [{id:"svg1", color:'red'},
    {id:"svg2", color:'blue'},
    {id:"svg3", color:'yellow'},
    {id:"svg4", color:'orange'},
    {id:"svg5", color:'green'},
    {id:"svg6", color:'darkgreen'},
    {id:"svg7", color:'grey'},
    {id:"svg8", color:'white'},
    {id:"svg9", color:'black'},
    {id:"svg10", color:'pink'},
    {id:"svg11", color:'red'},
    {id:"svg12", color:'yellow'},
    {id:"svg13", color:'orange'},
    {id:"svg14", color:'green'},
    {id:"svg15", color:'blue'},
    {id:"svg16", color:'red'},
    {id:"svg17", color:'blue'},
    {id:"svg18", color:'yellow'},
    {id:"svg19", color:'orange'},
    {id:"svg20", color:'green'},
    {id:"svg21", color:'darkgreen'},
    {id:"svg22", color:'grey'},
    {id:"svg23", color:'white'},
    {id:"svg24", color:'black'},
    {id:"svg25", color:'pink'},
    {id:"svg26", color:'red'},
    {id:"svg27", color:'yellow'},
    {id:"svg28", color:'orange'},
    {id:"svg29", color:'green'},
    {id:"svg30", color:'blue'},
    {id:"svg31", color:'darkpink'},
    {id:"svg32", color:'darkpink'},
    {id:"svg33", color:'aquamarine'},
    {id:"svg34", color:'violet'},
    {id:"svg35", color:'brown'},
    {id:"svg36", color:'aquamarine'},
    {id:"svg37", color:'violet'},
    {id:"svg38", color:'brown'}];

let count = 0;
let clickedImagesArray = [];
let questionMarkImage = "images/temp.png";

let total = 1;
let minute = 0;
let seconds = 59;

let intId = '';

$(function () {
    setup();
});

function setup() {
    let minuteDiv = $('#myMin');
    let secondsDiv = $('#mySec');
    let totalImg = $('#total');
    let html = '';
    if (total < 10) {
        html = '<label>0' + total + '</label>';
    } else {
        html = '<label>' + total + '</label>';
    }
    minuteDiv.empty();
    secondsDiv.empty();
    minuteDiv.append(html);
    html = '<label>00</label>';
    secondsDiv.append(html);
    minute = total - 1;
    seconds = 59;
    totalImg.empty();
    totalImg.append(imagesObjs.length / 2);
}

function timer() {
    let minuteDiv = $('#myMin');
    let secondsDiv = $('#mySec');
    let result = $('#result');
    let html = '';
    if (count == (imagesObjs.length / 2)) {
        clearInterval(intId);
    }
    if (seconds >= 0) {
        minuteDiv.empty();
        secondsDiv.empty();
        if (minute < 10) {
            html = '<label>0' + minute + '</label>';
        } else {
            html = '<label>' + minute + '</label>';
        }
        minuteDiv.append(html);
        if (seconds < 10) {
            html = '<label>0' + seconds + '</label>';
        } else {
            html = '<label>' + seconds + '</label>';
        }
        secondsDiv.append(html);
        seconds--;

    } else {
        if (minute > 0) {
            minute--;
            if (minute < 10) {
                html = '<label>0' + minute + '</label>';
            } else {
                html = '<label>' + minute + '</label>';
            }
            minuteDiv.append(html);
            minuteDiv.html(html);
            seconds = 59;
            html = '<label>' + seconds + '</label>';
            secondsDiv.html(html);
        } else {
            if (count < (imagesObjs.length / 2)) {
                result.append('<label>Finished!</label>');
            } else {
                result.append('<label>You won!</label>');
            }
            clearInterval(intId);
        }

    }
}
function pause() {
    let resume = $('#resume');
    let pause = $('#pause');
    clearInterval(intId);
    resume.addClass('show');
    resume.removeClass('hide');
    pause.addClass('hide');
}
function resume() {
    let resume = $('#resume');
    let pause = $('#pause');
    intId = setInterval(timer, 1000);
    pause.addClass('show');
    pause.removeClass('hide');
    resume.addClass('hide');
}
function restart() {
    let restart = $('#restart');
    let start = $('#start');
    let resume = $('#resume');
    let pause = $('#pause');
    setup();
    clearInterval(intId);
    start.addClass('show');
    start.removeClass('hide');
    restart.addClass('hide');
    pause.addClass('show');
    pause.removeClass('hide');
    resume.addClass('hide');
}
function start() {
    let restart = $('#restart');
    let start = $('#start');
    intId = setInterval(timer, 1000);
    restart.addClass('show');
    restart.removeClass('hide');
    start.addClass('hide');
}
function stop() {
    clearInterval(intId);
}
function add() {
    let score = $('#cnt');
    let totalImg = $('#total');
    if (count < (imagesObjs.length / 2)) {
        count++;
        score.empty();
        score.append(count);
    } else {
        stop()
    }

}

function replaceImages() {
    for (let obj of clickedImagesArray) {
        setTimeout(() => {
            let htmlId = "#" + obj.id;
            let qImage = $('<img src="' + questionMarkImage + '" onclick="showImage(this, ' + obj.id + ')" />');
            $(htmlId).replaceWith(qImage);

        }, 1000);
    }
}

function showImage(self, id) {
    if (clickedImagesArray.length == 2) {
        // do nothing
    }
    else {
        let clickedImage = imagesObjs.filter((v, i, array) => v.id == id)[0];
        let html = '<img id="' + id + '" src="' + clickedImage.img + '" />';
        let imageHtml = $(html);
        $(self).replaceWith(imageHtml);

        clickedImagesArray.push(clickedImage);

        if (clickedImagesArray.length == 2) {
            if (!(clickedImagesArray[0].img == clickedImagesArray[1].img)) {
                replaceImages();
            }
            else {
                add();
                if (count == imagesObjs.length/2) {
                    onWin();
                }
            }

            clickedImagesArray = [];
        }
    }
}

function onWin() {
    for (let dot of dotsArray) {
        let html = '<svg id="' + dot.id + '" style="width:300; height:300; position:absolute; ' +
        'top:50px; left:50px"><circle style="cx:50; cy:50; r:10; fill:' + dot.color + '" /></svg>';

        let newSVG = $(html);

        $("body").append(newSVG);
    }

    for (let dot of dotsArray) {
        setInterval(function() {
            changePosition(dot.id, dot.color);
        }, 250);
    }
}

function changePosition(id, color) {
    let mysvg = $("#" + id);
    //random numbers
    random = {
        a: Math.floor(Math.random()*530),
        b: Math.floor(Math.random()*1300)
    };

    let html = '<svg id="' + id + '" style="width:300; height:300; position:absolute; top:' + random.a +
    'px; left:' + random.b + 'px"><circle style="cx:50; cy:50; r:10; fill:' + color + '" /></svg>';
    let newSvg = $(html);

    mysvg.replaceWith(newSvg);
}

$('document').ready(function () {
    setup();

    $("#imagesDiv").html('');

    // for (let i=0; i<imagesObjs.length; i++) {
    //     let newObj = $('<img src="' + imagesObjs[i].img + '" onclick="showImage(this, ' + (i+1) + ')" />');
    //     $("#imagesDiv").append(newObj);
    // }

    for (let i = 0; i < imagesObjs.length; i++) {
        let newObj = $('<img src="' + questionMarkImage + '" onclick="showImage(this, ' + (i + 1) + ')" />');
        $("#imagesDiv").append(newObj);
    }
})