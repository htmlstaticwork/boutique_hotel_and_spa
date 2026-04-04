const fs = require('fs');

const filename = 'index.html';
let content = fs.readFileSync(filename, 'utf8');

const t1 = '<h2>An <span class="gradient-text">Unforgettable</span> Retreat</h2>';
const r1 = t1 + '\n        <p>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.</p>\n        <div class="reveal reveal-delay-2" style="margin: 40px auto 32px; border: var(--border-gold); padding: 8px; background: var(--secondary-08);">\n          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80" alt="Resort Panorama" style="width:100%; height:450px; object-fit:cover; display:block;"/>\n        </div>';

const t2 = '<h2>Words from Our <span class="gradient-text">Beloved Guests</span></h2>';
const r2 = t2 + '\n        <p>Thousands of souls have found their sanctuary here. We humbly share a few of their stories.</p>\n        <div class="reveal reveal-delay-2" style="margin: 40px auto 32px; max-width: 800px; padding: 20px 0;">\n          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80" alt="Spa Ritual" style="width:100%; height:300px; object-fit:cover; border-radius: 2px; border: 1px solid var(--secondary-15);"/>\n        </div>';

content = content.replace(t1, r1);
content = content.replace(t2, r2);

// Remove the line added by patch script earlier if any (p+p)
content = content.replace(/\<p\>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.\<\/p\>\n\s+\<p\>Every detail at Bali/g, '<p>Every detail at Bali');

fs.writeFileSync(filename, content);
console.log("Patched headers.");
