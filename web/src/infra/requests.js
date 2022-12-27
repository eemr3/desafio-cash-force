import { formatCurrency, formatDate } from '@/utils/formateValues';
import api from './http';

export async function getOrders() {
  const response = await api.get('/order');
  const orders = response.data.map((item) => {
    const formateValue = formatCurrency(item.value);
    const formateDate = formatDate(item.emissionDate);
    return {
      ...item,
      emissionDate: formateDate,
      value: formateValue,
    };
  });

  return orders;
}

export async function getProvider(id) {
  const response = await api.get(`/provider/${id}`);
  return response.data;
}
