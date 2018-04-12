var acc = document.getElementsByClassName("product-card__title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("product-card__title--active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

$(function() {

  $(".product-card__form").on("click", function(e) {

    var sum = [].reduce.call(this.querySelectorAll(":checked"), function(sum, el) {
      return +el.value + sum;
    }, 125000);

    $(".product-card__price-number").html(sum);
  });

});
