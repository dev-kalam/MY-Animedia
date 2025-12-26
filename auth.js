// Central auth UI helpers (used across pages)
function updateAuthUI() {
  const currentUser = localStorage.getItem('currentUser') || localStorage.getItem('user');
  const authButtons = document.getElementById('auth-buttons');
  const profileButtons = document.getElementById('profile-buttons');

  if (currentUser) {
    const user = typeof currentUser === 'string' ? JSON.parse(currentUser) : currentUser;
    if (authButtons) authButtons.style.display = 'none';
    if (profileButtons) {
      profileButtons.style.display = 'flex';
      const nameSpan = document.getElementById('user-name');
      if (nameSpan) nameSpan.textContent = user.name || 'User';
    }
  } else {
    if (authButtons) authButtons.style.display = 'flex';
    if (profileButtons) profileButtons.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try { updateAuthUI(); } catch (e) { /* fail silently */ }
});

function handleLogout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('rememberMe');
  try { updateAuthUI(); } catch (e) {}
  window.location.href = 'index.html';
}

// expose to global for inline onclick handlers
window.updateAuthUI = updateAuthUI;
window.handleLogout = handleLogout;
