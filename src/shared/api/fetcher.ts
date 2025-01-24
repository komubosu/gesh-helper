import type { Fetcher } from 'swr';

interface SectorData {
  type: 'sector';
  value: {
    name_sector: string;
    lifts: { name: string; is_work: boolean }[];
  };
  id: string;
}

interface PubData {
  type: 'pab';
  value: {
    name: string;
    work_schedule: string;
    recommend: string;
    rage_receipt: string;
  };
  id: string;
}

interface ResponseData {
  temp: string;
  sector: SectorData[];
  pabs: PubData[];
}

interface ResponseDTO {
  temp: string;
  sector: {
    id: string;
    name: string;
    lifts: { name: string; isWork: boolean }[];
  }[];
  pubs: {
    id: string;
    name: string;
    workSchedule: string;
    recommend: string;
    rageReceipt: string;
  }[];
}

function mapToResponseDTO(data: ResponseData): ResponseDTO {
  return {
    temp: data.temp,
    sector: data.sector.map(sector => ({
      id: sector.id,
      name: sector.value.name_sector,
      lifts: sector.value.lifts.map(lift => ({
        name: lift.name,
        isWork: lift.is_work,
      })),
    })),
    pubs: data.pabs.map(pub => ({
      id: pub.id,
      name: pub.value.name,
      workSchedule: pub.value.work_schedule,
      recommend: pub.value.recommend,
      rageReceipt: pub.value.rage_receipt,
    })),
  };
}

export const fetcher: Fetcher<ResponseDTO, string> = async url => {
  const response = await fetch(url);
  const data = await response.json();

  return mapToResponseDTO(data);
};
