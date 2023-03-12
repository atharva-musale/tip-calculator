/**
 * Calculates amount to be paid per person
 *
 * @param totalAmount total amount to be paid
 * @param numberOfPeople number of people
 * @returns total amount to be paid per person
 */
export function getTotalAmountPerPerson(totalAmount: number, numberOfPeople: number): number {
  return totalAmount / numberOfPeople;
}

/**
 * Returns tip to be paid per person
 *
 * @param totalAmount total amount to be paid
 * @param tipPercent tip percent
 * @param numberOfPeople number of people
 * @returns total tip to be paid per person
 */
export function getTipPerPerson(totalAmount: number, tipPercent: number, numberOfPeople: number): number {
  const totalTipAmount = totalAmount * (tipPercent / 100)
  return totalTipAmount / numberOfPeople;
}
