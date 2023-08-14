import { Channels } from "@/modules/data";
export default function BrowseNew() {
  return (
    <div className="@container grid gap-2">
      <h1 className="text-2xl md:text-4xl md:mt-2 font-semibold">
        Subscribe and Start Watching{" "}
        <span className="text-primary">Exclusive Content</span>
      </h1>
      <div className="grid gap-4 @xs:grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-4 mt-3 justify-items-center	">
        {Channels.map((channel) => (
          <div
            key={channel.id}
            className="w-full space-y-2 my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                <a
                  href="#"
                  className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
