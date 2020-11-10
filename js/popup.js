// getting url
function check_title(title) {
    title = title.toString().replace(/\s+/g, ' ').trim();
    var title_display = document.getElementById("title-display");
    title_display.innerHTML = title.toString();
}

//getting website original url
function extract_hostname(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

document,addEventListener('DOMContentloaded', function(){

    this.clickbait_display = document.getElementById('clickbait-display');
    chrome.tabs.query({
        active: true
    }, 
    function(tabs){
        var tabs = tabs[0];
        var page_domain = extract_hostname(tab.url.toString());
    })

});