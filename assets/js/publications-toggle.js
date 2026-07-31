// Publications chip behaviour for al-folio.
// - Clicking an expand chip (Abstract / Plain-language summary / BibTeX / Media)
//   opens its panel; only one panel per paper is open at a time.
// - The Copy button copies that paper's BibTeX to the clipboard.
// Link/download chips (PDF, Video, Replication, Teaching) are plain <a> tags
// and need no JS.

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector(".publications");
  if (!root) return;

  root.querySelectorAll(".pub-chip[data-target]").forEach(function (chip) {
    chip.setAttribute("aria-expanded", "false");
    chip.addEventListener("click", function () {
      var panel = document.getElementById(chip.getAttribute("data-target"));
      if (!panel) return;
      var item = chip.closest(".pub-item");
      var wasOpen = panel.classList.contains("open");

      item.querySelectorAll(".pub-panel").forEach(function (p) {
        p.classList.remove("open");
      });
      item.querySelectorAll(".pub-chip[data-target]").forEach(function (c) {
        c.classList.remove("active");
        c.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        panel.classList.add("open");
        chip.classList.add("active");
        chip.setAttribute("aria-expanded", "true");
      }
    });
  });

  root.querySelectorAll(".pub-copy").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      var pre = document.getElementById(btn.getAttribute("data-src"));
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.innerText.trim()).then(function () {
        var original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Copied';
        setTimeout(function () {
          btn.innerHTML = original;
        }, 1400);
      });
    });
  });
});
