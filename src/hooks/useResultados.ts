
import { useQuery } from '@tanstack/react-query';
import { resultadosAPI } from '../services/api';
import { format } from 'date-fns';
import { Draw } from '@/types/results';

export const useResultados = (date?: Date) => {
  const formattedDate = date ? format(date, 'yyyy-MM-dd') : undefined;
  
  return useQuery<Draw[]>({
    queryKey: ['resultados', formattedDate],
    queryFn: () => formattedDate 
      ? resultadosAPI.getByDate(formattedDate).then(res => res.data)
      : resultadosAPI.listar().then(res => res.data),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
