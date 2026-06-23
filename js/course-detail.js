const courseDetail =
  document.getElementById("courseDetail");

const params =
  new URLSearchParams(
    window.location.search
  );

const courseId =
  Number(params.get("id"));

const selectedCourse =
  courses.find(
    course => course.id === courseId
  );

if (!selectedCourse) {

  courseDetail.innerHTML = `
    <div class="course-detail-card">

      <h2>Course Not Found</h2>

      <a
        href="courses.html"
        class="back-link"
      >
        Back to Courses
      </a>

    </div>
  `;

} else {

  courseDetail.innerHTML = `
<div class="course-detail-card">

  <div class="course-image-wrapper">
    <img src="${selectedCourse.thumbnail}" alt="${selectedCourse.title}">
  </div>

  <div class="course-content">

    <h1 class="course-title">${selectedCourse.title}</h1>

    <div class="course-meta">
      <span class="badge">${selectedCourse.category}</span>
      <span class="price">${selectedCourse.price}</span>
    </div>

    <p class="course-instructor">
      Instructor: <strong>${selectedCourse.instructor}</strong>
    </p>

    <p class="course-description">
      ${selectedCourse.description}
    </p>

    <button class="enroll-btn" id="enrollBtn">
      Enroll Now
    </button>

    <div id="message"></div>

    <a href="courses.html" class="back-link">
      ← Back to Courses
    </a>

  </div>

</div>
`;
  document
    .getElementById("enrollBtn")
    .addEventListener("click", () => {

      document
        .getElementById("message")
        .innerHTML = `
          <div class="success-message">
            Successfully enrolled in the course!
          </div>
        `;
    });
}