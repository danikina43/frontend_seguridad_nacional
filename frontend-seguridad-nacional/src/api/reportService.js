import { reportes } from "../data/mockData";

export const obtenerReportes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reportes);
    }, 500);
  });
};