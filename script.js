/* Render skills chips (edit the array below) */
    /* ✏️  CHANGE: Replace with your actual skills */
    const skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Git", "C++", "Linux"];
    const container = document.getElementById('skills-chips');
    skills.forEach(s => {
      const chip = document.createElement('span');
      chip.className = "px-3 py-1 bg-card text-ink text-sm rounded-full border border-ink/10";
      chip.textContent = s;
      container.appendChild(chip);
    });

    /* Scroll reveal using IntersectionObserver */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
