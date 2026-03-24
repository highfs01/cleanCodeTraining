class EdiblePlant extends Plant {
  constructor(props) {
    const {
      sow,
      crop,
      edibleParts,
    } = props;

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
}
