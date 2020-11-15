function check_title(title) {
    title = title.toString().replace(/\s+/g, ' ').trim();
    var title_display = document.getElementById("title-display");

    title_display.innerHTML = title.toString();
}

function extract_hostname(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

document.addEventListener('DOMContentLoaded', function () {
    this.clickbait_display = document.getElementById('clickbait-display');
    chrome.tabs.query({
        active: true
    }, function (tabs) {

        var tab = tabs[0];
        var page_domain = extract_hostname(tab.url.toString());                     //to display host name
        var domain_display = document.getElementById("domain-display");             //to display host name
        domain_display.innerHTML = page_domain;                                     //displaying host name
        var title_display = document.getElementById("title-display")
                    
        var debug_display = document.getElementById("debug-display");  
        var xhr = new XMLHttpRequest();
        var a = tab.url.toString();
        var b = encodeURIComponent(a);
        var c = ("http://192.168.175.2:5000/extract?url=" + b +"%20HTTP/1.1")
        xhr.open('GET', c);
        //document.write(c);
        xhr.onload = function () {
            var json = JSON.parse(this.responseText);
            debug_display.innerHTML = this.responseText;
            
            title_display.innerHTML = json.title_article;               //title
            


        };
        xhr.send();
    });

});