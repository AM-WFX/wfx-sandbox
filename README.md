# 🧪 Comprehensive DAP Test Site

A fully-featured, multi-page testing environment for evaluating digital adoption platforms like **WalkMe** and **Whatfix**.

## 📋 Overview

This website contains all common UI elements, patterns, and interactions found in enterprise applications. It's designed specifically for testing DAP (Digital Adoption Platform) features including:

- Element recognition and interaction
- Tooltip and walkthrough overlays
- Feature automation
- Analytics and tracking
- Cross-browser compatibility

## 🗂️ Pages & Components

### Pages (10 Total)

| Page | File | Content |
|------|------|---------|
| **Dashboard** | `index.html` | KPI cards, charts, tables, modals, alerts |
| **Forms** | `forms.html` | 30+ HTML5 input types, validation |
| **Tables** | `tables.html` | Sortable, filterable, paginated, expandable rows |
| **Users** | `user-management.html` | User lists, avatars, permissions, modals |
| **Settings** | `settings.html` | Tabbed interface, toggles, sliders, color picker |
| **Navigation** | `navigation.html` | Breadcrumbs, tabs, accordions, dropdowns, pagination, timeline |
| **Workflows** | `workflow.html` | Sales pipeline, project management, approval flows |
| **Advanced** | `advanced.html` | Rich editor, date pickers, autocomplete, tree view, kanban, calendar |
| **Responsive** | `responsive.html` | Mobile-first design, responsive grids, touch-friendly elements |
| **Dynamic** | `dynamic.html` | Loading states, skeleton screens, AJAX, empty/error states |

### HTML5 Input Types (30+)

- Text, email, password, phone, URL, search
- Number, range
- Date, time, datetime-local, month, week
- Color
- File (single & multiple)
- Select (dropdown & multi-select)
- Checkbox & radio buttons
- Textarea

### UI Components (50+)

- Buttons (primary, secondary, danger, outline, sizes)
- Cards & containers
- Modals & overlays
- Forms & input validation
- Tables (sortable, filterable, paginated)
- Progress bars
- Badges & tags
- Alerts & notifications
- Tabs & accordions
- Dropdowns & popovers
- Tooltips
- Breadcrumbs & pagination
- Timelines
- Star ratings
- Avatars
- Loading spinners
- Skeleton screens
- Empty & error states
- Toggle switches
- And more!

## 🚀 Getting Started

### Option 1: Deploy to GitHub Pages

1. **Fork this repository** or create a new repository
2. **Enable GitHub Pages** in repository settings
3. **Set source to main branch**
4. **Access your site at** `https://yourusername.github.io/your-repo-name/`

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dap-test-site
   ```

2. **Start a local server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (with http-server)
   npx http-server
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`

### Option 3: Direct File Access

Simply open `index.html` in your web browser. All pages are standalone and don't require a server.

## 📁 File Structure

```
dap-test-site/
├── index.html              # Dashboard home page
├── forms.html              # Form elements page
├── tables.html             # Data tables page
├── user-management.html    # User management page
├── settings.html           # Settings with tabs
├── navigation.html         # Navigation patterns
├── workflow.html           # Real-world workflows
├── advanced.html           # Advanced components
├── responsive.html         # Responsive design page
├── dynamic.html            # Dynamic content & loading states
├── styles.css              # Main stylesheet
├── responsive.css          # Responsive design styles
├── components.css          # Component-specific styles
├── main.js                 # Core JavaScript functionality
└── README.md               # This file
```

## 🎨 Features

### Design System

- **Color palette**: Primary, secondary, success, warning, danger, info
- **Typography**: Semantic HTML with responsive font sizes
- **Spacing**: Consistent margin and padding utilities
- **Responsive**: Mobile-first approach with breakpoints at 480px, 768px, 1024px

### Interactive Elements

- Modal dialogs with triggers and close handlers
- Form validation
- Tab switching
- Accordion expanding/collapsing
- Dropdown menus
- Sortable tables
- Filterable tables
- Pagination
- Real-time alerts

### JavaScript Utilities

```javascript
// Available in DAPTest namespace
DAPTest.init()                    // Initialize all interactions
DAPTest.openModal(modalId)        // Open a modal
DAPTest.closeModal(modalId)       // Close a modal
DAPTest.showAlert(type, message)  // Show alert notification

// Helper functions
sortTable(tableId, columnIndex)   // Sort table by column
filterTable(tableId, searchTerm)  // Filter table rows
paginate(items, page, perPage)    // Paginate array
validateEmail(email)              // Email validation
validatePhone(phone)              // Phone validation
validateUrl(url)                  // URL validation
```

## 🎯 Use Cases

### For Testing DAPs

1. **Element Recognition**: Test if your DAP can identify all input types and buttons
2. **Interaction Capture**: Verify tooltips and walkthroughs trigger on correct elements
3. **Form Handling**: Test form field guidance and validation interactions
4. **Navigation**: Test breadcrumb, tab, and menu guidance
5. **Dynamic Content**: Test handling of AJAX-loaded elements
6. **Responsive**: Test mobile and tablet experiences

### For Training

- Onboard new team members to DAP capabilities
- Demonstrate best practices for guidance creation
- Show various interaction patterns
- Test content before deploying to production

### For Demos

- Showcase DAP features to stakeholders
- Run product demos with consistent content
- Test different guidance scenarios

## 📊 Statistics

- **10 HTML Pages**
- **50+ UI Components**
- **30+ Input Types**
- **500+ Lines of CSS** (main styles)
- **380+ Lines of CSS** (responsive styles)
- **580+ Lines of CSS** (component styles)
- **530+ Lines of JavaScript** (utilities & interactions)
- **Fully Responsive** (mobile to desktop)
- **Zero Dependencies** (pure HTML/CSS/JS)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

| Device | Width | Columns |
|--------|-------|---------|
| Mobile | < 480px | 1 |
| Small Tablet | 480px - 768px | 1 |
| Tablet | 768px - 1024px | 2 |
| Desktop | > 1024px | 3-4 |

## 🎓 Testing Tips

### For WalkMe Testing

1. Focus on **element ID and class selectors** for reliable identification
2. Test **dynamic element recognition** on ajax-loaded content
3. Verify **modal overlay handling**
4. Check **form field targeting**
5. Test **table row and cell selection**

### For Whatfix Testing

1. Use **Smart Walk-Thrus** on multi-step processes (workflow page)
2. Create **tooltips** for all input field types (forms page)
3. Test **automation** on buttons and links (dashboard page)
4. Verify **analytics tracking** across all elements
5. Test **segmentation** based on page and element visibility

## 🚀 Deployment

### GitHub Pages (Recommended for Easy Sharing)

```bash
git add .
git commit -m "Add DAP test site"
git push origin main
```

Visit your GitHub repository settings → Pages → Enable GitHub Pages

### Other Hosting Options

- Netlify (drag & drop deployment)
- Vercel (free static hosting)
- AWS S3 (with CloudFront)
- Azure Static Web Apps
- Any web server (Apache, Nginx)

## 📝 Customization

### Adding New Pages

1. Create new HTML file (e.g., `custom-page.html`)
2. Copy header structure from existing pages
3. Add navigation link in sidebar
4. Link stylesheets: `styles.css`, `responsive.css`, `components.css`
5. Include `main.js` at bottom

### Modifying Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --success: #16a34a;
  /* ... etc */
}
```

### Adding Components

Add custom CSS to `components.css` and HTML to any page using provided classes.

## 📄 License

This project is open source and available for educational and commercial use.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this test site.

## 📞 Support

For issues or questions:
1. Check existing documentation
2. Review the page source code
3. Test in different browsers
4. Verify responsive design on mobile

---

**Last Updated**: 2024
**Estimated Development Time**: 8-10 hours
**Lines of Code**: 4,000+
