import { useSeasons } from "./useSeasons"


export function useCurrentSeason() {
    const { data, error, isLoading, isValidating } = useSeasons()

    return ({
        data: data?.find(x => x.state === "current"),
        error,
        isLoading,
        isValidating
    })
}
