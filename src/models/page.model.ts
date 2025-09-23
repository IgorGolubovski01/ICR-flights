import { FlightModel } from "./flight.model";

export interface PageModel<T>{
    content: FlightModel[],
    pageable: {
        sort: {
            sorted: boolean,
            empty: boolean,
            unsorted: boolean
        },
        pageNumber: number,
        pageSize: number,
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    totalPages: number,
    totalElements: number,
    lastL: boolean,
    size: number,
    number: number,
    sort: {
        sorted: boolean,
        empty: boolean,
        unsorted: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
    
}