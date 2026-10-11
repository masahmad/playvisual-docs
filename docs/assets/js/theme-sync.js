// Reads ?palette=slate|default from the URL and applies it to MkDocs Material.
// Used when the docs are embedded in an iframe from the admin app so the theme
// matches the admin app's current colour scheme.
(function () {
  var palette = new URLSearchParams(location.search).get('palette');
  if (palette !== 'slate' && palette !== 'default') return;

  // Store the preference so MkDocs Material's toggle reflects the right state.
  try {
    localStorage.setItem('__palette', JSON.stringify({ index: palette === 'slate' ? 1 : 0 }));
  } catch (e) {}

  // Apply immediately once the body is available.
  function applyScheme() {
    if (document.body) {
      document.body.setAttribute('data-md-color-scheme', palette);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyScheme);
  } else {
    applyScheme();
  }
}());
