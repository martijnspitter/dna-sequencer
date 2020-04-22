// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return({
    specimenNum: specimenNum++,
    dna,
    mutate() {
      let dnaBase = Math.floor(Math.random()*15);
      let baseGene = this.dna[dnaBase];
      let newGene = "";
      do{
        newGene = returnRandBase();
      } while
      (returnRandBase === baseGene);
      dna[dnaBase] = newGene;
      return this.dna;
    },
    compareDNA(pAequor) {
      let dnaSame = [];
      for (let i=0; i<this.dna.length; i++) {
        let dnaThis = this.dna[i];
        let dnaComp = pAequor.dna[i];
        if (dnaThis === dnaComp) {
          dnaSame.push(dnaThis)
        };
      }
        let items = dnaSame.length;
        let percentage = (items/15)*100
        console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% in common`)

    },
    willLikelySurvive() {
      let survive = [];
      for (let i=0; i<this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survive.push(this.dna[i]);
        }
      }
      let items = survive.length;
      let percentage = (items/15)*100;
      if (percentage >= 60) {
        return true;
      } else return false;
    }
  })
}

const survivors = () => {
  let survivorsArray = [];
  while (survivorsArray.length < 30) {
    let test = pAequorFactory(survivorsArray.length +1, mockUpStrand());
    if (test.willLikelySurvive() == true) {
      survivorsArray.push(test);
    }
  }
  console.log(survivorsArray)
  console.log(survivorsArray.length)
}

survivors();
/*
const survivors = () => {
  let survivorsArray = [];
  let allArray = [];
  do {
    allArray.push(pAequorFactory(1, mockUpStrand()));

} while (survivorsArray.length < 3);
console.log(allArray);
for (let i=0; i<allArray.length; i++) {
  if (allArray[i].willLikelySurvive() == true) {
    survivorsArray.push(allArray[i])
  }
}
console.log(survivorsArray)
}
survivors()
*/
/*
let sample1 = pAequorFactory(1, mockUpStrand())
let sample2 = pAequorFactory(2, mockUpStrand())
console.log(sample1)
console.log(sample2)
console.log(sample1.willLikelySurvive())
*/
