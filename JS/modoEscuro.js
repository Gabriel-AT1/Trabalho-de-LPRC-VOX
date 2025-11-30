   document.addEventListener('DOMContentLoaded', function () {
      const btn = document.getElementById('darkModeBtn');

      const saved = localStorage.getItem('vox-darkmode');

      // Se estiver salvo como "on", ativa o dark-mode e marca o checkbox
      if (saved === 'on') {
        document.body.classList.add('dark-mode');
        btn.checked = true; // ESSENCIAL!
      }

      btn.addEventListener('click', function () {
        const dark = document.body.classList.toggle('dark-mode');

        if (dark) {
          localStorage.setItem('vox-darkmode', 'on');
        } else {
          localStorage.setItem('vox-darkmode', 'off');
        }
      });
    });