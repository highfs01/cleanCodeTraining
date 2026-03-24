class Plant {
  constructor(props) {
    const {
      latinName,
      commonName,
      type,
      image,
      height,
      spread,
      ph,
      moisture,
      colour,
      scent,
      cultivation,
      propagation,
    } = props;

    this.latinName = latinName;
    this.commonName = commonName;
    this.type = type;
    this.image = image;
    this.height = height;
    this.spread = spread;
    this.ph = ph;
    this.moisture = moisture;
    this.colour = colour;
    this.scent = scent;
    this.cultivation = cultivation;
    this.propagation = propagation;
  }

  size() {
    return `${this.commonName} can grow to ${this.height} high and spread to ${this.spread}`;
  }

  suitability() {
    return `Its condition requirements are - ph level ${this.ph}, moisture level ${this.moisture}, cultivation instructions; ${this.cultivation}`;
  }

  downloadInformationSheet() {
    // Add code here ...
  }
}
