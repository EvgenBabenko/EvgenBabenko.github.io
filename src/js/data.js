let data = [
    {
        title: 'Task manager API',
        image: 'img/mock.jpg',
        link: 'https://github.com/EvgenBabenko/incode-app-api',
        linkCode: 'https://github.com/EvgenBabenko/incode-app-api',
        // linkTemplate: null,
        description: 'API for task manager',
        tags: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'Task manager',
        image: 'img/mock.jpg',
        link: 'https://github.com/EvgenBabenko/incode-app',
        linkCode: 'https://github.com/EvgenBabenko/incode-app',
        // linkTemplate: null,
        description: 'Task manager with roles',
        tags: ['React', 'Redux', 'Material UI']
    },
    {
        title: 'Info list',
        image: 'img/react-info-list.jpg',
        link: 'https://evgenbabenko.github.io/react-info-list/',
        linkCode: 'https://github.com/EvgenBabenko/react-info-list',
        // linkTemplate: null,
        description: 'Simple info list.',
        tags: ['React', 'Redux', 'Semantic UI']
    },
    {
        title: 'Web search',
        image: 'img/mock.jpg',
        link: 'https://github.com/EvgenBabenko/ts-web-search',
        linkCode: 'https://github.com/EvgenBabenko/ts-web-search',
        // linkTemplate: null,
        description: 'Simple and clearly web search based on Google search',
        tags: ['TypeScript']
    },
    {
        title: 'Nearby place',
        image: 'img/mock.jpg',
        link: 'https://github.com/EvgenBabenko/ts-nearby-place',
        linkCode: 'https://github.com/EvgenBabenko/ts-nearby-place',
        // linkTemplate: null,
        description: 'Get nearby places with input users lat/lng',
        tags: ['TypeScript', 'Google API']
    },
    {
        title: 'Trello',
        image: 'img/mock.jpg',
        link: 'https://github.com/EvgenBabenko/react-trello',
        linkCode: 'https://github.com/EvgenBabenko/react-trello',
        // linkTemplate: null,
        description: 'Simple trello clone',
        tags: ['React', 'Bootstrap']
    },
    {
        title: 'Tag list',
        image: 'img/tag-list.jpg',
        link: 'works/tag-list-react/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/tag-list-react',
        // linkTemplate: null,
        description: 'Several tag list could be inserted in a page. Built with React',
        tags: ['React', 'Bootstrap']
    },
    {
        title: 'Find the pair',
        image: 'img/find-the-pair.jpg',
        link: 'https://EvgenBabenko.github.io/find-the-pair/index.html',
        linkCode: 'https://github.com/EvgenBabenko/find-the-pair',
        // linkTemplate: 'http://mypuzzle.org/find-the-pair',
        description: 'Game "Find a pair", no frameworks, no libraries, pure JavaScript',
        tags: ['JavaScript']
    },
    {
        title: 'Adverting',
        image: 'img/ad.jpg',
        link: 'https://EvgenBabenko.github.io/ad/build/index.html',
        linkCode: 'https://github.com/EvgenBabenko/ad',
        // linkTemplate: 'https://www.google.com/doubleclick/studio/externalpreview/#/bjRxbk4BTA6eGZbcSRDwEA?creativeId=41752966',
        description: 'Adverting Samsung Galaxy S7, no frameworks, no libraries, pure JavaScript',
        tags: ['JavaScript']
    },
    {
        title: 'Tag list',
        image: 'img/tag-list.jpg',
        link: 'works/tag-list/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/tag-list',
        // linkTemplate: null,
        description: 'Several tag list could be inserted in a page. Built on prototypes',
        tags: ['JavaScript', 'jQuery', 'Bootstrap']
    },
    {
        title: 'Slider',
        image: 'img/slider.jpg',
        link: 'works/slider/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/slider',
        // linkTemplate: null,
        description: 'Several sliders could be inserted in a page. Built on prototypes',
        tags: ['JavaScript', 'jQuery']
    },
    {
        title: 'Form validation',
        image: 'img/form-validation.jpg',
        link: 'works/form-validation/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/form-validation',
        // linkTemplate: null,
        description: 'Form validation with AJAX',
        tags: ['JavaScript', 'AJAX']
    },
    {
        title: 'Timer',
        image: 'img/timer.jpg',
        link: 'works/timer/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/timer',
        // linkTemplate: null,
        description: 'Several timers could be inserted in a page. Built on prototypes',
        tags: ['JavaScript']
    },
    {
        title: 'This Portfolio',
        image: 'img/portfolio.jpg',
        link: 'https://evgenbabenko.github.io/',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io',
        // linkTemplate: null,
        description: 'Allmost all DOM generated by JavaScript, used Saas preprocessor',
        tags: ['JavaScript', 'HTML/CSS', 'Sass', 'Flexbox']
    },
    // {
    //     title: 'JavaScript',
    //     image: 'img/java-script.jpg',
    //     link: 'works/java-script/build/index.html',
    //     linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/java-script',
    //     // linkTemplate: null,
    //     description: 'JavaScript online courses, http://jscourse.com/',
    //     tags: ['JavaScript', 'jQuery']
    // },
    {
        title: 'Modern corporate design',
        image: 'img/modern-corporate-design.jpg',
        link: 'works/modern-corporate-design/build/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/modern-corporate-design',
        // linkTemplate: 'http://www.pcklab.com/templates/modern-corporate-design',
        description: 'Converted PSD to HTML, responsive site (7 pages), cross-browser compatibility (modern browser, IE11)',
        tags: ['HTML/CSS', 'Flexbox', 'SCSS', 'jQuery']
    },
    // {
    //     title: 'Responsive template',
    //     image: 'img/responsive-PSD.jpg',
    //     link: 'works/responsive-PSD-template/index.html',
    //     linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/responsive-PSD-template',
    //     // linkTemplate: 'http://blazrobar.com/free-psd-website-templates/responsive-psd-template/',
    //     description: 'Converted PSD to HTML, Responsive single page',
    //     tags: ['HTML/CSS', 'Flexbox', 'Sass', 'Mobile First']
    // },
    {
        title: 'Change is Coming',
        image: 'img/change-is-coming.jpg',
        link: 'works/change-is-coming/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/change-is-coming',
        // linkTemplate: 'http://www.pcklab.com/templates/change-coming',
        description: 'Converted PSD to HTML, responsive single page',
        tags: ['HTML/CSS', 'Flexbox', 'SCSS']
    },
    {
        title: 'Landing Page',
        image: 'img/landing-page.jpg',
        link: 'works/landing-page/index.html',
        linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/landing-page',
        // linkTemplate: 'http://www.pcklab.com/templates/landing-page',
        description: 'Converted PSD to HTML, responsive single page',
        tags: ['HTML/CSS', 'Flexbox', 'SCSS']
    }
    // {
    //     title: 'Clean Corporate Design',
    //     image: 'img/clean-corporate-design.jpg',
    //     link: 'works/clean-corporate-design/index.html',
    //     linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/clean-corporate-design',
    //     // linkTemplate: 'http://www.pcklab.com/templates/clean-corporate-design',
    //     description: 'Converted PSD to HTML, responsive single page',
    //     tags: ['HTML/CSS', 'Flexbox']
    // },
    // {
    //     title: 'The Portfolio',
    //     image: 'img/theportfolio.jpg',
    //     link: 'works/theportfolio/index.html',
    //     linkCode: 'https://github.com/EvgenBabenko/EvgenBabenko.github.io/tree/master/works/theportfolio',
    //     // linkTemplate: 'http://www.pcklab.com/templates/portfolio',
    //     description: 'Converted PSD to HTML, single page',
    //     tags: ['HTML/CSS']
    // }
];
