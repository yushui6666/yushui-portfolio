const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.getElementById('results').textContent = `显示 ${count} 个项目`;
}));
