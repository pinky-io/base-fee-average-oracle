const API_ENDPOINT = "https://enormous-silkworm-21.hasura.app/api/rest/get-base-fee-average"

const rawFetchResponse = await Functions.makeHttpRequest({
  url: API_ENDPOINT,
})

if (rawFetchResponse.error) {
  console.error(rawFetchResponse.error)
  throw Error("Request failed")
}

const averageBaseFee = rawFetchResponse.data.block_aggregate.aggregate.avg.base_fee * 10 ** 18

return Functions.encodeUint256(averageBaseFee)
