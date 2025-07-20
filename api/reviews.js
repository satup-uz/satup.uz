export default {
  async getReviews(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/reviews', {
          ...params,
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
