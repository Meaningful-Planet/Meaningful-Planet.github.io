function createPartners() {
    const partners = document.createElement('section');
    partners.id = "home-logos-container";

    partners.innerHTML = `
        <h3 class="partners__header">We partner with leading environmental and technology organisations</h3>

        <div class="logos">
            <img src="/assets/images/logos/partners/b-corp.png" alt="B Corp">
            <img src="/assets/images/logos/environmental-partners/bcn-wildlife-trust.png" alt="BCN Wildlife Trust logo - environmental partner">
            <img src="/assets/images/logos/environmental-partners/london-wildlife-trust.png" alt="London Wildlife Trust logo - environmental partner">
            <img src="/assets/images/logos/environmental-partners/hampshire-iow-wildlife-trust.png" alt="Hampshire & IOW Wildlife Trust logo - environmental partner">
            <img src="/assets/images/logos/environmental-partners/yorkshire-wildlife-trust.png" alt="Yorkshire Wildlife Trust logo - environmental partner">
            <img src="/assets/images/logos/environmental-partners/eco-network.png" alt=".eco Network logo - environmental partner">
            <img src="/assets/images/logos/environmental-partners/sussex-wildlife-trust.png" alt="Sussex Wildlife Trust logo - environmental partner">
        </div>
    `;

    const scriptTag = document.currentScript;
    scriptTag.parentNode.insertBefore(partners, scriptTag.nextSibling);
}
