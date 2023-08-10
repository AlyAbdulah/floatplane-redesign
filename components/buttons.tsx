import Link from "next/link";

export function ButtonPrimary(props: { text: string, link: string }){
    return(
        <Link href={props.link} className="border-2 border-primary bg-primary text-white py-2 px-6 rounded hover:bg-transparent">
        <button>{props.text}</button>
        </Link>
    )
}
export default function ButtonDefault(props: { text: string, link: string }){
    return(
        <Link href={props.link} className="border-2 border-white bg-white text-primary py-2 px-6 rounded hover:bg-transparent hover:text-white">
        <button>{props.text}</button>
        </Link>
    )
}