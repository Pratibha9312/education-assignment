const popularCourses = document.getElementById("popularCourses");

function createCourseCard(course) {
  return `
    <div class="course-card">

      <img src="${course.thumbnail}" alt="${course.title}">

      <div class="course-card-content">

        <h3>${course.title}</h3>

        <p>${course.category}</p>

        <a href="course-detail.html?id=${course.id}">
          View Details
        </a>

      </div>

    </div>
  `;
}

if (popularCourses) {
  popularCourses.innerHTML =
    courses
      .slice(0, 4)
      .map(createCourseCard)
      .join("");
}