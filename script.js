    // Get modal element
    var modal = document.getElementById("popupModal");

    // Get open modal button
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Get close button
    var closeBtn = document.querySelector(".close");
    
    // Listen for a click on all add-to-cart buttons
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });
    
    // Listen for a click on close button
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    
    // Listen for a click outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

   