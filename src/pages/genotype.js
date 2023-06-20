function calculateGeneticCrossing(trait1, trait2) {
    const parent1 = trait1.split('');
    const parent2 = trait2.split('');
    
    const offspringGenotypes = [];
    const offspringProbabilities = [];
    
    for (let allele1 of parent1) {
      for (let allele2 of parent2) {
        const genotype = allele1 + allele2;
        const probability = 0.25; // Assuming equal probability for each genotype
        
        offspringGenotypes.push(genotype);
        offspringProbabilities.push(probability);
      }
    }
    
    return { genotypes: offspringGenotypes, probabilities: offspringProbabilities };
  }
  
  const trait1 = "Ee";
  const trait2 = "Aa";
  
  const crossingResult = calculateGeneticCrossing(trait1, trait2);
  
  console.log("Possible Offspring Genotypes:");
  console.log(crossingResult.genotypes);
  
  console.log("Probabilities:");
  console.log(crossingResult.probabilities);