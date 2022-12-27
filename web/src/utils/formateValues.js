export function formatCurrency(value = 0) {
  const formattedCurrency = Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedCurrency;
}

export function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString('pt-br');

  return formattedDate;
}
