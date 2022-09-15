const form = document.forms['form']
const results = {
  keliling : [],
  luas : []
}

class Rectangle {
  constructor(panjang, lebar, opt){
    this.panjang = parseFloat(panjang)
    this.lebar = parseFloat(lebar)
    this.opt = opt
  }

  calcKeliling(){
    return (this.panjang + this.lebar) * 2
  }

  calcLuas(){
    return this.panjang * this.lebar
  }
}

document.querySelector("#btn-calculate").addEventListener("click", (e)=> {
  e.preventDefault()
  const [panjang, lebar, opt] = form

  opt.value === 'keliling' ? results.keliling.push(new Rectangle(panjang.value, lebar.value, opt.value).calcKeliling()) : results.luas.push(new Rectangle(panjang.value, lebar.value, opt.value).calcLuas())

  console.info(results);
})