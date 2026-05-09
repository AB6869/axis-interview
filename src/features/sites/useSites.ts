import { useAuth } from '@/features/auth'
import { useQuery } from '@tanstack/react-query'
import { getSitesByOwner } from '@/api'

export function useSites() {
  const { user } = useAuth()

  return useQuery({
    queryKey: ['sites', user?.username],
    queryFn: () => getSitesByOwner(user!.username),
    enabled: !!user,
  })
}
