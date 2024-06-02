document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("container");

  document.getElementById("Cyan").addEventListener("click", function () {
    container.style.backgroundColor = "cyan";
  });

  document.getElementById("Fuchsia").addEventListener("click", function () {
    container.style.backgroundColor = "fuchsia";
  });

  document.getElementById("Salmon").addEventListener("click", function () {
    container.style.backgroundColor = "salmon";
  });

  document.getElementById("Teal").addEventListener("click", function () {
    container.style.backgroundColor = "teal";
  });
});
