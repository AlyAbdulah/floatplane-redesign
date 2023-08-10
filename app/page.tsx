import App from "@/components/app";
import { HomePageCard } from "@/components/cards";
import Creator from "@/components/creator";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import TopNav from "@/components/nav";

export default function Home() {
  return (
    <>
     <header>
          <TopNav />
        </header>
        <main>
      <section className="bg-secondary">
        <Hero />
        <Creator />
      </section>
      <section className="md:max-w-6xl mx-auto">
        <HomePageCard
          title="What's Floatplane"
          description="Floatplane is a streaming service that offers a wide variety of content from shows to reviews and more! All viewable on thousands of internet-connected devices. You can watch as much as you want, whenever you want, all at creator specified pricing. Get the best content first, and get bonus content like behind the scenes!"
          imgSrc="/assests/images/section-what.jpg"
          imgAlt="Image for What's Floatplane"
          imgHeight={500}
          imgWidth={750}
          alignment=""
        />
        <HomePageCard
          title="Who's behind Floatplane?"
          description="Floatplane is a Canadian development company focusing on developing a great streaming platform for online video content and Creators."
          imgSrc="/assests/images/section-who.jpg"
          imgAlt="Image for Who's behind Floatplane?"
          imgHeight={500}
          imgWidth={750}
          alignment="md:order-last md:justify-self-end"
        />
      </section>
      <App />
      </main>
      
      <Footer />
    </>
  );
}
