
const BASE_URL = window.location.protocol + '//'
    + window.location.hostname + ':'
    + window.location.port;

$(document).ready(function() {

    $('#login').on('click', function (e) {
        e.preventDefault();
       getLogin($('#user').val());
    });

    $('#goBack').on('click', function(){
        window.history.back();
    });

    $('#updateHours').on('click', function(e) {
       updateHours();
    });
});

function getLogin(user) {
    const url = BASE_URL + '/user/' + user;
    window.location = url;
}

function updateHours() {
    let math = (+$('#math').val()) + (+$('#mathTotal').html());
    let history = (+$('#history').val()) + (+$('#historyTotal').html());
    let science = (+$('#science').val()) + (+$('#scienceTotal').html());
    let language = (+$('#language').val()) + (+$('#languageTotal').html());
    let reading = (+$('#reading').val()) + (+$('#readingTotal').html());
    let pe = (+$('#pe').val()) + (+$('#peTotal').html());
    let music = (+$('#music').val()) + (+$('#musicTotal').html());
    let art = (+$('#art').val()) + (+$('#artTotal').html());
    let life = (+$('#life').val()) + (+$('#lifeTotal').html());
    let bible = (+$('#bible').val()) + (+$('#bibleTotal').html());
    let core = (+math) + (+history) + (+science) + (+language) + (+reading) + (+$('#coreTotal').html());
    let noncore = (+pe) + (+music) + (+art) + (+life) + (+bible) + (+$('#noncoreTotal').html());
    let total = (+core) + (+noncore);
    let parmStr = '?math=' + math + '&history=' + history + '&science=' + science
                    + '&language=' + language + '&reading=' + reading + '&pe=' + pe
                    + '&music=' + music + '&art=' + art + '&life=' + life + '&bible='
                    + bible + '&core=' + core + '&noncore=' + noncore + '&total='
                    + total;
    let url = BASE_URL + '/user/update/Liam' + parmStr;
    console.log('Calling the following url: ' + url);
    window.location = url;
}
