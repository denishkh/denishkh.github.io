// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Some selected projects that I have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-how-to-spec-out-motor-for-my-robotics-project",
        
          title: "How to spec out motor for my robotics project.",
        
        description: "an tutorial for selecting a motor",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/code/";
          
        },
      },{id: "projects-real-time-finger-kinematics-decoding-with-multimodal-sensing",
          title: 'Real-Time Finger Kinematics Decoding with Multimodal Sensing',
          description: "Real-time finger-angle prediction from forearm ultrasound, EMG and IMU for application in assistive robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dexter-wearable-hand-exoskeleton",
          title: 'DEXTER: Wearable Hand Exoskeleton',
          description: "A 450 g tendon-driven hand exoskeleton controlled by isometric grip force preserved in people post stroke",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-abu-robocon-robotics-projects-2017-2019",
          title: 'ABU Robocon Robotics Projects (2017-2019)',
          description: "A three-year journey designing and building competitive robots for ABU Robocon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ev-battery-pack-design-amp-validation",
          title: 'EV Battery Pack Design &amp;amp; Validation',
          description: "Battery pack design, simulation, and thermal validation for electric two-wheelers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-sensor-agnostic-physical-state-model-for-hand-motion-decoding",
          title: 'Sensor-Agnostic Physical State Model for Hand-Motion Decoding',
          description: "Learning a shared physical latent representation across ultrasound, EMG, and varying sensor configurations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6B%68%61%74%69%77@%67%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/denish-khatiwada-738615155", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/denishkh", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qwNdvm0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
