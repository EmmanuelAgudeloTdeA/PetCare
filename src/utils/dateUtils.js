export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return months === 1 ? '1 mes' : `${months} meses`;
  }

  const yearLabel = years === 1 ? 'año' : 'años';

  if (months === 0) return `${years} ${yearLabel}`;

  const monthLabel = months === 1 ? 'mes' : 'meses';
  return `${years} ${yearLabel} y ${months} ${monthLabel}`;
};

export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' });
};
