(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_8039d6._.js", {

"[project]/lib/data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "projects": ()=>projects,
    "services": ()=>services,
    "stats": ()=>stats,
    "techStack": ()=>techStack,
    "testimonials": ()=>testimonials,
    "timeline": ()=>timeline,
    "ventures": ()=>ventures
});
const ventures = [
    {
        id: 'ebitans',
        step: '01',
        eyebrow: '01 / FLAGSHIP',
        title: 'eBitans',
        description: 'A full-service digital agency crafting custom software for startups to enterprises. My flagship venture — where most of those 500+ projects were born.',
        accentColor: '#C8A56A',
        logo: '/images/logos/projects/ebitans-light.png',
        cardType: 'stats',
        stats: {
            role: 'Founder · CTO',
            clients: '200+',
            founded: '2019'
        }
    },
    {
        id: 'wavebox',
        step: '02',
        eyebrow: '02 / MEDIA',
        title: 'WaveBox',
        description: 'A modern media streaming platform built for creators. Scalable video delivery, creator tools, and audience analytics under one roof.',
        accentColor: '#B88B55',
        logo: '/images/logos/projects/wavebox-light.png',
        cardType: 'tags',
        tags: [
            'React Native',
            'Node.js',
            'AWS',
            'Firebase'
        ],
        status: 'BUILDING'
    },
    {
        id: 'nirapod-qr',
        step: '03',
        eyebrow: '03 / SAFETY',
        title: 'Nirapod QR',
        description: 'Safety-first QR code solutions — designed for emergencies, verification, and trust. A product built for real-world impact.',
        accentColor: '#D7B57F',
        logo: '/images/logos/projects/nirapod-light.png',
        cardType: 'qr'
    },
    {
        id: 'ecommercex',
        step: '04',
        eyebrow: '04 / COMMERCE',
        title: 'eCommerceX',
        description: 'Next-generation e-commerce platform. Headless architecture, blazing-fast storefronts, and a seller experience that just works.',
        accentColor: '#A67C52',
        logo: '/images/logos/projects/ecommercex-light.png',
        cardType: 'commerce',
        gmv: '$2M+'
    }
];
const projects = [
    {
        id: '1',
        name: 'eBitans Platform',
        category: 'Web',
        year: '2024',
        techStack: [
            'Next.js',
            'Node.js',
            'PostgreSQL'
        ],
        image: '/images/logos/projects/ebitans-light.png',
        link: '#',
        description: 'Full-service agency platform serving 200+ clients worldwide.'
    },
    {
        id: '2',
        name: 'WaveBox Streaming',
        category: 'SaaS',
        year: '2023',
        techStack: [
            'React Native',
            'Node.js',
            'AWS'
        ],
        image: '/images/logos/projects/wavebox-light.png',
        link: '#',
        description: 'Scalable media streaming platform for content creators.'
    },
    {
        id: '3',
        name: 'Nirapod QR Safety',
        category: 'Web',
        year: '2023',
        techStack: [
            'Next.js',
            'TypeScript',
            'MongoDB'
        ],
        image: '/images/logos/projects/nirapod-light.png',
        link: '#',
        description: 'Emergency QR code verification platform.'
    },
    {
        id: '4',
        name: 'eCommerceX Store',
        category: 'E-commerce',
        year: '2024',
        techStack: [
            'Next.js',
            'GraphQL',
            'Redis'
        ],
        image: '/images/logos/projects/ecommercex-light.png',
        link: '#',
        description: 'Headless e-commerce platform with blazing-fast storefronts.'
    },
    {
        id: '5',
        name: 'GP Internal Tools',
        category: 'Web',
        year: '2018',
        techStack: [
            'React',
            'Node.js',
            'PostgreSQL'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'Internal tooling for Grameenphone operations.'
    },
    {
        id: '6',
        name: 'eCourier Backend',
        category: 'SaaS',
        year: '2019',
        techStack: [
            'Node.js',
            'Docker',
            'AWS'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'High-scale logistics backend infrastructure.'
    },
    {
        id: '7',
        name: 'Restaurant POS',
        category: 'Web',
        year: '2022',
        techStack: [
            'React',
            'Node.js',
            'MongoDB'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'Comprehensive point-of-sale system for restaurants.'
    },
    {
        id: '8',
        name: 'Healthcare App',
        category: 'Mobile',
        year: '2022',
        techStack: [
            'Flutter',
            'Firebase',
            'Node.js'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'Telemedicine app connecting patients with doctors.'
    },
    {
        id: '9',
        name: 'EdTech Platform',
        category: 'SaaS',
        year: '2021',
        techStack: [
            'Next.js',
            'GraphQL',
            'PostgreSQL'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'Online learning management system for 10K+ students.'
    },
    {
        id: '10',
        name: 'FinTech Dashboard',
        category: 'Web',
        year: '2023',
        techStack: [
            'React',
            'TypeScript',
            'Redis'
        ],
        image: '/images/projects/placeholder.jpg',
        link: '#',
        description: 'Real-time financial analytics dashboard.'
    }
];
const timeline = [
    {
        year: '2014',
        role: 'CS Graduate',
        company: 'North South University',
        description: 'Graduated with a CS degree and a burning desire to build. Spent nights coding freelance projects — the beginning of 500+.',
        side: 'right'
    },
    {
        year: '2015',
        role: 'Junior Developer',
        company: 'Early Career',
        description: 'First professional role. Learned to write production-grade code, work in teams, and ship on deadlines.',
        side: 'left'
    },
    {
        year: '2016',
        role: 'Software Engineer',
        company: 'Grameenphone',
        description: 'Built internal tools used by thousands of employees across Bangladesh\'s largest telecom. Learned enterprise-scale systems.',
        side: 'right'
    },
    {
        year: '2018',
        role: 'Senior Engineer',
        company: 'eCourier',
        description: 'Led backend infrastructure for one of Bangladesh\'s top courier platforms. Scaled systems from scratch to handle thousands of daily deliveries.',
        side: 'left'
    },
    {
        year: '2019',
        role: 'Founder & CTO',
        company: 'eBitans',
        description: 'Founded eBitans — a digital agency built on craft. Traded a salary for a mission. Never looked back.',
        side: 'right'
    },
    {
        year: '2021',
        role: 'Founder',
        company: 'WaveBox',
        description: 'Launched WaveBox, a media streaming platform for creators. Expanded from agency to product.',
        side: 'left'
    },
    {
        year: '2023',
        role: 'Founder',
        company: 'Nirapod QR',
        description: 'Launched Nirapod QR — safety-first QR products for emergencies and verification. Building for real-world impact.',
        side: 'right'
    },
    {
        year: '2024',
        role: 'Founder',
        company: 'eCommerceX',
        description: 'Launched eCommerceX — headless e-commerce for modern sellers. $2M+ GMV in first year.',
        side: 'left'
    },
    {
        year: 'Now',
        role: 'CTO & Builder',
        company: '4 Ventures · 500+ Projects',
        description: 'Still writing code every day. Still obsessed with craft. Running 4 ventures, serving 50+ clients, and building what\'s next.',
        side: 'right'
    }
];
const testimonials = [
    {
        quote: 'Hasib delivered a complex SaaS platform in half the time we expected — without sacrificing quality. His technical depth and product thinking are rare in the same person.',
        name: 'Rafiq Ahmed',
        role: 'CEO',
        company: 'TechVenture BD',
        initials: 'RA'
    },
    {
        quote: 'Working with Hasib felt like having a CTO on demand. He didn\'t just build what we asked for — he pushed back on the right things and made our product significantly better.',
        name: 'Sarah Johnson',
        role: 'Founder',
        company: 'StartupHub',
        initials: 'SJ'
    },
    {
        quote: 'The e-commerce platform eBitans built for us handles 10K daily orders without breaking a sweat. Incredible engineering and even better communication throughout.',
        name: 'Mohammad Karim',
        role: 'Director',
        company: 'RetailBD',
        initials: 'MK'
    },
    {
        quote: 'Hasib is the kind of developer who understands business, not just code. He helped us architect a solution that scaled from 100 to 100,000 users.',
        name: 'Priya Sharma',
        role: 'CTO',
        company: 'GrowthSaaS',
        initials: 'PS'
    },
    {
        quote: 'From MVP to production in 6 weeks. Hasib\'s team at eBitans made it look easy — but the quality speaks to the years of expertise behind every decision.',
        name: 'James Wilson',
        role: 'Product Manager',
        company: 'FinTech Co',
        initials: 'JW'
    }
];
const stats = [
    {
        value: 500,
        suffix: '+',
        label: 'Projects delivered'
    },
    {
        value: 10,
        suffix: '+',
        label: 'Years experience'
    },
    {
        value: 4,
        suffix: '',
        label: 'Ventures founded'
    },
    {
        value: 50,
        suffix: '+',
        label: 'Happy clients'
    }
];
const services = [
    {
        id: 'fullstack',
        icon: 'web',
        title: 'Full-Stack Web Apps',
        description: 'Production-grade React, Next.js, Node.js applications. From MVP to enterprise scale.',
        tags: [
            'React',
            'Next.js',
            'Node',
            'PostgreSQL'
        ],
        span: 'col-span-2 row-span-2',
        gradient: 'from-accent-gold/8 to-transparent'
    },
    {
        id: 'mobile',
        icon: 'mobile',
        title: 'Mobile Apps',
        description: 'Native feel with React Native and Flutter. Shipped to stores with 100K+ users.',
        tags: [
            'React Native',
            'Flutter'
        ],
        span: 'col-span-1 row-span-1',
        gradient: 'from-bg-tertiary to-bg-elevated'
    },
    {
        id: 'saas',
        icon: 'rocket',
        title: 'SaaS & MVPs',
        description: 'Rapid prototyping for startups. Go from idea to launched product in weeks.',
        tags: [
            'Startups',
            'MVPs'
        ],
        span: 'col-span-1 row-span-1',
        gradient: 'from-bg-tertiary to-bg-elevated'
    },
    {
        id: 'cto',
        icon: 'compass',
        title: 'CTO as a Service',
        description: 'Technical leadership for startups that aren\'t ready to hire a full-time CTO. Architecture reviews, team building, technology strategy.',
        tags: [
            'Architecture',
            'Leadership',
            'Strategy'
        ],
        badge: 'Most requested',
        span: 'col-span-2 row-span-1',
        gradient: 'from-accent-cyan/5 to-transparent'
    },
    {
        id: 'consulting',
        icon: 'consulting',
        title: 'Tech Consulting',
        description: 'Architecture reviews, code audits, scaling strategy.',
        tags: [
            'Audits',
            'Scaling'
        ],
        span: 'col-span-1 row-span-1',
        gradient: 'from-bg-tertiary to-bg-elevated'
    }
];
const techStack = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Flutter',
    'React Native',
    'GraphQL',
    'Redis',
    'Firebase',
    'Tailwind CSS',
    'Prisma'
];

})()),
"[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useIsMobile": ()=>useIsMobile,
    "useIsTablet": ()=>useIsTablet,
    "useMediaQuery": ()=>useMediaQuery,
    "usePrefersReducedMotion": ()=>usePrefersReducedMotion
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature();
'use client';
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const media = window.matchMedia(query);
        setMatches(media.matches);
        const listener = (e)=>setMatches(e.matches);
        media.addEventListener('change', listener);
        return ()=>media.removeEventListener('change', listener);
    }, [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
function useIsMobile() {
    _s1();
    return useMediaQuery('(max-width: 767px)');
}
_s1(useIsMobile, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useIsTablet() {
    _s2();
    return useMediaQuery('(max-width: 1023px)');
}
_s2(useIsTablet, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function usePrefersReducedMotion() {
    _s3();
    return useMediaQuery('(prefers-reduced-motion: reduce)');
}
_s3(usePrefersReducedMotion, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});

})()),
"[project]/components/TechBgPattern.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TechBgPattern
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const TECH_ITEMS = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Go',
    'Rust',
    'Docker',
    'AWS',
    'K8s',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Flutter',
    'Swift',
    'Kotlin',
    'Vue',
    'Angular',
    'Svelte',
    'Tailwind',
    'Git',
    'Linux',
    'Nginx',
    'Terraform',
    'CI/CD',
    'REST',
    'gRPC',
    '{}',
    '()',
    '=>',
    '[]',
    '//',
    '<!-- -->',
    '<>',
    '&&',
    '||',
    '/*',
    '01',
    '10',
    '::1',
    'npm',
    'yarn',
    'pnpm',
    'bun',
    'deno',
    'webpack',
    'JSX',
    'TSX',
    'API',
    'SDK',
    'ORM',
    'JWT',
    'OAuth',
    'TLS',
    'CDN'
];
function TechBgPattern({ className = '' }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const items = [];
        const resize = ()=>{
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            items.length = 0;
            const cols = Math.ceil(canvas.width / 120);
            const rows = Math.ceil(canvas.height / 80);
            for(let r = 0; r < rows; r++){
                for(let c = 0; c < cols; c++){
                    if (Math.random() > 0.45) continue;
                    const text = TECH_ITEMS[Math.floor(Math.random() * TECH_ITEMS.length)];
                    items.push({
                        text,
                        x: c * 120 + Math.random() * 60,
                        y: r * 80 + Math.random() * 40,
                        fontSize: Math.random() > 0.7 ? 14 : Math.random() > 0.5 ? 11 : 9,
                        opacity: 0.03 + Math.random() * 0.05,
                        rotation: (Math.random() - 0.5) * 20 * (Math.PI / 180)
                    });
                }
            }
            draw();
        };
        const draw = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = `400 ${12}px 'JetBrains Mono', monospace`;
            for (const item of items){
                ctx.save();
                ctx.translate(item.x, item.y);
                ctx.rotate(item.rotation);
                ctx.font = `400 ${item.fontSize}px 'JetBrains Mono', monospace`;
                ctx.fillStyle = `rgba(200, 165, 106, ${item.opacity})`;
                ctx.fillText(item.text, 0, 0);
                ctx.restore();
            }
        };
        resize();
        window.addEventListener('resize', resize);
        return ()=>window.removeEventListener('resize', resize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: `absolute inset-0 w-full h-full pointer-events-none ${className}`,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/TechBgPattern.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(TechBgPattern, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = TechBgPattern;
var _c;
__turbopack_refresh__.register(_c, "TechBgPattern");

})()),
"[project]/components/Portfolio.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Portfolio
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechBgPattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/TechBgPattern.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const CATEGORIES = [
    'All',
    'Web',
    'Mobile',
    'SaaS',
    'E-commerce'
];
const CARD_WIDTH = 440;
const CARD_GAP = 24;
const ease = [
    0.22,
    1,
    0.36,
    1
];
function ProjectCard({ project, isCenter }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        animate: {
            scale: isCenter ? 1.04 : 1
        },
        transition: {
            duration: 0.4
        },
        className: "flex-shrink-0 rounded-2xl overflow-hidden cursor-default",
        style: {
            width: CARD_WIDTH,
            background: 'var(--bg-elevated)',
            border: '1px solid rgba(200,165,106,0.16)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden flex items-center justify-center",
                style: {
                    height: '260px',
                    background: 'var(--bg-tertiary)'
                },
                children: [
                    project.image.includes('placeholder') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-display text-6xl font-medium",
                        style: {
                            color: 'rgba(200,165,106,0.22)'
                        },
                        children: project.name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project.image,
                        alt: `${project.name} logo`,
                        className: "max-h-[170px] w-[80%] object-contain"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-medium text-xl",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] uppercase tracking-wider",
                                style: {
                                    color: 'rgba(236,230,219,0.52)'
                                },
                                children: project.year
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mb-4",
                        style: {
                            color: 'rgba(236,230,219,0.68)'
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded font-mono text-[10px] uppercase tracking-wider",
                                style: {
                                    background: 'rgba(200,165,106,0.08)',
                                    border: '1px solid rgba(200,165,106,0.18)',
                                    color: 'rgba(236,230,219,0.62)'
                                },
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
function MobilePortfolio({ filtered }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "popLayout",
            children: filtered.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "rounded-2xl overflow-hidden",
                    style: {
                        background: 'var(--bg-elevated)',
                        border: '1px solid rgba(200,165,106,0.16)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            style: {
                                height: '200px',
                                background: 'var(--bg-tertiary)'
                            },
                            children: project.image.includes('placeholder') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-5xl font-medium",
                                style: {
                                    color: 'rgba(200,165,106,0.28)'
                                },
                                children: project.name.charAt(0)
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: project.image,
                                alt: `${project.name} logo`,
                                className: "max-h-[120px] w-[78%] object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display font-medium text-lg",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px]",
                                            style: {
                                                color: 'rgba(236,230,219,0.52)'
                                            },
                                            children: project.year
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mb-3",
                                    style: {
                                        color: 'rgba(236,230,219,0.68)'
                                    },
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: project.techStack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-0.5 rounded font-mono text-[10px]",
                                            style: {
                                                background: 'rgba(200,165,106,0.08)',
                                                color: 'rgba(236,230,219,0.62)'
                                            },
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/components/Portfolio.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, project.id, true, {
                    fileName: "[project]/components/Portfolio.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Portfolio.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Portfolio.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c1 = MobilePortfolio;
function Portfolio() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [centerIndex, setCenterIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const filtered = activeCategory === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.category === activeCategory);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: outerRef,
        offset: [
            'start start',
            'end end'
        ]
    });
    const trackWidth = filtered.length * (CARD_WIDTH + CARD_GAP);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -(trackWidth - (typeof window !== 'undefined' ? window.innerWidth * 0.6 : 600))
    ]);
    const handleCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((cat)=>{
        setActiveCategory(cat);
        setCenterIndex(0);
    }, []);
    const currentProject = filtered[centerIndex] || filtered[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        className: "relative w-full",
        style: {
            background: 'var(--bg-primary)'
        },
        children: isMobile || reducedMotion ? // Mobile layout
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-24 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechBgPattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Portfolio.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label-tag mb-4",
                            children: "[07] SELECTED WORK"
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-medium leading-none mb-8",
                            style: {
                                fontSize: 'clamp(32px, 5vw, 56px)'
                            },
                            children: "Selected work."
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-8",
                            children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCategory(cat),
                                    className: "px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300",
                                    style: {
                                        background: activeCategory === cat ? 'var(--accent-gold)' : 'rgba(200,165,106,0.08)',
                                        color: activeCategory === cat ? '#171717' : 'rgba(236,230,219,0.72)',
                                        border: '1px solid rgba(200,165,106,0.18)'
                                    },
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobilePortfolio, {
                            filtered: filtered
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Portfolio.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Portfolio.tsx",
            lineNumber: 175,
            columnNumber: 9
        }, this) : // Desktop pinned horizontal scroll
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: outerRef,
            style: {
                height: `${filtered.length * 70}vh`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-screen overflow-hidden flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[40%] flex-shrink-0 flex flex-col justify-center px-16 xl:px-[120px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechBgPattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "label-tag mb-6",
                                        children: "[07] SELECTED WORK"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-medium leading-none mb-8",
                                        style: {
                                            fontSize: 'clamp(32px, 3.5vw, 56px)'
                                        },
                                        children: [
                                            "Selected",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 211,
                                                columnNumber: 27
                                            }, this),
                                            "work."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-8",
                                        children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCategory(cat),
                                                className: "px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300",
                                                style: {
                                                    background: activeCategory === cat ? 'var(--accent-gold)' : 'rgba(200,165,106,0.08)',
                                                    color: activeCategory === cat ? '#171717' : 'rgba(236,230,219,0.72)',
                                                    border: '1px solid rgba(200,165,106,0.18)'
                                                },
                                                children: cat
                                            }, cat, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    currentProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display font-medium text-2xl mb-2",
                                                children: currentProject.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-4",
                                                children: currentProject.techStack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded font-mono text-[10px]",
                                                        style: {
                                                            background: 'rgba(200,165,106,0.08)',
                                                            color: 'rgba(236,230,219,0.62)'
                                                        },
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/components/Portfolio.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: currentProject.link,
                                                className: "inline-flex items-center gap-2 font-mono text-sm text-[var(--accent-gold)] hover:text-[var(--accent-gold-bright)] transition-colors",
                                                children: "Case Study ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, currentProject.id, true, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                x
                            },
                            className: "flex gap-6 pl-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: filtered.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        onViewportEnter: ()=>setCenterIndex(i),
                                        transition: {
                                            duration: 0.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                            project: project,
                                            isCenter: centerIndex === i
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio.tsx",
                                            lineNumber: 276,
                                            columnNumber: 23
                                        }, this)
                                    }, project.id, false, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 267,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 261,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio.tsx",
                lineNumber: 204,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Portfolio.tsx",
            lineNumber: 203,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Portfolio.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "Dhs1Ml/cNSju5jvD4SpEdMSmlag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = Portfolio;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ProjectCard");
__turbopack_refresh__.register(_c1, "MobilePortfolio");
__turbopack_refresh__.register(_c2, "Portfolio");

})()),
}]);

//# sourceMappingURL=_8039d6._.js.map