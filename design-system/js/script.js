// Accordion

(function() {
  const headings = document.querySelectorAll('h4');
  
  Array.prototype.forEach.call(headings, function(h) {
    let btn = h.querySelector('button');
    let target = h.nextElementSibling;
    
    btn.onclick = function() {
      let expanded = btn.getAttribute('aria-expanded') === 'true';
      
      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;  
    }
  });
 })()