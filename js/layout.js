function getHeader() {
  return `
    <header class="header">
      <div class="container">
        <h2 class="logo">NewLearn</h2>

        <nav>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function getFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p>© 2026 NewLearn. All Rights Reserved.</p>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) header.innerHTML = getHeader();
  if (footer) footer.innerHTML = getFooter();
});