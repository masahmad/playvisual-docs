// Theme sync for PlayVisual admin app iframe embedding.
//
// Two mechanisms:
//   1. URL param ?palette=slate|default  — sets scheme on standalone open (no storage restrictions)
//   2. postMessage { type:'pv-palette', palette }  — used when embedded in iframe (bypasses
//      cross-origin storage blocking that prevents localStorage writes in third-party iframes)

function applyPalette(palette) {
  if (palette !== 'slate' && palette !== 'default') return;
  if (document.body) {
    document.body.setAttribute('data-md-color-scheme', palette);
  }
  // Best-effort localStorage so Material's toggle button reflects the state
  try { localStorage.setItem('__palette', JSON.stringify({ index: palette === 'slate' ? 1 : 0 })); } catch (e) {}
  try { sessionStorage.setItem('__palette', JSON.stringify({ index: palette === 'slate' ? 1 : 0 })); } catch (e) {}
}

// ── Mechanism 1: URL param (standalone / new-tab) ──────────────────────────
(function () {
  var palette = new URLSearchParams(location.search).get('palette');
  if (palette) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyPalette(palette); });
    } else {
      applyPalette(palette);
    }
  }
}());

// ── Mechanism 2: postMessage (iframe embed) ────────────────────────────────
window.addEventListener('message', function (e) {
  if (!e.data || e.data.type !== 'pv-palette') return;
  applyPalette(e.data.palette);
});
