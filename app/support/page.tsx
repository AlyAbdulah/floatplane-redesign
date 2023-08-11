import { FAQContent } from "@/components/faq-content";
import Footer from "@/components/footer";
import TopNav from "@/components/nav";
import { UserNav } from "@/components/user-nav";

export default function Support() {
  return (
    <>
    <header>
      <TopNav />
    </header>
    <main>
    <div className="md:min-h-screen">
      <div className="md:max-w-7xl my-4 mx-auto p-4 space-y-4 md:space-y-8">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <FAQContent />
      </div>
    </div>
    </main>
    <Footer />
    </>
  );
}
