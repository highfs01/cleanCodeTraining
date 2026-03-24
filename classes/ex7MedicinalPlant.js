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
    return `${this.commonName} can be used as an ${this.use}`;
  }

  process() {
    return `${this.commonName} is prepared via ${this.processing}`;
  }

  utilise() {
    return `Area(s) of this plant that are used medicinally - ${this.usableParts}`;
  }

  buildPlantHtml() {
    let markup = "";

    markup = `<div class='tile'><div class='swap'>
                <img src='${this.image}'  width='260' height='200' />
                <span class='hover-content'>${this.size()}<br/><br/>${this.usage()}<br/><br/>${this.utilise()}</span><br/></div><span class='link'><a href='#' target='_blank'>Download ${this.commonName} information sheet</a></span></div>`;

    return markup;
  }

}
