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

new ClipboardJS('.secondary');

// Nested navigation

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
    };
}

var opened;

function reset() {
    if (opened) {
        opened.style.display = '';
        opened.setAttribute('aria-hidden', 'true');
        opened.setAttribute('aria-expanded', 'false');
    }
}

function open(el) {
    el.style.display = 'block';
    el.setAttribute('aria-hidden', 'false');
    el.setAttribute('aria-expanded', 'true');
    opened = el;
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('[aria-hidden]')) {
        reset();
    }
});

document.addEventListener('focusin', function(event) {
    reset();

    var target = event.target;
    var hasPopup = target.getAttribute('aria-haspopup') === 'true';
    if (hasPopup) {
        open(event.target.nextElementSibling);
        return;
    }

    var popupAnchor = target.parentNode.parentNode.previousElementSibling;
    var isSubMenuAnchor = popupAnchor && popupAnchor.getAttribute('aria-haspopup') === 'true';
    if (isSubMenuAnchor) {
        open(popupAnchor.nextElementSibling);
        return;
    }
})

