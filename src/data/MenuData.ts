
interface SubMenu {
    link: string;
    title: string;
    external?: boolean;
}

interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    external?: boolean;
    sub_menus?: SubMenu[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "About",
        link: "/about",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Services",
        link: "/service",
        has_dropdown: true,
        sub_menus: [
            { link: "/services/b2b-lead-generation", title: "B2B Lead Generation" },
            { link: "/services/demand-generation", title: "Demand Generation" },
            { link: "/services/account-based-marketing", title: "Account-Based Marketing" },
            { link: "/services/content-syndication", title: "Content Syndication" },
            { link: "/services/digital-marketing", title: "Digital Marketing" },
            { link: "/services/email-marketing", title: "Email Marketing" },
        ],
    },
    {
        id: 4,
        title: "Publication",
        link: "/blog",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog", title: "Insights" },
            { link: "/blog-sidebar", title: "Guides" },
            { link: "https://martechsnews.com", title: "Martechs News", external: true },
        ],
    },
    {
        id: 5,
        title: "Careers",
        link: "/careers",
        has_dropdown: false,
    },
    {
        id: 6,
        title: "Contact",
        link: "/contact",
        has_dropdown: false,
    },
];

export default menu_data;