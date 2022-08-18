console.log("loaded js")

window.onload = function () {

  fillHomeLegend();

  let drawerEntries = document.getElementById("mobile-drawer").querySelectorAll('a[href^="#"]');
  if (!!drawerEntries) {
    for (let entry of drawerEntries) {
      entry.addEventListener("click", toggleMenu);
    }
  }

  setTimeout(() => {
    let base = 'sebaguzman13'
    let dom = 'gmail.com'
    let anchor = document.getElementById('contact').getElementsByTagName('a').item(0);
    anchor.setAttribute('href', `mailto:${base}@${dom}`);
    anchor.append(`${base}@${dom}`);

    document.getElementById('contact-form').setAttribute('action', 'https://formsubmit.co/6ec6a26a5476f8441e0f9626d72ba8a7');
  }, 4000);
}


// Mobile Menu handler
function toggleMenu() {
  document.getElementById("menu-btn").classList.toggle('opened');
  document.getElementById("mobile-h1").classList.toggle('opened');
  if (document.getElementById("mobile-drawer").classList.toggle('opened')) {
    document.body.setAttribute("style", "overflow: hidden");
  } else {
    document.body.setAttribute("style", "");
  }  
}

function toggleSocialMenu() {
  document.getElementById("social-menu").classList.toggle('opened');
  document.getElementById("social-links").classList.toggle('opened');
  document.getElementById("mobile-social").classList.toggle('opened');
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function insertIntoElementWithDelay(iterableToInsert, element, delayInMs) {
  iterableToInsert.forEach((e, index) => {
    setTimeout(() => {
      if (typeof(e) === 'string') {
        element.appendChild(document.createTextNode(e));
      } else {
        element.appendChild(e);
      }
    }, delayInMs + (index * 130))
  })
}

function getLegendsForDevice() {
  let legendStart, legendEnd;
  if (window.innerWidth > 600) {
    legendStart = 'Web Development from ';
    legendEnd = 'dea to carrer';
  } else {
    legendStart = 'WebDev\nfrom'.split('').concat('\n');
    legendEnd = 'dea'.split('').concat('\n', 'to carrer'.split(''));
  }
  return [legendStart, legendEnd]
}

function fillHomeLegend() {
  let bulb = document.createElement('i');
  bulb.classList.add('icon', 'light-bulb')

  let legends = getLegendsForDevice();

  let toInsert = legends[0].concat(bulb);

  let legendNode = document.getElementById('home').getElementsByTagName('h3').item(0);
  
  let delayInMs = 500;
  
  // toInsert.forEach((e, index) => {
  //   setTimeout(() => {
  //     if (typeof(e) === 'string') {
  //       legendNode.appendChild(document.createTextNode(e));
  //     } else {
  //       legendNode.appendChild(e);
  //     }
  //   }, delayInMs + (index * 130))
  // })

  // setTimeout(() => {
  //   legends[1].forEach((e, index) => {
  //     setTimeout(() => {
  //       if (typeof(e) === 'string') {
  //         legendNode.appendChild(document.createTextNode(e));
  //       } else {
  //         legendNode.appendChild(e);
  //       }
  //     }, delayInMs + (index * 180))
  // })
  // }, 5300)

insertIntoElementWithDelay(toInsert, legendNode, 500);
setTimeout(() => {
  insertIntoElementWithDelay(legends[1], legendNode, 500)
}, 5300)

}

