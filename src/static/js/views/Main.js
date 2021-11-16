import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Main");
  }
  
  async getHtml() {
    return `
          <h1> Main page </h1>
          </br>
          <div class="grid-for-main-page">
          <div class="card" style="width: 18rem;">
          <a href="/ActionSetA">
            <img src="https://selecthealth.org/-/media/selecthealth/blogs/post/2020/05/mom_daughter_hugging_blog_lg.ashx" class="card-img-top" style="height: 11rem; alt="tree">
            <div class="card-body">
                <p class="card-text">Action Set (A)</p>
            </div>
          </a>

          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/ActionSetB">
          <img src="https://mksallc.com/wp-content/uploads/2017/12/kid-playing.jpg" class="card-img-top" style="height: 11rem; alt="tree">
          <div class="card-body">
                <p class="card-text">Action Set (B)</p>
            </div>
          </a>
          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/AnimalSetA">
          <img src="https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg" class="card-img-top" style="height: 11rem; alt="tree">
          <div class="card-body">
                <p class="card-text">Animal Set (A)</p>
            </div>
          </a>
          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/AnimalSetB">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" class="card-img-top" style="height: 11rem; alt="tree">
          <div class="card-body">
                <p class="card-text">Animal Set (B)</p>
            </div>
          </a>
          </div>

          <div class="card" style="width: 18rem;">
          <a href="/Clothes">
          <img src="https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg" class="card-img-top" style="height: 11rem; alt="tree">
          <div class="card-body">
                <p class="card-text">Clothes</p>
            </div>
          </a>

          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/Emotions">
          <img src="https://media.istockphoto.com/photos/shocked-young-girl-looking-at-camera-with-mouth-wide-open-oh-my-god-picture-id1150254159?k=20&m=1150254159&s=612x612&w=0&h=jBeZ8SAO1sAKgJDPNIOti0LGYAKJCH3YMgLDDZZPd7c=" class="card-img-top" style="height: 11rem; alt="tree">
          <div class="card-body">
                <p class="card-text">Emotions</p>
            </div>
          </a>
          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/Nature">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="card-img-top" alt="tree">
            <div class="card-body">
                <p class="card-text">Nature</p>
            </div>
          </a>
          </div>

          <div  class="card" style="width: 18rem;">
          <a href="/Colors">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="card-img-top" alt="tree">
            <div class="card-body">
                <p class="card-text">Colors</p>
            </div>
          </a>
          </div>
          </div>
        `;
    }
}