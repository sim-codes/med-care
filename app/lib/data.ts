"use client";

import useSWR from 'swr';
import { fetcher } from '@/app/fetcher';
import {APIData} from '@/app/lib/definitions'


export default function GetPatientsData(currentPage: number) {
   const data = useSWR<APIData>(`/patient/info?page=${currentPage}&page_size=10`, fetcher);
   return data;
}