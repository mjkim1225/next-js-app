"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, body}),
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                router.refresh();
                router.push(`/read/${data.id}`);
                router.refresh();
            })

        }}>
            <p>
                <input type="text" name="title" placeholder="title" value={data.title}
                onChange={e => setData({...data, title: e.target.value})}></input>
            </p>
            <p>
                <textarea name="body" placeholder="body" value={data.body}
                onChange={e => setData({...data, body: e.target.body})}></textarea>
            </p>
            <p>
                <input type="submit" value="save"></input>
            </p>
        </form>
    );
}