(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();




    $(function() {
  setTimeout(function(){
    $('body').removeClass('loading');
  }, 1000);
});



      $(document).ready(function() {

        $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
 
});


       // JavaScript code as in your original setup with adjustments
  document.addEventListener('DOMContentLoaded', () => {
  const bookBusButtons = document.querySelectorAll('.book-bus-btn');
  const modal = document.getElementById('seat-modal');
  const closeModal = document.querySelector('.close');
  const reserveBtn = document.getElementById('reserve-btn');
  let selectedSeats = [];

  // Open modal for each 'Book Bus' button clicked
  bookBusButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  // Close modal when close button is clicked
  closeModal.onclick = () => {
    modal.style.display = 'none';
    resetSelection();
  };

  // Close modal if clicking outside of the modal content
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      resetSelection();
    }
  };

  // Toggle seat selection on click
  document.querySelectorAll('.seat').forEach((seat) => {
    seat.addEventListener('click', () => {
      toggleSeat(seat);
    });
  });

  function toggleSeat(seat) {
    const seatNumber = seat.textContent.trim(); // Get seat label
    seat.classList.toggle('selected');
    if (selectedSeats.includes(seatNumber)) {
      selectedSeats = selectedSeats.filter(num => num !== seatNumber);
    } else {
      selectedSeats.push(seatNumber);
    }
    console.log("Selected Seats:", selectedSeats); // Debugging selected seats
  }

  // Reserve selected seats
  reserveBtn.onclick = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
    } else {
      confirm(`You have reserved seats: ${selectedSeats.join(', ')}`);
      modal.style.display = 'none';
      resetSelection();
    }
  };

  // Reset selection after closing the modal or reserving
  function resetSelection() {
    selectedSeats = [];
    document.querySelectorAll('.seat').forEach((seat) => seat.classList.remove('selected'));
  }

  
});


   
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    


    

    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    //Counter-Up
    document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('h3[data-count]');
    const speed = 2000; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const increment = target / speed * 10; 

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); 
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


    
})(jQuery);

