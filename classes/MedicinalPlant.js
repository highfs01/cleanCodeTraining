class MedicinalPlant extends Plant {
  constructor(props) {
    const {
      use,
      processing,
      usableParts,
    } = props;

    super(props);

    this.use = use;
    this.processing = processing;
    this.usableParts = usableParts;
  }

  usage() {
    return `${this.commonName} can be used for ${this.use}`;
  }

  process() {
    return `${this.commonName} is prepared via ${this.processing}`;
  }

  utilise() {
    return `Area(s) of this plant that are used medicinally - ${this.usableParts}`;
  }
}
