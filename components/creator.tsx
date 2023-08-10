import { ButtonPrimary } from "./buttons"

const DATA = [
    {
        heading: "Elevate Your Revenue!",
        tagline: "Predictability matters.",
        description: "Floatplane\'s empowers creators to take control of their revenue stream, diminishing reliance on uncertain ad-based income. "
    },
    {
        heading: "Spam-Free Environment",
        tagline: "Say goodbye to spam and hello to quality discourse.",
        description: "Floatplane's subscriber-exclusive comment section ensures that your interactions are genuine, elevating the overall conversation around your content."
    }
]
export default function Creator() {
    return(
        <article className="bg-secondary text-white p-8 md:p-12 space-y-8">
            <h2 className="text-center text-3xl">Next Step for Creators</h2>
            <h3 className="text-center text-2xl">Join the Floatplane to</h3>
            <div className="grid gap-8 md:grid-cols-2 md:max-w-6xl mx-auto">
                {
                    DATA.map((content, index) => <div key={index} className="space-y-4">
                        <div className="font-semibold text-xl">{content.heading}</div>
                        <div className="font-medium">{content.tagline}</div>
                        <div className="my-4">{content.description}</div>
                    </div>)
                }
            </div>
            <div className="py-4 text-xl font-bold text-center mx-auto"><ButtonPrimary text="Join as a Creator" link="#" /></div>
        </article>
    )
}