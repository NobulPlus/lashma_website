# Design Document: LASHMA Website UI/UX Redesign

## Overview

This design document outlines a comprehensive redesign of the LASHMA website, focusing on modern UI/UX principles, improved component architecture, enhanced accessibility, and optimal performance. The redesign will transform the existing React application into a professional, user-friendly platform that effectively serves Lagos State residents seeking healthcare services.

### Key Design Goals

1. **Modern Visual Design**: Implement a clean, professional aesthetic with improved typography, spacing, and visual hierarchy
2. **Component Modularity**: Restructure the codebase with reusable, well-organized components
3. **Enhanced User Experience**: Streamline user journeys for plan enrollment, information discovery, and support access
4. **Performance Optimization**: Improve loading times, reduce bundle size, and enhance mobile performance
5. **Accessibility Compliance**: Ensure WCAG 2.1 AA compliance throughout the application

## Architecture

### Technology Stack

- **Frontend Framework**: React 18.2+ with functional components and hooks
- **Build Tool**: Vite 5.2+ for fast development and optimized production builds
- **Styling**: Tailwind CSS 3.4+ with custom design tokens and utility classes
- **Animation**: Framer Motion for smooth, performant animations
- **Routing**: React Router DOM 6.30+ with lazy loading
- **State Management**: React Context API for global state (theme, user preferences)
- **Form Handling**: React Hook Form for performant form validation
- **Icons**: Lucide React for consistent, modern iconography

### Project Structure Redesign

```
src/
├── components/
│   ├── ui/                    # Base UI components (Design System)
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── ...
│   ├── layout/                # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   └── PageLayout/
│   ├── features/              # Feature-specific components
│   │   ├── plans/
│   │   ├── hero/
│   │   ├── contact/
│   │   └── ...
│   └── shared/                # Shared utility components
├── pages/                     # Page components
├── hooks/                     # Custom React hooks
├── utils/                     # Utility functions
├── constants/                 # Constants and configuration
├── styles/                    # Global styles and theme
├── assets/                    # Images, fonts, etc.
└── services/                  # API services
```

## Components and Interfaces

### Design System Components (ui/)

#### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}
```

#### Card Component
```typescript
interface CardProps {
  variant: 'default' | 'elevated' | 'outlined';
  padding: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}
```

#### Input Component
```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'number';
  label: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}
```

### Layout Components

#### Header Component
- Sticky navigation with scroll behavior
- Mobile-responsive hamburger menu
- Search functionality
- Quick access to enrollment and contact
- Language selector (English/Yoruba support)

#### Navigation Component
- Multi-level dropdown menus
- Active state indicators
- Keyboard navigation support
- Mobile slide-out menu with smooth animations

#### Footer Component
- Four-column layout (responsive to single column on mobile)
- Newsletter subscription form
- Quick links to important pages
- Social media links
- Contact information
- Accessibility statement link

### Feature Components

#### Hero Section
- Full-width responsive hero with optimized images
- Animated text overlays
- Multiple CTA buttons
- Auto-playing carousel with manual controls
- Accessibility-friendly pause/play controls

#### Plan Comparison Component
- Interactive comparison table
- Sticky header on scroll
- Highlight differences feature
- Mobile-optimized card view
- Filter and sort functionality

#### Contact Form Component
- Multi-step form with progress indicator
- Real-time validation
- File upload support
- Success/error feedback
- Email integration with EmailJS

## Data Models

### Theme Configuration
```typescript
interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: Record<number, string>;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    fontFamily: {
      sans: string;
      heading: string;
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
  };
  spacing: Record<number, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}
```

### Plan Data Model
```typescript
interface HealthPlan {
  id: string;
  name: string;
  description: string;
  price: {
    individual: number;
    family: number;
  };
  benefits: string[];
  coverage: {
    category: string;
    details: string;
  }[];
  pdfUrl: string;
  enrollmentUrl: string;
  featured: boolean;
}
```

### Navigation Item Model
```typescript
interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
}
```

## 
Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

**Property Reflection:**

After reviewing all properties identified in the prework, several can be consolidated to eliminate redundancy:

- Properties about consistent styling (3.2, 6.1, 6.4) can be combined into a comprehensive theme consistency property
- Properties about component structure (2.1, 2.4, 7.2) can be unified into a content structure consistency property  
- Properties about accessibility (4.1, 4.2, 4.5) can be grouped into comprehensive accessibility compliance properties
- Properties about responsive behavior (1.3, 5.4) can be combined into a responsive design property

**Property 1: Navigation Efficiency**
*For any* user journey from homepage to health plan filtering tools, the path should require no more than 3 clicks to reach the destination
**Validates: Requirements 1.2**

**Property 2: Responsive Design Integrity**
*For any* viewport width between 320px and 1920px, all components should maintain full functionality and readability without horizontal scrolling
**Validates: Requirements 1.3, 5.4**

**Property 3: Interactive Feedback Consistency**
*For any* interactive element (buttons, links, form inputs), hover and focus states should provide consistent visual feedback across the application
**Validates: Requirements 1.4**

**Property 4: Contact Information Availability**
*For any* page in the application, contact information should be accessible within the header, footer, or dedicated contact section
**Validates: Requirements 1.5**

**Property 5: Plan Comparison Functionality**
*For any* set of selected health plans, the comparison component should highlight differences in benefits, pricing, and coverage details
**Validates: Requirements 2.2**

**Property 6: Enrollment Progress Tracking**
*For any* enrollment process step, progress indicators should accurately reflect the current position and remaining steps
**Validates: Requirements 2.3**

**Property 7: Theme Consistency**
*For any* component using design tokens, colors, typography, and spacing should match the centralized theme configuration
**Validates: Requirements 3.2, 6.1, 6.4**

**Property 8: Component Reusability**
*For any* shared component instance, styling and behavior should remain consistent regardless of the parent context
**Validates: Requirements 3.4**

**Property 9: Accessibility Compliance**
*For any* interactive element, proper ARIA labels, semantic HTML, and keyboard navigation should be implemented according to WCAG 2.1 AA standards
**Validates: Requirements 4.1, 4.2, 4.5**

**Property 10: Color Accessibility**
*For any* text element, the contrast ratio between text and background should meet or exceed WCAG AA requirements (4.5:1 for normal text, 3:1 for large text)
**Validates: Requirements 4.3, 4.4**

**Property 11: Image Optimization**
*For any* image element, lazy loading attributes and responsive srcset should be implemented for performance optimization
**Validates: Requirements 5.2**

**Property 12: Content Structure Consistency**
*For any* content section (plans, provider information, resources), the information should follow consistent formatting patterns and hierarchical structure
**Validates: Requirements 2.1, 2.4, 7.2**

**Property 13: Form Submission Feedback**
*For any* form submission, loading states should be displayed and duplicate submissions should be prevented during processing
**Validates: Requirements 8.3**

**Property 14: Error Handling UX**
*For any* error state, helpful error messages with recovery suggestions should be displayed to guide user actions
**Validates: Requirements 8.5**

## Error Handling

### Client-Side Error Boundaries
- Implement React Error Boundaries to catch and handle component errors gracefully
- Display user-friendly error messages with options to retry or contact support
- Log errors to monitoring service for debugging

### Form Validation
- Real-time validation with debounced input checking
- Clear error messages positioned near relevant form fields
- Success states to confirm valid input
- Accessibility-compliant error announcements

### Network Error Handling
- Retry mechanisms for failed API requests
- Offline state detection and appropriate messaging
- Graceful degradation when services are unavailable
- Loading states for all asynchronous operations

### 404 and Route Errors
- Custom 404 page with navigation back to main sections
- Automatic redirects for moved or renamed pages
- Search functionality on error pages
- Breadcrumb navigation to help users orient themselves

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit testing and property-based testing to ensure comprehensive coverage:

**Unit Testing:**
- Component rendering and behavior verification
- User interaction simulation (clicks, form submissions, navigation)
- Accessibility compliance testing with @testing-library/jest-dom
- Visual regression testing for design consistency
- Integration testing for form submissions and API interactions

**Property-Based Testing:**
- Using @fast-check/jest for property-based testing in JavaScript/React
- Each property-based test configured to run minimum 100 iterations
- Universal properties verification across different input combinations
- Responsive design testing across viewport ranges
- Theme consistency validation across component variations

**Testing Framework Configuration:**
- **Unit Testing**: Jest + React Testing Library + @testing-library/user-event
- **Property-Based Testing**: @fast-check/jest library
- **Visual Testing**: Chromatic or Percy for visual regression
- **Accessibility Testing**: @axe-core/react for automated accessibility testing
- **Performance Testing**: Lighthouse CI for performance monitoring

**Property-Based Test Requirements:**
- Each correctness property must be implemented by a single property-based test
- Tests must be tagged with format: **Feature: lashma-ui-redesign, Property {number}: {property_text}**
- Minimum 100 iterations per property test to ensure thorough coverage
- Custom generators for realistic test data (viewport sizes, user interactions, content variations)

### Testing Implementation Guidelines

**Component Testing:**
- Test component rendering with various props combinations
- Verify accessibility attributes and keyboard navigation
- Test responsive behavior across different screen sizes
- Validate theme consistency and design token usage

**Integration Testing:**
- Test complete user journeys (homepage to plan enrollment)
- Verify form submissions and error handling
- Test navigation flows and route transitions
- Validate API integrations and data flow

**Performance Testing:**
- Bundle size analysis and optimization
- Lighthouse performance auditing
- Core Web Vitals monitoring
- Image optimization verification