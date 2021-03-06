// localVer
const foundation = 'http://localhost:3000/v1'

// productionVer
// const foundation = process.env.FOUNDATION

export default {
  // 都道府県取得外部API
  getPrefApi: {
    url: 'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    method: 'get'
  },
  // 市町村取得外部API
  getCityApi: {
    url: 'https://opendata.resas-portal.go.jp/api/v1/cities',
    method: 'get'
  },

  // ユーザーログイン
  login: {
    url: foundation + '/login',
    method: 'post'
  },
  // チーム一覧
  teamIndex: {
    url: foundation + '/teams',
    method: 'get'
  },
  // チーム詳細
  teamShow: {
    url: foundation + '/teams/:id',
    method: 'get'
  },
  // チーム作成
  teamCreate: {
    url: foundation + '/teams',
    method: 'post'
  },
  // チーム作成
  teamEdit: {
    url: foundation + '/teams/:id',
    method: 'patch'
  },
  // 口コミ作成（投稿）
  reviewCreate: {
    url: foundation + '/reviews',
    method: 'post'
  },
  // 口コミ一覧
  reviewIndex: {
    url: foundation + '/reviews',
    method: 'get'
  }
}
