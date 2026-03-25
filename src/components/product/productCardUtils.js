export const isNumber = (value) => typeof value === "number" && Number.isFinite(value)

export const formatCurrency = (value) => {
  if (!isNumber(value)) return null

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

export const getStockMeta = (stockStatus) => {
  if (typeof stockStatus === "string") {
    return { type: stockStatus, count: null, message: null }
  }

  if (stockStatus && typeof stockStatus === "object") {
    return {
      type: stockStatus.type ?? "inStock",
      count: isNumber(stockStatus.count) ? stockStatus.count : null,
      message: typeof stockStatus.message === "string" ? stockStatus.message : null,
    }
  }

  return { type: "inStock", count: null, message: null }
}

export const splitForcedState = (forcedState = "") => {
  if (typeof forcedState !== "string") return []
  return forcedState.split(" ").filter(Boolean)
}
