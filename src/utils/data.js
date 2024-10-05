import { BookA, HomeIcon, Settings, ShoppingCart, UserRound } from "lucide-react"

export const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]


export const profile = [
  {
    title: "Profile",
    img: "/banner1.png",
    text: "Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas"
  },
  {
    title: "Profile",
    img: "/banner2.png",
    text: "Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas"
  },
  {
    title: "Quotes",
    img: "/banner3.png",
    text: "Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas. Lorem Ipsum vanitas et omnia vanitas"
  },
]


export const staticTime = [
  {
    count: 23,
    time: 'Hours'
  },
  {
    count: 10,
    time: 'Days'
  },
  {
    count: 30,
    time: 'Minutes'
  },
  {
    count: 47,
    time: 'Seconds'
  },
]


export const sidebarRoutes = [
  {
    id: 1,
    route: "/dashboard",
    icon: <HomeIcon className="h-5 w-5"/>,
    name: "Dashboard"
  },
  {
    id: 2,
    route: "/dashboard/users",
    icon: <UserRound className="h-5 w-5"/>,
    name: "Users"
  },
  {
    id: 3,
    route: "/dashboard/products",
    icon: <BookA className="h-5 w-5"/>,
    name: "Products"
  },
  {
    id: 4,
    route: "/dashboard/categories",
    icon: <BookA className="h-5 w-5"/>,
    name: "Categories"
  },
  {
    id: 5,
    route: "/dashboard/orders",
    icon: <ShoppingCart className="h-5 w-5"/>,
    name: "Orders"
  },
  {
    id: 6,
    route: "/dashboard/settings",
    icon: <Settings className="h-5 w-5"/>,
    name: "Settings"
  },
]