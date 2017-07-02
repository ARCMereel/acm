import Vue from 'vue'
import GetRoutes from '@/business/GetRoutes.vue'


describe('GetRoutes', () => {

  it('Price works', () => {
    const Constructor = Vue.extend(GetRoutes)
    const vm = new Constructor().$mount()
    expect(vm.price).to.equal("2,70 €")
  })

  /*it('sets the correct default data', () => {
    expect(typeof GetRoutes.price).to.equal('function')
    const vm = GetRoutes.price
    if (that.shortWaysOutput[0].transportmethod == "TRANSIT") {
      expect(vm.price).to.equal('2.70')
    }
    else if (that.shortWaysOutput[0].transportmethod == "BICYCLING") {
      expect(vm.price).to.equal()
    }
    else {
        var duration = 0;
        for (var i = 0; i < that.shortWaysOutput.length; i++) {
          duration += that.shortWaysOutput[i].duration;
        }
        expect(vm.price).to.equal((Math.ceil((duration + 240) / 60) * 0.25).toFixed(2) + " €")
    }
  })
*/
  it('function duration work', () => {
    const Constructor = Vue.extend(GetRoutes)
    const vm = new Constructor().$mount()
    var mocking = {duration : 20}
    vm.duration(mocking)
    expect(vm.getShortinfo.duration).to.equal(20)
  })

  it('getShortinfo works', () => {
    const Constructor = Vue.extend(GetRoutes)
    const vm = new Constructor().$mount()
    expect(vm.getShortinfo).to.equal('')
  })
})