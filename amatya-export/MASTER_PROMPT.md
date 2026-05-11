# MASTER PROMPT — "Amatya Exports"

**Generate a complete, production-ready single-file modern web application for an international turmeric export/import management system.**

---

## EXECUTIVE SUMMARY

Build **Amatya Exports**, a premium SaaS-style web application for managing turmeric exports, imports, inventory, and international buyer relationships. The entire application must be contained in a **single HTML file** with embedded CSS and JavaScript. It should feel enterprise-grade, with premium UI/UX comparable to Stripe, Linear, and Notion. Easy deployment on Vercel or GitHub Pages.

---

## TECHNOLOGY STACK

**REQUIRED:**
- **HTML5**: Single-file application (no separate files)
- **TailwindCSS**: All styling via CDN for production build
- **Vanilla JavaScript**: No frameworks (React, Vue, etc.)
- **SQLite with WASM**: Browser-based SQLite for persistent data, or IndexedDB fallback
- **Chart.js**: For analytics and visualizations
- **No build step required**: Deploy the single HTML file directly

**Deployment Targets:**
- Vercel (serverless)
- GitHub Pages (static)
- Any static hosting

---

## BRANDING & VISUAL IDENTITY

### Company Profile
- **Name**: Amatya Exports
- **Industry**: International turmeric & spice trading
- **Market**: Premium, enterprise-grade export management
- **Target Users**: Export managers, logistics coordinators, business owners

### Color Palette
```
Primary Gold:        #DFAF2B  (Turmeric-inspired)
Dark Charcoal:       #111111  (Professional, minimal)
Warm Cream:          #FFF8E7  (Luxury background)
Emerald Accent:      #0F766E  (Trust, growth)
Light Gray:          #F5F5F5  (Secondary backgrounds)
Subtle Gray:         #E5E5E5  (Borders, dividers)
Text Dark:           #1F2937  (Readability)
Text Muted:          #6B7280  (Secondary content)
```

### Typography
- **Primary Font**: Inter (via Google Fonts CDN)
- **Secondary Font**: Poppins (via Google Fonts CDN)
- **Letter Spacing**: Tight (luxury feel)
- **Line Height**: 1.5-1.6 (readability)

### Design System
- **Border Radius**: `rounded-2xl` (TailwindCSS) for cards, `rounded-lg` for inputs
- **Shadows**: Subtle glassmorphism with soft shadows
- **Spacing**: 4px grid system
- **Animations**: Smooth transitions (200-300ms), hover effects
- **Cards**: 2xl radius with 1px borders, soft backdrop blur
- **Glassmorphism**: Semi-transparent backgrounds with blur effects

---

## APPLICATION ARCHITECTURE

### Single File Structure
```
index.html
└─ <head>
   ├─ Meta tags
   ├─ Font imports (Google Fonts)
   ├─ TailwindCSS CDN
   └─ Favicons
└─ <body>
   └─ <div id="app">
      ├─ Navigation (Sidebar + Mobile Menu)
      ├─ Main Content Area
      ├─ Modal containers
      └─ Toast notification container
└─ <script>
   ├─ SQLite WASM initialization
   ├─ Database schema
   ├─ Core application state
   ├─ UI components (functions)
   ├─ Event handlers
   ├─ Data management (CRUD)
   └─ Chart.js initialization
└─ <style> (Tailwind overrides if needed)
```

### Database Schema (SQLite)

```sql
-- Exports
CREATE TABLE exports (
  id TEXT PRIMARY KEY,
  buyerId TEXT NOT NULL,
  quantity REAL NOT NULL,
  turmericType TEXT NOT NULL,
  shipmentDate TEXT NOT NULL,
  port TEXT NOT NULL,
  containerStatus TEXT DEFAULT 'pending',
  paymentStatus TEXT DEFAULT 'pending',
  profitMargin REAL DEFAULT 0,
  revenue REAL NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- Imports
CREATE TABLE imports (
  id TEXT PRIMARY KEY,
  vendorName TEXT NOT NULL,
  itemType TEXT NOT NULL,
  importCost REAL NOT NULL,
  eta TEXT NOT NULL,
  shipmentTracking TEXT,
  customsStatus TEXT DEFAULT 'pending',
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- Inventory
CREATE TABLE inventory (
  id TEXT PRIMARY KEY,
  itemName TEXT NOT NULL,
  quantity REAL NOT NULL,
  unit TEXT DEFAULT 'kg',
  warehouseLocation TEXT,
  lastRestocked TEXT,
  reorderLevel REAL DEFAULT 100,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- Buyers
CREATE TABLE buyers (
  id TEXT PRIMARY KEY,
  companyName TEXT NOT NULL,
  country TEXT NOT NULL,
  contactPerson TEXT,
  email TEXT,
  phone TEXT,
  totalOrders INTEGER DEFAULT 0,
  totalRevenue REAL DEFAULT 0,
  trustScore REAL DEFAULT 85,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- Documents
CREATE TABLE documents (
  id TEXT PRIMARY KEY,
  fileName TEXT NOT NULL,
  fileType TEXT NOT NULL,
  fileContent BLOB,
  documentType TEXT NOT NULL,
  createdAt TEXT NOT NULL
);

-- Analytics (Aggregated)
CREATE TABLE analytics (
  id TEXT PRIMARY KEY,
  month TEXT NOT NULL,
  totalRevenue REAL DEFAULT 0,
  exportVolume REAL DEFAULT 0,
  exportCount INTEGER DEFAULT 0,
  topCountry TEXT,
  avgProfitMargin REAL DEFAULT 0
);
```

---

## CORE FEATURES (DETAILED)

### 1. BEAUTIFUL DASHBOARD (Primary View)

**Layout**: Grid-based with responsive cards

**Top Stats Cards** (6 cards in 3x2 grid on desktop, 1x6 on mobile):
- **Total Exports**: Large number + 📦 icon + mini sparkline chart + "↑ 12%" trend
- **Monthly Revenue**: Currency value + 💰 icon + mini line chart + "↑ 8.5%" trend
- **Pending Shipments**: Count + 🚢 icon + status indicators + animated pulse on urgent items
- **Countries Exported To**: Count + 🌍 icon + flag display + top 3 countries
- **Active Buyers**: Count + 👥 icon + mini avatars + trust score average
- **Inventory Stock**: Status percentage + 📊 icon + animated progress bar + low stock warning

**Card Features**:
- Hover effect: Scale 1.02, shadow elevation
- Mini sparkline graphs (Chart.js)
- Animated counters (count from 0 to value)
- Status badges (Green=good, Yellow=warning, Red=critical)
- Quick action buttons

**Recent Activity Section**:
- Latest 5 exports with status badges
- Timeline animation
- Quick edit/delete buttons

**Quick Actions Bar**:
- "New Export" button
- "View All" links to each section

---

### 2. EXPORT MANAGEMENT

**Features**:
- **Advanced Table** with sortable columns, search, and filtering
- **Add Export Modal**: Form with validation
- **Edit Export Modal**: Pre-filled form
- **Delete Export**: Confirmation modal

**Table Columns**:
| Export ID | Buyer | Country | Qty (kg) | Type | Ship Date | Status | Payment | Profit % | Actions |

**Form Fields**:
- Buyer Name (autocomplete from buyers table)
- Country (dropdown with flags)
- Quantity (numeric input with kg unit)
- Turmeric Type: Finger, Powder, Whole, Organic
- Shipment Date (date picker)
- Port (dropdown: JNPT Mumbai, Chennai Port, etc.)
- Container Status (pending, in-transit, arrived, delivered)
- Payment Status (pending, partial, completed)
- Profit Margin (calculated or manual %)

**Filters**:
- By Country
- By Status
- By Payment Status
- Date range picker

**Bulk Actions**:
- Export to CSV
- Export to PDF
- Mark as shipped (batch)

**Analytics at bottom**:
- Total exports this month
- Total revenue this month
- Average profit margin

---

### 3. IMPORT MANAGEMENT

**Track incoming materials**:
- Packaging materials
- Machinery
- Processing chemicals
- Farming inputs

**Table Columns**:
| Vendor | Item | Cost | ETA | Tracking | Customs Status | Actions |

**Form Fields**:
- Vendor Name (text input)
- Item Type (dropdown)
- Import Cost (currency)
- ETA (date picker)
- Shipment Tracking Number (text)
- Customs Status (pending, cleared, rejected)

**Features**:
- Status badges
- Cost breakdown
- ETA timeline visualization
- Customs documentation tracker

---

### 4. INVENTORY SYSTEM

**Smart inventory tracking with predictions**:

**Inventory Items** (5 pre-loaded):
1. Raw Turmeric - Quantity tracker
2. Processed Turmeric - Quantity tracker
3. Turmeric Powder - Quantity tracker
4. Organic Turmeric - Quantity tracker
5. Finger Turmeric - Quantity tracker

**Features for each item**:
- Current stock quantity
- Warehouse location (Warehouse A, B, C)
- Reorder level threshold
- Low stock alert (if qty < reorder level)
- Last restocked date
- Stock status badge (In Stock, Low Stock, Critical)

**Visualizations**:
- Animated progress bar for each item (colored by status)
- Stock level gauge chart
- Inventory trend sparklines

**Smart Alerts**:
- "⚠️ Raw Turmeric: 150kg remaining. May run out in 8 days."
- Auto-calculate based on export velocity
- Toast notifications for critical levels

**Batch Operations**:
- Adjust stock levels
- Mark as reordered
- Export inventory report

---

### 5. GLOBAL ANALYTICS DASHBOARD

**Premium analytics section** with multiple interactive charts:

**Charts to display**:
1. **Monthly Revenue Trend** (Line chart): 12-month history with animation
2. **Export Volume by Country** (Bar chart): Top 8 countries
3. **Export Quantity Over Time** (Area chart): Last 6 months, filled area
4. **Profit Margin Distribution** (Doughnut): By export type
5. **Shipment Status Overview** (Pie): Pending, In-Transit, Delivered
6. **Top 5 Buyers by Revenue** (Horizontal bar)
7. **Country-wise Export Map** (Table with flags and metrics)
8. **Revenue vs Profit Comparison** (Grouped bar)

**Features**:
- Responsive grid layout (2 charts per row on desktop)
- Interactive legends (click to show/hide series)
- Data point tooltips
- Smooth animations on load
- Export chart as PNG button
- Date range selector (Last 30 days, 3 months, 6 months, 1 year, All)

**Key Metrics Display**:
- Total Revenue (All time)
- Average Profit Margin
- Total Exports Count
- Most Profitable Country
- Top Buyer (by revenue)

---

### 6. BUYER & CLIENT MANAGEMENT

**International buyer profiles**:

**Buyer Card Grid** (3 cards per row, responsive):
- Company name (bold)
- Country with flag emoji
- Contact person name
- Email (clickable mailto:)
- Phone (clickable tel:)
- Total orders count
- Total revenue value
- Trust score (0-100, visualized as colored badge)
- Last order date
- Quick action buttons (Edit, View orders, Phone, Email, Delete)

**Buyer Profile Modal**:
- Detailed information
- Order history table
- Payment history table
- Communication log
- Add order / Add payment buttons

**Features**:
- Search by company name or country
- Filter by country
- Sort by revenue, orders, or trust score
- Add new buyer form (modal)
- Edit buyer details
- Delete buyer (with confirmation)

**Buyer form fields**:
- Company name
- Country (searchable dropdown with flags)
- Contact person
- Email (validation)
- Phone (validation)
- Initial trust score

---

### 7. DOCUMENT MANAGEMENT

**Centralized document storage**:

**Document Upload Section**:
- Drag & drop upload area (beautiful UI)
- Or click to browse files
- File type indicators
- Progress bar during upload

**Document Types**:
- Invoices
- Shipping Bills
- Certificates (origin, quality)
- GST Documents
- Customs Forms
- Compliance Docs

**Document Browser Grid**:
- Document thumbnail/icon
- File name (editable)
- Type badge
- Upload date
- File size
- Download button
- Delete button
- Preview modal (for PDFs/images)

**Features**:
- Search documents by name or type
- Filter by document type
- Filter by date range
- Bulk download
- Auto-organize by type

---

### 8. AI INSIGHTS PANEL

**Futuristic AI-powered suggestions** (Pre-generated realistic insights):

**Display Format**: Animated cards with icons and gradient backgrounds

**Sample insights** (rotate through realistic data):
1. 🇩🇪 "Germany demand increased 18% this month. Consider increasing exports."
2. ⏰ "Raw turmeric stock may deplete in 12 days. Reorder recommended."
3. 📈 "Profit margins highest in UAE exports (22.5%). Focus on UAE market."
4. 🌱 "Organic turmeric trending 35% higher in Europe. Stock up."
5. 💰 "Your best buyer: Al Reef Trading. Next order expected in 3 days."
6. 🚀 "Shipment delay alert: Container #CNT-2024-089 delayed by 2 days."
7. 🎯 "Seasonal trend: Q2 typically sees 40% higher exports. Prepare inventory."

**Visual Design**:
- Glass morphism cards with gradient borders
- Animated icons (fade in, slide)
- Soft glow effects
- Refresh button to cycle through insights
- Timestamp ("2 minutes ago")

---

### 9. MODERN NAVIGATION

**Sidebar (Desktop)** + **Mobile Menu (Mobile)**:

**Sidebar Features**:
- Amatya Exports logo at top
- Navigation items:
  - 🏠 Dashboard
  - 📤 Exports
  - 📥 Imports
  - 📦 Inventory
  - 👥 Buyers
  - 📊 Analytics
  - 📄 Documents
  - ✨ AI Insights
  - ⚙️ Settings

**Sidebar Styling**:
- Active tab: Gold background (#DFAF2B) with rounded indicator
- Smooth transition animation (200ms)
- Hover effect: Light background
- Icons from a simple icon library (emoji or SVG)
- Collapsible on mobile (hamburger menu)

**Mobile View**:
- Hamburger menu (top-left)
- Responsive layout stacks vertically
- Bottom navigation (alternative option)

**Header/Top Bar**:
- Page title (dynamic based on current section)
- Search bar (searches across all data)
- User profile dropdown (Settings, Logout)
- Notifications bell (toast preview)
- Dark/Light mode toggle

---

### 10. SETTINGS PANEL

**User preferences**:
- **Dark/Light Mode**: Toggle button, saved to localStorage
- **Currency Selection**: USD, EUR, INR, AED (dropdown)
- **Date Format**: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD
- **Export Theme**: Default, Export PDF as, CSV format options
- **Notification Toggles**:
  - Low stock alerts
  - Payment reminders
  - Shipment updates
  - New buyer inquiries
- **Company Profile**: Edit company details
- **Database**: Export/Import backup (JSON)
- **About**: App version, Help, Documentation links

---

## ADVANCED UI/UX REQUIREMENTS

### Visual Effects
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Floating Gradients**: Subtle moving gradient backgrounds
- **Smooth Animations**: All transitions 200-300ms ease-in-out
- **Skeleton Loaders**: While data loads
- **Toast Notifications**: Success, error, info, warning (auto-dismiss after 4s)
- **Loading States**: Pulsing dots, animated bars
- **Hover Effects**: Subtle scale (1.02), shadow elevation
- **Micro-interactions**: Button press feedback, input focus states

### Responsive Design
- **Desktop** (1920px+): Full sidebar + content
- **Tablet** (768-1024px): Collapsible sidebar, 2-column grids
- **Mobile** (375-767px): Full-width stacks, bottom nav or hamburger menu

### Buttons & Forms
- **Primary Button**: Gold background, white text, rounded-lg
- **Secondary Button**: Outline style, gold border
- **Danger Button**: Red background for delete actions
- **Disabled State**: Greyed out, cursor-not-allowed
- **Input Fields**: Subtle borders, focus ring (gold), rounded-lg
- **Textarea**: Resizable, auto-expand on input
- **Form Validation**: Real-time, inline error messages (red text)

### Data Tables
- **Sortable headers**: Click to sort ascending/descending
- **Hover rows**: Light background highlight
- **Alternating row colors**: Subtle gray for readability
- **Pagination**: 10/25/50 items per page
- **Select all**: Checkbox for bulk operations

### Modals & Overlays
- **Backdrop**: Semi-transparent dark overlay
- **Modal**: Centered card, smooth fade-in animation
- **Close button**: X button, top-right corner
- **Form modals**: Clean layout, submit button at bottom

### Notifications
- **Toast**: Bottom-right corner, auto-dismiss
- **Types**: Success (green), Error (red), Info (blue), Warning (orange)
- **Icons**: Checkmark, X, info icon, warning icon

---

## REALISTIC SAMPLE DATA

Pre-load the database with realistic turmeric export data:

### Buyers Table
```javascript
[
  {
    id: "buyer-001",
    companyName: "Al Reef Trading",
    country: "🇦🇪 UAE",
    contactPerson: "Ahmed Al-Mansouri",
    email: "ahmed@alreef.ae",
    phone: "+971-4-xxx-xxxx",
    totalOrders: 24,
    totalRevenue: 450000,
    trustScore: 95
  },
  {
    id: "buyer-002",
    companyName: "Berlin Spice AG",
    country: "🇩🇪 Germany",
    contactPerson: "Hans Mueller",
    email: "hans@berlinspice.de",
    phone: "+49-30-xxx-xxxx",
    totalOrders: 18,
    totalRevenue: 380000,
    trustScore: 92
  },
  {
    id: "buyer-003",
    companyName: "American Imports Inc",
    country: "🇺🇸 USA",
    contactPerson: "John Smith",
    email: "john@americanimports.com",
    phone: "+1-212-xxx-xxxx",
    totalOrders: 15,
    totalRevenue: 320000,
    trustScore: 88
  },
  {
    id: "buyer-004",
    companyName: "Singapore Trade Co.",
    country: "🇸🇬 Singapore",
    contactPerson: "Chen Wei",
    email: "chen@singtrade.sg",
    phone: "+65-6xxx-xxxx",
    totalOrders: 12,
    totalRevenue: 290000,
    trustScore: 90
  },
  {
    id: "buyer-005",
    companyName: "UK Flavours Ltd",
    country: "🇬🇧 UK",
    contactPerson: "Elizabeth Brown",
    email: "elizabeth@ukflavours.uk",
    phone: "+44-20-xxxx-xxxx",
    totalOrders: 10,
    totalRevenue: 210000,
    trustScore: 85
  }
]
```

### Exports Table (Sample 10 records)
```javascript
[
  {
    id: "EXP-2024-001",
    buyerId: "buyer-001",
    quantity: 5000,
    turmericType: "Powder",
    shipmentDate: "2024-05-01",
    port: "JNPT Mumbai",
    containerStatus: "delivered",
    paymentStatus: "completed",
    profitMargin: 18.5,
    revenue: 85000
  },
  {
    id: "EXP-2024-002",
    buyerId: "buyer-002",
    quantity: 3500,
    turmericType: "Finger",
    shipmentDate: "2024-05-05",
    port: "Chennai Port",
    containerStatus: "in-transit",
    paymentStatus: "partial",
    profitMargin: 22.3,
    revenue: 78000
  },
  // ... 8 more realistic records across different countries
]
```

---

## IMPORTANT TECHNICAL CONSIDERATIONS

### Database Implementation
- **SQLite WASM**: Use `sql.js` library for browser-based SQLite
- **CDN Link**: `https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/sql-wasm.js`
- **Data Persistence**: 
  - Use IndexedDB to store SQLite database binary
  - Or use localStorage for smaller datasets
  - Auto-save on every database mutation

### Chart.js Configuration
- **CDN Link**: `https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.min.js`
- **Theme**: Automatically match dark/light mode
- **Animations**: Smooth animations with easing
- **Responsive**: Use `responsive: true, maintainAspectRatio: false`

### Performance Optimization
- **Lazy load charts**: Only render when section is visible
- **Debounce search**: 300ms delay on input
- **Pagination**: Only render visible rows
- **CSS**: TailwindCSS is highly optimized via CDN
- **Bundle Size**: Single file < 500KB (reasonable for a complex app)

### Cross-Browser Compatibility
- Works on Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers: iOS Safari 14+, Chrome Android 90+

---

## DEPLOYMENT INSTRUCTIONS

### Option 1: Vercel Deployment (Recommended)

**Steps**:
1. Create a `vercel.json` configuration file:
```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "framework": "html"
}
```

2. Commit the HTML file to a GitHub repository:
```bash
git init
git add index.html
git commit -m "Initial Amatya Exports deployment"
git push origin main
```

3. In Vercel Dashboard:
   - Click "New Project"
   - Import your GitHub repository
   - Framework: "Other" (HTML)
   - Deploy

4. Your app is live at: `your-project.vercel.app`

**Data Persistence Note**: 
- localStorage/IndexedDB data persists per browser
- To enable multi-device sync, integrate optional cloud backend (Firebase, Supabase)

---

### Option 2: GitHub Pages Deployment

**Steps**:
1. Create repository: `username.github.io`

2. Add the HTML file:
```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
cp index.html .
git add index.html
git commit -m "Add Amatya Exports"
git push origin main
```

3. Your app is live at: `https://username.github.io`

**Note**: GitHub Pages serves static files. Data is stored locally in browser (localStorage/IndexedDB).

---

### Option 3: Simple HTTP Server (Local Testing)

**Python 3**:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js**:
```bash
npx http-server
```

---

## KEY IMPLEMENTATION GUIDELINES

### Code Organization in Single File
```javascript
// ============================================
// 1. INITIALIZATION & SETUP
// ============================================
const APP_NAME = "Amatya Exports";
const APP_VERSION = "1.0.0";

// ============================================
// 2. DATABASE SETUP (SQLite + sql.js)
// ============================================
let db = null;
async function initDB() { ... }

// ============================================
// 3. UI STATE MANAGEMENT
// ============================================
const state = {
  currentPage: 'dashboard',
  darkMode: false,
  currency: 'USD',
  filters: {}
};

// ============================================
// 4. DOM MANIPULATION & RENDERING
// ============================================
function renderDashboard() { ... }
function renderExports() { ... }
// ... other render functions

// ============================================
// 5. EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => { ... });

// ============================================
// 6. DATA OPERATIONS (CRUD)
// ============================================
async function addExport(data) { ... }
async function getExports() { ... }
async function updateExport(id, data) { ... }
async function deleteExport(id) { ... }

// ============================================
// 7. UTILITIES & HELPERS
// ============================================
function formatCurrency(amount) { ... }
function formatDate(date) { ... }
```

### CSS Approach
- Use TailwindCSS via CDN for all styling
- Minimal custom CSS (only for complex animations)
- CSS variables for color theme switching

### No External Dependencies (Except CDN)
- TailwindCSS (CDN)
- Chart.js (CDN)
- SQL.js (CDN)
- Google Fonts (CDN)
- No npm, webpack, or build tools needed

---

## QUALITY CHECKLIST

Before final delivery:

- [ ] All 10 features fully functional
- [ ] Dashboard displays real-time data from SQLite
- [ ] Charts render smoothly and responsively
- [ ] Data persists after page reload
- [ ] Mobile responsive on all screen sizes
- [ ] Dark/Light mode toggle works
- [ ] All CRUD operations working (Add, Edit, Delete)
- [ ] Form validation with error messages
- [ ] Toast notifications display correctly
- [ ] Search and filtering functional
- [ ] Export to CSV works
- [ ] UI matches Stripe/Linear/Notion aesthetic
- [ ] No console errors
- [ ] Load time < 3 seconds
- [ ] Accessible (proper heading hierarchy, alt text)
- [ ] All links functional (internal navigation)

---

## DELIVERABLE

**OUTPUT**: Single `index.html` file (completely self-contained)

**File should be**:
- ✅ Production-ready
- ✅ Fully functional (no placeholders)
- ✅ Responsive on all devices
- ✅ Visually premium and polished
- ✅ Ready to deploy instantly to Vercel/GitHub Pages
- ✅ Pre-loaded with realistic turmeric export data
- ✅ All 10 features working perfectly

**Additional Resources**:
- Include README.md: Setup, deployment, usage instructions
- Include deployment script (optional): `deploy.sh` for easy GitHub Pages push

---

## INSPIRATION & DESIGN REFERENCES

The app should visually compete with and draw inspiration from:

- **Stripe** (stripe.com): Minimalist, premium spacing, smooth interactions
- **Linear** (linear.app): Clean tables, sidebar nav, dark mode default
- **Notion** (notion.so): Card-based layouts, flexible views
- **Framer** (framer.com): Advanced animations, glassmorphism
- **Figma** (figma.com): Professional tools UI, dense information architecture

**Key Design Principles**:
1. **Whitespace**: Generous padding, breathing room
2. **Typography**: Bold hierarchy, premium fonts
3. **Colors**: Limited palette, consistent usage
4. **Interactions**: Smooth, purposeful animations
5. **Accessibility**: Readable contrast, keyboard navigation
6. **Responsiveness**: Fluid layouts, touch-friendly targets

---

## SUCCESS METRICS

The final app should:
- ✅ Look like an enterprise SaaS tool (not a college project)
- ✅ Impress investors and clients on first glance
- ✅ Be immediately usable without documentation
- ✅ Handle realistic business workflows smoothly
- ✅ Feel fast and responsive
- ✅ Be professionally polished in every detail

---

**END OF MASTER PROMPT**

---

## USAGE INSTRUCTIONS

**For AI Coding Models (GPT-5, Claude, Cursor, Lovable, Bolt, v0, Replit, etc.):**

1. Copy the above prompt
2. Paste into your AI coding model's chat
3. Request: *"Build the complete Amatya Exports application based on this master prompt. Generate a single index.html file with all features fully implemented."*
4. Download the generated `index.html`
5. Deploy to Vercel or GitHub Pages using the deployment instructions above

**Alternative Simple Deployment**:
- Create a GitHub repository
- Upload the `index.html` file
- Enable GitHub Pages in repository settings
- Your app is live!

---

