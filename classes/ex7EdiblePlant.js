class EdiblePlant extends Plant {
  constructor(props) {
    const { sow, crop, edibleParts } = props;

    super(props);

    this.sow = sow;
    this.crop = crop;
    this.edibleParts = edibleParts;
  }

  sowing() {
    return `${this.commonName} can be planted in ${this.sow}`;
  }

  cropping() {
    return `${this.commonName} generally crops in ${this.crop}`;
  }

  edible() {
    return `Area(s) of this plant that are edible - ${this.edibleParts}`;
  }

  buildPlantHtml() {
    let markup = "";

    markup = `<div class='tile'><div class='swap'>
                <img src='${this.image}'  width='260' height='200' />
                <span class='hover-content'>${this.size()}<br/><br/>${this.sowing()}<br/><br/>${this.cropping()}</span><br/></div><span class='link'><a href='#' target='_blank'>Download ${this.commonName} information sheet</a></span></div>`;

    return markup;
  }
}
