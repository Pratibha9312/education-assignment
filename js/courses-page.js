const courseContainer =
  document.getElementById("courseContainer");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

function createCourseCard(course) {
  return `
    <div class="course-card">

      <img src="${course.thumbnail}" alt="${course.title}">

      <div class="course-card-content">

        <h3>${course.title}</h3>

        <p>${course.category}</p>

        <p><strong>${course.price}</strong></p>

        <a href="course-detail.html?id=${course.id}">
          View Details
        </a>

      </div>

    </div>
  `;
}

function renderCourses(data) {

  if (data.length === 0) {

    courseContainer.innerHTML = `
      <div class="no-results">
        No courses found.
      </div>
    `;

    return;
  }

  courseContainer.innerHTML =
    data.map(createCourseCard).join("");
}

function filterCourses() {

  const searchTerm =
    searchInput.value.toLowerCase();

  const selectedCategory =
    categoryFilter.value;

  const filteredCourses =
    courses.filter(course => {

      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(searchTerm);

      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  renderCourses(filteredCourses);
}

function debounce(callback, delay) {

  let timeout;

  return (...args) => {

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);

  };
}

searchInput.addEventListener(
  "input",
  debounce(filterCourses, 300)
);

categoryFilter.addEventListener(
  "change",
  filterCourses
);

renderCourses(courses);