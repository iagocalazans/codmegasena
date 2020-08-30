const draw =
  rounds => {
    return {
      numbers: [],
      max: 60,
      pickeds: [],
      rounds: rounds || 5,

      // We start this function generating an array that includes the 60 numbers of Brazilian Mega-Sena.
      init() {
        const {
          max
        } = this;

        for (let i = 1; i <= max; i++) {
          this.numbers.push(i);
        }
      },

      // You can pass how many rounds you want to play with the shuffler hand!
      shuffle(rounds = this.rounds) {
        const {
          numbers
        } = this;

        if (rounds <= 0) {
          rounds = 1;
          console.log('Ops! You should shuffle at least one time, but... Dont worry Ill do this for you!');
        }

        if (rounds > 10) {
          rounds = 10;
          console.log('Looks like your arms cant spin it for all that time... Lets try 10!');
        }

        let rand;
        for (let round = 0; round < rounds; round++) {
          for (let i = numbers.length - 1; i > 0; i--) {
            rand = Math.floor(Math.random() * (i - 1));
            [numbers[i], numbers[rand]] = [numbers[rand], numbers[i]];
          }
        }
      },

      // The minimum amount for Brazilian Mega-Sena are 6!
      pickNumbers(amount = 6) {
        // Change this amount is still not implemented.
        if (amount < 6) {
          amount = 6;
          console.log('The minimum bet are 6 numbers, but dont worry we are moving to 6 automatically');
        }
        if (amount > 15) {
          amount = 15
          console.log('The maximum bet are 15 numbers, but dont worry we are moving to 15 automatically');
        }

        for (let i = 0; i < amount; i++) {
          this.shuffle();
          let index = Math.floor(Math.random() * 19) + (21 - i);
          let pick = this.numbers.splice(index, 1);
          this.pickeds.push(...pick);
        }

        this.pickeds.sort((a, b) => a - b);
      }
    }
  }