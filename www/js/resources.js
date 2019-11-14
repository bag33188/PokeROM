'use strict';

function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState === 'complete') callback();
    });
  }
}

class Resources {
  constructor() {
    throw new Error('Resources class is not meant to be instantiated.');
  }
  static async getApiVersion() {
    const apiVersion = await fetch('/api/version', { method: 'GET' });
    return apiVersion.json();
  }
  static setResourcesList() {
    const list = document.getElementById('resources-list');
    const resources = [
      'PHPStorm',
      'Postman',
      'Draw.io',
      'Adobe XD',
      'Git Bash',
      'Google Chrome',
      'MongoDB Compass',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ];
    resources.sort();
    resources.forEach(resource => {
      list.innerHTML += `<li class="list-group-item">${resource}</li>`;
    });
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
        href: './info.html',
        target: '_self',
        text: 'Info'
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
    Resources.getApiVersion()
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

ready(Resources.setNav);
ready(Resources.setResourcesList);
