function calculateOrbitalPeriod(a, M) {
  const G = 6.6743e-11;
  const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / (G * M));
  return T;
}

const semiMajorAxis = 7.5e8; 
const centralObjectMass = 5.972e24; 

const orbitalPeriod = calculateOrbitalPeriod(semiMajorAxis, centralObjectMass);

console.log(`The orbital period is ${orbitalPeriod} seconds.`);
