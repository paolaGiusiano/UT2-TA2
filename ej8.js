function printChemicalInfo(chemicals) {
  chemicals.forEach(element => {
      console.log("+-------------------------------------------------------+");
      console.log(`| Compound ID: ${element.compoundId.padEnd(27)} |`);
      console.log(`| Name: ${element.name.padEnd(27)} |`);
      console.log(`| Formula: ${element.formula.padEnd(27)} |`);
      console.log(`| Description: ${element.description.padEnd(27)} |`);
      console.log(`| Molecular Weight: ${element.molecularWeight.padEnd(27)} |`);
      console.log(`| Melting Point: ${element.meltingPoint.padEnd(27)} |`);
      console.log(`| Boiling Point: ${element.boilingPoint.padEnd(27)} |`);
      console.log(`| Solubility: ${element.solubility.padEnd(27)} |`);
      console.log("+-------------------------------------------------------+");
  });
}

const chemicals = [
     {
       compoundId: 'CHEM001',
       name: 'Aspirin',
       formula: 'C9H8O4',
       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
       molecularWeight: '180.16 g/mol',
       meltingPoint: '135°C',
       boilingPoint: '140°C',
       solubility: 'Slightly soluble in water'
     },
     {
       compoundId: 'CHEM002',
       name: 'Caffeine',
       formula: 'C8H10N4O2',
       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
       molecularWeight: '194.19 g/mol',
       meltingPoint: '238°C',
       boilingPoint: '178°C',
       solubility: 'Freely soluble in water'
     },
     {
       compoundId: 'CHEM003',
       name: 'Ethanol',
       formula: 'C2H6O',
       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
       molecularWeight: '46.07 g/mol',
       meltingPoint: '-114.1°C',
       boilingPoint: '78.37°C',
       solubility: 'Miscible with water'
     }
   ];

printChemicalInfo(chemicals)