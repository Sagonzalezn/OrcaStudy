export const formatPrice = (price: number, currency: string = 'COP') => {
  return new Intl.NumberFormat("es-CO", { // Localización de Colombia
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);
}
