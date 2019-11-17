'use strict';

const privateMethods = {
  async getApiVersion() {
    const apiVersion = await fetch('/api/version', { method: 'GET' });
    return apiVersion.json();
  }
};

class Info {
  constructor() {
    throw new Error('Info class is not meant to be instantiated.');
  }

  static setCurrentYear() {
    const year = document.getElementById('current-year');
    const now = new Date();
    year.textContent = now.getFullYear().toString();
  }

  static setHrWidth() {
    const span = document.getElementsByClassName('tos-title')[0];
    const hr = document.getElementById('tos-hr');
    hr.style.width = span.offsetWidth.toString() + 'px';
  }

  static setNav() {
    const productionMode = !location.href.includes('localhost');
    const homeUrl = productionMode ? '/' : 'http://localhost:4200/';
    const navData = [
      {
        href: homeUrl,
        target: '_self',
        text: 'Home'
      },
      {
        href: './credits.php',
        target: '_self',
        text: 'Credits'
      },
      {
        href: './languages.php',
        target: '_self',
        text: 'Languages'
      },
      {
        href: './resources.html',
        target: '_self',
        text: 'Resources'
      },
      {
        href: `${homeUrl}sitemap.xml`,
        target: '_blank',
        text: 'Sitemap'
      },
      {
        href: `${homeUrl}robots.txt`,
        target: '_blank',
        text: 'Robots'
      }
    ];
    privateMethods
      .getApiVersion()
      .then(res => {
        if (!productionMode) {
          const devNavItems = [
            {
              href: `/api/docs/${res.api_version}/`,
              target: '_self',
              text: 'Docs'
            }
          ];
          devNavItems.forEach(navItem => {
            navData.push(navItem);
          });
        }
        const nav = document.getElementById('nav');
        while (nav.firstChild) {
          nav.removeChild(nav.firstChild);
        }
        navData.forEach(navInfo => {
          const link = document.createElement('a');
          const linkUrl = document.createAttribute('href');
          const linkTarget = document.createAttribute('target');
          const linkText = document.createTextNode(navInfo.text);
          linkUrl.value = navInfo.href;
          linkTarget.value = navInfo.target;
          link.setAttributeNode(linkUrl);
          link.setAttributeNode(linkTarget);
          link.appendChild(linkText);
          nav.appendChild(link);
          if (navData.indexOf(navInfo) < navData.length - 1) {
            const separatorElement = document.createElement('span');
            const separatorText = document.createTextNode(' | ');
            separatorElement.appendChild(separatorText);
            nav.appendChild(separatorElement);
          }
        });
      })
      .catch(err => console.error(err));
  }
}

function init() {
  const methods = [
    Info.setCurrentYear,
    Info.setNav,
    Info.setHrWidth
    // addEventListener('resize', Info.setHrWidth)
  ];
  methods.forEach(method => ready(method));
}

init();
