import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SearchInput() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  // อ่านค่า ?q=bulbasaur
  useEffect(() => {
    if (router.query.q) setQuery(router.query.q as string)
  }, [router.query.q])

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/pokemon/${query.toLowerCase()}`)
  }

  return (
    <form onSubmit={onSearch}>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="ค้นหาโปเกมอน เช่น pikachu"
      />
      <button type="submit">Search</button>
    </form>
  )
}
