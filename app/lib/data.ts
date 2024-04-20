"use client";

import useSWR from 'swr';
import { fetcher } from '@/app/fetcher';
import {APIData, SearchData} from '@/app/lib/definitions'


export function GetPatientsData(currentPage: number) {
   const data = useSWR<APIData>(`/patient/info?page=${currentPage}&page_size=10`, fetcher);
   return data;
}


export function GetPatientsRecord(query: string, currentPage: number) {
   const data = useSWR<SearchData>(`/patient/record?query=${query}&page=${currentPage}&page_size=10`, fetcher);
   return data;
}

