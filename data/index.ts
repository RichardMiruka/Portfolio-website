export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "I ensure alignment between technical solutions and client goals, using clear, open communication throughout the development process.",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve & stay updated",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "", 
    },
    {
        id: 4,
        title: "Tech Enthusiast with a passion for backend architecture.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "I am currently building a School Management System",
        description: "Dedicated to learning and implementing modern backend technologies that enhance user experiences. ",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "A captivating 3D simulation leveraging Three.js. Built with a robust backend API to handle astronomical data efficiently.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/ui.earth.com",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "A seamless video conferencing platform. I developed the backend with NodeJS to ensure fast and secure real-time communications.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "/ui.yoom.com",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "SaaS application featuring AI-powered tools. Built with Django and integrated a payment and credits system to enhance user experience.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "Animated Apple iPhone 3D Website",
        des: "Recreated the iPhone 15 Pro website using GSAP and Three.js for dynamic frontend effects, supported by a scalable backend with Flask.",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
];


export const testimonials = [
    {
        quote:
            "Working with Richard Miruka was a seamless experience. His expertise in backend development, especially with NodeJS, enabled us to scale our platform efficiently. Richard consistently delivered high-quality code, meeting our deadlines without compromise. His technical acumen and problem-solving skills were invaluable to the success of our project.",
        name: "Dr. Michael Munyao",
        title: "Data Science Instructor - Kenyatta University",
    },
    {
        quote:
            "Richard is not just a developer, he's a problem-solver. His deep understanding of Django and Flask helped us overhaul our backend, improving both performance and security. He was highly responsive throughout the project, making sure every feature was optimized. I highly recommend him for any backend development needs.",
        name: "Job Kipkirui Koech",
        title: "Backend Software Engineer",
    },
    {
        quote:
            "Richard's professionalism and passion for development really shone during our collaboration. His expertise in API development using NodeJS allowed us to build a robust, scalable system that met all our requirements. I was impressed by his dedication and willingness to go the extra mile to ensure the project’s success.",
        name: "Sarah Mumbua",
        title: "Frontend Software Engineer",
    },
    {
        quote:
            "Collaborating with Richard was a fantastic experience. His skill in integrating complex backend systems, especially in Flask, was critical to the project's success. He brings both technical expertise and creativity, ensuring the best possible solution. I'd highly recommend him to anyone looking for a skilled backend developer.",
        name: "Sharoun Agamu",
        title: "Frontend Software Engineer",
    },
    {
        quote:
            "Richard's approach to backend development is impressive. His mastery of Django helped us streamline our server-side processes, resulting in faster load times and a more reliable system. He's a developer who truly understands how to align technical solutions with business goals.",
        name: "Paul Mihango",
        title: "Frontend Software Engineer",
    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "SAFARICOM",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Software Engineer - Backend",
        desc: "Led the backend development for the KIEP-SKIES Project, built and maintained the core API, and managed deployment pipelines using NodeJS, Django, and Flask.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Software Engineering Intern",
        desc: "Contributed to backend and frontend development for iTalanta, following modern architecture practices and writing reusable code.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Service Reliability Engineer",
        desc: "Participated in the ALX Software Engineering Program, focusing on backend reliability and system architecture.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Freelance Backend Developer",
        desc: "Worked on various freelance projects, developing secure and scalable backend systems using Django, Flask, and NodeJS.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];
