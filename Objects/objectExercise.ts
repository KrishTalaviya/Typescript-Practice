// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type BoxOffice={
    budget:number,
    grossUS:number,
    grossWorldwide:number
}
type Movie={
    readonly title:string,
    originalTitle ?:string,
    director:string,
    releaseYear:number,
    boxOffice:BoxOffice
}
const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
//Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

/* const getProfit=(movie:Movie):number=>{
    let profit=movie.boxOffice.grossWorldwide-movie.boxOffice.budget;
return profit;
} */
// function getProfit(movie: Movie): number {
//   const { grossWorldwide, budget } = movie.boxOffice;
//   return grossWorldwide - budget;
// }

function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
    return grossWorldwide - budget;
  }
console.log(getProfit(dune));
console.log(getProfit(cats));
