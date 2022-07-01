const checkAccordion = document.querySelector(".accordion");

if (checkAccordion) {
  const btns = document.querySelectorAll(".accordion__title");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("acc-active")) {
        //for auto-closing
        // btns.forEach((btn) => {
        //   btn.classList.remove("acc-active");
        // });
        this.classList.add("acc-active");
      } else {
        this.classList.remove("acc-active");
      }
    });
  });
}