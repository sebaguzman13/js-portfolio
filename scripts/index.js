window.onload = function () {

  let drawerEntries = document.getElementById("mobile-drawer").querySelectorAll('a[href^="#"]');
  if (!!drawerEntries) {
    for (let entry of drawerEntries) {
      entry.addEventListener("click", toggleMenu);
    }
  }
  
  fillHomeLegend();
  // Select first project and indicator as active
  document.getElementsByClassName('entry')?.item(0)?.classList.toggle('active')
  document.getElementsByClassName('project-indicator')?.item(0)?.children.item(0).classList.toggle('active');

  setTimeout(() => {
    let base = 'sebaguzman13'
    let dom = 'gmail.com'
    let anchor = document.getElementById('contact').getElementsByTagName('a').item(0);
    anchor.setAttribute('href', `mailto:${base}@${dom}`);
    anchor.append(`${base}@${dom}`);

    document.getElementById('contact-form').setAttribute('action', 'https://formsubmit.co/6ec6a26a5476f8441e0f9626d72ba8a7');
  }, 4000);
}
// END OF ONLOAD FUNCTION

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
    // legendStart = 'Web Development\nfrom '.split('');
    // legendStart = '\nfrom '.split('');
    legendStart = '';
    legendEnd = 'dea to carrer'.split('');
  } else {
    // legendStart = 'Web Development from'.split('');
    // legendStart = '\nfrom'.split('');
    legendStart = '';
    legendEnd = 'dea'.split('').concat('\n', 'to carrer'.split(''));
  }
  return [legendStart, legendEnd]
}

function fillHomeLegend() {
  let bulb = document.createElement('i');
  bulb.classList.add('icon', 'light-bulb');
  bulb.addEventListener('click', toggleLightBulb);

  let legends = getLegendsForDevice();
  console.log("legendO", legends)
  // let toInsert = legends[0].concat(bulb);
  legends[0] = bulb;
  let legendNode = document.getElementById('home').getElementsByTagName('h3').item(0);
  
  let delayInMs = 500;

  for (let i = 0; i < legends.length; i++) {
    setTimeout(() => {
      if (typeof(legends[i]) === 'string') {
        console.log('String ', legends[i])
        legendNode.appendChild(document.createTextNode(legends[i]));
      } else {
        console.log('append ', legends[i])
        legendNode.appendChild(legends[i]);
      }
    }, delayInMs + (i * 130))
  }

  setTimeout(() => {
    legends[1].forEach((e, index) => {
      setTimeout(() => {
        if (typeof(e) === 'string') {
          legendNode.appendChild(document.createTextNode(e));
        } else {
          legendNode.appendChild(e);
        }
      }, delayInMs + (index * 180))
  })
  }, legends[0].includes('opment') ? 4700 : 3500)
}

/* Enables background and color changes, like a theme changer */
function toggleLightBulb() {
  document.getElementsByClassName('light-bulb').item(0).classList.toggle('turned-on');
  document.body.classList.toggle('turned-on')
}

/* Set the Project entry that's gonna be centered */
function navigateProjects(index) {
  let projects = document.getElementsByClassName("entry");

  let isActive = projects[index].classList.contains('active');
  if (!isActive) {
    document.getElementsByClassName('entry active')?.item(0)?.classList.toggle('active');
    projects[index].classList.toggle('active');
    document.getElementsByClassName('project-indicator')?.item(index)?.classList.toggle('active');
  }
}