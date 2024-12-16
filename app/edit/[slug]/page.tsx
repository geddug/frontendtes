'use client'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Page() {
    //const router = useRouter()
    // const data = await fetch('http://localhost:8000/profile/'+router.query.slug)
    // const profile = await data.json()
    // if(profile.message == "success") {
    //     const name = profile.data.name;
    //     const age = profile.data.age;
    //     const city = profile.data.city;
    // } else {
        
    // }
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('http://localhost:8000/profile', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
        if (data.message == "success") {
            redirect('/')
        } else {
            alert('Insert Failed, Please follow this format: NAME[space]AGE[space]CITY ')
        }
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl mb-5'>Create</h1>
            <Link href="/" className='bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white'>Back</Link>
            <form onSubmit={onSubmit} className='mt-5'>
                <div className='mb-5'>
                    <input type="text" name="data" placeholder='Ariska Putri 28 Surabaya' className='border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1' />
                </div>
                <button type="submit" className='bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white'>Submit</button>
            </form>
        </div>
    )
}