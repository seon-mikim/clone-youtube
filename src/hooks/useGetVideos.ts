import { getVideos } from "@apis/getVideos/getVideos"
import { useQuery } from "@tanstack/react-query"

export const useGetVideos =() => {
 const {data, isLoading, error} = useQuery({queryKey:['videos'], queryFn:()=>getVideos()})
 return{data, isLoading, error}
}