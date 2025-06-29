export default function Button({ name, url }) {
    return (
        <div>
            <a
                href={url}
                className="text-sm text-white rounded pl-3 pr-3 pt-2 pb-2 bg-lime-700 font-bold"
            >{name}</a>
        </div>
    )
}