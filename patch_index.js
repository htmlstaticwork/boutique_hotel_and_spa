const fs = require('fs');

const filename = 'index.html';
let content = fs.readFileSync(filename, 'utf8');

const patches = [
  {
    target: "<h2>An <span class=\"gradient-text\">Unforgettable</span> Retreat</h2>\n        <p>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.</p>",
    replacement: "<h2>An <span class=\"gradient-text\">Unforgettable</span> Retreat</h2>\n        <p>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.</p>\n        <div class=\"reveal reveal-delay-2\" style=\"margin: 40px auto 32px; border: var(--border-gold); padding: 8px; background: var(--secondary-08);\">\n          <img src=\"https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80\" alt=\"Resort Panorama\" style=\"width:100%; height:450px; object-fit:cover; display:block;\"/>\n        </div>"
  },
  {
    target: "<h2>Words from Our <span class=\"gradient-text\">Beloved Guests</span></h2>\n        <p>Thousands of souls have found their sanctuary here. We humbly share a few of their stories.</p>",
    replacement: "<h2>Words from Our <span class=\"gradient-text\">Beloved Guests</span></h2>\n        <p>Thousands of souls have found their sanctuary here. We humbly share a few of their stories.</p>\n        <div class=\"reveal reveal-delay-2\" style=\"margin: 40px auto 32px; max-width: 800px; padding: 20px 0;\">\n          <img src=\"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80\" alt=\"Spa Ritual\" style=\"width:100%; height:300px; object-fit:cover; border-radius: 2px; border: 1px solid var(--secondary-15);\"/>\n        </div>"
  },
  {
    target: "background-image: url('https://images.unsplash.com/photo-1582610116397-edb72795cbb0?w=1921&q=81');\n      background-size: cover;\n      background-position: center;\n      background-attachment: fixed;\n      position: relative;\n    }\n    .cta-section::before {\n      content:'';\n      position:absolute;inset:0;\n      background: linear-gradient(135deg, rgba(26,18,8,0.88), rgba(92,122,90,0.4), rgba(26,18,8,0.88));\n    }",
    replacement: "background-image: url('https://images.unsplash.com/photo-1582610116397-edb72795cbb0?w=1920&q=80');\n      background-size: cover;\n      background-position: center;\n      background-attachment: fixed;\n      position: relative;\n    }\n    .cta-section::before {\n      content:'';\n      position:absolute;inset:0;\n      background: linear-gradient(135deg, rgba(26,18,8,0.88), rgba(92,122,90,0.4), rgba(26,18,8,0.88));\n    }\n    .cta-section {\n      --text-light: #ffffff !important;\n      --text-muted: #f5f5f5 !important;\n      --text-dim: #dddddd !important;\n      color: var(--text-light);\n    }\n    .cta-section h2 { color: var(--text-light) !important; }\n    .cta-section p { color: var(--text-muted) !important; }\n    .cta-section .script-text { color: var(--secondary); }\n    .cta-section .cta-buttons + p { color: var(--text-dim) !important; }"
  },
  {
      target: "@media (min-width: 768px) and (max-width: 1023px) {\n  .card-grid, .card-grid-2, .card-grid-3, .card-grid-4 {\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n  }\n}",
      replacement: "@media (min-width: 768px) and (max-width: 1023px) {\n  .card-grid, .card-grid-2, .card-grid-3, .card-grid-4 {\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n  }\n  /* Specific 2x2 for experiences at 768px */\n  #services .card-grid-3 {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n  }\n}"
  }
];

patches.forEach(p => {
  if (content.indexOf(p.target) === -1) {
    console.log("NOT FOUND: " + p.target.slice(0, 50));
    // Try without line breaks normalization
    const normalizedTarget = p.target.replace(/\r\n/g, '\n');
    if (content.indexOf(normalizedTarget) === -1) {
        console.log("REALLY NOT FOUND");
    } else {
        content = content.replace(normalizedTarget, p.replacement);
        console.log("SUCCESS");
    }
  } else {
    content = content.replace(p.target, p.replacement);
    console.log("SUCCESS");
  }
});

fs.writeFileSync(filename, content);
