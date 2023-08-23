/* eslint-disable @next/next/no-img-element */
"use client";
import { Channels } from "@/modules/data";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export function ShowSubscriptions() {
  const [cIndex, setCIndex] = useState("");
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(Channels);
  const [subscriptions, setSubscriptions] = useState([]);
  const [showPlans, setShowPlans] = useState(false);

  const handleShowPlans = (index: number, cIndex: string) => {
    setIndex(index);
    setCIndex(cIndex)
    setShowPlans(true);
    
  };

  useEffect(() => {
    localStorage.removeItem("ids")
  }, [])

  return (
    <>
      {showPlans ? (
        <Subscribe
          id={index}
          cid={cIndex}
          data={data}
          show={showPlans}
          handleShow={setShowPlans}
          handleSubscriptions={setData}
        />
      ) : (
        <div className="grid gap-4 @xs:grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-4 mt-3 justify-items-center ">
          {data.map((channel) => (
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
                    onClick={() => handleShowPlans(Channels.indexOf(channel), channel.id)}
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
  id: number;
  cid: string
  show: boolean;
  data: Array<any>;
  handleShow: Function;
  handleSubscriptions: Function;
}) {
  const Selection = Channels[props.id];
  const handleSubscribed = () => {
    let prevIds: any;
    prevIds = JSON.parse(localStorage.getItem("ids") || '{ "ids": [], "cids" : [] }')
    prevIds["ids"].push(props.id)
    prevIds["cids"].push(props.cid)
    localStorage.setItem("ids", JSON.stringify(prevIds))
    const newData = props.data.filter((channel) => !prevIds["cids"].includes(channel.id));    
    props.handleShow(false);
    props.handleSubscriptions(newData);
  };
  return (
    <>
      <div
        className={` ${
          props.show ? "" : "hidden"
        } inset-0 items-center flex flex-col justify-center h-full w-full my-2 p-2 rounded-md bg-white dark:bg-gray-800`}
      >
        <div className="w-full flex justify-between py-4 px-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {Selection.title} Subscription Plans
          </h3>
          <button
            onClick={() => props.handleShow(false)}
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
            Selection.subscriptionPlans.map((data) => 
            <div 
              key={data.id} 
              className="flex flex-col p-4 text-center rounded-lg border border-gray-100 shadow dark:border-gray-600"
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
                onClick={() => handleSubscribed()}
                className="bg-primary hover:bg-primary/75 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto"
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
interface ChannelData {
  title: string,
  icon: {
    childImages: Array<ChannelIconImage>
  }
}
interface ChannelIconImage {
  path: string
  height: string
  width: string
}
export function ShowMySubscriptions(props: { expand: boolean, containerClass: string, btnClass:string }) {
  const { expand, containerClass, btnClass } = props;
  const [data, setData] = useState<any>([])

  const handleSubscriptions = () => {
    const data = JSON.parse(localStorage.getItem("ids") || '{}')
    let newData: any = new Set();
    if ("ids" in data) {
      if (data.ids.length > 0) {
        data.ids.forEach((id: number) => {
          newData.add(Channels[id])
        });
      }
    }
    setData(Array.from(newData))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSubscriptions();
    }, 1000);
    return () => clearInterval(interval); 
  })
  return(
    <>
      <div className={`${containerClass}`}>
        {
          data.length > 0 ? data.map((channel: ChannelData, index: number) => (
    
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
          )) : <div role="status" className="md:hidden inline-flex justify-center items-center">
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none">
              <path className="fill-primary" d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"/>
              <path className="fill-primary" d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        }
      </div>
    </>
  );
}
