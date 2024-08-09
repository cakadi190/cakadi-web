import dayjs from 'dayjs';
import 'dayjs/locale/id'; // Jika ingin menggunakan bahasa Indonesia
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export function convertDate(date: string, format: string = 'LLL') {
  return dayjs(date).locale('id').format(format);
};
