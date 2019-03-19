//Project Script Start
$('.project-card').on('click', function () {
  window.location.href = "ProjectManagement.html";
});
$('.overview-tab-project').on('click', function () {
  $('.outlines-project,.Schedules-project,.online-training-project,.Certification-project').addClass('hide');
  $('.overview-project').removeClass('hide');
});
$('.course-outline-tab-project').on('click', function () {
  $('.overview-project,.Certification-project,.online-training-project,.Schedules-project').addClass('hide');
  $('.outlines-project').removeClass('hide');
});
$('.schedule-tab-project').on('click', function () {
  $('.overview-project,.outlines-project,.online-training-project,.Certification-project').addClass('hide');
  $('.Schedules-project').removeClass('hide');
});
$('.certification-tab-project').on('click', function () {
  $('.overview-project,.outlines-project,.Schedules-project,.online-training-project').addClass('hide');
  $('.Certification-project').removeClass('hide');
});
$('.online-tab-project').on('click', function () {
  $('.overview-project,.Certification-project,.Schedules-project,.outlines-project').addClass('hide');
  $('.online-training-project').removeClass('hide');
});
//Project Script End
