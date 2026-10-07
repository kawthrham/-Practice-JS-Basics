// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR

// your code here
const  shawarmacount = 2; 
const shawarmaPrice = 600;
const karakcount = 3;
const karakPrice = 150;

const shawarmaTotalInBaisa= shawarmacount * shawarmaPrice;
const karakTotalInBaisa = karakcount * karakPrice;

const TotalPrice = shawarmaTotalInBaisa + karakTotalInBaisa ;
const TotalPriceInOMR = (TotalPrice / 1000);

console.log(`Shawarma:  ${shawarmacount} X ${shawarmaPrice} = ${shawarmaTotalInBaisa} baisa`);
console.log(`Karak: ${karakcount} X ${karakPrice} = ${karakTotalInBaisa} baisa`);
console.log(`Total: ${TotalPrice} baisa = ${TotalPriceInOMR} OMR`);






