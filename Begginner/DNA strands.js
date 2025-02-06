function pairDNA(dnaStrand) {
    // Create an object to map each base to its pair
    const pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    return dnaStrand.split('').map(base => [base, pairs[base]]);
}

// Example usage:
let dnaStrand = "ATCG";
let pairedStrand = pairDNA(dnaStrand);

console.log(pairedStrand);
