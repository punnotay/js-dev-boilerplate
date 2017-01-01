export default function getBaseUrl() {
  //const inDev = window.location.hostname === 'localhost';
  //return inDev ? 'http://localhost:3005/' : '/';
  return getQueryStringParamByName('useMockApi') ? 'http://localhost:3005/' : '/';
}

function getQueryStringParamByName(name, url=window.location.href) {
  name = name.replace(/[\[]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  result = regex.exec(url);
  if (!result) return null;
  if(!result[2]) return '';
  return decodeURIComponent(result[2].replace(/\+/g, " "));
}
