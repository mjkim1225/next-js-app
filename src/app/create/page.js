"use client"

import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            fetch(process.env.NEXT_PUBLIC_API_URL+'topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, body}),
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                router.push(`/read/${data.id}`);
                router.refresh();
            })

        }}>
            <p>
                <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create"></input>
            </p>
        </form>
    );
}