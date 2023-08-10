import { UserNav } from "@/components/user-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container">
      <section className="grid grid-cols-1 @3xl:grid-cols-3 @4xl:grid-cols-4 @5xl:grid-cols-4 @6xl:grid-cols-6 @7xl:grid-cols-7 @8xl:grid-cols-8 space-y-2">
        <header className="@3xl:col-span-1"> <UserNav /> </header>
        <main className="@3xl:col-span-2 @4xl:col-span-2 @5xl:col-span-3 @6xl:col-span-4 @7xl:col-span-5 @8xl:col-span-6 p-4">{children}</main>
      </section>
    </div>
  );
}