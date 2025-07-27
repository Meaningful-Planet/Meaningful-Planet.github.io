function createFAQ() {
    const faq = document.createElement('faq');
    // faq.classList.add('faq-container');

    faq.innerHTML = `
        <div class="faq-container">
            <h3>FAQ</h3>
        
            <div class="faq-item">
                <button class="faq-question">
                    What is the signal coverage and mobile network quality like with Meaningful Planet?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Meaningful Planet provides top-rated coverage and network signal strength across the UK. We utilise the same network infrastructure as EE, independently rated as best for mobile data speeds, reliability and coverage in the UK by RootMetrics. We're committed to ensuring our customers experience excellent connectivity, backed by our reliable 5G network and extensive coverage area.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    How can I track my environmental impact with Meaningful Planet?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Our user-friendly app and online portal include an impact tracker that allows you to see the tangible environmental impact of your spending. You can view metrics such as carbon offset, trees planted, and other nature restoration efforts supported by your mobile plan.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    What types of mobile and SIM plans does Meaningful Planet offer?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    We offer a range of sustainable mobile plans to suit various needs and budgets. As well as consumer SIM-only mobile plans, we also have a full business offering. Our plans include:

                    <ul>
                        <li>Data options ranging from 3GB to 100GB in monthly data</li>
                        <li>Unlimited UK calls and texts</li>
                        <li>5G access and free EU roaming included in all plans as standard</li>
                        <li>Flexible contract lengths and SIM-only options</li>
                    </ul>
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    How does Meaningful Planet support environmental restoration and sustainability?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    At Meaningful Planet, we're committed to making a positive impact on the environment. We dedicate 10% of our revenue to funding nature restoration projects across the UK, such as rewilding, habitat restoration, and conservation initiatives. Additionally, we support projects that offset our digital carbon footprint.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    What is Meaningful Planet, and how is it different from other mobile network providers?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Meaningful Planet is a UK-based sustainable mobile network provider that offers exceptional mobile plans, broadband, and consumer services while dedicating 10% of its revenue to environmental restoration projects. We stand out by providing top-rated coverage, 5G access, free EU roaming, and transparent pricing, all while supporting nature conservation efforts throughout the UK.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    Are there any hidden fees or charges with Meaningful Planet's mobile plans?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    No, we believe in transparent and fair pricing. Our mobile plans come with clear, upfront pricing and no hidden fees or surprises. You can trust that the price you see is the price you'll pay. This is the case for both our consumer and business plans. Simple, fair, transparent pricing that you can rely on.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    How can I manage my account and mobile plan with Meaningful Planet?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Managing your account is easy with our user-friendly mobile apps (available for both Android and Apple devices) and online portal. You can view your usage, pay bills, adjust your plan, and access customer support all in one place. We also provide helpful resources and guides to ensure you get the most out of your sustainable mobile experience.
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    How can I contact Meaningful Planet for support or questions?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Our friendly and knowledgeable customer support team is here to help. You can reach us via our online Live Chat, through our apps, or directly by emailing our customer support or phoning. Full details, as well as a searchable FAQ, are available at <a class="underline" href="https://help.meaningfulplanet.co.uk/" target="_blank">https://help.meaningfulplanet.co.uk/</a>
                </div>
            </div>
        
            <div class="faq-item">
                <button class="faq-question">
                    How can I learn more about Meaningful Planet's environmental initiatives and impact?
                    <img class="faq-icon" src="images/icons/chevron-down.svg" alt="Expand">
                </button>
                <div class="faq-answer">
                    Meaningful Planet is proud to support a diverse array of environmental initiatives across the UK through our partnerships with regional environmental organisations. You can find full details of the projects we are supporting at <a class="underline" href="https://meaningfulplanet.co.uk/impact" target="_blank">https://meaningfulplanet.co.uk/impact</a>.<br><br>
                    From the underwater kelp forests of Sussex to the Peatland of Yorkshire, we're working to restore and protect the nation's most precious ecosystems. Our impact spans a wide range of conservation approaches, including habitat restoration, species reintroduction, and community engagement.<br><br>
                    In the Great Fen, we're helping to transform abandoned farmland into thriving wetlands. In Northamptonshire, we're reintroducing beavers after a 400-year absence to naturally manage waterways. And in the Humber estuary, we're rebuilding oyster reefs to filter water and protect coastlines.<br><br>
                    These are just a few examples of the tangible, on-the-ground projects your mobile service is helping to fund. By supporting Meaningful Planet, you're not only getting access to top-rated coverage and transparent pricing - you're also joining a community of conscious consumers who are making a real difference for nature. Every mobile plan contributes directly to the restoration of the UK's wild spaces and the protection of its most vulnerable species. Together, we're creating a network that's not just about better connection, but about a better future for our planet.
                </div>
            </div>
        </div>
    `;

    const scriptTag = document.currentScript;
    scriptTag.parentNode.insertBefore(faq, scriptTag.nextSibling);

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('open');
        });
    });
}