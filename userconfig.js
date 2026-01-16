// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Madrid",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "",
      timezone: "Europe/Madrid",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_11.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "freemediaheckyeah",
              url: "https://fmhy.net",
              icon: "star",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "news",
              url: "https://newsasfacts.com/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "ars technica",
              url: "https://arstechnica.com/",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "deadstack",
              url: "https://deadstack.net/",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "science news",
              url: "https://phys.org/",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "ground news",
              url: "https://ground.news/",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_06.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            // {
            //   name: "stackoverflow",
            //   url: "https://stackoverflow.com",
            //   icon: "brand-stackoverflow",
            //   icon_color: palette.peach,
            // },
            // {
            //   name: "duckdb",
            //   url: "https://app.motherduck.com",
            //   icon: "file-type-sql",
            //   icon_color: palette.red,
            // },
            // {
            //   name: "collab",
            //   url: "https://colab.research.google.com",
            //   icon: "notebook",
            //   icon_color: palette.mauve,
            // },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "api",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "free-for.dev",
              url: "https://free-for.dev/",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "appdevtools",
              url: "https://appdevtools.com/",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "reading",
          links: [
            {
              name: "goodreads",
              url: "https://www.goodreads.com/",
              icon: "book",
              icon_color: palette.green,
            },
            // {
            //   name: "facebook",
            //   url: "https://www.facebook.com",
            //   icon: "brand-facebook",
            //   icon_color: palette.peach,
            // },
            // {
            //   name: "reddit",
            //   url: "https://www.reddit.com/r/unixporn",
            //   icon: "brand-reddit",
            //   icon_color: palette.red,
            // },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "boardGameGeek",
              url: "https://boardgamegeek.com/",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            // {
            //   name: "nintendo",
            //   url: "https://store.nintendo.co.uk",
            //   icon: "device-nintendo",
            //   icon_color: palette.blue,
            // },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            // {
            //   name: "patreon",
            //   url: "https://www.patreon.com",
            //   icon: "brand-patreon",
            //   icon_color: palette.red,
            // },
            // {
            //   name: "kyivstar",
            //   url: "https://tv.kyivstar.ua",
            //   icon: "star-filled",
            //   icon_color: palette.blue,
            // },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
