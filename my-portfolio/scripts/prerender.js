const fs = require('fs');
const path = require('path');
const routes = [
  '/',
  '/about',
  '/mywork',
  '/casestudy1',
  '/casestudy2',
  '/contact',
  '/style-guide'
];

const buildDir = path.join(__dirname, '../build');
const indexFile = path.join(buildDir, 'index.html');

const metaData = {
  '/': {
    title: 'Portfolio | Preston Quinn',
    description: 'Preston Quinn is a UX/UI designer based in Ottawa creating minimal, intuitive, and engaging digital experiences for startups and brands.',
    ogTitle: 'Preston Quinn — UX/UI Designer',
    ogDescription: 'Explore Preston Quinn\'s portfolio of UX/UI design projects'
  },
  '/about': {
    title: 'About Me | Preston Quinn',
    description: 'Learn about Preston Quinn\'s design journey, philosophy, and personal interests. A UX/UI designer focused on creating intuitive digital experiences.',
    ogTitle: 'About Preston Quinn — Designer, Problem-Solver, & Adventurer',
    ogDescription: 'Discover Preston Quinn\'s design philosophy, experience, and personal passions.'
  },
  '/mywork': {
    title: 'My Work | Preston Quinn',
    description: 'Explore Preston Quinn\'s portfolio of UX/UI design projects including case studies, app concepts, and redesigns.',
    ogTitle: 'My Work — UX/UI Design Projects',
    ogDescription: 'View Preston Quinn\'s complete portfolio of design projects and case studies.'
  },
  '/casestudy1': {
    title: 'Gym Leveling Case Study | Preston Quinn',
    description: 'Deep dive into the Gym Leveling project: A gamified fitness tracking app concept designed with a complete UX/UI process.',
    ogTitle: 'Gym Leveling Case Study — Gamified Fitness App',
    ogDescription: 'Explore the complete design process behind Gym Leveling, a gamified fitness tracking app concept.'
  },
  '/casestudy2': {
    title: 'Canada Computers Redesign Case Study | Preston Quinn',
    description: 'Deep dive into the Canada Computers redesign project: Complete UX/UI design process from research to high-fidelity prototypes.',
    ogTitle: 'Canada Computers Redesign Case Study — E-Commerce Platform',
    ogDescription: 'Explore the complete design process behind Canada Computers redesign, transforming the e-commerce experience.'
  },
  '/contact': {
    title: 'Contact | Preston Quinn',
    description: 'Get in touch with Preston Quinn. Interested in collaborating on your next UX/UI design project?',
    ogTitle: 'Contact Preston Quinn',
    ogDescription: 'Get in touch to discuss your design project and collaboration opportunities.'
  },
  '/style-guide': {
    title: 'Style Guide | Preston Quinn',
    description: 'Preston Quinn\'s design system and style guide showcasing colors, typography, and UI components.',
    ogTitle: 'Style Guide — Preston Quinn\'s Design System',
    ogDescription: 'Explore Preston Quinn\'s design system and component library.'
  }
};

function createPageFile(route) {
  const meta = metaData[route];
  let content = fs.readFileSync(indexFile, 'utf8');

  // Replace the default meta description
  content = content.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );

  // If no description found, add one
  if (!content.includes('name="description"')) {
    content = content.replace(
      '</head>',
      `<meta name="description" content="${meta.description}" />\n  </head>`
    );
  }

  // Add/update Open Graph tags
  content = content.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Create directory if needed
  if (route === '/') {
    fs.writeFileSync(indexFile, content, 'utf8');
  } else {
    const routeDir = path.join(buildDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), content, 'utf8');
  }

  console.log(`✓ Pre-rendered: ${route}`);
}

// Pre-render all routes
console.log('Pre-rendering static pages...');
routes.forEach(createPageFile);
console.log('✓ Pre-rendering complete!');
