# Public Notice Components

This folder contains components for displaying the LASHMA public notice about fake ILERA EKO registration links.

## Components

### 1. PublicNoticeModal (Currently Active)
**Location:** `PublicNoticeModal.jsx`

A full-screen modal that appears when users visit the site. This is the **most prominent** option.

**Features:**
- Full-screen overlay with backdrop
- Displays the official notice image
- Complete warning text
- "I Understand" button
- Dismissible with session storage
- Mobile responsive

**Usage:** Already integrated in `Layout.jsx`

---

### 2. PublicNoticeBannerSimple
**Location:** `PublicNoticeBannerSimple.jsx`

A collapsible top banner with expandable details.

**Features:**
- Fixed top banner
- Animated warning icon
- Expandable details section
- Less intrusive than modal
- Dismissible with session storage
- Mobile responsive

**To Use:** Replace in `Layout.jsx`:
```jsx
import PublicNoticeBannerSimple from '../PublicNotice/PublicNoticeBannerSimple';
// Then use: <PublicNoticeBannerSimple />
```

---

### 3. PublicNoticeBanner
**Location:** `PublicNoticeBanner.jsx`

A full-content top banner (most detailed, always visible until dismissed).

**Features:**
- Fixed top banner
- All content visible immediately
- Most detailed information
- Dismissible with session storage
- Mobile responsive

**To Use:** Replace in `Layout.jsx`:
```jsx
import PublicNoticeBanner from '../PublicNotice/PublicNoticeBanner';
// Then use: <PublicNoticeBanner />
```

---

## Switching Between Components

In `src/Components/Layout/Layout.jsx`, change the import and component:

```jsx
// Option 1: Modal (Current - Most Prominent)
import PublicNoticeModal from '../PublicNotice/PublicNoticeModal';
<PublicNoticeModal />

// Option 2: Simple Banner (Collapsible)
import PublicNoticeBannerSimple from '../PublicNotice/PublicNoticeBannerSimple';
<PublicNoticeBannerSimple />

// Option 3: Full Banner (All Details Visible)
import PublicNoticeBanner from '../PublicNotice/PublicNoticeBanner';
<PublicNoticeBanner />
```

## Session Storage

All components use `sessionStorage` to remember if the user dismissed the notice:
- **Modal:** `publicNoticeModalDismissed`
- **Simple Banner:** `publicNoticeBannerDismissed`
- **Full Banner:** `publicNoticeDismissed`

The notice will reappear when the user starts a new browser session.

## Images

The notice image is located at: `src/assets/images/notice2.jpg`

To change the image, update the import in the component files.
