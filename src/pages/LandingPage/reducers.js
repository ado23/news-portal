import { GET_TOP_HEADLINES_SUCCESS, RESET_ARTICLES_DATA, RESET } from "./types";

const dummy = [
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: "Jon Swaine, Emma Brown",
    title:
      "Video undercuts Trump elector Cathy Latham's account of Georgia voting breach - The Washington Post",
    description:
      "Parts of state GOP official Cathy Latham's testimony about the copying of sensitive elections software in Coffee County appear to diverge from surveillance camera footage and other evidence.",
    url: "https://www.washingtonpost.com/investigations/2022/09/20/coffee-county-georgia-cathy-latham/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BX7FO3BYQEI63OFPBICOLXB5WY.jpg&w=1440",
    publishedAt: "2022-09-20T08:04:00Z",
    content:
      "On Jan. 7, 2021, a group of forensics experts working for lawyers allied with President Donald Trump spent eight hours at a county elections office in southern Georgia, copying sensitive software and… [+13097 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: "Rachel Pannett",
    title:
      "Crackdown after Mahsa Amini’s death prompts protests in Iran - The Washington Post",
    description:
      "Authorities fired on people protesting the death of Mahsa Amini, killing at least five, according to a rights watchdog.",
    url: "https://www.washingtonpost.com/world/2022/09/20/iran-mahsa-amini-death-hijab-protest/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/24DA5FRYN4I63OFPBICOLXB5WY.jpg&w=1440",
    publishedAt: "2022-09-20T07:38:25Z",
    content:
      "Security forces cracked down on protesters demonstrating across Iran over the death of a young woman in the custody of its so-called morality police, allegedly killing five.\r\nThe death of Mahsa Amini… [+3240 chars]"
  },
  {
    source: {
      id: null,
      name: "CBS Sports"
    },
    author: "Jeff Kerr",
    title:
      "Eagles vs. Vikings score: Jalen Hurts, Darius Slay star as Philly stomps all over Minnesota - CBS Sports",
    description: "Hurts thoroughly outplayed Kirk Cousins under the lights",
    url: "https://www.cbssports.com/nfl/news/eagles-vs-vikings-score-jalen-hurts-darius-slay-star-as-philly-stomps-all-over-minnesota/live/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2022/09/20/3b82ab67-e521-4d4f-95cf-62c0496e21dd/thumbnail/1200x675/6d446039e9e37d6ebc268a50cf26d240/jalen-hurts.jpg",
    publishedAt: "2022-09-20T06:30:00Z",
    content:
      "Five years after the Eagles rolled over the Vikings at Lincoln Financial Field to advance to the Super Bowl, Philly welcomed Minnesota back to town on Monday night with a similar tenacity. Despite en… [+3448 chars]"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "Lauren Said-Moorhouse, Christian Edwards",
    title: "Why the Royal Vault isn't the Queen's final resting place - CNN",
    description:
      "Queen Elizabeth's coffin came to its final resting place at Windsor on Monday. This completed its long journey from Balmoral Castle to Edinburgh, then from Buckingham Palace to Westminster Hall and Westminster Abbey, and then finally to St. George's Chapel in…",
    url: "https://www.cnn.com/2022/09/19/uk/queen-royal-vault-king-george-chapel-intl-gbr/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220919085544-02-royal-vault-st-georges-chapel-0910.jpg?q=w_800,c_fill",
    publishedAt: "2022-09-20T05:35:00Z",
    content:
      "Queen Elizabeths coffin came to its final resting place at Windsor on Monday. This completed its long journey from Balmoral Castle to Edinburgh, then from Buckingham Palace to Westminster Hall and We… [+2083 chars]"
  },
  {
    source: {
      id: "independent",
      name: "Independent"
    },
    author: "Rachel Sharp",
    title:
      "Adnan Syed hearing - live: Serial podcast’s subject walks out of court to cheers as conviction is overturned - The Independent",
    description:
      "Officials have 30 days to decide whether they will fully drop the charges against him",
    url: "https://www.independent.co.uk/news/world/americas/crime/adnan-syed-freed-sentence-vacated-evidence-serial-baltimore-b2170884.html",
    urlToImage:
      "https://static.independent.co.uk/2022/09/19/22/SEI126137080.jpg?quality=75&width=1200&auto=webp",
    publishedAt: "2022-09-20T05:30:37Z",
    content:
      "The Supreme Court decision that may deny Adnan Syed legal recourse\r\nOne of the key claims used in vacating Adnan Syeds murder conviction is that prosecutors witheld valuable evidence from his defence… [+866 chars]"
  },
  {
    source: {
      id: null,
      name: "CNBC"
    },
    author: "Jesse Pound",
    title:
      "Stock futures rise slightly with Fed set to kick off September meeting on Tuesday - CNBC",
    description:
      "Stock futures were modestly higher on Tuesday morning ahead of the central bank's September meeting.",
    url: "https://www.cnbc.com/2022/09/19/stock-market-futures-open-to-close-news.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107117716-1663083512931-down.jpg?v=1663625046&w=1920&h=1080",
    publishedAt: "2022-09-20T04:59:00Z",
    content:
      "Stock futures rose slightly on Tuesday morning as Wall Street looked to build on a modest rebound ahead of another rate hike from the Federal Reserve.\r\nFutures tied to the Dow Jones Industrial Averag… [+1484 chars]"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author:
      "Maria Santana, Polo Sandoval, Priscilla Alvarez, Kristina Sgueglia",
    title:
      "Attorneys for migrants sent to Martha's Vineyard looking into origination of brochures they believe were handed out under 'false pretenses' - CNN",
    description:
      'Attorneys for many of the nearly 50 migrants who landed unexpectedly in Martha\'s Vineyard said Monday that brochures given to their clients were "highly misleading" and "used to entice (their) clients to travel under the guise that (resettlement) support was …',
    url: "https://www.cnn.com/2022/09/19/us/migrants-marthas-vineyard-brochure/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220919162145-02-migrants-marthas-vineyard-brochure-front.jpg?q=w_800,c_fill",
    publishedAt: "2022-09-20T04:45:00Z",
    content:
      "Attorneys for many of the nearly 50 migrants who landed unexpectedly in Marthas Vineyard said Monday that brochures given to their clients were highly misleading and used to entice (their) clients to… [+5317 chars]"
  },
  {
    source: {
      id: null,
      name: "ESPN"
    },
    author: "Turron Davenport, Alaina Getzenberg",
    title:
      "Buffalo Bills flex muscles in dominant win over Tennessee Titans - ESPN",
    description:
      "Josh Allen and Stefon Diggs highlight offensive onslaught as Bills go to 2-0, Titans move to 0-2.",
    url: "https://www.espn.com/nfl/story/_/id/34624715/buffalo-bills-flex-muscles-dominant-win-tennessee-titans",
    urlToImage:
      "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0920%2Fr1064436_1296x729_16%2D9.jpg",
    publishedAt: "2022-09-20T04:06:58Z",
    content:
      "ORCHARD PARK, N.Y. -- The Buffalo Bills took care of business in the first game of a Monday Night Football doubleheader, knocking off the Tennessee Titans 41-7. The Bills scored on the opening drive … [+5045 chars]"
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News"
    },
    author: null,
    title:
      'Hurricane Fiona slams Dominican Republic after knocking out power in Puerto Rico and causing "catastrophic" damage - CBS News',
    description:
      "Authorities in the U.S. territory said it was too early to know the full scope of damage from an expansive storm that was still forecast to unleash torrential rain across Puerto Rico on Monday.",
    url: "https://www.cbsnews.com/news/hurricane-fiona-dominican-republic-puerto-rico-power-outage/",
    urlToImage:
      "https://assets1.cbsnewsstatic.com/hub/i/r/2022/09/18/5b20b980-2395-4dc1-a5fa-5390689f33b7/thumbnail/1200x630/77acffe3a8c561b5f16dcf614386cf8c/fiona-puerto-rico-2022-09-18.jpg",
    publishedAt: "2022-09-20T04:01:00Z",
    content:
      "Hurricane Fiona unleashed more rain on Puerto Rico on Monday, a day after the storm knocked out power and water to most of the island, and National Guard troops rescued hundreds of people who got str… [+6214 chars]"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author:
      "Karol Suarez, Brandon Miller, Juan Carlos Paz, Florencia Trucco, Hande Atay Alam",
    title:
      "Tsunami threat passes following powerful earthquake in Mexico - CNN",
    description:
      "A powerful 7.7-magnitude earthquake rocked the southwestern coast of Mexico on Monday, killing at least one person, with shaking reported as far away as Mexico city.",
    url: "https://www.cnn.com/2022/09/19/americas/tsunami-warning-follows-major-quake-in-mexico-intl-latam/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220919152217-01-mexico-city-earthquake-reax.jpg?q=w_800,c_fill",
    publishedAt: "2022-09-20T03:13:00Z",
    content:
      "A powerful 7.7-magnitude earthquake rocked the southwestern coast of Mexico on Monday, killing at least one person, with shaking reported as far away as Mexico city.\r\nThe earthquake hit just after 1 … [+1960 chars]"
  },
  {
    source: {
      id: null,
      name: "The Guardian"
    },
    author: "Guardian staff reporter",
    title:
      "'Out of control': rise in STDs, including 26% syphilis spike, sparks US alarm - The Guardian",
    description:
      "The rate of syphilis cases has hit its highest in three decades as officials work on new solutions such as at-home test kits",
    url: "https://amp.theguardian.com/society/2022/sep/19/sexually-transmitted-disease-rise-syphilis-us",
    urlToImage: null,
    publishedAt: "2022-09-20T02:10:00Z",
    content:
      "Sexual healthThe rate of syphilis cases has hit its highest in three decades as officials work on new solutions such as at-home test kits\r\nTue 20 Sep 2022 03.10 BST\r\nSharply rising cases of some sexu… [+4753 chars]"
  },
  {
    source: {
      id: null,
      name: "Deadline"
    },
    author: "Lynette Rice",
    title:
      "‘Dancing With The Stars’: Who Survived And Who Went Home After Premiere Night On Disney+ - Deadline",
    description:
      "Dancing with the Stars began its 31st season Monday in the most peculiar manner: by asking viewers to click a watch button on Disney+ at exactly 5 p.m./8 p.m. “Tune” in any earlier and you’ll get a reminder — NO, its at 8 p.m. ET, pal! Come back when it’s tim…",
    url: "https://deadline.com/2022/09/dancing-with-the-stars-season-31-premiere-recap-1235122564/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2022/09/Dancing-with-the-stars-feature.jpg?w=1000",
    publishedAt: "2022-09-20T02:00:00Z",
    content:
      "Dancing with the Stars began its 31st season Monday in the most peculiar manner: by asking viewers to click a watch button on Disney+ at exactly 5 p.m./8 p.m. “Tune” in any earlier and you’ll get a r… [+8054 chars]"
  },
  {
    source: {
      id: null,
      name: "MacRumors"
    },
    author: "Joe Rossignol",
    title:
      "Apple to Release iOS 16 Update Next Week With Fix for Excessive Copy and Paste Prompts and iPhone 14 Pro Issues - MacRumors",
    description:
      "iOS 16 introduced a new privacy feature that requires apps to receive a user's permission before accessing their iPhone's clipboard to paste...",
    url: "https://www.macrumors.com/2022/09/19/apple-to-fix-ios-16-copy-paste-issue-next-week/",
    urlToImage:
      "https://images.macrumors.com/t/y4GUkVGg5FaJLKvJCElBWeIF74U=/1600x/article-new/2022/09/iOS-16-Copy-Paste-Permission-Prompt.jpeg",
    publishedAt: "2022-09-20T01:55:35Z",
    content:
      "iOS 16 introduced a new privacy feature that requires apps to receive a user's permission before accessing their iPhone's clipboard to paste text from other apps, but some users have experienced an i… [+1249 chars]"
  },
  {
    source: {
      id: "politico",
      name: "Politico"
    },
    author: null,
    title:
      "Biden leaves no doubt: 'Strategic ambiguity' toward Taiwan is dead - POLITICO",
    description:
      "The president's remark that the U.S. would defend Taiwan against a Chinese attack “doesn't really have the hallmark of an off-the-cuff remark,” one expert said.",
    url: "https://www.politico.com/news/2022/09/19/biden-leaves-no-doubt-strategic-ambiguity-toward-taiwan-is-dead-00057658",
    urlToImage:
      "https://static.politico.com/be/a1/a8f78e00480787d1a99bc4a432dd/ap21320053983809.jpg",
    publishedAt: "2022-09-20T01:39:18Z",
    content:
      "Bidens assertion reflects his administrations recognition that the U.S. must apply a more robust deterrence to Beijing given its worsening military intimidation of Taiwan. That harassment is rooted i… [+7253 chars]"
  },
  {
    source: {
      id: "reuters",
      name: "Reuters"
    },
    author: null,
    title:
      "Ukraine marches farther into liberated lands, separatist calls for urgent referendum - Reuters",
    description:
      "Ukraine said its troops have marched farther east into territory recently abandoned by Russia, paving the way for a potential assault on Moscow's occupation forces in the Donbas region as Kyiv seeks more Western arms.",
    url: "https://www.reuters.com/world/europe/ukraine-marches-farther-into-liberated-lands-separatist-calls-urgent-referendum-2022-09-19/",
    urlToImage:
      "https://www.reuters.com/resizer/N-nEJp-2_tabCmhbSyt9sBL_PT4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BA5XMTLQ7BLDNB7CNATRDINOOM.jpg",
    publishedAt: "2022-09-20T01:21:00Z",
    content:
      "IZIUM, Ukraine, Sept 20 (Reuters) - Ukraine said its troops have marched farther east into territory recently abandoned by Russia, paving the way for a potential assault on Moscow's occupation forces… [+5819 chars]"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "Manu Raju, CNN Chief Congressional Correspondent",
    title:
      "GOP leaders say approving Covid aid will be even harder after Biden 'pandemic is over' remark - CNN",
    description:
      'Top Republicans, who were already skeptical about approving more Covid-19 relief money, said Monday that President Joe Biden\'s comments that the "pandemic is over" essentially shuts the door on the slim chances of more money getting approved.',
    url: "https://www.cnn.com/2022/09/19/politics/congress-reaction-biden-covid/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/170515101540-01-john-cornyn-file-super-tease.jpg",
    publishedAt: "2022-09-20T01:02:00Z",
    content: null
  },
  {
    source: {
      id: null,
      name: "Variety"
    },
    author: "Brian Steinberg",
    title: "Chris Redd Is Latest to Exit ‘Saturday Night Live’ - Variety",
    description:
      "Add Chris Redd to the list of veteran cast members walking away from “Saturday Night Live.” Redd has decided to exit NBC’s venerable late-night showcase after five seasons on the program, and is just the latest member of what has been one of the program’s lar…",
    url: "https://variety.com/2022/tv/news/chris-redd-saturday-night-live-exit-1235377527/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2022/09/chris-redd-snl-seth-meyers.jpg?w=1001",
    publishedAt: "2022-09-20T01:00:00Z",
    content:
      "Add Chris Redd to the list of veteran cast members walking away from “Saturday Night Live.”\r\nRedd has decided to exit NBC’s venerable late-night showcase after five seasons on the program, and is jus… [+3440 chars]"
  },
  {
    source: {
      id: null,
      name: "MarketWatch"
    },
    author: "Claudia Assis",
    title:
      "Ford stock drops more than 4% as supply costs to jump by $1 billion, parts shortages to leave more cars unfinished - MarketWatch",
    description:
      "Inflation causes supply costs to soar, Ford says, while unfinished vehicles will shift some revenue from third to fourth quarter",
    url: "https://www.marketwatch.com/story/ford-stock-drops-more-than-4-as-supply-costs-to-jump-by-1-billion-parts-shortages-to-leave-more-cars-unfinished-11663619706",
    urlToImage: "https://images.mktw.net/im-590968/social",
    publishedAt: "2022-09-20T00:39:00Z",
    content:
      "Ford Motor Co. shares dropped more than 4% in the extended session Monday after the company said inflation and parts shortages will leave it with more unfinished vehicles than it had expected, remind… [+2512 chars]"
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg"
    },
    author: null,
    title:
      "China's LVMH Wannabe Unravels After Tycoon's Failed $3 Billion Bet - Bloomberg",
    description: null,
    url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=716c6c85-38b1-11ed-bdaa-6375495a5942&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOS0yMC9jaGluYS1zLWx2bWgtd2FubmFiZS11bnJhdmVscy1hZnRlci10eWNvb24tcy1mYWlsZWQtMy1iaWxsaW9uLWJldA==",
    urlToImage: null,
    publishedAt: "2022-09-20T00:30:00Z",
    content:
      "To continue, please click the box below to let us know you're not a robot."
  },
  {
    source: {
      id: null,
      name: "The Guardian"
    },
    author: "Guardian staff reporter",
    title:
      "Russia-Ukraine war latest: what we know on day 209 of the invasion - The Guardian",
    description:
      "Forensic experts exhume 146 bodies from mass burial site at Izium; Russia loses full control of Luhansk as Ukraine retakes village",
    url: "https://amp.theguardian.com/world/2022/sep/20/russia-ukraine-war-latest-what-we-know-on-day-209-of-the-invasion",
    urlToImage:
      "https://i.guim.co.uk/img/media/13ef15bfa512b36efefd98c147485b3c56796758/0_194_6016_3610/master/6016.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b2bea413a95d4ac26728f744d7ad9223",
    publishedAt: "2022-09-20T00:22:00Z",
    content:
      "<li>Ukrainian forensic experts have so far exhumed 146 bodies, mostly of civilians, at the mass burial site near Izium in eastern Ukraine, the regional governor said on Monday. Oleh Synehubov, govern… [+3632 chars]"
  }
];

const INITIAL_STATE = {
  articles: dummy,
  totalResults: 0,
  filters: {
    country: "us",
    category: null,
    q: null,
    pageSize: 20,
    page: 1
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        totalResults: action.payload.totalResults,
        filters: { ...state.filters, ...action.payload.filters }
      };

    case RESET_ARTICLES_DATA:
      return { ...state, articles: [], totalResults: [] };

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}
