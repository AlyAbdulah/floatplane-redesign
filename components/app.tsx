import { AppStoreLogo, PlayStoreLogo } from "./images";

export default function App() {
  return (
    <article className="bg-gradient-to-b from-[#343A40] to-black text-white py-4">
      <div className="md:max-w-6xl mx-auto">
        <div className="grid gap-4 m-4 p-4 md:grid-cols-2 md:gap-2">
          <div>
            <h2 className="font-bold text-3xl">
              TRY OUT NEW AND IMPROVED <span className="text-primary"> MOBILE EXPERIENCE</span>
            </h2>
            <div className="my-4 grid gap-4 grid-cols-1 md:gap-2 md:grid-cols-2 md:max-w-sm">
              <a
                href="https://play.google.com/store/apps/details?id=com.floatplane.floatplane&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
              >
                <PlayStoreLogo classes="w-3/6 md:w-full h-auto" />
              </a>
              <a
                href="https://apps.apple.com/us/app/floatplane/id1472071280?itsct=apps_box&amp;itscg=30200"
                target="_blank"
              >
                <AppStoreLogo classes="w-3/6 md:w-full h-auto" />
              </a>
            </div>
          </div>
          <div>
            <img src="/assests/images/qr.png" alt="QR Code to Download App" className="w-3/6 h-auto mx-auto" />
          </div>
        </div>
      </div>
    </article>
  );
}
