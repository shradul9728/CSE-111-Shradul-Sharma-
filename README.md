# Portfolio - Interactive Team Portfolio Website

A modern, responsive portfolio website showcasing the work of five talented individuals. Built with HTML5, CSS3, and vanilla JavaScript, featuring smooth animations, interactive elements, and accessibility compliance.

## 🚀 Live Demo

**Website**: https://shradul9728.github.io/CSE-111-Shradul-Sharma-

## 🌟 Overview

This portfolio website is designed to highlight the skills, projects, and personalities of our five-member team. Each member has their own dedicated section with personalized content, profile photos, and project showcases.

## 👥 Meet Our Team

### 1. **Shradul Sharma** - Tech Enthusiast & Aspiring Developer
- **Location**: Ambala, Haryana
- **Institution**: HIIT Ambala
- **Skills**: C Programming, C++, Problem Solving, App Development, Cybersecurity, Open Source
- **Focus Areas**: 
  - C++ Learning Projects - Collection of algorithms and data structures
  - Cybersecurity Learning - Ethical hacking and security research
  - Open Source Contributions - GitHub collaboration and project development

### 2. **Ritesh Raj** - Motivated Learner & Academic Achiever
- **Background**: Mount Litera Zee School & Green Valley International School, Muzaffarpur
- **Skills**: Communication, Reading, Sports, Technology, Photography, Coding
- **Focus Areas**:
  - Academic Excellence - Strong educational foundation
  - Creative Photography - Visual storytelling and artistic expression
  - Learning & Development - Continuous skill building in technology

### 3. **Harshwardhan** - Motivated Learner & Creative Thinker
- **Background**: DAV Bakhri, Muzaffarpur
- **Skills**: Communication, Creative Thinking, Sports, Drawing, Music, Adaptability
- **Focus Areas**:
  - Academic Foundation - Disciplined educational approach
  - Creative Arts - Drawing, music, and artistic endeavors
  - Personal Growth - Continuous learning and self-improvement

### 4. **Tanu Yadav** - Enthusiastic Learner & Creative Individual
- **Location**: Varanasi, Uttar Pradesh
- **Institution**: Scion International School
- **Skills**: Quick Learning, Positive Attitude, Drawing, Music, Fitness, Communication
- **Focus Areas**:
  - Academic Excellence - Strong educational foundation
  - Fitness & Wellness - Physical and mental health focus
  - Social & Creative Skills - Art, music, and relationship building

### 5. **George Chacko** - First-Year Tech Student & Aspiring Developer
- **Institution**: Lovely Professional University (LPU)
- **Skills**: Technology, Engineering, Software Design, User Experience, Web Development, Learning
- **Focus Areas**:
  - Academic Journey at LPU - Technology and engineering foundations
  - Personal Website Development - This portfolio project
  - Future Development Goals - Technical skill building and collaboration

## ✨ Features

### 🎨 Design & User Experience
- **Modern Gradient Backgrounds** - Eye-catching visual appeal with dynamic color schemes
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth hover effects and CSS transitions
- **Professional Typography** - Google Fonts (Inter) for clean, readable text
- **Accessibility Compliant** - WCAG guidelines followed for inclusive design

### ⚡ Interactive Elements
- **Smooth Scrolling Navigation** - Seamless section transitions
- **Dynamic Loading Animation** - Professional loading screen on page load
- **Project Modal Windows** - Detailed project information in elegant overlays
- **Hover Effects** - Interactive project cards and UI elements
- **Form Validation** - User-friendly contact form with validation
- **Back to Top Button** - Convenient navigation helper

### 🏗️ Technical Implementation
- **Pure HTML5, CSS3, JavaScript** - No external frameworks for optimal performance
- **CSS Grid & Flexbox** - Modern layout techniques for responsive design
- **CSS Custom Properties** - Maintainable color scheme and styling
- **Intersection Observer API** - Efficient scroll-based animations
- **Performance Optimized** - Debounced scroll events and efficient animations
- **Progressive Enhancement** - Works without JavaScript as fallback

## 📁 Project Structure

```
Portfolio/
├── assets/
│   └── images/
│       ├── Entry.png                    # Hero section team image
│       ├── shradul-profile.jpg         # Shradul's profile photo
│       ├── ritesh-profile.jpg          # Ritesh's profile photo
│       ├── harshwardhan-profile.jpg    # Harshwardhan's profile photo
│       ├── tanu-profile.jpg            # Tanu's profile photo
│       └── george-profile-fixed.jpg    # George's profile photo
├── css/
│   └── styles.css                      # Main stylesheet with responsive design
├── js/
│   └── script.js                       # Interactive functionality and animations
├── index.html                          # Main HTML structure
├── LICENSE                             # MIT License
└── README.md                           # Project documentation
```

## 🛠️ Technologies Used

### Frontend Technologies
- **HTML5**: Semantic markup with proper structure and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and smooth animations
- **Font Awesome**: Professional icon library for social links and UI elements
- **Google Fonts**: Inter font family for clean, professional typography

### Development Tools
- **Git**: Version control with GitHub hosting
- **GitHub Pages**: Free hosting for the live website
- **VS Code**: Development environment with live server
- **Chrome DevTools**: Testing and debugging across devices

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning and contributing)
- Optional: Local web server for development

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shradul9728/CSE-111-Shradul-Sharma-.git
   cd CSE-111-Shradul-Sharma-
   ```

2. **Open locally**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Python server (recommended)
   python -m http.server 8000
   # Navigate to: http://localhost:8000
   
   # Option 3: Node.js server
   npx http-server
   ```

3. **For development**
   - Edit files in VS Code or your preferred editor
   - Use browser developer tools for debugging
   - Test responsiveness across different screen sizes

## 🎯 Key Features Breakdown

### Hero Section
- Dynamic team introduction with animated elements
- Call-to-action button for smooth navigation
- Fallback floating cards animation if team image fails to load

### Individual Sections
- Personalized profile photos for each team member
- Skills showcase with interactive tag design
- Project cards with hover effects and modal integration
- Social media links for professional networking

### Contact Section
- Professional contact form with validation
- Team contact information
- Location and communication details

### Footer
- Consistent branding and navigation
- Social media links
- Copyright and legal information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout with all features)
- **Tablet**: 768px-1199px (adjusted layout and navigation)
- **Mobile**: 320px-767px (stacked layout and mobile-first design)

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader friendly navigation and interactive elements
- **Keyboard Navigation**: Full functionality without mouse input
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alternative text for all images
- **Focus Management**: Visible focus indicators for all interactive elements

## 🔧 Customization

### Adding New Team Members
1. Create new section in `index.html` following existing pattern
2. Add corresponding styles in `css/styles.css`
3. Update navigation menu and JavaScript arrays
4. Add profile image to `assets/images/` directory

### Updating Content
- **Profile Information**: Edit individual sections in `index.html`
- **Projects**: Update project data in `js/script.js`
- **Styling**: Modify CSS custom properties in `css/styles.css`
- **Contact Info**: Update contact section details

### Color Scheme
The website uses CSS custom properties for easy color customization:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... more variables */
}
```

## 🤝 Contributing

We welcome contributions to improve the portfolio! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request** with detailed description

### Contribution Guidelines
- Follow existing code style and structure
- Test changes across different browsers and devices
- Update documentation for significant changes
- Ensure accessibility standards are maintained

## 📈 Performance Optimizations

- **Lazy Loading**: Efficient resource loading for images
- **Debounced Events**: Optimized scroll and resize handlers
- **CSS Animations**: Hardware-accelerated transitions
- **Minification Ready**: Code structure supports build tools
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- Contact form requires backend integration for email functionality
- Project modals use placeholder content (expandable for real projects)
- Social media links are placeholder (to be updated with real profiles)

### Planned Features
- **Dark Mode Toggle**: User preference for light/dark themes
- **Blog Integration**: Dynamic content management
- **Project Filtering**: Category-based project organization
- **Animation Controls**: Accessibility option to reduce motion
- **Multi-language Support**: Internationalization for broader reach

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome** for the comprehensive icon library
- **Google Fonts** for the beautiful Inter typography
- **CSS Grid & Flexbox** for modern layout capabilities
- **GitHub Pages** for free and reliable hosting
- **Open Source Community** for inspiration and best practices

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities:

- **Repository**: https://github.com/shradul9728/CSE-111-Shradul-Sharma-
- **Live Website**: https://shradul9728.github.io/CSE-111-Shradul-Sharma-
- **Issues**: Use GitHub Issues for bug reports and feature requests

---

**Built with ❤️ by Team Portfolio**

*This README reflects the current state of our portfolio website. We're continuously improving and welcome feedback from the community!*