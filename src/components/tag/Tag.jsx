export default function Tag({ tag, index }) {
    return (
        <button key={index}>{tag}</button>
    )
}