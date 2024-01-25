export default async function Read(props) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`);
    const topic = await res.json();

    return (
        <div>
            <h3>{topic.title}</h3>
            {topic.body}
        </div>
    ); 
}