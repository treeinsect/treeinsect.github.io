const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projects.forEach(project => {
      const tags = project.getAttribute('data-tags');
      if (filter === 'all' || tags.includes(filter)) {
        project.classList.remove('hidden');
      } else {
        project.classList.add('hidden');
      }
    });
  });
});
