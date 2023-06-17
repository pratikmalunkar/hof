function CheckUrl(url)
{
   var pattern=new RegExp('^((https?:\\/\\/)?(www\\.)?([a-z\\d-]+)\\.([a-z]{2,})(:\\d{2,5})?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?)$', 'i');
  
   return pattern.test(url);
}
var url='https://www.example.com';
var url2='http://ww.example.com';

console.log(CheckUrl(url));
console.log(CheckUrl(url2));

//^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)