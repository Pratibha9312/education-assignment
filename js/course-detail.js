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

      <img
        src="${selectedCourse.thumbnail}"
        alt="${selectedCourse.title}"
      >

      <h1>${selectedCourse.title}</h1>

      <p>
        <strong>Category:</strong>
        ${selectedCourse.category}
      </p>

      <p>
        <strong>Instructor:</strong>
        ${selectedCourse.instructor}
      </p>

      <p class="price">
        ${selectedCourse.price}
      </p>

      <p>
        ${selectedCourse.description}
      </p>

      <button
        class="enroll-btn"
        id="enrollBtn"
      >
        Enroll Now
      </button>

      <div id="message"></div>

      <a
        href="courses.html"
        class="back-link"
      >
        ← Back to Courses
      </a>

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