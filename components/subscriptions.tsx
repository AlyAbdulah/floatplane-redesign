"use client";
import { Channels } from "@/modules/data";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export function ShowSubscriptions() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(Channels);
  const [subscriptions, setSubscriptions] = useState([]);
  const [showPlans, setShowPlans] = useState(false);

  const handleShowPlans = (index: number) => {
    setShowPlans(true);
    setIndex(index);
  };

  return (
    <>
      <div className="grid gap-4 @xs:grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-4 mt-3 justify-items-center">
        {data.map((channel, index) => (
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
                  onClick={() => handleShowPlans(index)}
                  className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:-translate-y-1 hover:bg-primary/75 duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}
/*
<Subscribe
        cid={index}
        data={data}
        show={showPlans}
        handleShow={setShowPlans}
        handleSubscriptions={setData}
      />
*/
export function Subscribe(props: {
  cid: number;
  show: boolean;
  data: Array<any>;
  handleShow: Function;
  handleSubscriptions: Function;
}) {
  const Selection = Channels[props.cid];
  const handleSubscribed = () => {
    const newData = props.data.filter((channel) => channel.id != Selection.id);
    props.handleShow(false);
    props.handleSubscriptions(newData);
  };
  return (
    <>
      <div
        className={`absolute inset-0 p-4 overflow-y-auto transition-transform z-40 w-full bg-white dark:bg-gray-800  ${props.show ? "-translate-y-full" : "translate-y-full"}`}
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          {Selection.title} Subscription Plans
        </h5>
        <button
          type="button"
          onClick={() => props.handleShow(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <XMarkIcon className="w-3 h-3" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
    </>
  );
}
export function ShowMySubscriptions(props: { expand: boolean }) {
  const { expand } = props;
  return Channels.map((channel, index) => (
    <button
      className="flex flex-row justify-start my-1 p-2 space-x-2 courser-pointer items-center bg-primary rounded-lg hover:bg-secondary/50 duration-150"
      key={index}
    >
      <img
        className={`${expand ? "w-16" : "w-12"}  h-auto rounded-full`}
        src={channel.icon.childImages[1].path}
        alt={`${channel.title} Profile`}
        height={channel.icon.childImages[1].height}
        width={channel.icon.childImages[1].width}
      />
      <span
        className={`font-medium dark:text-white ${expand ? "block" : "hidden"}`}
      >
        {" "}
        {channel.title.slice(0, 14) + (channel.title.length > 14 ? "..." : "")}{" "}
      </span>
    </button>
  ));
}
