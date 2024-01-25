"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const id = params.id;

  const router = useRouter();

  return (
    <ul>
      <li><Link href="create">Create</Link></li>
      {
        id
          ? <>
            <li><Link href={"/update/"+id}>Update</Link></li>
            <li><input type="button" value="delete" onClick={() => {
              fetch('http://localhost:9999/topics/'+id, {
                method: 'DELETE',
              }).then(res => res.json())
              .then(data => {
                console.log(data);
                router.push('/');
                router.refresh();
              })
            }}></input></li>
          </>
          : null
      }
    </ul>
  );
}
