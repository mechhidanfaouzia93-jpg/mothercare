import rice from "/src/assets/animals/rice.png";
import bean from "/src/assets/animals/bean.png";
import lemon from "/src/assets/animals/lemon.png";
import avocado from "/src/assets/animals/avocado.avif";

import petiteLoutre from "/src/assets/animals/petite-loutre.avif";
import hippocampe from "/src/assets/animals/hippocampe.avif";
import papillon from "/src/assets/animals/papillon.avif";
import coccinelle from "/src/assets/animals/coccinelle.avif";
import myrtille from "/src/assets/animals/myrtille.avif";
import framboise from "/src/assets/animals/framboise.avif";
import koala from "/src/assets/animals/koala.avif";
import fennec from "/src/assets/animals/fennec.avif";
import lapin from "/src/assets/animals/lapin.avif";
import chaton from "/src/assets/animals/chaton.avif";
import cerise from "/src/assets/animals/cerise.avif";
import poussin from "/src/assets/animals/poussin.png";
import rainette from "/src/assets/animals/rainette.png";
import hamster from "/src/assets/animals/hamster.png";
import herisson from "/src/assets/animals/herisson.png";
import caneton from "/src/assets/animals/caneton.png";
import ecureuil from "/src/assets/animals/ecureuil.png";
import cochonDinde from "/src/assets/animals/cochonDinde.png";
import furet from "/src/assets/animals/furet.png";
import renardeau from "/src/assets/animals/renardeau.png";





export const growthTable = [
  { week: 1, weight: 0.001, height: 0.1 },
  { week: 2, weight: 0.001, height: 0.1 },
  { week: 3, weight: 0.001, height: 0.01 },
  { week: 4, weight: 0.001, height: 0.1 },
  { week: 5, weight: 0.002, height: 0.2 },
  { week: 6, weight: 0.003, height: 0.35 },
  { week: 7, weight: 0.01, height: 1.0 },
  { week: 8, weight: 0.035, height: 1.5 },
  { week: 9, weight: 0.035, height: 2.3 },
  { week: 10, weight: 0.045, height: 3 },
  { week: 11, weight: 0.058, height: 4 },
  { week: 12, weight: 0.073, height: 5 },
  { week: 13, weight: 0.093, height: 7 },
  { week: 14, weight: 0.117, height: 8.5 },
  { week: 15, weight: 0.146, height: 10 },
  { week: 16, weight: 0.181, height: 11.5 },
  { week: 17, weight: 0.223, height: 14 },
  { week: 18, weight: 0.273, height: 15 },
  { week: 19, weight: 0.331, height: 16.5 },
  { week: 20, weight: 0.399, height: 19 },
  { week: 21, weight: 0.478, height: 21 },
  { week: 22, weight: 0.568, height: 24 },
  { week: 23, weight: 0.67, height: 27 },
  { week: 24, weight: 0.785, height: 30 },
  { week: 25, weight: 0.913, height: 34 },
  { week: 26, weight: 1.06, height: 37 },
  { week: 27, weight: 1.21, height: 39 },
  { week: 28, weight: 1.21, height: 38.5 },
  { week: 29, weight: 1.38, height: 40 },
  { week: 30, weight: 1.55, height: 41 },
  { week: 31, weight: 1.75, height: 42 },
  { week: 32, weight: 1.95, height: 43 },
  { week: 33, weight: 2.2, height: 44 },
  { week: 34, weight: 2.4, height: 45 },
  { week: 35, weight: 2.5, height: 46 },
  { week: 36, weight: 2.6, height: 47 },
  { week: 37, weight: 2.9, height: 48 },
  { week: 38, weight: 3.1, height: 49 },
  { week: 39, weight: 3.2, height: 49 },
  { week: 40, weight: 3.4, height: 51.5 },

];


export function estimateBabyStats(week) {
  let result = growthTable[0];

  for (const point of growthTable) {
    if (week >= point.week) {
      result = point;
    }
  }

  return {
    weight: result.weight,
    height: result.height,
  };
}


export function getBabyAnimal(week) {
  const stages = [
    { max: 4, name: "Bébé hippocampe", image: hippocampe },
    { max: 5, name: "Grain de riz", image: rice },
    { max: 6, name: "Coccinelle", image: coccinelle },
    { max: 7, name: "Myrtille", image: myrtille },
    { max: 8, name: "Framboise", image: framboise },
    { max: 9, name: "cerise", image: cerise },
    { max: 10, name: "Papillon", image: papillon },
     { max: 11, name: "Rainette", image: rainette },
    { max: 12, name: "Haricot", image: bean },
     { max: 13, name: "Poussin", image: poussin },
      { max: 14, name: "Hamster", image: hamster },
      { max: 15, name: "Hérisson pygmée", image: herisson },
    { max: 16, name: "Citron", image: lemon },
    { max: 17, name: "Cochon d'Inde", image: cochonDinde },
    { max: 18, name: "Ecureuil roux", image: ecureuil },
    { max: 19, name: "Caneton", image: caneton },
    { max: 20, name: "Avocat", image: avocado },
    { max: 21, name: "chaton", image: chaton },
    { max: 22, name: "lapin", image: lapin },
      { max: 23, name: "Furet", image: furet },
      { max: 24, name: "Renardeau", image: renardeau },
      { max: 25, name: "Bébé koala", image: koala },
    { max: 26, name: "Fennec", image: fennec },
    { max: 27, name: "Koala", image: koala },
    { max: 30, name: "Petite loutre", image: petiteLoutre },
    { max: 40, name: "Bébé prêt 👶", image: petiteLoutre },
  ];

 return (
  stages.find((stage) => week <= stage.max) ||
  stages[stages.length - 1]
);
}