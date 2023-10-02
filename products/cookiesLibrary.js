function setCookie(cookieName, cookieValue, exdays) {
  const d = new Date();
  d.setDate(d.getDate() + exdays);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires;
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    c = c.trimStart();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  console.log(decodedCookie);
  return "";
}

function hasCookie(cookieName) {
  return getCookie(cookieName) !== "";
}

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970";
}


// [
//   {"id":"1","name":"p","price":"56$","imgSrc":"./Imgs/p2.jpg","categories":"laptop"},
//   {"id":"2","name":"a","price":"62$","imgSrc":"./Imgs/p3.jpg","categories":"mobiles"},
//   {"id":"3","name":"a","price":"68$","imgSrc":"./Imgs/p4.jpg","categories":"home"},
//   {"id":"4","name":"g","price":"74$","imgSrc":"./Imgs/p5.jpg","categories":"laptop"},
//   {"id":"0","name":"a","price":"50$","imgSrc":"./Imgs/p1.jpg","categories":"home"}]