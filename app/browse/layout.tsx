import { UserNav } from "@/components/user-nav";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Browse Exclusive Content - Floatplane Redesign | alig.pk',
    description: 'Browse Exclusive Content - Floatplane Redesign by Ali Abdullah| alig.pk',
    openGraph: {
      title: 'Browse Exclusive Content - Floatplane Redesign | alig.pk',
      description: 'Browse Exclusive Content - Floatplane Redesign by Ali Abdullah| alig.pk',
      url: 'https://floatplane.alig.pk/browse',
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
    <div className="overflow-hidden h-screen flex flex-col md:flex-row">
      <UserNav />
      <section className="overflow-y-scroll flex-1 p-4 ">{children}</section>
    </div>
  );
}