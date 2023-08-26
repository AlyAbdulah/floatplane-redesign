/* eslint-disable @next/next/no-img-element */
"use client";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { subscribeCreator, selectAllCreators, selectSubscribedCreators } from "@/store/creatorsSlice";
export function ShowSubscriptions() {
  const [cIndex, setCIndex] = useState("");
  const [cTitle, setCTitle] = useState("");
  const [scrollPos, setScrollPos] = useState(0);
  const [showPlans, setShowPlans] = useState(false);
  const [sPlans, setSPlans] = useState<Array<any>>([]);

  const allCreators = useSelector(selectAllCreators);

  const handleShowPlans = (cIndex: string, ctitle: string, cPlans: Array<any>) => {
    setScrollPos(handleCurrentScrollPos())
    setCIndex(cIndex)
    setCTitle(ctitle)
    setSPlans(cPlans)
    setShowPlans(true);
    
  };

  useEffect(() => {
    if (showPlans) {
      document.querySelector("#section-container")!.scroll(0, 0)
    }
    else {
      document.querySelector("#section-container")!.scroll(0, (scrollPos))
    }
  }, [scrollPos, showPlans])

  const handleCurrentScrollPos = () => {
    const scroller = document.querySelector("#section-container");
    const scrollVal = scroller != null ? scroller.scrollTop : 0
    console.log(scrollVal)
    return scrollVal
  }

  return (
    <>
      {showPlans ? (
        <Subscribe
          cid={cIndex}
          title={cTitle}
          scrollPos={scrollPos}
          show={showPlans}
          subscriptionPlans={sPlans}
          handleShow={setShowPlans}
        />
      ) : (
        <div className="grid gap-4 @xs:grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-4 mt-3 justify-items-center">
          {allCreators.map((channel) => !channel.subscribed && (

            <div
              key={channel.id}
              className="w-full space-y-2 my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-300"
            >
              <a href="#">
                <img
                  className="p-4 h-48 w-48 rounded-full mx-auto"
                  src={channel.icon.path}
                  alt="Channel image"
                />
              </a>
              <div className="px-5 pb-5 space-y-4">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight">
                    {channel.title}
                  </h5>
                </a>

                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-3xl font-bold">
                      <span className="text-sm font-normal">From</span> $
                      {channel.subscriptionPlans[0].price}
                    </span>
                  </span>
                  <button
                    onClick={() => handleShowPlans(channel.id, channel.title, channel.subscriptionPlans)}
                    className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:-translate-y-1 hover:bg-primary/75 duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export function Subscribe(props: {
  cid: string;
  title: string
  show: boolean
  scrollPos: number
  subscriptionPlans: Array<
    {
      id: string;
      title: string;
      description: string;
      price: string | null
      priceYearly: string | null
    }
  >
  handleShow: Function
}) {
  const {cid, title, show, scrollPos, subscriptionPlans} = props

  const dispatch = useDispatch();

  const handleSubscribe = () => {
    dispatch(subscribeCreator(cid));
    props.handleShow(false)
  };

  const handleClose = () => {
    props.handleShow(false)
  }
  return (
    <>
      <div
        className={` ${
          show ? "" : "hidden"
        } inset-0 items-center flex flex-col justify-center h-full w-full my-2 p-2 rounded-md shadow-md bg-gray-200/75 dark:bg-gray-800`}
      >
        <div className="w-full flex justify-between py-4 px-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title} Subscription Plans
          </h3>
          <button
            onClick={() => handleClose()}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <XMarkIcon className="w-3 h-3" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {
            subscriptionPlans.map((data) => 
            <div 
              key={data.id} 
              className="flex flex-col p-4 text-center rounded-lg border border-gray-200 shadow bg-gray-100 dark:bg-transparent dark:border-gray-600"
            >
              <h3 className="mb-4 text-2xl font-semibold">{data.title}</h3>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">${data.price ? data.price : data.priceYearly}</span>
                  <span className="text-gray-500 dark:text-gray-400">/{data.price ? "month" : "yearly"}</span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                {
                  data.description.split("\n").map((list, index) => 
                    <li 
                      key={index} 
                      className="flex items-center space-x-3"
                    >
                      <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                      <span>{list}</span>
                    </li>
                  )
                }
              </ul>
              <button 
                onClick={() => handleSubscribe()}
                className="bg-primary hover:bg-primary/75 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto"
              >
                Get started
              </button>
            </div>
          )
          }
        </div>
      </div>
    </>
  );
}
export function ShowMySubscriptions(props: { expand: boolean, containerClass: string, btnClass:string }) {
  const { expand, containerClass, btnClass } = props;
  const subscribedCreators = useSelector(selectSubscribedCreators);
  return(
    <>
      <div className={`${containerClass}`}>
        {
          subscribedCreators.map((channel: any, index: number) => (
    
            <button
              className={`flex flex-row ${btnClass} my-1 p-2 space-x-2 courser-pointer items-center rounded-lg hover:bg-secondary/50 duration-150`}
              key={index}
            >
              <img
                className={`w-12 h-auto rounded-full`}
                src={channel.icon.childImages[1].path}
                alt={`${channel.title} Profile`}
                height={channel.icon.childImages[1].height}
                width={channel.icon.childImages[1].width}
              />
              <span
                className={`font-medium text-lg dark:text-white ${expand ? "block" : "hidden"}`}
              >
                {" "}
                {channel.title.slice(0, 14) +
                  (channel.title.length > 14 ? "..." : "")}{" "}
              </span>
            </button>
          ))
        }
      </div>
    </>
  );
}
