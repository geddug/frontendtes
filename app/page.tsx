import Link from 'next/link'
import { redirect } from 'next/navigation'
export default async function Home() {
  const data = await fetch('http://localhost:8000/profile')
  const profile = await data.json()
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl'>Profile</h1>
      <div className='text-right'><Link href="/create" className='bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white'>Create</Link></div>
      <table className='border-collapse w-full text-left'>
        <thead>
          <tr>
            <th className='p-4 border-b'>Name</th>
            <th className='p-4 border-b'>Age</th>
            <th className='p-4 border-b'>City</th>
            {/* <th className='p-4 border-b'>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {profile.data.map((k) => (
            <tr key={k.id}>
              <td className='p-4 border-b'>{k.name}</td>
              <td className='p-4 border-b'>{k.age}</td>
              <td className='p-4 border-b'>{k.city}</td>
              {/* <td className='p-4 border-b'><Link href="/edit/{k.id}" className='bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white'>Edit</Link> <Link href="/delete/{k.id}" className='bg-red-500 hover:bg-red-700 p-2 rounded-md text-white'>Delete</Link></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
