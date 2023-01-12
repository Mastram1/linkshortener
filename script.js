document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(document.querySelector(".shortLink").innerHTML);
  console.log(document.querySelector(".shortLink").href);
  var api_token = "1aec8b5577b9d87e7fcb36452852a4edd61eeb0f";
  var long_url = document.querySelector(
    "input[type='text']:first-of-type"
  ).value;
  var alias = document.querySelector("input[type='text']:last-of-type").value;
  var format = "json";
  var api_url =
    "https://clicksfly.com/api?api=" +
    api_token +
    "&url=" +
    long_url +
    "&alias=" +
    alias +
    "&format=" +
    format;
  console.log(alias);
  console.log(api_url);
  fetch(api_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.status == "success") {
        document.querySelector(".shortLink").href = data.shortenedUrl;
        document.querySelector(".shortLink").innerHTML = data.shortenedUrl;
        // document.querySelector(".result p").textContent = "Short Link: ";
      } else if (data.status == "error") {
        document.querySelector(".shortLink").href = "";
        document.querySelector(".shortLink").innerHTML =
          "Alias already exists. Try Other keyword";
      }
    });
});
