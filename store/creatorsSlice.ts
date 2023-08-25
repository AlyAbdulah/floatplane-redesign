// store/creatorsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface Creator {
  id: string;
  title: string;
  subscribed: boolean;
  owner: {
    id: string;
    username: string;
  };
  urlname: string;
  description: string;
  about: string;
  category: {
    id: string;
    title: string;
  };
  cover: {
    width: number;
    height: number;
    path: string;
    childImages: Array<{
      path: string;
      width: number;
      height: number;
    }>;
  } | null;
  icon: {
    width: number;
    height: number;
    path: string;
    childImages: Array<{
      width: number;
      height: number;
      path: string;
    }>;
  };
  liveStream: null;
  subscriptionPlans: Array<{
    id: string;
    title: string;
    description: string;
    price: string | null;
    priceYearly: null | string;
    currency: string;
    logo: null;
    interval: string;
    featured: boolean;
    allowGrandfatheredAccess: boolean | undefined;
    discordServers: Array<string>;
    discordRoles: Array<string>;
  }>;
  discoverable: boolean;
  subscriberCountDisplay: string;
  incomeDisplay: boolean;
  defaultChannel: string;
}

interface CreatorsState {
  allCreators: Creator[];
  subscribedCreators: Creator[];
}

const initialState: CreatorsState = {
  allCreators: [
    {
      id: "59f94c0bdd241b70349eb72b",
      subscribed: false,
      owner: {
        id: "59f94c0bdd241b70349eb723",
        username: "Linus",
      },
      title: "LinusTechTips",
      urlname: "linustechtips",
      description:
        "We make entertaining videos about technology, including tech reviews, showcases, and other content.",
      about: "# We're LinusTechTips\nWe make videos and stuff, cool eh?",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1990,
        height: 519,
        path: "https://pbs.floatplane.com/cover_images/59f94c0bdd241b70349eb72b/696951209272749_1521668313867.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/59f94c0bdd241b70349eb72b/696951209272749_1521668313867_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 600,
        height: 600,
        path: "https://pbs.floatplane.com/creator_icons/59f94c0bdd241b70349eb72b/770551996990709_1551249357205.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/59f94c0bdd241b70349eb72b/770551996990709_1551249357205_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/59f94c0bdd241b70349eb72b/770551996990709_1551249357205_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5d48d0306825b5780db93d07",
          title: "LTT Supporter",
          description:
            "- 2 Exclusives Per Week (Meet the Team, Extras, Behind the Scenes) \n- Exclusive livestreams\n- Save $10 by purchasing an annual subscription\n- Our gratitude for your support",
          price: "5.00",
          priceYearly: "50.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e0ba6ac14e2590f760a0f0f",
          title: "LTT Supporter Plus",
          description:
            "- 4K Bitrate Streaming\n- 2 Exclusives Per Week (Meet the Team, Extras, Behind the Scenes) \n- Exclusive livestreams\n- Save $20 by purchasing an annual subscription\n- LTX 2023 Digital Pass\n- Our gratitude for your support",
          price: "10.00",
          priceYearly: "100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "total",
      incomeDisplay: false,
      defaultChannel: "63fe42c309e691e4e36de93d",
    },
    {
      id: "59fa58f93acf6013471d5822",
      subscribed: false,
      owner: {
        id: "59fa582d89a08f5945427b6c",
        username: "bitwit",
      },
      title: "Bitwit Ultra",
      urlname: "bitwit_ultra",
      description: "To be edited",
      about: "# Bitwit Ultra",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5ae3b26e255e90164cca5758/628069566553424_1524871790220.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5ae3b26e255e90164cca5758/628069566553424_1524871790220_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 400,
        height: 400,
        path: "https://pbs.floatplane.com/creator_icons/59fa58f93acf6013471d5822/914170981917573_1565129019342.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/59fa58f93acf6013471d5822/914170981917573_1565129019342_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/59fa58f93acf6013471d5822/914170981917573_1565129019342_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5a2b1d448789f90c3bf0e427",
          title: "Bitwit Ultra",
          description: "Basic package for BitWit Ultra",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          discordServers: [],
          discordRoles: [],
          allowGrandfatheredAccess: false
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de942",
    },
    {
      id: "5ae0f8114336369a2c3619b6",
      subscribed: false,
      owner: {
        id: "5ae0f8114336369a2c3619b4",
        username: "TechDeals",
      },
      title: "TechDeals",
      urlname: "tech_deals",
      description:
        "Welcome to Tech Deals on Floatplane!  Having nothing to do with actual floatplanes since 2016, we are proud to be part of the launch of Floatplane!  We make videos about technology!",
      about:
        "Welcome to Tech Deals on Floatplane!  Having nothing to do with actual floatplanes since 2016, we are proud to be part of the launch of Floatplane!  We make videos about technology!",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1923,
        height: 502,
        path: "https://pbs.floatplane.com/cover_images/5ae0f8114336369a2c3619b6/264955378957772_1600880420171.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5ae0f8114336369a2c3619b6/264955378957772_1600880420171_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/5ae0f8114336369a2c3619b6/223941270270735_1600882905853.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5ae0f8114336369a2c3619b6/223941270270735_1600882905853_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5ae0f8114336369a2c3619b6/223941270270735_1600882905853_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5d506f2f7c7e6afa2ef1e246",
          title: "1080p Plan - Videos on Demand + Live Streams",
          description:
            "This plan gives you access to all published videos at up to 1080p detail.\nYou also get access to 1080p live streams exclusive to Floatplane.\nThis also grants you access to the private channels on the Tech Deals Discord, link your Floatplane account to Discord to be automatically upgraded.",
          price: "5.00",
          priceYearly: "50.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e1710272aae3bc9cabdf505",
          title: "4K - All Access Plan",
          description:
            "This plan gives you access to all published videos at up to 4K detail.\nYou also get access to 1080p live streams exclusive to Floatplane.\nThis also grants you access to the private channels on the Tech Deals Discord, link your Floatplane account to Discord to be automatically upgraded.\nBONUS - This plan allows you to download the videos in high quality for off-line viewing!\nThis is a great way to increase your level of support if you really love our content!",
          price: "10.00",
          priceYearly: "100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "all",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de944",
    },
    {
      id: "5d3606f85fa46b731f1d581d",
      subscribed: false,
      owner: {
        id: "5aa1a51fe90c0e1360b09bda",
        username: "UFDTech",
      },
      title: "UFD Tech",
      urlname: "ufdtech",
      description:
        "Attempting to mix far-flung tech ideas with the integrity of a reviewer, that's where you'll find this channel most of the time.",
      about:
        "# UFD Tech\nAttempting to mix far-flung tech ideas with the integrity of a reviewer, that's where you'll find this channel most of the time.",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5d3606f85fa46b731f1d581d/043737560944421_1564644014854.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5d3606f85fa46b731f1d581d/043737560944421_1564644014854_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 500,
        height: 500,
        path: "https://pbs.floatplane.com/creator_icons/5d3606f85fa46b731f1d581d/393091433382086_1563952714266.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5d3606f85fa46b731f1d581d/393091433382086_1563952714266_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5d3606f85fa46b731f1d581d/393091433382086_1563952714266_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5d3810abee1456a4190a1bc5",
          title: "First Floater",
          description:
            "You'll get both pre-release (as early as we can) content from both the UFD Tech & Hot News channels.\nwe will do our best to make sure that no pre-roll/post-roll ads will show up in the content.\nThere may be some fully sponsored videos that appear here, but those will be infrequent.\nA basic plan that covers up to 1080p VOD's as well as livestreaming",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de941",
    },
    {
      id: "5d48c7be5fa46b731f1d5885",
      subscribed: false,
      owner: {
        id: "5cb2196b38b5a1b05e1df551",
        username: "wendell",
      },
      title: "Level1Techs",
      urlname: "level1techs",
      description:
        "Hello! We're Level One Techs. We are passionate about technology and how it shapes our world. We create videos sharing our knowledge about tech, science and design.",
      about:
        "Hello! We're Level One Techs. We are passionate about technology and how it shapes our world. We create videos sharing our knowledge about tech, science and design.",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1245,
        height: 325,
        path: "https://pbs.floatplane.com/cover_images/5d48c7be5fa46b731f1d5885/537387409825804_1675967330539.jpeg",
        childImages: [],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5d48c7be5fa46b731f1d5885/999439110820967_1565050933254.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5d48c7be5fa46b731f1d5885/999439110820967_1565050933254_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5d48c7be5fa46b731f1d5885/999439110820967_1565050933254_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5d48c8536825b5780db93cee",
          title: "Basic",
          description:
            "Just a basic plan for supporting Level 1 and getting things squared away on Floatplane!",
          price: "5.00",
          priceYearly: "48.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "total",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de943",
    },
    {
      id: "5e01428f3d4e7d45d06127ed",
      subscribed: false,
      owner: {
        id: "5cc5595da66610c5c2af05cf",
        username: "3dprintingnerd",
      },
      title: "3D Printing Nerd",
      urlname: "3dprintingnerd",
      description:
        "We aim to inspire and educated, all while having a really good time. Content is family friendly, and we cater to those 8 years old to 80 years old.",
      about:
        "3D Printing Nerd is a channel devoted to the wonderful world of 3d printing. We like to cover all things from hobby and consumer level, all the way up to the industrial additive manufacturing machines and businesses. We talk to people and find the story, and then through conversation let those people tell you their story in their own words.",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e01428f3d4e7d45d06127ed/523265991679923_1594948161898.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e01428f3d4e7d45d06127ed/523265991679923_1594948161898_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5e01428f3d4e7d45d06127ed/434045211056619_1577141020375.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e01428f3d4e7d45d06127ed/434045211056619_1577141020375_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e01428f3d4e7d45d06127ed/434045211056619_1577141020375_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e0143e12a4d3918b4ac4795",
          title: "Supporter Club",
          description:
            "This is the starter Floatplane plan. You'll get all the regular content, but without any of those pesky YouTube advertisements before, during, or after the video.",
          price: "3.00",
          priceYearly: "36.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e01593fb85a2718965843fe",
          title: "Highfive Club",
          description:
            "It's my HIGHFIVE CLUB on Floatplane! Buy a year in advance and get ONE MONTH FREE! You'll have access to all the regular content\nPLUS, all of the bonus content the HIGHFIVE CLUB gets.\nThere are After The Five episodes, and special uploads sometimes giving you a peek at new stuff before everyone else.",
          price: "5.00",
          priceYearly: "55.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e015a3fb85a27189658440c",
          title: "Download Plan",
          description:
            "All the HIGHFIVE club has to offer, plus being able to download it - PLUS ONE MONTH FREE if paid yearly!\nThis is the one for you if you're looking to download the episodes to your own server to watch at home!",
          price: "10.00",
          priceYearly: "110.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e066d9eb85a27189658488d",
          title: "HIGHFIVE 20",
          description:
            "DANG. You want to support what we do at a $20/month level. That's crazy! Thank you so much! You'll get everything we offer PLUS paying a year in advance gets you one month for free.",
          price: "20.00",
          priceYearly: "220.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e066e0a2a4d3918b4ac4c28",
          title: "bawwlllerrrr",
          description:
            "GEESH.This tier originally created for KevlarCondom, and it's a $100/month plan. It's beyond words incredible for you to want to support at this level. WOW. Obviously, you get everything, and paying a year in advance gets you one month for free :)",
          price: "100.00",
          priceYearly: "1100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de947",
    },
    {
      id: "5e0237533d4e7d45d06127f7",
      subscribed: false,
      owner: {
        id: "5df770b259e75e8ab9741fe2",
        username: "TheMightyJingles",
      },
      title: "The Mighty Jingles",
      urlname: "TheMightyJingles",
      description:
        "The Mighty Jingles.   Rockstar, brain surgeon, pirate, horse-thief, evil genius and noob gamer extraordinaire",
      about:
        "22 years of undetected crime in the Royal Navy left me in no way prepared or qualified to present gaming videos on YouTube or anywhere else.  Which is unfortunate considering what I do for a living.",
      category: {
        id: "59f94c0bdd241b70349eb728",
        title: "Gaming",
      },
      cover: {
        width: 1345,
        height: 351,
        path: "https://pbs.floatplane.com/cover_images/5e0237533d4e7d45d06127f7/447885295759471_1577203726313.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e0237533d4e7d45d06127f7/447885295759471_1577203726313_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 450,
        height: 450,
        path: "https://pbs.floatplane.com/creator_icons/5e0237533d4e7d45d06127f7/642677320580596_1577813986053.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0237533d4e7d45d06127f7/642677320580596_1577813986053_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0237533d4e7d45d06127f7/642677320580596_1577813986053_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e0237be3004ebe0da1c481f",
          title: "Mineshaft Supervisor",
          description:
            "Collect your pickaxe and report to Mineshaft #3.  Ad-free video plus the ability to download for viewing later.",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e13c48674a3ceb42927c53b",
          title: "Salt Miner",
          description:
            "The basic package - ad-free streaming of all my Floatplane video uploads.",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "all",
      incomeDisplay: false,
      defaultChannel: "63fe42c409e691e4e36de946",
    },
    {
      id: "5e0a35aa5e351721d033a7a4",
      subscribed: false,
      owner: {
        id: "5df795f5ea876c8a799f68df",
        username: "TylerMcVicker",
      },
      title: "Tyler McVicker",
      urlname: "TylerMcVicker",
      description:
        "A known passionate gamer. YouTube and Twitch, best known for informative reports on Valve, Bethesda, CDPR, etc. He/Him",
      about:
        "I make fun reports on YouTube and Twitch, best known for finding information on Valve, Bethesda, Nintendo, and many other topics. He/Him\n",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e0a35aa5e351721d033a7a4/045777262949204_1639083593867.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e0a35aa5e351721d033a7a4/045777262949204_1639083593867_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/5e0a35aa5e351721d033a7a4/466445281399955_1639083594442.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0a35aa5e351721d033a7a4/466445281399955_1639083594442_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0a35aa5e351721d033a7a4/466445281399955_1639083594442_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "61b2819fe5f2ba57115ef262",
          title: "A Passionate Gamer",
          description:
            "- Extended Cuts of Reports\n- Your Name in the End Credits of ALL VIDEOS AND STREAMS\n- Early Releases of Reports\n- Weekly Exclusive Streams of Floatplane\n- Monthly Q&A Video; You Can Submit a Question\n- Weekly Behind the Scenes Vlogs\n- Discord Role; Many secrets are shared there\n- Access to Server IPs and Multiplayer Games When Filming for Videos\n- First Access to Video Scripts, Idea Outlines, Early Cuts, and So Much More",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "61b2a8f10e640a404b83fccd",
          title: "An Uber Passionate Gamer",
          description:
            "- Everything from the Previous Tiers\n- Pick a game to be streamed on the Twitch page, once a month*\n- Vote on content ideas, future projects, and direction of content.\n*Within reason; the game cannot be TOS or get me into any legal trouble.",
          price: "25.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "61b2a9b0306b3952b4f69b5e",
          title: "The Ultimately Passionate Gamer",
          description:
            "- Everything from the previous tiers\n- PICK A VIDEO TOPIC; A FULL RESEARCH TOPIC; ONCE A MONTH*\n*The topic will be discussed in a 1-on-1 DM on Discord. The topic has to be related to video games, and cannot get me into legal trouble. All will be discussed in the DMs.",
          price: "50.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "624e440908c1f26addb609e1",
          title: "A Very Passionate Gamer",
          description:
            "- Everything from the Previous Tiers\n- Choose a game to be streamed on the weekly Floatplane streams, once a month\n- Access to the Super Secret Phone Number; Call in on Certain Streams*\n*This is the phone number used to call the past; the phone is hooked up to a time machine back in 1999; the number will call an alternate reality version of Tyler McVicker who was born in 1974, and works as a freelance games journalist for magazines and websites of the day. The phone calls will only be connected during these alternate reality events, the broadcasts of which will be announced on Discord beforehand. ",
          price: "10.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "total",
      incomeDisplay: true,
      defaultChannel: "63fe42c409e691e4e36de94a",
    },
    {
      id: "5e0a600be978e91d74e8c69e",
      subscribed: false,
      owner: {
        id: "5df7ca8e59e75e8ab9744e63",
        username: "BadSeedTech",
      },
      title: "BadSeed Tech",
      urlname: "BadSeedTech",
      description:
        "Detailed real-world looks at aesthetics, customization, high-end PC peripherals, and audio.",
      about:
        "Providing unbiased reviews of high-end PC gaming peripherals and audio hardware. And probably offending some people in the process. \nBeard of a champion. Humor of an 8th grader.",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e0a600be978e91d74e8c69e/843970875572798_1580839973839.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e0a600be978e91d74e8c69e/843970875572798_1580839973839_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5e0a600be978e91d74e8c69e/262002612683515_1577738339656.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0a600be978e91d74e8c69e/262002612683515_1577738339656_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0a600be978e91d74e8c69e/262002612683515_1577738339656_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5ea9c95f3d93c37399b020a2",
          title: "GROUND FLOOR (1080p)",
          description:
            "This tier includes:\n-Early access to most non-embargo videos (up to a week)\n-Virtually no baked in pre-roll ads / sponsor placements\n-Access to the private Floatplane channel in Discord\n-My undying appreciation",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5ea9c9bc3d93c37399b020a9",
          title: "LETS GO!! (VIP TIER)",
          description:
            "Same features as the $5 tier - you're just a generous person with deep pockets and I love that about you.",
          price: "10.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5ea9cab93d93c37399b020b6",
          title: "LEVEL UP (4K + DOWNLOAD)",
          description:
            "For those who want to support a little more, this tier includes:\n-Early access to most non-embargo videos (up to a week)\n-Virtually no baked in pre-roll ads / sponsor placements\n-Access to the private Floatplane channel in Discord\n-My undying appreciation (NOW with 50% more GRATITUDE)\nPLUS\n-4K Quality\n-Ability to download videos up to 4K",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de94c",
    },
    {
      id: "5e0b818aced7211628e8b1c4",
      subscribed: false,
      owner: {
        id: "5df79a99ea876c8a799f6b6a",
        username: "RobertNeal",
      },
      title: "Robert Neal",
      urlname: "RobertNeal",
      description:
        "I'm Bob, the founder of RetroRGB, guitarist / songwriter in 2 Weeks, beer lover and overall technology nerd!  ",
      about:
        "# Robert Neal\nSubscribers will support all the behind-the-scenes work I do in the retro gaming world, as well as help keep the RetroRGB Weekly Roundup going!",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1245,
        height: 325,
        path: "https://pbs.floatplane.com/cover_images/5e0b818aced7211628e8b1c4/894382104614631_1579275292165.jpeg",
        childImages: [],
      },
      icon: {
        width: 345,
        height: 345,
        path: "https://pbs.floatplane.com/creator_icons/5e0b818aced7211628e8b1c4/986625982769692_1577824522296.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0b818aced7211628e8b1c4/986625982769692_1577824522296_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0b818aced7211628e8b1c4/986625982769692_1577824522296_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e0bb1fa025359101842c8dc",
          title: "$5 Subscription - 1080p",
          description:
            "This tier offers all the content RetroRGB releases, up to 1080p60.  Your support funds the RetroRGB Weekly Roundup, as well as all the behind-the-scenes development I'm involved with in the retro-gaming scene!",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e21f704bc71381ad4166df9",
          title: "$10 Subscription - 4K",
          description:
            "This tier offers all the same content as the rest, but also includes high quality 4K versions of the higher-production videos;  All weekly's are 1080p60, but almost every single review or demo is shot in 4K60.",
          price: "10.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e21f7b4a71b751ad56f5950",
          title: "$3 Subscription",
          description:
            "This tier offers all the content RetroRGB releases, up to 1080p60.  Your support funds the RetroRGB Weekly Roundup, as well as all the behind-the-scenes development I'm involved with in the retro-gaming scene!",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de94d",
    },
    {
      id: "5e0b899b299f45224c8fa332",
      subscribed: false,
      owner: {
        id: "5d8948cdb3e3285cfffe35d3",
        username: "LawfulMasses",
      },
      title: "Lawful Masses with Leonard French",
      urlname: "LawfulMasses",
      description:
        "Hello and thank you for reading!\nI'm Leonard French, a copyright attorney actively practicing in Pennsylvania.\nIt is my goal to bring you high-quality, well-researched, and fun videos on the law. The major focus will be on internet related law, but so many areas of the legal landscape are so complex, yet full of amazing stories just waiting to be told.\nOver the last eight years, I've made it my job to defend individuals and small businesses in copyright disputes. I've represented hundreds of clients in various federal courts around the country. It is 110% clear to me that many people need more information about the law.\nIn return for your pledge, you get mine: I pledge to bring you weekly interesting news and information videos on various topics of law. We do our best to put out daily videos and pledge to put out at least three-to-four per week minimum.\nThank you for your support!",
      about:
        "Hello and thank you for reading!\nI'm Leonard French, a copyright attorney actively practicing in Pennsylvania.\nIt is my goal to bring you high-quality, well-researched, and fun videos on the law. The major focus will be on internet related law, but so many areas of the legal landscape are so complex, yet full of amazing stories just waiting to be told.\nOver the last eight years, I've made it my job to defend individuals and small businesses in copyright disputes. I've represented hundreds of clients in various federal courts around the country. It is 110% clear to me that many people need more information about the law.\nIn return for your pledge, you get mine: I pledge to bring you weekly interesting news and information videos on various topics of law. We do our best to put out daily videos and pledge to put out at least three-to-four per week minimum.\nThank you for your support!",
      category: {
        id: "59f94c0bdd241b70349eb729",
        title: "Informational",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e0b899b299f45224c8fa332/607809612719100_1577814496881.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e0b899b299f45224c8fa332/607809612719100_1577814496881_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/5e0b899b299f45224c8fa332/732472348915166_1583945150233.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0b899b299f45224c8fa332/732472348915166_1583945150233_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0b899b299f45224c8fa332/732472348915166_1583945150233_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e0b899b299f45224c8fa334",
          title: "Lawful Masses Basic Access",
          description: "Support the channel and get an ad-free experience!",
          price: "3.00",
          priceYearly: "30.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e69091afdcc45f1589e4ec2",
          title: "Advocate",
          description:
            "Get your name in lights, support the channel, have an ad-free experience! I'll put your name on the LED Panel that scrolls in the background AND in the credits at the end of each video! Supporters are added on the 2nd of every month. Thanks for your support!",
          price: "5.00",
          priceYearly: "50.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e690a9ffdcc45f1589e4ece",
          title: "Executor",
          description:
            "Get access to a weekly supporters-only video! Also, get your name in lights, support the channel, and get an ad-free experience! I'll put your name on the LED Panel that scrolls in the background AND in the credits at the end of each video! Supporters are added on the 2nd of every month. Thanks for your support!",
          price: "10.00",
          priceYearly: "100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e690b04be39bc53942f6ff7",
          title: "Counselor",
          description:
            "Get a shout-out in our videos! I'll read your name during the video credits and you'll appear in your own special crawl just for $50+ supporters! Also, get access to a weekly supporters-only video, get your name in lights, support the channel, and get an ad-free experience! I'll put your name on the LED Panel that scrolls in the background AND in the credits at the end of each video! Supporters are added on the 2nd of every month. Thanks for your support!",
          price: "50.00",
          priceYearly: "500.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "all",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de94f",
    },
    {
      id: "5e0bb452fd9eec0f443b3d7f",
      subscribed: false,
      owner: {
        id: "5df8dfa48124d38f6f3d87a8",
        username: "IanFW",
      },
      title: "Forgotten Weapons",
      urlname: "ForgottenWeapons",
      description:
        "Ian McCollum is a self-described professional gun nerd, passionate about firearm design, manufacture, history, and practical use. He is always looking for rare, experimental, and unusual firearms to learn about, and loves sharing that interest with others.",
      about:
        "Ian McCollum is a self-described professional gun nerd, passionate about firearm design, manufacture, history, and practical use. He is always looking for rare, experimental, and unusual firearms to learn about, and loves sharing that interest with others.",
      category: {
        id: "59f94c0bdd241b70349eb729",
        title: "Informational",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e0bb452fd9eec0f443b3d7f/153210736198270_1577825390519.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e0bb452fd9eec0f443b3d7f/153210736198270_1577825390519_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5e0bb452fd9eec0f443b3d7f/902875089629609_1577825415880.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e0bb452fd9eec0f443b3d7f/902875089629609_1577825415880_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e0bb452fd9eec0f443b3d7f/902875089629609_1577825415880_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e0bb453fd9eec0f443b3d81",
          title: "Floatplane Subscriber",
          description:
            "This is the basic level of subscription to support Forgotten Weapons and view content here on Floatplane. You will get all new videos as they are uploaded, and the back catalog will be added over time (it's a slow process). You will also  see periodic (a couple times per week) behind the scenes content of what goes on in Ian's life: the \"Apocrypha\" video series. Generally not specifically gun-related. Just neat or interesting things at home and on the road! \nThis level allows basic streamed video viewing only; not downloading.",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e0d294c7e9f73dfffa28504",
          title: "Early Video Access",
          description:
            "In order to maintain a video every day, I do a lot of advance scheduling of videos to cover times when I am traveling or filming (or sleeping). As a Subscriber at this level, you will be able to watch each video when it is complete and uploaded - typically a week before it publishes and sometimes a month before. You will also be able to download copies of videos to save for personal use offline, and you will have access to the behind-the-scenes Apocrypha videos.\nNOTE: Floatplane does note currently support different publication dates for different subscription plans, but that feature is coming. I will implement it here as soon as the platform allows!",
          price: "20.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e0d2ca37e9f73dfffa28512",
          title: "Subscribe + Download",
          description:
            "Want to save videos for personal offline viewing? This level gives you everything that the basic subscription does, plus the ability to save videos to your local computer or device.",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e0d339f53a0c170e10134df",
          title: "Big-Spender Supporter",
          description:
            "If you want to help keep Forgotten Weapons creating great material, this is a fine way to do it. This subscription level offers the same perks as the $5 plan, but with the extra support to the channel. Thanks!",
          price: "10.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de950",
    },
    {
      id: "5e182f33cf10061b3cd5c9bb",
      subscribed: false,
      owner: {
        id: "5df774c3adbf148a9f6c7c0a",
        username: "GearSeekers",
      },
      title: "Gear Seekers",
      urlname: "GearSeekers",
      description: "Tech with a cheeky Aussie twist.",
      about:
        "You peek, We seek!\nWe're bringing tech to life with a cheeky Aussie twist.\nGear Seekers is a concoction of custom PC builds, hardware reviews, un-boxings & install guides, lots of Linux, a smattering of retro PC builds and much much more.\n",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e182f33cf10061b3cd5c9bb/459237587372685_1578643295351.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e182f33cf10061b3cd5c9bb/459237587372685_1578643295351_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5e182f33cf10061b3cd5c9bb/968100933854388_1578643296000.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e182f33cf10061b3cd5c9bb/968100933854388_1578643296000_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e182f33cf10061b3cd5c9bb/968100933854388_1578643296000_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e182f33cf10061b3cd5c9bd",
          title: "Official Gear Seeker",
          description:
            "One of us! One of us!!\nYour subscription means you’re a card carrying Gear Seeker!\nCOMING SOON: Music downloads - Original GS music available for personal use!",
          price: "3.00",
          priceYearly: "30.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5e190ebd6b12ee8513f32f5a",
          title: "4K Gear Seeker",
          description:
            "Your subscription means you’re a card carrying 4K Gear Seeker!\nCOMING SOON: Music downloads - Original GS music available for personal use!",
          price: "10.00",
          priceYearly: "100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de95a",
    },
    {
      id: "5e1e1ac47622cc11287c6f11",
      subscribed: false,
      owner: {
        id: "5e1e10a9995299852eff581a",
        username: "lonseidman",
      },
      title: "Lon.TV",
      urlname: "LonSeidman",
      description: "Consumer friendly tech reviews! ",
      about:
        "Lon Seidman delivers honest and independently produced tech reviews with his impressions on a wide range of consumer technology. ",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5e1e1ac47622cc11287c6f11/389212753797092_1579031280607.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5e1e1ac47622cc11287c6f11/389212753797092_1579031280607_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 288,
        height: 288,
        path: "https://pbs.floatplane.com/creator_icons/5e1e1ac47622cc11287c6f11/823489846809321_1579031281186.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5e1e1ac47622cc11287c6f11/823489846809321_1579031281186_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5e1e1ac47622cc11287c6f11/823489846809321_1579031281186_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5e1e1ac57622cc11287c6f13",
          title: "Lon.TV Bronze Level Supporter",
          description:
            "Our basic subscription plan - includes access to all content and your name listed in the end credits roll at the end of each video. ",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f8058ae9101b05895d073f3",
          title: "Lon.TV SIlver Level",
          description:
            "Our silver level plan includes access to all content and your name listed on our still frames in the credit rolls! This also unlocks 4k videos",
          price: "10.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f8058e8f7907658d0fce637",
          title: "Gold Level Supporter",
          description:
            "Our Gold Level plan gives you access to everything in the other plans and a verbal shoutout at the end of each and every video for the duration of your support. ",
          price: "50.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "all",
      incomeDisplay: false,
      defaultChannel: "63fe42c509e691e4e36de95d",
    },
    {
      id: "5f84f83f5edaca3b4d1289c8",
      subscribed: false,
      owner: {
        id: "5f84f7e87759103aaad4d008",
        username: "HardwareUnboxed",
      },
      title: "Hardware Unboxed",
      urlname: "HardwareUnboxed",
      description:
        "We test the latest and greatest PC hardware and games on release day so you can get the scoop!",
      about:
        "Handy links:\nDiscord: [link](https://www.floatplane.com/post/u6F0UdEh8t)\nDisplay Profiles: [link](https://www.floatplane.com/post/F9ktSJtmOF)\nBTS Video Archive: [link](https://www.floatplane.com/post/CddAKGSahL)\nLive Stream Archive: [link](https://www.floatplane.com/post/91ZLPrHnJI)",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5f84f83f5edaca3b4d1289c8/378090062935692_1602551684260.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5f84f83f5edaca3b4d1289c8/378090062935692_1602551684260_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/5f84f83f5edaca3b4d1289c8/470472539025218_1602551686013.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5f84f83f5edaca3b4d1289c8/470472539025218_1602551686013_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5f84f83f5edaca3b4d1289c8/470472539025218_1602551686013_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5f84f83f5edaca3b4d1289cb",
          title: "HUB Discord Supporter",
          description:
            "This tier includes access to our Discord community, and our monthly live streams hosted on YouTube\n- Discord\n- Exclusive live streams\n- Text posts",
          price: "2.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f937a625edaca3b4d12a2d9",
          title: "HUB Gold Supporter",
          description:
            "This tier gives access to our videos at 1080p for streaming and download, including behind the scenes content. Some main channel videos will be provided here on Floatplane earlier than on YouTube (timing will vary), as we aren't slaves to the algorithm! You'll also gain access to an exclusive channel in our Discord community, and you'll be able to download our calibrated display profiles.\n- Early access to main channel videos (1080p)\n- Behind the scenes videos (1080p)\n- Display calibration profiles\n- Discord + No Sleep Zone\n- Exclusive live streams\n- Text posts",
          price: "5.00",
          priceYearly: "50.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f937aa0a6756c3b887e2354",
          title: "HUB Gold 4K Supporter",
          description:
            "This tier is the same as HUB Gold, except with access to 4K quality videos for streaming and downloading\n- Early access to main channel videos (4K)\n- Behind the scenes videos (4K)\n- Display calibration profiles\n- Discord + No Sleep Zone\n- Exclusive live streams\n- Text posts",
          price: "10.00",
          priceYearly: "100.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5faf4360a763765988bb4146",
          title: "HUB Extreme Supporter",
          description:
            "This is the same as the Gold 4K tier, but for those that want to provide additional support to the channel. We sincerely appreciate your contribution\n- Early access to main channel videos (4K)\n- Behind the scenes videos (4K)\n- Display calibration profiles\n- Discord + No Sleep Zone\n- Exclusive live streams\n- Text posts",
          price: "25.00",
          priceYearly: "250.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "total",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de96c",
    },
    {
      id: "5f8607b7d4470bfe472cbe7c",
      subscribed: false,
      owner: {
        id: "5ddc5f79215e5d4562b7abbc",
        username: "CraftComputing",
      },
      title: "Craft Computing",
      urlname: "CraftComputing",
      description:
        "Welcome to Craft Computing! Everything you want in a PC Enthusiast Tech Channel, including a side of Craft Beer. I cover everything from Gaming and Workstation builds and reviews, to HomeLab Tutorials and LIVE News. \nThrough Floatplane, you'll not only get the same high-quality videos from the YouTube channel, but also access to my Exclusive Discord Server and premium content.\nThanks so much for your continued support... Cheers!",
      about:
        "Started in 2017 by IT-Professional-Turned-Tech-Reviewer, Craft Computing aims to look at all aspects of being a PC and Technology enthusiast, including PCs, SBCs, Workstations, Servers, Networking and MORE!",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/5f8607b7d4470bfe472cbe7c/578312178273433_1602632479737.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5f8607b7d4470bfe472cbe7c/578312178273433_1602632479737_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/5f8607b7d4470bfe472cbe7c/127852876624019_1602632480298.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5f8607b7d4470bfe472cbe7c/127852876624019_1602632480298_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5f8607b7d4470bfe472cbe7c/127852876624019_1602632480298_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5f8607b7d4470bfe472cbe7f",
          title: "Craft Computing Discord",
          description:
            "All videos from YouTube, Ad Free, along with access to Craft Computing's exclusive Discord server.",
          price: "2.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f8f5877a6756c3b887e1d08",
          title: "Craft Computing Premium Content",
          description:
            "Features all of the perks of the On Demand plan, plus access to exclusive Premium Content! Anything from Behind the Scenes, LEGO builds, Live Q+As and more.",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "total",
      incomeDisplay: true,
      defaultChannel: "63fe42c609e691e4e36de96e",
    },
    {
      id: "5f8741235edaca3b4d128d1d",
      subscribed: false,
      owner: {
        id: "5f8740297759103aaad4d351",
        username: "toastybros",
      },
      title: "Toastybros",
      urlname: "Toastybros",
      description:
        "A couple of guys who know a thing or two about building computers.",
      about:
        "We release exclusive content that never makes it to YouTube here. Some of it may be worth the money, some of it may not. Regardless you are supporting the Toastybros by subscribing here on Floatplane. ",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1500,
        height: 392,
        path: "https://pbs.floatplane.com/cover_images/5f8741235edaca3b4d128d1d/599457610568583_1603682323056.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/5f8741235edaca3b4d128d1d/599457610568583_1603682323056_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 500,
        height: 500,
        path: "https://pbs.floatplane.com/creator_icons/5f8741235edaca3b4d128d1d/177627299844391_1603682323760.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5f8741235edaca3b4d128d1d/177627299844391_1603682323760_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5f8741235edaca3b4d128d1d/177627299844391_1603682323760_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5f8741235edaca3b4d128d20",
          title: "Toastybros Standard",
          description:
            "Our recommended plan for those who want access to our behind the scenes exclusive content that won't ever make it to YouTube or other social media platforms. ",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5f96414ba6756c3b887e2a1a",
          title: "Toastybros Premium",
          description:
            "This tier is for those who want to help support us more than the standard tier and want access to 4K Playback + potential exclusive Floatplane live streams that will remain exclusive to floatplane + the premium tier supporters. ",
          price: "5.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de980",
    },
    {
      id: "5f886b28b1076a23b81ed43c",
      subscribed: false,
      owner: {
        id: "5c76e82e7af529718057f294",
        username: "TheGunCollective",
      },
      title: "The Gun Collective",
      urlname: "TheGunCollective",
      description:
        "This is the internet’s new home for firearms news, gun porn, and the highest quality gun content around.\n",
      about:
        "#TheGunCollective\nThis is the internet’s new home for firearms news, gun porn, and the highest quality gun content around.",
      category: {
        id: "59f94c0bdd241b70349eb729",
        title: "Informational",
      },
      cover: {
        width: 1245,
        height: 325,
        path: "https://pbs.floatplane.com/cover_images/5f886b28b1076a23b81ed43c/603597324786974_1604601114213.jpeg",
        childImages: [],
      },
      icon: {
        width: 512,
        height: 512,
        path: "https://pbs.floatplane.com/creator_icons/5f886b28b1076a23b81ed43c/798712553135329_1604601114911.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/5f886b28b1076a23b81ed43c/798712553135329_1604601114911_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/5f886b28b1076a23b81ed43c/798712553135329_1604601114911_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "5f886b28b1076a23b81ed43e",
          title: "TGC Fundamentals",
          description:
            "This plan includes streaming videos up to 1080p as well as any live content we may do on here. It's also a great way to support TGC away from other platforms. ",
          price: "5.56",
          priceYearly: "60.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5fa5c39c201b70f7f5288403",
          title: "TGC Full Bore",
          description:
            "If you want full access to every bit of content we make, this is your plan. You can watch AND download everything in the highest definition and quality settings this site will allow. It's also a massive help for us. ",
          price: "25.00",
          priceYearly: "275.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "5fac5e5cdc6724505b3c70c1",
          title: "TGC Advanced",
          description:
            "Stepping things up! This plan includes streaming everything up to 4K resolution AND access to streaming the podcast!",
          price: "7.62",
          priceYearly: "90.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: true,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: false,
      subscriberCountDisplay: "total",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de971",
    },
    {
      id: "605921124e62297311ab72d0",
      subscribed: false,
      owner: {
        id: "605920aa667328730a92438c",
        username: "ivycomb",
      },
      title: "Ivycomb",
      urlname: "ivycomb",
      description: "Add a description for your channel here.",
      about: "# Ivycomb\nAdd some more information about your channel here.",
      category: {
        id: "59f94c0bdd241b70349eb729",
        title: "Informational",
      },
      cover: null,
      icon: {
        width: 400,
        height: 400,
        path: "https://pbs.floatplane.com/creator_icons/605921124e62297311ab72d0/394267757117538_1616454205795.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/605921124e62297311ab72d0/394267757117538_1616454205795_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/605921124e62297311ab72d0/394267757117538_1616454205795_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "605921124e62297311ab72d3",
          title: "Access Tier",
          description:
            "Here's what the worker bee tier gets you!\n• Your name in the credits of videos on the main channel\n• Access to the patron-only chat in my Discord server\n• Early access to videos in 1080p\n• Access to exclusive streams\n• Early Access to 320kb/s MP3s of my music\n• Access to patron-only polls\n",
          price: "4.00",
          priceYearly: "45.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "607652487ce12862acffddbb",
          title: "Squad Bee",
          description:
            "Here's what the squad bee tier gets you!\n• Your name in the credits of videos on ALL of my channels, and with a star or circle next to your name!\n• Access to the patron-only chat in my Discord server\n• Early access to videos in 4k (or 1080p if 4k is unavailable)\n• Full access to exclusive streams\n• Full access to art raffles\n• Early access to music + Studio quality WAVE files\n• Full access to patron-only polls\n• Access to stems or project files for some of my music\n• Access to project files for tutorials\n• Unrestricted access to patron-only events",
          price: "10.00",
          priceYearly: "110.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "6076528d2bd7f99cea3383aa",
          title: "Queen Bee",
          description:
            "The queen bee tier grants access to ALL previous perks, as well as: \n• Your name in the credits of videos on ALL of my channels, but in gold!\n• A 10% discount code on merch (delivered via Discord upon request)\n• A verbal thank you at the end of each video on the main channel and your name in the video description\n• Priority access to special events and video recording opportunities",
          price: "40.00",
          priceYearly: "420.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "63f3034b0a98eed9ca3c014b",
          title: "Honey Bee",
          description:
            "The Honey Bee tier grants access to ALL previous perks, as well as:\n• Your name in the credits of videos on ALL of my channels, but with your name in a pastel orange!\n• Your name in the video description of every video\n• Priority access to special events and video recording opportunities",
          price: "25.00",
          priceYearly: "260.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de977",
    },
    {
      id: "61bc20c9a131fb692bf2a513",
      subscribed: false,
      owner: {
        id: "5f66a897e264de1860a43ec0",
        username: "GarbageStream",
      },
      title: "The Trash Network",
      urlname: "GarbageStream",
      description: "I must do what I do. ",
      about: "Welcome to Floatplane! Home to all of my trash content! ",
      category: {
        id: "5e028ba43d4e7d45d061281b",
        title: "Music",
      },
      cover: {
        width: 1992,
        height: 520,
        path: "https://pbs.floatplane.com/cover_images/61bc20c9a131fb692bf2a513/574265434573293_1689218512624.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/61bc20c9a131fb692bf2a513/574265434573293_1689218512624_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 355,
        height: 355,
        path: "https://pbs.floatplane.com/creator_icons/61bc20c9a131fb692bf2a513/443752568820949_1689288689931.jpeg",
        childImages: [
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/61bc20c9a131fb692bf2a513/443752568820949_1689288689931_250x250.jpeg",
          },
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/61bc20c9a131fb692bf2a513/443752568820949_1689288689931_100x100.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "61bc20c9a131fb692bf2a516",
          title: "You Get Garbage",
          description: "Congratulations, you now have Garbage.",
          price: "2.80",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "61d03951c980f41db08bb22a",
          title: "A Years Worth of Garbage",
          description:
            "Declare yourself an insane person and commit to an entire years worth of Garbage, at a discount price 💸. ",
          price: null,
          priceYearly: "25.00",
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "total",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de97e",
    },
    {
      id: "626ad21aa2ffab0c7d8f69ac",
      subscribed: false,
      owner: {
        id: "626ad18183e0d61e2c915880",
        username: "ShankMods",
      },
      title: "Shank Mods",
      urlname: "ShankMods",
      description: "Extra videos that don't fit well on YouTube. ",
      about:
        "Hello I'm Shank.\nI'm a modder known for my work in the Wii Portablizing scene, where I helped lay the foundation of making the dream of Wii Portables a reality. Outside the tech forums, I'm known for my YouTube videos showcasing various projects, such as the GameCube JoyCons and the Hot Wheels sleeper PC, and various Wii Portables. ",
      category: {
        id: "59f94c0bdd241b70349eb727",
        title: "Technology",
      },
      cover: {
        width: 1981,
        height: 517,
        path: "https://pbs.floatplane.com/cover_images/626ad21aa2ffab0c7d8f69ac/705890707315517_1651815696339.jpeg",
        childImages: [
          {
            width: 1245,
            height: 325,
            path: "https://pbs.floatplane.com/cover_images/626ad21aa2ffab0c7d8f69ac/705890707315517_1651815696339_1245x325.jpeg",
          },
        ],
      },
      icon: {
        width: 720,
        height: 720,
        path: "https://pbs.floatplane.com/creator_icons/626ad21aa2ffab0c7d8f69ac/962618237649415_1651626625390.jpeg",
        childImages: [
          {
            width: 100,
            height: 100,
            path: "https://pbs.floatplane.com/creator_icons/626ad21aa2ffab0c7d8f69ac/962618237649415_1651626625390_100x100.jpeg",
          },
          {
            width: 250,
            height: 250,
            path: "https://pbs.floatplane.com/creator_icons/626ad21aa2ffab0c7d8f69ac/962618237649415_1651626625390_250x250.jpeg",
          },
        ],
      },
      liveStream: null,
      subscriptionPlans: [
        {
          id: "626ad21aa2ffabc6d18f69af",
          title: "All Videos",
          description:
            "Access to all videos, ad-free, including exclusives and livestreams. ",
          price: "3.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
        {
          id: "6274b989d7e14324928b8764",
          title: "All Videos + Discord ",
          description:
            "-Access to all videos, ad-free, including exclusives and livestreams\n-Discord role with access to private channel with occasional sneak peeks of upcoming projects",
          price: "6.00",
          priceYearly: null,
          currency: "usd",
          logo: null,
          interval: "month",
          featured: false,
          allowGrandfatheredAccess: false,
          discordServers: [],
          discordRoles: [],
        },
      ],
      discoverable: true,
      subscriberCountDisplay: "hide",
      incomeDisplay: false,
      defaultChannel: "63fe42c609e691e4e36de97f",
    },
  ],
  subscribedCreators: [],
};

const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  reducers: {
    subscribeCreator: (state, action: PayloadAction<string>) => {
      const creator = state.allCreators.find(
        (creator) => creator.id === action.payload
      );
      if (creator) {
        creator.subscribed = true;
        state.subscribedCreators.push(creator);
      }
    },
  },
});

export const { subscribeCreator } = creatorsSlice.actions;

export const selectAllCreators = (state: RootState) =>
  state.creators.allCreators;
export const selectSubscribedCreators = (state: RootState) =>
  state.creators.subscribedCreators;

export default creatorsSlice.reducer;
