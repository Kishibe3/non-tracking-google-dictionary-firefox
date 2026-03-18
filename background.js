let lang = 'zh-TW';

browser.runtime.onMessage.addListener(function (request, sender) {
    if ((request.origin === 'ntgd-content.js' || request.origin === 'ntgd-popup.js') && request.word !== '') {
        return fetch('https://clients5.google.com/translate_a/single?dj=1&dt=t&dt=sp&dt=ld&dt=bd&client=dict-chrome-ex&sl=auto&tl=' + lang + '&q=' + request.word)
        .then(e => e.json())
        .catch(e => {console.log('There is something wrong with internet connection.');});
    }
});

