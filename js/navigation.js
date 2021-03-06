/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


( function() {
	const siteNavigation = document.getElementById( 'site-navigation' );

	// Return early if the navigation don't exist.
	if ( ! siteNavigation ) {
		return;
	}

	const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];

	// Return early if the button don't exist.
	if ( 'undefined' === typeof button ) {
		return;
	}

	const menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( ! menu.classList.contains( 'nav-menu' ) ) {
		menu.classList.add( 'nav-menu' );
	}

	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
	button.addEventListener( 'click', function() {
		siteNavigation.classList.toggle( 'toggled' );

		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
			button.setAttribute( 'aria-expanded', 'false' );
		} else {
			button.setAttribute( 'aria-expanded', 'true' );
		}
	} );

	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
	document.addEventListener( 'click', function( event ) {
		const isClickInside = siteNavigation.contains( event.target );

		if ( ! isClickInside ) {
			siteNavigation.classList.remove( 'toggled' );
			button.setAttribute( 'aria-expanded', 'false' );
		}
	} );

	// Get all the link elements within the menu.
	const links = menu.getElementsByTagName( 'a' );

	// Get all the link elements with children within the menu.
	const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

	// Toggle focus each time a menu link is focused or blurred.
	for ( const link of links ) {
		link.addEventListener( 'focus', toggleFocus, true );
		link.addEventListener( 'blur', toggleFocus, true );
	}

	// Toggle focus each time a menu link with children receive a touch event.
	for ( const link of linksWithChildren ) {
		link.addEventListener( 'touchstart', toggleFocus, false );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		if ( event.type === 'focus' || event.type === 'blur' ) {
			let self = this;
			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( ! self.classList.contains( 'nav-menu' ) ) {
				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					self.classList.toggle( 'focus' );
				}
				self = self.parentNode;
			}
		}

		if ( event.type === 'touchstart' ) {
			const menuItem = this.parentNode;
			event.preventDefault();
			for ( const link of menuItem.parentNode.children ) {
				if ( menuItem !== link ) {
					link.classList.remove( 'focus' );
				}
			}
			menuItem.classList.toggle( 'focus' );
		}
	}
	

} )();


var $=jQuery.noConflict();


// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};


// Get the header
var header = document.getElementById("site-navigation");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
/* function myFunction() {
  if (window.pageYOffset > sticky) {
    // header.classList.add("sticky");
	$(".site-header").addClass("sticky");
  } else {
    // header.classList.remove("sticky");
	$(".site-header").removeClass("sticky");
  }
} */


// Menu dropdown stuff
jQuery(function () { 
  $(".menu-top-container #primary-menu li a[href*='#']").click(function(){
    if (!$(this).hasClass('active')){
      $(".menu-top-container #primary-menu li .sub-menu").slideUp();
      $(this).next().slideToggle();
      $(".menu-top-container #primary-menu li a[href*='#']").removeClass('active');
      $(this).addClass('active');
      return false;
    } else {
      $(this).next('.sub-menu').slideUp();
      $(this).removeClass('active');
      return false;
    }
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the header
var header = document.getElementById("site-navigation");

// Get the offset position of the navbar
var sticky = header.offsetTop;
var headerHt = header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    // header.classList.add("sticky");
	$(".menu-top-container").addClass("sticky");
	$("#page").addClass("jump-padding");
  } else {
    // header.classList.remove("sticky");
	$(".menu-top-container").removeClass("sticky");
	$("#page").removeClass("jump-padding");
  }
}
// Accordion expansion
jQuery(document).ready(function ($) { 
  $(".acc-parent").click(function(){
    if (!$(this).hasClass('active')){
      $($(this).next()).slideToggle();
      $(this).addClass('active');
      return false;
    } else {
      $(this).removeClass('active');
	  $($(this).next()).slideToggle();
      return false;
    }
  });
});