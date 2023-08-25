"use client";
import { ArrowDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const FAQS = [
  {
    faqs: [
      {
        createdAt: "2019-10-03T18:46:31.714Z",
        updatedAt: "2022-02-06T03:19:55.746Z",
        id: "5d964207b3e3285cfffe44ab",
        question: "What is Floatplane?",
        answer:
          "Floatplane is an affordable video platform that will allow creators to diversify their revenue sources and connect with their audiences. ",
        status: "public",
        link: "wth-floatplane",
        order: 0,
        open: true,
        faqSection: "5d9641d0b3e3285cfffe44a9",
      },
      {
        createdAt: "2019-10-03T18:45:49.157Z",
        updatedAt: "2023-07-29T02:11:38.230Z",
        id: "5d9641ddbced315cc7d9135f",
        question: "How do you get the PewPew emote? ",
        answer:
          "The PewPew emote was as an account reward for users who had successfully set up a payment method on Floatplane.com before January 1st 2019. Hello there, screenshot this for the scavenger hunt.",
        status: "public",
        link: "g-pewpew-emote",
        order: 1,
        open: false,
        faqSection: "5d9641d0b3e3285cfffe44a9",
      },
      {
        createdAt: "2019-10-03T18:46:13.536Z",
        updatedAt: "2019-12-19T22:06:27.613Z",
        id: "5d9641f5bced315cc7d91360",
        question: "How do you get the LTX  emote? ",
        answer:
          "The LTX emote was given to all users who had an active subscription on Floatplane.com before the start of LTX 2019 (2019-06-26)",
        status: "public",
        link: "g-ltx-emote",
        order: 3,
        open: false,
        faqSection: "5d9641d0b3e3285cfffe44a9",
      },
      {
        createdAt: "2020-01-28T03:17:44.317Z",
        updatedAt: "2020-01-28T03:43:59.879Z",
        id: "5e2fa7d83d61f125eeb658a4",
        question: "Does Floatplane support 4K on my browser? ",
        answer:
          "Watching 4K videos on Floatplane is not an issue on any modern browser, including Safari, Chrome, and Firefox.&nbsp;If a quality level that you should be receiving doesn’t appear for a video,&nbsp;the creator may simply have not uploaded at that resolution for that video.",
        status: "public",
        link: "g-4k",
        order: 5,
        open: false,
        faqSection: "5d9641d0b3e3285cfffe44a9",
      },
    ],
    createdAt: "2019-10-03T18:45:36.840Z",
    updatedAt: "2019-12-19T22:08:50.481Z",
    id: "5d9641d0b3e3285cfffe44a9",
    name: "General",
    description: "For general questions about Floatplane",
    status: "public",
    order: 1,
  },
  {
    faqs: [
      {
        createdAt: "2022-02-06T03:11:26.711Z",
        updatedAt: "2022-02-06T03:18:51.813Z",
        id: "61ff3c5e816249841373c02e",
        question: "How much does Floatplane cost?",
        answer:
          "Each creator is able to define their own subscription plans with different feature levels and costs. Please refer to a creator's channel page for information regarding their subscription plans. Because all charges on the platform are in USD, your bank might apply currency conversion or other foreign transaction fees on top of listed subscription rates.",
        status: "public",
        link: "how-much-does-floatplane-cost",
        order: 0,
        open: true,
        faqSection: "5d8d1be612c2535c9dc067d1",
      },
      {
        createdAt: "2021-11-09T11:02:28.721Z",
        updatedAt: "2022-02-06T03:22:00.347Z",
        id: "618a55440d8fd85306b751ed",
        question: "Issues with recurring payments from India.",
        answer:
          "At this time, we do not have the capabilities to support recurring credit card payments from India. In the meantime, one may have better luck using PayPal for Floatplane transactions. We are working to alleviate this issue, but at this time payments will need to be handled each month in order to maintain access.",
        status: "public",
        link: "recurring-payments-india",
        order: 2,
        open: false,
        faqSection: "5d8d1be612c2535c9dc067d1",
      },
    ],
    createdAt: "2019-09-26T20:13:26.431Z",
    updatedAt: "2022-07-19T19:40:04.042Z",
    id: "5d8d1be612c2535c9dc067d1",
    name: "Subscription and Payment ",
    description: "For questions regarding recurring payments and pricing",
    status: "public",
    order: 2,
  },
  {
    faqs: [
      {
        createdAt: "2023-05-22T19:03:28.139Z",
        updatedAt: "2023-05-22T19:05:11.225Z",
        id: "646bbc8038f25e769cfd2d40",
        question: "No LTT Forum login method",
        answer:
          'The easiest way to break that method and switch to a username &amp; password would be to log out and use the "Forgotten your password?" link to request a new password. This will create a dedicated site pass and allow you to sign into the app.',
        status: "public",
        link: "forum-login",
        order: 1,
        open: true,
        faqSection: "5d8d24a6b3e3285cfffe3af0",
      },
      {
        createdAt: "2022-07-19T20:22:17.759Z",
        updatedAt: "2022-07-19T20:24:29.595Z",
        id: "62d71279e332296fd8e2a68c",
        question: "Can I switch out of the app and still listen to audio?",
        answer:
          "Background play is on the development roadmap but does not have an ETA for release.",
        status: "public",
        link: "apple-bgndplay",
        order: 2,
        open: false,
        faqSection: "5d8d24a6b3e3285cfffe3af0",
      },
      {
        createdAt: "2020-01-28T03:48:06.222Z",
        updatedAt: "2023-05-22T19:06:00.017Z",
        id: "5e2faef69bb6e248956dfecc",
        question: '"This app doesn’t support in-app activation”',
        answer:
          "Unfortunately, this is an Apple annoyance... Users will need at least one active subscription to login and use the app since we can't very well display nothing. We also can't collect payments on iOS due to lack of support for 3rd-party payment solutions (Stripe, PayPal).",
        status: "public",
        link: "apple-activation",
        order: 3,
        open: false,
        faqSection: "5d8d24a6b3e3285cfffe3af0",
      },
    ],
    createdAt: "2019-09-26T20:50:46.579Z",
    updatedAt: "2022-07-19T20:21:31.228Z",
    id: "5d8d24a6b3e3285cfffe3af0",
    name: "iOS App",
    description: "For issues related to Apple products",
    status: "public",
    order: 3,
  },
];
interface FAQQuestions {
  createdAt: string;
  updatedAt: string;
  id: string;
  question: string;
  answer: string;
  status: string;
  link: string;
  order: number;
  open: boolean;
  faqSection: string;
}
export function FAQContent() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setselectedCategory] = useState(
    "5d9641d0b3e3285cfffe44a9"
  );
  const Active =
    "inline-flex items-center justify-center p-4 text-primary border-b-2 border-primary rounded-t-lg active group";
  const Normal =
    "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";

  const FAQCategory = FAQS.map((category) => (
    <li key={category.id}>
      <button
        type="button"
        className={`${category.id === selectedCategory ? Active : Normal} duration-300`}
        onClick={() => setselectedCategory(category.id)}
      >
        {category.name}
      </button>
    </li>
  ));

  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 outline-transparent dark:outline-gray-900 rounded-lg bg-gray-200/75 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {FAQCategory}
        </ul>
      </div>
      <div className="space-y-0">
        <AllQuestions category={selectedCategory} query={keyword} />
      </div>
    </>
  );
}
export function AllQuestions(props: { category: string; query: string }) {
  const { category, query } = props;

  const [FaqObj, setFaqObj] = useState<Array<FAQQuestions>>([]);
  const [searchView, setSearchView] = useState(false);

  const handleQuestionViewState = (index: number) => {
    let cloneObj = FaqObj;
    cloneObj[index].open = !cloneObj[index].open;
    setFaqObj([...cloneObj]);
  };

  const initializeQuestions = () => {
    let allques: any = [];
    FAQS.map((obj) => obj.faqs.map((faq) => allques.push(faq)));
    setSearchView(false);
    setFaqObj(allques);
  };

  useEffect(() => {
    initializeQuestions();
  }, []);

  useEffect(() => {
    if (query === "") initializeQuestions();
    else {
      const filteredFaqs = FaqObj.filter((faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase())
      );
      //console.log(filteredFaqs)
      setSearchView(true);
      setFaqObj(filteredFaqs);
    }
  }, [query]);

  return FaqObj.map((content, index) =>
    searchView ? (
      <Accordian
        key={index}
        content={content}
        index={index}
        handleQuestionViewState={handleQuestionViewState}
      />
    ) : (
      content.faqSection === category && (
        <Accordian
          content={content}
          index={index}
          handleQuestionViewState={handleQuestionViewState}
        />
      )
    )
  );
}
interface AccordianData {
  question: string;
  open: boolean;
  answer: string;
}
function Accordian(props: {
  content: AccordianData;
  index: number;
  handleQuestionViewState: Function;
}) {
  const { content, index } = props;
  return (
    <>
      <div>
        <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => props.handleQuestionViewState(index)}
          >
            <span className="flex items-center">
              <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
              {content.question}
            </span>
            <ArrowDownIcon className={`w-4 h-4 ${ content.open ? "-rotate-180" : "rotate-0" } duration-300`} />
          </button>
        </h2>

        <div
          className={` ${ content.open ? "block" : "hidden" } duration-300 `}
        >
          <div className={`p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900`}>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {content.answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
