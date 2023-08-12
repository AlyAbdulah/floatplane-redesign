import { Breadcrumb } from "@/components/breadcrumb";
import Footer from "@/components/footer";
import TopNav from "@/components/nav";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQs - Floatplane Redesign | alig.pk',
    description: 'FAQs - Floatplane Redesign by Ali Abdullah| alig.pk',
    openGraph: {
      title: 'FAQs - Floatplane Redesign | alig.pk',
      description: 'FAQs - Floatplane Redesign by Ali Abdullah| alig.pk',
      url: 'https://floatplane.alig.pk/support',
      images: [
        {
          url: '/assests/images/preview.png',
          width: 1920,
          height: 1080,
          alt: 'Digi Test Preview',
        },
      ],
      siteName: 'floatplane.Alig.pk',
      locale: 'en_US',
      type: 'website',
    },
  }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <div className="md:min-h-screen">
          <div className="md:max-w-7xl my-4 mx-auto p-4 space-y-4 md:space-y-8">
            <Breadcrumb links={[{href: "#", title: "FAQs"}]} />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
