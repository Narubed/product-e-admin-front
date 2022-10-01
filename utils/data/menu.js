export const mainMenu = {
  products: [
    {
      title: "ประเภทสินค้า",
      url: "products/types",
      hot: true,
    },
    {
      title: "เพิ่มประเภทสินค้า",
      url: "products/types/create",
    },
    {
      title: "สินค้าทั้งหมด",
      url: "products",
      hot: true,
    },
    {
      title: "เพิ่มสินค้าใหม่",
      url: "products/create",
    },
  ],
  partners: {
    variation1: [
      {
        title: "Banner With Sidebar",
        url: "partners/banner-sidebar",
      },
      {
        title: "Banner With Sidebar",
        url: "partners/banner-sidebar",
      },
    ],
    variation2: [
      {
        title: "บริษัททั้งหมด",
        url: "partners/company",
      },
      {
        title: "เพิ่มบริษัทใหม่",
        url: "partners/company/create",
        new: true,
      },
      {
        title: "แบรนด์ สินค้าทั้งหมด",
        url: "partners/brand",
      },
      {
        title: "เพิ่มแบรนด์ สินค้าใหม่",
        url: "partners/brand/create",
        new: true,
      },
    ],
  },
  product: {
    pages: [
      {
        title: "Simple Product",
        url: "product/default/2-minute-thermometer",
      },
      {
        title: "Variable Product",
        url: "product/default/blue-for-one-time-medical-mask",
      },
      {
        title: "Sale Product",
        url: "product/default/disease-of-the-respiratory-organs",
      },
      {
        title: "Feature & On Sale",
        url: "product/default/disease-of-the-respiratory-organs/",
      },
      {
        title: "With Left Sidebar",
        url: "product/left-sidebar/blue-for-one-time-medical-mask",
      },
      {
        title: "With Right Sidebar",
        url: "product/right-sidebar/blue-for-one-time-medical-mask",
      },
      {
        title: "Add Cart Sticky",
        url: "product/sticky-cart/blue-for-one-time-medical-mask",
        hot: true,
      },
      {
        title: "Tab Inside",
        url: "product/tab-inside/blue-for-one-time-medical-mask",
      },
    ],
    layout: [
      {
        title: "Grid Images",
        url: "product/grid/blue-for-one-time-medical-mask",
        new: true,
      },
      {
        title: "Masonry",
        url: "product/masonry/white-roentgenometer",
      },
      {
        title: "Gallery Type",
        url: "product/gallery/blue-for-one-time-medical-mask",
      },
      {
        title: "Full Width Layout",
        url: "product/full-width/blue-for-one-time-medical-mask",
      },
      {
        title: "Sticky Info",
        url: "product/sticky-info/blue-for-one-time-medical-mask",
      },
      {
        title: "Left & Right Sticky",
        url: "product/sticky-both/blue-for-one-time-medical-mask",
      },
      {
        title: "Horizontal Thumb",
        url: "product/horizontal/blue-for-one-time-medical-mask",
      },
      {
        title: "Build Your Own",
        url: "",
      },
    ],
  },
  other: [
    {
      title: "About",
      url: "pages/about-us",
    },
    {
      title: "Contact Us",
      url: "pages/contact-us",
    },
    {
      title: "My Account",
      url: "pages/account",
    },
    {
      title: "FAQs",
      url: "pages/faqs",
    },
    {
      title: "Error 404",
      url: "pages/404",
    },
    {
      title: "Coming Soon",
      url: "pages/coming-soon",
    },
  ],
  blog: [
    {
      title: "Classic",
      url: "blog/classic",
    },
    {
      title: "Listing",
      url: "blog/listing",
    },
    {
      title: "Grid",
      url: "blog/grid/2cols",
      subPages: [
        {
          title: "Grid 2 columns",
          url: "blog/grid/2cols",
        },
        {
          title: "Grid 3 columns",
          url: "blog/grid/3cols",
        },
        {
          title: "Grid 4 columns",
          url: "blog/grid/4cols",
        },
        {
          title: "Grid sidebar",
          url: "blog/grid/sidebar",
        },
      ],
    },
    {
      title: "Masonry",
      url: "blog/masonry/2cols",
      subPages: [
        {
          title: "Masonry 2 columns",
          url: "blog/masonry/2cols",
        },
        {
          title: "Masonry 3 columns",
          url: "blog/masonry/3cols",
        },
        {
          title: "Masonry 4 columns",
          url: "blog/masonry/4cols",
        },
        {
          title: "Masonry sidebar",
          url: "blog/masonry/sidebar",
        },
      ],
    },
    {
      title: "Mask",
      url: "blog/mask/grid",
      subPages: [
        {
          title: "Blog mask grid",
          url: "blog/mask/grid",
        },
        {
          title: "Blog mask masonry",
          url: "blog/mask/masonry",
        },
      ],
    },
    {
      title: "Single Post",
      url: "blog/single/pellentesque-fusce-suscipit",
    },
  ],
  element: [
    {
      title: "Products",
      url: "elements/products",
    },
    {
      title: "Typography",
      url: "elements/typography",
    },
    {
      title: "Titles",
      url: "elements/titles",
    },
    {
      title: "Product Category",
      url: "elements/product-category",
    },
    {
      title: "Buttons",
      url: "elements/buttons",
    },
    {
      title: "Accordions",
      url: "elements/accordions",
    },
    {
      title: "Alert & Notification",
      url: "elements/alerts",
    },
    {
      title: "Tabs",
      url: "elements/tabs",
    },
    {
      title: "Testimonials",
      url: "elements/testimonials",
    },
    {
      title: "Blog Posts",
      url: "elements/blog-posts",
    },
    {
      title: "Instagrams",
      url: "elements/instagrams",
    },
    {
      title: "Call to Action",
      url: "elements/cta",
    },
    {
      title: "Icon Boxes",
      url: "elements/icon-boxes",
    },
    {
      title: "Icons",
      url: "elements/icons",
    },
  ],
};

export const elementsList = [
  {
    url: "accordions",
    class: "element-accordian",
    title: "accordions",
  },
  {
    url: "blog-posts",
    class: "element-blog",
    title: "blog posts",
  },
  {
    url: "buttons",
    class: "element-button",
    title: "buttons",
  },
  {
    url: "cta",
    class: "element-cta",
    title: "call to action",
  },
  {
    url: "icon-boxes",
    class: "element-icon-box",
    title: "icon boxes",
  },
  {
    url: "icons",
    class: "element-icon",
    title: "Icons",
  },
  {
    url: "instagrams",
    class: "element-portfolio",
    title: "instagrams",
  },
  {
    url: "categories",
    class: "element-category",
    title: "product categories",
  },
  {
    url: "products",
    class: "element-product",
    title: "products",
  },
  {
    url: "tabs",
    class: "element-tab",
    title: "tabs",
  },
  {
    url: "testimonials",
    class: "element-testimonial",
    title: "testimonials",
  },
  {
    url: "titles",
    class: "element-title",
    title: "titles",
  },
  {
    url: "typography",
    class: "element-typography",
    title: "typography",
  },
  {
    url: "alerts",
    class: "element-video",
    title: "Notification",
  },
];

export const headerBorderRemoveList = [
  "/",
  "/shop",
  "/shop/infinite-scroll",
  "/shop/horizontal-filter",
  "/shop/navigation-filter",
  "/shop/off-canvas-filter",
  "/shop/right-sidebar",
  "/shop/grid/[grid]",
  "/pages/404",
  "/elements",
  "/elements/products",
  "/elements/typography",
  "/elements/titles",
  "/elements/product-category",
  "/elements/buttons",
  "/elements/accordions",
  "/elements/alerts",
  "/elements/tabs",
  "/elements/testimonials",
  "/elements/blog-posts",
  "/elements/instagrams",
  "/elements/cta",
  "/elements/icon-boxes",
  "/elements/icons",
];