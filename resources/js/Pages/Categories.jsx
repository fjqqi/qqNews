import { CategoryCard } from '@/Components/CategoryCard'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'


const Categories = ({categories}) => {
  return (
<>

<GuestLayout categories={categories}>
<Head title="Categories"/>

<div className='flex flex-wrap w-full justify-center gap-8'>

  <CategoryCard categories={categories}/>





</div>
</GuestLayout>

</>
  )
}

export default Categories