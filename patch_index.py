
import sys

def patch_file(filename, patches):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for target, replacement in patches:
        if target not in content:
            print(f"FAILED: target not found: {target}")
            continue
        content = content.replace(target, replacement, 1)
        print(f"SUCCESS: replaced {target[:30]}...")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

patches = [
    (
        "<h2>An <span class=\"gradient-text\">Unforgettable</span> Retreat</h2>\n        <p>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.</p>",
        "<h2>An <span class=\"gradient-text\">Unforgettable</span> Retreat</h2>\n        <p>Every detail at Bali has been thoughtfully crafted to offer an experience that is wholly Balinese and utterly transformative.</p>\n        <div class=\"reveal reveal-delay-2\" style=\"margin: 40px auto 0; max-width: 1000px; border: var(--border-gold); padding: 8px; background: var(--secondary-08);\">\n          <img src=\"https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80\" alt=\"Resort Panorama\" style=\"width:100%; height:450px; object-fit:cover; display:block;\"/>\n        </div>"
    ),
    (
        "<h2>Words from Our <span class=\"gradient-text\">Beloved Guests</span></h2>\n        <p>Thousands of souls have found their sanctuary here. We humbly share a few of their stories.</p>",
        "<h2>Words from Our <span class=\"gradient-text\">Beloved Guests</span></h2>\n        <p>Thousands of souls have found their sanctuary here. We humbly share a few of their stories.</p>\n        <div class=\"reveal reveal-delay-2\" style=\"margin: 40px auto 0; max-width: 800px; padding: 20px 0;\">\n          <img src=\"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80\" alt=\"Spa Ritual\" style=\"width:100%; height:300px; object-fit:cover; border-radius: 2px; border: 1px solid var(--secondary-15);\"/>\n        </div>"
    ),
    (
        "    .cta-section::before {\n      content:'';\n      position:absolute;inset:0;\n      background: linear-gradient(135deg, rgba(26,18,8,0.88), rgba(92,122,90,0.4), rgba(26,18,8,0.88));\n    }",
        "    .cta-section::before {\n      content:'';\n      position:absolute;inset:0;\n      background: linear-gradient(135deg, rgba(26,18,8,0.88), rgba(92,122,90,0.4), rgba(26,18,8,0.88));\n    }\n    .cta-section {\n      --text-light: #ffffff !important;\n      --text-muted: #f1f1f1 !important;\n      --text-dim: #e5e5e5 !important;\n    }\n    .cta-section h2 { color: var(--text-light) !important; }\n    .cta-section p { color: var(--text-muted) !important; }\n    .cta-section .script-text { color: var(--secondary); }"
    )
]

patch_file('index.html', patches)
