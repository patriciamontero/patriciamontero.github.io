//alert();

// Nested navigation by https://www.w3.org/ 
var MainNav = function (domNode) {
  this.rootNode = domNode;
  this.triggerNodes = [];
  this.controlledNodes = [];
  this.openIndex = null;
  this.useArrowKeys = true;
};
MainNav.prototype.init = function () {
  var buttons = this.rootNode.querySelectorAll('button[aria-expanded][aria-controls]');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var menu = button.parentNode.querySelector('ul');
    if (menu) {
      // save ref to button and controlled menu
      this.triggerNodes.push(button);
      this.controlledNodes.push(menu);
      // collapse menus
      button.setAttribute('aria-expanded', 'false');
      this.toggleMenu(menu, false);
      // attach event listeners
      menu.addEventListener('keydown', this.handleMenuKeyDown.bind(this));
      button.addEventListener('click', this.handleButtonClick.bind(this));
      button.addEventListener('keydown', this.handleButtonKeyDown.bind(this));
    }
  }
  this.rootNode.addEventListener('focusout', this.handleBlur.bind(this));
};
MainNav.prototype.toggleMenu = function (domNode, show) {
  if (domNode) {
    domNode.style.display = show ? 'block' : 'none';
  }
};
MainNav.prototype.toggleExpand = function (index, expanded) {
  // close open menu, if applicable
  if (this.openIndex !== index) {
    this.toggleExpand(this.openIndex, false);
  }
  // handle menu at called index
  if (this.triggerNodes[index]) {
    this.openIndex = expanded ? index : null;
    this.triggerNodes[index].setAttribute('aria-expanded', expanded);
    this.toggleMenu(this.controlledNodes[index], expanded);
  }
};
MainNav.prototype.controlFocusByKey = function (keyboardEvent, nodeList, currentIndex) {
  switch (keyboardEvent.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      keyboardEvent.preventDefault();
      if (currentIndex > -1) {
        var prevIndex = Math.max(0, currentIndex - 1);
        nodeList[prevIndex].focus();
      }
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      keyboardEvent.preventDefault();
      if (currentIndex > -1) {
        var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
        nodeList[nextIndex].focus();
      }
      break;
    case 'Home':
      keyboardEvent.preventDefault();
      nodeList[0].focus();
      break;
    case 'End':
      keyboardEvent.preventDefault();
      nodeList[nodeList.length - 1].focus();
      break;
  }
};
/* Event Handlers */
MainNav.prototype.handleBlur = function (event) {
  var menuContainsFocus = this.rootNode.contains(event.relatedTarget);
  if (!menuContainsFocus && this.openIndex !== null) {
    this.toggleExpand(this.openIndex, false);
  }
};
MainNav.prototype.handleButtonKeyDown = function (event) {
  var targetButtonIndex = this.triggerNodes.indexOf(document.activeElement);
  // close on escape
  if (event.key === 'Escape') {
    this.toggleExpand(this.openIndex, false);
  }
  // move focus into the open menu if the current menu is open
  else if (this.useArrowKeys && this.openIndex === targetButtonIndex && event.key === 'ArrowDown') {
    event.preventDefault();
    this.controlledNodes[this.openIndex].querySelector('a').focus();
  }
  // handle arrow key navigation between top-level buttons, if set
  else if (this.useArrowKeys) {
    this.controlFocusByKey(event, this.triggerNodes, targetButtonIndex);
  }
};
MainNav.prototype.handleButtonClick = function (event) {
  var button = event.target;
  var buttonIndex = this.triggerNodes.indexOf(button);
  var buttonExpanded = button.getAttribute('aria-expanded') === 'true';
  this.toggleExpand(buttonIndex, !buttonExpanded);
};
MainNav.prototype.handleMenuKeyDown = function (event) {
  if (this.openIndex === null) {
    return;
  }
  var menuLinks = Array.prototype.slice.call(this.controlledNodes[this.openIndex].querySelectorAll('a'));
  var currentIndex = menuLinks.indexOf(document.activeElement);
  // close on escape
  if (event.key === 'Escape') {
    this.triggerNodes[this.openIndex].focus();
    this.toggleExpand(this.openIndex, false);
  }
  // handle arrow key navigation within menu links, if set
  else if (this.useArrowKeys) {
    this.controlFocusByKey(event, menuLinks, currentIndex);
  }
};
// switch on/off arrow key navigation
MainNav.prototype.updateKeyControls = function (useArrowKeys) {
  this.useArrowKeys = useArrowKeys;
};
/* Initialize Main Menus */
window.addEventListener('load', function (event) {
  var menus = document.querySelectorAll('.mainnav');
  var mainMenus = [];
  for (var i = 0; i < menus.length; i++) {
    mainMenus[i] = new MainNav(menus[i]);
    mainMenus[i].init();
  }
  // listen to arrow key checkbox
  /*
  var arrowKeySwitch = document.getElementById('arrow-behavior-switch');
  arrowKeySwitch.addEventListener('change', function (event) {
    var checked = arrowKeySwitch.checked;
    for (var i = 0; i < mainMenus.length; i++) {
      mainMenus[i].updateKeyControls(checked);
    }
  });
  */
  // fake link behavior
  var links = document.querySelectorAll('[href="#design-system"]');
  var examplePageHeading = document.getElementById('design-system');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      var pageTitle = event.target.innerText;
      examplePageHeading.innerText = pageTitle;
      // handle aria-current
      for (var n = 0; n < links.length; n++) {
        links[n].removeAttribute('aria-current');
      }
      this.setAttribute('aria-current', 'page');
    });
  }
}, false);

// Accordion by https://inclusivedesignprinciples.org/
(function() {
  var translations = {
    en: {
      EXPAND: "Expand all",
      COLLAPSE: "Collapse all"
    },
    es: {
      EXPAND: "muestra todo",
      COLLAPSE: "esconde todos"
    },
    fr: {
      EXPAND: "ouvrir tout",
      COLLAPSE: "fermer tout"
    },
  };
  var pageLang = document.querySelector('html').getAttribute('lang');
  var strings = translations[pageLang] || translations['en'];
  function collapse(toggle, target) {
    toggle.setAttribute('aria-expanded', 'false');
    target.hidden = true;
  }
  function expand(toggle, target) {
    toggle.setAttribute('aria-expanded', 'true');
    target.hidden = false;
  }
  var toggles = document.querySelectorAll('[data-expands]');
  [].forEach.call(toggles, function(toggle) {
    toggle.hidden = false;
    toggle.setAttribute('aria-expanded', 'false');
    var target = document.getElementById(toggle.getAttribute('data-expands'));
    if (target) {
      target.hidden = true;
      toggle.addEventListener('click', function() {
        var expanded = (this.getAttribute('aria-expanded') === 'true');
        if (expanded) {
          collapse(this, target);
        } else {
          expand(this, target);
        }
      });
    }
  });
  if(!document.querySelector('[data-expandAll]')){
    return;
  }
  var expandAll = document.querySelector('[data-expandAll]');
  expandAll.hidden = false;
  expandAll.textContent = strings.EXPAND;
  expandAll.addEventListener('click', function() {
    var expanded = this.textContent === strings.EXPAND ? false : true;
    if (expanded) {
      [].forEach.call(toggles, function(toggle) {
        var target = document.getElementById(toggle.getAttribute('data-expands'));
        collapse(toggle, target);
      });
      this.textContent = strings.EXPAND;
    } else {
      [].forEach.call(toggles, function(toggle) {
        var target = document.getElementById(toggle.getAttribute('data-expands'));
        expand(toggle, target);
      });
      this.textContent = strings.COLLAPSE;
    }
  });
  function openSection() {
    var hash = window.location.hash || false;
    if (hash) {
      var id = hash.substring(1);
      var sectionToggle = document.querySelector('[data-expands='+id+'-content]') || false;
      if (sectionToggle) {
        if (sectionToggle.getAttribute('aria-expanded') === 'false') {
          sectionToggle.click();
        }
      }
    }
  }
  window.onload = openSection;
  window.onhashchange = openSection;
  var sectionHeadings = document.querySelectorAll('.component-intro h4');

  Array.prototype.forEach.call(sectionHeadings, function (heading) {
    heading.addEventListener('click', function () {
      this.nextElementSibling.click();
    })
  });
})();

// Copy to clipboard
(function(){
  if(!document.querySelector('.btn-sec')){
    return;
  }
  new ClipboardJS('.btn-sec');
}());