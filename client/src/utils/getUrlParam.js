export default function getUrlParam() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = decodeURIComponent(value);
  });
  return vars;
}
