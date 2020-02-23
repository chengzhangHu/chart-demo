// pages/fchart/fchart.js
Page({

  /**
   * Page initial data
   */
  data: {
    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      const data = [
        { value: 63.4, city: 'New York', date: '2011-10-01' },
        { value: 62.7, city: 'Alaska', date: '2011-10-01' },
        { value: 72.2, city: 'Austin', date: '2011-10-01' },
        { value: 58, city: 'New York', date: '2011-10-02' },
        { value: 59.9, city: 'Alaska', date: '2011-10-02' },
        { value: 67.7, city: 'Austin', date: '2011-10-02' },
        { value: 53.3, city: 'New York', date: '2011-10-03' },
        { value: 59.1, city: 'Alaska', date: '2011-10-03' },
        { value: 69.4, city: 'Austin', date: '2011-10-03' },
      ];
      chart.source(data, {
        date: {
          range: [0, 1],
          type: 'timeCat',
          mask: 'MM-DD'
        },
        value: {
          max: 300,
          tickCount: 4
        }
      });
      chart.area().position('date*value').color('city').adjust('stack');
      chart.line().position('date*value').color('city').adjust('stack');
      chart.render();
      // 注意：需要把chart return 出来
      return chart;
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})