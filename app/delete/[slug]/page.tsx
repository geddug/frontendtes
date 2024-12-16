'use client'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default async function Page() {
    const router = useRouter()
    const response = await fetch('http://localhost:8000/profile' + router.query.slug, {
        method: 'DELETE',
    })
    const data = await response.json()
    if (data.message == "success") {
        alert('Delete Success')
        redirect('/')
    } else {
        alert('Delete Failed')
    }
}