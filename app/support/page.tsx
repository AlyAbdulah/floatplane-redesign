import { FAQContent } from "@/components/faq-content";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Support() {
  return (
    <>
        <h1 className="font-semibold text-2xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <FAQContent />
        <div className="px-1">
          <span>Need help and can&apos;t find an answer in the FAQ section? &nbsp;</span>
          <button className="text-white bg-primary hover:bg-primary/75 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2">
            <EnvelopeIcon className="w-4 h-4 mr-2 text-white" />
            Contact Support
          </button>
          <div className="mt-2">
            <button className="text-white bg-primary hover:bg-primary/75 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Become a creator on Floatplane</button>
          </div>
        </div>
    </>
  );
}
