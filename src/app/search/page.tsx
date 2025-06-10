'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@/graphql/queries';
import SearchInput from './SearchInput';
import SearchResult from '@/components/SearchResult';

export default function SearchPage() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get('name') ?? '';
  const { data, loading, error } = useQuery(GET_POKEMON, { variables: { name } });

  return (
    <>
      <SearchInput value={name} onSearch={newName => router.push(`/search?name=${newName}`)} />
      <SearchResult data={data?.pokemon} loading={loading} error={error} />
    </>
  );
}
