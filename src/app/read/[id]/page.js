export default async function Read(props) {
    const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await res.json();

    return (
        <div>
            <h3>{topic.title}</h3>
            {topic.body}
        </div>
    ); 
}