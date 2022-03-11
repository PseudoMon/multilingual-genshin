import { redirect } from "remix"

export function loader({ params }) {
    return redirect(`/characters/${params.chara}/voices`)
}