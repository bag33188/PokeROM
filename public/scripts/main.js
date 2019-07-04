jQuery(document).ready(function () {
  // create function that logs site name
  function logSiteName(siteName) {
    // log site name to console
    console.log(siteName);
  }
  // cache site name var
  var siteName = $("#title").text();
  // log site name
  logSiteName(siteName);
  // make title move
  var documentTitle = document.title + " - ";
  var titleMarquee = (function titleMarquee() {
    // use substring to cut through title text
    document.title = documentTitle = documentTitle.substring(1) + documentTitle.substring(0, 1);
    // set time out to make title move like marquee
    setTimeout(titleMarquee, 200);
  })();
  // generate ASCII text art for 'Poke`ROM'
  var asciiTextArt = (function asciiTextArt() {
    // cache pre tag
    var pre = $("#asciiTextArt");
    // create array with html data
    var textArtData = [
      "&#x20;&#x5f;&#x5f;&#x5f;&#x5f;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x20;&#x5f;&#x20;&#x20;&#x20;&#x20;&#x20;&#x5f;&#x5f;&#x20;&#x5f;&#x5f;&#x5f;&#x5f;&#x20;&#x20;&#x20;&#x5f;&#x5f;&#x5f;&#x20;&#x20;&#x5f;&#x5f;&#x20;&#x20;&#x5f;&#x5f;&#x20;", 
      "<br/>",
      "&#x7c;&#x20;&#x20;&#x5f;&#x20;&#x5c;&#x20;&#x5f;&#x5f;&#x5f;&#x20;&#x7c;&#x20;&#x7c;&#x20;&#x5f;&#x5f;&#x2f;&#x5f;&#x2f;&#x7c;&#x20;&#x20;&#x5f;&#x20;&#x5c;&#x20;&#x2f;&#x20;&#x5f;&#x20;&#x5c;&#x7c;&#x20;&#x20;&#x5c;&#x2f;&#x20;&#x20;&#x7c;", 
      "<br/>",
      "&#x7c;&#x20;&#x7c;&#x5f;&#x29;&#x20;&#x2f;&#x20;&#x5f;&#x20;&#x5c;&#x7c;&#x20;&#x7c;&#x2f;&#x20;&#x2f;&#x20;&#x5f;&#x20;&#x5c;&#x20;&#x7c;&#x5f;&#x29;&#x20;&#x7c;&#x20;&#x7c;&#x20;&#x7c;&#x20;&#x7c;&#x20;&#x7c;&#x5c;&#x2f;&#x7c;&#x20;&#x7c;", 
      "<br/>",
      "&#x7c;&#x20;&#x20;&#x5f;&#x5f;&#x2f;&#x20;&#x28;&#x5f;&#x29;&#x20;&#x7c;&#x20;&#x20;&#x20;&#x3c;&#x20;&#x20;&#x5f;&#x5f;&#x2f;&#x20;&#x20;&#x5f;&#x20;&#x3c;&#x7c;&#x20;&#x7c;&#x5f;&#x7c;&#x20;&#x7c;&#x20;&#x7c;&#x20;&#x20;&#x7c;&#x20;&#x7c;", 
      "<br/>",
      "&#x7c;&#x5f;&#x7c;&#x20;&#x20;&#x20;&#x5c;&#x5f;&#x5f;&#x5f;&#x2f;&#x7c;&#x5f;&#x7c;&#x5c;&#x5f;&#x5c;&#x5f;&#x5f;&#x5f;&#x7c;&#x5f;&#x7c;&#x20;&#x5c;&#x5f;&#x5c;&#x5c;&#x5f;&#x5f;&#x5f;&#x2f;&#x7c;&#x5f;&#x7c;&#x20;&#x20;&#x7c;&#x5f;&#x7c;"
    ];
    // loop through array
    $.each(textArtData, function (i, asciiData) {
      // append html data to pre tag
      pre.append(asciiData);
    });
  }());
  // get API version
  $.ajax({
    method: "GET",
    url: "/api/version",
    dataType: "json",
    success: function (data) { // on success...
      // cache html vars
      var docsLink = $("#docsLink");
      var apiVersion = $("#apiVersion");
      // grab version from data
      var version = data.apiVersion;
      // set version in anchor element's href attribute
      docsLink.attr("href", "/api-docs/" + version);
      // set version in span element's text
      apiVersion.text(version);
      // log API version number as info to console
      console.info("API Version: " + version);
    }, error: function (err) { // on error...
      // log error
      console.error(err);
    }, statusCode: { // on certain status codes...
      // check for 404 error
      404: function (err404) {
        console.error('Error 404: Not Found.');
        throw err404;
      },
      // check for 500 error
      500: function (err500) {
        console.error('Error 500: Internal Server Error.');
        throw err500;
      }
    }
  });
});
