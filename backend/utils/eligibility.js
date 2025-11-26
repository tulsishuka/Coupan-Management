// function checkEligibility(coupon, user, cartValue, cartItems) {
//   const e = coupon.eligibility || {};

//   // User tier
//   if (e.allowedUserTiers && !e.allowedUserTiers.includes(user.userTier)) {
//     return false;
//   }

//   // Country
//   if (e.allowedCountries && !e.allowedCountries.includes(user.country)) {
//     return false;
//   }

//   // min lifetime spend
//   if (e.minLifetimeSpend && user.lifetimeSpend < e.minLifetimeSpend) {
//     return false;
//   }

//   // min orders placed
//   if (e.minOrdersPlaced && user.ordersPlaced < e.minOrdersPlaced) {
//     return false;
//   }

//   // first order only
//   if (e.firstOrderOnly && user.ordersPlaced !== 0) {
//     return false;
//   }

//   // min cart value
//   if (e.minCartValue && cartValue < e.minCartValue) {
//     return false;
//   }

//   // applicable categories
//   if (e.applicableCategories) {
//     const found = cartItems.some((i) =>
//       e.applicableCategories.includes(i.category)
//     );
//     if (!found) return false;
//   }

//   // excluded categories
//   if (e.excludedCategories) {
//     const blocked = cartItems.some((i) =>
//       e.excludedCategories.includes(i.category)
//     );
//     if (blocked) return false;
//   }

//   // min items count
//   if (e.minItemsCount) {
//     const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);
//     if (totalQty < e.minItemsCount) return false;
//   }

//   return true;
// }

// module.exports = { checkEligibility };
function checkEligibility(coupon, user, cartValue, cartItems) {
  const e = coupon.eligibility || {};

  if (e.allowedUserTiers && !e.allowedUserTiers.includes(user.userTier)) return false;
  if (e.allowedCountries && !e.allowedCountries.includes(user.country)) return false;
  if (e.minLifetimeSpend && user.lifetimeSpend < e.minLifetimeSpend) return false;
  if (e.minOrdersPlaced && user.ordersPlaced < e.minOrdersPlaced) return false;
  if (e.firstOrderOnly && user.ordersPlaced !== 0) return false;
  if (e.minCartValue && cartValue < e.minCartValue) return false;
  if (e.applicableCategories) {
    const found = cartItems.some((i) => e.applicableCategories.includes(i.category));
    if (!found) return false;
  }
  if (e.excludedCategories) {
    const blocked = cartItems.some((i) => e.excludedCategories.includes(i.category));
    if (blocked) return false;
  }
  if (e.minItemsCount) {
    const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);
    if (totalQty < e.minItemsCount) return false;
  }

  return true;
}

module.exports = { checkEligibility };
