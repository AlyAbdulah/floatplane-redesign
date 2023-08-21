import { ShowSubscriptions } from "@/components/subscriptions";

export default function BrowseNew() {
  return (
    <div className="@container grid gap-2">
      <h1 className="text-2xl md:text-4xl md:mt-2 font-semibold">
        Subscribe and Start Watching{" "}
        <span className="text-primary">Exclusive Content</span>
      </h1>
        <ShowSubscriptions />
    </div>
  );
}
