// Nav Toggle Button Control
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

// Nav scroll visibility toggle
// Purpose: show nav on scroll, hide when at the top of page

// N.B.
// Only works on header with the ID of 'scroll-nav'

(function buttonControlInit() {
  const navToggle = document.querySelector('#nav_toggle');
  const navContent = document.querySelector('#nav_content');

  function toggleNav() {
    navContent.classList.toggle('hidden');
  }

  navToggle.addEventListener('click', toggleNav);

  // FAQ Dropdown Control
  // 1. Gather all <detail> elements into an array
  // 2. Assign a click listener to each one
  // 3. Click listener toggles "open" class when clicked

  const detailsArray = document.querySelectorAll('details');

  function toggleDetails(e) {
    e.target.classList.toggle('open');
  }
  detailsArray.forEach((el) => el.addEventListener('toggle', toggleDetails));
})();

// Not used on this site but available to implement if needed.
// Just add the id of "scroll-nav" to the header.
(function navScrollToggle() {
  const nav = document.querySelector('#scroll-nav');

  // exits function if nav with ID of 'scroll-nav' is not found
  if (!nav) return;

  let scrolling = false;

  function toggleNavOnScroll(e) {
    // only run scroll check every 300ms to prevent scroll jank (event throttling)
    if (!scrolling) {
      scrolling = true;
      const promise = new Promise((res, rej) => {
        setTimeout(res, 300);
      });

      promise.then((res) => {
        scrolling = false;
        // handle toggle logic here
        checkAndHandleScrollPosition();
      });
    }
  }

  function checkAndHandleScrollPosition() {
    if (window.scrollY > 96) {
      // if it already contains 'opacity-0' (i.e. the nav cannot be seen), exit the function without taking further action
      if (!nav.classList.contains('opacity-0')) return;
      //  only reached if nav does contain 'opacity-0'
      nav.classList.remove('opacity-0');
    } else {
      // if the window Y-scroll position is less than 0, hide the nav with 'opacity-0'
      nav.classList.add('opacity-0');
    }
  }

  document.addEventListener('scroll', toggleNavOnScroll);
})();
